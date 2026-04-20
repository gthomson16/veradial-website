import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Clock,
  Globe,
  Headphones,
  Map,
  MessageSquare,
  Mic,
  Phone,
  PhoneOff,
  ShieldCheck,
  Smartphone,
  Sun,
  Sunset,
  UserCheck,
  Users,
} from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildUseCasePageJsonLd,
} from "@/lib/metadata-helpers";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { UseCaseFAQ } from "@/components/use-cases/UseCaseFAQ";
import { REALTOR_FAQS } from "@/lib/use-case-faqs";
import { Badge } from "@/components/ui/Badge";

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

const PAGE_TITLE = "VeraDial for Real Estate Agents";
const PAGE_DESCRIPTION =
  "Business calling for real estate agents. Automate lead follow-up, show verified caller ID, track calls by neighborhood, and keep your personal number private.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/use-cases/realtors",
  keywords: [
    "business phone for realtors",
    "AI calling for real estate",
    "realtor phone app",
    "real estate agent business number",
    "AI follow-up calls real estate",
    "real estate lead management",
    "realtor caller ID",
    "real estate calling app",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PAIN_POINTS = [
  {
    icon: PhoneOff,
    title: "Missed calls during showings mean lost leads",
    description:
      "You are walking a buyer through a kitchen renovation when your phone buzzes. You cannot answer — you are mid-sentence explaining the new quartz countertops. By the time you check voicemail two hours later, that seller lead already called the next agent on the list. In real estate, speed-to-lead is everything. The National Association of Realtors reports that 78% of buyers work with the first agent who responds. Every unanswered call during a showing is a potential commission walking out the door.",
  },
  {
    icon: Clock,
    title: "Evenings lost to manual follow-up",
    description:
      "After a full day of showings, open houses, and inspections, you still have a stack of leads to call back. The inquiry from Zillow at 10 AM, the couple who signed in at the open house, the referral your colleague texted you about during lunch. You spend your evening making call after call — confirming interest, scheduling viewings, and chasing people who do not pick up. It is exhausting, repetitive, and it eats into the personal time you desperately need to recharge for tomorrow.",
  },
  {
    icon: Smartphone,
    title: "No separation between work and personal life",
    description:
      "Your personal cell number is on every yard sign, every listing flyer, and every online profile. That means clients call at 9 PM on a Sunday asking about a listing they drove past. It means your personal contacts are mixed in with hundreds of leads. When you finally take a vacation, the calls still come through to the same phone your family uses to reach you. Without a dedicated business number, there is no off switch — and no way to present a consistent, professional identity across every touchpoint.",
  },
];

const SOLUTION_FEATURES = [
  {
    icon: Phone,
    title: "AI follows up with leads while you are in a showing",
    description:
      "VeraDial's AI calling agent can reach out to new leads on your behalf while your hands are full. Set up a caller profile with your brokerage name, available time slots, and preferred questions — then dispatch the AI to call back every inquiry that came in while you were unavailable. The AI introduces itself, qualifies the lead by asking about their timeline, budget, and neighborhood preference, and books a callback or showing directly. When the call ends, you get a full transcript and summary you can review between appointments. No more losing leads to competitors who just happened to be available five minutes sooner.",
  },
  {
    icon: Map,
    title: "Call Map shows activity by neighborhood and listing area",
    description:
      "Real estate is a geography business. VeraDial's Call Map plots every call you make and receive on an interactive map with clustering by location. At a glance, you can see which neighborhoods you have been most active in, where your leads are concentrated, and which areas need more attention. Use it to plan your day — if you have three calls clustered in the same ZIP code, you can schedule showings back-to-back and cut your drive time in half. Over time, the Call Map becomes a visual record of your territory and a powerful tool for identifying where your marketing dollars are working hardest.",
  },
  {
    icon: Globe,
    title: "Dedicated business number keeps personal life separate",
    description:
      "Choose a dedicated US or Canadian phone number with the area code that matches your farm area. Put it on your business cards, your yard signs, and your MLS profile. When clients call that number, it rings on the same phone you already carry — but it is clearly a business call. When you are off the clock, missed calls go to voicemail with automatic transcription so you can triage in the morning. Your personal number stays personal. Your family, friends, and weekends stay yours.",
  },
  {
    icon: Mic,
    title: "Call recording to review client preferences after showings",
    description:
      "A buyer tells you during a walkthrough that they want at least three bedrooms, a home office, a fenced yard for the dog, and they absolutely will not go above $425,000. Two showings and an inspection later, you are trying to remember — was it three bedrooms or four? Did they say $425K or $450K? With VeraDial's call recording and transcription, every detail is captured. Toggle recording on any call, and review the full transcript afterward. Search for specific preferences, pull up exact quotes, and never lose a detail that could make or break a deal.",
  },
  {
    icon: MessageSquare,
    title: "SMS for quick showing confirmations and updates",
    description:
      "Not every communication needs a phone call. Send a quick text from your business number to confirm a showing time, share a listing address, or let a client know you are running ten minutes late. VeraDial's business SMS keeps all your text conversations threaded and organized alongside your call history, so you have a complete record of every client interaction in one place. Clients see your professional business number — not your personal cell — maintaining the same consistent identity across calls and texts.",
  },
  {
    icon: ShieldCheck,
    title: "Verified caller ID — clients see your name, not \"Spam Likely\"",
    description:
      "Nothing kills a callback rate faster than your number showing up as \"Spam Likely\" or \"Scam Risk\" on a prospect's phone. VeraDial numbers carry STIR/SHAKEN A-level attestation — the highest level of caller identity verification available from US carriers. When you call a lead, their phone displays a verified call indicator instead of a spam warning. For real estate agents who make dozens of outbound calls daily, verified caller ID is not a nice-to-have — it is the difference between a 60% answer rate and a 20% answer rate. Every answered call is another chance to win a listing or close a deal.",
  },
];

const SCENARIO_STEPS = [
  {
    icon: Sun,
    time: "8:30 AM — Before the first showing",
    title: "AI confirms the afternoon schedule",
    description:
      "Sarah is a residential agent in Austin. She has three showings booked for the afternoon and an open house tomorrow. Before she leaves for her morning coffee meeting with a listing client, she dispatches VeraDial's AI to confirm all three afternoon appointments. By the time she finishes her latte, the AI has reached all three buyers: two confirmed, and one needs to reschedule to Thursday. Sarah sees the transcripts on her phone and adjusts her calendar in under a minute. No phone tag. No back-and-forth texts. Just confirmed appointments ready to go.",
  },
  {
    icon: Building2,
    time: "1:15 PM — During a showing",
    title: "Missed call handled automatically",
    description:
      "Sarah is walking a first-time buyer through a three-bedroom in East Austin when her phone vibrates. She cannot answer — she is explaining the recent roof replacement and foundation inspection results. The call goes to voicemail, and VeraDial transcribes the message in real time. Between showings, Sarah glances at her phone and reads the transcription: it is a seller lead from her Zillow profile who wants to list a condo in South Congress. She flags it as high priority and moves on to her next showing, knowing exactly what to say when she calls back in thirty minutes.",
  },
  {
    icon: Users,
    time: "4:00 PM — After showings wrap up",
    title: "AI calls yesterday's open house leads",
    description:
      "Yesterday's open house had fourteen sign-ins. Sarah has been too busy with showings to follow up with any of them. She opens VeraDial, selects the three most promising leads — the ones who asked about the school district and stayed for twenty minutes — and dispatches AI follow-up calls. The AI introduces itself as calling from Sarah's team, asks whether the visitors are still interested, and offers to schedule a private showing or a call with Sarah directly. Within an hour, two of the three book callbacks for tomorrow morning. Sarah never dialed a number.",
  },
  {
    icon: Sunset,
    time: "7:00 PM — Evening review",
    title: "Call Map and transcripts shape tomorrow's plan",
    description:
      "After dinner, Sarah spends ten minutes reviewing her day in VeraDial. The Call Map shows a cluster of activity in East Austin and South Congress — exactly where her listings are concentrated. She reads through the AI call transcripts: the condo seller wants to list at $380K, one open house lead is pre-approved and ready to tour this weekend, and the buyer who rescheduled to Thursday prefers mornings. Sarah plans tomorrow's route — coffee meeting near South Congress, then the two callbacks in East Austin — and sets up AI confirmation calls to go out at 8 AM. Her evening is free. No call list to work through. No voicemail to replay. Just a clear plan and a charged phone.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function RealtorsUseCasePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Real Estate", path: "/use-cases/realtors" },
  ]);
  const pageJsonLd = buildUseCasePageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/use-cases/realtors",
    audienceType: "Real Estate Agents",
    audienceKind: "PeopleAudience",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <nav className="mb-4 text-sm text-text-muted">
            <Link
              href="/"
              className="hover:text-text-secondary transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/use-cases"
              className="hover:text-text-secondary transition-colors"
            >
              Use Cases
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">Real Estate</span>
          </nav>

          <Badge
            variant="hero"
          >
            Real Estate
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Never miss a lead between showings
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Real estate agents juggle showings, open houses, inspections, and
            client calls every single day. A missed call during a walkthrough
            can mean a lost listing or a buyer who moves on to the next agent.
            VeraDial gives you an AI-powered business line that follows up with
            leads while your hands are full, keeps your personal number private,
            and makes sure every outbound call shows a verified caller ID
            instead of a spam warning.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#how-veradial-helps">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Pain Points                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Problem
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Three challenges every agent knows too well
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Real estate is a high-touch, time-sensitive business. The agents
              who close the most deals are not necessarily the best negotiators —
              they are the ones who respond fastest, follow up consistently, and
              never let a lead slip through the cracks. But the nature of the
              job makes that incredibly hard.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PAIN_POINTS.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <item.icon size={20} className="text-[var(--color-accent-secondary)]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
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

      {/* App Screenshot */}
      <section className="relative py-20">
        <div className="mx-auto max-w-xs px-6">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <Image
                src="/screenshots/raw-captures/call-map-updated.png"
                alt="VeraDial Call Map showing calls by neighborhood and listing area"
                width={390}
                height={844}
                sizes="(max-width: 640px) calc(100vw - 3rem), 20rem"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Call Map — see your activity by neighborhood
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  How VeraDial Solves It                                     */}
      {/* ---------------------------------------------------------- */}
      <section id="how-veradial-helps" className="relative py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Solution
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How VeraDial solves it
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial is not a generic second phone number app. It is a
              business calling platform built for professionals who need AI
              automation, verified identity, and call intelligence — the exact
              tools that let real estate agents compete on response time without
              sacrificing their sanity or their personal life.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SOLUTION_FEATURES.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">
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

      {/* ---------------------------------------------------------- */}
      {/*  Example Scenario                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              A Day in the Life
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How Sarah uses VeraDial to close more deals
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Sarah is a residential real estate agent in Austin, Texas. She
              works with buyers and sellers across several neighborhoods, runs
              two to three open houses a month, and handles everything from lead
              generation to closing coordination. Here is how VeraDial fits into
              her day.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {SCENARIO_STEPS.map((step, index) => (
              <ScrollReveal key={step.time} delay={index * 100}>
                <Card hover={false} className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                      <step.icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-secondary)]">
                        {step.time}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Why VeraDial Over Alternatives                             */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Why VeraDial
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Built for agents, not generic users
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              There are dozens of second-number apps and VoIP services on the
              market. Most of them give you a phone number and stop there.
              VeraDial goes further with AI calling, verified identity, and call
              intelligence tools that directly address the challenges real estate
              agents face every day.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              {[
                {
                  label: "AI outbound calling",
                  veradial: true,
                  others: false,
                  detail:
                    "Dispatch an AI agent to follow up with leads, confirm appointments, and qualify prospects — all while you are in a showing.",
                },
                {
                  label: "STIR/SHAKEN A-level attestation",
                  veradial: true,
                  others: false,
                  detail:
                    "Your calls display as verified, not spam. Carrier-level identity verification means higher answer rates.",
                },
                {
                  label: "Call Map with location clustering",
                  veradial: true,
                  others: false,
                  detail:
                    "See every call plotted on an interactive map. Cluster by neighborhood to plan your day and track your territory.",
                },
                {
                  label: "Call recording with transcription",
                  veradial: true,
                  others: false,
                  detail:
                    "Record any call and get a full transcript. Never forget a client preference or lose a negotiation detail.",
                },
                {
                  label: "Voicemail transcription",
                  veradial: true,
                  others: true,
                  detail:
                    "Read voicemails as text between showings instead of listening to two-minute audio messages.",
                },
                {
                  label: "Business SMS",
                  veradial: true,
                  others: true,
                  detail:
                    "Send and receive texts from your business number. Confirm showings, share addresses, and stay in touch.",
                },
              ].map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6 ${
                    index !== 5 ? "border-b border-border" : ""
                  } ${index % 2 === 0 ? "bg-card/40" : "bg-transparent"}`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-text-primary">
                        {row.label}
                      </span>
                      {row.veradial && !row.others && (
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          VeraDial Only
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {row.detail}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          row.veradial
                            ? "bg-accent/15 text-accent"
                            : "bg-white/5 text-text-muted"
                        }`}
                      >
                        {row.veradial ? (
                          <UserCheck size={11} />
                        ) : (
                          <PhoneOff size={11} />
                        )}
                      </span>
                      <span className="text-xs text-text-muted">VeraDial</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          row.others
                            ? "bg-white/8 text-text-secondary"
                            : "bg-white/5 text-text-muted"
                        }`}
                      >
                        {row.others ? (
                          <Headphones size={11} />
                        ) : (
                          <PhoneOff size={11} />
                        )}
                      </span>
                      <span className="text-xs text-text-muted">Others</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Pricing callout                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Card hover={false} className="p-8 text-center sm:p-12">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Simple Pricing
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                $9.99/month for your AI business line
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                Your subscription includes a dedicated business number with
                verified caller ID, voicemail transcription, Call Map, call
                recording, and business SMS. AI calls and outbound minutes use
                prepaid credits starting at $5.99 for 100 credits — roughly ten
                AI follow-up calls or fifty standard calls. Most agents find
                that one converted lead more than covers a year of VeraDial.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/pricing">
                  View Full Pricing
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  FAQ for realtors                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Common Questions
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Questions real estate agents ask
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "Can the AI call leads from my MLS or CRM automatically?",
                a: "VeraDial does not integrate directly with MLS or CRM systems today. You select contacts within the app and dispatch AI calls manually. That said, the process takes about thirty seconds — select a contact, choose a prompt (like \"Follow up on open house visit\"), and tap send. Many agents batch their follow-ups in a few minutes at the end of the day.",
              },
              {
                q: "Will leads know they are talking to an AI?",
                a: "Yes. VeraDial's AI identifies itself at the start of every call. It will say something like \"Hi, I am calling on behalf of Sarah with Austin Realty. I am an AI assistant following up on your visit to the open house on Elm Street.\" Transparency is built into the product and required by our terms of service.",
              },
              {
                q: "Can I choose a number with my local area code?",
                a: "Absolutely. You can search for available numbers by area code, city, or even specific digit patterns. If you work the Austin market, grab a 512 number. If you cover multiple areas, you can purchase additional numbers with different area codes to present a local presence in each market.",
              },
              {
                q: "What happens if a lead calls back my VeraDial number?",
                a: "Inbound calls to your VeraDial number ring on your phone just like a regular call. If you cannot answer, the call goes to voicemail and you get an instant transcription you can read between showings. You always know who called and what they said, even when you are unavailable.",
              },
              {
                q: "Is the call recording legal for real estate?",
                a: "Call recording laws vary by state. In one-party consent states, you can record without notifying the other party. In two-party (all-party) consent states like California and Illinois, you need to inform the other person. VeraDial makes it easy to comply — you can configure a recording disclosure announcement, and AI calls always identify the call is being recorded when the feature is enabled. Check your state's specific requirements.",
              },
              {
                q: "How does the Call Map help with real estate specifically?",
                a: "The Call Map plots every call on an interactive map with clustering by location. For a real estate agent, this means you can see at a glance where your leads and client conversations are concentrated. If you notice a cluster of activity in a specific neighborhood, that is a signal to double down with door-knocking, mailers, or open houses there. It also helps you plan efficient driving routes between callbacks and showings.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.q} delay={index * 60}>
                <Card hover={false} className="p-6">
                  <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.a}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use-case FAQ */}
      <UseCaseFAQ items={REALTOR_FAQS} heading="Realtor FAQ" />

      {/* ---------------------------------------------------------- */}
      {/*  Bottom CTA                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Close More Deals?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Your AI-powered business line for real estate.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Verified caller ID, AI follow-up calls, Call Map, call
                recording, and business SMS — everything you need to never miss
                a lead again. $9.99/month to start.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Learn More
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
