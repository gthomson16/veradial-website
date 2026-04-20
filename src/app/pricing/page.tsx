import Link from "next/link";
import {
  Bot,
  CheckCircle2,
  Eye,
  Forward,
  Gift,
  Infinity as InfinityIcon,
  MessageSquare,
  Mic,
  Phone,
  Shield,
  Sparkles,
  Tag,
  Voicemail,
} from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
} from "@/lib/metadata-helpers";
import { CREDIT_PACKS, GOOGLE_PLAY_URL } from "@/lib/constants";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";

const PAGE_TITLE = "VeraDial Pricing — $9.99/mo flat, credits never expire";
const PAGE_DESCRIPTION =
  "One price, one plan: $9.99/mo per business line with 100 credits included monthly, a 3-day free trial, and optional top-up packs. No tiers, no seat fees, no expiring credits.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/pricing",
  keywords: [
    "VeraDial pricing",
    "business phone pricing",
    "AI calling pricing",
    "business phone cost",
    "$9.99 business phone",
    "AI phone assistant pricing",
    "cheapest business phone app",
    "OpenPhone alternative pricing",
    "Google Voice alternative pricing",
    "Grasshopper alternative pricing",
  ],
});

const INCLUDED = [
  {
    icon: Phone,
    title: "Dedicated business number",
    detail:
      "US or Canadian number — local or toll-free — with STIR/SHAKEN A-level attestation so your calls show as verified, not spam.",
  },
  {
    icon: Bot,
    title: "AI calling",
    detail:
      "Your AI assistant places calls on your behalf, handles the conversation, and delivers a full transcript and summary.",
  },
  {
    icon: MessageSquare,
    title: "Business SMS",
    detail:
      "Send and receive texts from your business number with threaded conversations, delivery status, and STOP/HELP compliance.",
  },
  {
    icon: Voicemail,
    title: "Voicemail transcription",
    detail:
      "Every missed call is transcribed automatically. Read messages between jobs instead of listening to minutes of audio.",
  },
  {
    icon: Mic,
    title: "Call recording",
    detail:
      "One-tap recording on any call with automatic transcription — document job details, quotes, and agreements.",
  },
  {
    icon: Forward,
    title: "Call forwarding",
    detail:
      "Route unanswered calls to any number with a 30-second timeout. Never miss a lead when you're on another line.",
  },
  {
    icon: Eye,
    title: "AI call screening",
    detail:
      "Let the AI answer first, find out who's calling and why, then decide whether to pick up or send to voicemail.",
  },
  {
    icon: Shield,
    title: "Caller ID control",
    detail:
      "Verify a number you already own and use it as your outbound caller ID (B-level attestation, voice only).",
  },
] as const;

const PER_USE = [
  {
    action: "Standard call",
    cost: "2 credits / min",
    detail: "Regular outbound or inbound voice call.",
  },
  {
    action: "Recorded call",
    cost: "3 credits / min",
    detail: "Call with recording and auto-transcription enabled.",
  },
  {
    action: "AI call",
    cost: "5 credits / min",
    detail: "AI agent places the call and handles the conversation.",
  },
  {
    action: "SMS",
    cost: "1 credit / segment",
    detail: "Per 160-character segment — standard carrier billing.",
  },
  {
    action: "Number swap",
    cost: "$4.99 flat",
    detail: "Change your business number to a new area code anytime.",
  },
] as const;

const CREDIT_EXAMPLES = [
  {
    headline: "~50 min",
    label: "of standard calls",
    math: "50 × 2 credits",
  },
  {
    headline: "~33 min",
    label: "of recorded calls",
    math: "33 × 3 credits",
  },
  {
    headline: "~20 min",
    label: "of AI calling",
    math: "20 × 5 credits",
  },
  {
    headline: "~100",
    label: "SMS messages",
    math: "100 × 1 credit",
  },
] as const;

type CompetitorRow = {
  name: string;
  price: string;
  cadence: string;
  note: string;
  highlight?: boolean;
};

const COMPETITOR_PRICES: CompetitorRow[] = [
  {
    name: "VeraDial",
    price: "$9.99",
    cadence: "/mo",
    note: "AI calling included · 100 credits/mo",
    highlight: true,
  },
  {
    name: "Google Voice (Workspace)",
    price: "$10",
    cadence: "/user/mo",
    note: "Requires Google Workspace · no AI calling",
  },
  {
    name: "OpenPhone Starter",
    price: "$15",
    cadence: "/user/mo",
    note: "Annual billing · no AI calling",
  },
  {
    name: "OpenPhone Business",
    price: "$23",
    cadence: "/user/mo",
    note: "Annual billing · no AI calling",
  },
  {
    name: "Grasshopper Solo",
    price: "$29",
    cadence: "/mo",
    note: "1 user, 3 extensions · no AI calling",
  },
  {
    name: "RingCentral Core",
    price: "$30",
    cadence: "/user/mo",
    note: "Annual billing · no AI calling",
  },
];

const FAQ = [
  {
    question: "What's included in the $9.99/mo subscription?",
    answer:
      "Every subscription includes a dedicated US or Canadian phone number (local or toll-free), 100 credits every month, AI calling, business SMS, voicemail transcription, call recording, call forwarding, AI call screening, and verified caller ID via STIR/SHAKEN A-level attestation. There are no tiered plans and no per-seat charges.",
  },
  {
    question: "What are credits and how much do things actually cost?",
    answer:
      "Credits are usage units deducted when you make calls or send SMS. Standard calls cost 2 credits per minute, recorded calls cost 3 credits per minute, AI calls cost 5 credits per minute, and SMS costs 1 credit per 160-character segment. Your subscription includes 100 credits every month — enough for roughly 50 minutes of standard calls, 33 minutes of recorded calls, 20 minutes of AI calling, or 100 SMS messages, depending on how you mix them.",
  },
  {
    question: "Do credits expire?",
    answer:
      "No. Credits never expire. Unused credits from your monthly allotment roll over and stay in your account until you use them. Credits purchased in top-up packs also never expire.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every new subscription includes a 3-day free trial with 50 bonus credits so you can test AI calling, business SMS, voicemail transcription, and call recording before you pay. You can cancel anytime during the trial at no charge.",
  },
  {
    question: "How do top-up credit packs work?",
    answer:
      "If you use more than your included 100 credits in a month, you can buy top-up packs anytime: 100 credits for $5.99, 300 credits for $14.99, or 1,000 credits for $39.99. Packs are one-time purchases and the credits never expire.",
  },
  {
    question: "Are there any hidden fees or seat charges?",
    answer:
      "No. The only line items are your $9.99/mo subscription per line, any optional credit packs you buy, and a $4.99 number swap fee if you change your number. There are no per-seat charges, no metered overages beyond the credit system, no activation fees, and no annual contracts.",
  },
  {
    question: "Can I have more than one number?",
    answer:
      "Yes. You can add up to 4 additional lines via add-on subscriptions at $9.99 each per month. Every line gets its own dedicated number and 100 monthly credits.",
  },
  {
    question:
      "How does VeraDial compare to Google Voice, OpenPhone, or Grasshopper on price?",
    answer:
      "Google Voice for personal use is free but offers no AI calling; Google Voice for business starts at $10/user/month and requires a Google Workspace subscription. OpenPhone starts at $15/user/month (Starter) and $23/user/month (Business), billed annually. Grasshopper starts at $29/month for one user. RingCentral Core starts at $30/user/month. VeraDial is $9.99/mo per line with AI calling included — none of those plans include AI calling at any tier.",
  },
  {
    question: "What happens if I run out of credits mid-call?",
    answer:
      "The call will still complete — we never cut off an active conversation. Your balance may go slightly negative and will be reconciled against your next credit purchase or monthly allotment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Subscriptions and credit packs are processed as in-app purchases through the Google Play Store on Android and the App Store on iOS. Payment methods are managed by your store account.",
  },
] as const;

function PricingPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://veradial.com/pricing#webpage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://veradial.com/pricing",
    isPartOf: { "@id": "https://veradial.com/#website" },
    mainEntity: { "@id": "https://veradial.com/#app" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: GOOGLE_PLAY_URL,
      description:
        "$9.99/mo per business line. Includes 100 credits monthly, AI calling, SMS, voicemail transcription, call recording, and verified caller ID. 3-day free trial.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "9.99",
        priceCurrency: "USD",
        billingDuration: "P1M",
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function PricingFAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function PricingPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]);

  return (
    <>
      <PricingPageJsonLd />
      <PricingFAQJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-12 text-center sm:pb-20 sm:pt-16">
          <nav className="mb-6 text-sm text-text-muted">
            <Link
              href="/"
              className="transition-colors hover:text-text-secondary"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">Pricing</span>
          </nav>

          <Badge
            variant="hero"
          >
            <Tag size={14} className="mr-1.5" />
            One price. One plan.
          </Badge>

          {/* Editorial price display */}
          <div className="mt-10 flex items-start justify-center">
            <span className="font-display text-3xl font-semibold text-text-secondary sm:text-4xl md:text-5xl">
              $
            </span>
            <span className="font-display text-[7rem] font-bold leading-[0.82] tracking-[-0.05em] text-text-primary sm:text-[10rem] md:text-[13rem] lg:text-[15rem]">
              9
              <span className="text-accent">.</span>
              99
            </span>
          </div>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.32em] text-text-muted sm:text-base">
            / month &nbsp;·&nbsp; per business line
          </p>

          <h1 className="mx-auto mt-10 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            One price. No tiers.{" "}
            <span className="text-accent">Credits that don&apos;t expire.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Everything VeraDial does — verified business calling, AI agent,
            SMS, voicemail, recording — for less than most competitors charge
            for a barebones second number.
          </p>

          {/* Hero proof chips */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-accent">
              <Sparkles size={14} />
              3-day free trial
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent-secondary)]/20 bg-[var(--color-accent-secondary)]/8 px-3 py-1.5 text-[var(--color-accent-secondary)]">
              <Gift size={14} />
              100 credits / mo
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/3 px-3 py-1.5 text-text-secondary">
              <InfinityIcon size={14} />
              Credits never expire
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/3 px-3 py-1.5 text-text-secondary">
              <CheckCircle2 size={14} />
              No seat fees · no contracts
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={GOOGLE_PLAY_URL}>Start 3-day free trial</Button>
            <Button variant="ghost" href="#whats-included">
              See what&apos;s included
            </Button>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section
        id="whats-included"
        className="relative scroll-mt-20 py-20 sm:py-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                What you get
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                $9.99 gets you the whole product
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                No feature gates, no upgrade prompts. Every feature below is
                included with every subscription — on day one.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60}>
                <Card hover={false} className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.detail}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The main subscription card */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Card
              glow
              className="relative overflow-hidden bg-[linear-gradient(155deg,rgba(115,242,195,0.12),rgba(255,255,255,0.02))] p-8 sm:p-12"
            >
              {/* Decorative corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-accent/25 bg-accent/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      VeraDial Business Line
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <p className="font-display text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
                      $9.99
                    </p>
                    <p className="text-lg text-text-secondary">/mo per line</p>
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
                    Dedicated US or Canadian number with AI calling, SMS,
                    voicemail transcription, call recording, call forwarding,
                    AI screening, and verified caller ID. Everything included.
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl border border-accent/15 bg-accent/5 px-6 py-5 text-center">
                  <Sparkles size={20} className="mx-auto text-accent" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    3-day free trial
                  </p>
                  <p className="mt-1 text-[11px] text-text-muted">
                    50 bonus credits
                  </p>
                </div>
              </div>

              <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span className="text-text-primary">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 flex items-start gap-3 rounded-xl border border-[var(--color-accent-secondary)]/15 bg-[var(--color-accent-secondary)]/5 px-4 py-3">
                <Gift
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-accent-secondary)]"
                />
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">
                    100 credits every month
                  </span>{" "}
                  roll into your account — enough for about 50 minutes of
                  standard calls or 20 minutes of AI calling. Unused credits
                  roll over and never expire.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4">
                <Button href={GOOGLE_PLAY_URL}>Start free trial</Button>
                <StoreBadges />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Credit math explainer */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                How credits work
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Your 100 included credits go further than you think
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                Credits are usage units. A call or SMS deducts credits based on
                type and length. Here&apos;s what your included monthly 100
                credits looks like in practice.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CREDIT_EXAMPLES.map((example, index) => (
              <ScrollReveal key={example.label} delay={index * 70}>
                <Card
                  hover={false}
                  className="h-full p-6 text-center sm:p-7"
                >
                  <p className="font-display text-4xl font-bold leading-none tracking-tight text-accent sm:text-5xl">
                    {example.headline}
                  </p>
                  <p className="mt-3 text-sm font-medium text-text-primary">
                    {example.label}
                  </p>
                  <p className="mt-2 text-xs text-text-muted">{example.math}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Per-use cost table */}
          <ScrollReveal>
            <div className="mt-16">
              <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-text-muted">
                Per-use credit costs
              </p>
              <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-white/3 text-xs uppercase tracking-[0.18em] text-text-muted">
                      <th className="px-5 py-3 font-medium">Action</th>
                      <th className="px-5 py-3 font-medium">Cost</th>
                      <th className="hidden px-5 py-3 font-medium md:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PER_USE.map((row) => (
                      <tr
                        key={row.action}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-5 py-4 font-medium text-text-primary">
                          {row.action}
                        </td>
                        <td className="px-5 py-4 font-semibold text-accent">
                          {row.cost}
                        </td>
                        <td className="hidden px-5 py-4 text-text-secondary md:table-cell">
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credit packs */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Top-ups (optional)
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Need more credits? Packs never expire.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                Busy month? Buy a pack whenever you need it. One-time purchase
                — no subscription change, no auto-renewal, no expiring balance.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
            {CREDIT_PACKS.map((pack, index) => (
              <ScrollReveal key={pack.name} delay={index * 80}>
                <Card
                  glow={pack.popular}
                  className={`h-full p-6 sm:p-7 ${
                    pack.popular
                      ? "bg-[linear-gradient(180deg,rgba(115,242,195,0.09),rgba(255,255,255,0.02))]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium text-text-secondary">
                      {pack.name}
                    </p>
                    {pack.popular ? (
                      <span className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-accent">
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 font-display text-3xl text-text-primary xl:text-4xl">
                    {pack.amount}
                  </p>

                  <div className="mt-6">
                    <p className="font-display text-3xl text-text-primary">
                      {pack.price}
                    </p>
                    <p className="mt-2 text-sm text-text-secondary">
                      {pack.perUnit}
                    </p>
                    {pack.estimate ? (
                      <p className="mt-3 border-t border-border pt-3 text-sm text-text-secondary">
                        {pack.estimate}
                      </p>
                    ) : null}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
            <p>Credits never expire</p>
            <p>·</p>
            <p>Number swaps $4.99</p>
            <p>·</p>
            <p>In-app purchase</p>
          </div>
        </div>
      </section>

      {/* Price anchor vs competitors */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Context
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                What competitors charge for less
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                Published starting prices, rounded. None of these plans include
                AI calling at any tier.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card/60">
              <div className="divide-y divide-border">
                {COMPETITOR_PRICES.map((row) => (
                  <div
                    key={row.name}
                    className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5 ${
                      row.highlight
                        ? "bg-[linear-gradient(90deg,rgba(115,242,195,0.08),transparent_60%)]"
                        : ""
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {row.highlight ? (
                        <span className="shrink-0 rounded-full border border-accent/25 bg-accent/12 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                          VeraDial
                        </span>
                      ) : null}
                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm font-semibold sm:text-base ${
                            row.highlight
                              ? "text-text-primary"
                              : "text-text-primary"
                          }`}
                        >
                          {row.highlight ? "Everything included" : row.name}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-text-muted sm:text-sm">
                          {row.note}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <span
                        className={`font-display text-xl font-bold sm:text-2xl ${
                          row.highlight ? "text-accent" : "text-text-primary"
                        }`}
                      >
                        {row.price}
                      </span>
                      <span className="ml-1 text-xs text-text-muted sm:text-sm">
                        {row.cadence}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-text-muted">
              Prices verified from public provider websites.
              <Link
                href="/compare"
                className="ml-2 text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                See detailed comparisons →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Pricing FAQ
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Questions about pricing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                Everything on billing, credits, trials, and line limits.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {FAQ.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 40}>
                <Card hover={false} className="p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.answer}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-sm text-text-muted">
              More questions?{" "}
              <Link
                href="/faq"
                className="text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                See the full FAQ →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Try it for 3 days
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Start your free trial.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                50 bonus credits, full access to AI calling, SMS, voicemail
                transcription, and call recording. Cancel anytime during the
                trial at no charge.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={GOOGLE_PLAY_URL}>Download VeraDial</Button>
              </div>
              <StoreBadges className="mt-6 justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
