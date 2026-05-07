"use client";

import { useCallback, useState, useTransition } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TurnstileWidget } from "@/components/calls/TurnstileWidget";
import { trackBuilderEvent } from "@/lib/analytics";
import type { BuilderGenerateResponse, DemoProfile } from "@/lib/builder/types";
import { BuilderPreview } from "./BuilderPreview";

export function BuilderForm() {
  const [url, setUrl] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [profile, setProfile] = useState<DemoProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorKind, setErrorKind] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const canSubmit =
    Boolean(url.trim() && turnstileToken) && !isPending && isLikelyUrl(url);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    setError(null);
    setErrorKind(null);
    setProfile(null);
    trackBuilderEvent("demo_builder_started");

    startTransition(async () => {
      try {
        const response = await fetch("/api/demo-builder", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ url: url.trim(), turnstileToken }),
        });

        const data = (await response.json()) as BuilderGenerateResponse;

        if (!response.ok || !("profile" in data)) {
          const message =
            "error" in data ? data.error : "Unable to build a profile.";
          const kind = "errorKind" in data ? data.errorKind : undefined;
          setError(message);
          setErrorKind(kind ?? null);
          trackBuilderEvent("demo_builder_failed", {
            error_kind: kind ?? "unknown",
            status: response.status,
          });
          return;
        }

        setProfile(data.profile);
        trackBuilderEvent("demo_builder_succeeded", {
          confidence: data.profile.confidence.overall,
          services_count: data.profile.services.length,
        });
      } catch {
        setError("Network error. Please try again.");
        trackBuilderEvent("demo_builder_failed", { error_kind: "network" });
      }
    });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="builder-url"
            className="block text-sm font-medium text-white/80 mb-2"
          >
            Your business website
          </label>
          <input
            id="builder-url"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://yourbusiness.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isPending}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
          />
        </div>

        <TurnstileWidget
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onToken={handleToken}
          action="demo_builder_generate"
          disabled={isPending}
        />

        <Button type="submit" disabled={!canSubmit} className="w-full">
          {isPending ? "Building preview…" : "Build preview"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="flex items-center gap-2 text-xs text-white/50">
          <ShieldCheck className="h-3.5 w-3.5" />
          We only read public info from your site. Nothing is saved.
        </p>
      </form>

      {error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
          {errorKind ? (
            <span className="block text-xs opacity-70 mt-1">({errorKind})</span>
          ) : null}
        </div>
      ) : null}

      {profile ? <BuilderPreview profile={profile} /> : null}
    </div>
  );
}

function isLikelyUrl(value: string): boolean {
  try {
    const u = new URL(value.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
