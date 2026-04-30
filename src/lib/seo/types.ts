/**
 * Core SEO engine types. Shared across the registry, validator, sitemap, and
 * page templates. Concrete page payload shapes live alongside their data
 * (see `data/features.ts`, `data/industries.ts`, etc.) and the union of every
 * page variant is composed in `pageRegistry.ts`.
 */

import type { FeatureKey } from "./featureAvailability";

export const SEO_PAGE_TYPES = [
  "feature",
  "industry",
  "useCase",
  "guide",
  "areaCode",
  "comparison",
  "glossary",
  "tool",
] as const;
export type SeoPageType = (typeof SEO_PAGE_TYPES)[number];

export const SEO_PAGE_STATUSES = [
  "draft",
  "published",
  "noindex",
  "hidden",
] as const;
export type SeoPageStatus = (typeof SEO_PAGE_STATUSES)[number];

/**
 * URL prefix per page type. The dynamic route at
 * `src/app/<prefix>/[slug]/page.tsx` resolves a page from the registry and
 * the sitemap derives the canonical URL from `${prefix}/${slug}`.
 */
export const ROUTE_PREFIXES: Record<SeoPageType, string> = {
  feature: "/features",
  industry: "/industries",
  useCase: "/use-cases",
  guide: "/help",
  areaCode: "/numbers",
  comparison: "/compare",
  glossary: "/glossary",
  tool: "/tools",
};

export type ClaimSourceId = string;

/**
 * Shared fields every page in the registry must declare. Page-type-specific
 * data goes in `payload`, typed by the variant in `data/<type>s.ts`.
 *
 * `requiresFeatures` is the contract that prevents claim drift: a page cannot
 * be published if any feature it references is not "live" in
 * featureAvailability. The validator enforces this on every build.
 */
export type SeoPageCore = {
  slug: string;
  status: SeoPageStatus;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  requiresFeatures: FeatureKey[];
  tags?: string[];
};
