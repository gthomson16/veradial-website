import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FAQContent, type FAQSection } from "@/components/faq/FAQContent";

export const metadata = buildPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about VeraDial — AI calling, phone numbers, pricing, privacy, and getting started.",
  path: "/faq",
  keywords: [
    "VeraDial FAQ",
    "AI calling questions",
    "AI phone assistant help",
    "business calling FAQ",
    "VeraDial pricing",
    "STIR SHAKEN FAQ",
  ],
});

const FAQ_SECTIONS: FAQSection[] = [
  {
    title: "About VeraDial",
    items: [
      {
        question: "What is VeraDial?",
        answer:
          "VeraDial is an AI-powered business calling app that gives freelancers, contractors, and small business owners a dedicated phone number with an AI assistant that can make calls on their behalf. You get a real US or Canadian number with STIR/SHAKEN A-level attestation — the highest level of caller identity verification — so your calls show up as verified, not spam. The AI can schedule appointments, confirm bookings, send reminders, and follow up with clients autonomously. You set a goal like \"Confirm my Friday 2:30 PM appointment and ask about parking,\" and the AI handles the conversation and sends you a full transcript and summary when it's done. VeraDial also includes business SMS, call recording with automatic transcription, and voicemail transcription. It's available now on Android via Google Play, with iOS on the App Store coming soon.",
      },
    ],
  },
  {
    title: "AI Calling",
    items: [
      {
        question: "How does AI calling work?",
        answer:
          "You enter the number you want to call, pick an AI preset (like Scheduler or Reminder), and optionally write a custom goal — for example, \"Confirm my Friday 2:30 PM appointment and ask about parking.\" The AI calls the number, has the conversation, and sends you a full transcript and summary when it's done. The transcript includes everything that was said, and the summary highlights key outcomes — whether the appointment was confirmed, what the recipient agreed to, and any follow-up actions needed. You can also set up a persistent caller profile with your business name, website, and context so the AI can answer questions about your business naturally during the call.",
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
          "You can get dedicated US and Canadian phone numbers — local or toll-free. These are real numbers assigned to your account, not shared or recycled. Your $9.99/mo subscription includes one active number and 100 credits every month. Need more lines? Add up to 4 extra numbers with an add-on subscription.",
      },
      {
        question: "What is STIR/SHAKEN attestation?",
        answer:
          "STIR/SHAKEN is a carrier-level framework that verifies the identity behind a phone call. There are three attestation levels: A (full), B (partial), and C (gateway). Purchased VeraDial numbers carry A-level attestation — the highest level — which means the carrier has verified both the caller's identity and their authorization to use that number. In practice, this means your calls display as verified on the recipient's phone rather than being flagged as spam, unknown, or \"Scam Likely.\" This matters because industry studies consistently put answer rates for calls displayed as \"Unknown\" or \"Scam Likely\" in the 11–25% range, versus 50%+ for verified business calls. If you bring your own number, it receives B-level attestation for outbound voice calls.",
      },
      {
        question: "Can I use a number I already own as caller ID?",
        answer:
          "Yes. You can verify a number you already own and use it as your outbound caller ID. Verified numbers carry B-level attestation (voice only — no SMS).",
      },
      {
        question: "Can I change my number later?",
        answer:
          "Yes. Number swaps cost $4.99 each. You can switch to a different area code or region whenever you need to.",
      },
    ],
  },
  {
    title: "Pricing & Credits",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "VeraDial costs $9.99 per month per business line. Each subscription includes a dedicated US or Canadian phone number, 100 credits each month, AI calling, call recording, business SMS, voicemail with transcription, and call forwarding. Need more credits? Buy credit packs anytime: 100 credits for $5.99, 300 for $14.99, or 1,000 for $39.99. Credits never expire. Your first subscription includes a 3-day free trial with 50 bonus credits so you can test everything before you pay.",
      },
      {
        question: "How many credits does a call cost?",
        answer:
          "Credit costs depend on the call type. Standard calls cost 2 credits per minute. Recorded calls cost 3 credits per minute. AI calls cost 5 credits per minute. SMS costs 1 credit per segment (160 characters). The app shows the exact credit cost before and after every call.",
      },
      {
        question: "Do credits expire?",
        answer: "No. Credits stay in your account until you use them.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes. Your first subscription includes a free trial with bonus credits so you can try everything — AI calling, SMS, call recording, and more. Once the trial converts, you get credits included every month with your subscription.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "All calls route through Twilio's carrier-grade, SOC 2 Type II compliant infrastructure with TLS encryption in transit. Call audio is processed through Twilio's systems and is not accessible to VeraDial staff. Your call data, recordings, and transcripts are stored securely and only accessible from your authenticated account. VeraDial does not sell or share your personal information with third parties. AI call transcripts are generated automatically and stored in your account — they are not used to train AI models.",
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
          "VeraDial is available now on Android via Google Play. An iOS version is coming soon. Download the app from the Google Play Store to get started with a free trial and bonus credits.",
      },
      {
        question: "Do I need a subscription?",
        answer:
          "Yes. A $9.99/month subscription per business line is required to hold a phone number. It includes 100 credits every month, inbound calls, voicemail transcription, call forwarding, and SMS. Your first subscription comes with a 3-day free trial and 50 bonus credits.",
      },
      {
        question: "Can I use VeraDial for personal calls?",
        answer:
          "VeraDial is built for business use — solo operators, sales teams, and field services. But there's nothing stopping you from using it for any legitimate calling purpose.",
      },
    ],
  },
];

function FAQJsonLd() {
  const faqItems = FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="hero"
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
          <FAQContent sections={FAQ_SECTIONS} />
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
