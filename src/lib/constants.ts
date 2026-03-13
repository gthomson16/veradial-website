import {
  Phone,
  UserCheck,
  AudioLines,
  MessageSquare,
  ShieldCheck,
  Lock,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
] as const;

export const FEATURES = [
  {
    icon: Phone,
    title: "Real Phone Numbers",
    description:
      "Purchase dedicated US & Canadian numbers. Purchased numbers carry full STIR/SHAKEN A-level attestation.",
  },
  {
    icon: UserCheck,
    title: "Caller ID Control",
    description:
      "Choose which number appears when you call. Use your purchased number or a verified number you own.",
  },
  {
    icon: AudioLines,
    title: "Voice Effects",
    description:
      "Built-in voice effects for privacy. Four modes: Deep, High, Robot, and Normal.",
  },
  {
    icon: MessageSquare,
    title: "Business SMS",
    description:
      "Send and receive texts from your purchased number. Available on US numbers and Canadian toll-free numbers.",
  },
  {
    icon: ShieldCheck,
    title: "Number Verification",
    description:
      "Verify a number you already own to use as caller ID. Verified numbers carry B-level attestation (voice only).",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description:
      "All calls route through Twilio\u2019s carrier-grade, SOC 2 compliant infrastructure with TLS encryption in transit.",
  },
] as const;

export const CALL_MINUTES = [
  {
    name: "Starter",
    amount: "60 min",
    price: "$9.99",
    perUnit: "~$0.17/min",
    popular: false,
  },
  {
    name: "Popular",
    amount: "200 min",
    price: "$24.99",
    perUnit: "~$0.12/min",
    popular: true,
  },
  {
    name: "Best Value",
    amount: "500 min",
    price: "$49.99",
    perUnit: "~$0.10/min",
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

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download", href: "#download" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  contact: [{ label: "support@veradial.com", href: "mailto:support@veradial.com" }],
} as const;
