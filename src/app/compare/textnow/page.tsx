import Link from "next/link";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildComparisonPageJsonLd,
} from "@/lib/metadata-helpers";
import Image from "next/image";
import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const PAGE_TITLE = "VeraDial vs TextNow — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and TextNow side by side. See how verified business calling with AI agents and caller ID control compares to a free ad-supported calling app.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/textnow",
  keywords: [
    "TextNow alternative",
    "VeraDial vs TextNow",
    "TextNow comparison",
    "TextNow for business alternative",
    "business caller ID",
    "free calling app alternative",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  textnow: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "Caller ID control (choose your outbound number)",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "Voice effects (Male, Female, Privacy)",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "Choose number by area code / pattern",
    veradial: "yes",
    textnow: "partial",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    textnow: "yes",
  },
  {
    feature: "MMS / group messaging",
    veradial: "no",
    textnow: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    textnow: "partial",
  },
  {
    feature: "Free tier (ad-supported)",
    veradial: "no",
    textnow: "yes",
  },
  {
    feature: "Ad-free experience",
    veradial: "yes",
    textnow: "Paid plan",
  },
  {
    feature: "Web app",
    veradial: "no",
    textnow: "yes",
  },
  {
    feature: "SIM card / cellular service",
    veradial: "no",
    textnow: "yes",
  },
  {
    feature: "Number retained without activity",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "Carrier-grade infrastructure (Twilio)",
    veradial: "yes",
    textnow: "no",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    textnow: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    textnow: "yes",
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
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. TextNow has no AI calling capability.",
  },
  {
    title: "Verified caller identity",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation. Recipients see a verified call, not an unknown number. TextNow assigns you a free VoIP number with no carrier-level verification, which can be flagged by recipients.",
  },
  {
    title: "You control which number appears",
    description:
      "VeraDial lets you choose your outbound caller ID, add verified secondary numbers, and pick numbers by area code or pattern. TextNow assigns you one free number with limited area code choice and no ability to change what recipients see.",
  },
  {
    title: "Professional voice effects",
    description:
      "VeraDial uses FFT-based formant shifting for natural-sounding voice modes — Male, Female, and Privacy. Whether for anonymity or professional reasons, you sound natural, not robotic. TextNow offers no voice modification.",
  },
  {
    title: "Your number stays yours",
    description:
      "VeraDial numbers are dedicated to your account and never reclaimed for inactivity. TextNow recycles inactive numbers after 30 days, which means you could lose the number your contacts know you by.",
  },
  {
    title: "Built for business, not just free calls",
    description:
      "VeraDial is purpose-built for outbound business calling — sales teams, solo operators, field services. TextNow is designed as a free phone replacement for personal use. Different tools for different jobs.",
  },
];

export default function CompareTextNowPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs TextNow", path: "/compare/textnow" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/textnow",
    comparedName: "TextNow",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <nav className="mb-4 text-sm text-text-muted">
            <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-text-secondary transition-colors">Compare</Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">TextNow</span>
          </nav>
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs TextNow
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            TextNow gives you a free phone number for calling and texting.
            VeraDial gives you a verified business identity with AI agents,
            voice effects, and caller ID control. Here&apos;s how they compare.
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
                    Dedicated numbers with carrier-level verification. Your calls
                    display as <strong className="text-accent">verified</strong>{" "}
                    on the recipient&apos;s device. Choose your number, control your
                    caller ID, record calls, apply voice effects, and dispatch AI
                    agents — all from one professional identity.
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
                      TN
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      TextNow
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Free calling and texting app with an ad-supported model.
                    Assigns you one US or Canadian number for unlimited VoIP
                    calls and texts. Great for personal use on a budget, but no
                    caller ID control, no AI calling, and numbers can be
                    reclaimed after 30 days of inactivity.
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
                  TextNow
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
                    <CellIcon value={row.textnow} />
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
              Free calls are great. Verified business identity is better.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              TextNow is excellent for personal use on a budget. But when you&apos;re
              calling prospects, clients, or patients, you need calls that land
              as trusted — with a number you control and an identity carriers
              verify.
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
                Ready to Upgrade?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Go beyond free. Go verified.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated number with carrier-level verification, AI
                calling, and full caller ID control. Your calls land as trusted
                from the first ring.
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
