import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { AREA_CODES } from "@/lib/area-codes";
import { getAllAlternativesSlugs } from "@/lib/alternatives-data";

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

export default function sitemap(): MetadataRoute.Sitemap {
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

  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastModifiedFor("page.tsx") },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: lastModifiedFor("pricing/page.tsx"),
    },
    {
      url: `${BASE_URL}/stir-shaken-for-small-business`,
      lastModified: lastModifiedFor("stir-shaken-for-small-business/page.tsx"),
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: lastModifiedFor("faq/page.tsx"),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: lastModifiedFor("about/page.tsx"),
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: lastModifiedFor("compare/page.tsx"),
    },
  ];

  const compareSlugs = [
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
  ];
  for (const slug of compareSlugs) {
    entries.push({
      url: `${BASE_URL}/compare/${slug}`,
      lastModified: lastModifiedFor(`compare/${slug}/page.tsx`),
    });
  }

  entries.push({
    url: `${BASE_URL}/alternatives`,
    lastModified: lastModifiedFor(
      "alternatives/page.tsx",
      "alternatives/[competitor]/page.tsx",
    ),
  });
  for (const slug of getAllAlternativesSlugs()) {
    entries.push({
      url: `${BASE_URL}/alternatives/${slug}`,
      lastModified: lastModifiedForAbs(alternativesDataPath),
    });
  }

  entries.push(
    {
      url: `${BASE_URL}/screenshots`,
      lastModified: lastModifiedFor("screenshots/page.tsx"),
    },
    {
      url: `${BASE_URL}/use-cases`,
      lastModified: lastModifiedFor("use-cases/page.tsx"),
    },
  );
  const useCaseSlugs = [
    "contractors",
    "realtors",
    "freelancers",
    "sales",
    "property-managers",
    "recruiters",
  ];
  for (const slug of useCaseSlugs) {
    entries.push({
      url: `${BASE_URL}/use-cases/${slug}`,
      lastModified: lastModifiedFor(`use-cases/${slug}/page.tsx`),
    });
  }

  entries.push({
    url: `${BASE_URL}/numbers`,
    lastModified: lastModifiedFor("numbers/page.tsx"),
  });
  for (const ac of AREA_CODES) {
    entries.push({
      url: `${BASE_URL}/numbers/${ac.code}`,
      lastModified: lastModifiedForAbs(areaCodesDataPath),
    });
  }

  entries.push(
    {
      url: `${BASE_URL}/privacy`,
      lastModified: lastModifiedFor("privacy/page.tsx"),
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: lastModifiedFor("terms/page.tsx"),
    },
    {
      url: `${BASE_URL}/delete-account`,
      lastModified: lastModifiedFor("delete-account/page.tsx"),
    },
  );

  return entries;
}
