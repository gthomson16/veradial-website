import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Mic,
  MessageSquare,
  Clock,
  Wrench,
  PhoneOff,
  AlertTriangle,
  UserCheck,
  Bot,
  Map,
  Voicemail,
  Sun,
  Coffee,
  Sunset,
  Moon,
} from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildUseCasePageJsonLd,
} from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { UseCaseFAQ } from "@/components/use-cases/UseCaseFAQ";
import { CONTRACTOR_FAQS } from "@/lib/use-case-faqs";

const PAGE_TITLE = "VeraDial for Contractors & Home Services";
const PAGE_DESCRIPTION =
  "Business calling for plumbers, electricians, HVAC techs, and contractors. Get verified caller ID, AI calls, call mapping, and voicemail transcription.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/use-cases/contractors",
  keywords: [
    "business phone for plumber",
    "AI calling for HVAC",
    "contractor phone app",
    "business phone for electrician",
    "home services business phone",
    "contractor caller ID",
    "plumber business number",
    "HVAC appointment reminders",
    "handyman business phone",
    "contractor AI calling",
    "verified caller ID contractor",
    "service call management app",
  ],
});

const PAIN_POINTS = [
  {
    icon: PhoneOff,
    title: "Missed calls while you're on a job",
    description:
      "You're shoulder-deep in a water heater install or rewiring a panel. Your phone buzzes in your pocket but you can't answer. By the time you call back, the customer has already called someone else. Industry research shows that 85% of callers who can't reach a business on the first try won't call back — they'll move on to the next contractor in their search results. Every missed call is revenue walking out the door.",
  },
  {
    icon: Clock,
    title: "Endless phone tag for confirmations",
    description:
      "You've got four jobs booked tomorrow and need to confirm each one. That means four separate phone calls, voicemails when nobody picks up, and then callbacks that come in while you're driving between sites. Confirming appointments shouldn't eat into your evening or your windshield time. Yet most contractors spend 30 to 45 minutes a day just playing phone tag with customers about scheduling.",
  },
  {
    icon: AlertTriangle,
    title: "Your calls show up as spam or unknown",
    description:
      "You call a new lead from your business number and they don't pick up. Why? Because their phone flagged your call as \"Spam Likely\" or showed it as an unknown number. Carriers are aggressively filtering calls that lack proper verification. If your outbound calls aren't authenticated, you're invisible to the very customers who are waiting to hear from you. This is the reality for most contractors using basic phone plans or cheap VoIP services.",
  },
];

const SOLUTIONS = [
  {
    icon: Bot,
    title: "AI confirms tomorrow's appointments for you",
    description:
      "VeraDial's AI agent calls each customer on your schedule and confirms their appointment — time, address, and any prep instructions. It handles rescheduling requests, answers basic questions, and delivers a full transcript when it's done. You set it up in the morning and check the results when you're ready. No more spending your evenings on confirmation calls.",
    highlight: "AI Calling",
  },
  {
    icon: Map,
    title: "Call Map shows your service area at a glance",
    description:
      "Every call you make or receive is plotted on an interactive map with clustering by location and time-based filters. See exactly where your business is concentrated, identify neighborhoods where you're getting repeat customers, and spot new areas opening up. Use it to plan efficient routes, decide where to focus your marketing, and show potential partners the reach of your operation.",
    highlight: "Call Map",
  },
  {
    icon: Shield,
    title: "Verified caller ID means customers actually pick up",
    description:
      "VeraDial numbers carry STIR/SHAKEN A-level attestation — the highest level of carrier-verified identity. When you call a customer, their phone displays your number as a verified business call instead of flagging it as spam or unknown. Your pickup rate improves dramatically because people trust verified calls. Stop losing leads to spam filters.",
    highlight: "STIR/SHAKEN",
  },
  {
    icon: Voicemail,
    title: "Voicemail transcription — read messages between jobs",
    description:
      "When you can't answer, VeraDial captures voicemails and transcribes them to text automatically. Between jobs, glance at your phone and read through messages instead of listening to minutes of audio. Quickly triage which calls need an immediate callback and which can wait. A leaking pipe emergency gets handled first; a routine estimate request can wait until lunch.",
    highlight: "Voicemail",
  },
  {
    icon: MessageSquare,
    title: "SMS for quick customer updates",
    description:
      "Stuck in traffic? Parts delayed? Running 15 minutes ahead of schedule? Fire off a quick text from your VeraDial business number: \"On my way, 15 min out\" or \"Parts arriving tomorrow — rescheduling to Thursday 9 AM.\" Customers appreciate proactive communication, and texting is faster than calling when you just need to relay a quick update. Keep your personal number separate from business conversations.",
    highlight: "Business SMS",
  },
  {
    icon: Mic,
    title: "Call recording documents job details and agreements",
    description:
      "Toggle recording on any call — outbound or AI-handled. When a homeowner describes the issue over the phone, that recording becomes your reference before you arrive on site. When you quote a price and the customer agrees, you have documentation. Protect yourself from disputes about what was said, what was promised, and what was agreed upon. Every recorded call is stored in your call history with full transcription.",
    highlight: "Call Recording",
  },
];

const SCENARIO_STEPS = [
  {
    time: "7:00 AM",
    icon: Sun,
    title: "Morning coffee",
    description:
      "Mike opens VeraDial and queues his AI agent to confirm today's three appointments: a kitchen faucet replacement at 9 AM, a water heater flush at 11:30, and a bathroom remodel consultation at 2 PM. The AI calls each customer, confirms the time and address, and asks if there's anything Mike should know before arriving. By the time Mike finishes his coffee, all three confirmations are done — two confirmed as-is, one requested a 30-minute push-back. The AI adjusted it and notified Mike.",
  },
  {
    time: "9:00 AM – 12:00 PM",
    icon: Coffee,
    title: "On the job",
    description:
      "While Mike is under a kitchen sink replacing a faucet assembly, three calls come in. He can't answer any of them — his hands are full and he's in a tight space. VeraDial captures each voicemail and transcribes it to text. Between the faucet job and the water heater, Mike checks his phone in the truck. He reads the transcripts: one is a new lead asking about a leaking toilet, one is a parts supplier confirming a delivery, and one is a previous customer asking about a warranty question. He texts the new lead back from his VeraDial number: \"Got your message about the toilet leak. I can come by tomorrow at 10 AM — does that work?\"",
  },
  {
    time: "12:30 PM",
    icon: Sunset,
    title: "Lunch break and Call Map",
    description:
      "Over a sandwich, Mike pulls up Call Map and filters to the last 30 days. He notices a cluster of calls from a new subdivision on the east side of town — four separate customers in the same neighborhood. He makes a mental note to drop off flyers there next week. He also spots that his west-side coverage has thinned out and considers a targeted Google ad for that zip code. The map gives him a visual picture of his business that spreadsheets never could.",
  },
  {
    time: "3:00 PM",
    icon: Phone,
    title: "AI follow-up on yesterday's estimate",
    description:
      "Yesterday Mike gave a bathroom remodel estimate to a homeowner but hasn't heard back. Rather than spending time calling himself — he's still at the afternoon consultation — he dispatches his AI agent to follow up. The AI calls the homeowner, references the estimate, and asks if they have questions or are ready to move forward. The homeowner says they'd like to proceed and asks about scheduling. The AI captures the details in a transcript. Mike reads it after wrapping up his current job and calls the homeowner to finalize the start date.",
  },
  {
    time: "7:00 PM",
    icon: Moon,
    title: "Evening review",
    description:
      "After dinner, Mike spends 10 minutes in VeraDial reviewing the day. He reads through call transcripts from the AI's confirmation calls and follow-up. He checks that tomorrow's schedule is set — three jobs confirmed, plus the new toilet lead he texted earlier who replied \"10 AM works!\" He records a quick note on one call about a customer's specific fixture preference. His phone is done for the day. No evening calls to make, no confirmations to chase, no voicemails to listen to.",
  },
];

export default function ContractorsUseCasePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Contractors", path: "/use-cases/contractors" },
  ]);
  const pageJsonLd = buildUseCasePageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/use-cases/contractors",
    audienceType: "Contractors & Home Services",
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

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <nav className="mb-4 text-sm text-text-muted">
            <Link
              href="/"
              className="transition-colors hover:text-text-secondary"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/use-cases"
              className="transition-colors hover:text-text-secondary"
            >
              Use Cases
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">Contractors</span>
          </nav>

          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            <Wrench size={14} className="mr-1.5" />
            Contractors &amp; Home Services
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Your AI handles calls while you&apos;re on the job
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Plumbers, electricians, HVAC techs, roofers, painters, and every
            trade in between — you can&apos;t answer the phone when you&apos;re
            on a ladder, under a sink, or inside a crawl space. VeraDial&apos;s
            AI makes and takes calls for you, so you never miss a job.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
            Dedicated business number with verified caller ID. AI appointment
            confirmations and follow-ups. Call Map for service area insights.
            Voicemail transcription. Business SMS. Call recording. All for{" "}
            <strong className="text-accent">$9.99/mo</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#pain-points">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="relative py-20 scroll-mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                The Problem
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Three things costing contractors business every day
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                You got into the trades to do the work — not to sit in a truck
                returning calls. But in a service business, the phone is the
                front door. If nobody answers, customers walk.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PAIN_POINTS.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <point.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {point.description}
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
                alt="VeraDial Call Map showing service area coverage with call clusters"
                width={390}
                height={844}
                sizes="(max-width: 640px) calc(100vw - 3rem), 20rem"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Call Map — see your service area at a glance
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How VeraDial Solves It */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Solution
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How VeraDial solves each one
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Every feature in VeraDial was built for people who work with their
              hands — not at a desk. Here&apos;s how each one maps directly to
              the problems contractors face every day.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SOLUTIONS.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <solution.icon size={20} className="text-accent" />
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {solution.highlight}
                    </Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {solution.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                A Day in the Life
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Mike the plumber, powered by VeraDial
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                Mike runs a one-man plumbing operation. He&apos;s good at his
                trade but used to lose two or three leads a week to missed calls.
                Here&apos;s what a typical day looks like now.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-border sm:block" />

            <div className="space-y-8">
              {SCENARIO_STEPS.map((step, index) => (
                <ScrollReveal key={step.time} delay={index * 100}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative hidden flex-shrink-0 sm:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-card">
                        <step.icon size={18} className="text-accent" />
                      </div>
                    </div>

                    <Card hover={false} className="flex-1 p-6">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-semibold text-accent">
                          {step.time}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </Card>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-12 text-center">
              <p className="text-base leading-relaxed text-text-secondary">
                Mike didn&apos;t hire a receptionist. He didn&apos;t sign up for
                an answering service. He&apos;s paying{" "}
                <strong className="text-accent">$9.99 a month</strong> for
                VeraDial, and his AI handles the phone work that used to eat two
                hours of his day. He closes more jobs, wastes less time, and
                actually gets to enjoy his evenings.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who is this for */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Built for Every Trade
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Whether you&apos;re solo or running a crew
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial works for any contractor or home service professional who
              needs a dedicated business number with AI-powered calling. Here are
              some of the trades using it today.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wrench,
                trade: "Plumbers",
                detail: "Emergency calls, appointment confirmations, estimate follow-ups",
              },
              {
                icon: Shield,
                trade: "Electricians",
                detail: "Service call scheduling, permit coordination, inspection reminders",
              },
              {
                icon: Phone,
                trade: "HVAC Technicians",
                detail: "Seasonal maintenance calls, warranty follow-ups, emergency dispatch",
              },
              {
                icon: MapPin,
                trade: "Roofers",
                detail: "Storm damage leads, estimate scheduling, crew coordination",
              },
              {
                icon: UserCheck,
                trade: "General Contractors",
                detail: "Subcontractor coordination, client updates, timeline management",
              },
              {
                icon: MessageSquare,
                trade: "Painters",
                detail: "Quote follow-ups, color confirmation calls, scheduling",
              },
              {
                icon: Clock,
                trade: "Landscapers",
                detail: "Seasonal scheduling, recurring service confirmations, weather updates",
              },
              {
                icon: Mic,
                trade: "Handymen",
                detail: "Job descriptions over the phone, pricing confirmations, scheduling",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.trade} delay={index * 60}>
                <Card hover={false} className="h-full p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {item.trade}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                    {item.detail}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use-case FAQ */}
      <UseCaseFAQ
        items={CONTRACTOR_FAQS}
        heading="Contractor FAQ"
      />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Stop Losing Jobs to Missed Calls
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Let your AI answer the phone.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Verified caller ID. AI appointment calls. Voicemail
                transcription. Call Map. Business SMS. Call recording. Everything
                a contractor needs to run their phone like a business — for{" "}
                <strong className="text-accent">$9.99/mo</strong>.
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
