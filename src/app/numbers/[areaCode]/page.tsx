import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Bot,
  Building2,
  Globe,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildAreaCodePageJsonLd,
} from "@/lib/metadata-helpers";
import { AREA_CODES, getAreaCode } from "@/lib/area-codes";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { EARLY_ACCESS_URL } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return AREA_CODES.map((ac) => ({ areaCode: ac.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ areaCode: string }>;
}): Promise<Metadata> {
  const { areaCode } = await params;
  const ac = getAreaCode(areaCode);
  if (!ac) return {};

  return buildPageMetadata({
    title: `(${ac.code}) ${ac.city} Business Phone Number — VeraDial`,
    description: `Get a ${ac.city}, ${ac.state} business phone number with (${ac.code}) area code. AI calling, verified caller ID, SMS, and call recording. STIR/SHAKEN A-level attestation.`,
    path: `/numbers/${ac.code}`,
    keywords: [
      `${ac.code} business number`,
      `${ac.city} phone number`,
      `${ac.city} business phone`,
      `buy ${ac.code} number`,
      `${ac.code} area code`,
      `${ac.city} AI calling`,
      `${ac.city} verified caller ID`,
    ],
  });
}

/* ------------------------------------------------------------------ */
/*  Features (shared across all area code pages)                       */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: Bot,
    title: "AI Calling",
    description:
      "AI makes calls on your behalf — confirmations, follow-ups, and scheduling. You get a full transcript after every call.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Caller ID",
    description:
      "STIR/SHAKEN A-level attestation on every number. Your calls display as verified, not spam.",
  },
  {
    icon: MessageSquare,
    title: "Business SMS",
    description:
      "Send and receive texts from your business number with conversation threading.",
  },
  {
    icon: Phone,
    title: "Call Recording",
    description:
      "Record any call with one tap. Full transcripts and summaries after every AI call.",
  },
  {
    icon: Globe,
    title: "US + Canada",
    description:
      "Local and toll-free numbers across the United States and Canada. Up to 5 lines per account.",
  },
  {
    icon: MapPin,
    title: "Call Map",
    description:
      "See all your call activity mapped geographically. Track coverage by region.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function AreaCodePage({
  params,
}: {
  params: Promise<{ areaCode: string }>;
}) {
  const { areaCode } = await params;
  const ac = getAreaCode(areaCode);
  if (!ac) notFound();

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Numbers", path: "/numbers" },
    { name: `(${ac.code}) ${ac.city}`, path: `/numbers/${ac.code}` },
  ]);

  const pageJsonLd = buildAreaCodePageJsonLd({
    name: `(${ac.code}) ${ac.city} Business Phone Number`,
    description: `Get a ${ac.city}, ${ac.state} business phone number with (${ac.code}) area code.`,
    path: `/numbers/${ac.code}`,
    areaCode: ac.code,
    city: ac.city,
    state: ac.state,
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ac.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <Badge
                variant="hero"
              >
                ({ac.code}) {ac.marketName}
              </Badge>

              <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Get a ({ac.code}) {ac.city}
                <span className="block text-accent">business number.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                A dedicated {ac.city} phone number with AI calling, verified
                caller ID, SMS, and call recording. Your calls display as
                verified — not spam.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="primary" href={EARLY_ACCESS_URL}>
                  Get a ({ac.code}) Number
                </Button>
                <Button variant="ghost" href="/pricing">
                  See Pricing
                </Button>
              </div>
            </div>

            {/* Static map */}
            <div className="hidden overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:block">
              <Image
                src={`/maps/${ac.code}.png`}
                alt={`Map of ${ac.city}, ${ac.state} (${ac.code} area code)`}
                width={400}
                height={300}
                className="w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why local presence matters */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                  Why ({ac.code}) Matters
                </p>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                  Local presence builds trust.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  {ac.localTrustAngle}
                </p>
              </div>

              {/* Call Map screenshot */}
              <div className="mx-auto w-[180px] sm:w-[200px]">
                <div className="rounded-[2.5rem] border-[3px] border-white/10 bg-black p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                  <div className="overflow-hidden rounded-[2rem]">
                    <Image
                      src="/screenshots/raw-captures/call-map-updated.png"
                      alt="VeraDial Call Map showing geographic call activity"
                      width={1320}
                      height={2868}
                      sizes="200px"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Best for industries */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Best For
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Who uses a ({ac.code}) number?
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {ac.bestForIndustries.map((industry, index) => (
              <ScrollReveal key={industry.name} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <Building2 size={20} className="text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {industry.reason}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <ScrollReveal>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                  Features
                </p>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                  More than a number.
                </h2>
              </ScrollReveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {FEATURES.map((feature, index) => (
                  <ScrollReveal key={feature.title} delay={index * 60}>
                    <Card hover={false} className="h-full p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                          <feature.icon size={18} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-semibold text-text-primary">
                            {feature.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Numbers screenshot */}
            <div className="mx-auto hidden w-[180px] sm:w-[200px] lg:block">
              <div className="rounded-[2.5rem] border-[3px] border-white/10 bg-black p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshots/raw-captures/numbers-updated.png"
                    alt="VeraDial number management showing multiple business lines"
                    width={1320}
                    height={2868}
                    sizes="200px"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian SMS note */}
      {ac.canadianSmsNote && (
        <section className="relative py-10">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <Card hover={false} className="border-amber-500/20 bg-amber-500/5 p-6">
                <p className="text-sm font-semibold text-amber-400">
                  Note for Canadian numbers
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {ac.canadianSmsNote}
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Nearby area codes */}
      {ac.nearbyAreaCodes.length > 0 && (
        <section className="relative py-20">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Nearby Area Codes
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Cover more of {ac.region}.
              </h2>
              <p className="mt-4 text-base text-text-secondary">
                VeraDial supports up to 5 numbers per account. Add nearby area
                codes to expand your local presence.
              </p>
            </ScrollReveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {ac.nearbyAreaCodes.map((code) => {
                const nearby = getAreaCode(code);
                return nearby ? (
                  <Link key={code} href={`/numbers/${code}`}>
                    <Card className="px-5 py-3">
                      <span className="font-display text-lg font-semibold text-accent">
                        ({code})
                      </span>
                      <span className="ml-2 text-sm text-text-secondary">
                        {nearby.city}
                      </span>
                    </Card>
                  </Link>
                ) : (
                  <Card key={code} hover={false} className="px-5 py-3">
                    <span className="font-display text-lg font-semibold text-text-muted">
                      ({code})
                    </span>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              FAQ
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Common questions about ({ac.code}).
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-5">
            {ac.faq.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 60}>
                <Card hover={false} className="p-6">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.answer}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Get Started
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Get your ({ac.code}) {ac.city} number.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Download VeraDial, search for a ({ac.code}) number, and start
                making AI-powered calls with verified caller ID.
              </p>
              <div className="mt-8">
                <Button variant="primary" href={EARLY_ACCESS_URL}>
                  Get a ({ac.code}) Number
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
