"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_SECTIONS: { title: string; items: FAQItem[] }[] = [
  {
    title: "AI Calling",
    items: [
      {
        question: "How does AI calling work?",
        answer:
          "You enter the number you want to call, pick an AI preset (like Scheduler or Reminder), and optionally write a custom goal — for example, \"Confirm my Friday 2:30 PM appointment and ask about parking.\" The AI calls the number, has the conversation, and sends you a full transcript and summary when it's done.",
      },
      {
        question: "Can people tell they're talking to an AI?",
        answer:
          "The AI uses a natural-sounding voice and handles real conversation flow — pauses, follow-up questions, clarifications. Most recipients engage with it the same way they would with a human caller. The AI identifies itself as calling on your behalf.",
      },
      {
        question: "What happens if the AI gets confused during a call?",
        answer:
          "The AI stays focused on the goal you set. If the conversation goes off-track or the recipient asks something outside the scope, the AI will politely redirect or wrap up the call. You get the full transcript so you can follow up manually if needed.",
      },
      {
        question: "What AI presets are available?",
        answer:
          "VeraDial includes presets like Assistant (general-purpose), Scheduler (book and confirm appointments), and Reminder (deliver a message). You can also write a fully custom prompt to handle any scenario.",
      },
      {
        question: "Do I get a transcript of every AI call?",
        answer:
          "Yes. Every AI call generates a full transcript and a summary of what happened — whether the appointment was confirmed, what the recipient said, and any follow-up actions needed.",
      },
    ],
  },
  {
    title: "Phone Numbers & Caller ID",
    items: [
      {
        question: "What kind of numbers can I get?",
        answer:
          "You can purchase dedicated US and Canadian phone numbers. These are real numbers assigned to your account — not shared or recycled. Your first number is included with the account.",
      },
      {
        question: "What is STIR/SHAKEN attestation?",
        answer:
          "STIR/SHAKEN is a carrier-level framework that verifies the identity behind a phone call. Purchased VeraDial numbers carry A-level attestation — the highest level — which means carriers display your call as verified rather than flagging it as spam or unknown.",
      },
      {
        question: "Can I use a number I already own as caller ID?",
        answer:
          "Yes. You can verify a number you already own and use it as your outbound caller ID. Verified numbers carry B-level attestation (voice only — no SMS).",
      },
      {
        question: "Can I change my number later?",
        answer:
          "Yes. Number swaps cost $2.50 each. You can switch to a different area code or region whenever you need to.",
      },
    ],
  },
  {
    title: "Voice Effects",
    items: [
      {
        question: "What voice effects are available?",
        answer:
          "VeraDial offers four voice modes: Normal (no effect), Deep, High, and Robot. Effects use FFT-based formant shifting for natural-sounding results — no chipmunk or novelty voices.",
      },
      {
        question: "Do voice effects work on AI calls?",
        answer:
          "Voice effects apply to manual calls where you're speaking. AI calls use the AI's own natural voice.",
      },
    ],
  },
  {
    title: "Pricing & Credits",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "VeraDial uses a credit-based system — no subscriptions or monthly fees. You buy credit packs (starting at 60 credits for $9.99) and use them for calls. Message packs are purchased separately. Your first number is included.",
      },
      {
        question: "How many credits does a call cost?",
        answer:
          "Credit usage depends on call duration. AI calls also include the cost of AI processing. You can see exact credit costs in the app before and after each call.",
      },
      {
        question: "Do credits expire?",
        answer:
          "No. Credits stay in your account until you use them.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "All calls route through Twilio's carrier-grade, SOC 2 compliant infrastructure with TLS encryption in transit. Your call data and transcripts are stored securely and only accessible from your account.",
      },
      {
        question: "Can VeraDial employees listen to my calls?",
        answer:
          "No. Call audio is processed through Twilio's infrastructure and is not accessible to VeraDial staff. AI call transcripts are generated automatically and stored in your account.",
      },
      {
        question: "Does VeraDial share my data with third parties?",
        answer:
          "No. We don't sell or share your personal information with third parties. See our Privacy Policy for full details on data handling.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "What platforms is VeraDial available on?",
        answer:
          "VeraDial is coming soon to iOS and Android. Sign up to be notified when the app launches.",
      },
      {
        question: "Do I need a subscription?",
        answer:
          "No. VeraDial has no monthly fees, no seat fees, and no contracts. You buy credits when you need them.",
      },
      {
        question: "Can I use VeraDial for personal calls?",
        answer:
          "VeraDial is built for business use — solo operators, sales teams, and field services. But there's nothing stopping you from using it for any legitimate calling purpose.",
      },
    ],
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 60}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
        >
          <span className="font-display text-base text-text-primary sm:text-lg">
            {item.question}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-text-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`grid transition-all duration-200 ease-out ${
            open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Support
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Frequently asked questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Everything you need to know about AI calling, phone numbers,
            pricing, and privacy.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          {FAQ_SECTIONS.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={sectionIndex > 0 ? "mt-16" : ""}
            >
              <ScrollReveal>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                  {section.title}
                </p>
              </ScrollReveal>
              <div className="mt-6">
                {section.items.map((item, index) => (
                  <FAQAccordion key={item.question} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Still Have Questions?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                We&apos;re here to help.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Reach out to our support team and we&apos;ll get back to you
                within 24 hours.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="mailto:support@veradial.com">
                  Email Support
                </Button>
              </div>
              <StoreBadges className="mt-6 justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
