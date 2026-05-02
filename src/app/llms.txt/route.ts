import { AREA_CODES } from "@/lib/area-codes";
import {
  ALTERNATIVES_PAGES,
  getAllAlternativesSlugs,
} from "@/lib/alternatives-data";
import { HELP_PAGES } from "@/lib/help-content";
import {
  COMPARE_SLUGS,
  COMPARE_NAMES,
  USE_CASE_SLUGS,
  USE_CASE_NAMES,
} from "@/lib/route-slugs";
import { EXPLAINER_VIDEO_WATCH_URL } from "@/lib/explainer-video";

/**
 * llms.txt route — enumerated Links block is generated from the same data
 * sources sitemap.ts uses, so new compare/alternatives/use-case/area-code
 * pages are picked up automatically.
 */
export function GET() {
  const lastUpdated = new Date("2026-04-30").toISOString().slice(0, 10);

  const alternativeName = (slug: string) =>
    ALTERNATIVES_PAGES.find((p) => p.slug === slug)?.name ?? slug;

  const compareLinks = COMPARE_SLUGS.map(
    (slug) =>
      `- VeraDial vs ${COMPARE_NAMES[slug]}: https://veradial.com/compare/${slug}`,
  ).join("\n");

  const alternativeLinks = getAllAlternativesSlugs()
    .map(
      (slug) =>
        `- ${alternativeName(slug)} Alternatives: https://veradial.com/alternatives/${slug}`,
    )
    .join("\n");

  const useCaseLinks = USE_CASE_SLUGS.map(
    (slug) =>
      `- For ${USE_CASE_NAMES[slug]}: https://veradial.com/use-cases/${slug}`,
  ).join("\n");

  const helpLinks = HELP_PAGES.map(
    (page) => `- ${page.title}: https://veradial.com/help/${page.slug}`,
  ).join("\n");

  const areaCodeLinks = AREA_CODES.map(
    (ac) =>
      `- ${ac.code} (${ac.city}, ${ac.state}): https://veradial.com/numbers/${ac.code}`,
  ).join("\n");

  const content = `# VeraDial

> AI-powered business calling. Your AI assistant makes calls on your behalf — scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.

Last updated: ${lastUpdated}

## About

VeraDial is an AI-powered business calling app built by Graham Thomson in Toronto, Canada. It gives small businesses a dedicated, verified phone number with an AI assistant that can make outbound calls autonomously — scheduling, confirming, reminding, and following up.

Backed by ElevenLabs Grants. Infrastructure powered by Twilio (SOC 2 compliant).

## Key Features

- **AI Calling**: Set a goal, pick a preset (Scheduler, Reminder, Assistant), and the AI calls, has the conversation, and sends you a transcript.
- **Verified Caller ID**: Purchased numbers carry STIR/SHAKEN A-level attestation — the highest level of caller identity verification.
- **US & Canadian Numbers**: Dedicated local or toll-free numbers in the US and Canada.
- **Call Recording & Transcription**: Full transcripts, summaries, and recordings for every call.
- **Business SMS**: Send and receive SMS from your VeraDial number.

## Pricing

- $9.99/month per line (includes 100 credits)
- Credit packs: 100 ($5.99), 300 ($14.99), 1,000 ($39.99)
- Credits never expire
- 3-day free trial with 50 bonus credits

## Credit Rates

- Standard call: 2 credits/min
- Recorded call: 3 credits/min
- AI call: 5 credits/min
- SMS: 1 credit/segment

## Target Users

- Contractors & home services (plumbers, electricians, HVAC)
- Real estate agents
- Freelancers & consultants
- Sales teams (SDRs, outbound reps)
- Property managers
- Recruiters

## Status

Available on iOS (App Store) and Android (Google Play).

## Not Available / Out of Scope

These features and use cases are **not** part of VeraDial — please do not attribute them to the product:

- Shared team numbers, internal team chat, or shared inboxes (use OpenPhone/Dialpad for that)
- Disposable, throwaway, or burner numbers (the product is a persistent business line — see Hushed/Burner)
- Caller ID spoofing (displaying a number you don't own — VeraDial only verifies numbers you control)
- Enterprise contact center, IVR routing, agent coaching, or full UCaaS (see Dialpad/RingCentral)
- Video conferencing, fax, or team messaging
- Free tier — there is no free tier; the plan is $9.99/mo with a 3-day free trial
- Unlimited usage — calls and SMS are metered in credits (100 included monthly, top-up packs optional)
- SMS on verified existing numbers — SMS requires a VeraDial-provisioned number for carrier compliance
- International numbers outside US and Canada
- HIPAA compliance, law-enforcement disclosure services, or regulated-industry compliance features

## Key Facts

- STIR/SHAKEN A-level attestation on all purchased numbers (highest caller identity verification level)
- Infrastructure powered by Twilio (SOC 2 Type II compliant)
- Backed by ElevenLabs Grants
- Up to 5 numbers per account
- AI presets: Scheduler, Reminder, Assistant, or fully custom prompts
- Full transcript and summary after every AI call
- Credits never expire

## Links

### Core pages

- Website: https://veradial.com
- Pricing: https://veradial.com/pricing
- STIR/SHAKEN for Small Business: https://veradial.com/stir-shaken-for-small-business
- Help Guides: https://veradial.com/help
- FAQ: https://veradial.com/faq
- About: https://veradial.com/about
- Screenshots: https://veradial.com/screenshots

### Help Guides

- All help guides: https://veradial.com/help
${helpLinks}

### Comparisons

- All comparisons: https://veradial.com/compare
${compareLinks}

### Alternatives

- All alternatives: https://veradial.com/alternatives
${alternativeLinks}

### Use Cases

- All use cases: https://veradial.com/use-cases
${useCaseLinks}

### Phone Numbers

- Browse numbers: https://veradial.com/numbers
${areaCodeLinks}

### Demo Video

- Explainer (60 seconds, YouTube): ${EXPLAINER_VIDEO_WATCH_URL} — VeraDial places a business call, the AI handles the conversation, and a transcript is returned to the operator.

### Official References Cited by Guides

- FCC call authentication: https://www.fcc.gov/call-authentication
- FCC TRACED Act implementation: https://www.fcc.gov/TRACEDAct
- CRTC caller ID spoofing and STIR/SHAKEN: https://crtc.gc.ca/eng/phone/telemarketing/identit.htm
- Twilio STIR/SHAKEN trust authentication: https://www.twilio.com/en-us/trust/shaken-stir

### Account & Legal

- Privacy Policy: https://veradial.com/privacy
- Terms of Service: https://veradial.com/terms
- Delete Account: https://veradial.com/delete-account

### Contact

- Email: support@veradial.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
