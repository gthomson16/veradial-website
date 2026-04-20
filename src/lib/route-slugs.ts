/**
 * Shared route slugs for pages that are generated per-slug but don't have a
 * single data file driving them (compare, use-cases). Imported by sitemap.ts
 * and llms.txt/route.ts so both stay in sync.
 *
 * Dynamic routes with their own data sources stay there:
 *   - `/alternatives/[competitor]` → `getAllAlternativesSlugs()` in alternatives-data.ts
 *   - `/numbers/[areaCode]` → `AREA_CODES` in area-codes.ts
 */

export const COMPARE_SLUGS = [
  "google-voice",
  "textnow",
  "sideline",
  "burner",
  "hushed",
  "spoofcard",
  "openphone",
  "grasshopper",
  "dialpad",
  "ringcentral",
  "vonage",
  "line2",
  "iplum",
] as const;

export type CompareSlug = (typeof COMPARE_SLUGS)[number];

export const COMPARE_NAMES: Record<CompareSlug, string> = {
  "google-voice": "Google Voice",
  textnow: "TextNow",
  sideline: "Sideline",
  burner: "Burner",
  hushed: "Hushed",
  spoofcard: "SpoofCard",
  openphone: "OpenPhone",
  grasshopper: "Grasshopper",
  dialpad: "Dialpad",
  ringcentral: "RingCentral",
  vonage: "Vonage",
  line2: "Line2",
  iplum: "iPlum",
};

export const USE_CASE_SLUGS = [
  "contractors",
  "realtors",
  "freelancers",
  "sales",
  "property-managers",
  "recruiters",
] as const;

export type UseCaseSlug = (typeof USE_CASE_SLUGS)[number];

export const USE_CASE_NAMES: Record<UseCaseSlug, string> = {
  contractors: "Contractors",
  realtors: "Realtors",
  freelancers: "Freelancers",
  sales: "Sales Teams",
  "property-managers": "Property Managers",
  recruiters: "Recruiters",
};
