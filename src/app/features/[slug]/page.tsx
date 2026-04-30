import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/metadata-helpers";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { EARLY_ACCESS_URL } from "@/lib/constants";
import {
  FEATURE_PAGES,
  type FeaturePage,
} from "@/lib/seo/data/features";
import { SEO_PAGES, getCanonicalPath } from "@/lib/seo/pageRegistry";
import { getInternalLinks } from "@/lib/seo/internalLinks";
import { CLAIM_SOURCES } from "@/lib/seo/claimSources";
import type { ClaimSourceId } from "@/lib/seo/types";

const AUTHOR = {
  name: "Graham Thomson",
  url: `${SITE_URL}/about#founder`,
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getPublishedFeature(slug: string): FeaturePage | undefined {
  return FEATURE_PAGES.find((p) => p.slug === slug && p.status === "published");
}

export function generateStaticParams() {
  return FEATURE_PAGES.filter((p) => p.status === "published").map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPublishedFeature(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: getCanonicalPath(page),
    keywords: page.keywords,
  });
}

function FeatureJsonLd({ page }: { page: FeaturePage }) {
  const url = `${SITE_URL}${getCanonicalPath(page)}`;
  const referencedSourceUrls = collectSourceUrls(page);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: page.title,
    name: page.title,
    description: page.description,
    url,
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: AUTHOR.url,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: DEFAULT_OG_IMAGE,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    about: { "@id": `${SITE_URL}/#app` },
    ...(referencedSourceUrls.length
      ? { citation: referencedSourceUrls }
      : {}),
    inLanguage: "en-US",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.payload.faqs.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

function collectSourceUrls(page: FeaturePage): string[] {
  const ids = new Set<ClaimSourceId>();
  for (const cap of page.payload.capabilities) {
    if (cap.sourceId) ids.add(cap.sourceId);
  }
  for (const faq of page.payload.faqs) {
    if (faq.sourceId) ids.add(faq.sourceId);
  }
  return Array.from(ids)
    .map((id) => CLAIM_SOURCES[id]?.href)
    .filter((href): href is string => Boolean(href));
}

function getReferencedSources(page: FeaturePage) {
  const ids = new Set<ClaimSourceId>();
  for (const cap of page.payload.capabilities) {
    if (cap.sourceId) ids.add(cap.sourceId);
  }
  for (const faq of page.payload.faqs) {
    if (faq.sourceId) ids.add(faq.sourceId);
  }
  return Array.from(ids)
    .map((id) => CLAIM_SOURCES[id])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
}

export default async function FeaturePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPublishedFeature(slug);
  if (!page) notFound();

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/#features" },
    { name: page.title, path: getCanonicalPath(page) },
  ]);

  const internalLinks = getInternalLinks(
    page,
    SEO_PAGES,
    page.payload.manualLinks ?? [],
    { max: 6 },
  );

  const sources = getReferencedSources(page);

  return (
    <>
      <FeatureJsonLd page={page} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16">
          <Breadcrumb
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Features", href: "/#features" },
              { label: page.payload.eyebrow },
            ]}
          />

          <div className="text-center">
            <Badge variant="hero">{page.payload.eyebrow}</Badge>
            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {page.payload.hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {page.payload.hero.subhead}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-text-muted">
              By {AUTHOR.name} · Updated {formatDisplayDate(page.updatedAt)}
            </p>

            <ul className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              {page.payload.hero.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" href={EARLY_ACCESS_URL}>
                Get Early Access
              </Button>
              <Button variant="ghost" href="/pricing">
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              What it does
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              {page.payload.eyebrow} capabilities.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.payload.capabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 60}>
                <Card hover={false} className="h-full p-6">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {cap.body}
                  </p>
                  {cap.sourceId && CLAIM_SOURCES[cap.sourceId] ? (
                    <a
                      href={CLAIM_SOURCES[cap.sourceId].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-text-muted underline-offset-4 hover:text-accent hover:underline"
                    >
                      Source: {CLAIM_SOURCES[cap.sourceId].label}
                    </a>
                  ) : null}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              In practice
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Who uses {page.payload.eyebrow.toLowerCase()}?
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.payload.scenarios.map((s, index) => (
              <ScrollReveal key={s.role} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                    {s.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {s.scenario}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                FAQ
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Common questions.
              </h2>

              <div className="mt-8 space-y-4">
                {page.payload.faqs.map((item) => (
                  <Card key={item.question} hover={false} className="p-6">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {item.answer}
                    </p>
                    {item.sourceId && CLAIM_SOURCES[item.sourceId] ? (
                      <a
                        href={CLAIM_SOURCES[item.sourceId].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-text-muted underline-offset-4 hover:text-accent hover:underline"
                      >
                        Source: {CLAIM_SOURCES[item.sourceId].label}
                      </a>
                    ) : null}
                  </Card>
                ))}
              </div>
            </ScrollReveal>

            {sources.length ? (
              <ScrollReveal>
                <Card hover={false} className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                    Sources
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-text-primary">
                    References cited on this page
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
                        >
                          {source.label}
                        </a>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {source.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {internalLinks.length ? (
              <Card hover={false} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                  Related
                </p>
                <div className="mt-5 space-y-4">
                  {internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block rounded-xl border border-border bg-white/[0.02] p-4 transition-colors hover:border-accent/35"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-text-primary">
                            {link.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight
                          size={15}
                          className="mt-0.5 shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            ) : null}

            <Card
              glow
              hover={false}
              className="mt-5 bg-[linear-gradient(155deg,rgba(115,242,195,0.10),rgba(255,255,255,0.02))] p-6"
            >
              <p className="font-display text-lg font-semibold text-text-primary">
                Try {SITE_NAME}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Get a business number with AI calling, verified caller ID, SMS,
                voicemail transcription, and 100 monthly credits.
              </p>
              <StoreBadges className="mt-5" />
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
