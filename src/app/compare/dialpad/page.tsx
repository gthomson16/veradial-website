import Link from "next/link";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildComparisonPageJsonLd,
} from "@/lib/metadata-helpers";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { BottomLine } from "@/components/compare/BottomLine";
import { COMPARE_VERDICTS } from "@/lib/compare-verdicts";

const PAGE_TITLE = "VeraDial vs Dialpad — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and Dialpad side by side. See how personal AI calling with caller ID control compares to an enterprise-grade contact center platform.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/dialpad",
  keywords: [
    "Dialpad alternative",
    "VeraDial vs Dialpad",
    "Dialpad comparison",
    "Dialpad for solopreneurs",
    "business calling app",
    "AI calling",
    "small business phone",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  dialpad: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    dialpad: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    dialpad: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    dialpad: "no",
  },
  {
    feature: "AI transcription & summaries",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "AI coaching & sentiment analysis",
    veradial: "no",
    dialpad: "yes",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "Video conferencing",
    veradial: "no",
    dialpad: "yes",
  },
  {
    feature: "Contact center features",
    veradial: "no",
    dialpad: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    dialpad: "$15/user/mo",
  },
  {
    feature: "Setup complexity",
    veradial: "Instant (download app)",
    dialpad: "Moderate (admin setup)",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    dialpad: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    dialpad: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI that calls, not just AI that listens",
    description:
      "Dialpad\u2019s AI transcribes, summarizes, and coaches during calls. VeraDial\u2019s AI actually makes the calls \u2014 scheduling appointments, running follow-ups, handling outbound conversations autonomously. You get a transcript and summary when the AI is done.",
  },
  {
    title: "Caller ID you control",
    description:
      "VeraDial lets you verify existing numbers as secondary caller IDs and choose what the recipient sees. Dialpad locks caller ID to numbers assigned within its system \u2014 no outbound caller ID control for individual users.",
  },
  {
    title: "Built for one person, not a department",
    description:
      "Dialpad is designed for teams and contact centers \u2014 per-seat pricing, admin consoles, department routing, agent coaching. If you\u2019re a solo professional, you\u2019re paying for infrastructure you\u2019ll never use. VeraDial is $9.99/mo with everything a single operator needs.",
  },
  {
    title: "Verified, not just connected",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation. Your calls display as verified on the recipient\u2019s device. Dialpad doesn\u2019t market carrier-level attestation for individual outbound calls.",
  },
  {
    title: "Zero setup, instant start",
    description:
      "Download VeraDial, pick a number, and start calling in under two minutes. Dialpad requires workspace setup, admin configuration, and onboarding \u2014 designed for IT teams deploying to organizations, not individuals getting started fast.",
  },
];

export default function CompareDialpadPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs Dialpad", path: "/compare/dialpad" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/dialpad",
    comparedName: "Dialpad",
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
            <span className="text-text-secondary">Dialpad</span>
          </nav>
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Dialpad
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Dialpad is an enterprise communication platform built for scaling
            teams and contact centers. VeraDial is built for solo professionals
            who need AI to make calls, control their identity, and get more
            done. Here&apos;s how they compare.
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
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-xl"
                    />
                    <span className="font-display text-xl font-semibold text-text-primary">
                      VeraDial
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Personal AI calling for solo professionals. Your AI agent
                    makes calls for you, your caller ID is verified and
                    controlled, and call recording gives you flexibility &mdash;
                    all for $9.99/mo with no per-seat pricing or admin setup.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      AI Agent Calling
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/18 text-sm font-bold text-text-primary">
                      DP
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Dialpad
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    An enterprise-grade communication platform with AI-powered
                    transcription, coaching, and analytics. Built for teams and
                    contact centers with per-seat pricing, admin consoles, and
                    department routing. Powerful &mdash; but overkill for
                    individuals.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Enterprise UCaaS
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
            <ComparisonTable
              caption="Feature comparison between VeraDial and Dialpad"
              primaryLabel="VeraDial"
              secondaryLabel="Dialpad"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.dialpad,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of April 2026.
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
              You need an AI caller, not a contact center.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Dialpad is impressive technology built for enterprises. But if
              you&apos;re a solo professional, freelancer, or small business
              owner, you don&apos;t need per-seat pricing, contact center
              routing, or agent coaching dashboards. You need AI that makes
              calls for you and a caller ID people trust.
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

      <BottomLine verdict={COMPARE_VERDICTS.dialpad} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Simplify?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Enterprise AI calling features. Solo pricing.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get AI agents, verified caller ID, call recording, and
                transcription &mdash; without the enterprise complexity or per-seat
                pricing.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Explore VeraDial Features
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
