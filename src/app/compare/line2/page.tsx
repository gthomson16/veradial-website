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

const PAGE_TITLE = "VeraDial vs Line2 — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and Line2 side by side. See how AI-powered business calling with verified caller ID compares to a traditional second line app plagued by spam flagging.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/line2",
  keywords: [
    "Line2 alternative",
    "VeraDial vs Line2",
    "Line2 comparison",
    "Line2 spam flagging",
    "Line2 replacement",
    "business second line app",
    "AI calling app",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  line2: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    line2: "no",
  },
  {
    feature: "Calls display as verified (not spam)",
    veradial: "yes",
    line2: "no",
  },
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    line2: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    line2: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    line2: "partial",
  },
  {
    feature: "SMS / MMS messaging",
    veradial: "yes",
    line2: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    line2: "yes",
  },
  {
    feature: "Auto-attendant / call routing",
    veradial: "no",
    line2: "partial",
  },
  {
    feature: "Desktop app",
    veradial: "no",
    line2: "yes",
  },
  {
    feature: "Conference calling",
    veradial: "no",
    line2: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    line2: "~$14.99/mo",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    line2: "yes",
  },
  {
    feature: "Canadian numbers",
    veradial: "yes",
    line2: "yes",
  },
  {
    feature: "iOS app",
    veradial: "yes",
    line2: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    line2: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Your calls actually get answered",
    description:
      "Line2\u2019s #1 complaint is that calls show up as \u201CScam Likely\u201D or \u201CSpam Risk\u201D on the recipient\u2019s phone. VeraDial numbers carry STIR/SHAKEN A-level attestation, so your calls display as verified \u2014 not flagged, not blocked, not ignored.",
  },
  {
    title: "AI makes calls for you",
    description:
      "Line2 is a dumb pipe \u2014 it routes calls but adds no intelligence. VeraDial dispatches AI agents to handle outbound calls on your behalf: scheduling, reminders, follow-ups. You get a full transcript when it\u2019s done.",
  },
  {
    title: "Control what number they see",
    description:
      "VeraDial lets you verify existing phone numbers as secondary caller IDs, so you choose exactly what the recipient sees. Line2 locks you to your Line2 number with no outbound caller ID flexibility.",
  },
  {
    title: "Lower price, more features",
    description:
      "VeraDial is $9.99/mo with AI calling, verified identity, call recording, transcription, and 100 credits. Line2 starts at ~$14.99/mo for basic calling and texting with no AI, no verification, and limited recording.",
  },
  {
    title: "Modern, reliable infrastructure",
    description:
      "Line2 users regularly report dropped calls, delayed notifications, and app crashes. VeraDial is built on Twilio\u2019s enterprise-grade infrastructure with carrier-level call quality and reliable push notifications.",
  },
];

export default function CompareLine2Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs Line2", path: "/compare/line2" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/line2",
    comparedName: "Line2",
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
              { label: "Line2" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Line2
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Line2 gives you a second number, but your calls get flagged as spam.
            VeraDial gives you verified business calling with AI agents, caller
            ID control, and call recording. Here&apos;s how they compare.
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
                    AI-powered business calling with verified identity. Your
                    calls display as verified, AI agents handle outbound calls,
                    and call recording keeps everything documented &mdash; all for $9.99/mo
                    on enterprise-grade infrastructure.
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/18 text-sm font-bold text-text-primary">
                      L2
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Line2
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A second phone number app for calling, texting, and
                    voicemail. Available on mobile and desktop, but outbound
                    calls are frequently flagged as &ldquo;Scam Likely&rdquo;
                    due to lack of carrier-level verification. No AI features
                    and limited call recording.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
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
            <ComparisonTable
              caption="Feature comparison between VeraDial and Line2"
              primaryLabel="VeraDial"
              secondaryLabel="Line2"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.line2,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of April 2026.
              Features may change. Line2 call recording is limited to higher-tier
              plans.
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
              A second number is useless if your calls get blocked.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Line2&apos;s most common complaint is that calls show up as
              &ldquo;Scam Likely&rdquo; on the recipient&apos;s phone. If
              you&apos;re paying for a business number but your calls aren&apos;t
              getting through, you&apos;re paying for nothing. VeraDial solves
              this with carrier-verified identity on every call.
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

      <BottomLine verdict={COMPARE_VERDICTS.line2} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Calls that get answered. Not flagged.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get verified caller ID, AI agents, call recording, and
                transcription &mdash; at a lower price than Line2, with calls that
                actually reach the other person.
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
