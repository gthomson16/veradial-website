/**
 * Industry pages. Empty stub for v1 — the type signature is in place so that
 * adding industry pages later is data work plus one new template (at
 * `src/app/industries/[slug]/page.tsx`), not a registry rewrite.
 *
 * Quality rules in `qualityRules.ts` already enforce the per-page minimum
 * payload (intake questions, scenarios, objections, faqs) so an industry
 * page can't ship thin.
 */

import type { SeoPageCore } from "../types";

export type IndustryPagePayload = {
  industryKey: string;
  // Expand when the industry template ships:
  //   intakeQuestions: string[];
  //   scenarios: { context: string; aiBehavior: string }[];
  //   objections: { objection: string; response: string }[];
  //   faqs: { question: string; answer: string; sourceId?: ClaimSourceId }[];
};

export type IndustryPage = SeoPageCore & {
  type: "industry";
  payload: IndustryPagePayload;
};

export const INDUSTRY_PAGES: IndustryPage[] = [];
