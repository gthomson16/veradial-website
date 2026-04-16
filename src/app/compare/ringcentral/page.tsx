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

const PAGE_TITLE = "VeraDial vs RingCentral — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and RingCentral side by side. See how focused AI calling with verified caller ID compares to a full unified communications suite.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/ringcentral",
  keywords: [
    "RingCentral alternative",
    "VeraDial vs RingCentral",
    "RingCentral comparison",
    "RingCentral for small business",
    "cheap RingCentral alternative",
    "AI calling app",
    "business phone number",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  ringCentral: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    ringCentral: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    ringCentral: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    ringCentral: "partial",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "AI call notes & summaries",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "Video conferencing",
    veradial: "no",
    ringCentral: "yes",
  },
  {
    feature: "Team messaging",
    veradial: "no",
    ringCentral: "yes",
  },
  {
    feature: "Internet fax",
    veradial: "no",
    ringCentral: "yes",
  },
  {
    feature: "Integrations (Salesforce, Slack, etc.)",
    veradial: "no",
    ringCentral: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    ringCentral: "$20/user/mo",
  },
  {
    feature: "Setup complexity",
    veradial: "Instant (download app)",
    ringCentral: "Complex (admin portal)",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    ringCentral: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    ringCentral: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI that makes calls, not just notes",
    description:
      "RingCentral added AI for meeting summaries and call notes. VeraDial\u2019s AI actually makes calls on your behalf \u2014 scheduling, reminders, outbound conversations \u2014 and delivers a full transcript when done. That\u2019s a fundamentally different capability.",
  },
  {
    title: "Pay for what you use",
    description:
      "RingCentral starts at $20/user/mo for a full UCaaS suite \u2014 video, messaging, fax, integrations. VeraDial is $9.99/mo for focused AI calling with verified identity. If you don\u2019t need video conferencing and team messaging, you\u2019re paying double for features you\u2019ll never touch.",
  },
  {
    title: "Control your caller identity",
    description:
      "VeraDial lets you verify existing numbers as secondary caller IDs, giving you full control over your outbound identity. RingCentral ties caller ID to assigned extensions \u2014 no flexibility to present different numbers to different contacts.",
  },
  {
    title: "Start in minutes, not days",
    description:
      "Download VeraDial, pick your number, and start calling. RingCentral requires admin portal setup, extension configuration, user provisioning, and potentially IT involvement. Built for organizations, not individuals.",
  },
  {
    title: "Verified identity that builds trust",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation, so every call displays as verified. RingCentral supports STIR/SHAKEN but doesn\u2019t consistently guarantee A-level attestation for all outbound calls across all configurations.",
  },
];

export default function CompareRingCentralPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs RingCentral", path: "/compare/ringcentral" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/ringcentral",
    comparedName: "RingCentral",
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
            <span className="text-text-secondary">RingCentral</span>
          </nav>
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs RingCentral
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            RingCentral is a full unified communications suite with phone,
            video, messaging, and fax. VeraDial is focused AI calling with
            verified identity and voice control. Here&apos;s how they compare.
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
                    Focused AI calling for solo professionals. Your AI agent
                    handles outbound calls, your identity is verified at the
                    carrier level, and call recording gives you control &mdash;
                    all for $9.99/mo. One app, one purpose, done well.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Focused AI Calling
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/18 text-sm font-bold text-text-primary">
                      RC
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      RingCentral
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A full unified communications platform &mdash; phone, video
                    conferencing, team messaging, fax, and hundreds of
                    integrations. Built for mid-market and enterprise
                    organizations with admin portals and per-seat licensing.
                    Comprehensive, but complex and expensive for individuals.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Full UCaaS Suite
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
              caption="Feature comparison between VeraDial and RingCentral"
              primaryLabel="VeraDial"
              secondaryLabel="RingCentral"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.ringCentral,
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
              You don&apos;t need a communications suite. You need calls that
              get answered.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              RingCentral is a powerhouse for organizations that need video,
              messaging, fax, and phone in one platform. But if you&apos;re an
              individual who needs AI calling, verified identity, and call
              recording &mdash; you&apos;re paying $20/mo for a dashboard
              you&apos;ll never fully use.
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
                Ready to Focus?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                All the AI calling. None of the bloat.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get AI agents, verified caller ID, call recording, and
                transcription at half the price &mdash; without the enterprise
                complexity.
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
