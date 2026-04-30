/**
 * Product facts that pages compose into copy. Centralizing pricing, credit
 * rates, and capacity numbers means a single change here propagates to every
 * page on the next build — no copy hunt across 1,000+ files.
 *
 * Source of truth: ../../../VeraDial/website.md. If website.md changes, mirror
 * the change here and update the timestamp comment so reviewers can verify.
 *
 * Last verified against website.md on 2026-04-30.
 */

export const PRODUCT_FACTS = {
  productName: "VeraDial",
  productCategory: "AI-powered business calling",
  pricing: {
    monthlyLineUsd: 9.99,
    trialDays: 3,
    trialBonusCredits: 50,
    monthlyIncludedCredits: 100,
    creditsExpire: false,
  },
  creditPacks: [
    { credits: 100, priceUsd: 5.99 },
    { credits: 300, priceUsd: 14.99 },
    { credits: 1000, priceUsd: 39.99 },
  ],
  creditRates: {
    standardCallPerMin: 2,
    recordedCallPerMin: 3,
    aiCallPerMin: 5,
    smsPerSegment: 1,
    smsSegmentChars: 160,
  },
  numberSwapUsd: 4.99,
  capacity: {
    numbersPerAccount: 5,
    aiCallsPerHour: 5,
    voicemailMaxMinutes: 2,
    aiVoiceOptionsForCalls: 5,
    aiVoiceOptionsForGreetings: 6,
  },
  coverage: {
    countries: ["United States", "Canada"] as const,
    numberTypes: ["local", "toll-free"] as const,
  },
  platforms: {
    ios: true,
    android: true,
    web: false,
  },
  storeUrls: {
    appStore: "https://apps.apple.com/us/app/veradial/id6760608537",
    googlePlay: "https://play.google.com/store/apps/details?id=com.veradial.app",
  },
  infrastructure: {
    carrierProvider: "Twilio",
    soc2Compliant: true,
    encryption: "TLS in transit",
  },
  emergency: {
    blockedNumbers: ["911", "999", "112"] as const,
  },
} as const;
