/**
 * External sources for any non-trivial factual claim made by an SEO page.
 *
 * Pages may reference a source by id (e.g. in an FAQ answer or capability)
 * to document where the underlying claim comes from. The validator enforces
 * that every referenced id resolves to an entry here. This is the trust
 * layer: review counts, regulatory facts, third-party stats, and
 * compliance-adjacent statements should all cite a source.
 *
 * Internal product facts (price, included credits, supported countries) do
 * not need a source — they live in productFacts.ts and are self-evidencing.
 */

import type { ClaimSourceId } from "./types";

export type ClaimSource = {
  id: ClaimSourceId;
  label: string;
  href: string;
  description: string;
};

export const CLAIM_SOURCES: Record<ClaimSourceId, ClaimSource> = {
  fcc_call_authentication: {
    id: "fcc_call_authentication",
    label: "FCC call authentication",
    href: "https://www.fcc.gov/call-authentication",
    description:
      "US regulator overview of caller ID authentication and STIR/SHAKEN policy.",
  },
  fcc_traced_act: {
    id: "fcc_traced_act",
    label: "FCC TRACED Act implementation",
    href: "https://www.fcc.gov/TRACEDAct",
    description:
      "TRACED Act implementation page covering robocall mitigation requirements.",
  },
  fcc_ai_robocall_ruling: {
    id: "fcc_ai_robocall_ruling",
    label: "FCC AI-generated voice robocall ruling",
    href: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal",
    description:
      "US regulator ruling on AI-generated voices in robocalls and consent obligations.",
  },
  ftc_ai_claims: {
    id: "ftc_ai_claims",
    label: "FTC AI claims guidance",
    href: "https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check",
    description:
      "Business guidance on making clear, supportable claims about AI-powered products.",
  },
  crtc_caller_id_spoofing: {
    id: "crtc_caller_id_spoofing",
    label: "CRTC caller ID spoofing",
    href: "https://crtc.gc.ca/eng/phone/telemarketing/identit.htm",
    description:
      "Canadian regulator explanation of spoofing, traceback, and STIR/SHAKEN caller ID authentication.",
  },
  twilio_stir_shaken: {
    id: "twilio_stir_shaken",
    label: "Twilio STIR/SHAKEN trusted calling",
    href: "https://www.twilio.com/en-us/trust/shaken-stir",
    description:
      "Carrier infrastructure reference for STIR/SHAKEN trust authentication.",
  },
  rcmp_call_recording_law: {
    id: "rcmp_call_recording_law",
    label: "Office of the Privacy Commissioner of Canada — recording calls",
    href: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/",
    description:
      "Canadian guidance on PIPEDA obligations when recording phone conversations.",
  },
  reporters_committee_recording: {
    id: "reporters_committee_recording",
    label: "Reporters Committee — recording laws by state",
    href: "https://www.rcfp.org/reporters-recording-guide/",
    description:
      "State-by-state summary of one-party vs all-party consent recording laws in the US.",
  },
};

export function getClaimSource(id: ClaimSourceId): ClaimSource | undefined {
  return CLAIM_SOURCES[id];
}

export function isClaimSource(id: string): id is ClaimSourceId {
  return id in CLAIM_SOURCES;
}
