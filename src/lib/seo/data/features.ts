/**
 * Feature page data. Each entry maps to a route at `/features/<slug>` when
 * `status === "published"`. The validator gates publishing on:
 *   - feature availability (no published page may reference a coming_soon feature)
 *   - quality minimums (see qualityRules.ts)
 *   - slug uniqueness
 *   - claim source resolution
 *
 * Pages that reference a not-yet-shipped feature stay `draft` until the
 * feature flips to "live" or "beta" in featureAvailability.ts.
 */

import type { SeoPageCore, ClaimSourceId } from "../types";
import type { FeatureKey } from "../featureAvailability";
import type { ManualLink } from "../internalLinks";
import { PRODUCT_FACT_COPY } from "../productFacts";

export type FeaturePagePayload = {
  featureKey: FeatureKey;
  eyebrow: string;
  hero: {
    headline: string;
    subhead: string;
    bullets: string[];
  };
  capabilities: Array<{
    title: string;
    body: string;
    sourceId?: ClaimSourceId;
  }>;
  scenarios: Array<{
    role: string;
    scenario: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    sourceId?: ClaimSourceId;
  }>;
  manualLinks?: ManualLink[];
};

export type FeaturePage = SeoPageCore & {
  type: "feature";
  payload: FeaturePagePayload;
};

const PUBLISHED_AT = "2026-04-30";

export const FEATURE_PAGES: FeaturePage[] = [
  {
    type: "feature",
    slug: "ai-calling",
    status: "published",
    title: "AI Calling: Your AI Assistant Makes Business Calls",
    description:
      "Set a goal and your AI assistant places the call, has the conversation, and sends you a transcript and summary. Confirm appointments, follow up on leads, and run routine calls hands-free.",
    keywords: [
      "AI calling",
      "AI phone assistant",
      "AI outbound calling",
      "AI appointment confirmation",
      "AI follow-up calls",
      "AI calling app",
      "AI phone calls for business",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: [
      "ai_calling",
      "call_transcripts",
      "call_summaries",
      "ai_voice_options",
    ],
    tags: ["ai", "outbound", "contractors", "realtors", "sales", "freelancers"],
    payload: {
      featureKey: "ai_calling",
      eyebrow: "AI Calling",
      hero: {
        headline: "Set a goal. Hear back when it's done.",
        subhead:
          "Describe what the call needs to accomplish, pick a voice, and send it. The AI handles the conversation. You get a transcript and summary.",
        bullets: [
          "Confirms, follows up, qualifies, and reminds — autonomously",
          "Identifies as AI on every call. No spoofing. No deception.",
          "Full transcript and summary delivered after every call",
          `${PRODUCT_FACT_COPY.aiCallsPerHour}, billed at ${PRODUCT_FACT_COPY.aiCallRate}`,
        ],
      },
      capabilities: [
        {
          title: "Goal-driven conversation",
          body: "Tell the AI the outcome you want — confirm Tuesday's appointment, ask if they got the quote, schedule a callback. The AI works toward that outcome and ends gracefully when it can't get there.",
        },
        {
          title: "Built-in presets",
          body: "Three starting templates handle the most common calls: Scheduler (book or confirm a time), Reminder (confirm details and ask about access), Assistant (open-ended professional follow-up). Or write a fully custom prompt.",
        },
        {
          title: "Voice and identity control",
          body: "Pick from 5 voices for outbound AI calls and set a default for the line. The AI introduces itself by your business name and clearly identifies as AI — recipients always know.",
          sourceId: "fcc_ai_robocall_ruling",
        },
        {
          title: "Transcript and summary",
          body: "Every AI call returns a full transcript plus a short summary. Scan outcomes at a glance; open the transcript when you need detail. Audio is also stored if recording is enabled.",
        },
        {
          title: "Hands-free workflow",
          body: "Place an AI call from your truck, between meetings, or during another call. You don't need to be on the line — the AI runs the call and reports back when it's finished.",
        },
      ],
      scenarios: [
        {
          role: "Real estate agent",
          scenario:
            "11:04am, lead lands. You're in a 90-minute showing. By 12:35 the AI has called, confirmed budget and area, scheduled a Saturday tour, and dropped the transcript in your inbox.",
        },
        {
          role: "Solo contractor",
          scenario:
            "Tuesday's seven appointments need confirming and the truck rolls at 7:30. You queue the AI for 5pm Monday — it confirms each one, captures gate codes, and flags one cancellation in time to backfill from the waitlist.",
        },
        {
          role: "Sales rep",
          scenario:
            "60 leads from a webinar need a same-day follow-up. The AI works the list while you prep tomorrow's demos. Warm responses come back tagged with full transcripts; cold ones are logged.",
        },
      ],
      faqs: [
        {
          question: "Do recipients know the call is AI?",
          answer:
            "Yes. VeraDial's AI identifies itself and the business it's calling on behalf of at the start of every call. Transparency is required by FCC AI-voice rules and is the right product choice.",
          sourceId: "fcc_ai_robocall_ruling",
        },
        {
          question: "What happens if the AI can't complete the goal?",
          answer:
            "It ends the call gracefully and flags the result in your inbox. The transcript shows what happened so you can decide whether to follow up manually.",
        },
        {
          question: "How much does an AI call cost?",
          answer:
            `AI calls bill at ${PRODUCT_FACT_COPY.aiCallRate}. The ${PRODUCT_FACT_COPY.monthlyLine} line includes ${PRODUCT_FACT_COPY.monthlyIncludedCreditsShort}, and ${PRODUCT_FACT_COPY.creditPackRange}. ${PRODUCT_FACT_COPY.creditsNeverExpire}.`,
        },
        {
          question: "Are AI calls recorded?",
          answer:
            "By default, AI calls capture a transcript. Enable recording and you also get the audio. Two-party-consent jurisdictions require disclosure — the AI can be configured to disclose recording at the start of the call.",
          sourceId: "reporters_committee_recording",
        },
        {
          question: "Can the AI handle complaints or negotiations?",
          answer:
            "No, and it shouldn't. Use it for bounded jobs: confirmations, reminders, qualification, and simple follow-ups. Hand off complex conversations to a human.",
        },
      ],
      manualLinks: [
        {
          label: "Pricing",
          href: "/pricing",
          description:
            `${PRODUCT_FACT_COPY.monthlyLine}, ${PRODUCT_FACT_COPY.monthlyIncludedCredits}, and ${PRODUCT_FACT_COPY.creditPacksFrom}.`,
        },
        {
          label: "AI calling for small business",
          href: "/help/ai-calling-for-small-business",
          description:
            "Which call types fit AI well and which should stay human-led.",
        },
        {
          label: "Appointment confirmation scripts",
          href: "/help/appointment-confirmation-scripts",
          description:
            "Practical confirmation scripts for service businesses, tunable as AI prompts.",
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "ai-call-screening",
    status: "published",
    title: "AI Call Screening: Know Who's Calling Before You Pick Up",
    description:
      "VeraDial's AI answers first, asks who's calling and why, and tells you in plain English. Skip spam. Take the calls that matter. Send the rest to voicemail with a transcript.",
    keywords: [
      "AI call screening",
      "AI phone screening",
      "spam call filter",
      "screen calls AI",
      "call screening for business",
      "who is calling app",
      "AI inbound call assistant",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["ai_call_screening", "voicemail_transcription"],
    tags: ["ai", "inbound", "spam", "freelancers", "contractors"],
    payload: {
      featureKey: "ai_call_screening",
      eyebrow: "AI Call Screening",
      hero: {
        headline: "Skip the spam. Take the calls that matter.",
        subhead:
          "When someone calls your VeraDial number, the AI answers first, finds out who they are and why they're calling, and tells you. You decide whether to pick up — without saying a word.",
        bullets: [
          "Spam and unrelated calls go straight to voicemail",
          "Real callers answer a brief AI screening question",
          "You see a one-line summary before deciding to pick up",
          "Voicemail transcripts arrive in seconds for the ones you skip",
        ],
      },
      capabilities: [
        {
          title: "Pre-pickup screening",
          body: "The AI greets the caller, asks for name and reason, and feeds you a one-line summary while the call is still ringing. You pick up, decline to voicemail, or let the AI take a message.",
        },
        {
          title: "Spam triage",
          body: "Persistent reseller scripts and reverse-phone scrapers usually drop after the first AI question. Real callers explain themselves and get through.",
        },
        {
          title: "Voicemail and transcript fallback",
          body: "If you don't pick up, the caller is offered voicemail. You get a transcribed message in seconds — no listening required to triage your day.",
        },
        {
          title: "Caller context preserved",
          body: "The AI captures the caller's stated reason verbatim. That detail is preserved in the transcript even if you only saw the one-line summary at pickup time.",
        },
        {
          title: "After-hours awareness",
          body: "Set screening to run only outside business hours, or always. The AI routes outside-hours callers to voicemail by default if you prefer.",
        },
      ],
      scenarios: [
        {
          role: "Solo contractor",
          scenario:
            "On a roof, two calls inside ten minutes. The first is a real lead — you take it. The second is an SEO sales rep — to voicemail. You never broke flow.",
        },
        {
          role: "Freelancer in deep work",
          scenario:
            "Mid-deep-work, an unknown number. The AI says 'Lisa from Acme — calling about Tuesday's invoice.' That's worth interrupting for; you pick up.",
        },
        {
          role: "Small business owner with kids at home",
          scenario:
            "Family time, the phone rings. Spam. The AI handles it, the family doesn't notice, you check the transcript later.",
        },
      ],
      faqs: [
        {
          question: "Does the caller know they're talking to AI first?",
          answer:
            "Yes. The AI introduces itself as a screening assistant for the business. Callers can leave a voicemail or wait for you — it's transparent on every call.",
        },
        {
          question: "What does screening cost per call?",
          answer:
            `Screening is designed to stay brief: VeraDial enforces a ${PRODUCT_FACT_COPY.aiScreeningMaxDuration} and ${PRODUCT_FACT_COPY.aiScreeningDailyCap}. Connected call time still bills like a normal inbound call.`,
        },
        {
          question: "Can I jump into the call live?",
          answer:
            "Yes. When the AI tells you who's calling, you can pick up immediately and the AI hands you the call mid-stream.",
        },
        {
          question: "Does this replace a full answering service?",
          answer:
            "No. Screening is a triage layer that filters spam and surfaces real callers. Detailed intake, booking, and custom after-hours workflows are separate receptionist-style features that should stay human-reviewed until they ship.",
        },
        {
          question: "Will my real callers find this annoying?",
          answer:
            "A short greeting from a clear, named AI is less annoying than the alternatives — voicemail tag, getting hung up on, or going through a generic phone tree. Most callers answer the screening question in one short sentence.",
        },
      ],
      manualLinks: [
        {
          label: "Why your number shows as Spam Likely",
          href: "/help/why-business-number-marked-spam",
          description:
            "How carriers decide what to flag and how STIR/SHAKEN changes the math.",
        },
        {
          label: "Pricing",
          href: "/pricing",
          description: "AI call rates and included monthly credits.",
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "verified-caller-id",
    status: "published",
    title: "Verified Caller ID with STIR/SHAKEN A-Level Attestation",
    description:
      "Numbers from VeraDial are signed at A-level — the highest STIR/SHAKEN attestation. Calls show as verified to the receiving carrier instead of routing into Spam Likely filters.",
    keywords: [
      "verified caller ID",
      "STIR SHAKEN",
      "A-level attestation",
      "stop spam likely",
      "business caller ID",
      "trusted caller ID",
      "verified business calls",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: [
      "verified_caller_id",
      "business_phone_number",
      "number_verification",
    ],
    tags: ["trust", "compliance", "contractors", "sales", "realtors"],
    payload: {
      featureKey: "verified_caller_id",
      eyebrow: "Verified Caller ID",
      hero: {
        headline: "Calls signed at A-level. Not labeled Spam Likely.",
        subhead:
          "Every number you buy through VeraDial is signed at A-level STIR/SHAKEN — the strongest carrier-side proof that the call is from who it says it is.",
        bullets: [
          "A-level attestation on every purchased VeraDial number",
          "B-level attestation when you verify a number you already own",
          "No spoofing — only numbers you control",
          "Built on Twilio's trusted-calling stack",
        ],
      },
      capabilities: [
        {
          title: "A-level on purchased numbers",
          body: "When VeraDial provisions you a number, it's verified end-to-end. The carrier signs every outbound call at A-level — the strongest STIR/SHAKEN attestation the framework offers.",
          sourceId: "fcc_call_authentication",
        },
        {
          title: "Verify a number you already own",
          body: "If your business already has a number, verify it through VeraDial as a secondary outbound caller ID. Verified numbers sign at B-level — strong, but not end-to-end.",
        },
        {
          title: "No spoofing path",
          body: "VeraDial only lets you call from a number you own or have verified. There is no path to display a number you don't control. This is how trust actually compounds.",
          sourceId: "crtc_caller_id_spoofing",
        },
        {
          title: "Carrier-grade infrastructure",
          body: "All voice routes through Twilio's trusted-calling stack. The trust chain runs from your VeraDial line through Twilio's STIR/SHAKEN signing to the receiving carrier.",
          sourceId: "twilio_stir_shaken",
        },
        {
          title: "Visible to recipients",
          body: "On supported handsets and carriers, the receiving phone shows a verified indicator instead of Spam Likely. Display behavior depends on the receiving carrier — see the spam guide for what changes and what doesn't.",
        },
      ],
      scenarios: [
        {
          role: "Contractor calling a new lead",
          scenario:
            "You picked up a number last month. The lead's carrier checks the signature, sees A-level attestation, and skips the Spam Likely label. You get answered.",
        },
        {
          role: "Sales rep working a list",
          scenario:
            "On a 50-prospect day, even a small pickup-rate lift compounds. Verified attestation isn't a bypass for cold-call filters — but it removes the easiest reason for a carrier to drop your call.",
        },
        {
          role: "Realtor with an established number",
          scenario:
            "You verify your existing number as a secondary caller ID. It signs at B-level — the carrier knows you own it, even if VeraDial didn't issue it.",
        },
      ],
      faqs: [
        {
          question: "What's the difference between A, B, and C attestation?",
          answer:
            "A is the strongest: the originating carrier verified both the customer and the customer's right to use the number. B verifies the customer but not the specific number. C is unsigned or signed without enough info. Carriers favor A-signed calls when ranking spam likelihood.",
          sourceId: "fcc_call_authentication",
        },
        {
          question: "Will my calls always show as verified?",
          answer:
            "Display behavior depends on the receiving carrier. STIR/SHAKEN tells the carrier the call is trustworthy — what they show on screen is up to them. The trust signal is doing its work even if no badge appears.",
        },
        {
          question: "Can I keep my existing business number?",
          answer:
            "Yes. Verify it as a secondary outbound caller ID and outbound calls sign at B-level. SMS still routes through your VeraDial-provisioned number for carrier compliance reasons.",
        },
        {
          question: "What stops someone from spoofing me?",
          answer:
            "STIR/SHAKEN exists to make spoofing visible. A spoofed call signs at C-level or fails to sign — receiving carriers and apps can show that distinction. It doesn't end spoofing overnight, but it changes the math.",
          sourceId: "fcc_traced_act",
        },
        {
          question: "Why does my new number still show Spam Likely sometimes?",
          answer:
            "Even verified numbers build reputation over time. A new number with A-level attestation usually outperforms an unsigned number, but answer rates, block rates, and call volume all factor in. See the spam-likely guide for what helps.",
        },
      ],
      manualLinks: [
        {
          label: "STIR/SHAKEN for small business",
          href: "/stir-shaken-for-small-business",
          description:
            "Plain-English explainer of A/B/C attestation and what it means in practice.",
        },
        {
          label: "Why your business number shows as spam",
          href: "/help/why-business-number-marked-spam",
          description:
            "How carriers actually decide what to label and what you can change.",
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "business-phone-number",
    status: "published",
    title: "Business Phone Number: Real US & Canadian Numbers",
    description:
      `Get a dedicated US or Canadian business phone number. Search by area code, region, or pattern. Local or toll-free. Up to ${PRODUCT_FACT_COPY.numbersPerAccount}, swap any time for ${PRODUCT_FACT_COPY.numberSwap}.`,
    keywords: [
      "business phone number",
      "second phone number for business",
      "US business number",
      "Canadian business number",
      "toll-free number",
      "area code search",
      "buy business number",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["business_phone_number", "number_swap"],
    tags: ["foundation", "us", "canada", "all"],
    payload: {
      featureKey: "business_phone_number",
      eyebrow: "Business Phone Number",
      hero: {
        headline: "A real business number. Local or toll-free. US or Canada.",
        subhead:
          "Search by area code, region, or pattern. Pick the number that fits your market — or your memory. Hold up to five lines on one account.",
        bullets: [
          "Local numbers in any US or Canadian area code",
          "Toll-free options when you want one number that works everywhere",
          `Up to ${PRODUCT_FACT_COPY.numbersPerAccount}, each with its own caller ID`,
          `Swap a number for ${PRODUCT_FACT_COPY.numberSwap} if you change markets or rebrand`,
        ],
      },
      capabilities: [
        {
          title: "Search how you actually shop",
          body: "Search by area code, by region (state or city), or by pattern (digits you want repeated, easy-to-remember sequences). The pool refreshes; if you don't see what you want today, check tomorrow.",
        },
        {
          title: "Local or toll-free",
          body: "Local numbers carry geographic signal — useful when your customers are local. Toll-free numbers normalize across markets — useful when you operate everywhere.",
        },
        {
          title: "Up to 5 lines per account",
          body: "Run your main line, a regional line, and a campaign line from the same app. Each line has its own caller ID, voicemail, and AI calling settings.",
        },
        {
          title: "Number swap when needed",
          body: `Markets change. Brands change. Swap your VeraDial number for ${PRODUCT_FACT_COPY.numberSwap} and the new line inherits the same plan and credits.`,
        },
        {
          title: "US and Canadian SMS",
          body: "US numbers send and receive SMS. Canadian local numbers send and receive SMS. Canadian toll-free SMS requires Twilio toll-free verification — see the SMS feature page for details.",
        },
      ],
      scenarios: [
        {
          role: "Starting a side business",
          scenario:
            "You don't want personal calls and business calls on the same number. Get a local VeraDial line, point your website at it, and your business stays separate without buying a second phone.",
        },
        {
          role: "Realtor with two markets",
          scenario:
            "One number in (212), one in (914). Both ring the same app. Outbound calls pick the right line per contact so the caller ID matches the market they expect.",
        },
        {
          role: "Solo contractor going national",
          scenario:
            "Start with a local line, add a toll-free line as you expand. The toll-free covers customers outside your area code without dropping your local presence.",
        },
      ],
      faqs: [
        {
          question: "Do I need a separate phone for the business number?",
          answer:
            "No. VeraDial runs as an app on your existing phone. Your personal number stays where it is.",
        },
        {
          question: "Can I keep my existing business number?",
          answer:
            "You can verify your existing number as a secondary outbound caller ID — calls go out displaying it. SMS routes through your VeraDial-provisioned number for carrier compliance.",
        },
        {
          question: "What's covered — every US area code?",
          answer:
            "Yes for US, and yes for Canadian local. Specific number availability fluctuates with carrier inventory; if your preferred number isn't available, the search will tell you.",
        },
        {
          question: "What does swapping a number cost?",
          answer:
            `${PRODUCT_FACT_COPY.numberSwap} per swap. The new number inherits your plan and credit balance — you don't lose anything by changing markets.`,
        },
        {
          question: "Can I get an international number?",
          answer:
            "Not yet. VeraDial supports US and Canadian numbers. International is out of scope for now.",
        },
      ],
      manualLinks: [
        {
          label: "All area codes",
          href: "/numbers",
          description:
            "Browse VeraDial-supported area codes by city and region.",
        },
        {
          label: "Pricing",
          href: "/pricing",
          description: `${PRODUCT_FACT_COPY.monthlyLine}, ${PRODUCT_FACT_COPY.monthlyIncludedCredits}, and top-ups.`,
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "voicemail-transcription",
    status: "published",
    title: "Voicemail Transcription: Read Voicemails Instead of Listening",
    description:
      "Every voicemail is transcribed automatically. Read it in seconds, decide whether to call back, never play a 90-second message again. Set a custom AI greeting or record your own.",
    keywords: [
      "voicemail transcription",
      "transcribed voicemail",
      "voicemail to text",
      "AI voicemail greeting",
      "business voicemail app",
      "voicemail transcript",
      "read voicemail",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["voicemail_transcription", "voicemail_custom_greetings"],
    tags: ["inbound", "all"],
    payload: {
      featureKey: "voicemail_transcription",
      eyebrow: "Voicemail Transcription",
      hero: {
        headline: "Read it in five seconds. Skip it if it's nothing.",
        subhead:
          "Every voicemail on your VeraDial line is transcribed automatically. Decide whether to call back without playing the message.",
        bullets: [
          "Transcripts arrive seconds after the message lands",
          `Custom greetings — record your own or pick from ${PRODUCT_FACT_COPY.aiVoiceOptionsForGreetings}`,
          `Up to ${PRODUCT_FACT_COPY.voicemailMaxMinutes}`,
          "Privacy-first push notifications — no message body on lock screen",
        ],
      },
      capabilities: [
        {
          title: "Transcripts on every message",
          body: "VeraDial transcribes every voicemail automatically. The transcript appears in your inbox alongside the audio so you can read first and listen only when needed.",
        },
        {
          title: "Custom greetings",
          body: `Pick from ${PRODUCT_FACT_COPY.aiVoiceOptionsForGreetings} for your greeting and have VeraDial generate it from a script, or record your own. You can change the greeting per line.`,
        },
        {
          title: "Two-minute message cap",
          body: `Voicemails cap at ${PRODUCT_FACT_COPY.voicemailMaxMinutes}. Long enough for real context — short enough to keep transcripts fast and storage manageable.`,
        },
        {
          title: "Privacy-first notifications",
          body: "Push notifications announce a new voicemail without spilling its contents on a locked screen. The transcript appears inside the app.",
        },
        {
          title: "Searchable history",
          body: "Past transcripts are searchable in the app — find that gate code, callback request, or quote number from three weeks ago without scrubbing audio.",
        },
      ],
      scenarios: [
        {
          role: "Contractor on a job",
          scenario:
            "Phone buzzes, transcript appears: 'Hi, this is Tom, water heater quote — please call back, my number is...'. You finish the install, call back at lunch with the right context already in your head.",
        },
        {
          role: "Sales rep between meetings",
          scenario:
            "Six voicemails after a busy stretch. Read all six in 90 seconds. Two need callbacks, four are spam — handled.",
        },
        {
          role: "Solo professional",
          scenario:
            "End of day, you skim the day's voicemails as transcripts. The two real ones get a same-day reply. The rest can wait.",
        },
      ],
      faqs: [
        {
          question: "How accurate is the transcription?",
          answer:
            "It's strong on clear speech and common business vocabulary. Strong accents, background noise, or specialized jargon can degrade accuracy — the audio is always available as a fallback.",
        },
        {
          question: "Can I disable transcription?",
          answer:
            "Yes. Per-line transcription can be turned off in settings. Voicemail itself stays — just the transcripts go away.",
        },
        {
          question: "How long are voicemails stored?",
          answer:
            "Voicemails persist with your account. We don't auto-delete them; you can clear individual messages from the app whenever you want.",
        },
        {
          question: "Can the AI greeting say my business name?",
          answer:
            "Yes. You write the greeting script and the chosen voice records it. Or you can record yourself in your own voice for a more personal touch.",
        },
        {
          question: "Are the transcripts secure?",
          answer:
            "Voicemail audio and transcripts route through Twilio infrastructure with TLS in transit. Push notifications never include message contents — those only appear once you unlock and open the app.",
        },
      ],
      manualLinks: [
        {
          label: "Pricing",
          href: "/pricing",
          description:
            "Voicemail and transcription are included with the line subscription.",
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "call-recording",
    status: "published",
    title: "Call Recording: One-Tap Recordings with Auto Transcripts",
    description:
      `Tap once to record any call. Get the audio, the full transcript, and a searchable history. ${PRODUCT_FACT_COPY.recordedCallRateShort}. Disclose recording in two-party-consent jurisdictions.`,
    keywords: [
      "call recording",
      "record business calls",
      "call recording app",
      "call transcript",
      "recorded business calls",
      "business call recorder",
      "one tap call recording",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["call_recording", "call_transcripts"],
    tags: ["sales", "recruiters", "consultants", "freelancers", "compliance"],
    payload: {
      featureKey: "call_recording",
      eyebrow: "Call Recording",
      hero: {
        headline: "Tap once. Record. Transcribe. Searchable forever.",
        subhead:
          "Every recorded call comes with the audio plus a full transcript. Search past calls by client name, topic, or quote number. Stay compliant by disclosing where required.",
        bullets: [
          "One-tap recording on any outbound call",
          "Automatic transcripts on every recorded call",
          "Searchable history across the entire account",
          `${PRODUCT_FACT_COPY.recordedCallRateShort}, vs ${PRODUCT_FACT_COPY.standardCallRateShort} for unrecorded calls`,
        ],
      },
      capabilities: [
        {
          title: "One-tap recording",
          body: "Hit record during the call. The recording starts immediately and stops when the call ends. No menu diving, no setup.",
        },
        {
          title: "Automatic transcripts",
          body: "Recorded calls transcribe automatically. Search the transcript instead of scrubbing the audio when you need to find what was said.",
        },
        {
          title: "Compliance posture",
          body: "VeraDial doesn't decide whether you can record — that's jurisdictional. Your responsibility is to disclose where the law requires it. AI calling settings can be configured to disclose automatically.",
          sourceId: "reporters_committee_recording",
        },
        {
          title: "Searchable archive",
          body: "Find that pricing call from six weeks ago by searching for a line of dialogue. Recorded calls live with your account; you can delete individual recordings whenever you want.",
        },
        {
          title: "Costs visible up front",
          body: `Recording adds ${PRODUCT_FACT_COPY.recordingSurcharge} on top of the standard rate. The cost is visible before you press record so there are no surprises.`,
        },
      ],
      scenarios: [
        {
          role: "Sales rep documenting a deal",
          scenario:
            "Three back-to-back negotiation calls in a week. All recorded, all transcribed. When the contract goes to legal, the chain of agreement is searchable, not a guessing game.",
        },
        {
          role: "Recruiter capturing screening calls",
          scenario:
            "Initial screens are easy to misremember. Record them, send the candidate the transcript, hand a clean record to the hiring manager.",
        },
        {
          role: "Consultant tracking client calls",
          scenario:
            "Project changes get debated on calls and forgotten by Tuesday. Recorded transcripts settle the question without anyone having to remember.",
        },
      ],
      faqs: [
        {
          question: "Is it legal for me to record my calls?",
          answer:
            "Recording laws vary. The US is split: some states require all-party consent, others require only one-party consent. Canada generally requires consent under PIPEDA when there's a reasonable expectation of privacy. Always disclose where required.",
          sourceId: "rcmp_call_recording_law",
        },
        {
          question: "How much does call recording cost?",
          answer:
            `Recording adds ${PRODUCT_FACT_COPY.recordingSurcharge} to the standard call rate (${PRODUCT_FACT_COPY.standardCallRateShort} unrecorded → ${PRODUCT_FACT_COPY.recordedCallRateShort} recorded). AI calls bill at ${PRODUCT_FACT_COPY.aiCallRateShort}; recording those calls does not add a separate recording surcharge.`,
        },
        {
          question: "Can the AI disclose recording for me?",
          answer:
            "Yes. AI calls can be configured to announce that the call is being recorded at the start. For your manual calls, you handle the disclosure yourself.",
        },
        {
          question: "Where are the recordings stored?",
          answer:
            "Audio and transcripts are stored on the same Twilio-backed infrastructure as the rest of your account. Storage is encrypted in transit; access requires your VeraDial credentials.",
        },
        {
          question: "Can I delete recordings?",
          answer:
            "Yes. Individual recordings can be deleted from the call detail view. Once deleted, both the audio and the transcript are gone.",
        },
      ],
      manualLinks: [
        {
          label: "Pricing",
          href: "/pricing",
          description: "Per-minute call rates with and without recording.",
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "business-sms",
    status: "published",
    title: "Business SMS: Text from Your VeraDial Number",
    description:
      `Send and receive SMS from your business number. Conversation threading, delivery tracking, and STOP/HELP compliance built in. Costs ${PRODUCT_FACT_COPY.smsSegmentRate}.`,
    keywords: [
      "business SMS",
      "business text messaging",
      "send SMS from business number",
      "small business texting app",
      "SMS for business phone",
      "STOP HELP compliance",
      "two-way SMS",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["business_sms", "business_phone_number"],
    tags: ["sms", "all", "compliance"],
    payload: {
      featureKey: "business_sms",
      eyebrow: "Business SMS",
      hero: {
        headline: "Two-way text from your business number.",
        subhead:
          "Send and receive SMS from the same number you call from. Threaded conversations, delivery tracking, and STOP/HELP handled.",
        bullets: [
          PRODUCT_FACT_COPY.smsSegmentRate,
          "Conversation threading per contact",
          "Delivery status reporting",
          "Auto-handles STOP/HELP for compliance",
        ],
      },
      capabilities: [
        {
          title: "Same number for voice and SMS",
          body: "Customers see one number on caller ID and one number when they text. No mismatch, no separate messaging line.",
        },
        {
          title: "Threaded conversations",
          body: "Each conversation is grouped per contact. Scroll back to find context across multiple sessions, multiple numbers, and multiple lines.",
        },
        {
          title: "Delivery tracking",
          body: "Each outbound message reports delivery status. When a carrier rejects or delays a message, you see it instead of guessing.",
        },
        {
          title: "STOP/HELP compliance",
          body: "VeraDial handles STOP and HELP keywords automatically. STOP unsubscribes the contact; HELP returns a contact-info reply. You don't need to maintain a suppression list manually.",
        },
        {
          title: "Per-segment pricing",
          body: `${PRODUCT_FACT_COPY.smsSegmentRate}. Long messages split into segments — the cost is visible before you send.`,
        },
      ],
      scenarios: [
        {
          role: "Contractor confirming a job",
          scenario:
            "You're between sites. Text the customer the arrival window. They reply 'door code is 4429.' That's the whole exchange — no voicemail tag, no missed details.",
        },
        {
          role: "Realtor sending listings",
          scenario:
            "After a showing, send the property link by SMS. Customer pulls it up later, replies with questions. The thread keeps everything in one place.",
        },
        {
          role: "Sales follow-up",
          scenario:
            "Demo done. SMS the recap with the proposal link. Reply when they're ready — your inbox doesn't lose the thread.",
        },
      ],
      faqs: [
        {
          question: "Can I bulk-text my customer list?",
          answer:
            "No. VeraDial is a one-to-one business messaging tool, not a bulk SMS platform. Carrier 10DLC rules treat blasts differently and we don't support them by design.",
        },
        {
          question: "What about MMS (pictures, attachments)?",
          answer:
            "MMS is supported on US numbers and Canadian local numbers. File-size and format limits follow standard carrier rules.",
        },
        {
          question: "Why doesn't SMS work on my verified existing number?",
          answer:
            "Verified numbers can act as a secondary outbound voice caller ID. SMS still routes through your VeraDial-provisioned number — carrier 10DLC compliance is hard to do correctly on verify-only numbers.",
        },
        {
          question: "What about Canadian toll-free SMS?",
          answer:
            "Canadian toll-free SMS requires Twilio toll-free verification. Contact support to start the verification — Canadian local numbers send and receive SMS without the extra step.",
        },
        {
          question: "How does STOP/HELP actually work?",
          answer:
            "When a recipient replies STOP, that contact is auto-suppressed for your line. Replying HELP returns a brief contact-info message. Both behaviors meet US and Canadian compliance defaults.",
        },
      ],
      manualLinks: [
        {
          label: "Pricing",
          href: "/pricing",
          description:
            `SMS billing at ${PRODUCT_FACT_COPY.smsSegmentRate} and credit pack pricing.`,
        },
      ],
    },
  },
  {
    type: "feature",
    slug: "call-forwarding",
    status: "published",
    title: "Call Forwarding: Direct or AI-Screened Forwarding",
    description:
      "Forward inbound calls directly to another number, or have the AI screen first and only forward when the call matters. Voicemail handles the rest. Configure per-line, per-time-window.",
    keywords: [
      "call forwarding app",
      "AI call forwarding",
      "forward business calls",
      "screen and forward",
      "after hours call forwarding",
      "small business call forwarding",
      "forward to mobile",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: [
      "call_forwarding",
      "ai_call_screening",
      "voicemail_transcription",
    ],
    tags: ["inbound", "contractors", "freelancers"],
    payload: {
      featureKey: "call_forwarding",
      eyebrow: "Call Forwarding",
      hero: {
        headline: "Forward what matters. Screen the rest.",
        subhead:
          "Send every inbound call to your mobile, or have the AI screen first and only forward when the call is real. Voicemail catches what you miss.",
        bullets: [
          "Direct forwarding to any number you choose",
          "AI-screened forwarding — only real calls come through",
          "Voicemail fallback when forwarding fails",
          "Configure per-line and per-time-window",
        ],
      },
      capabilities: [
        {
          title: "Direct forwarding",
          body: "Set a target number and inbound calls ring there. Useful when you're traveling, switching phones, or need a coverage partner to handle calls for a window.",
        },
        {
          title: "AI-screened forwarding",
          body: "The AI answers, asks who's calling and why, then forwards the call only if you'd want it. Spam and unrelated calls drop into voicemail without you ever hearing them ring.",
        },
        {
          title: "Time-window aware",
          body: "Forward during business hours, send to voicemail outside them. Or invert it — forward only after-hours, hold business hours for direct pickup.",
        },
        {
          title: "Voicemail fallback",
          body: "If forwarding fails (target busy, target unanswered, network drop), the call falls through to your VeraDial voicemail. You don't lose calls to a forwarding glitch.",
        },
        {
          title: "Per-line configuration",
          body: "Each VeraDial line has its own forwarding behavior. Your main line and your campaign line don't have to share routing rules.",
        },
      ],
      scenarios: [
        {
          role: "Contractor on-site",
          scenario:
            "Three customers can interrupt you for an emergency, the rest can wait. The AI screens, forwards real ones, sends the rest to voicemail. You finish the install with one real interruption instead of nine.",
        },
        {
          role: "Freelancer with focus blocks",
          scenario:
            "9–11am is heads-down work. Forwarding goes to voicemail with a transcript. Outside that block, calls forward to your mobile. Both modes keep clients informed.",
        },
        {
          role: "Coverage partner during travel",
          scenario:
            "You're flying tomorrow. Forward the line to your partner's number for 8 hours; cancel the rule when you land. No app changes on the partner's side.",
        },
      ],
      faqs: [
        {
          question: "What's the difference between forwarding and AI screening?",
          answer:
            "Direct forwarding rings the target number for every inbound call. AI-screened forwarding has the AI take a quick read first, then only forwards real calls. Use direct forwarding for coverage windows; use AI screening to filter spam.",
        },
        {
          question: "Does forwarding cost extra?",
          answer:
            `Forwarded calls bill at the standard call rate while connected to the target. AI screening is capped at a ${PRODUCT_FACT_COPY.aiScreeningMaxDuration} and ${PRODUCT_FACT_COPY.aiScreeningDailyCap}; connected call time still uses normal call billing.`,
        },
        {
          question: "Can I forward to multiple numbers in sequence?",
          answer:
            "Not yet. A single forwarding target per line. If the target is unreachable, the call falls through to voicemail — that's the second hop.",
        },
        {
          question: "What happens to forwarded calls in my call history?",
          answer:
            "Forwarded calls appear in your VeraDial history with the inbound caller and the forward target. Recordings and transcripts work the same way as direct calls if those features are enabled.",
        },
        {
          question: "Can I disable forwarding from the lock screen?",
          answer:
            "Forwarding rules are managed in the VeraDial app. The fastest off-switch is opening the app and toggling the rule, which takes a few seconds. There's no SMS or USSD shortcut.",
        },
      ],
      manualLinks: [
        {
          label: "Pricing",
          href: "/pricing",
          description: "Forwarding billing, call rates, and screening limits.",
        },
      ],
    },
  },
  // ──────────────────────────────────────────────────────────────────
  // Drafts: not routable in production. Will publish once the
  // underlying feature is "live" or "beta" in featureAvailability.
  // ──────────────────────────────────────────────────────────────────
  {
    type: "feature",
    slug: "ai-receptionist",
    status: "draft",
    title: "AI Receptionist: Answers, Captures, Sends You the Summary",
    description:
      "An AI receptionist that answers your VeraDial line, captures who's calling and why, and sends a transcript and summary to you. Optional SMS follow-up to the caller. Coming soon.",
    keywords: [
      "AI receptionist",
      "AI virtual receptionist",
      "AI answering service",
      "AI receptionist for small business",
      "AI phone answering service",
      "automated receptionist",
      "small business AI receptionist",
    ],
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    requiresFeatures: ["ai_receptionist", "voicemail_transcription"],
    tags: ["ai", "inbound", "receptionist", "freelancers", "contractors"],
    payload: {
      featureKey: "ai_receptionist",
      eyebrow: "AI Receptionist",
      hero: {
        headline: "Inbound calls answered. Summary delivered.",
        subhead:
          "VeraDial's AI receptionist answers when you can't, captures the caller's name, return number, and reason, and sends you a transcript and summary. Optional SMS confirmation goes back to the caller.",
        bullets: [
          "Answers during business hours, after hours, or always",
          "Captures name, return number, reason, urgency, access notes",
          "Identifies as AI on every call — no deception",
          "Transcript and summary delivered to you after every call",
        ],
      },
      capabilities: [
        {
          title: "Always-on inbound coverage",
          body: "Set business-hours behavior, after-hours behavior, or always-on. The receptionist answers within the configured window so missed calls become captured calls.",
        },
        {
          title: "Operator-defined intake",
          body: "Configure the questions the receptionist asks: name, return number, reason, urgency, address, access notes, anything industry-specific. The receptionist asks them in order and captures the answers verbatim.",
        },
        {
          title: "Transcript-first output",
          body: "After every call you receive a transcript and a short summary. The summary highlights who, why, and any action items the caller surfaced.",
        },
        {
          title: "SMS follow-up",
          body: "Optionally, the receptionist sends the caller a confirmation SMS — 'thanks, we'll be in touch by tomorrow at noon' — using a template you control.",
        },
        {
          title: "Hard guardrails",
          body: "The receptionist will not quote prices, schedule on calendars without an operator-defined booking flow, transfer live without a defined transfer rule, take payments, or handle 911-tier emergencies. Calls that go past those limits get flagged for you immediately.",
        },
      ],
      scenarios: [
        {
          role: "Solo contractor",
          scenario:
            "Phone rings while you're underneath a sink. The receptionist answers, asks if it's a leak or scheduled work, captures the address, and pings you with a one-line summary. You finish the install, return the call, and the customer didn't sit on a voicemail.",
        },
        {
          role: "Freelancer outside business hours",
          scenario:
            "After-hours call lands. The receptionist greets the caller, captures the reason, and asks when's a good time to reach back. You wake up to a transcript and a tagged callback list.",
        },
      ],
      faqs: [
        {
          question: "When does the AI receptionist launch?",
          answer:
            "It's in active development. This page is a placeholder while we build it. When it launches, we'll publish it and announce it in the help center.",
        },
        {
          question: "Will it sound like a real receptionist?",
          answer:
            "It will sound natural, but it will identify itself as an AI assistant calling on behalf of your business. We're not building a tool that pretends to be a person — that's a trust line we won't cross.",
        },
        {
          question: "Can it book appointments on my calendar?",
          answer:
            "Only when you define the booking flow. At launch, it will capture booking requests as intake notes; calendar-aware booking is on the roadmap once we can do it without inventing commitments.",
        },
        {
          question: "What can it not do?",
          answer:
            "It won't quote prices that aren't pre-configured, take payments, transfer live without a defined rule, or handle 911-tier emergencies. Anything past its guardrails is flagged for you immediately.",
        },
      ],
    },
  },
];

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return FEATURE_PAGES.find((p) => p.slug === slug);
}

export function getPublishedFeatureSlugs(): string[] {
  return FEATURE_PAGES.filter((p) => p.status === "published").map(
    (p) => p.slug,
  );
}
