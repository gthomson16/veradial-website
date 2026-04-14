import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
} from "@/lib/metadata-helpers";
import { AREA_CODES } from "@/lib/area-codes";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/home/CTA";

const PAGE_TITLE = "Business Phone Numbers by Area Code — VeraDial";
const PAGE_DESCRIPTION =
  "Get a local business phone number with AI calling and verified caller ID. Available in major US and Canadian cities.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/numbers",
  keywords: [
    "business phone number",
    "local business number",
    "buy area code number",
    "AI calling",
    "verified caller ID",
    "US business number",
    "Canadian business number",
  ],
});

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Numbers", path: "/numbers" },
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
    path: "/numbers",
    itemListName: "VeraDial area code pages",
    items: AREA_CODES.map((ac) => ({
      name: `(${ac.code}) ${ac.city}, ${ac.state}`,
      path: `/numbers/${ac.code}`,
      description: `${ac.city} business phone number with AI calling and verified caller ID`,
    })),
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function NumbersPage() {
  return (
    <>
      <BreadcrumbJsonLd />
      <CollectionJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Local Numbers
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            A local number for your market.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Get a business phone number in the area code your clients recognize.
            Every number includes AI calling, verified caller ID, SMS, and call
            recording.
          </p>
        </div>
      </section>

      {/* Area code grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREA_CODES.map((ac, index) => (
              <ScrollReveal key={ac.code} delay={index * 60}>
                <Link href={`/numbers/${ac.code}`} className="block h-full">
                  <Card className="group h-full overflow-hidden p-0">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={`/maps/${ac.code}.png`}
                        alt={`Map of ${ac.city}, ${ac.state}`}
                        width={400}
                        height={200}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover opacity-60 transition-opacity duration-200 group-hover:opacity-80"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-display text-2xl font-semibold text-accent">
                            ({ac.code})
                          </span>
                          <h2 className="mt-1 font-display text-lg font-semibold text-text-primary">
                            {ac.city}, {ac.state}
                          </h2>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                        />
                      </div>
                      <p className="mt-2 text-sm text-text-secondary">
                        {ac.marketName} &middot; {ac.country === "CA" ? "Canada" : "United States"}
                      </p>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
