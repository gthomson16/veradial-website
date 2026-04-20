import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  FileText,
  Mic,
  MapPin,
  Clock,
  ShieldAlert,
  FileQuestion,
  Bot,
  BadgeCheck,
  ScrollText,
  Headphones,
  Map,
  Contact,
  Sunrise,
  Sun,
  Sunset,
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
import { SALES_FAQS } from "@/lib/use-case-faqs";

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

const PAGE_TITLE = "VeraDial for Sales Teams";
const PAGE_DESCRIPTION =
  "Outbound calling for SDRs and sales reps. VeraDial runs first-touch AI calls, shows verified caller ID, and saves call transcripts and recordings.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/use-cases/sales",
  keywords: [
    "AI cold calling app",
    "AI sales calls",
    "outbound calling app",
    "SDR phone tool",
    "AI outbound dialer",
    "sales prospecting calls",
    "sales call recording",
    "verified caller ID sales",
    "cold calling software",
    "AI sales assistant",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Hours lost to repetitive intro calls",
    description:
      "SDRs spend most of their day on first-touch calls that follow the same script every time — qualifying leads, confirming interest, and asking the same three questions. The calls are necessary, but they drain the hours you could spend actually closing deals. By the time you get through your call list, half the day is gone and you have barely spoken to anyone who is ready to buy. The repetition grinds you down, and the best reps — the ones who should be having strategic conversations — end up stuck on autopilot instead.",
  },
  {
    icon: ShieldAlert,
    title: "Calls flagged as spam — prospects never pick up",
    description:
      "You dial forty numbers and half of them go unanswered. Not because the prospect is busy — because their phone flagged your call as \"Spam Likely\" or \"Scam Risk\" before it even rang. Carrier algorithms are aggressive, and outbound sales numbers get flagged fast. It does not matter how good your pitch is if the prospect never sees your name on their screen. Every unanswered call is a wasted slot in your pipeline and a lead that goes cold before you even get a chance to introduce yourself.",
  },
  {
    icon: FileQuestion,
    title: "No transcripts or summaries — details vanish after calls",
    description:
      "You finish a twenty-minute call with a qualified lead and scramble to jot down the key details in your CRM. But by the time you open the record, you have already forgotten whether they said Q2 or Q3 for their timeline, and you cannot remember the exact objection they raised about pricing. Without a transcript, every call becomes a memory exercise. Details get lost, follow-ups miss the mark, and handoffs to account executives lack the context they need. Your pipeline data is only as good as your notes — and your notes are never as good as the actual conversation.",
  },
];

const FEATURES = [
  {
    icon: Bot,
    title: "AI makes first-touch calls with your custom scripts",
    description:
      "Define exactly what you want the AI to say and ask. Write a qualifying script that covers timeline, budget, team size, decision-maker status — whatever matters for your sales process. Then point the AI at your lead list and let it work. The AI calls each prospect, follows your script naturally, handles objections with the context you provide, and captures every response. You get a full transcript and summary when it is done. No more burning two hours on ten intro calls that all follow the same pattern. The AI handles the volume so you can focus on the conversations that actually move deals forward.",
  },
  {
    icon: BadgeCheck,
    title: "STIR/SHAKEN A-level means your calls show as verified",
    description:
      "Every VeraDial number carries STIR/SHAKEN A-level attestation — the highest level of caller identity verification available on US and Canadian phone networks. When you call a prospect, their phone displays your number as verified rather than flagging it as spam or unknown. This is not a cosmetic label — it is a cryptographic attestation from the carrier that the call is legitimate and the caller ID is accurate. For sales teams, this translates directly to higher answer rates. Prospects are significantly more likely to pick up a verified call than one their phone has flagged. Your outbound efforts start working harder because more of your calls actually connect.",
  },
  {
    icon: ScrollText,
    title: "Full transcripts and summaries after every call",
    description:
      "Every call — whether made by you or by the AI — is automatically transcribed and summarized. The transcript captures the complete conversation word for word, and the summary distills it into the key takeaways: what the prospect needs, their timeline, any objections, and the agreed next steps. No more scribbling notes mid-conversation or trying to reconstruct what was said from memory. Pull up any call in your history and you have the full record. Copy the summary into your CRM. Share the transcript with your AE before the handoff. Search across transcripts to find every prospect who mentioned a specific competitor or budget range. Your call data becomes searchable, shareable, and reliable.",
  },
  {
    icon: Headphones,
    title: "Call recording for training and quality review",
    description:
      "Toggle recording on any outbound call. Both sides of the conversation are captured and stored in your call history alongside the transcript. For sales managers, this means you can review actual calls instead of relying on self-reported outcomes. Listen to how your reps handle objections, where they lose momentum, and what the best performers do differently. For individual reps, recordings are a training resource — replay your own calls to identify patterns, refine your pitch, and prepare for callbacks. New hires can listen to top-performer calls to ramp faster. Every call you make becomes a coaching asset, not just a pipeline entry.",
  },
  {
    icon: Map,
    title: "Call Map shows your outreach coverage by region",
    description:
      "Every call you make appears on VeraDial's interactive Call Map, plotted by the area code and region of the number you dialed. Open the map and see your outreach territory at a glance — where you have been calling heavily, where there are gaps, and how your regional coverage is distributed. For sales teams working geographic territories, this is invaluable. Spot underserved regions before they become blind spots. Verify that your AI calls are reaching the right areas. Compare coverage week over week to track how your territory outreach is expanding. The Call Map turns your call history into a visual strategy tool.",
  },
  {
    icon: Contact,
    title: "Caller profile so prospects can look you up",
    description:
      "Set up a caller profile with your display name, company name, website URL, and a brief context line about why you are calling. When a prospect receives your call and wants to verify who you are, your profile gives them somewhere to look. They see a real person at a real company, not just a random number. This is especially important for outbound sales — prospects who can verify your identity are far more likely to engage, call back, and respond to your follow-up. Your caller profile works alongside STIR/SHAKEN verification to present a complete, trustworthy identity on every outbound call. No more \"who is this?\" voicemails.",
  },
];

const SCENARIO_STEPS = [
  {
    time: "Morning",
    icon: Sunrise,
    title: "Set up AI calls for warm leads",
    description:
      "Jordan is an SDR at a B2B software company. This morning, five new demo requests came in overnight from the website. Instead of spending the first two hours of the day dialing each one and running through the same qualifying questions, Jordan opens VeraDial and sets up an AI calling task. The custom script is straightforward: introduce the company, confirm the prospect's interest in the demo they requested, and ask three qualifying questions — what is their timeline for a decision, what is their approximate budget range, and how large is the team that would use the product. Jordan assigns the five leads to the AI and moves on to pipeline review. The AI begins calling each prospect, following the script conversationally, handling clarifying questions, and recording every response.",
  },
  {
    time: "Midday",
    icon: Sun,
    title: "Review transcripts and qualified details",
    description:
      "By lunch, all five calls are complete. Jordan opens the call history and finds a transcript and summary for each one. Three of the five prospects answered — not surprising given that VeraDial's STIR/SHAKEN A-level attestation means the calls showed as verified on each prospect's phone. Of those three, two provided strong qualifying details: one has a Q2 timeline with a $40K budget and a 25-person team, the other needs something in place by next month for a 10-person pilot. The third was interested but said they would need to loop in their CTO before committing to a timeline. The two who did not answer received voicemails, and Jordan can see the voicemail transcriptions in the app. Jordan copies the summaries into the CRM, tags the two hot leads for personal follow-up, and flags the CTO-dependent one for a check-in next week.",
  },
  {
    time: "Afternoon",
    icon: Sunset,
    title: "Close the best leads personally",
    description:
      "With the qualifying data in hand, Jordan spends the afternoon on the calls that actually matter. The first call is with the $40K-budget prospect — Jordan has the full transcript from the AI call, knows exactly what was discussed, and picks up the conversation right where the AI left off. No awkward re-introductions, no repeated questions. The prospect is impressed that Jordan already knows their timeline and team size. The second call goes similarly well. Jordan toggles call recording on both so the account executive can listen to the full conversation before the handoff meeting tomorrow. At the end of the day, Jordan opens the Call Map to review regional coverage. Most of today's outreach landed in the Northeast, but there is a cluster of untouched leads in the Midwest. Jordan makes a note to prioritize that region tomorrow and sets up another batch of AI qualifying calls for the morning. In one day, Jordan qualified five leads, had two high-value conversations, and set up tomorrow's outreach — all from a phone.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SalesUseCasePage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Sales Teams", path: "/use-cases/sales" },
  ]);
  const pageJsonLd = buildUseCasePageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/use-cases/sales",
    audienceType: "Sales Teams",
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
      {/*  Hero                                                      */}
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
            <span className="text-text-secondary">Sales</span>
          </nav>

          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Sales Teams
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            AI-powered outbound calling from your phone
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            SDRs and sales reps spend most of their day on calls that follow the
            same script every time — qualifying leads, confirming interest,
            asking about timelines and budgets. Those calls are necessary, but
            they are not the best use of your time. VeraDial&apos;s AI handles
            the repetitive outbound work so you can focus on the conversations
            that actually close deals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" href="#how-it-helps">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Pain Points                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                The Problem
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Outbound sales calling is broken
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Sales teams face the same three problems every day. The work is
                repetitive, the calls get flagged, and the details disappear
                after the conversation ends. Here is what that looks like in
                practice.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PAIN_POINTS.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <item.icon size={20} className="text-text-muted" />
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
                src="/screenshots/raw-captures/ai-composer-updated.png"
                alt="VeraDial AI call composer with custom goals and presets"
                width={390}
                height={844}
                sizes="(max-width: 640px) calc(100vw - 3rem), 20rem"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              Set a goal and let the AI make the call
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  How VeraDial Solves It                                    */}
      {/* ---------------------------------------------------------- */}
      <section id="how-it-helps" className="relative py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              How VeraDial Solves It
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Every feature built for outbound sales
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial is not a generic business phone. It is an AI-powered
              calling platform designed for teams that live on outbound calls.
              Here is how each feature maps to your sales workflow.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((item, index) => (
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
      {/*  Pricing callout                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Card hover={false} className="p-8 text-center sm:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Simple Pricing
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                $9.99/month per line. That&apos;s it.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
                Every VeraDial subscription includes a dedicated US or Canadian
                number with STIR/SHAKEN A-level attestation, AI calling, call
                recording, transcripts, SMS, voicemail with transcription, Call
                Map, and caller profile. No per-seat pricing. No enterprise
                tiers. No feature gates. One plan with everything your sales
                team needs.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Example Scenario                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              A Day in the Life
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              How an SDR uses VeraDial in a single day
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Meet Jordan, an SDR at a B2B software company. Here is what a
              typical day looks like when AI handles the qualifying calls and
              Jordan focuses on closing.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {SCENARIO_STEPS.map((step, index) => (
              <ScrollReveal key={step.time} delay={index * 100}>
                <Card hover={false} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    {/* Time badge sidebar */}
                    <div className="flex shrink-0 items-center gap-3 border-b border-border bg-card/60 px-6 py-4 sm:w-48 sm:flex-col sm:justify-center sm:border-b-0 sm:border-r sm:py-8">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                        <step.icon size={20} className="text-accent" />
                      </div>
                      <span className="font-display text-lg font-semibold text-text-primary">
                        {step.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <h3 className="font-display text-xl font-semibold text-text-primary">
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
      {/*  Why sales teams choose VeraDial                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Why Sales Teams Choose VeraDial
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Built for the way outbound sales actually works
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Higher answer rates",
                description:
                  "STIR/SHAKEN A-level attestation means your calls display as verified on the recipient's phone. Prospects answer verified calls at significantly higher rates than calls flagged as unknown or spam. Every point of improvement in answer rate compounds across your daily call volume.",
              },
              {
                icon: Bot,
                title: "AI scales your outreach",
                description:
                  "One SDR can only make so many calls in a day. AI calling removes that bottleneck. Set up qualifying scripts, assign leads, and let the AI work through your list while you handle the high-value conversations. You get the transcripts and summaries — the AI handles the dialing.",
              },
              {
                icon: FileText,
                title: "Perfect call documentation",
                description:
                  "Every call produces a transcript and a summary. No more relying on memory or hastily typed CRM notes. Search across transcripts, share them with account executives, and reference exact quotes from prospect conversations. Your pipeline data reflects what was actually said.",
              },
              {
                icon: Mic,
                title: "Coaching from real calls",
                description:
                  "Call recording captures both sides of every conversation. Sales managers can review actual calls for coaching. New reps can study top-performer recordings. The best training material is the calls your team is already making — recording turns every dial into a learning opportunity.",
              },
              {
                icon: MapPin,
                title: "Visual territory management",
                description:
                  "The Call Map plots every call by region, giving you a bird's-eye view of your outreach territory. Identify coverage gaps, verify that AI calls are reaching the right areas, and track how your geographic outreach evolves week over week. Territory strategy becomes visual and immediate.",
              },
              {
                icon: ShieldCheck,
                title: "Professional identity on every call",
                description:
                  "Between your caller profile and STIR/SHAKEN verification, every outbound call presents a complete, trustworthy identity. Prospects can see your name, your company, and your website. They know who is calling before they answer. That trust is the foundation of every sales conversation.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60}>
                <Card hover={false} className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon size={20} className="text-accent" />
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

      {/* Use-case FAQ */}
      <UseCaseFAQ items={SALES_FAQS} heading="Sales FAQ" />

      {/* ---------------------------------------------------------- */}
      {/*  Bottom CTA                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Close More Deals?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Your AI-powered sales line.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                AI outbound calling, verified caller ID, full transcripts, call
                recording, and Call Map — everything a sales team needs to
                prospect smarter and close faster. $9.99/month.
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
