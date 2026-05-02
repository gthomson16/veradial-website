import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/metadata-helpers";
import { getAllHelpSlugs, getHelpPage } from "@/lib/help-content";
import { buildExplainerVideoJsonLd } from "@/lib/explainer-video";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { ExplainerVideoPlayer } from "@/components/home/ExplainerVideo";

const AUTHOR = {
  name: "Graham Thomson",
  url: "https://veradial.com/about#founder",
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function generateStaticParams() {
  return getAllHelpSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getHelpPage(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/help/${page.slug}`,
    keywords: page.keywords,
  });
}

function HelpPageJsonLd({
  page,
}: {
  page: NonNullable<ReturnType<typeof getHelpPage>>;
}) {
  const url = `https://veradial.com/help/${page.slug}`;
  const jsonLd = {
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
    publisher: { "@id": "https://veradial.com/#organization" },
    image: "https://veradial.com/opengraph-image",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    about: { "@id": "https://veradial.com/#app" },
    ...(page.sources?.length
      ? { citation: page.sources.map((source) => source.href) }
      : {}),
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function HelpVideoJsonLd({ slug }: { slug: string }) {
  const jsonLd = buildExplainerVideoJsonLd(`https://veradial.com/help/${slug}`);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function HelpFaqJsonLd({
  page,
}: {
  page: NonNullable<ReturnType<typeof getHelpPage>>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
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

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getHelpPage(slug);
  if (!page) notFound();

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Help", path: "/help" },
    { name: page.title, path: `/help/${page.slug}` },
  ]);

  return (
    <>
      <HelpPageJsonLd page={page} />
      <HelpFaqJsonLd page={page} />
      {page.embedExplainerVideo ? <HelpVideoJsonLd slug={page.slug} /> : null}
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
              { label: "Help", href: "/help" },
              { label: page.eyebrow },
            ]}
          />

          <div className="text-center">
            <Badge variant="hero">{page.eyebrow}</Badge>
            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {page.intro}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-text-muted">
              By {AUTHOR.name} · Updated {formatDisplayDate(page.updatedAt)}
            </p>
          </div>

          {page.embedExplainerVideo ? (
            <div className="relative mt-14">
              <p className="mb-5 text-center text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                60-second walkthrough
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-accent/8 blur-2xl"
              />
              <ExplainerVideoPlayer variant="compact" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {page.sections.map((section, index) => (
              <ScrollReveal key={section.heading} delay={index * 50}>
                <Card hover={false} className="p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold leading-tight text-text-primary">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {section.body}
                  </p>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
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
                  ) : null}
                </Card>
              </ScrollReveal>
            ))}

            {page.sources?.length ? (
              <ScrollReveal>
                <Card hover={false} className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                    Sources
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-text-primary">
                    References used for this guide
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {page.sources.map((source) => (
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

            <ScrollReveal>
              <div id="faq" className="scroll-mt-24">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                  FAQ
                </p>
                <div className="mt-5 space-y-4">
                  {page.faqs.map((item) => (
                    <Card key={item.question} hover={false} className="p-6">
                      <h2 className="font-display text-lg font-semibold text-text-primary">
                        {item.question}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                        {item.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card hover={false} className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                Related guides
              </p>
              <div className="mt-5 space-y-4">
                {page.relatedLinks.map((link) => (
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

            <Card
              glow
              hover={false}
              className="mt-5 bg-[linear-gradient(155deg,rgba(115,242,195,0.10),rgba(255,255,255,0.02))] p-6"
            >
              <p className="font-display text-lg font-semibold text-text-primary">
                Try VeraDial
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
