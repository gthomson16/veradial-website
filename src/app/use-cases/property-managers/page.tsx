import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  PhoneOff,
  Wrench,
  FileQuestion,
  Smartphone,
  Bot,
  Map,
  Mic,
  MessageSquareText,
  MailOpen,
  CheckCircle2,
  ArrowRight,
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

const PAGE_TITLE = "VeraDial for Property Managers";
const PAGE_DESCRIPTION =
  "Business calling for property managers. Coordinate tenants and vendors, document conversations, and manage calls with AI calling and recordings.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/use-cases/property-managers",
  keywords: [
    "property manager phone app",
    "AI calling for property management",
    "landlord business phone",
    "tenant communication app",
    "property management calling",
    "rental property phone system",
    "maintenance request phone",
    "landlord AI phone",
  ],
});

const PAIN_POINTS = [
  {
    icon: PhoneOff,
    title: "Tenants calling your personal phone at all hours",
    description:
      "When your personal number is the only number tenants have, there is no boundary between your work life and personal life. Emergency maintenance calls come in at midnight. Prospective tenants call during family dinners. There is no separation, and no way to turn it off without risking a missed emergency.",
  },
  {
    icon: Wrench,
    title: "Coordinating vendor callbacks for maintenance across properties",
    description:
      "A leak at Building A, a broken furnace at Building B, and a locksmith needed at Building C. You are the bottleneck in the middle, spending your mornings on the phone with plumbers, electricians, and HVAC techs — calling, leaving voicemails, and calling back when they do not answer. Each callback interrupts whatever else you are doing.",
  },
  {
    icon: FileQuestion,
    title: "No record of what was discussed or promised",
    description:
      "A tenant claims you agreed to replace the carpet last month. A vendor says you approved overtime hours. Without a recording or transcript, it turns into your word against theirs. Disputes over verbal agreements are one of the most common sources of friction in property management — and they are entirely preventable.",
  },
];

const SOLUTIONS = [
  {
    icon: Smartphone,
    title: "Dedicated business number keeps tenant calls off your personal phone",
    description:
      "Get a local number just for your properties. Give it to tenants, post it on lease agreements, and list it on your property website. When the day is over, your personal phone stays personal. Tenant calls go to voicemail on your business line, and you review transcripts on your own schedule. No more midnight disruptions unless you choose to be available.",
  },
  {
    icon: Bot,
    title: "AI handles routine maintenance scheduling calls to vendors",
    description:
      "Instead of spending your morning on the phone with every vendor, let VeraDial's AI agent make the calls for you. Set up a prompt like: \"Call Mike's Plumbing, tell them there is a leak in unit 4B at 220 Oak Street, and ask for the earliest available appointment this week.\" The AI makes the call, has the conversation, and delivers a full transcript with the vendor's response. You review it in two minutes instead of spending twenty on the phone.",
  },
  {
    icon: Map,
    title: "Call Map shows call activity by property and building location",
    description:
      "Every call you make or receive is plotted on VeraDial's interactive Call Map. Over time, you build a visual picture of where your communication is concentrated. If one building is generating three times the call volume of another, you can see it at a glance. Clusters of maintenance calls at a specific address may signal a systemic issue — aging plumbing, a problematic tenant, or deferred maintenance catching up. This is data you can bring to property owners when discussing capital expenditures or rent adjustments.",
  },
  {
    icon: Mic,
    title: "Call recording documents tenant requests and agreements",
    description:
      "Toggle call recording on any conversation. When a tenant calls about a repair, the recording captures exactly what was requested and what you committed to. When a vendor gives a quote over the phone, you have the exact number on record. These recordings are stored in your call history with timestamps and transcripts, creating a paper trail for every verbal agreement. Useful for dispute resolution, liability documentation, and simply remembering what happened three weeks ago.",
  },
  {
    icon: MessageSquareText,
    title: "SMS for quick tenant updates",
    description:
      "Not every communication needs a phone call. Send a quick text from your VeraDial business number: \"Plumber scheduled for Thursday 2 PM\" or \"Water will be shut off 9-11 AM for pipe repair.\" Tenants get a professional message from your business line, and you keep a record of every text sent. Batch updates to multiple tenants, confirm appointments, and follow up on maintenance requests — all without giving out your personal number.",
  },
  {
    icon: MailOpen,
    title: "Voicemail transcription — read messages instead of listening to each one",
    description:
      "When you manage multiple properties, voicemail stacks up fast. VeraDial transcribes every voicemail automatically, so you can scan through messages in seconds instead of listening to each one. Read them during a site visit, skim them between meetings, or review them all at once at the end of the day. Transcripts are searchable and stored alongside your call history, so you can find that voicemail from two months ago where the tenant first reported the issue.",
  },
];

export default function PropertyManagersPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Property Managers", path: "/use-cases/property-managers" },
  ]);
  const pageJsonLd = buildUseCasePageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/use-cases/property-managers",
    audienceType: "Property Managers",
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
            <span className="text-text-secondary">Property Managers</span>
          </nav>

          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Property Management
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Manage tenant calls across every property
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Property managers juggle calls from tenants, vendors, and
            prospective renters across multiple buildings — often from a personal
            phone with no separation, no records, and no way to delegate. VeraDial
            gives you a dedicated business line with AI that handles calls for
            you, records everything, and maps your communication across every
            property you manage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#pain-points">
              See the Problem
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="relative py-20 scroll-mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Problem
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Property management runs on phone calls — and that is the problem
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Every tenant request, vendor coordination, and lease inquiry flows
              through your phone. Without the right tools, you are stuck in a
              cycle of missed calls, forgotten promises, and zero documentation.
              Here are the three pain points property managers deal with every
              day.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PAIN_POINTS.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <point.icon size={20} className="text-accent" />
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
                src="/screenshots/raw-captures/call-map-updated.png"
                alt="VeraDial Call Map showing calls by property location"
                width={390}
                height={844}
                sizes="(max-width: 640px) calc(100vw - 3rem), 20rem"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Call Map — see activity by property
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How VeraDial Solves It */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              How VeraDial Solves It
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              One app for tenant calls, vendor coordination, and documentation
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial replaces the chaos of managing calls from a personal phone
              with a professional business line that records, transcribes, maps,
              and even delegates calls on your behalf. Here is how each feature
              fits into your daily workflow as a property manager.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SOLUTIONS.map((item, index) => (
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

      {/* Example Scenario */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              A Day in the Life
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How Dana manages 3 buildings with VeraDial
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card hover={false} className="mt-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <Building2 size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary">
                    Dana — Property Manager
                  </p>
                  <p className="text-sm text-text-muted">
                    3 residential buildings, 42 units
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Morning — Tenant reports a leak
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      A tenant in Building A calls Dana&apos;s VeraDial number at
                      7:15 AM about a leak under the kitchen sink. Dana is
                      driving to a site visit, so the call goes to voicemail.
                      VeraDial transcribes the message immediately. Dana reads
                      the transcript at a red light: &quot;Unit 3C, kitchen
                      sink leaking, water on the floor, tenant says it started
                      last night.&quot; No need to listen to a two-minute
                      voicemail — the key details are right there.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Mid-morning — AI calls the plumber
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      Instead of pulling over to call the plumber, Dana sets up
                      an AI call from VeraDial: &quot;Call Reliable Plumbing at
                      555-0147. Tell them there is a leak under the kitchen
                      sink in unit 3C at 220 Oak Street. Ask for the earliest
                      available appointment today or tomorrow.&quot; The AI
                      makes the call, has the conversation with the plumber&apos;s
                      dispatcher, and delivers a transcript. The plumber can
                      come Thursday at 2 PM. Dana sends a quick SMS to the
                      tenant from her VeraDial number: &quot;Plumber scheduled
                      for Thursday 2 PM. Please make sure someone is home.&quot;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Afternoon — Call Map reveals a pattern
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      During her weekly review, Dana opens the Call Map. She
                      notices this month&apos;s maintenance-related calls are
                      heavily clustered at Building A — the oldest of her three
                      properties. Plumbing, electrical, and HVAC calls are all
                      concentrated there. She screenshots the map and includes
                      it in her next report to the building owner, making a
                      data-backed case for a capital expenditure review. The
                      visual pattern is immediately compelling — far more
                      persuasive than a spreadsheet of call logs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      End of day — Documentation for liability
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      A tenant disputes a conversation from two weeks ago,
                      claiming Dana promised to replace the living room carpet
                      before the end of the month. Dana searches her call
                      history, finds the recording, and plays back the exact
                      conversation. The transcript shows she said she would
                      &quot;get a quote and discuss it with the owner&quot; —
                      not that she committed to replacing it. Dispute resolved
                      in two minutes with documentation, not guesswork.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="mt-1 text-sm text-text-secondary">
                  minutes saved per vendor call with AI
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="mt-1 text-sm text-text-secondary">
                  of conversations documented and searchable
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">0</p>
                <p className="mt-1 text-sm text-text-secondary">
                  tenant calls to your personal phone
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who this is for */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Built For
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Property managers who are tired of being the switchboard
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Whether you manage a handful of units or dozens of buildings,
              VeraDial fits into your workflow without adding complexity. It is
              one app on your phone — not an enterprise phone system with
              training manuals and IT requirements.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "Independent landlords managing 1-10 properties",
                "Property management companies with multi-building portfolios",
                "HOA managers coordinating with boards and vendors",
                "Short-term rental hosts managing guest and cleaner communication",
                "Commercial property managers handling tenant buildout coordination",
                "Real estate investors who self-manage their rental properties",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing note */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Simple Pricing
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              $9.99/month for a professional property management phone
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              One flat price. No per-unit fees, no per-building surcharges, no
              hidden costs. You get a dedicated US or Canadian number, AI
              calling, call recording, voicemail transcription, SMS, and Call Map
              — everything described on this page. The cost of one maintenance
              call that you did not have to make yourself pays for a full month
              of VeraDial.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Other use cases */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              More Use Cases
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              See how others use VeraDial
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { name: "Contractors", href: "/use-cases/contractors" },
                { name: "Real Estate Agents", href: "/use-cases/realtors" },
                { name: "Freelancers", href: "/use-cases/freelancers" },
                { name: "Sales Teams", href: "/use-cases/sales" },
                { name: "Recruiters", href: "/use-cases/recruiters" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary"
                >
                  {item.name}
                  <ArrowRight
                    size={14}
                    className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Try It?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Stop managing properties from your personal phone.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get a dedicated business number, let AI handle vendor calls,
                record every tenant conversation, and see your call activity
                mapped across every property you manage.
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
