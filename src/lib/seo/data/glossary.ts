/**
 * Glossary pages. Empty stub for v1. The type signature is in place so the
 * glossary template can ship later as data + one new route.
 */

import type { SeoPageCore } from "../types";

export type GlossaryPagePayload = {
  term: string;
  definition: string;
  // Expand when glossary template ships:
  //   definitionParagraphs: string[];
  //   relatedTerms: string[];
};

export type GlossaryPage = SeoPageCore & {
  type: "glossary";
  payload: GlossaryPagePayload;
};

export const GLOSSARY_PAGES: GlossaryPage[] = [];
