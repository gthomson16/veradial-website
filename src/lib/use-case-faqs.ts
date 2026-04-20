/* ------------------------------------------------------------------ */
/*  FAQ data per use-case page.                                        */
/*  Kept separate from page components so the visible FAQ section and  */
/*  the FAQPage JSON-LD render from the same source.                   */
/* ------------------------------------------------------------------ */

export type UseCaseFAQ = { question: string; answer: string };

export const CONTRACTOR_FAQS: readonly UseCaseFAQ[] = [
  {
    question:
      "Will customers know they're talking to an AI when it calls to confirm a job?",
    answer:
      "Yes. VeraDial's AI identifies itself as calling on your behalf at the start of every call — transparency is a core design decision. In practice, most customers appreciate the clear heads-up and the fact that confirmations now reach them during the day instead of after-hours voicemails. You receive a full transcript afterward so you can review or follow up personally for anything sensitive.",
  },
  {
    question:
      "What happens if a customer calls with an emergency while I'm on a job?",
    answer:
      "Inbound calls ring your phone via push notification (with CallKit on iOS), so you see them immediately even if you can't answer. If you miss it, voicemail is transcribed and arrives as readable text, so you can triage between a \"burst pipe\" emergency and a \"routine quote\" without listening to the audio. You can also set up AI call screening to have the AI answer first and tell you who's calling and why.",
  },
  {
    question: "Can I use my existing contractor business number with VeraDial?",
    answer:
      "Yes. You can verify a number you already own and use it as your outbound caller ID. Verified numbers receive STIR/SHAKEN B-level attestation for outbound voice calls (SMS requires a VeraDial-provisioned number for carrier compliance reasons). This lets you keep your established number on paperwork and truck wraps while adding AI calling and verified identity on top.",
  },
  {
    question:
      "Does VeraDial work for scheduling across multiple technicians or a small crew?",
    answer:
      "VeraDial supports up to 5 lines per account via add-on subscriptions at $9.99/mo each, so a small crew can each have their own business number and AI agent. There's no shared-inbox or team-dispatch feature built in — if you need dispatcher-style routing across a larger crew, OpenPhone or Dialpad are better fits. For solo operators and 2–3 person crews, VeraDial's per-line model is the simplest way to give each tech their own verified line.",
  },
];

export const REALTOR_FAQS: readonly UseCaseFAQ[] = [
  {
    question: "Can VeraDial call a new lead back while I'm in a showing?",
    answer:
      "Yes — that's one of the most common use cases. When a lead comes in, you queue an AI agent with a goal like \"Thank the lead for reaching out, confirm the property they're interested in, and book a showing for this weekend.\" The AI handles the conversation, captures a transcript, and books the showing directly. By the time you're done with your current showing, the follow-up is done.",
  },
  {
    question: "Will the AI disclose that it's AI, per MLS / broker guidelines?",
    answer:
      "Yes. Every VeraDial AI call opens with a clear disclosure that it's an AI assistant calling on the user's behalf. This keeps you inside the spirit of Realtor Code of Ethics transparency requirements and state-level disclosure rules around automated calls. Your brokerage may have additional internal policies around AI-assisted client communication — please check with your broker before scaling usage.",
  },
  {
    question: "Can I keep my current real estate phone number?",
    answer:
      "Yes. Verify your existing number in VeraDial and use it as your outbound caller ID — your clients see the same number they've always seen. Your existing number receives STIR/SHAKEN B-level attestation on outbound voice calls. If you want SMS from that number too, you'll need to also use a VeraDial-provisioned number for the texting side (B-level verified numbers are voice-only for carrier compliance reasons).",
  },
  {
    question:
      "Does VeraDial integrate with my CRM (Follow Up Boss, KvCORE, Chime)?",
    answer:
      "Not directly at the moment — there's no native integration layer in VeraDial today. Workflow: the AI hands back a full transcript after every call which you can paste or copy into your CRM's contact notes. For real-time CRM sync, a team-focused platform like OpenPhone or Dialpad with published integrations will fit better. VeraDial's focus is the AI calling capability itself, not the CRM plumbing.",
  },
];

export const FREELANCER_FAQS: readonly UseCaseFAQ[] = [
  {
    question:
      "Can I keep my personal and client calls separate without carrying two phones?",
    answer:
      "Yes — that's the core use case. Your VeraDial business number lives in the app on your existing phone. Incoming calls to your business number route through VeraDial with a distinct ringtone and CallKit integration on iOS. Personal calls go through your normal cell number. No second SIM, no second device, and no giving your personal number to a new client ever again.",
  },
  {
    question:
      "What happens to client calls when I'm off the clock or on vacation?",
    answer:
      "A few options: call forwarding routes unanswered calls to any number with a 30-second timeout; AI call screening lets the AI answer first, find out who's calling and what they need, and decide whether to pick up; voicemail captures messages with automatic transcription so you can triage them from a coffee shop without listening to audio. Many freelancers queue AI callbacks for the next morning on everything that isn't urgent.",
  },
  {
    question: "Is a single line enough for a one-person freelance business?",
    answer:
      "Yes, for almost every solo freelancer. The $9.99/mo plan gives you one dedicated line with 100 credits monthly — enough for ~50 minutes of standard calls, ~20 minutes of AI calling, or ~100 SMS messages. If you grow into a two-person shop or want a separate line for a side project, add-on lines are $9.99/mo each (up to 5 lines per account). Credits never expire, so busy-month spillover stays in your account.",
  },
  {
    question:
      "Does VeraDial handle invoicing, scheduling, or project management?",
    answer:
      "No — VeraDial is a calling and SMS product, not a freelance operations suite. It doesn't do invoicing, time tracking, scheduling widgets, or project management. It does send AI calls to book meetings directly on any calendar you hand the AI access to via the conversation, but the calendar itself lives in Google, Apple, Calendly, or whatever you use today. VeraDial is the \"phone\" layer of your stack, not the whole stack.",
  },
];

export const SALES_FAQS: readonly UseCaseFAQ[] = [
  {
    question: "Can VeraDial's AI make first-touch qualification calls for my SDRs?",
    answer:
      "Yes. You give the AI a goal (qualify interest, confirm budget/timeline, book a demo) plus a persistent caller profile with your business name and context, and the AI handles the full outbound conversation. Every call generates a transcript and a summary of outcomes. SDR teams commonly use this for the top-of-funnel \"intro + qualify\" motion and save live rep time for warmed leads that booked via the AI.",
  },
  {
    question: "How does the AI handle objections mid-call?",
    answer:
      "The AI is goal-oriented rather than scripted — you describe what you want it to accomplish, and it handles conversational flow including pushback. For common objections like \"send an email instead\" or \"I'm not interested,\" it responds naturally and either captures contact info, books a follow-up, or closes politely. For complex sales-methodology objections (MEDDIC/MEDDPICC-level discovery), the AI's role is first-touch qualification — you escalate to a live rep for deeper conversations. All transcripts surface the objection verbatim so reps can coach off them.",
  },
  {
    question: "Can I listen to AI calls in real-time, or only get transcripts after?",
    answer:
      "VeraDial delivers full transcripts and summaries after every AI call, typically within seconds of the call ending. Live listening/monitoring of AI calls in progress isn't a feature — if your team needs live call coaching, sentiment analysis, or real-time supervision, Dialpad or Gong-style tools are better fits. VeraDial's strength is autonomous outbound qualification plus clean post-call records.",
  },
  {
    question:
      "Does VeraDial integrate with Salesforce, HubSpot, or our outbound tooling?",
    answer:
      "Not with native integrations today. The workflow teams use: the AI's transcript and summary export from VeraDial and get copied into CRM notes manually or via your team's existing transcript-pipeline setup. For sales orgs that need tight CRM sync and dialer integration as a core requirement, Dialpad or Orum will fit better. VeraDial is the AI-does-the-outbound-call layer — not a full outbound sales platform.",
  },
];

export const PROPERTY_MANAGER_FAQS: readonly UseCaseFAQ[] = [
  {
    question:
      "Can the AI handle tenant maintenance calls and triage emergencies?",
    answer:
      "Yes. You set up an AI screening profile that asks callers what they're calling about, captures details (unit number, issue description, urgency), and classifies the call. Emergencies (burst pipe, no heat, lockout) get routed to your direct number immediately; routine requests (appliance fix, leaky faucet) get captured with a transcript you can dispatch the next business day. Tenants get a response even outside hours, and you stop waking up at 2 AM for non-emergencies.",
  },
  {
    question: "Can different properties or buildings have their own phone number?",
    answer:
      "Yes. VeraDial supports up to 5 lines per account via add-on subscriptions ($9.99/mo per line). A common setup: one number for each property or building, each with its own local area code for local-presence trust. Each line gets its own 100 monthly credits and its own AI profile, so tenants of a given building always reach the right workflow.",
  },
  {
    question:
      "Does VeraDial handle rental applications, showings, or lease paperwork?",
    answer:
      "No — VeraDial is a calling and SMS product. It doesn't store tenant applications, generate leases, or handle e-signatures. What it does handle is the phone-based conversations around those processes: the AI can field \"is this unit still available?\" inquiries, book in-person showings directly on your calendar, and send follow-up SMS confirmations. The actual application and paperwork flow lives in your property management system (AppFolio, Buildium, Rentec Direct, etc.).",
  },
  {
    question:
      "Are AI calls compliant with tenant-communication and recording-consent laws?",
    answer:
      "VeraDial AI calls always open with a disclosure that they're AI calls on the property manager's behalf, which satisfies most jurisdictions' automated-calling transparency requirements. For recording consent, you control whether a given call is recorded (recording is opt-in, off by default, and costs extra credits). State recording laws vary — one-party consent states are straightforward; all-party consent states (California, Florida, Illinois, Maryland, etc.) require you to handle notification within the conversation itself. VeraDial doesn't provide legal advice; check your state's specific rules for your business.",
  },
];

export const RECRUITER_FAQS: readonly UseCaseFAQ[] = [
  {
    question: "Can VeraDial's AI run first-touch candidate screening calls?",
    answer:
      "Yes. You give the AI a screening goal (verify work authorization, confirm years of experience, check salary expectations, book a recruiter interview) and a caller profile with your agency name and the role being filled. The AI calls the candidate, runs through the screening naturally, and delivers a transcript with structured answers. Recruiters commonly run the AI on a fresh batch of inbound applicants every morning and review transcripts over coffee before deciding who to push to live interviews.",
  },
  {
    question: "Can I customize the screening questions per role or per client?",
    answer:
      "Yes. Each AI call accepts a custom prompt where you describe the specific role, company context, and what you need to find out. For high-volume recruiting, you can save role-specific prompts as quick templates and dispatch them in batches. The AI adapts to the candidate's answers conversationally rather than reading a rigid script.",
  },
  {
    question:
      "What if a candidate pushes back on talking to an AI or wants a human?",
    answer:
      "The AI handles that gracefully: it acknowledges the preference, captures the candidate's best time for a human callback, and delivers that request to you in the transcript. You see the candidate's pushback verbatim — useful signal in itself about how they might respond to automation-heavy clients downstream. In practice, most candidates engage with the AI once it's clear it's screening them for a real role rather than cold-spamming them.",
  },
  {
    question:
      "Does VeraDial integrate with our ATS (Greenhouse, Lever, Bullhorn)?",
    answer:
      "No native integrations today. Workflow: the AI call transcripts export cleanly and get pasted or copied into ATS candidate notes. For high-volume staffing agencies that need tight ATS sync as a core requirement, look at dialer tools that publish Bullhorn/Greenhouse/Lever connectors. VeraDial's value is the AI-does-the-first-touch-call capability; the ATS plumbing lives in your existing stack.",
  },
];
