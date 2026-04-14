/* ------------------------------------------------------------------ */
/*  Centralised data for /alternatives/[competitor] pages              */
/* ------------------------------------------------------------------ */

export type Alternative = {
  name: string;
  slug: string;
  tagline: string;
  pricing: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** We have a /compare/[slug] page for this product */
  vsPageSlug?: string;
};

export type PainPoint = { title: string; description: string };
export type Criterion = { title: string; description: string };
export type Recommendation = { useCase: string; pick: string; why: string };

export type AlternativesPageData = {
  slug: string;
  name: string;
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
  intro: string;
  painPoints: PainPoint[];
  criteria: Criterion[];
  alternatives: Alternative[];
  recommendations: Recommendation[];
};

/* ------------------------------------------------------------------ */
/*  Product profiles (reused across pages)                             */
/* ------------------------------------------------------------------ */

const VERADIAL: Alternative = {
  name: "VeraDial",
  slug: "veradial",
  tagline: "AI-powered business calling with verified caller ID and voice effects.",
  pricing: "$9.99/mo per line (100 credits included)",
  bestFor: "Solopreneurs, freelancers, and small business owners who need AI to make calls on their behalf with a verified business identity.",
  pros: [
    "AI agent makes outbound calls for you with full transcripts",
    "Caller ID control \u2014 verify existing numbers as secondary IDs",
    "STIR/SHAKEN A-level attestation on every call",
    "Voice effects (Male, Female, Privacy) for identity control",
    "Call recording on any call, plus voicemail transcription",
  ],
  cons: [
    "No shared team numbers or built-in CRM",
    "No video conferencing or team messaging",
  ],
};

const OPENPHONE: Alternative = {
  name: "OpenPhone",
  slug: "openphone",
  tagline: "Modern team phone system with shared numbers and built-in CRM.",
  pricing: "From $15/user/mo",
  bestFor: "Small teams that need shared numbers, a built-in CRM, and collaborative inboxes.",
  pros: [
    "Shared phone numbers across team members",
    "Built-in CRM with contact management",
    "AI call summaries and transcription",
    "Clean, modern interface",
  ],
  cons: [
    "Per-seat pricing adds up quickly for teams",
    "No AI agent calling \u2014 AI only summarises, doesn\u2019t make calls",
    "No caller ID control or voice effects",
  ],
  vsPageSlug: "openphone",
};

const GRASSHOPPER: Alternative = {
  name: "Grasshopper",
  slug: "grasshopper",
  tagline: "Virtual phone system that forwards calls to your personal phone.",
  pricing: "From ~$14/mo (Solo plan)",
  bestFor: "Solopreneurs who want a basic business number layered on top of their personal phone.",
  pros: [
    "Simple setup \u2014 runs on your existing phone",
    "Custom greetings and auto-attendant",
    "Multiple extensions on higher plans",
    "Well-known brand, long track record",
  ],
  cons: [
    "Call forwarding, not dedicated VoIP \u2014 uses your personal carrier",
    "No AI features of any kind",
    "No call recording on basic plans",
    "Feels dated compared to modern alternatives",
  ],
  vsPageSlug: "grasshopper",
};

const GOOGLE_VOICE: Alternative = {
  name: "Google Voice",
  slug: "google-voice",
  tagline: "Free second phone number from Google for calling, texting, and voicemail.",
  pricing: "Free (personal) / $10/user/mo (business)",
  bestFor: "People who want a free second number within the Google ecosystem for personal or light business use.",
  pros: [
    "Free for personal use",
    "Deep Google ecosystem integration (Calendar, Meet)",
    "Works across phone, web, and desktop",
    "Voicemail transcription included",
  ],
  cons: [
    "No caller ID control \u2014 locked to assigned number",
    "No AI calling, no voice effects, no call recording on personal plan",
    "Requires a Google account",
    "Limited number selection",
  ],
  vsPageSlug: "google-voice",
};

const DIALPAD: Alternative = {
  name: "Dialpad",
  slug: "dialpad",
  tagline: "Enterprise communication platform with AI transcription and contact center features.",
  pricing: "From $15/user/mo",
  bestFor: "Scaling teams and contact centers that need AI coaching, sentiment analysis, and enterprise-grade telephony.",
  pros: [
    "Strong AI \u2014 real-time transcription, coaching, sentiment analysis",
    "Video conferencing included",
    "Contact center capabilities",
    "Good integrations ecosystem",
  ],
  cons: [
    "Overkill for solopreneurs \u2014 enterprise-focused features",
    "Per-seat pricing with admin setup required",
    "No caller ID control or voice effects",
    "AI listens and coaches but doesn\u2019t make calls for you",
  ],
  vsPageSlug: "dialpad",
};

const RINGCENTRAL: Alternative = {
  name: "RingCentral",
  slug: "ringcentral",
  tagline: "Full unified communications suite with phone, video, messaging, and fax.",
  pricing: "From $20/user/mo",
  bestFor: "Mid-market and enterprise organisations that need an all-in-one UCaaS platform with extensive integrations.",
  pros: [
    "Comprehensive \u2014 phone, video, messaging, fax in one platform",
    "Hundreds of integrations (Salesforce, Slack, etc.)",
    "AI call notes and meeting summaries",
    "Established market leader with reliability track record",
  ],
  cons: [
    "Most expensive option at $20/user/mo",
    "Complex admin portal \u2014 designed for IT departments",
    "Far too much for individual users or small teams",
    "No caller ID control or voice effects",
  ],
  vsPageSlug: "ringcentral",
};

const VONAGE: Alternative = {
  name: "Vonage",
  slug: "vonage",
  tagline: "Legacy business communications platform with phone, messaging, and developer APIs.",
  pricing: "From ~$14/user/mo",
  bestFor: "Developers who need communications APIs, or businesses already in the Vonage ecosystem.",
  pros: [
    "Strong developer API platform for custom solutions",
    "Video conferencing included",
    "Competitive pricing for the feature set",
    "International calling options",
  ],
  cons: [
    "Product focus shifting to APIs post-Ericsson acquisition",
    "Minimal AI features on the business phone side",
    "Call recording is a paid add-on",
    "No caller ID control or voice effects",
  ],
  vsPageSlug: "vonage",
};

const TEXTNOW: Alternative = {
  name: "TextNow",
  slug: "textnow",
  tagline: "Free calling and texting app supported by ads.",
  pricing: "Free (ad-supported) / Premium from $4.99/mo",
  bestFor: "Budget-conscious users who want a free second number and don\u2019t mind ads.",
  pros: [
    "Free tier with calling and texting",
    "Available on iOS, Android, and web",
    "Wi-Fi calling included",
  ],
  cons: [
    "Ad-supported \u2014 ads in the app experience",
    "No business features, no AI, no call recording",
    "Numbers can be recycled if inactive",
    "Not suitable for professional use",
  ],
  vsPageSlug: "textnow",
};

const SIDELINE: Alternative = {
  name: "Sideline",
  slug: "sideline",
  tagline: "Second phone number app for separating personal and business calls.",
  pricing: "$9.99/mo",
  bestFor: "Individuals who want a simple second line without advanced features.",
  pros: [
    "Simple, focused second number experience",
    "Business texting and voicemail",
    "Affordable at $9.99/mo",
  ],
  cons: [
    "No AI features or call recording",
    "No caller ID control or voice effects",
    "Limited feature set compared to modern alternatives",
    "No STIR/SHAKEN attestation marketing",
  ],
  vsPageSlug: "sideline",
};

const HUSHED: Alternative = {
  name: "Hushed",
  slug: "hushed",
  tagline: "Privacy-focused temporary and long-term phone numbers.",
  pricing: "From $3.99/mo",
  bestFor: "Privacy-conscious users who need temporary or disposable numbers.",
  pros: [
    "Strong privacy focus with temporary numbers",
    "Very affordable entry price",
    "Numbers from multiple countries",
  ],
  cons: [
    "Not designed for professional business use",
    "No AI features or call recording",
    "Limited calling minutes on cheaper plans",
    "No caller ID control or verification",
  ],
  vsPageSlug: "hushed",
};

const LINE2: Alternative = {
  name: "Line2",
  slug: "line2",
  tagline: "Second phone number app for calling and texting, with desktop support.",
  pricing: "From ~$14.99/mo",
  bestFor: "Users who want a basic second line on mobile and desktop without needing AI or verification.",
  pros: [
    "Available on mobile and desktop (Mac, Windows, web)",
    "Unlimited US/Canada calling",
    "Conference calling support",
  ],
  cons: [
    "Calls frequently flagged as \u201CScam Likely\u201D \u2014 no STIR/SHAKEN",
    "No AI features of any kind",
    "Reliability issues \u2014 dropped calls, delayed notifications",
    "No call recording on basic plans",
  ],
  vsPageSlug: "line2",
};

const IPLUM: Alternative = {
  name: "iPlum",
  slug: "iplum",
  tagline: "Compliance-focused business phone with HIPAA-compliant messaging.",
  pricing: "From ~$8.99/mo",
  bestFor: "Healthcare, finance, and legal professionals who need HIPAA-compliant business communications.",
  pros: [
    "HIPAA-compliant messaging and calling",
    "Encrypted secure texting",
    "Auto-attendant and phone tree",
    "Affordable base plan",
  ],
  cons: [
    "Calls frequently flagged as spam \u2014 no STIR/SHAKEN",
    "No AI features of any kind",
    "Dated, clunky app interface",
    "Confusing pricing \u2014 useful features require $25\u201330/mo tiers",
  ],
  vsPageSlug: "iplum",
};

/* ------------------------------------------------------------------ */
/*  Shared criteria (what to look for in an alternative)               */
/* ------------------------------------------------------------------ */

const SHARED_CRITERIA: Criterion[] = [
  {
    title: "Call quality & verification",
    description:
      "Does the provider use dedicated VoIP infrastructure? Do calls carry STIR/SHAKEN attestation so they display as verified and don\u2019t get flagged as spam?",
  },
  {
    title: "AI & automation",
    description:
      "Can the platform make calls on your behalf, or does it only transcribe after the fact? AI that acts is fundamentally different from AI that listens.",
  },
  {
    title: "Caller ID control",
    description:
      "Can you choose what number the recipient sees? For business calling, presenting the right number to the right contact builds trust and professionalism.",
  },
  {
    title: "Pricing transparency",
    description:
      "Watch for per-seat pricing that adds up, required add-ons for basic features like call recording, and long-term contracts. Know the total cost before committing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page definitions                                                   */
/* ------------------------------------------------------------------ */

export const ALTERNATIVES_PAGES: AlternativesPageData[] = [
  {
    slug: "google-voice",
    name: "Google Voice",
    pageTitle: "Best Google Voice Alternatives in 2026",
    pageDescription:
      "Looking for a Google Voice alternative? Compare the best options for business calling, AI features, caller ID control, and verified identity.",
    keywords: [
      "Google Voice alternatives",
      "best Google Voice alternative",
      "Google Voice replacement",
      "Google Voice for business alternative",
      "apps like Google Voice",
      "Google Voice competitor",
    ],
    intro:
      "Google Voice is a solid free second number \u2014 but it lacks caller ID control, AI calling, voice effects, and call recording. If you\u2019ve outgrown a free personal number and need professional business calling, here are the best alternatives.",
    painPoints: [
      {
        title: "No caller ID control",
        description:
          "Google Voice locks you to the number it assigns. You can\u2019t choose what the recipient sees or present different numbers to different contacts.",
      },
      {
        title: "No AI features",
        description:
          "Google Voice has no AI calling, no transcription on outbound calls, and no smart features beyond basic voicemail transcription.",
      },
      {
        title: "Google account required",
        description:
          "You need a Google account and a US phone number to get started. If you\u2019re not in the Google ecosystem, it\u2019s a hard dependency.",
      },
      {
        title: "Limited for business use",
        description:
          "No call recording on the personal plan, limited number selection, and no verification \u2014 your calls may show as unknown or unverified.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      OPENPHONE,
      GRASSHOPPER,
      TEXTNOW,
      SIDELINE,
      HUSHED,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI calling and verified identity",
        pick: "VeraDial",
        why: "AI agents make calls for you, STIR/SHAKEN verified, caller ID control, and voice effects \u2014 all for $9.99/mo.",
      },
      {
        useCase: "Small team sharing a business number",
        pick: "OpenPhone",
        why: "Shared numbers, built-in CRM, and team inbox make it ideal for collaborative calling.",
      },
      {
        useCase: "Budget-conscious personal use",
        pick: "TextNow",
        why: "Free tier covers basic calling and texting if you don\u2019t mind ads.",
      },
      {
        useCase: "Simple business number on your personal phone",
        pick: "Grasshopper",
        why: "Call forwarding model is simple to set up and requires no app switching.",
      },
    ],
  },
  {
    slug: "openphone",
    name: "OpenPhone",
    pageTitle: "Best OpenPhone Alternatives in 2026",
    pageDescription:
      "Looking for an OpenPhone alternative? Compare the best options for AI calling, caller ID control, solo business phones, and team communication.",
    keywords: [
      "OpenPhone alternatives",
      "best OpenPhone alternative",
      "OpenPhone replacement",
      "apps like OpenPhone",
      "OpenPhone competitor",
      "cheaper than OpenPhone",
    ],
    intro:
      "OpenPhone is a great team phone system, but per-seat pricing adds up, and it lacks AI agent calling, caller ID control, and voice effects. If you\u2019re a solo professional or need features OpenPhone doesn\u2019t offer, here are the best alternatives.",
    painPoints: [
      {
        title: "Per-seat pricing adds up",
        description:
          "At $15/user/mo, costs scale linearly with team size. Solo users pay team prices for features they don\u2019t need.",
      },
      {
        title: "No AI agent calling",
        description:
          "OpenPhone\u2019s AI summarises calls after the fact but can\u2019t make calls on your behalf. There\u2019s no autonomous outbound calling.",
      },
      {
        title: "No caller ID control",
        description:
          "You\u2019re locked to the numbers on your OpenPhone account. No ability to verify existing numbers or choose your outbound caller ID.",
      },
      {
        title: "Team-first design",
        description:
          "Shared inboxes, CRM, and team features are great for groups \u2014 but add complexity and cost for solo operators who don\u2019t need them.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      GOOGLE_VOICE,
      GRASSHOPPER,
      DIALPAD,
      RINGCENTRAL,
      SIDELINE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI calling",
        pick: "VeraDial",
        why: "AI agents, verified caller ID, voice effects, and no per-seat pricing at $9.99/mo.",
      },
      {
        useCase: "Free or very low budget",
        pick: "Google Voice",
        why: "Free personal tier with Google ecosystem integration covers basic needs.",
      },
      {
        useCase: "Enterprise team with contact center needs",
        pick: "Dialpad",
        why: "AI coaching, sentiment analysis, and contact center features for scaling teams.",
      },
      {
        useCase: "Simple virtual number, no frills",
        pick: "Grasshopper",
        why: "Call forwarding model is straightforward for solopreneurs who just need a business number.",
      },
    ],
  },
  {
    slug: "grasshopper",
    name: "Grasshopper",
    pageTitle: "Best Grasshopper Alternatives in 2026",
    pageDescription:
      "Looking for a Grasshopper alternative? Compare modern options with AI calling, dedicated VoIP, caller ID control, and better pricing.",
    keywords: [
      "Grasshopper alternatives",
      "best Grasshopper alternative",
      "Grasshopper replacement",
      "Grasshopper phone alternative",
      "apps like Grasshopper",
      "better than Grasshopper",
    ],
    intro:
      "Grasshopper was one of the first virtual phone systems for small businesses, but it\u2019s showing its age. No AI, no dedicated VoIP, no call recording on basic plans \u2014 just call forwarding to your personal phone. Here are modern alternatives that offer more for less.",
    painPoints: [
      {
        title: "Call forwarding, not real VoIP",
        description:
          "Grasshopper routes calls through your personal carrier. You\u2019re not getting dedicated infrastructure \u2014 just a number that forwards to your phone.",
      },
      {
        title: "No AI features at all",
        description:
          "No AI calling, no smart transcription, no automation. In 2026, this is a significant gap compared to modern alternatives.",
      },
      {
        title: "Expensive for what you get",
        description:
          "Starting at ~$14/mo for basic call forwarding, with useful features like recording locked to higher tiers at $28+/mo.",
      },
      {
        title: "Dated user experience",
        description:
          "Owned by GoTo, Grasshopper hasn\u2019t had a meaningful product refresh in years. The app and features feel behind the times.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      OPENPHONE,
      GOOGLE_VOICE,
      SIDELINE,
      DIALPAD,
      RINGCENTRAL,
    ],
    recommendations: [
      {
        useCase: "Solo professional who wants AI + verified calling",
        pick: "VeraDial",
        why: "Dedicated VoIP with AI agents, caller ID control, and voice effects \u2014 everything Grasshopper lacks, at a lower price.",
      },
      {
        useCase: "Small team needing shared numbers",
        pick: "OpenPhone",
        why: "Modern team phone with CRM, shared numbers, and AI summaries.",
      },
      {
        useCase: "Free personal second number",
        pick: "Google Voice",
        why: "Free tier covers basic calling and texting within the Google ecosystem.",
      },
      {
        useCase: "Full business phone system",
        pick: "RingCentral",
        why: "If you need video, messaging, fax, and phone in one platform, RingCentral is the market leader.",
      },
    ],
  },
  {
    slug: "dialpad",
    name: "Dialpad",
    pageTitle: "Best Dialpad Alternatives in 2026",
    pageDescription:
      "Looking for a Dialpad alternative? Compare options for AI calling, simpler setup, solo-friendly pricing, and focused business phone features.",
    keywords: [
      "Dialpad alternatives",
      "best Dialpad alternative",
      "Dialpad replacement",
      "Dialpad competitor",
      "apps like Dialpad",
      "cheaper than Dialpad",
    ],
    intro:
      "Dialpad is a powerful enterprise platform with strong AI transcription and coaching. But if you\u2019re a solo professional, the per-seat pricing, admin setup, and contact center features are overkill. Here are alternatives that fit different needs.",
    painPoints: [
      {
        title: "Enterprise complexity for individual users",
        description:
          "Admin portals, department routing, agent coaching dashboards \u2014 Dialpad is built for teams deploying across organisations, not solo operators.",
      },
      {
        title: "AI listens but doesn\u2019t act",
        description:
          "Dialpad\u2019s AI transcribes, summarises, and coaches in real-time \u2014 but it can\u2019t make a call on your behalf.",
      },
      {
        title: "Per-seat pricing",
        description:
          "At $15/user/mo, you\u2019re paying team rates even as a solo user. Costs multiply as you add seats.",
      },
      {
        title: "No caller ID control or voice features",
        description:
          "Caller ID is locked to assigned numbers. No voice effects or identity management for outbound calls.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      RINGCENTRAL,
      OPENPHONE,
      VONAGE,
      GRASSHOPPER,
      GOOGLE_VOICE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI that makes calls",
        pick: "VeraDial",
        why: "AI agents handle outbound calls autonomously, with caller ID control and voice effects at $9.99/mo.",
      },
      {
        useCase: "Full UCaaS for a large team",
        pick: "RingCentral",
        why: "More integrations and a broader feature set for mid-market and enterprise teams.",
      },
      {
        useCase: "Small team on a budget",
        pick: "OpenPhone",
        why: "Same price as Dialpad but simpler, with shared numbers and CRM built in.",
      },
      {
        useCase: "Just need a basic business number",
        pick: "Grasshopper",
        why: "If you only need a virtual number with call forwarding, Grasshopper is simpler and cheaper.",
      },
    ],
  },
  {
    slug: "ringcentral",
    name: "RingCentral",
    pageTitle: "Best RingCentral Alternatives in 2026",
    pageDescription:
      "Looking for a RingCentral alternative? Compare cheaper, simpler, and more focused options for business calling, AI features, and team communication.",
    keywords: [
      "RingCentral alternatives",
      "best RingCentral alternative",
      "RingCentral replacement",
      "cheaper than RingCentral",
      "RingCentral competitor",
      "apps like RingCentral",
    ],
    intro:
      "RingCentral is the market leader in unified communications \u2014 phone, video, messaging, fax, and hundreds of integrations. But at $20/user/mo with complex admin setup, it\u2019s overkill for many businesses. Here are alternatives that deliver what you actually need.",
    painPoints: [
      {
        title: "Expensive for small businesses",
        description:
          "Starting at $20/user/mo, RingCentral is one of the priciest options. A 5-person team pays $100/mo for features most of them won\u2019t use.",
      },
      {
        title: "Complex setup and administration",
        description:
          "Admin portals, extension configuration, user provisioning \u2014 RingCentral often requires IT involvement to deploy properly.",
      },
      {
        title: "Feature bloat",
        description:
          "Video conferencing, team messaging, internet fax, app marketplace \u2014 most small businesses and solopreneurs use a fraction of what they\u2019re paying for.",
      },
      {
        title: "No AI agent calling",
        description:
          "RingCentral added AI notes and summaries, but it can\u2019t make calls on your behalf. No caller ID control or voice effects either.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      DIALPAD,
      OPENPHONE,
      VONAGE,
      GRASSHOPPER,
      GOOGLE_VOICE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI calling",
        pick: "VeraDial",
        why: "Focused AI calling with verified identity at half the price \u2014 $9.99/mo with no enterprise bloat.",
      },
      {
        useCase: "Team that still needs UCaaS features",
        pick: "Dialpad",
        why: "Similar AI capabilities to RingCentral at $15/user/mo with better AI transcription and coaching.",
      },
      {
        useCase: "Small team wanting simplicity",
        pick: "OpenPhone",
        why: "Modern, clean interface with shared numbers and CRM at $15/user/mo \u2014 no admin portal needed.",
      },
      {
        useCase: "Budget-conscious, minimal needs",
        pick: "Google Voice",
        why: "Free personal tier or $10/user business tier within the Google ecosystem.",
      },
    ],
  },
  {
    slug: "vonage",
    name: "Vonage",
    pageTitle: "Best Vonage Alternatives in 2026",
    pageDescription:
      "Looking for a Vonage alternative? Compare modern options with AI calling, active development, caller ID control, and transparent pricing.",
    keywords: [
      "Vonage alternatives",
      "best Vonage alternative",
      "Vonage Business replacement",
      "Vonage competitor",
      "apps like Vonage",
      "switch from Vonage",
    ],
    intro:
      "Vonage was a VoIP pioneer, but since the 2022 Ericsson acquisition, its focus has shifted to developer APIs. The business phone product gets less attention, with minimal AI features and call recording as a paid add-on. Here are alternatives with more modern capabilities.",
    painPoints: [
      {
        title: "Divided product attention",
        description:
          "Post-acquisition, Vonage\u2019s focus is increasingly on its communications API platform. The business phone product receives fewer updates.",
      },
      {
        title: "Minimal AI features",
        description:
          "Vonage\u2019s business phone has basic voicemail transcription but no AI calling, no smart summaries, and no automation.",
      },
      {
        title: "Call recording is a paid add-on",
        description:
          "Unlike most modern alternatives, Vonage charges extra for call recording \u2014 it\u2019s not included in the base plan.",
      },
      {
        title: "No caller ID control or voice features",
        description:
          "Caller ID is tied to assigned extensions. No voice effects or ability to present different numbers to different contacts.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      RINGCENTRAL,
      DIALPAD,
      OPENPHONE,
      GRASSHOPPER,
      GOOGLE_VOICE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI calling",
        pick: "VeraDial",
        why: "Modern, purpose-built AI calling with verified identity and voice effects at $9.99/mo.",
      },
      {
        useCase: "Enterprise team needing a full platform",
        pick: "RingCentral",
        why: "Market-leading UCaaS with phone, video, messaging, and the broadest integration ecosystem.",
      },
      {
        useCase: "AI-forward team platform",
        pick: "Dialpad",
        why: "Strongest AI transcription and coaching among team-focused alternatives.",
      },
      {
        useCase: "Simple small team phone",
        pick: "OpenPhone",
        why: "Clean, modern team phone with CRM and shared numbers at a competitive price.",
      },
    ],
  },
  {
    slug: "line2",
    name: "Line2",
    pageTitle: "Best Line2 Alternatives in 2026",
    pageDescription:
      "Looking for a Line2 alternative? Compare options with verified caller ID, AI calling, better reliability, and calls that don\u2019t get flagged as spam.",
    keywords: [
      "Line2 alternatives",
      "best Line2 alternative",
      "Line2 replacement",
      "Line2 spam fix",
      "apps like Line2",
      "Line2 competitor",
    ],
    intro:
      "Line2 gives you a second number, but its biggest problem is that your calls get flagged as \u201CScam Likely.\u201D Add dropped calls, delayed notifications, and no AI features, and it\u2019s clear why people are looking for alternatives. Here are the best options.",
    painPoints: [
      {
        title: "Calls flagged as \u201CScam Likely\u201D",
        description:
          "Line2\u2019s #1 complaint. VoIP numbers without STIR/SHAKEN attestation get flagged by carriers, so recipients never see your call or actively ignore it.",
      },
      {
        title: "Reliability issues",
        description:
          "Users regularly report dropped calls, echo, poor audio quality, and delayed or missing notifications for calls and texts.",
      },
      {
        title: "No AI features",
        description:
          "No AI calling, no smart transcription, no automation. Line2 routes calls and texts but adds no intelligence.",
      },
      {
        title: "Limited recording, higher price",
        description:
          "Call recording is limited to higher-tier plans. The base plan at ~$14.99/mo offers less than modern alternatives at a lower price.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      OPENPHONE,
      GOOGLE_VOICE,
      GRASSHOPPER,
      IPLUM,
      SIDELINE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs calls that get answered",
        pick: "VeraDial",
        why: "STIR/SHAKEN verified calls, AI agents, voice effects, and caller ID control at $9.99/mo \u2014 solves Line2\u2019s biggest problem.",
      },
      {
        useCase: "Small team with shared number needs",
        pick: "OpenPhone",
        why: "Modern team phone with shared numbers, CRM, and reliable infrastructure.",
      },
      {
        useCase: "Free personal second number",
        pick: "Google Voice",
        why: "Free within the Google ecosystem \u2014 basic but reliable for personal use.",
      },
      {
        useCase: "HIPAA-compliant business communications",
        pick: "iPlum",
        why: "If you need regulatory compliance for healthcare or finance, iPlum\u2019s HIPAA features are the differentiator.",
      },
    ],
  },
  {
    slug: "iplum",
    name: "iPlum",
    pageTitle: "Best iPlum Alternatives in 2026",
    pageDescription:
      "Looking for an iPlum alternative? Compare options with AI calling, verified caller ID, modern interfaces, and transparent pricing.",
    keywords: [
      "iPlum alternatives",
      "best iPlum alternative",
      "iPlum replacement",
      "iPlum competitor",
      "apps like iPlum",
      "HIPAA phone alternative",
    ],
    intro:
      "iPlum is built around HIPAA compliance for regulated industries. But if you don\u2019t need regulatory features \u2014 or you\u2019re frustrated by spam-flagged calls, confusing pricing, and a dated interface \u2014 here are better alternatives for business calling.",
    painPoints: [
      {
        title: "Calls flagged as spam",
        description:
          "Like many VoIP apps, iPlum calls are frequently flagged as \u201CScam Likely\u201D on the recipient\u2019s phone due to lack of carrier-level verification.",
      },
      {
        title: "Confusing pricing tiers",
        description:
          "The base plan is cheap, but useful features like call recording, HIPAA compliance, and auto-attendant require $25\u201330/mo tiers. The real cost is often higher than advertised.",
      },
      {
        title: "Dated interface",
        description:
          "iPlum\u2019s app is frequently described as clunky and unintuitive compared to modern alternatives.",
      },
      {
        title: "No AI features",
        description:
          "No AI calling, no smart transcription, no automation. iPlum focuses on compliance features but adds no intelligence to your calls.",
      },
    ],
    criteria: SHARED_CRITERIA,
    alternatives: [
      VERADIAL,
      OPENPHONE,
      GOOGLE_VOICE,
      LINE2,
      GRASSHOPPER,
      SIDELINE,
    ],
    recommendations: [
      {
        useCase: "Solo professional who needs AI calling and verified identity",
        pick: "VeraDial",
        why: "AI agents, STIR/SHAKEN verified calls, voice effects, and caller ID control at $9.99/mo \u2014 modern features iPlum doesn\u2019t offer.",
      },
      {
        useCase: "Small team with CRM needs",
        pick: "OpenPhone",
        why: "Modern interface, shared numbers, built-in CRM, and reliable call quality.",
      },
      {
        useCase: "Free or very low budget",
        pick: "Google Voice",
        why: "Free personal tier covers basic calling and texting within Google\u2019s ecosystem.",
      },
      {
        useCase: "Desktop + mobile second line",
        pick: "Line2",
        why: "If you need desktop apps alongside mobile, Line2 offers Mac, Windows, and web clients.",
      },
    ],
  },
];

export function getAlternativesPage(
  slug: string,
): AlternativesPageData | undefined {
  return ALTERNATIVES_PAGES.find((p) => p.slug === slug);
}

export function getAllAlternativesSlugs(): string[] {
  return ALTERNATIVES_PAGES.map((p) => p.slug);
}
