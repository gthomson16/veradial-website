/**
 * Canonical map of product features and their current availability.
 *
 * The validator gates publishing on this map: a page with status "published"
 * may only require features that are "live" or "beta". A "coming_soon" or
 * "hidden" feature blocks publishing — keep the page as `draft` instead.
 *
 * When a feature ships or changes state, update it here and rebuild — every
 * page that references it is re-validated automatically.
 */

export type FeatureAvailability = "live" | "beta" | "coming_soon" | "hidden";

export const FEATURE_AVAILABILITY = {
  ai_calling: "live",
  ai_call_screening: "live",
  ai_receptionist: "coming_soon",
  verified_caller_id: "live",
  business_phone_number: "live",
  business_sms: "live",
  voicemail_transcription: "live",
  voicemail_custom_greetings: "live",
  call_recording: "live",
  call_forwarding: "live",
  call_map: "live",
  number_verification: "live",
  number_swap: "live",
  ai_voice_options: "live",
  call_transcripts: "live",
  call_summaries: "live",
} as const satisfies Record<string, FeatureAvailability>;

export type FeatureKey = keyof typeof FEATURE_AVAILABILITY;

export function getFeatureAvailability(key: FeatureKey): FeatureAvailability {
  return FEATURE_AVAILABILITY[key];
}

const PUBLISHABLE_STATES: ReadonlySet<FeatureAvailability> = new Set([
  "live",
  "beta",
]);

export function isFeaturePublishable(key: FeatureKey): boolean {
  return PUBLISHABLE_STATES.has(FEATURE_AVAILABILITY[key]);
}
