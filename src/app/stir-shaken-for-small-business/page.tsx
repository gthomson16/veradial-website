import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gavel,
  Info,
  PhoneCall,
  PhoneOff,
  Radio,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
} from "@/lib/metadata-helpers";
import { GOOGLE_PLAY_URL } from "@/lib/constants";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { StoreButton } from "@/components/ui/StoreButton";

const PAGE_TITLE =
  "Why Your Business Number Shows as Spam Likely — STIR/SHAKEN Guide";
const PAGE_DESCRIPTION =
  "Why business numbers get labeled Spam Likely, how STIR/SHAKEN A/B/C attestation works, and how small businesses can get verified outbound calling.";

const PUBLISHED_AT = "2026-04-30";
const UPDATED_AT = "2026-04-30";
const AUTHOR = {
  name: "Graham Thomson",
  url: "https://veradial.com/about#founder",
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/stir-shaken-for-small-business",
  keywords: [
    "STIR/SHAKEN for small business",
    "STIR SHAKEN explained",
    "why are my calls flagged as spam",
    "calls showing Scam Likely",
    "A-level attestation",
    "B-level attestation",
    "STIR SHAKEN attestation levels",
    "TRACED Act small business",
    "business caller ID verification",
    "verified caller ID small business",
    "fix Scam Likely label",
    "STIR SHAKEN for VoIP",
  ],
});

const ATTESTATION_LEVELS = [
  {
    level: "A",
    label: "Full attestation",
    who: "Originating carrier has verified both the caller's identity and their right to use the number.",
    display:
      "Call shows as verified on recipient's phone. Highest chance of being answered.",
    example:
      "A VeraDial number you purchase directly: VeraDial (via Twilio) attests to your identity and your authorization to use the number.",
    tone: "positive",
  },
  {
    level: "B",
    label: "Partial attestation",
    who: "Carrier has verified the caller's identity but not their authorization to use the specific number being displayed.",
    display:
      "Call is signed, but the recipient's carrier may still apply mild filtering. Better than unverified, not as trusted as A.",
    example:
      "A number you already own that you've verified with VeraDial as a secondary caller ID — voice only.",
    tone: "neutral",
  },
  {
    level: "C",
    label: "Gateway attestation",
    who: "Carrier passed the call through but can't verify identity or authorization (typically international or older infrastructure).",
    display:
      'Carriers and phone OS\'s may flag the call as "Scam Likely," "Spam Risk," or simply "Unknown."',
    example:
      "A generic VoIP service that routes through a gateway without signing, or international calls that enter through a legacy provider.",
    tone: "negative",
  },
] as const;

const BUSINESS_IMPACTS = [
  {
    icon: PhoneOff,
    title: "Answer rates collapse when calls look suspicious",
    description:
      'Industry research consistently shows answer rates of 11–25% for calls displayed as "Unknown" or "Scam Likely," vs. 50%+ for verified business calls. If you\'re an owner-operator trying to reach new customers, this is the difference between a full week of appointments and a week of voicemails.',
  },
  {
    icon: ShieldAlert,
    title: "Your brand gets tied to a spam label",
    description:
      "When a prospect sees your number show up as \"Spam Risk,\" that association sticks even after they find out it's a legitimate business. Your callback gets ignored. Your follow-up gets declined. You're fighting against your own number.",
  },
  {
    icon: Gavel,
    title: "Compliance with the TRACED Act",
    description:
      "The TRACED Act (2019) required US voice providers to implement STIR/SHAKEN by June 2021. Carriers now actively filter unsigned or weakly-signed traffic. If your phone provider isn't set up for A-level attestation, you're downstream of that filtering \u2014 and there's nothing you can do about it from your end.",
  },
  {
    icon: Radio,
    title: "Texts and voicemail don't fix the trust gap",
    description:
      "You can't follow up with a text from a number the recipient doesn't trust. You can't leave a voicemail that gets listened to if the phone rang as \"Scam Likely.\" Verified outbound voice is the foundation \u2014 every other channel from that number inherits the trust (or lack of it).",
  },
] as const;

const CHECK_METHODS = [
  {
    step: "1",
    title: "Call a colleague on a different carrier",
    description:
      'Dial someone you know on a different carrier from yours. Ask what the display shows: your business name, "Unknown," "Scam Likely," or a clean phone number with no label. If it\'s anything other than a clean name-and-number display, your calls aren\'t being trusted.',
  },
  {
    step: "2",
    title: "Use a carrier-branded lookup",
    description:
      "Install your carrier's spam-filtering app (AT&T ActiveArmor, Verizon Call Filter, T-Mobile Scam Shield). Many will report the attestation level of incoming calls in-app. Call yourself from the number in question and check the result.",
  },
  {
    step: "3",
    title: "Check with your provider directly",
    description:
      "Ask your current phone provider (cell carrier, VoIP service, or app) what attestation level they sign your outbound calls at. An honest answer should be A, B, or C — or \"we don't sign calls at all,\" which is the worst-case. Anyone who can't answer probably isn't doing it.",
  },
] as const;

const COMMON_GAPS = [
  {
    icon: PhoneOff,
    title: "Free or ad-supported apps",
    examples: "TextNow, Hushed, Burner, most free-tier services",
    reason:
      "These run on pooled/recycled VoIP infrastructure with no carrier-level customer authorization. Even if they sign something, it's typically C-level or not signed at all.",
  },
  {
    icon: Info,
    title: "Second-line apps that don't market attestation",
    examples: "Sideline, Line2, many budget VoIP apps",
    reason:
      "If a provider doesn't explicitly mention STIR/SHAKEN A-level attestation in their documentation, they probably don't offer it. Modern providers who do offer it actively promote it because it's a meaningful differentiator.",
  },
  {
    icon: ShieldAlert,
    title: "Caller ID spoofing tools",
    examples: "SpoofCard and similar",
    reason:
      "These services are the opposite of STIR/SHAKEN — they try to display a number that isn't yours. Carriers increasingly block these outright, which is the point of the system.",
  },
  {
    icon: Radio,
    title: "Unmanaged BYOD setups",
    examples: "A personal cell used for business without verification",
    reason:
      "Your cell number is signed by your carrier, but if you're using it for business calls that don't match your carrier profile (lots of outbound, unfamiliar contacts), your own carrier's reputation scoring may degrade over time.",
  },
] as const;

const OFFICIAL_SOURCES = [
  {
    label: "FCC call authentication",
    href: "https://www.fcc.gov/call-authentication",
    description:
      "US regulator overview of caller ID authentication and STIR/SHAKEN.",
  },
  {
    label: "FCC TRACED Act implementation",
    href: "https://www.fcc.gov/TRACEDAct",
    description:
      "FCC implementation materials for the TRACED Act and robocall mitigation.",
  },
  {
    label: "CRTC caller ID spoofing",
    href: "https://crtc.gc.ca/eng/phone/telemarketing/identit.htm",
    description:
      "Canadian regulator explanation of caller ID spoofing, traceback, and STIR/SHAKEN authentication.",
  },
  {
    label: "Twilio STIR/SHAKEN trust authentication",
    href: "https://www.twilio.com/en-us/trust/shaken-stir",
    description:
      "Twilio reference for trusted calling and STIR/SHAKEN signing.",
  },
] as const;

const FAQ = [
  {
    question: "What is STIR/SHAKEN?",
    answer:
      "STIR/SHAKEN is a framework of technical standards and industry protocols that lets US and Canadian phone carriers cryptographically sign outbound calls with information about who originated them. STIR (Secure Telephone Identity Revisited) defines the signing standard; SHAKEN (Signature-based Handling of Asserted information using toKENs) defines how carriers implement it across their networks. Together they let the receiving carrier know whether an incoming call came from a verified source or not, so filtering and display decisions can be made automatically.",
  },
  {
    question: "Is STIR/SHAKEN mandatory?",
    answer:
      "For US voice providers, yes. The TRACED Act (Telephone Robocall Abuse Criminal Enforcement and Deterrence Act) passed in 2019 and the FCC mandated STIR/SHAKEN implementation for most voice providers by June 30, 2021. Smaller providers got extensions, but those have largely expired. In Canada, the CRTC has implemented similar requirements. For business owners making calls, the system is fully in effect whether you realize it or not — you're already being filtered by it.",
  },
  {
    question: "What are the A, B, and C attestation levels?",
    answer:
      'A (full attestation) means the originating carrier verified both the caller\'s identity and their authorization to use the specific phone number. B (partial attestation) means the carrier verified the caller but not their authorization for that exact number. C (gateway attestation) means the call was passed through without identity verification — typically international calls or traffic routed from legacy networks. Carriers and mobile OSs treat A-level as verified, B-level as mostly trusted, and C-level as suspicious (often leading to "Scam Likely" labels).',
  },
  {
    question: "Does STIR/SHAKEN stop robocalls?",
    answer:
      "Not directly — STIR/SHAKEN doesn't block calls. What it does is make spoofing harder and give receiving carriers reliable signals to apply their own blocking and labeling decisions. Most consumer call-blocking features on iOS and Android, plus carrier-level spam filters, rely on STIR/SHAKEN signatures to decide whether to let a call through cleanly, label it as suspicious, or filter it entirely. Legitimate robocalls (like your pharmacy's refill reminders) signed at A-level will still reach you; unverified spoofed calls won't.",
  },
  {
    question: "Can I get STIR/SHAKEN attestation on my existing number?",
    answer:
      'It depends on your provider. Your regular mobile carrier (Verizon, AT&T, T-Mobile, Rogers, Bell, Telus) will sign your outbound calls automatically at A-level because they provisioned your number. If you use a VoIP or business phone service that lets you "bring your own number," most will only sign those calls at B-level at best — because they can verify you as a customer but can\'t verify your authorization for a number issued by a different provider. VeraDial offers B-level attestation on verified existing numbers for voice only.',
  },
  {
    question:
      'Why do my calls still show as "Scam Likely" even if my provider supports STIR/SHAKEN?',
    answer:
      "STIR/SHAKEN is a strong signal but not the only one carriers use. Reputation scoring based on call volume, contact diversity, spam complaints, and behavioral patterns also feeds into labeling decisions. A new business number calling many unfamiliar contacts can get temporarily flagged even with A-level attestation. If you're seeing persistent \"Scam Likely\" labels, check (a) your attestation level, (b) your number's age and history, (c) whether a prior owner had reputation issues, and (d) whether you can register your business with carrier reputation portals like Free Caller Registry.",
  },
  {
    question: "Does STIR/SHAKEN cost extra?",
    answer:
      "For most carriers and modern business phone services, STIR/SHAKEN signing is included in the base service — it's required by regulation so providers don't charge extra for it. What does vary is whether a provider offers A-level (versus B or C). VeraDial's $9.99/mo subscription includes A-level attestation on every purchased number at no extra cost.",
  },
  {
    question: "What attestation level do VeraDial numbers use?",
    answer:
      "Numbers purchased through VeraDial carry STIR/SHAKEN A-level attestation. The underlying infrastructure (Twilio) is registered as the authoritative voice provider, VeraDial verifies your customer identity, and we attest to your authorization to use the number because we provisioned it to you. If you bring an existing number and verify it as a secondary outbound caller ID, that receives B-level attestation on voice calls only (SMS is not supported on verified numbers).",
  },
  {
    question: "Does STIR/SHAKEN work on text messages?",
    answer:
      "No — STIR/SHAKEN is a voice-call framework. Text messages have a separate set of anti-spoofing and reputation controls handled by the major carriers and the Campaign Registry. If your SMS from a business number is getting filtered or blocked, the issue is different: typically it's about A2P (application-to-person) registration, message content, and throughput patterns rather than cryptographic signing.",
  },
] as const;

function StirShakenPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://veradial.com/stir-shaken-for-small-business#article",
    headline: PAGE_TITLE,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://veradial.com/stir-shaken-for-small-business",
    datePublished: PUBLISHED_AT,
    dateModified: UPDATED_AT,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: AUTHOR.url,
    },
    publisher: { "@id": "https://veradial.com/#organization" },
    image: "https://veradial.com/opengraph-image",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://veradial.com/stir-shaken-for-small-business#webpage",
    },
    about: { "@id": "https://veradial.com/#app" },
    citation: OFFICIAL_SOURCES.map((source) => source.href),
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function StirShakenFAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function StirShakenForSmallBusinessPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    {
      name: "STIR/SHAKEN for Small Business",
      path: "/stir-shaken-for-small-business",
    },
  ]);

  return (
    <>
      <StirShakenPageJsonLd />
      <StirShakenFAQJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-12 text-center sm:pb-20 sm:pt-16">
          <Breadcrumb
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "STIR/SHAKEN for Small Business" },
            ]}
          />

          <Badge variant="hero">
            <ShieldCheck size={14} className="mr-1.5" />
            Verified Calling, Explained
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Why your business number shows as{" "}
            <span className="text-accent">Spam Likely</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Your outbound calls keep getting flagged as &ldquo;Scam
            Likely&rdquo; or going straight to voicemail. STIR/SHAKEN is the
            reason — and the fix. A plain-English guide to how verified caller
            ID works, what the A/B/C attestation levels mean, and how to make
            sure your small business calls actually get answered.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-text-muted">
            By {AUTHOR.name} · Updated {formatDisplayDate(UPDATED_AT)}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="ghost"
              href="/help/why-business-number-marked-spam"
            >
              Practical fix checklist
            </Button>
            <Button variant="ghost" href="#attestation-levels">
              Jump to attestation levels
            </Button>
            <Button variant="ghost" href="#faq">
              Jump to FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Visual: the two phone displays */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                The core problem
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Two calls. One gets answered.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                Here&apos;s what the same outbound business call looks like on
                the recipient&apos;s phone, depending on whether your provider
                signs the call with STIR/SHAKEN A-level attestation.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {/* Unverified call */}
            <ScrollReveal>
              <Card hover={false} className="h-full overflow-hidden p-0">
                <div className="border-b border-border bg-[linear-gradient(180deg,rgba(255,80,80,0.08),transparent_70%)] px-6 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-text-muted">
                    Without STIR/SHAKEN signing
                  </p>
                </div>
                <div className="p-8">
                  <div className="rounded-3xl border border-border bg-bg/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-text-muted">
                      Incoming call
                    </p>
                    <p className="mt-4 text-center font-display text-2xl font-bold text-[#ff7171]">
                      Scam Likely
                    </p>
                    <p className="mt-1 text-center text-sm text-text-muted">
                      (512) 555-0194
                    </p>
                    <div className="mt-5 flex justify-center gap-6 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                      <span>Decline</span>
                      <span>Voicemail</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7171]" />
                      Recipient sees a warning label, not your business name
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7171]" />
                      Answer rates drop to 11–25% in most industry studies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff7171]" />
                      Voicemails get ignored by default
                    </li>
                  </ul>
                </div>
              </Card>
            </ScrollReveal>

            {/* Verified call */}
            <ScrollReveal delay={80}>
              <Card
                glow
                hover={false}
                className="h-full overflow-hidden p-0 bg-[linear-gradient(180deg,rgba(115,242,195,0.08),rgba(255,255,255,0.02))]"
              >
                <div className="border-b border-border bg-[linear-gradient(180deg,rgba(115,242,195,0.08),transparent_70%)] px-6 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                    With STIR/SHAKEN A-level
                  </p>
                </div>
                <div className="p-8">
                  <div className="rounded-3xl border border-accent/25 bg-bg/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-text-muted">
                      Incoming call
                    </p>
                    <p className="mt-4 flex items-center justify-center gap-1.5 text-center font-display text-2xl font-bold text-text-primary">
                      <ShieldCheck size={20} className="shrink-0 text-accent" />
                      Austin Plumbing Co.
                    </p>
                    <p className="mt-1 text-center text-sm text-text-secondary">
                      (512) 555-0194
                    </p>
                    <div className="mt-5 flex justify-center gap-6 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                      <span>Decline</span>
                      <span className="text-accent">Accept</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="mt-1 shrink-0 text-accent"
                      />
                      Recipient sees a verified business call
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="mt-1 shrink-0 text-accent"
                      />
                      Answer rates climb back toward 50%+
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="mt-1 shrink-0 text-accent"
                      />
                      Voicemails are trusted, follow-ups get returned
                    </li>
                  </ul>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What STIR/SHAKEN actually is */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Definition
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              What STIR/SHAKEN actually is
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              <p>
                STIR/SHAKEN is a set of technical standards and industry
                protocols that lets phone carriers cryptographically sign
                outbound calls with information about who originated them. The
                receiving carrier can then verify that signature and decide how
                to display — or filter — the call on the recipient&apos;s phone.
              </p>
              <p>
                <strong className="text-text-primary">STIR</strong> stands for
                <em> Secure Telephone Identity Revisited</em> — the IETF
                standard that defines how calls get cryptographically signed.{" "}
                <strong className="text-text-primary">SHAKEN</strong> stands for{" "}
                <em>
                  Signature-based Handling of Asserted information using toKENs
                </em>{" "}
                — the ATIS industry framework that specifies how North American
                carriers implement STIR on their networks.
              </p>
              <p>
                In the US, the{" "}
                <strong className="text-text-primary">TRACED Act</strong>{" "}
                (Telephone Robocall Abuse Criminal Enforcement and Deterrence
                Act of 2019) gave the FCC authority to require STIR/SHAKEN
                across most voice providers. The compliance deadline for larger
                providers was{" "}
                <strong className="text-text-primary">June 30, 2021</strong>.
                Canada&apos;s CRTC has a parallel framework with the same goal.
              </p>
              <p>
                In practice: every time you make an outbound call in the US or
                Canada today, your carrier either signs it with an attestation
                level (A, B, or C) or doesn&apos;t sign it at all. The
                recipient&apos;s carrier then makes filtering and display
                decisions based on that signal — plus reputation scoring,
                complaint history, and other behavioral factors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Attestation levels */}
      <section
        id="attestation-levels"
        className="relative scroll-mt-20 py-20 sm:py-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                The A/B/C system
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                The three attestation levels
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                Not all signed calls are equal. Here&apos;s what each level
                actually means, who gets each, and how recipients&apos; phones
                treat them.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ATTESTATION_LEVELS.map((level, index) => {
              const toneClasses =
                level.tone === "positive"
                  ? "border-accent/30 bg-[linear-gradient(180deg,rgba(115,242,195,0.08),rgba(255,255,255,0.02))]"
                  : level.tone === "neutral"
                    ? "border-[var(--color-accent-secondary)]/25 bg-[linear-gradient(180deg,rgba(255,191,105,0.06),rgba(255,255,255,0.01))]"
                    : "border-[#ff7171]/20 bg-[linear-gradient(180deg,rgba(255,113,113,0.06),rgba(255,255,255,0.01))]";
              const badgeClasses =
                level.tone === "positive"
                  ? "text-accent border-accent/30 bg-accent/10"
                  : level.tone === "neutral"
                    ? "text-[var(--color-accent-secondary)] border-[var(--color-accent-secondary)]/30 bg-[var(--color-accent-secondary)]/10"
                    : "text-[#ff7171] border-[#ff7171]/30 bg-[#ff7171]/10";

              return (
                <ScrollReveal key={level.level} delay={index * 80}>
                  <Card
                    hover={false}
                    className={`h-full border p-7 ${toneClasses}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border font-display text-2xl font-bold ${badgeClasses}`}
                      >
                        {level.level}
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
                          Level {level.level}
                        </p>
                        <p className="font-display text-lg font-semibold text-text-primary">
                          {level.label}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4 text-sm leading-relaxed">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                          What it means
                        </p>
                        <p className="mt-1.5 text-text-secondary">
                          {level.who}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                          How it displays
                        </p>
                        <p className="mt-1.5 text-text-secondary">
                          {level.display}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                          Typical example
                        </p>
                        <p className="mt-1.5 text-text-secondary">
                          {level.example}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business impact */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Why small businesses care
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                What STIR/SHAKEN means for your business
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                For a solo operator or a small team, attestation level is one of
                the highest-leverage things you can influence about your
                outbound calling. It determines whether your calls feel like
                business-as-usual or feel like spam.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {BUSINESS_IMPACTS.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to check what you have */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Diagnose your setup
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                How to check what level your calls are signed at
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                Three quick ways to figure out whether your current business
                number is getting A, B, or C attestation — or no signing at all.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-5">
            {CHECK_METHODS.map((method, index) => (
              <ScrollReveal key={method.step} delay={index * 70}>
                <Card hover={false} className="p-6 sm:p-7">
                  <div className="flex items-start gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-display text-lg font-bold text-accent">
                      {method.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {method.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where most providers fall short */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Where providers fall short
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Common gaps in small-business phone setups
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                If your outbound calls keep landing in spam despite a paid
                business phone app, one of these is usually why.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {COMMON_GAPS.map((gap, index) => (
              <ScrollReveal key={gap.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-secondary)]/10">
                    <gap.icon
                      size={20}
                      className="text-[var(--color-accent-secondary)]"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {gap.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-text-muted">
                    {gap.examples}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {gap.reason}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How VeraDial approaches it */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Card
              glow
              hover={false}
              className="overflow-hidden bg-[linear-gradient(155deg,rgba(115,242,195,0.1),rgba(255,255,255,0.02))] p-8 sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
                  <Shield size={28} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-accent">
                    How VeraDial handles it
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
                    A-level attestation on every purchased number
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    Numbers purchased through VeraDial are provisioned on
                    Twilio&apos;s carrier-grade, STIR/SHAKEN-compliant voice
                    infrastructure. We verify your customer identity and attest
                    to your authorization for the number, which gives your
                    outbound calls{" "}
                    <strong className="text-text-primary">
                      A-level attestation
                    </strong>
                    . No extra configuration, no per-minute premium — it&apos;s
                    included in the $9.99/mo plan.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                    If you already have an existing number (your cell number, a
                    Google Voice number, a toll-free you own), you can verify it
                    in VeraDial and use it as a secondary outbound caller ID.
                    Verified numbers receive{" "}
                    <strong className="text-text-primary">
                      B-level attestation
                    </strong>{" "}
                    on outbound voice calls. SMS is not supported on verified
                    numbers — that channel requires a VeraDial-provisioned
                    number for carrier compliance reasons.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent/40 hover:bg-accent/15"
                    >
                      <Tag size={14} />
                      See pricing
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/3 px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-white/18 hover:bg-white/5 hover:text-text-primary"
                    >
                      <Info size={14} />
                      Full FAQ
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Official references */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Official references
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Source material behind this guide
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                This page summarizes public regulator and carrier documentation.
                For policy details, implementation requirements, or
                carrier-specific signing behavior, start with the official
                references below.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {OFFICIAL_SOURCES.map((source, index) => (
              <ScrollReveal key={source.href} delay={index * 70}>
                <Card hover={false} className="h-full p-6">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-semibold text-text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {source.label}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {source.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                FAQ
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                STIR/SHAKEN questions, answered
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {FAQ.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 40}>
                <Card hover={false} className="p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.answer}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-sm text-text-muted">
              Looking for product-specific answers?{" "}
              <Link
                href="/faq"
                className="text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                See the full VeraDial FAQ →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Stop losing calls to spam labels
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Get verified outbound calling.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                VeraDial gives you a dedicated business number with A-level
                STIR/SHAKEN attestation on every outbound call — plus AI
                calling, call recording, SMS, and voicemail transcription. All
                for $9.99/mo with a 3-day free trial.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <StoreButton
                  analyticsLocation="stir_shaken_final_cta"
                  href={GOOGLE_PLAY_URL}
                  platform="google_play"
                >
                  <PhoneCall size={16} />
                  Start free trial
                </StoreButton>
                <Button variant="ghost" href="/pricing">
                  <Sparkles size={16} />
                  See pricing
                </Button>
              </div>
              <StoreBadges className="mt-6 justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mx-auto max-w-3xl px-6 pb-12">
        <p className="text-center text-xs leading-relaxed text-text-muted">
          Informational overview of STIR/SHAKEN for small business operators.
          Attestation outcomes on specific calls can vary based on receiving
          carrier, reputation scoring, and other factors outside any single
          provider&apos;s control. Current as of April 2026.
        </p>
      </div>
    </>
  );
}
