import type { FeatureKey } from "./featureAvailability";

export type FeatureClaimMatch = {
  feature: FeatureKey;
  label: string;
  matchedText: string;
};

type FeatureClaimRule = {
  feature: FeatureKey;
  label: string;
  patterns: RegExp[];
};

/**
 * Text-level guardrails for feature claims that are easy to mention in copy
 * without adding the corresponding structured `requiresFeatures` key.
 */
const FEATURE_CLAIM_RULES: FeatureClaimRule[] = [
  {
    feature: "ai_receptionist",
    label: "AI receptionist",
    patterns: [
      /\bAI receptionist\b/i,
      /\bAI virtual receptionist\b/i,
      /\bAI answering service\b/i,
      /\bautomated receptionist\b/i,
    ],
  },
];

export function collectFeatureClaimMatches(value: unknown): FeatureClaimMatch[] {
  const matches: FeatureClaimMatch[] = [];

  function walk(v: unknown): void {
    if (typeof v === "string") {
      for (const rule of FEATURE_CLAIM_RULES) {
        for (const pattern of rule.patterns) {
          const match = v.match(pattern);
          if (match?.[0]) {
            matches.push({
              feature: rule.feature,
              label: rule.label,
              matchedText: match[0],
            });
          }
        }
      }
      return;
    }

    if (Array.isArray(v)) {
      for (const item of v) walk(item);
      return;
    }

    if (v && typeof v === "object") {
      for (const child of Object.values(v as Record<string, unknown>)) {
        walk(child);
      }
    }
  }

  walk(value);
  return matches;
}
