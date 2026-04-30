export type HelpSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type HelpFaq = {
  question: string;
  answer: string;
};

export type HelpLink = {
  label: string;
  href: string;
  description: string;
};

export type HelpPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  intro: string;
  sections: HelpSection[];
  faqs: HelpFaq[];
  relatedLinks: HelpLink[];
};

export const HELP_PAGES: HelpPage[] = [
  {
    slug: "why-business-number-marked-spam",
    title: "Why Your Business Number Shows as Spam Likely",
    description:
      "A practical guide to why business calls get marked Spam Likely, how STIR/SHAKEN and reputation scoring work, and what small businesses can do to fix it.",
    keywords: [
      "business number marked spam",
      "why does my number show scam likely",
      "fix spam likely business number",
      "business caller ID verification",
      "STIR SHAKEN spam likely",
      "verified caller ID small business",
    ],
    eyebrow: "Caller Trust",
    intro:
      "If your business number shows as Spam Likely, the problem is usually a mix of caller identity verification, number reputation, and calling behavior. The fix starts with using a number your provider can verify, then keeping your call patterns consistent and legitimate.",
    sections: [
      {
        heading: "The short answer",
        body:
          "Carriers label calls when they cannot confidently verify who is calling or when a number's reputation looks risky. A legitimate business can still get flagged if it uses recycled VoIP numbers, caller ID spoofing tools, weak STIR/SHAKEN attestation, or sudden high-volume outbound patterns.",
        bullets: [
          "Weak or missing STIR/SHAKEN signing makes the call look less trustworthy.",
          "A recycled number can inherit reputation problems from a previous owner.",
          "High-volume calls to people who do not know you can trigger filtering even when the number is legitimate.",
          "Recipients who ignore, block, or report your calls can damage the number over time.",
        ],
      },
      {
        heading: "What STIR/SHAKEN actually changes",
        body:
          "STIR/SHAKEN lets phone carriers sign calls so the receiving carrier knows whether the caller is authorized to use the number. A-level attestation is the strongest signal because the provider has verified both the customer and the right to use that specific number.",
        bullets: [
          "A-level: strongest verification, usually best for answer rates.",
          "B-level: caller is verified, but number authorization is less complete.",
          "C-level or unsigned: carriers treat the call as higher risk.",
        ],
      },
      {
        heading: "What to do first",
        body:
          "Start by checking the display on several carriers, then ask your provider what attestation level they sign your outbound calls with. If the answer is unclear, that is useful signal: a provider that offers strong verification usually says so plainly.",
        bullets: [
          "Call test numbers on AT&T, Verizon, T-Mobile, Rogers, Bell, or Telus if you can.",
          "Avoid tools that display numbers you do not own.",
          "Use a persistent business number instead of disposable or ad-supported numbers.",
          "Keep call volume consistent and make sure recipients expect the call whenever possible.",
        ],
      },
      {
        heading: "Where VeraDial fits",
        body:
          "VeraDial provisions persistent US and Canadian business numbers with STIR/SHAKEN A-level attestation on purchased numbers. If you already own a number, VeraDial can verify it as a secondary outbound voice caller ID with B-level attestation.",
      },
    ],
    faqs: [
      {
        question: "Can a legitimate business number still show as Spam Likely?",
        answer:
          "Yes. STIR/SHAKEN helps, but carriers also use reputation signals such as call volume, block reports, answer behavior, number history, and complaint patterns.",
      },
      {
        question: "Does buying a new number fix the problem immediately?",
        answer:
          "It can help if the new number has clean history and strong attestation, but reputation still builds over time. Use normal business calling patterns and avoid sudden high-volume outreach.",
      },
      {
        question: "Is caller ID spoofing the same as caller ID control?",
        answer:
          "No. Spoofing means displaying a number you do not control. Legitimate caller ID control means using a number you own or have verified, so the carrier can sign the call appropriately.",
      },
    ],
    relatedLinks: [
      {
        label: "STIR/SHAKEN for small business",
        href: "/stir-shaken-for-small-business",
        description:
          "Plain-English explanation of A/B/C attestation and why verified caller ID matters.",
      },
      {
        label: "VeraDial pricing",
        href: "/pricing",
        description:
          "See the $9.99/mo business line plan, included credits, and top-up costs.",
      },
      {
        label: "SpoofCard alternatives",
        href: "/alternatives/spoofcard",
        description:
          "Compare legitimate caller ID control with caller ID spoofing tools.",
      },
    ],
  },
  {
    slug: "ai-calling-for-small-business",
    title: "AI Calling for Small Business: What It Can Handle",
    description:
      "Learn what AI calling can do for small businesses, where it works best, where humans should stay involved, and how to use it transparently.",
    keywords: [
      "AI calling for small business",
      "AI phone assistant",
      "AI outbound calling",
      "AI appointment confirmation",
      "AI calling app",
      "small business phone AI",
    ],
    eyebrow: "AI Calling",
    intro:
      "AI calling works best when the call has a clear goal: confirm an appointment, follow up on a lead, collect basic information, or leave a concise message. It is not a replacement for judgment-heavy conversations, but it can remove a lot of routine phone work.",
    sections: [
      {
        heading: "Good AI calling jobs",
        body:
          "The best calls are bounded, repetitive, and easy to evaluate afterward. A good instruction tells the AI who it is calling, why it is calling, what outcome to aim for, and what to do if the recipient asks something unexpected.",
        bullets: [
          "Appointment confirmations and reminders.",
          "Simple lead follow-ups after a form fill or missed call.",
          "Status checks, availability checks, and callback requests.",
          "Basic qualification calls with a small number of required questions.",
        ],
      },
      {
        heading: "Calls humans should keep",
        body:
          "Humans should stay involved for sensitive, emotional, regulated, or high-stakes conversations. AI is strongest as a routine call assistant, not as the final decision-maker in complex customer situations.",
        bullets: [
          "Negotiations, complaints, and escalations.",
          "Medical, legal, financial, or regulated advice.",
          "Conversations where empathy and judgment matter more than speed.",
        ],
      },
      {
        heading: "Transparency matters",
        body:
          "VeraDial's AI identifies itself upfront. That is a product choice, not just a compliance posture. Recipients should understand that an AI assistant is calling on behalf of a real business, and the business owner should get the transcript afterward.",
      },
      {
        heading: "How to measure whether it is working",
        body:
          "Start with a small call type and track outcomes: answered calls, completed confirmations, booked appointments, callbacks requested, and cases where the AI could not complete the goal. The transcript is as important as the result because it shows what happened.",
      },
    ],
    faqs: [
      {
        question: "Will customers know the call is AI?",
        answer:
          "Yes. VeraDial is designed around transparent AI calling, so the assistant identifies itself and calls on behalf of your business.",
      },
      {
        question: "Can AI calling replace a receptionist?",
        answer:
          "It can reduce routine calling work, but it should not be treated as a full receptionist replacement for complex, emotional, or regulated conversations.",
      },
      {
        question: "What does the business owner get after the call?",
        answer:
          "The useful output is the outcome plus the call transcript and summary, so you can review what happened and decide whether to follow up manually.",
      },
    ],
    relatedLinks: [
      {
        label: "Use cases by business type",
        href: "/use-cases",
        description:
          "See how contractors, realtors, freelancers, sales teams, property managers, and recruiters can use VeraDial.",
      },
      {
        label: "VeraDial pricing",
        href: "/pricing",
        description:
          "AI calls use 5 credits per minute, with 100 credits included monthly.",
      },
      {
        label: "VeraDial vs Dialpad",
        href: "/compare/dialpad",
        description:
          "Compare AI that makes calls with enterprise AI that listens, summarizes, and coaches.",
      },
    ],
  },
  {
    slug: "appointment-confirmation-scripts",
    title: "Appointment Confirmation Call Scripts for Service Businesses",
    description:
      "Practical appointment confirmation scripts for contractors and service teams, plus tips for turning them into AI calling prompts.",
    keywords: [
      "appointment confirmation script",
      "appointment confirmation call script",
      "contractor appointment confirmation",
      "service business appointment reminders",
      "AI appointment confirmation calls",
      "customer confirmation script",
    ],
    eyebrow: "Scripts",
    intro:
      "A good appointment confirmation call is short, specific, and easy to answer. The goal is not to sell again; it is to confirm the time, location, access details, and next step before the appointment is missed.",
    sections: [
      {
        heading: "Basic confirmation script",
        body:
          "Hi, this is [assistant or business name] calling on behalf of [business name]. We are confirming your appointment for [date] at [time] at [address]. Please reply yes to confirm, or let us know if you need to reschedule.",
        bullets: [
          "Confirm the date and time.",
          "Confirm the address or job location.",
          "Ask for a clear yes/no confirmation.",
          "Give a simple reschedule path.",
        ],
      },
      {
        heading: "Contractor and home-services version",
        body:
          "Hi, this is [assistant or business name] calling on behalf of [company]. We have you scheduled for [service] on [date] between [arrival window]. Please confirm that someone will be available and that we can access [gate/parking/equipment/location detail].",
        bullets: [
          "Ask about access before the technician arrives.",
          "Mention arrival windows instead of exact times when needed.",
          "Capture gate codes, parking notes, pets, and site constraints.",
        ],
      },
      {
        heading: "No-answer voicemail version",
        body:
          "Hi, this is [business name] confirming your appointment for [date] at [time/window]. If that still works, no action is needed. If you need to reschedule, please call or text us at this number.",
      },
      {
        heading: "Turning the script into an AI prompt",
        body:
          "Give the AI the appointment details, the desired outcome, and the fallback path. Keep it narrow: confirm, collect access notes, or request a callback. Do not ask the AI to handle billing disputes, complaints, or open-ended service questions in the same call.",
      },
    ],
    faqs: [
      {
        question: "When should appointment confirmation calls go out?",
        answer:
          "For most service businesses, the day before works best. Same-day confirmations can still help, but they give you less time to fill cancellations.",
      },
      {
        question: "Should the call mention that it is AI?",
        answer:
          "Yes. If an AI assistant is making the call, it should identify itself and say which business it is calling on behalf of.",
      },
      {
        question: "What should the AI do if the customer wants to reschedule?",
        answer:
          "The safest flow is to capture the request, ask for preferred times if appropriate, and flag the call for manual follow-up unless your scheduling rules are fully defined.",
      },
    ],
    relatedLinks: [
      {
        label: "VeraDial for contractors",
        href: "/use-cases/contractors",
        description:
          "How contractors and field-service operators can use AI calls while working on-site.",
      },
      {
        label: "AI calling for small business",
        href: "/help/ai-calling-for-small-business",
        description:
          "See which call types are a good fit for AI and which should stay human-led.",
      },
      {
        label: "VeraDial pricing",
        href: "/pricing",
        description:
          "Estimate how many confirmation calls fit into the included monthly credits.",
      },
    ],
  },
];

export function getHelpPage(slug: string): HelpPage | undefined {
  return HELP_PAGES.find((page) => page.slug === slug);
}

export function getAllHelpSlugs() {
  return HELP_PAGES.map((page) => page.slug);
}
