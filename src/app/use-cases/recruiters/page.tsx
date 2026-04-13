import Image from "next/image";
import Link from "next/link";
import {
  Users,
  PhoneForwarded,
  Clock,
  FileX,
  Bot,
  FileText,
  ShieldCheck,
  Mic,
  Smartphone,
  MessageSquareText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";

export const metadata = buildPageMetadata({
  title: "VeraDial for Recruiters",
  description:
    "Business calling for recruiters. Screen candidates with AI, get transcripts for every call, and cut down on phone tag during hiring.",
  path: "/use-cases/recruiters",
  keywords: [
    "AI calling for recruiters",
    "recruiter phone app",
    "AI candidate screening",
    "recruiting phone system",
    "candidate screening tool",
    "recruiter business phone",
    "AI recruiting calls",
    "candidate phone screen",
  ],
});

const PAIN_POINTS = [
  {
    icon: PhoneForwarded,
    title: "Playing phone tag with candidates across time zones",
    description:
      "You call a candidate at 10 AM Eastern. They are on the West Coast and still asleep. They call back at 3 PM their time — you are in an interview. You try again the next morning — straight to voicemail. Three days pass. The best candidates are off the market in a week, and you are spending that week trying to get them on the phone for a fifteen-minute conversation. Multiply this by twenty open positions, and phone tag becomes the single biggest bottleneck in your pipeline.",
  },
  {
    icon: Clock,
    title: "Hours spent on initial screening calls that could be automated",
    description:
      "The first phone screen is usually the same five questions: availability, salary expectations, willingness to relocate, start date, and work authorization. You already know the script by heart. But you still have to make twenty calls a day, ask the same questions, take notes, and move on to the next one. These are not conversations that require your judgment — they are data collection calls. The strategic work — evaluating fit, selling the role, closing the candidate — comes later. But you cannot get to the strategic work because the data collection calls fill your calendar.",
  },
  {
    icon: FileX,
    title: "No transcripts — candidate details blur together after 20 calls",
    description:
      "By Thursday afternoon, you have spoken with fifteen candidates for three different roles. Who was the one with five years of Python experience and a preference for remote work? Was that the candidate from the Tuesday morning call or the Wednesday afternoon one? Your handwritten notes say \"strong communication, open to hybrid\" — but that describes half of them. Without transcripts, you are relying on memory and fragments of shorthand to make decisions about which candidates advance. Details get mixed up, and good candidates get overlooked because their call happened to fall on a busy afternoon.",
  },
];

const SOLUTIONS = [
  {
    icon: Bot,
    title: "AI makes screening calls — asks about availability, salary, and timeline",
    description:
      "Configure VeraDial's AI agent with your screening script: \"Call this candidate. Introduce yourself as calling from [company name] regarding the [role] they applied for. Ask about their earliest start date, salary expectations, willingness to relocate to Austin, and whether they have work authorization.\" The AI makes the call, asks each question naturally, listens to the answers, and delivers a complete transcript with a summary. Twenty screening calls that would take you four hours are done by lunchtime — without you picking up the phone once.",
  },
  {
    icon: FileText,
    title: "Full transcripts and summaries for every candidate conversation",
    description:
      "Every call — whether made by you or by the AI — generates a full transcript and an AI-written summary. When you need to recall what a specific candidate said about relocation, you search the transcript instead of digging through sticky notes. When the hiring manager asks for a recap, you forward the summary instead of writing one from memory. Transcripts are time-stamped, searchable, and stored permanently in your call history. After twenty calls in a day, this is the difference between a clear pipeline and a foggy one.",
  },
  {
    icon: ShieldCheck,
    title: "Verified caller ID means candidates actually answer your calls",
    description:
      "Recruiters live and die by answer rates. When your outbound calls show up as \"Spam Likely\" or \"Unknown Caller,\" half your candidates never pick up. VeraDial numbers carry STIR/SHAKEN A-level attestation — the highest level of caller identity verification available. Your calls display a verified number with proper attestation, so carrier spam filters let them through and candidates see a legitimate incoming call. The result: higher answer rates, fewer voicemails, and less phone tag.",
  },
  {
    icon: Mic,
    title: "Call recording for reviewing candidate responses later",
    description:
      "Toggle recording on any call to capture the full conversation. When you are screening five candidates for the same role, recording lets you revisit each conversation with fresh ears. Compare how Candidate A and Candidate B answered the same question about leadership experience. Share recordings with hiring managers who want to hear the candidate directly, not just your interpretation. Recordings are stored with the call record, so they are easy to find and reference weeks or months later if a candidate re-enters your pipeline.",
  },
  {
    icon: Smartphone,
    title: "Dedicated business number — separate recruiting from personal",
    description:
      "Give candidates a professional business number that is not your personal cell phone. When a candidate calls back at 9 PM, it goes to your VeraDial voicemail — not your personal phone ringing during dinner. When you change jobs or agencies, your candidate relationships stay tied to a number you control, not your employer's phone system. A dedicated recruiting line also makes it easy to track call volume, set boundaries on availability, and maintain a professional presence that candidates and clients trust.",
  },
  {
    icon: MessageSquareText,
    title: "SMS for quick candidate confirmations",
    description:
      "Not every candidate interaction needs a phone call. Send a quick text from your VeraDial number to confirm interview details: \"Interview confirmed: Thursday 3 PM with Sarah Kim, VP of Engineering. Zoom link: [link].\" Follow up after a screening call: \"Thanks for your time today — next steps coming by Friday.\" Candidates expect text communication, and sending it from a professional business number is far better than texting from a personal cell phone. Every SMS is logged alongside your call history for a complete communication trail.",
  },
];

export default function RecruitersPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Recruiters", path: "/use-cases/recruiters" },
  ]);

  return (
    <>
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
            <span className="text-text-secondary">Recruiters</span>
          </nav>

          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Recruiting
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Screen and schedule candidates without the phone tag
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Recruiters spend hours every day playing phone tag with candidates
            who do not respond to emails, taking notes that blur together after
            twenty calls, and repeating the same screening questions on every
            conversation. VeraDial gives you an AI agent that handles screening
            calls, transcribes everything, and makes sure candidates actually
            pick up when you call.
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
              Recruiting is a phone-heavy job stuck with phone-era problems
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Email response rates are declining. Candidates expect to hear from
              recruiters by phone. But the phone experience itself has not
              improved in decades — you still play tag, take manual notes, and
              lose details across dozens of daily conversations. These are the
              three biggest friction points in a recruiter&apos;s phone workflow.
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
                src="/screenshots/raw-captures/ai-detail-updated.png"
                alt="VeraDial AI call transcript with candidate screening summary"
                width={390}
                height={844}
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Full transcripts and summaries for every candidate call
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
              AI screening, verified caller ID, and transcripts for every call
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial turns your phone into a recruiting machine. AI handles
              the repetitive screening calls. Verified caller ID gets
              candidates to actually answer. And every conversation — whether
              you made it or the AI did — is recorded, transcribed, and
              summarized automatically. Here is how each feature fits into your
              recruiting workflow.
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
              How Rachel fills 4 positions in a week with VeraDial
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card hover={false} className="mt-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <Users size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary">
                    Rachel — Technical Recruiter
                  </p>
                  <p className="text-sm text-text-muted">
                    4 open positions, 30+ candidates in pipeline
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
                      Monday morning — AI screens weekend applicants
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      Over the weekend, 8 candidates applied for Rachel&apos;s
                      open Senior Backend Engineer role. Monday at 9 AM, Rachel
                      sets up AI screening calls for all 8. The AI script:
                      &quot;Hi, this is a call from [company] regarding the
                      Senior Backend Engineer position you applied for. I have a
                      few quick questions. What is your earliest possible start
                      date? What is your salary range expectation? Are you open
                      to relocating to Austin, or do you require a fully remote
                      arrangement?&quot; By 10:30 AM, all 8 calls are complete.
                      Rachel has 8 transcripts with AI-generated summaries in
                      her call history.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Late morning — Review and shortlist
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      Rachel reviews the 8 transcripts over coffee. Three
                      candidates stand out: one with an immediate start date and
                      matching salary range, one with exceptional experience who
                      is open to relocation, and one who asked thoughtful
                      counter-questions about the team and tech stack (the AI
                      captured those too). Two candidates are outside the salary
                      range. One did not answer — VeraDial left a voicemail and
                      the candidate can call back to Rachel&apos;s business
                      number. Rachel marks the three shortlisted candidates for
                      personal follow-up calls in the afternoon.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      Afternoon — Personal follow-up calls with recording
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      Rachel calls the three shortlisted candidates personally
                      from her VeraDial number. Because VeraDial numbers carry
                      STIR/SHAKEN A-level attestation, all three answer on the
                      first ring — no &quot;Unknown Caller&quot; flags. She
                      toggles recording on each call to capture the deeper
                      conversation about technical experience, team culture fit,
                      and career goals. Each call generates a transcript she
                      can reference later, instead of relying on the notes she
                      scrawled between conversations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      End of week — Transcripts replace manual notes
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      Friday: Rachel sends the hiring manager a summary for each
                      shortlisted candidate, pulling directly from the call
                      transcripts. No rewriting from memory. No &quot;I think
                      they said...&quot; qualifiers. The hiring manager can even
                      listen to the relevant portion of each recording. Rachel
                      sends SMS confirmations to the two candidates advancing to
                      on-site interviews: &quot;Interview confirmed: Thursday
                      3 PM with Sarah Kim, VP of Engineering.&quot; Total time
                      spent on initial screening for 8 candidates: 45 minutes of
                      transcript review instead of 4 hours of phone calls.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">8</p>
                <p className="mt-1 text-sm text-text-secondary">
                  candidates screened before lunch by AI
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">3x</p>
                <p className="mt-1 text-sm text-text-secondary">
                  higher answer rate with verified caller ID
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5 text-center">
                <p className="text-2xl font-bold text-accent">0</p>
                <p className="mt-1 text-sm text-text-secondary">
                  candidate details lost to bad notes
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
              Recruiters who would rather close candidates than chase them
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Whether you are an agency recruiter managing multiple clients, an
              in-house recruiter filling a hiring surge, or a solo headhunter
              working a niche, VeraDial fits into your workflow without adding
              complexity. One app, one number, AI that handles the calls you
              should not be making manually.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "Agency recruiters managing pipelines across multiple clients",
                "In-house talent acquisition teams handling high-volume hiring",
                "Executive search consultants who need call documentation for clients",
                "Solo headhunters and independent recruiting consultants",
                "Staffing agencies screening temp and contract candidates at scale",
                "University recruiters coordinating campus hiring events and follow-ups",
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
              $9.99/month for an AI-powered recruiting phone
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              One flat price. No per-call fees, no per-seat charges, no
              enterprise minimums. You get a dedicated business number, AI
              calling agents, call recording, transcription, SMS, and verified
              caller ID — everything described on this page. One placed
              candidate covers years of VeraDial. The ROI is not even close.
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
                { name: "Property Managers", href: "/use-cases/property-managers" },
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
                Stop playing phone tag. Start closing candidates.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Let AI handle your screening calls, get transcripts for every
                conversation, and reach candidates with verified caller ID that
                actually gets answered.
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
