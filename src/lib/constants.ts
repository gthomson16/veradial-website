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
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Access", href: "#download" },
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
      "Your AI books appointments while you\u2019re on the job. Show up as a trusted business number, not an unknown caller.",
  },
  {
    title: "Sales teams",
    description:
      "Let AI handle initial outreach and follow-ups. Every call carries your verified business identity.",
  },
  {
    title: "Field services",
    description:
      "AI confirms appointments and dispatches updates. Technicians and office staff share one trusted number.",
  },
] as const;

export const FEATURES = [
  {
    icon: Bot,
    title: "AI Calling",
    description:
      "Your AI assistant handles calls for you. Schedule appointments, confirm bookings, and follow up with clients \u2014 without picking up the phone.",
  },
  {
    icon: AudioLines,
    title: "Voice Effects",
    description:
      "Built-in voice effects for privacy. Four modes: Deep, High, Robot, and Normal.",
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
      "Purchase dedicated US & Canadian numbers. Purchased numbers carry full STIR/SHAKEN A-level attestation.",
  },
  {
    icon: MessageSquare,
    title: "Business SMS",
    description:
      "Send and receive texts from your purchased number. Available on US numbers and Canadian toll-free numbers.",
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
    popular: false,
  },
  {
    name: "Popular",
    amount: "200 credits",
    price: "$24.99",
    perUnit: "~$0.12/credit",
    popular: true,
  },
  {
    name: "Best Value",
    amount: "500 credits",
    price: "$49.99",
    perUnit: "~$0.10/credit",
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
  "Your first number is included with the account.",
  "Additional number swaps cost $2.50 each.",
  "All purchases are handled through iOS in-app purchases.",
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Access", href: "#download" },
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
