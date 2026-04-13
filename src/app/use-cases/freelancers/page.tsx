import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import {
  Phone,
  ShieldCheck,
  Bot,
  Mic,
  MessageSquare,
  Voicemail,
  UserX,
  Clock,
  MapPin,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata = buildPageMetadata({
  title: "VeraDial for Freelancers & Consultants",
  description:
    "A business line for freelancers and consultants. Get a dedicated number with AI calling, voicemail transcription, call recording, and voice privacy.",
  path: "/use-cases/freelancers",
  keywords: [
    "business phone for freelancers",
    "professional phone number app",
    "consultant business line",
    "freelancer business number",
    "second phone number for business",
    "virtual business phone freelancer",
    "AI calling for consultants",
    "freelancer phone system",
  ],
});

const PAIN_POINTS = [
  {
    icon: UserX,
    title: "Giving out your personal number to every client",
    description:
      "Every new client, every cold inquiry, every networking event — your personal number gets passed around. There is no boundary between your work life and your personal life. Clients text you at 10 PM, spam calls multiply, and there is no way to turn it off without going completely dark.",
  },
  {
    icon: Voicemail,
    title: "No professional voicemail or call screening",
    description:
      "Your personal voicemail greeting says nothing about your business. When a potential client calls and you cannot answer, they hear a generic carrier message — or worse, no voicemail at all. There is no way to screen business calls separately from personal ones, so you either answer everything or risk missing real opportunities.",
  },
  {
    icon: Clock,
    title: "Manually scheduling calls between deep work sessions",
    description:
      "You are in the middle of a client deliverable when an inquiry comes in. Now you have to context-switch — check availability, draft a response, coordinate a time, and somehow get back into flow. Scheduling calls and follow-ups manually is a constant drag on the focused, billable work that actually pays your bills.",
  },
];

const FEATURES = [
  {
    icon: Phone,
    title: "Dedicated business number",
    description:
      "Stop mixing personal and work calls on a single number. With VeraDial, you get a dedicated US or Canadian number that is exclusively for your freelance business. Choose your area code to present a local presence wherever your clients are. Your personal number stays private — share your VeraDial number on your website, business cards, invoices, and proposals without a second thought. When the workday is over, your business line is separate from your personal life.",
  },
  {
    icon: Bot,
    title: "AI schedules meetings while you focus on client work",
    description:
      "VeraDial's AI agent can make outbound calls on your behalf — scheduling intro meetings, confirming appointments, and following up with leads while you stay heads-down on billable work. Choose from built-in presets like Scheduler or write a custom prompt that matches your workflow. The AI handles the back-and-forth, and you get a full transcript and summary when it is done. No more context-switching away from deep work to play phone tag.",
  },
  {
    icon: Mic,
    title: "Professional voicemail with custom AI greetings",
    description:
      "First impressions matter when you are a one-person business. VeraDial gives you a professional voicemail system with AI-powered greetings that match your brand. When you are on a client call, in a meeting, or simply in deep work mode, callers hear a polished greeting — not a generic carrier message. Every voicemail is automatically transcribed, so you can scan messages at a glance and prioritize callbacks without listening to a single recording.",
  },
  {
    icon: FileText,
    title: "Call recording for capturing project details and agreements",
    description:
      "Freelancers live and die by the details — scope, timelines, rates, deliverables. VeraDial lets you record any call with a single tap, capturing both sides of the conversation. Review recordings later to pull out exact requirements, confirm what was agreed upon, and protect yourself if a client disputes the scope. Every recording is stored in your call history and paired with a full transcription, so you can search through project conversations without re-listening to hours of audio.",
  },
  {
    icon: ShieldCheck,
    title: "Voice privacy for sensitive client discussions",
    description:
      "Some client conversations require discretion — especially when you are consulting on confidential projects, handling sensitive business data, or working in industries like finance, legal, or healthcare. VeraDial's voice privacy modes (Male, Female, and Privacy) use FFT-based formant shifting to mask your natural voice in real time. Protect your personal identity on calls where you need an extra layer of separation between you and the work.",
  },
  {
    icon: MessageSquare,
    title: "SMS for quick client updates from your business number",
    description:
      "Not every client interaction needs a phone call. VeraDial includes business SMS so you can send quick updates, share meeting links, confirm appointments, and respond to short questions — all from your dedicated business number. Clients see a consistent, professional identity whether you are calling or texting. And because it is on your VeraDial number, your personal iMessage and text threads stay completely separate.",
  },
];

const SCENARIO_STEPS = [
  {
    step: 1,
    title: "The inquiry comes in during a client workshop",
    description:
      "Alex is a UX consultant running a three-hour design workshop for a long-term client. Midway through the session, a new prospect calls the VeraDial business number listed on Alex's portfolio site. Alex's phone is on silent — it is a focused work session. The call rolls to VeraDial's professional voicemail, and the prospect leaves a detailed message about a mobile app redesign project they need help with.",
  },
  {
    step: 2,
    title: "Voicemail captures and transcribes the message",
    description:
      "After the workshop wraps, Alex checks the VeraDial app. The voicemail is already transcribed — no need to listen to the full recording. The transcript shows the prospect's name, company, a brief project description, timeline, and a callback number. Alex can skim the details in thirty seconds and decide this is a high-priority lead worth following up on immediately.",
  },
  {
    step: 3,
    title: "AI calls back and schedules an intro meeting",
    description:
      "Alex has three hours of workshop notes to write up, so instead of playing phone tag, Alex dispatches a VeraDial AI agent with a Scheduler preset. The AI calls the prospect back, introduces itself on Alex's behalf, and books a 30-minute intro call for the following afternoon. Alex receives a transcript of the scheduling conversation — the prospect confirmed Tuesday at 2 PM and mentioned they have a $15K budget for the project.",
  },
  {
    step: 4,
    title: "Call recording captures the project brief",
    description:
      "On Tuesday, Alex takes the intro call on the VeraDial number with recording enabled. Over thirty minutes, the prospect walks through their current app, pain points, target users, and timeline. Alex focuses entirely on the conversation instead of scrambling to take notes. After the call, the full recording and transcription are available in the VeraDial app — every requirement, every nuance, ready to reference when writing the proposal.",
  },
  {
    step: 5,
    title: "Business calls tracked separately from personal",
    description:
      "At the end of the month, Alex reviews the VeraDial call history for invoicing and tax purposes. Every business call — incoming, outgoing, and AI-assisted — is logged with timestamps, durations, and transcriptions. There is no need to scroll through a personal call log trying to remember which calls were for work. The Call Map feature even shows the geographic distribution of Alex's client calls, making it easy to identify where business is coming from and which markets to target next.",
  },
];

export default function FreelancersUseCasePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Freelancers & Consultants", path: "/use-cases/freelancers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <nav className="mb-4 text-sm text-text-muted">
            <Link href="/" className="hover:text-text-secondary transition-colors">
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
            <span className="text-text-secondary">Freelancers</span>
          </nav>

          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Freelancers &amp; Consultants
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            A professional business line
            <br className="hidden sm:block" /> without a second phone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            You became an independent professional to do great work on your own
            terms — not to manage a phone system. VeraDial gives freelancers and
            consultants a dedicated business number, AI-powered calling, and
            professional voicemail so you can focus on the work that matters.
            All from the phone you already carry.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#pain-points">
              See How It Works
            </Button>
          </div>

          <StoreBadges className="mt-6 justify-center" />
        </div>
      </section>

      {/* ─── Pain Points ─── */}
      <section id="pain-points" className="relative py-20 scroll-mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Problem
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Running a business from your personal number is costing you
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Most freelancers start by giving out their personal cell number.
              It works — until it doesn&apos;t. As your client base grows, the cracks
              start to show. Here are the three biggest pain points independent
              professionals face every day.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PAIN_POINTS.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <point.icon size={22} className="text-[var(--color-accent-secondary)]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
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
                src="/screenshots/raw-captures/ai-detail-updated.png"
                alt="VeraDial AI call transcript and summary"
                width={390}
                height={844}
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Full transcripts and summaries for every call
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── How VeraDial Solves It ─── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Solution
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How VeraDial solves it
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial was designed for professionals who need business-grade
              calling without business-grade complexity. One app, one monthly
              price, and everything you need to present a professional front to
              every client — while keeping your personal life completely
              separate.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <feature.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Verified Caller ID Callout ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <Card hover={false} className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-border p-8 md:border-b-0 md:border-r">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <ShieldCheck size={22} className="text-accent" />
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Verified caller identity
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    When you call a client from your VeraDial number, they see a
                    verified caller — not &ldquo;Scam Likely&rdquo; or an unknown
                    number. Every VeraDial number carries{" "}
                    <strong className="text-accent">
                      STIR/SHAKEN A-level attestation
                    </strong>
                    , the highest level of carrier verification available. For
                    freelancers who depend on clients answering the phone, this
                    is the difference between landing a project and going to
                    voicemail.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      A-Level Attestation
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                      <MapPin size={22} className="text-text-muted" />
                    </div>
                    <span className="font-display text-xl font-semibold text-text-primary">
                      Call Map
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    See all your business calls plotted on an interactive map.
                    For freelancers and consultants who serve multiple regions,
                    Call Map gives you a visual overview of where your clients
                    are, where new inquiries are coming from, and which
                    geographic markets are growing. Use it to make smarter
                    decisions about where to focus your marketing and business
                    development efforts.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-text-muted" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                      Visual Call Analytics
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Example Scenario ─── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Real-World Scenario
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              A day in the life: Alex, UX consultant
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Alex is an independent UX consultant who works with mid-size SaaS
              companies on product redesigns. Here is how VeraDial fits into a
              typical workday — from missed call to signed project, without
              interrupting a single deep work session.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {SCENARIO_STEPS.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 80}>
                <Card hover={false} className="p-6 sm:p-8">
                  <div className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <span className="font-display text-sm font-bold text-accent">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Built For Independents
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Whether you bill by the hour or by the project
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial works for any independent professional who needs to
              separate business from personal. Here are just a few of the
              freelancers and consultants who rely on it.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Designers & Creatives",
                description:
                  "Graphic designers, UX/UI consultants, photographers, and videographers who need a professional line for client communications, scheduling shoots, and discussing project feedback.",
              },
              {
                title: "Developers & Technical Consultants",
                description:
                  "Freelance software engineers, IT consultants, and technical advisors who need call recording for requirements gathering and a separate business number for client-facing work.",
              },
              {
                title: "Writers & Content Strategists",
                description:
                  "Copywriters, content marketers, ghostwriters, and editors who conduct client interviews, source calls, and editorial meetings that benefit from recording and transcription.",
              },
              {
                title: "Marketing & PR Consultants",
                description:
                  "Independent marketing strategists, PR professionals, and social media consultants who juggle multiple client accounts and need to keep communications organized and professional.",
              },
              {
                title: "Business & Management Consultants",
                description:
                  "Strategy consultants, executive coaches, and fractional executives who handle confidential client discussions and need voice privacy, call recording, and verified caller identity.",
              },
              {
                title: "Accountants & Financial Advisors",
                description:
                  "Independent CPAs, bookkeepers, and financial planners who discuss sensitive financial information and need a professional, dedicated business line with call privacy features.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60}>
                <Card hover={false} className="h-full p-6">
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

      {/* ─── Pricing Callout ─── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <Card hover={false} className="p-8 text-center sm:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Simple Pricing
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                $9.99/mo — everything included
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                No tiers. No per-minute charges. No hidden fees. One plan that
                includes your dedicated business number, AI calling, call
                recording, voicemail transcription, SMS, voice privacy, and Call
                Map. Cancel anytime.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-text-secondary">
                {[
                  "Dedicated number",
                  "AI calling",
                  "Call recording",
                  "Voicemail transcription",
                  "Business SMS",
                  "Voice privacy",
                  "Call Map",
                  "STIR/SHAKEN verified",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Go Professional?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Your business deserves its own number.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Stop giving out your personal number. Get a dedicated business
                line with AI calling, verified caller ID, call recording, and
                voicemail transcription — built for the way freelancers
                actually work.
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
