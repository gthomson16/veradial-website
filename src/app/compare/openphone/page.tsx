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

const PAGE_TITLE = "VeraDial vs OpenPhone — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and OpenPhone side by side. See how AI-powered business calling with verified caller ID compares to a team-focused VoIP platform.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/openphone",
  keywords: [
    "OpenPhone alternative",
    "VeraDial vs OpenPhone",
    "OpenPhone comparison",
    "business calling app",
    "AI calling app",
    "caller ID control",
    "solo business phone",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  openPhone: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    openPhone: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    openPhone: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    openPhone: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "AI call summaries & transcripts",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "Shared team numbers",
    veradial: "no",
    openPhone: "yes",
  },
  {
    feature: "Built-in CRM",
    veradial: "no",
    openPhone: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    openPhone: "$15/user/mo",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "Canadian numbers",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    openPhone: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    openPhone: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI makes calls for you",
    description:
      "OpenPhone uses AI to summarize calls after they happen. VeraDial\u2019s AI actually makes calls on your behalf \u2014 scheduling appointments, sending reminders, handling outbound conversations. You get a full transcript when it\u2019s done. OpenPhone has no agent-calling capability.",
  },
  {
    title: "Control what number they see",
    description:
      "VeraDial lets you verify existing phone numbers as secondary caller IDs, so you choose exactly what the recipient sees. OpenPhone locks you into the numbers on your account \u2014 no outbound caller ID control.",
  },
  {
    title: "Verified caller identity",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation, so your calls display as verified on the recipient\u2019s device. OpenPhone doesn\u2019t market or guarantee carrier-level identity attestation for outbound calls.",
  },
  {
    title: "Built for solopreneurs, not seat-count math",
    description:
      "VeraDial is $9.99/mo for one line with 100 credits. No per-seat pricing, no minimum users. OpenPhone starts at $15/user/mo and is designed around team workflows \u2014 shared inboxes, CRM, multi-seat management \u2014 features a solo operator doesn\u2019t need.",
  },
  {
    title: "No team overhead, maximum capability",
    description:
      "OpenPhone excels at team collaboration \u2014 shared numbers, internal mentions, CRM integrations. If you\u2019re a solo professional who needs AI calling, call recording, and verified identity rather than team features, VeraDial delivers more for less.",
  },
];

export default function CompareOpenPhonePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs OpenPhone", path: "/compare/openphone" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/openphone",
    comparedName: "OpenPhone",
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
              { label: "OpenPhone" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs OpenPhone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            OpenPhone is built for teams sharing numbers and managing shared
            inboxes. VeraDial is built for solo professionals who need AI to
            make calls, control their caller ID, and sound exactly how they
            want. Here&apos;s how they compare.
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
                    AI-powered business calling for solo professionals. Your
                    calls display as verified, your AI agent handles outbound
                    calls, and call recording keeps every detail on file &mdash;
                    all for $9.99/mo with no per-seat pricing.
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
                      OP
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      OpenPhone
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A modern team phone system built around shared numbers, CRM
                    integration, and collaborative inboxes. AI summarizes calls
                    and transcribes voicemail, but doesn&apos;t make calls for
                    you. No caller ID control or voice features.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Team VoIP Platform
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
              caption="Feature comparison between VeraDial and OpenPhone"
              primaryLabel="VeraDial"
              secondaryLabel="OpenPhone"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.openPhone,
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
              Team phone features are great. But you need calls that actually
              get answered.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              OpenPhone is an excellent team communication platform. But when
              you&apos;re a solo professional who needs caller ID control, AI
              agents that make calls for you, and call recording &mdash; VeraDial
              is purpose-built for the job, at a lower price.
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

      <BottomLine verdict={COMPARE_VERDICTS.openphone} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                More than a team phone. A personal AI calling platform.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get verified caller ID, AI agents, call recording, and
                transcription &mdash; everything a team VoIP platform wasn&apos;t
                designed to give you.
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
