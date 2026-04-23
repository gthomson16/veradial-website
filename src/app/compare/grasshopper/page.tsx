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

const PAGE_TITLE = "VeraDial vs Grasshopper — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and Grasshopper side by side. See how AI calling, verified caller ID, and call recording compare to a traditional call-forwarding business number.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/grasshopper",
  keywords: [
    "Grasshopper alternative",
    "VeraDial vs Grasshopper",
    "Grasshopper phone comparison",
    "business phone number",
    "virtual phone number",
    "Grasshopper replacement",
    "AI calling app",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  grasshopper: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "AI-powered outbound calling (agent makes calls)",
    veradial: "yes",
    grasshopper: "no",
  },
  {
    feature: "Caller ID control (choose your displayed number)",
    veradial: "yes",
    grasshopper: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    grasshopper: "no",
  },
  {
    feature: "Dedicated VoIP infrastructure",
    veradial: "yes",
    grasshopper: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    grasshopper: "partial",
  },
  {
    feature: "SMS / business texting",
    veradial: "yes",
    grasshopper: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    grasshopper: "yes",
  },
  {
    feature: "Custom greetings & auto-attendant",
    veradial: "no",
    grasshopper: "yes",
  },
  {
    feature: "Simultaneous call handling",
    veradial: "no",
    grasshopper: "yes",
  },
  {
    feature: "Multiple extensions",
    veradial: "no",
    grasshopper: "yes",
  },
  {
    feature: "Pricing",
    veradial: "$9.99/mo per line",
    grasshopper: "~$14\u201328/mo",
  },
  {
    feature: "Call forwarding & screening",
    veradial: "yes",
    grasshopper: "yes",
  },
  {
    feature: "iOS app",
    veradial: "coming soon",
    grasshopper: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    grasshopper: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI makes calls for you",
    description:
      "Grasshopper has no AI features at all. VeraDial dispatches AI agents to handle outbound calls \u2014 scheduling, reminders, custom prompts \u2014 with full transcripts when complete.",
  },
  {
    title: "Real VoIP, not call forwarding",
    description:
      "Grasshopper works by forwarding calls to your personal phone. VeraDial is a full VoIP platform \u2014 calls are placed and received through dedicated infrastructure with carrier-grade quality. Your personal number stays completely separate.",
  },
  {
    title: "Verified caller identity",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation, so your calls display as verified. Grasshopper routes calls through your personal carrier, which means your verification depends on your personal phone\u2019s carrier \u2014 not your business identity.",
  },
  {
    title: "Modern platform, modern price",
    description:
      "VeraDial is $9.99/mo with AI calling, call recording, transcription, and 100 credits. Grasshopper Solo starts at $29/mo for basic call forwarding with no AI and no recording on the base plan.",
  },
  {
    title: "Call recording built in",
    description:
      "Toggle recording on any VeraDial call \u2014 regular or AI. Both sides captured and stored. Grasshopper only offers call recording on higher-tier plans, and even then it\u2019s limited compared to VeraDial\u2019s per-call toggle.",
  },
];

export default function CompareGrasshopperPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs Grasshopper", path: "/compare/grasshopper" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/grasshopper",
    comparedName: "Grasshopper",
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
              { label: "Grasshopper" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Grasshopper
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Grasshopper forwards calls to your personal phone. VeraDial gives
            you dedicated VoIP with AI agents, verified caller ID, and call
            recording. Here&apos;s how they compare.
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
                    A dedicated VoIP calling platform. AI agents make calls for
                    you, your caller ID is verified at the carrier level, and
                    every call can be recorded and transcribed. Built on modern
                    infrastructure, not call forwarding.
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
                      GH
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Grasshopper
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A virtual phone system that layers a business number on top
                    of your personal phone through call forwarding. Business
                    texting, voicemail, and custom greetings &mdash; but no AI,
                    no call recording on the base plan, and no call verification. Owned by GoTo.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Call Forwarding
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
              caption="Feature comparison between VeraDial and Grasshopper"
              primaryLabel="VeraDial"
              secondaryLabel="Grasshopper"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.grasshopper,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-6 text-center text-xs text-text-muted">
              Information based on publicly available data as of April 2026.
              Features may change. Grasshopper recording is only available on
              higher-tier plans.
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
              Call forwarding was fine in 2010. AI calling is how business gets
              done now.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Grasshopper was built for an era before AI calling, before
              STIR/SHAKEN verification, and before call transcription. If you&apos;re
              still using a call-forwarding service, you&apos;re paying more for
              less.
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

      <BottomLine verdict={COMPARE_VERDICTS.grasshopper} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Modernize?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Stop forwarding. Start calling with AI.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated number with AI agents, verified caller ID,
                call recording, and transcription &mdash; not a forwarding layer on
                your personal phone.
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
