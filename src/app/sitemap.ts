import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { AREA_CODES } from "@/lib/area-codes";
import { getAllAlternativesSlugs } from "@/lib/alternatives-data";
import { getAllHelpSlugs } from "@/lib/help-content";
import { COMPARE_SLUGS, USE_CASE_SLUGS } from "@/lib/route-slugs";
import {
  getSitemapEligiblePages,
  getCanonicalPath,
} from "@/lib/seo/pageRegistry";
import { assertRegistryValid } from "@/lib/seo/validatePages";
import { STATIC_SITEMAP_PATHS } from "@/lib/seo/routes";

const BASE_URL = "https://veradial.com";
const APP_DIR = join(process.cwd(), "src", "app");
const FALLBACK_DATE = new Date("2026-04-20");

/**
 * Read the most recent mtime for a page's sources. Falls back to a stable date
 * if any source can't be stat'd (e.g. when the build runs in an environment
 * where the files aren't on disk). Tries multiple candidates so dynamic routes
 * can report the mtime of their shared data file.
 */
function lastModifiedFor(...relativePaths: string[]): Date {
  let latest: Date | null = null;
  for (const rel of relativePaths) {
    try {
      const stat = statSync(join(APP_DIR, rel));
      if (!latest || stat.mtime > latest) {
        latest = stat.mtime;
      }
    } catch {
      // Skip missing files; keep searching other candidates.
    }
  }
  return latest ?? FALLBACK_DATE;
}

function lastModifiedForAbs(absolutePath: string): Date {
  try {
    return statSync(absolutePath).mtime;
  } catch {
    return FALLBACK_DATE;
  }
}

function dateFromSeoPageDate(value: string): Date {
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? FALLBACK_DATE : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Build-time gate: a violating page in the SEO registry fails the build
  // here with a precise error rather than shipping a broken page.
  assertRegistryValid();

  const alternativesDataPath = join(
    process.cwd(),
    "src",
    "lib",
    "alternatives-data.ts",
  );
  const areaCodesDataPath = join(
    process.cwd(),
    "src",
    "lib",
    "area-codes.ts",
  );
  const helpDataPath = join(process.cwd(), "src", "lib", "help-content.ts");
  const entries: MetadataRoute.Sitemap = STATIC_SITEMAP_PATHS.map(
    ({ path, sourcePaths }) => ({
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      lastModified: lastModifiedFor(...sourcePaths),
    }),
  );

  for (const slug of COMPARE_SLUGS) {
    entries.push({
      url: `${BASE_URL}/compare/${slug}`,
      lastModified: lastModifiedFor(`compare/${slug}/page.tsx`),
    });
  }

  for (const slug of getAllAlternativesSlugs()) {
    entries.push({
      url: `${BASE_URL}/alternatives/${slug}`,
      lastModified: lastModifiedForAbs(alternativesDataPath),
    });
  }

  for (const slug of getAllHelpSlugs()) {
    entries.push({
      url: `${BASE_URL}/help/${slug}`,
      lastModified: lastModifiedForAbs(helpDataPath),
    });
  }

  for (const slug of USE_CASE_SLUGS) {
    entries.push({
      url: `${BASE_URL}/use-cases/${slug}`,
      lastModified: lastModifiedFor(`use-cases/${slug}/page.tsx`),
    });
  }

  // SEO registry pages. Only `published` pages are included; `draft` and
  // `noindex` entries are excluded by design.
  for (const page of getSitemapEligiblePages()) {
    entries.push({
      url: `${BASE_URL}${getCanonicalPath(page)}`,
      lastModified: dateFromSeoPageDate(page.updatedAt),
    });
  }

  for (const ac of AREA_CODES) {
    entries.push({
      url: `${BASE_URL}/numbers/${ac.code}`,
      lastModified: lastModifiedForAbs(areaCodesDataPath),
    });
  }

  return entries;
}
