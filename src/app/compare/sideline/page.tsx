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

const PAGE_TITLE = "VeraDial vs Sideline — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and Sideline side by side. See how AI calling, verified caller ID, call recording, and transcription compare to a standard second-number app.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/sideline",
  keywords: [
    "Sideline alternative",
    "VeraDial vs Sideline",
    "Sideline app comparison",
    "business second phone number",
    "business caller ID",
    "second phone number app",
    "verified calling",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  sideline: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    sideline: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    sideline: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    sideline: "no",
  },
  {
    feature: "Caller ID control",
    veradial: "yes",
    sideline: "partial",
  },
  {
    feature: "SMS messaging",
    veradial: "yes",
    sideline: "yes",
  },
  {
    feature: "Team numbers (shared across devices)",
    veradial: "no",
    sideline: "yes",
  },
  {
    feature: "Auto-reply texts",
    veradial: "no",
    sideline: "yes",
  },
  {
    feature: "Business hours scheduling",
    veradial: "no",
    sideline: "yes",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    sideline: "partial",
  },
  {
    feature: "Unlimited calling & texting",
    veradial: "no",
    sideline: "yes",
  },
  {
    feature: "Subscription with credits ($9.99/mo)",
    veradial: "100 credits/mo",
    sideline: "$9.99/mo",
  },
  {
    feature: "Call forwarding & AI screening",
    veradial: "yes",
    sideline: "no",
  },
  {
    feature: "Carrier-grade infrastructure (Twilio)",
    veradial: "yes",
    sideline: "no",
  },
  {
    feature: "iOS app",
    veradial: "coming soon",
    sideline: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    sideline: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "AI makes calls for you",
    description:
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. Sideline has no AI calling capability.",
  },
  {
    title: "Verified caller identity",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation, so recipients see a verified call — not an unknown number. Sideline provides a second number but without carrier-level identity verification, your calls can still land as unverified.",
  },
  {
    title: "Call recording built in",
    description:
      "Toggle recording on any call — regular or AI — and get both sides captured. Recordings are stored in your call history for easy playback. Sideline doesn't offer call recording.",
  },
  {
    title: "Same price, way more features",
    description:
      "VeraDial is $9.99/mo with a 3-day free trial and 100 credits every month — the same price as Sideline. But you also get AI calling, voicemail transcription, call recording, and call forwarding that Sideline doesn't offer.",
  },
  {
    title: "Choose which number they see",
    description:
      "VeraDial lets you purchase numbers and verify external caller IDs, giving you full control over your outbound identity. Sideline gives you one second number — you can't customize what the recipient sees beyond that.",
  },
];

export default function CompareSidelinePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs Sideline", path: "/compare/sideline" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/sideline",
    comparedName: "Sideline",
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
            <span className="text-text-secondary">Sideline</span>
          </nav>
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs Sideline
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Sideline gives you a second phone number for business. VeraDial
            gives you a verified identity with AI calling, call recording,
            and transcription. Here&apos;s how they compare.
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
                    Verified outbound calling with full identity control. Your
                    calls display as{" "}
                    <strong className="text-accent">verified</strong> on the
                    recipient&apos;s device. AI agents make calls for you, voice
                    calls can be recorded and transcribed, and every call can be
                    tracked — all from a number you own.
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
                      SL
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Sideline
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    A second phone number app built for business basics —
                    calling, texting, voicemail, and auto-replies. Great for
                    separating work and personal lines with features like
                    business hours and team numbers. No call recording, voice
                    effects, or AI calling.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      Second Number Only
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
              caption="Feature comparison between VeraDial and Sideline"
              primaryLabel="VeraDial"
              secondaryLabel="Sideline"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.sideline,
              }))}
            />
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
              A second number is just the start. Verified identity changes the
              game.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Sideline solves the &ldquo;separate my work calls&rdquo; problem. VeraDial
              solves that too — then adds AI calling, call recording,
              transcription, and STIR/SHAKEN verification so your calls actually
              get answered.
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

      <BottomLine verdict={COMPARE_VERDICTS.sideline} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Upgrade?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                More than a second number.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a verified number with AI calling, call recording,
                and voicemail transcription. Start with a 3-day free trial.
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
