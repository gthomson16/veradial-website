import {
  Bot,
  CheckCircle2,
  Eye,
  Headphones,
  Phone,
  UserCheck,
  AudioLines,
  MessageSquare,
  Lock,
  Shield,
  Smartphone,
} from "lucide-react";

export const EARLY_ACCESS_URL =
  "mailto:support@veradial.com?subject=VeraDial%20Early%20Access&body=Hi%20VeraDial%2C%0A%0AI%27d%20like%20early%20access%20to%20the%20app.%0A";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Compare", href: "/compare" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Access", href: "/#download" },
] as const;

export const HERO_STATS = [
  {
    label: "AI Calling",
    value: "Hands-free conversations",
  },
  {
    label: "Verified Identity",
    value: "A-level attestation",
  },
  {
    label: "Coverage",
    value: "US + Canada",
  },
] as const;

export const TRUST_SIGNALS = [
  {
    icon: CheckCircle2,
    title: "Verified outbound identity",
    detail: "Purchased numbers show up with A-level attestation.",
  },
  {
    icon: Smartphone,
    title: "One mobile workflow",
    detail: "Buy numbers, place calls, send SMS, and swap identities in-app.",
  },
  {
    icon: Shield,
    title: "Carrier-grade delivery",
    detail: "Voice and messaging route through hardened telecom infrastructure.",
  },
  {
    icon: Eye,
    title: "AI transparency built in",
    detail: "AI calls identify themselves upfront. Full transcripts and summaries after every call.",
  },
  {
    icon: Headphones,
    title: "Built for real operators",
    detail: "Useful for solo operators, small teams, and field reps who need consistency.",
  },
] as const;

export const USE_CASES = [
  {
    title: "Solo operators",
    description:
      "You\u2019re an HVAC tech on a roof at 2 PM when three clients need callbacks. VeraDial confirms tomorrow\u2019s jobs, reschedules a conflict, and texts you a summary \u2014 all before you climb down.",
  },
  {
    title: "Sales teams",
    description:
      "Your SDR just pulled 50 warm leads from a webinar. Instead of two days of phone tag, VeraDial calls each one, qualifies interest, and books meetings directly on your calendar.",
  },
  {
    title: "Field services",
    description:
      "Six appointments tomorrow across two technicians. VeraDial confirms each one the evening before, catches a cancellation, and fills the gap from your waitlist \u2014 automatically.",
  },
] as const;

export const FEATURES = [
  {
    icon: Bot,
    title: "AI Calling",
    description:
      "Your AI assistant handles calls for you. Describe a goal, set up a caller profile, and get a full transcript and summary when it\u2019s done.",
  },
  {
    icon: AudioLines,
    title: "Voice Privacy",
    description:
      "Real-time voice effects on any call. Three modes: Male, Female, and Privacy \u2014 natural-sounding formant shifting, not novelty filters.",
  },
  {
    icon: UserCheck,
    title: "Caller ID Control",
    description:
      "Choose which number appears when you call. Use a purchased number or verify one you already own.",
  },
  {
    icon: Phone,
    title: "Real Phone Numbers",
    description:
      "Dedicated US & Canadian numbers with full STIR/SHAKEN verification. Search by area code, region, or pattern.",
  },
  {
    icon: MessageSquare,
    title: "Business SMS",
    description:
      "Send and receive texts from your business number with conversation threading and delivery tracking.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description:
      "All calls route through Twilio\u2019s carrier-grade, SOC 2 compliant infrastructure with TLS encryption in transit.",
  },
] as const;

export const CREDIT_PACKS = [
  {
    name: "Starter",
    amount: "100 credits",
    price: "$5.99",
    perUnit: "~$0.06/credit",
    estimate: "~10 AI calls or ~50 standard calls",
    popular: false,
  },
  {
    name: "Popular",
    amount: "300 credits",
    price: "$14.99",
    perUnit: "~$0.05/credit",
    estimate: "~30 AI calls or ~150 standard calls",
    popular: true,
  },
  {
    name: "Best Value",
    amount: "1,000 credits",
    price: "$39.99",
    perUnit: "~$0.04/credit",
    estimate: "~100 AI calls or ~500 standard calls",
    popular: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I run a one-man plumbing operation. VeraDial confirmed 12 appointments last week while I was elbow-deep in a water heater install. Game changer.",
    name: "Mike R.",
    role: "Independent Plumber",
    initials: "MR",
    stars: 5,
  },
  {
    quote:
      "Our no-show rate dropped from 18% to 3% once we started using AI confirmation calls. The ROI was immediate.",
    name: "Sarah P.",
    role: "Dental Office Manager",
    initials: "SP",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about AI making sales calls, but the transcripts are impressive. It handles objections better than some of my junior reps.",
    name: "David L.",
    role: "Sales Director, SaaS",
    initials: "DL",
    stars: 4,
  },
] as const;

export const FAQ_PREVIEW = [
  {
    question: "What happens if the AI call goes wrong?",
    answer:
      "If the AI can\u2019t complete its goal, it gracefully ends the call and flags it for you in the app. You\u2019ll see the full transcript and can follow up manually.",
  },
  {
    question: "Does the other person know it\u2019s AI?",
    answer:
      "Yes. VeraDial identifies itself as an AI assistant at the start of every call. Transparency is built into the product.",
  },
  {
    question: "Can I listen to the calls?",
    answer:
      "Yes. You can record calls with one tap and play them back anytime. Every call also generates a full transcript and summary.",
  },
  {
    question: "What if I run out of credits mid-call?",
    answer:
      "The call will complete \u2014 we never cut off an active conversation. Your balance may go slightly negative, which is deducted from your next credit purchase.",
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Screenshots", href: "/screenshots" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Access", href: "/#download" },
  ],
  compare: [
    { label: "vs Google Voice", href: "/compare/google-voice" },
    { label: "vs OpenPhone", href: "/compare/openphone" },
    { label: "vs Grasshopper", href: "/compare/grasshopper" },
    { label: "vs RingCentral", href: "/compare/ringcentral" },
    { label: "vs Dialpad", href: "/compare/dialpad" },
    { label: "All Comparisons", href: "/compare" },
    { label: "Alternatives", href: "/alternatives" },
  ],
  useCases: [
    { label: "Contractors", href: "/use-cases/contractors" },
    { label: "Real Estate", href: "/use-cases/realtors" },
    { label: "Freelancers", href: "/use-cases/freelancers" },
    { label: "Sales Teams", href: "/use-cases/sales" },
    { label: "Property Managers", href: "/use-cases/property-managers" },
    { label: "Recruiters", href: "/use-cases/recruiters" },
  ],
  numbers: [
    { label: "All Numbers", href: "/numbers" },
    { label: "(212) New York", href: "/numbers/212" },
    { label: "(415) San Francisco", href: "/numbers/415" },
    { label: "(312) Chicago", href: "/numbers/312" },
    { label: "(416) Toronto", href: "/numbers/416" },
    { label: "(305) Miami", href: "/numbers/305" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Delete Account", href: "/delete-account" },
  ],
  contact: [{ label: "support@veradial.com", href: "mailto:support@veradial.com" }],
} as const;
