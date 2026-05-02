"use client";

import { useCallback, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DEMO_FUNNEL_CONTRACT_VERSION } from "@/lib/calls/contract";
import type { DemoCallCreateResponse } from "@/lib/calls/types";
import { DEMO_COPY_VERSION } from "@/lib/demo-copy";
import { DEMO_PRESETS } from "@/lib/demo-presets";
import { ConsentBlock } from "./ConsentBlock";
import { PhoneInput } from "./PhoneInput";
import { PresetPicker } from "./PresetPicker";
import { TurnstileWidget } from "./TurnstileWidget";

export function DemoCallForm() {
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState(DEMO_PRESETS[0]?.id ?? "");
  const [phone, setPhone] = useState("");
  const [e164, setE164] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleValidPhone = useCallback((nextE164: string | null) => {
    setE164(nextE164);
  }, []);

  const handleToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const canSubmit = Boolean(selectedPreset && e164 && consent && turnstileToken) && !isPending;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || !e164) return;

    setError(null);
    startTransition(async () => {
      try {
        const response = await fetch("/api/demo-call", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            preset: selectedPreset,
            phone: e164,
            consent: true,
            turnstileToken,
            copyVersion: DEMO_COPY_VERSION,
            contractVersion: DEMO_FUNNEL_CONTRACT_VERSION,
          }),
        });

        const data = (await response.json()) as DemoCallCreateResponse | { error?: string };
        if (!response.ok || !("listenToken" in data)) {
          const message = "error" in data ? data.error : null;
          throw new Error(message ?? "Unable to start the demo call.");
        }

        const params = new URLSearchParams({
          token: data.listenToken,
          nonce: data.nonce,
          from: data.smsFromNumber,
        });
        router.push(`/try/${data.id}?${params.toString()}`);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to start the demo call.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          Choose a call
        </p>
        <PresetPicker
          value={selectedPreset}
          onChange={setSelectedPreset}
          presets={DEMO_PRESETS}
          disabled={isPending}
        />
      </section>

      <section className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[1fr_0.9fr]">
        <PhoneInput
          value={phone}
          onChange={setPhone}
          onValid={handleValidPhone}
          autoFocus
          disabled={isPending}
        />
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/[0.08] text-accent">
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-text-primary">
                Verification by SMS
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                VeraDial sends a short text first. The AI call starts only after the phone owner
                replies with the one-time code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsentBlock
        checked={consent}
        onChange={setConsent}
        variant="demo"
        disabled={isPending}
      />

      <TurnstileWidget
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onToken={handleToken}
        action="demo_call_request"
        disabled={isPending}
      />

      {error ? (
        <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={!canSubmit}
        className="h-14 w-full rounded-2xl disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isPending ? "Starting..." : "Start demo call"}
        <ArrowRight size={18} aria-hidden="true" />
      </Button>
    </form>
  );
}
