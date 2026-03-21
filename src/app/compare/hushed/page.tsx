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
  title: "VeraDial vs Hushed — Comparison",
  description:
    "Compare VeraDial and Hushed side by side. See how verified business calling with AI agents and STIR/SHAKEN attestation stacks up against a privacy-focused second number app.",
  keywords: [
    "Hushed alternative",
    "VeraDial vs Hushed",
    "Hushed comparison",
    "second phone number app",
    "business caller ID",
    "verified calling",
    "STIR SHAKEN",
  ],
};

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  hushed: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "Calls display as verified on recipient's phone",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "Voice effects (Male, Female, Privacy)",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "SMS from your number",
    veradial: "yes",
    hushed: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    hushed: "partial",
  },
  {
    feature: "Call forwarding & AI screening",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "Multiple numbers simultaneously",
    veradial: "no",
    hushed: "yes",
  },
  {
    feature: "International numbers (UK, etc.)",
    veradial: "no",
    hushed: "yes",
  },
  {
    feature: "Low-cost subscription ($4.99/mo)",
    veradial: "yes",
    hushed: "partial",
  },
  {
    feature: "Carrier-grade infrastructure (Twilio)",
    veradial: "yes",
    hushed: "no",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    hushed: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    hushed: "yes",
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
    title: "Verified identity, not just anonymity",
    description:
      "Hushed gives you an anonymous number that hides who you are. VeraDial gives you a verified number that proves who you are. With STIR/SHAKEN A-level attestation, your calls display as trusted -- not flagged as unknown or spam.",
  },
  {
    title: "AI makes calls for you",
    description:
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. Hushed has no AI calling capability.",
  },
  {
    title: "Voice effects for every situation",
    description:
      "VeraDial uses FFT-based formant shifting for natural-sounding voice modes -- Male, Female, and Privacy. Whether you need voice disguise for safety or a professional presentation, the technology sounds natural. Hushed offers no voice effects.",
  },
  {
    title: "Record every call",
    description:
      "Toggle call recording on any outbound call -- regular or AI. Both sides of the conversation are captured and stored in your call history. Hushed does not offer call recording.",
  },
  {
    title: "More features for the price",
    description:
      "VeraDial is $4.99/mo with a 3-day free trial, plus credit packs that never expire. Your subscription includes voicemail transcription, call forwarding, and AI call screening — features Hushed doesn't offer at any price.",
  },
  {
    title: "Built for business outreach",
    description:
      "VeraDial is designed for professionals who need consistent, verified outbound identity -- sales teams, solo operators, and field services. Hushed is built for personal privacy and anonymous communication, a different use case entirely.",
  },
];

export default function CompareHushedPage() {
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
            VeraDial vs Hushed
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Hushed gives you anonymous second numbers for privacy. VeraDial
            gives you a verified business number that carriers trust. Here's
            how they compare.
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
                    A dedicated phone number with carrier-level verification.
                    Your calls display as{" "}
                    <strong className="text-accent">verified</strong> on the
                    recipient's device. Make calls, send texts, record
                    conversations, apply voice effects, and dispatch AI agents
                    to call on your behalf -- all from one professional
                    identity.
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
                      H
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Hushed
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A privacy-focused second number app for anonymous calling
                    and texting. Get temporary or permanent numbers from the
                    US, Canada, and UK. Supports multiple numbers at once with
                    voicemail. Designed for personal privacy rather than
                    business identity.
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
                  Hushed
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
                    <CellIcon value={row.hushed} />
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
              Privacy is great. Verified identity is better for business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Hushed is built for people who want to stay anonymous. VeraDial
              is built for people who want to be recognized and trusted.
              Different goals, different tools.
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
                From anonymous to authoritative.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated number with carrier-level verification, AI
                calling, and voice effects. Your calls land as trusted from
                the first ring.
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
