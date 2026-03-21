import {
  Bot,
  CheckCircle2,
  Headphones,
  Phone,
  UserCheck,
  AudioLines,
  MessageSquare,
  ShieldCheck,
  Lock,
  Shield,
  Smartphone,
} from "lucide-react";

export const APP_PRIMARY_URL =
  "mailto:support@veradial.com?subject=VeraDial%20iOS%20Access";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
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
    title: "Voice Changer",
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

export const CALL_CREDITS = [
  {
    name: "Starter",
    amount: "60 credits",
    price: "$9.99",
    perUnit: "~$0.17/credit",
    estimate: "~20 AI calls or ~60 standard calls",
    popular: false,
  },
  {
    name: "Popular",
    amount: "200 credits",
    price: "$24.99",
    perUnit: "~$0.12/credit",
    estimate: "~66 AI calls or ~200 standard calls",
    popular: true,
  },
  {
    name: "Best Value",
    amount: "500 credits",
    price: "$49.99",
    perUnit: "~$0.10/credit",
    estimate: "~166 AI calls or ~500 standard calls",
    popular: false,
  },
] as const;

export const MESSAGE_PACKS = [
  {
    name: "Starter",
    amount: "50 msg",
    price: "$9.99",
    perUnit: "~$0.20/msg",
    popular: false,
  },
  {
    name: "Popular",
    amount: "200 msg",
    price: "$24.99",
    perUnit: "~$0.12/msg",
    popular: true,
  },
  {
    name: "Best Value",
    amount: "500 msg",
    price: "$49.99",
    perUnit: "~$0.10/msg",
    popular: false,
  },
] as const;

export const PRICING_FACTS = [
  "3-day free trial on your first subscription.",
  "Number swaps cost $2.50 each.",
  "All purchases handled through in-app purchase.",
] as const;

export const PER_USE_COSTS = [
  { action: "Standard call", cost: "1 credit/min" },
  { action: "Voice-changed call", cost: "2 credits/min" },
  { action: "AI call", cost: "3 credits/min" },
  { action: "SMS message", cost: "1 message credit/segment" },
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
    { label: "FAQ", href: "/faq" },
    { label: "Access", href: "/#download" },
  ],
  compare: [
    { label: "vs SpoofCard", href: "/compare/spoofcard" },
    { label: "vs Hushed", href: "/compare/hushed" },
    { label: "vs Burner", href: "/compare/burner" },
    { label: "vs Google Voice", href: "/compare/google-voice" },
    { label: "vs Sideline", href: "/compare/sideline" },
    { label: "vs TextNow", href: "/compare/textnow" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  contact: [{ label: "support@veradial.com", href: "mailto:support@veradial.com" }],
} as const;
