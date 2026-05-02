import type { Metadata } from "next";
import Link from "next/link";
import { DemoCallForm } from "@/components/calls/DemoCallForm";
import { OrbCanvas } from "@/components/orb/OrbCanvas";
import { Badge } from "@/components/ui/Badge";
import { DEMO_FUNNEL_CONTRACT_VERSION } from "@/lib/calls/contract";
import { useMockCallsByDefault } from "@/lib/demo-flags";

export const metadata: Metadata = {
  title: "Try VeraDial",
  description: "Try a live AI-powered VeraDial demo call.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TryPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(115,242,195,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl font-semibold">
            <span className="text-text-primary">Vera</span>
            <span className="text-accent">Dial</span>
          </Link>
          <Badge variant="hero">
            {useMockCallsByDefault ? "Preview mode" : `Contract ${DEMO_FUNNEL_CONTRACT_VERSION}`}
          </Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full"
                style={{
                  maskImage:
                    "radial-gradient(circle closest-side at center, #000 70%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle closest-side at center, #000 70%, transparent 100%)",
                }}
              >
                <OrbCanvas state="live_idle" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Try VeraDial
              </p>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] text-text-primary sm:text-6xl">
              Hear an AI call happen live.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              Choose a short scenario, verify by SMS, and watch the transcript stream as VeraDial
              places the call.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm leading-relaxed text-text-secondary">
                The demo calls a real phone number only after the recipient replies with the
                one-time verification code. Public launch remains flag-gated until backend staging
                signs off.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7">
            <DemoCallForm />
          </div>
        </div>
      </div>
    </section>
  );
}
