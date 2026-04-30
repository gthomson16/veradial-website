/**
 * Build-time SEO registry validator.
 *
 * Rules enforced:
 *   - Slug uniqueness within page type
 *   - requiresFeatures keys exist in featureAvailability
 *   - Published pages may only require live or beta features
 *   - Published pages must satisfy per-type quality rules:
 *       title length, description length, keyword count
 *       payload minimums (e.g. ≥4 capabilities, ≥4 faqs)
 *       internal-link count (manual + auto-derived)
 *   - Every referenced claim source resolves to claimSources.ts
 *   - Quality score ≥ QUALITY_THRESHOLD
 *
 * Drafts get the lighter check (slug uniqueness, feature key validity, claim
 * source resolution). Hidden pages are skipped entirely.
 *
 * Called from sitemap.ts via `assertRegistryValid()` so a violating page
 * fails the build with a precise error. Also exported as a pure function for
 * the standalone `seo:validate` script.
 */

import { CLAIM_SOURCES } from "./claimSources";
import {
  FEATURE_AVAILABILITY,
  isFeaturePublishable,
  type FeatureKey,
} from "./featureAvailability";
import { collectFeatureClaimMatches } from "./claimRules";
import {
  QUALITY_RULES,
  QUALITY_THRESHOLD,
  scorePageQuality,
} from "./qualityRules";
import { SEO_PAGES, type SeoPage } from "./pageRegistry";
import {
  getCanonicalPath,
  getInternalLinks,
  type ManualLink,
} from "./internalLinks";
import { AREA_CODES } from "../area-codes";
import { getAllAlternativesSlugs } from "../alternatives-data";
import { getAllHelpSlugs } from "../help-content";
import { COMPARE_SLUGS, USE_CASE_SLUGS } from "../route-slugs";

export type ValidationIssue = {
  level: "error" | "warning";
  pageKey: string;
  message: string;
};

export type ValidationResult = {
  ok: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  scoresByPage: Record<string, number>;
};

function pageKey(p: SeoPage): string {
  return `${p.type}:${p.slug}`;
}

function getPayloadCount(
  payload: Record<string, unknown>,
  path: string,
): number {
  const parts = path.split(".");
  let cur: unknown = payload;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return 0;
    cur = (cur as Record<string, unknown>)[part];
  }
  if (Array.isArray(cur)) return cur.length;
  if (cur && typeof cur === "object") {
    return Object.keys(cur as Record<string, unknown>).length;
  }
  return cur ? 1 : 0;
}

function getManualLinks(p: SeoPage): ManualLink[] {
  const payload = (p as { payload?: Record<string, unknown> }).payload;
  if (!payload) return [];
  const ml = (payload as { manualLinks?: unknown }).manualLinks;
  return Array.isArray(ml) ? (ml as ManualLink[]) : [];
}

const STATIC_INTERNAL_PATHS = [
  "/",
  "/about",
  "/alternatives",
  "/compare",
  "/delete-account",
  "/faq",
  "/help",
  "/numbers",
  "/pricing",
  "/privacy",
  "/screenshots",
  "/stir-shaken-for-small-business",
  "/terms",
  "/try",
  "/use-cases",
] as const;

function normalizeInternalHref(href: string): string | null {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const [withoutHash] = href.split("#");
  const [path] = withoutHash.split("?");
  if (!path) return "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

function getKnownInternalPaths(): Set<string> {
  const paths = new Set<string>(STATIC_INTERNAL_PATHS);

  for (const slug of getAllHelpSlugs()) paths.add(`/help/${slug}`);
  for (const slug of getAllAlternativesSlugs()) {
    paths.add(`/alternatives/${slug}`);
  }
  for (const slug of COMPARE_SLUGS) paths.add(`/compare/${slug}`);
  for (const slug of USE_CASE_SLUGS) paths.add(`/use-cases/${slug}`);
  for (const areaCode of AREA_CODES) paths.add(`/numbers/${areaCode.code}`);

  for (const page of SEO_PAGES) {
    if (page.status === "published" || page.status === "noindex") {
      paths.add(getCanonicalPath(page));
    }
  }

  return paths;
}

function collectSourceIds(payload: Record<string, unknown>): string[] {
  const ids: string[] = [];
  function walk(v: unknown): void {
    if (Array.isArray(v)) {
      for (const item of v) walk(item);
      return;
    }
    if (v && typeof v === "object") {
      const obj = v as Record<string, unknown>;
      if (typeof obj.sourceId === "string") {
        ids.push(obj.sourceId);
      }
      for (const child of Object.values(obj)) walk(child);
    }
  }
  walk(payload);
  return ids;
}

export function validateRegistry(): ValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const scoresByPage: Record<string, number> = {};
  const knownInternalPaths = getKnownInternalPaths();

  // Slug uniqueness within type.
  const seen = new Map<string, SeoPage>();
  for (const p of SEO_PAGES) {
    const key = pageKey(p);
    if (seen.has(key)) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Duplicate slug within type "${p.type}": ${p.slug}`,
      });
    }
    seen.set(key, p);
  }

  for (const p of SEO_PAGES) {
    const key = pageKey(p);

    // Feature key existence (all statuses).
    for (const f of p.requiresFeatures) {
      if (!(f in FEATURE_AVAILABILITY)) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Unknown feature key in requiresFeatures: ${f}`,
        });
      }
    }

    // Hidden pages skip everything else.
    if (p.status === "hidden") continue;

    // Claim source resolution (drafts and live pages alike — easy to fix).
    const payload = (p as { payload?: Record<string, unknown> }).payload;
    if (payload) {
      for (const referenced of collectSourceIds(payload)) {
        if (!CLAIM_SOURCES[referenced]) {
          errors.push({
            level: "error",
            pageKey: key,
            message: `Unresolved claim source: "${referenced}"`,
          });
        }
      }
    }

    for (const claim of collectFeatureClaimMatches(p)) {
      if (!p.requiresFeatures.includes(claim.feature)) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Copy references ${claim.label} via "${claim.matchedText}" but requiresFeatures does not include "${claim.feature}". Add the feature key or remove the claim.`,
        });
      }
    }

    for (const link of getManualLinks(p)) {
      const normalized = normalizeInternalHref(link.href);
      if (!normalized) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Manual link "${link.href}" must be a site-relative internal URL so the validator can verify it.`,
        });
        continue;
      }
      if (!knownInternalPaths.has(normalized)) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Manual link "${link.href}" points to an unknown or non-routable internal URL.`,
        });
      }
    }

    // Drafts only get the light checks above.
    if (p.status === "draft") continue;

    // Published / noindex: check feature availability.
    for (const f of p.requiresFeatures) {
      if (!isFeaturePublishable(f as FeatureKey)) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Page is "${p.status}" but requires non-live feature "${f}" (state: ${FEATURE_AVAILABILITY[f as FeatureKey]}). Demote page to "draft" or update featureAvailability.`,
        });
      }
    }

    // Published pages get the full quality gate. Noindex pages can be
    // looser since they're not in the sitemap, so we only run the hard
    // rules for `published`.
    if (p.status !== "published") continue;

    const rule = QUALITY_RULES[p.type];
    if (!rule) {
      warnings.push({
        level: "warning",
        pageKey: key,
        message: `No quality rule defined for type "${p.type}"; skipping payload checks.`,
      });
      continue;
    }

    const titleLen = p.title.length;
    if (titleLen < rule.titleMinChars || titleLen > rule.titleMaxChars) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Title length ${titleLen} outside [${rule.titleMinChars}, ${rule.titleMaxChars}]: "${p.title}"`,
      });
    }

    const descLen = p.description.length;
    if (descLen < rule.descriptionMinChars || descLen > rule.descriptionMaxChars) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Description length ${descLen} outside [${rule.descriptionMinChars}, ${rule.descriptionMaxChars}]`,
      });
    }

    const kwCount = p.keywords.length;
    if (kwCount < rule.keywordsMin || kwCount > rule.keywordsMax) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Keyword count ${kwCount} outside [${rule.keywordsMin}, ${rule.keywordsMax}]`,
      });
    }

    let payloadHits = 0;
    const payloadTotal = Object.keys(rule.payloadMinimums).length;
    for (const [path, min] of Object.entries(rule.payloadMinimums)) {
      const count = getPayloadCount(payload ?? {}, path);
      if (count < min) {
        errors.push({
          level: "error",
          pageKey: key,
          message: `Payload "${path}" has ${count} item(s); minimum is ${min}`,
        });
      } else {
        payloadHits += 1;
      }
    }

    const links = getInternalLinks(p, SEO_PAGES, getManualLinks(p), {
      max: 6,
    });
    if (links.length < rule.internalLinksMin) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Internal links: ${links.length} (manual + auto); minimum is ${rule.internalLinksMin}`,
      });
    }

    const score = scorePageQuality({
      titleLen,
      descLen,
      keywordCount: kwCount,
      payloadHits,
      payloadTotal,
      internalLinks: links.length,
      rule,
    });
    scoresByPage[key] = score;

    if (score < QUALITY_THRESHOLD) {
      errors.push({
        level: "error",
        pageKey: key,
        message: `Quality score ${score.toFixed(2)} below threshold ${QUALITY_THRESHOLD}`,
      });
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    scoresByPage,
  };
}

/**
 * Throw if the registry has any validation errors. Use this in build-time
 * code paths (sitemap, generateStaticParams) so a violating page fails the
 * build with a precise message.
 */
export function assertRegistryValid(): void {
  const result = validateRegistry();
  if (!result.ok) {
    const lines = [
      `SEO registry validation failed (${result.errors.length} error${
        result.errors.length === 1 ? "" : "s"
      }):`,
      ...result.errors.map((e) => `  [${e.pageKey}] ${e.message}`),
    ];
    if (result.warnings.length) {
      lines.push("Warnings:");
      for (const w of result.warnings) {
        lines.push(`  [${w.pageKey}] ${w.message}`);
      }
    }
    throw new Error(lines.join("\n"));
  }
}
