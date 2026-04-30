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
    aiScreeningDailyLimit: 50,
    aiScreeningMaxSeconds: 30,
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

function formatUsd(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

function formatCredits(value: number): string {
  return `${formatNumber(value)} ${value === 1 ? "credit" : "credits"}`;
}

function formatCreditRate(value: number, unit: string): string {
  return `${formatCredits(value)} per ${unit}`;
}

const firstCreditPack = PRODUCT_FACTS.creditPacks[0];
const lastCreditPack =
  PRODUCT_FACTS.creditPacks[PRODUCT_FACTS.creditPacks.length - 1];

export const PRODUCT_FACT_COPY = {
  monthlyLine: `${formatUsd(PRODUCT_FACTS.pricing.monthlyLineUsd)}/mo per line`,
  monthlyIncludedCredits: `${formatCredits(
    PRODUCT_FACTS.pricing.monthlyIncludedCredits,
  )} included credits`,
  monthlyIncludedCreditsShort: formatCredits(
    PRODUCT_FACTS.pricing.monthlyIncludedCredits,
  ),
  creditPacksFrom: `credit packs from ${formatUsd(firstCreditPack.priceUsd)}`,
  creditPackRange: `credit packs run from ${formatUsd(
    firstCreditPack.priceUsd,
  )} (${formatCredits(firstCreditPack.credits)}) to ${formatUsd(
    lastCreditPack.priceUsd,
  )} (${formatCredits(lastCreditPack.credits)})`,
  creditsNeverExpire: PRODUCT_FACTS.pricing.creditsExpire
    ? "Credits expire according to the active plan terms"
    : "Credits never expire",
  aiCallsPerHour: `${PRODUCT_FACTS.capacity.aiCallsPerHour} AI calls per hour`,
  aiCallRate: formatCreditRate(PRODUCT_FACTS.creditRates.aiCallPerMin, "minute"),
  aiCallRateShort: `${formatCredits(PRODUCT_FACTS.creditRates.aiCallPerMin)}/min`,
  standardCallRateShort: `${formatCredits(
    PRODUCT_FACTS.creditRates.standardCallPerMin,
  )}/min`,
  recordedCallRateShort: `${formatCredits(
    PRODUCT_FACTS.creditRates.recordedCallPerMin,
  )}/min`,
  recordingSurcharge: formatCreditRate(
    PRODUCT_FACTS.creditRates.recordedCallPerMin -
      PRODUCT_FACTS.creditRates.standardCallPerMin,
    "minute",
  ),
  smsSegmentRate: `${formatCredits(
    PRODUCT_FACTS.creditRates.smsPerSegment,
  )} per ${PRODUCT_FACTS.creditRates.smsSegmentChars}-character segment`,
  numberSwap: formatUsd(PRODUCT_FACTS.numberSwapUsd),
  numbersPerAccount: `${PRODUCT_FACTS.capacity.numbersPerAccount} numbers per account`,
  voicemailMaxMinutes: `${PRODUCT_FACTS.capacity.voicemailMaxMinutes}-minute messages`,
  aiVoiceOptionsForCalls: `${PRODUCT_FACTS.capacity.aiVoiceOptionsForCalls} voices`,
  aiVoiceOptionsForGreetings: `${PRODUCT_FACTS.capacity.aiVoiceOptionsForGreetings} AI voices`,
  aiScreeningMaxDuration: `${PRODUCT_FACTS.capacity.aiScreeningMaxSeconds}-second max duration`,
  aiScreeningDailyCap: `${PRODUCT_FACTS.capacity.aiScreeningDailyLimit} screenings per day per line`,
} as const;
