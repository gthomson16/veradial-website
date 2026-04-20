import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
} from "@/lib/metadata-helpers";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  getAlternativesPage,
  getAllAlternativesSlugs,
} from "@/lib/alternatives-data";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return getAllAlternativesSlugs().map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const page = getAlternativesPage(competitor);
  if (!page) return {};
  return buildPageMetadata({
    title: page.pageTitle,
    description: page.pageDescription,
    path: `/alternatives/${page.slug}`,
    keywords: page.keywords,
  });
}

/* ------------------------------------------------------------------ */
/*  Helper: FAQ JSON-LD                                                */
/* ------------------------------------------------------------------ */

function buildFaqJsonLd(competitorName: string, alternatives: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the best alternative to ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The best ${competitorName} alternative depends on your needs. For AI-powered calling with verified identity, VeraDial is the top choice. Other popular alternatives include ${alternatives.slice(1, 4).join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: `Is there a cheaper alternative to ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. VeraDial starts at $9.99/mo per business line and includes AI calling, verified caller ID, call recording, business SMS, and 100 credits each month. The 3-day free trial includes 50 bonus credits, so you can test everything before you pay.`,
        },
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const page = getAlternativesPage(competitor);
  if (!page) notFound();

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Alternatives", path: "/alternatives" },
    {
      name: `${page.name} Alternatives`,
      path: `/alternatives/${page.slug}`,
    },
  ]);

  const faqJsonLd = buildFaqJsonLd(
    page.name,
    page.alternatives.map((a) => a.name),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Alternatives", href: "/alternatives" },
              { label: page.name },
            ]}
          />

          <Badge
            variant="hero"
          >
            Alternatives
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {page.pageTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {page.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#alternatives">
              See All Alternatives
            </Button>
          </div>
        </div>
      </section>

      {/* Why people look for alternatives */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Common Pain Points
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Why people switch from {page.name}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.painPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 80}>
                <Card hover={false} className="h-full p-6">
                  <h3 className="font-display text-lg text-text-primary">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {point.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to look for */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Evaluation Criteria
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              What to look for in a {page.name} alternative
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.criteria.map((criterion, i) => (
              <ScrollReveal key={criterion.title} delay={i * 80}>
                <Card hover={false} className="h-full p-6">
                  <h3 className="font-display text-lg text-text-primary">
                    {criterion.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {criterion.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives list */}
      <section id="alternatives" className="relative py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Top Picks
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              The {page.alternatives.length} best {page.name} alternatives
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            {page.alternatives.map((alt, i) => (
              <ScrollReveal key={alt.slug} delay={i * 60}>
                <Card hover={false} className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-text-secondary">
                          {i + 1}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-text-primary">
                          {alt.name}
                        </h3>
                        {i === 0 && (
                          <Badge className="border-accent/25 bg-accent/10 text-accent">
                            Our Pick
                          </Badge>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-text-secondary">
                        {alt.tagline}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-text-secondary">
                      {alt.pricing}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    <strong className="text-text-primary">Best for:</strong>{" "}
                    {alt.bestFor}
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        Strengths
                      </p>
                      <ul className="space-y-1.5">
                        {alt.pros.map((pro) => (
                          <li
                            key={pro}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                        Limitations
                      </p>
                      <ul className="space-y-1.5">
                        {alt.cons.map((con) => (
                          <li
                            key={con}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {alt.vsPageSlug && (
                    <div className="mt-5">
                      <Link
                        href={`/compare/${alt.vsPageSlug}`}
                        className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
                      >
                        See full VeraDial vs {alt.name} comparison &rarr;
                      </Link>
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Quick Recommendations
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Which {page.name} alternative is right for you?
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.recommendations.map((rec, i) => (
              <ScrollReveal key={rec.useCase} delay={i * 80}>
                <Card hover={false} className="h-full p-6">
                  <p className="text-sm font-medium text-text-muted">
                    {rec.useCase}
                  </p>
                  <p className="mt-2 font-display text-lg text-text-primary">
                    {rec.pick}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {rec.why}
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
                Try the #1 Pick
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                AI calling that gets results.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                VeraDial gives you AI agents that make calls, verified caller
                ID, call recording, and transcription &mdash; starting at
                $9.99/mo with a 3-day free trial.
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

      {/* Disclaimer */}
      <div className="mx-auto max-w-4xl px-6 pb-12">
        <p className="text-center text-xs text-text-muted">
          Information based on publicly available data as of April 2026.
          Pricing and features may change. We recommend verifying current
          details on each provider&apos;s website.
        </p>
      </div>
    </>
  );
}
