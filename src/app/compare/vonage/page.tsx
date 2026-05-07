import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildComparisonPageJsonLd,
} from "@/lib/metadata-helpers";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { BottomLine } from "@/components/compare/BottomLine";
import { COMPARE_VERDICTS } from "@/lib/compare-verdicts";

const PAGE_TITLE = "VeraDial vs Vonage — AI Business Phone Alternative";
const PAGE_DESCRIPTION =
  "Compare VeraDial and Vonage: VeraDial is a $9.99/mo AI business phone app with verified caller ID, while Vonage is a broader legacy communications platform.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/vonage",
  keywords: [
    "Vonage alternative",
    "VeraDial vs Vonage",
    "Vonage Business comparison",
    "Vonage replacement",
    "business phone app",
    "AI calling app",
    "small business calling",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  vonage: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    vonage: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    vonage: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    vonage: "no",
  },
  {
    feature: "AI features",
    veradial: "AI agent calling",
    vonage: "Minimal",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    vonage: "partial",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    vonage: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    vonage: "yes",
  },
  {
    feature: "Video conferencing",
    veradial: "no",
    vonage: "yes",
  },
  {
    feature: "Team messaging",
    veradial: "no",
    vonage: "yes",
  },
  {
    feature: "Developer APIs",
    veradial: "no",
    vonage: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    vonage: "~$14/user/mo",
  },
  {
    feature: "Setup complexity",
    veradial: "Instant (download app)",
    vonage: "Moderate",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    vonage: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    vonage: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    vonage: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI that calls, not APIs to build your own",
    description:
      "Vonage is increasingly an API platform \u2014 if you want AI calling, you\u2019d build it yourself on their communications APIs. VeraDial gives you AI agent calling out of the box. Dispatch an agent, get a transcript. No code required.",
  },
  {
    title: "Modern product, active development",
    description:
      "Vonage was acquired by Ericsson in 2022 and has shifted focus toward its API platform. The business phone product receives less attention. VeraDial is actively developed and purpose-built for AI-powered business calling.",
  },
  {
    title: "Caller ID you control",
    description:
      "VeraDial lets you verify existing numbers as secondary caller IDs. Vonage Business ties caller ID to assigned extensions with no flexibility to present different numbers to different contacts.",
  },
  {
    title: "Solo-friendly pricing",
    description:
      "VeraDial is $9.99/mo per line with 100 credits and a 7-day free trial. Vonage starts at ~$14/user/mo with per-seat pricing designed for teams. If you\u2019re one person, you\u2019re paying a team premium for individual use.",
  },
  {
    title: "Verified calls that get answered",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation. Your calls display as verified. Vonage Business doesn\u2019t market carrier-level attestation, and its post-acquisition infrastructure changes make verification guarantees unclear.",
  },
];

const RELATED_GUIDES = [
  {
    title: "AI calling for small business",
    href: "/help/ai-calling-for-small-business",
    description:
      "What an out-of-the-box AI calling workflow looks like without building on APIs.",
  },
  {
    title: "Why business numbers get marked spam",
    href: "/help/why-business-number-marked-spam",
    description:
      "The caller trust problem behind verified business phone numbers.",
  },
] as const;

export default function CompareVonagePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs Vonage", path: "/compare/vonage" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/vonage",
    comparedName: "Vonage",
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
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Compare", href: "/compare" },
              { label: "Vonage" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Vonage
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Vonage is a legacy communications platform shifting toward developer
            APIs. VeraDial is a focused AI business phone app for operators who
            want verified caller ID, AI outbound calling, transcripts, and a
            simple $9.99/mo line.
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
                      src="/icon-216.webp"
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
                    Purpose-built AI calling for solo professionals. Your AI
                    agent handles outbound calls, your identity is
                    carrier-verified, and call recording keeps everything documented. Modern,
                    focused, and $9.99/mo.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Modern AI Calling
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/18 text-sm font-bold text-text-primary">
                      VG
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Vonage
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A legacy business communications platform now owned by
                    Ericsson. Offers phone, messaging, and video for teams, plus
                    a developer API platform. Minimal AI features on the
                    business phone side, no caller ID control, and no call
                    recording included by default.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Legacy Platform
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
              caption="Feature comparison between VeraDial and Vonage"
              primaryLabel="VeraDial"
              secondaryLabel="Vonage"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.vonage,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of April 2026.
              Features may change. Vonage call recording is available as a
              paid add-on.
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
              Legacy platforms fade. Purpose-built tools deliver.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Vonage was a pioneer in VoIP, but its focus has shifted to
              developer APIs since the Ericsson acquisition. If you&apos;re a
              solo professional who needs AI calling, verified identity, and
              call recording, you need a product built for that &mdash; not a
              legacy platform with divided attention.
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

      <BottomLine verdict={COMPARE_VERDICTS.vonage} />

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Helpful guides
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Learn what matters before switching
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {RELATED_GUIDES.map((guide, index) => (
              <ScrollReveal key={guide.href} delay={index * 80}>
                <Link href={guide.href} className="block h-full">
                  <Card className="h-full p-6">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {guide.description}
                    </p>
                    <p className="mt-5 text-sm font-medium text-accent">
                      Read guide →
                    </p>
                  </Card>
                </Link>
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
                Ready to Move Forward?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Modern calling for modern professionals.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get AI agents, verified caller ID, call recording, and
                transcription &mdash; built for individuals, not inherited from a
                legacy enterprise platform.
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
