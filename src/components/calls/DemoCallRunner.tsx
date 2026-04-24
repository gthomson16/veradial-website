"use client";

import Link from "next/link";
import { MessageSquareText, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMockCallsByDefault } from "@/lib/demo-flags";
import { CallStatus } from "./CallStatus";
import { LiveTranscript } from "./LiveTranscript";
import { useCallEvents } from "./useCallEvents";

type DemoCallRunnerProps = {
  demoCallId: string;
  token: string;
  nonce?: string;
  smsFromNumber?: string;
};

function apiBase() {
  return (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");
}

export function DemoCallRunner({
  demoCallId,
  token,
  nonce,
  smsFromNumber,
}: DemoCallRunnerProps) {
  const useMock = useMockCallsByDefault;
  const base = apiBase();
  const endpoint = useMock
    ? `mock:${demoCallId}`
    : `${base}/api/v1/demo-calls/${demoCallId}/events?token=${encodeURIComponent(token)}`;
  const cancelEndpoint = useMock
    ? undefined
    : `${base}/api/v1/demo-calls/${demoCallId}/cancel?token=${encodeURIComponent(token)}`;

  const { status, turns, summary, isConnected, isCanceling, error, contractMismatch, cancel } =
    useCallEvents({
      endpoint,
      cancelEndpoint,
      useMock,
      mockCallId: demoCallId,
      enabled: Boolean(token) || useMock,
    });

  const smsHref =
    smsFromNumber && nonce
      ? `sms:${smsFromNumber}?&body=${encodeURIComponent(`YES ${nonce}`)}`
      : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <aside className="space-y-4">
        <CallStatus status={status} />

        {contractMismatch ? (
          <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-100">
            Contract mismatch: expected {contractMismatch.expected}, received{" "}
            {contractMismatch.received}.
          </div>
        ) : null}

        {smsHref ? (
          <a
            href={smsHref}
            className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/[0.08] p-4 text-text-primary transition-colors hover:bg-accent/[0.12]"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-bg">
              <MessageSquareText size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold">Reply YES {nonce}</span>
              <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
                Tap to open the SMS reply on mobile.
              </span>
            </span>
          </a>
        ) : null}

        {error ? (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-text-secondary">
            {isConnected
              ? "Live updates connected."
              : status === "completed" || status === "canceled"
                ? "Live updates closed."
                : "Connecting to live updates..."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => void cancel()}
              disabled={isCanceling || status === "completed" || status === "canceled"}
              className="rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              <PhoneOff size={16} aria-hidden="true" />
              {isCanceling ? "Canceling..." : "Cancel"}
            </Button>
            <Link
              href="/try"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-white/2 px-6 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-white/4 hover:text-text-primary"
            >
              New demo
            </Link>
          </div>
        </div>
      </aside>

      <LiveTranscript turns={turns} summary={summary} />
    </div>
  );
}
