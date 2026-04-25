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
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { BottomLine } from "@/components/compare/BottomLine";
import { COMPARE_VERDICTS } from "@/lib/compare-verdicts";

const PAGE_TITLE = "VeraDial vs iPlum — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and iPlum side by side. See how AI-powered business calling with verified caller ID compares to a compliance-focused business phone app.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/iplum",
  keywords: [
    "iPlum alternative",
    "VeraDial vs iPlum",
    "iPlum comparison",
    "iPlum replacement",
    "HIPAA phone alternative",
    "business phone app",
    "AI calling app",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  iplum: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    iplum: "no",
  },
  {
    feature: "Calls display as verified (not spam)",
    veradial: "yes",
    iplum: "no",
  },
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    iplum: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    iplum: "no",
  },
  {
    feature: "HIPAA-compliant messaging",
    veradial: "no",
    iplum: "yes",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    iplum: "partial",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    iplum: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    iplum: "yes",
  },
  {
    feature: "Auto-attendant / phone tree",
    veradial: "no",
    iplum: "yes",
  },
  {
    feature: "Secure / encrypted texting",
    veradial: "no",
    iplum: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    iplum: "~$8.99\u201329.99/mo",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    iplum: "yes",
  },
  {
    feature: "Canadian numbers",
    veradial: "yes",
    iplum: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    iplum: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    iplum: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Your calls actually get answered",
    description:
      "Like many VoIP apps, iPlum calls are frequently flagged as \u201CScam Likely\u201D on the recipient\u2019s phone. VeraDial numbers carry STIR/SHAKEN A-level attestation, so your calls display as verified \u2014 not flagged, not blocked.",
  },
  {
    title: "AI makes calls for you",
    description:
      "iPlum has no AI features. VeraDial dispatches AI agents to handle outbound calls on your behalf \u2014 scheduling, reminders, follow-ups \u2014 with full transcripts and summaries when complete.",
  },
  {
    title: "Control what number they see",
    description:
      "VeraDial lets you verify existing phone numbers as secondary caller IDs, so you choose your outbound identity. iPlum locks caller ID to your assigned number with no flexibility.",
  },
  {
    title: "Simple pricing, no surprises",
    description:
      "VeraDial is $9.99/mo per line with 100 credits and clear per-minute rates. iPlum\u2019s pricing can be confusing \u2014 the base plan is cheap, but useful features like call recording, HIPAA compliance, and auto-attendant require higher tiers at $25\u201330/mo.",
  },
  {
    title: "Modern app, modern experience",
    description:
      "iPlum\u2019s interface is often described as dated and clunky. VeraDial is built with a modern, clean UI that makes managing calls, recordings, transcripts, and AI agents intuitive.",
  },
];

export default function CompareIPlumPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs iPlum", path: "/compare/iplum" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/iplum",
    comparedName: "iPlum",
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
              { label: "iPlum" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs iPlum
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            iPlum focuses on HIPAA compliance for regulated industries.
            VeraDial focuses on AI calling, verified identity, and call
            recording for solo professionals. Here&apos;s how they compare.
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
                    AI-powered business calling with verified identity. AI
                    agents make calls for you, your caller ID is controlled and
                    verified at the carrier level, and call recording keeps
                    everything documented &mdash; all for $9.99/mo.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      AI + Verified Calling
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/18 text-sm font-bold text-text-primary">
                      iP
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      iPlum
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A compliance-focused business phone app with HIPAA-compliant
                    messaging and encrypted texting for regulated industries.
                    Strong on compliance, but no AI features, limited call
                    recording, and outbound calls are frequently flagged as spam.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      HIPAA Compliant
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
              caption="Feature comparison between VeraDial and iPlum"
              primaryLabel="VeraDial"
              secondaryLabel="iPlum"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.iplum,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of April 2026.
              Features may change. iPlum HIPAA features and call recording
              require higher-tier plans.
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
              Compliance is important. But so is actually reaching people.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              iPlum is a solid choice if you need HIPAA-compliant communications
              for healthcare or finance. But if you don&apos;t need regulatory
              compliance and your priority is AI calling, verified identity, and
              calls that don&apos;t get flagged as spam &mdash; VeraDial is
              purpose-built for that.
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

      <BottomLine verdict={COMPARE_VERDICTS.iplum} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                AI calling that builds trust.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get verified caller ID, AI agents, call recording, and
                transcription &mdash; with calls that display as verified, not
                spam.
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
