/**
 * Deterministic internal-link computation. Combines page-declared manual
 * links (always included) with auto-derived links from the registry, sorted
 * by relevance score. Ties break on slug to keep ordering stable across
 * builds — diff noise on this section is a sign of registry change, not
 * algorithm churn.
 *
 * Decoupled from the concrete `SeoPage` union: takes anything shaped like
 * `LinkablePage`, which keeps this module free of cycles with pageRegistry.
 */

import { ROUTE_PREFIXES, type SeoPageType } from "./types";
import type { FeatureKey } from "./featureAvailability";

export type InternalLink = {
  label: string;
  href: string;
  description: string;
  source: "manual" | "auto";
};

/**
 * Manual links a page can declare in its payload. Both registry-internal
 * (`href: "/features/foo"`) and curated site routes (`/pricing`, `/help/...`)
 * are valid. Route existence is enforced by the registry validator; this module
 * only merges and orders the links.
 */
export type ManualLink = {
  label: string;
  href: string;
  description: string;
};

export type LinkablePage = {
  slug: string;
  type: SeoPageType;
  status: "draft" | "published" | "noindex" | "hidden";
  title: string;
  description: string;
  requiresFeatures: FeatureKey[];
  tags?: string[];
};

export type LinkOptions = {
  /** Hard cap. Default 6. */
  max?: number;
  /** Restrict auto-link candidates to these page types. */
  candidateTypes?: SeoPageType[];
};

export function getCanonicalPath(
  page: Pick<LinkablePage, "type" | "slug">,
): string {
  return `${ROUTE_PREFIXES[page.type]}/${page.slug}`;
}

/**
 * Score how related two pages are. Higher = more relevant.
 *
 * Weights are intentionally simple and reviewable. Tweak only with a
 * reason — these affect every internal link section in the engine.
 */
export function scoreLinkRelevance(a: LinkablePage, b: LinkablePage): number {
  if (a.slug === b.slug && a.type === b.type) return 0;

  let score = 0;
  let sharedSignals = 0;

  const aTags = a.tags ?? [];
  const bTags = b.tags ?? [];
  for (const tag of aTags) {
    if (bTags.includes(tag)) {
      score += 3;
      sharedSignals += 1;
    }
  }

  for (const f of a.requiresFeatures) {
    if (b.requiresFeatures.includes(f)) {
      score += 2;
      sharedSignals += 1;
    }
  }

  if (sharedSignals === 0) return 0;

  if (a.type === b.type) {
    score += 1;
  } else {
    // Cross-cluster discovery, only after a real shared signal exists.
    score += 0.5;
  }

  return score;
}

export function getInternalLinks(
  page: LinkablePage,
  allPages: LinkablePage[],
  manualLinks: ManualLink[] = [],
  options: LinkOptions = {},
): InternalLink[] {
  const max = options.max ?? 6;
  const candidateTypes = options.candidateTypes;

  const candidates = allPages
    .filter((p) => {
      if (p.slug === page.slug && p.type === page.type) return false;
      if (p.status !== "published") return false;
      if (candidateTypes && !candidateTypes.includes(p.type)) return false;
      return true;
    })
    .map((p) => ({
      page: p,
      score: scoreLinkRelevance(page, p),
    }))
    .filter((c) => c.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.page.type !== b.page.type) {
        return a.page.type.localeCompare(b.page.type);
      }
      return a.page.slug.localeCompare(b.page.slug);
    });

  const auto: InternalLink[] = candidates.map(({ page: p }) => ({
    label: p.title,
    href: getCanonicalPath(p),
    description: p.description,
    source: "auto",
  }));

  const seen = new Set<string>();
  const result: InternalLink[] = [];

  for (const link of manualLinks) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    result.push({ ...link, source: "manual" });
    if (result.length >= max) return result;
  }

  for (const link of auto) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    result.push(link);
    if (result.length >= max) break;
  }

  return result;
}
