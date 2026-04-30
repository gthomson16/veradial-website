/**
 * AI receptionist facts (inbound). Gated by featureAvailability:
 * `ai_receptionist` is currently "coming_soon", so any page that references
 * these capabilities must be `draft` until the feature ships.
 *
 * When the LiveKit-backed receptionist lands, flip
 * featureAvailability.ai_receptionist to "beta" or "live" — every receptionist
 * page in the registry will become eligible for publishing on the next build.
 *
 * Until then, treat this file as the spec the receptionist must satisfy
 * before pages can claim the behavior described here.
 */

export const RECEPTIONIST_FACTS = {
  // What the receptionist will do at launch.
  capabilitiesAtLaunch: [
    "Answer missed calls during set business hours and after hours",
    "Identify itself as an AI assistant calling on behalf of the business",
    "Collect caller name, return number, and reason for the call",
    "Capture access notes and intake details specified by the operator",
    "Send the operator a transcript and summary after every call",
    "Optionally send the caller an SMS confirmation or follow-up",
  ],
  // What the receptionist will explicitly NOT do at launch. Pages must not
  // claim these behaviors.
  explicitNonCapabilitiesAtLaunch: [
    "Quote prices, availability, or commitments not pre-configured by the operator",
    "Schedule on calendars without an operator-defined booking flow",
    "Live-transfer calls without an operator-defined transfer rule",
    "Handle emergencies (calls referencing 911-tier urgency are flagged for the operator)",
    "Take payments or read back account details",
  ],
  // Operator-side controls.
  operatorControls: [
    "Business hours and after-hours behavior",
    "Industry-specific intake questions",
    "Forbidden topics and escalation rules",
    "SMS follow-up template",
    "Voicemail fallback when the caller declines AI",
  ],
} as const;
