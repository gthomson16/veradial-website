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
  title: "VeraDial vs Google Voice — Comparison",
  description:
    "Compare VeraDial and Google Voice side by side. See how AI-powered business calling with verified caller ID stacks up against Google's free second number.",
  keywords: [
    "Google Voice alternative",
    "VeraDial vs Google Voice",
    "Google Voice for business alternative",
    "business caller ID",
    "Google Voice comparison",
    "STIR SHAKEN",
    "AI calling",
  ],
};

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  googleVoice: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "Voice effects (Male, Female, Privacy)",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    googleVoice: "partial",
  },
  {
    feature: "Choose number by area code / pattern",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    googleVoice: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Free for personal use",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Web app",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Multi-device support (phone, web, desktop)",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Google ecosystem integration (Calendar, Meet)",
    veradial: "no",
    googleVoice: "yes",
  },
  {
    feature: "Canadian numbers",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "No Google account required",
    veradial: "yes",
    googleVoice: "no",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    googleVoice: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    googleVoice: "yes",
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
    title: "AI makes calls for you",
    description:
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. Google Voice has no AI calling capability.",
  },
  {
    title: "Verified caller identity",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation, so recipients see a verified call — not an unknown or flagged number. Google Voice doesn't offer the same level of carrier-verified identity for outbound calls.",
  },
  {
    title: "You choose your number",
    description:
      "Search and purchase numbers by area code, region, or pattern. Present the exact local presence you need. Google Voice assigns you a number from a limited pool — you don't get fine-grained control over what number you get.",
  },
  {
    title: "Voice effects for privacy",
    description:
      "VeraDial uses FFT-based formant shifting for natural-sounding voice modes — Male, Female, and Privacy. Protect your identity on sensitive calls without sounding robotic. Google Voice has no voice modification features.",
  },
  {
    title: "Record every call",
    description:
      "Toggle call recording on any outbound call — regular or AI. Both sides are captured and stored in your call history. Google Voice's personal plan doesn't support call recording, and the business tier only records inbound calls.",
  },
  {
    title: "No ecosystem lock-in",
    description:
      "VeraDial works independently — no Google account, no Workspace subscription, no ecosystem required. Google Voice is tightly coupled to Google's ecosystem and requires a US Google account to use.",
  },
];

export default function CompareGoogleVoicePage() {
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
            VeraDial vs Google Voice
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Google Voice gives you a free second number. VeraDial gives you
            verified business calling with AI agents, caller ID control, and
            voice effects. Here's how they compare.
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
                    Purpose-built for business outbound calling. Choose your
                    number, control your caller ID, dispatch AI agents, and
                    record every call — all with{" "}
                    <strong className="text-accent">
                      STIR/SHAKEN A-level verification
                    </strong>
                    . No Google account or ecosystem lock-in required.
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
                      GV
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Google Voice
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A free second phone number from Google for calling, texting,
                    and voicemail. Works across phone, web, and desktop with deep
                    Google ecosystem integration. Great for personal use, but
                    limited caller ID control and no AI or voice features.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-muted" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                      Free Personal Tier
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
                  Google Voice
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
                    <CellIcon value={row.googleVoice} />
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of March 2026.
              Features may change. Google Voice recording is available on
              Workspace plans for inbound calls only.
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
              A free number is great. A business calling platform is better.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Google Voice is an excellent personal communication tool. But when
              you need caller ID control, verified identity, AI agents, and call
              recording for business — VeraDial is purpose-built for the job.
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
                Ready to Level Up?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                More than a second number.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get verified caller ID, AI agents, voice effects, and call
                recording — everything Google Voice doesn't offer for business
                calling.
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
