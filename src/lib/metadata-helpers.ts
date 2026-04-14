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
    hasPart: items.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: buildCanonicalUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function buildComparisonPageJsonLd({
  name,
  description,
  path,
  comparedName,
}: {
  name: string;
  description: string;
  path: string;
  comparedName: string;
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
    mentions: {
      "@type": "SoftwareApplication",
      name: comparedName,
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
}: {
  name: string;
  description: string;
  path: string;
  audienceType: string;
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
      "@type": "Audience",
      audienceType,
    },
  };
}
