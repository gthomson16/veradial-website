/**
 * Per-page-type minimum-payload requirements. The validator runs every
 * published page through these rules; a violation downgrades the page to
 * `draft` (in soft mode) or fails the build (in strict mode).
 *
 * The point of these rules is to make "thin programmatic page" structurally
 * impossible. If the engine cannot fill the required slots from real data,
 * the page is not eligible to be published.
 */

export type QualityRule = {
  // Universal copy-length rules.
  titleMinChars: number;
  titleMaxChars: number;
  descriptionMinChars: number;
  descriptionMaxChars: number;
  keywordsMin: number;
  keywordsMax: number;

  // Internal link minimum (manual + auto-derived).
  internalLinksMin: number;

  // Page-type-specific minimums for unique payload slots. Each key here
  // refers to a top-level array on the page payload. The validator counts
  // entries and asserts the count meets the minimum.
  payloadMinimums: Record<string, number>;
};

export const QUALITY_THRESHOLD = 0.7;

export const QUALITY_RULES: Record<string, QualityRule> = {
  feature: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 200,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      "hero.bullets": 3,
      capabilities: 4,
      scenarios: 2,
      faqs: 4,
    },
  },
  industry: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 200,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      intakeQuestions: 5,
      scenarios: 3,
      objections: 2,
      faqs: 4,
    },
  },
  useCase: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 200,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      scenarios: 3,
      capabilities: 3,
      faqs: 4,
    },
  },
  guide: {
    titleMinChars: 25,
    titleMaxChars: 80,
    descriptionMinChars: 90,
    descriptionMaxChars: 220,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      sections: 3,
      faqs: 3,
    },
  },
  areaCode: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 220,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      bestForIndustries: 3,
      faq: 3,
    },
  },
  comparison: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 200,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      differences: 3,
      faqs: 3,
    },
  },
  glossary: {
    titleMinChars: 15,
    titleMaxChars: 75,
    descriptionMinChars: 60,
    descriptionMaxChars: 200,
    keywordsMin: 3,
    keywordsMax: 10,
    internalLinksMin: 2,
    payloadMinimums: {
      definitionParagraphs: 2,
    },
  },
  tool: {
    titleMinChars: 25,
    titleMaxChars: 75,
    descriptionMinChars: 90,
    descriptionMaxChars: 200,
    keywordsMin: 4,
    keywordsMax: 12,
    internalLinksMin: 3,
    payloadMinimums: {
      inputs: 1,
    },
  },
};

export function getQualityRule(type: string): QualityRule | undefined {
  return QUALITY_RULES[type];
}

/**
 * Score a page from 0 (failing) to 1 (perfect). Used for ranking and
 * threshold-based publish gating. Hard violations (missing required slots,
 * unsupported claims) should be detected by validatePages, not this score.
 */
export function scorePageQuality(checks: {
  titleLen: number;
  descLen: number;
  keywordCount: number;
  payloadHits: number;
  payloadTotal: number;
  internalLinks: number;
  rule: QualityRule;
}): number {
  const {
    titleLen,
    descLen,
    keywordCount,
    payloadHits,
    payloadTotal,
    internalLinks,
    rule,
  } = checks;

  const titleOk =
    titleLen >= rule.titleMinChars && titleLen <= rule.titleMaxChars ? 1 : 0;
  const descOk =
    descLen >= rule.descriptionMinChars && descLen <= rule.descriptionMaxChars
      ? 1
      : 0;
  const keywordsOk =
    keywordCount >= rule.keywordsMin && keywordCount <= rule.keywordsMax
      ? 1
      : 0;
  const linksOk = internalLinks >= rule.internalLinksMin ? 1 : 0;
  const payloadRatio = payloadTotal === 0 ? 1 : payloadHits / payloadTotal;

  // Weights: payload coverage is the dominant signal.
  return (
    payloadRatio * 0.5 +
    titleOk * 0.1 +
    descOk * 0.15 +
    keywordsOk * 0.1 +
    linksOk * 0.15
  );
}
