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

const PAGE_TITLE = "VeraDial Use Cases for Small Businesses";
const PAGE_DESCRIPTION =
  "See how contractors, realtors, freelancers, sales teams, property managers, and recruiters use VeraDial for AI calling and verified business numbers.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/use-cases",
  keywords: [
    "VeraDial use cases",
    "AI business calling",
    "contractor calling app",
    "realtor phone app",
    "freelancer business number",
    "sales calling app",
    "property manager phone",
    "recruiter calling tool",
  ],
});

const USE_CASES = [
  {
    name: "Contractors & Home Services",
    href: "/use-cases/contractors",
    tagline: "AI handles your calls while you're on the job",
    highlights: [
      "AI appointment confirmations",
      "Call Map for job coverage",
      "Verified caller ID",
    ],
  },
  {
    name: "Real Estate Agents",
    href: "/use-cases/realtors",
    tagline: "Never miss a lead between showings",
    highlights: [
      "AI follow-up calls",
      "Call Map by neighborhood",
      "Professional business number",
    ],
  },
  {
    name: "Freelancers & Consultants",
    href: "/use-cases/freelancers",
    tagline: "A professional business line without a second phone",
    highlights: [
      "Separate business number",
      "AI scheduling",
      "Call recording for notes",
    ],
  },
  {
    name: "Sales Teams",
    href: "/use-cases/sales",
    tagline: "AI-powered outbound calling from your phone",
    highlights: [
      "AI cold calls with custom scripts",
      "Call transcripts",
      "Verified caller ID",
    ],
  },
  {
    name: "Property Managers",
    href: "/use-cases/property-managers",
    tagline: "Manage tenant calls across every property",
    highlights: [
      "AI handles maintenance requests",
      "Call Map by building",
      "SMS for updates",
    ],
  },
  {
    name: "Recruiters",
    href: "/use-cases/recruiters",
    tagline: "Screen and schedule candidates without playing phone tag",
    highlights: [
      "AI screens candidates",
      "Call recording",
      "Transcript summaries",
    ],
  },
];

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function UseCaseCollectionJsonLd() {
  const jsonLd = buildCollectionPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/use-cases",
    itemListName: "VeraDial use case pages",
    items: USE_CASES.map((useCase) => ({
      name: useCase.name,
      path: useCase.href,
      description: useCase.tagline,
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function UseCasesPage() {
  return (
    <>
      <UseCaseCollectionJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="hero"
          >
            Use Cases
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Built for people who work from their phone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            VeraDial is designed for professionals who make calls between jobs,
            meetings, and appointments. AI handles the calls you can&apos;t
            take, and verified caller ID makes sure you always get answered.
          </p>
        </div>
      </section>

      {/* Use case grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 60}>
                <Link href={item.href} className="block h-full">
                  <Card className="h-full p-6 group">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-xl font-semibold text-text-primary">
                        {item.name}
                      </h2>
                      <ArrowRight
                        size={18}
                        className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.tagline}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
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
                Ready to Try It?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Your AI-powered business line.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Verified caller ID, AI call agents, call recording, and
                transcription — everything you need to work from your phone like
                a pro.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Learn More
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
