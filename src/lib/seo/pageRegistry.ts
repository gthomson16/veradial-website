/**
 * Single source of truth for every SEO-engine-managed page. Aggregates
 * per-type data files into a tagged-union list. The dynamic route templates,
 * the sitemap, the validator, and the link computer all read from here.
 *
 * Adding a new page type:
 *   1. Create `data/<type>s.ts` exporting `<TYPE>_PAGES` and the page variant.
 *   2. Add the variant to the `SeoPage` union below and spread the array
 *      into `SEO_PAGES`.
 *   3. Add a quality rule for the type in `qualityRules.ts`.
 *   4. Add a route template at `src/app/<prefix>/[slug]/page.tsx` that uses
 *      `generateStaticParams` to enumerate published slugs of that type.
 */

import { ROUTE_PREFIXES } from "./types";
import { FEATURE_PAGES, type FeaturePage } from "./data/features";
import { INDUSTRY_PAGES, type IndustryPage } from "./data/industries";
import { GLOSSARY_PAGES, type GlossaryPage } from "./data/glossary";

export type SeoPage = FeaturePage | IndustryPage | GlossaryPage;

export const SEO_PAGES: SeoPage[] = [
  ...FEATURE_PAGES,
  ...INDUSTRY_PAGES,
  ...GLOSSARY_PAGES,
];

export function getPageBySlug<T extends SeoPage["type"]>(
  type: T,
  slug: string,
): Extract<SeoPage, { type: T }> | undefined {
  return SEO_PAGES.find(
    (p): p is Extract<SeoPage, { type: T }> =>
      p.type === type && p.slug === slug,
  );
}

export function getPagesByType<T extends SeoPage["type"]>(
  type: T,
): Extract<SeoPage, { type: T }>[] {
  return SEO_PAGES.filter(
    (p): p is Extract<SeoPage, { type: T }> => p.type === type,
  );
}

export function getPublishedPages(): SeoPage[] {
  return SEO_PAGES.filter((p) => p.status === "published");
}

export function getPublishedPagesByType<T extends SeoPage["type"]>(
  type: T,
): Extract<SeoPage, { type: T }>[] {
  return getPagesByType(type).filter((p) => p.status === "published");
}

export function getCanonicalPath(
  page: Pick<SeoPage, "type" | "slug">,
): string {
  return `${ROUTE_PREFIXES[page.type]}/${page.slug}`;
}

/**
 * Pages that should appear in the sitemap. `published` pages are indexed and
 * sitemap-listed. `noindex` pages are reachable but excluded from the
 * sitemap. `draft` and `hidden` are excluded from both.
 */
export function getSitemapEligiblePages(): SeoPage[] {
  return SEO_PAGES.filter((p) => p.status === "published");
}
