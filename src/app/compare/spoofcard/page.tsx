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

const PAGE_TITLE = "VeraDial vs SpoofCard — Comparison";
const PAGE_DESCRIPTION =
  "Compare VeraDial and SpoofCard side by side. See how verified business calling with dedicated numbers stacks up against traditional caller ID spoofing.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare/spoofcard",
  keywords: [
    "SpoofCard alternative",
    "VeraDial vs SpoofCard",
    "caller ID app",
    "verified calling",
    "SpoofCard comparison",
    "business caller ID",
    "STIR SHAKEN",
  ],
});

type FeatureRow = {
  feature: string;
  veradial: "yes" | "no" | "partial" | string;
  spoofcard: "yes" | "no" | "partial" | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  {
    feature: "Dedicated phone numbers you own",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "STIR/SHAKEN A-level attestation",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "Calls display as verified on recipient's phone",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "AI-powered outbound calling",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "SMS from your calling number",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "Call recording",
    veradial: "yes",
    spoofcard: "yes",
  },
  {
    feature: "Background noise effects",
    veradial: "no",
    spoofcard: "yes",
  },
  {
    feature: "Number verification for numbers you own",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "Subscription with credits ($9.99/mo)",
    veradial: "100 credits/mo",
    spoofcard: "Credit-based",
  },
  {
    feature: "Voicemail transcription",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "Call forwarding & AI screening",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "Carrier-grade infrastructure (Twilio)",
    veradial: "yes",
    spoofcard: "no",
  },
  {
    feature: "iOS app",
    veradial: "coming soon",
    spoofcard: "yes",
  },
  {
    feature: "Android app",
    veradial: "yes",
    spoofcard: "yes",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Verified, not spoofed",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation. Recipients see a verified call — not an unknown or flagged number. SpoofCard uses traditional caller ID spoofing, which carriers increasingly flag or block.",
  },
  {
    title: "AI makes calls for you",
    description:
      "Dispatch an AI agent to handle outbound calls on your behalf. Choose from presets like Scheduler or Reminder, or write a custom prompt. Get a full transcript and summary when it's done. SpoofCard has no AI calling capability.",
  },
  {
    title: "You own the number",
    description:
      "VeraDial purchases real phone numbers dedicated to your account. You can make calls, send SMS, and receive callbacks on the same number. SpoofCard displays a number on the recipient's screen but doesn't give you ownership of it.",
  },
  {
    title: "SMS follow-up from the same identity",
    description:
      "After a call, send a text from the same number the recipient just saw. VeraDial keeps voice and messaging on one identity. SpoofCard doesn't support outbound SMS.",
  },
  {
    title: "Built for business use",
    description:
      "VeraDial is designed for solo operators, sales teams, and field services who need consistent outbound identity. SpoofCard has historically focused on novelty use cases like background noise effects.",
  },
];

export default function CompareSpoofCardPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "VeraDial vs SpoofCard", path: "/compare/spoofcard" },
  ]);
  const pageJsonLd = buildComparisonPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare/spoofcard",
    comparedName: "SpoofCard",
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
              { label: "SpoofCard" },
            ]}
          />
          <Badge
            variant="hero"
          >
            Comparison
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            VeraDial vs SpoofCard
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            SpoofCard lets you display a different caller ID. VeraDial gives you
            a real, verified phone number that carriers trust. Here&apos;s how they
            compare.
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
                    Dedicated numbers with carrier-level verification. Your calls
                    display as <strong className="text-accent">verified</strong>{" "}
                    on the recipient&apos;s device. You own the number, so you can
                    call, text, record, and even dispatch AI agents to make calls
                    on your behalf — all from one consistent identity.
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
                      SC
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      SpoofCard
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    Displays a chosen number on the recipient&apos;s caller ID using
                    traditional spoofing. The number isn&apos;t yours — you can&apos;t
                    receive calls or texts on it. Carriers are increasingly
                    flagging or blocking spoofed calls under STIR/SHAKEN
                    regulations.
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
              caption="Feature comparison between VeraDial and SpoofCard"
              primaryLabel="VeraDial"
              secondaryLabel="SpoofCard"
              rows={COMPARISON_ROWS.map((row) => ({
                feature: row.feature,
                primary: row.veradial,
                secondary: row.spoofcard,
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
              Spoofing is a liability. Verified identity is an asset.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              STIR/SHAKEN regulations mean carriers now verify who&apos;s behind
              every call. Spoofed numbers get flagged as &ldquo;Spam Likely&rdquo; or
              blocked entirely. VeraDial works with the system, not against it.
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

      <BottomLine verdict={COMPARE_VERDICTS.spoofcard} />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Stop spoofing. Start verifying.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated number with carrier-level verification. Your
                calls land as trusted from the first ring.
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
