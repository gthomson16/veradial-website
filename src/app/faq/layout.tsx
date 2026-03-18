import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — VeraDial",
  description:
    "Frequently asked questions about VeraDial's AI calling, phone numbers, voice effects, pricing, and privacy.",
  keywords: [
    "VeraDial FAQ",
    "AI calling questions",
    "AI phone assistant FAQ",
    "business calling FAQ",
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
