import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildPageMetadata,
} from "@/lib/metadata-helpers";
import { HELP_PAGES } from "@/lib/help-content";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const PAGE_TITLE = "VeraDial Help Guides for AI Business Calling";
const PAGE_DESCRIPTION =
  "Practical VeraDial help guides for AI calling, verified caller ID, appointment confirmation scripts, pricing, and small business phone workflows.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/help",
  keywords: [
    "VeraDial help",
    "AI business calling guides",
    "verified caller ID guide",
    "appointment confirmation scripts",
    "small business phone help",
  ],
});

function HelpCollectionJsonLd() {
  const jsonLd = buildCollectionPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/help",
    itemListName: "VeraDial help guides",
    items: HELP_PAGES.map((page) => ({
      name: page.title,
      path: `/help/${page.slug}`,
      description: page.description,
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Help", path: "/help" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const ICONS = [ShieldCheck, Sparkles, BookOpen] as const;

export default function HelpPage() {
  return (
    <>
      <HelpCollectionJsonLd />
      <BreadcrumbJsonLd />

      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Breadcrumb
            className="mb-6"
            items={[{ label: "Home", href: "/" }, { label: "Help" }]}
          />
          <Badge variant="hero">
            <BookOpen size={14} className="mr-1.5" />
            Help Guides
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Practical guides for AI business calling
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Learn how verified caller ID, AI calling, appointment confirmation
            scripts, and small-business phone workflows fit together in
            VeraDial.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {HELP_PAGES.map((page, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <ScrollReveal key={page.slug} delay={index * 80}>
                  <Link href={`/help/${page.slug}`} className="block h-full">
                    <Card className="group h-full p-6 sm:p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                        <Icon size={21} className="text-accent" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-secondary)]">
                        {page.eyebrow}
                      </p>
                      <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-text-primary">
                        {page.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {page.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
                        Read guide
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
