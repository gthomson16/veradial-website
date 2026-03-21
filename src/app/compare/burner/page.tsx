import type { Metadata } from "next";
import Image from "next/image";
import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "VeraDial vs Burner — Comparison",
  description:
    "Compare VeraDial and Burner side by side. See how verified business calling with AI agents and STIR/SHAKEN attestation stacks up against disposable phone numbers.",
  keywords: [
    "Burner alternative",
    "VeraDial vs Burner",
    "Burner app comparison",
    "disposable phone number alternative",
    "business caller ID",
    "verified calling",
    "STIR SHAKEN",
  ],
};

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  burner: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Calls display as verified on recipient's phone",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Voice effects",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    burner: "yes",
  },
  {
    feature: "Multiple simultaneous numbers",
    veradial: "no",
    burner: "yes",
  },
  {
    feature: "Auto-expiring numbers",
    veradial: "no",
    burner: "yes",
  },
  {
    feature: "Low-cost subscription ($4.99/mo)",
    veradial: "yes",
    burner: "$4.99/mo+",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Call forwarding & AI screening",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Carrier-grade infrastructure (Twilio)",
    veradial: "yes",
    burner: "no",
  },
  {
    feature: "Integrations (Slack, Dropbox, webhooks)",
    veradial: "no",
    burner: "partial",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    burner: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    burner: "yes",
  },
];

function CellIcon({ value }: { value: string }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
        <Check size={14} className="text-accent" />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
        <X size={14} className="text-text-muted" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-secondary)]/15">
        <Minus size={14} className="text-[var(--color-accent-secondary)]" />
      </span>
    );
  }
  return (
    <span className="text-sm text-text-secondary">{value}</span>
  );
}

const DIFFERENTIATORS = [
  {
    title: "Trusted identity, not disposable anonymity",
    description:
      "Burner is built around throwaway numbers you discard after use. VeraDial gives you a dedicated number with STIR/SHAKEN A-level attestation, so every call you make shows as verified. You build a consistent, trusted identity instead of cycling through disposable ones.",
  },
  {
    title: "AI makes calls for you",
    description:
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. Burner has no AI calling capability.",
  },
  {
    title: "Voice effects for privacy and flexibility",
    description:
      "VeraDial uses FFT-based formant shifting for natural-sounding voice modes — Male, Female, and Privacy. Whether you need a subtle disguise or a different vocal presence, it sounds natural, not robotic. Burner offers no voice effects at all.",
  },
  {
    title: "Call recording built in",
    description:
      "Toggle recording on any call — regular or AI — and get both sides captured. Recordings are stored in your call history for easy access. Burner doesn't offer call recording, so you'd need a separate app.",
  },
  {
    title: "Simple, transparent pricing",
    description:
      "VeraDial is $4.99/mo for a dedicated line with a 3-day free trial, plus credit packs that never expire. Burner also charges $4.99/mo per line, but without AI calling, voicemail transcription, or call forwarding included.",
  },
  {
    title: "Carrier-grade infrastructure",
    description:
      "VeraDial runs on Twilio's carrier-grade network with full STIR/SHAKEN compliance. Calls are routed through verified telecom infrastructure, not consumer-grade VoIP. This means better call quality and higher answer rates.",
  },
];

export default function CompareBurnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Burner
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Burner gives you disposable phone numbers that expire after use.
            VeraDial gives you a verified number with AI calling, voice effects,
            and carrier-level trust. Here's how they compare.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#comparison">
              See Full Comparison
            </Button>
          </div>
        </div>
      </section>

      {/* Core difference callout */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <Card hover={false} className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-border p-8 md:border-b-0 md:border-r">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icon.png"
                      alt="VeraDial"
                      width={36}
                      height={36}
                      className="rounded-xl"
                    />
                    <span className="font-display text-xl font-semibold text-text-primary">
                      VeraDial
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A dedicated number with carrier-level verification. Your
                    calls display as{" "}
                    <strong className="text-accent">verified</strong> on the
                    recipient's device. Make calls, send texts, record
                    conversations, apply voice effects, and dispatch AI agents —
                    all from one trusted identity. Pay as you go with credit
                    packs.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      A-Level Attestation
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 text-sm font-bold text-text-muted">
                      B
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Burner
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Disposable phone numbers designed for short-term use. Create
                    temporary lines for calling and texting, then burn them when
                    you're done. Also offers permanent "mini phone" lines.
                    Privacy-focused with auto-expiring numbers, but no call
                    verification, AI calling, or voice effects.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-muted" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                      No Attestation
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature comparison table */}
      <section id="comparison" className="relative py-20 scroll-mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Feature by Feature
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Side-by-side comparison
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_100px_100px] items-center border-b border-border bg-card/80 px-5 py-4 sm:grid-cols-[1fr_140px_140px] sm:px-6">
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Feature
                </span>
                <span className="text-center text-xs uppercase tracking-[0.2em] text-accent">
                  VeraDial
                </span>
                <span className="text-center text-xs uppercase tracking-[0.2em] text-text-muted">
                  Burner
                </span>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_100px_100px] items-center px-5 py-4 sm:grid-cols-[1fr_140px_140px] sm:px-6 ${
                    index !== COMPARISON_ROWS.length - 1
                      ? "border-b border-border"
                      : ""
                  } ${index % 2 === 0 ? "bg-card/40" : "bg-transparent"}`}
                >
                  <span className="text-sm text-text-secondary pr-4">
                    {row.feature}
                  </span>
                  <span className="flex justify-center">
                    <CellIcon value={row.veradial} />
                  </span>
                  <span className="flex justify-center">
                    <CellIcon value={row.burner} />
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of March 2026.
              Features may change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Why It Matters
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Disposable numbers expire. Verified identity compounds.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Burner is great for one-off privacy scenarios. But if you're making
              business calls, following up with clients, or building relationships
              over the phone, you need a number people recognize and trust —
              one that carriers verify instead of flag.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <h3 className="font-display text-xl text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                More than a burner. A verified identity.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated number with carrier-level verification, AI
                calling, voice effects, and call recording. Start with a 3-day
                free trial.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Learn More
                </Button>
              </div>
              <StoreBadges className="mt-6 justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
