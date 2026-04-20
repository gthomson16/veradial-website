import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./metadata";

const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

function buildCanonicalUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = buildCanonicalUrl(path);

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildCollectionPageJsonLd({
  name,
  description,
  path,
  itemListName,
  items,
}: {
  name: string;
  description: string;
  path: string;
  itemListName: string;
  items: { name: string; path: string; description?: string }[];
}) {
  const url = buildCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": APP_ID },
    mainEntity: {
      "@type": "ItemList",
      name: itemListName,
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: buildCanonicalUrl(item.path),
      })),
    },
    hasPart: items.map((item) => {
      const itemUrl = buildCanonicalUrl(item.path);
      return {
        "@type": "WebPage",
        "@id": `${itemUrl}#webpage`,
        name: item.name,
        url: itemUrl,
        ...(item.description ? { description: item.description } : {}),
      };
    }),
  };
}

export function buildComparisonPageJsonLd({
  name,
  description,
  path,
  comparedName,
  comparedUrl,
}: {
  name: string;
  description: string;
  path: string;
  comparedName: string;
  /**
   * Optional URL of the compared product's homepage (used as the SoftwareApplication
   * identifier). When omitted, falls back to the VeraDial comparison page as the @id.
   */
  comparedUrl?: string;
}) {
  const url = buildCanonicalUrl(path);
  // Derive the competitor slug from the canonical path ("/compare/openphone") so
  // we can emit a stable @id for the mentioned SoftwareApplication even without
  // the caller supplying one.
  const slug = path.replace(/^\/compare\//, "").replace(/\/$/, "");
  const mentionId = `${url}#mention-${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": APP_ID },
    mentions: {
      "@type": "SoftwareApplication",
      "@id": mentionId,
      name: comparedName,
      applicationCategory: "BusinessApplication",
      ...(comparedUrl ? { url: comparedUrl } : {}),
    },
  };
}

export function buildAreaCodePageJsonLd({
  name,
  description,
  path,
  areaCode,
  city,
  state,
}: {
  name: string;
  description: string;
  path: string;
  areaCode: string;
  city: string;
  state: string;
}) {
  const url = buildCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": APP_ID },
    about: {
      "@type": "Service",
      name: `VeraDial (${areaCode}) ${city} Business Number`,
      areaServed: {
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: state,
        },
      },
    },
  };
}

export function buildUseCasePageJsonLd({
  name,
  description,
  path,
  audienceType,
  audienceKind = "BusinessAudience",
}: {
  name: string;
  description: string;
  path: string;
  audienceType: string;
  /**
   * Schema.org audience subtype. Use BusinessAudience for B2B operator-facing
   * pages (contractors, property managers, recruiters, sales). Use PeopleAudience
   * for pages targeting individual professionals (freelancers, realtors).
   */
  audienceKind?: "BusinessAudience" | "PeopleAudience";
}) {
  const url = buildCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": APP_ID },
    audience: {
      "@type": audienceKind,
      audienceType,
    },
  };
}
