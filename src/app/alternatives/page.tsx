import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
} from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { ALTERNATIVES_PAGES } from "@/lib/alternatives-data";

const PAGE_TITLE = "Best Alternatives to Popular Business Phone Apps";
const PAGE_DESCRIPTION =
  "Find the best alternatives to Google Voice, OpenPhone, Grasshopper, Dialpad, RingCentral, and Vonage. Compare features, pricing, and AI calling capabilities.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/alternatives",
  keywords: [
    "business phone alternatives",
    "Google Voice alternative",
    "OpenPhone alternative",
    "Grasshopper alternative",
    "Dialpad alternative",
    "RingCentral alternative",
    "Vonage alternative",
    "AI calling app",
  ],
});

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Alternatives", path: "/alternatives" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function CollectionJsonLd() {
  const jsonLd = buildCollectionPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/alternatives",
    itemListName: "Business phone alternative guides",
    items: ALTERNATIVES_PAGES.map((page) => ({
      name: page.pageTitle,
      path: `/alternatives/${page.slug}`,
      description: page.pageDescription,
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AlternativesHubPage() {
  return (
    <>
      <CollectionJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="hero"
          >
            Alternatives
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Find the right business calling app
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Thinking about switching? We&apos;ve compared the most popular
            business phone apps so you can find the best fit for your workflow
            and budget.
          </p>
        </div>
      </section>

      {/* Alternatives grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ALTERNATIVES_PAGES.map((page, index) => (
              <ScrollReveal key={page.slug} delay={index * 60}>
                <Link
                  href={`/alternatives/${page.slug}`}
                  className="block h-full"
                >
                  <Card className="group h-full p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-xl font-semibold text-text-primary">
                        {page.name}
                      </h2>
                      <ArrowRight
                        size={18}
                        className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {page.alternatives.length} alternatives compared
                    </p>
                    <ul className="mt-4 space-y-2">
                      {page.painPoints.slice(0, 3).map((point) => (
                        <li
                          key={point.title}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {point.title}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Link>
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
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Try the AI-powered alternative.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                VeraDial gives you AI agents that make calls, verified caller
                ID, call recording, and transcription &mdash; starting at
                $9.99/mo.
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
