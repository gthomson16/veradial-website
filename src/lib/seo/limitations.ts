/**
 * Hard limits and explicit non-capabilities. Pages must not contradict these.
 * If a claim implies VeraDial does something listed here, the validator
 * should catch it via the requiresFeatures gate or human review.
 *
 * Mirrors the "Not Available / Out of Scope" block in the llms.txt route —
 * keep them aligned.
 */

export const LIMITATIONS = {
  // Coverage limits.
  noInternationalOutsideUsCanada: true,
  noFreeTier: true,
  noUnlimitedCallingOrSms: true,
  noSharedTeamNumbers: true,
  noSharedInbox: true,
  noBurnerOrThrowawayNumbers: true,

  // Compliance / regulated workflows.
  noCallerIdSpoofing: true,
  noHipaaCompliance: true,
  noLawEnforcementDisclosure: true,

  // Channel scope.
  noVideoConferencing: true,
  noFax: true,
  noTeamChat: true,

  // SMS limits.
  smsRequiresProvisionedNumber: true,
  // Verified existing numbers can be used for outbound voice as a secondary
  // caller ID, but SMS only flows through VeraDial-provisioned numbers (carrier
  // 10DLC compliance).
  smsOnVerifiedExistingNumbers: false,

  // Bulk / blast use is out of scope (10DLC carrier policy + product intent).
  bulkOrBlastSms: false,

  // Toll-free SMS.
  canadianTollFreeSmsRequiresVerification: true,
} as const;
