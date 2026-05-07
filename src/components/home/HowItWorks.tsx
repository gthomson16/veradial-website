"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneOutgoing, Target, FileText } from "lucide-react";
import { StoreButton } from "@/components/ui/StoreButton";
import { GOOGLE_PLAY_URL } from "@/lib/constants";
import { HeroDemoPlayer } from "./HeroDemoPlayer";

function NumberArtifact() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-card/60 p-4">
      <div className="flex items-baseline gap-2 font-display text-lg font-semibold text-text-primary">
        <span className="text-accent">+1</span>
        <span className="tabular-nums">(415) 555-0100</span>
      </div>
      <p className="mt-1 text-xs text-text-muted">
        San Francisco &middot; Assigned in 60 seconds
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {[
          "A-level STIR/SHAKEN",
          "SOC 2 routed",
          "Not shared, not recycled",
        ].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-accent/20 bg-accent/8 px-2 py-0.5 text-[11px] text-accent"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

function BriefArtifact() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-card/60 p-4">
      <p className="text-[10px] uppercase tracking-[0.24em] text-text-muted">
        Goal
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-primary">
        Follow up on the quote request that just came in from the website.
      </p>
      <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-text-muted">
        Notes for the AI
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Ask what the job involves and the best callback time. Tell them John
        will send a quote today. If no answer, leave a voicemail.
      </p>
    </div>
  );
}

function HandoffArtifact() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card/60">
      <div className="p-4">
        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-text-muted">
          Demo call &middot; 31 seconds
        </p>
        <HeroDemoPlayer />
      </div>
      <div className="space-y-2.5 border-t border-border bg-bg/30 p-4 text-sm leading-relaxed">
        <p className="text-text-secondary">
          <span className="mr-2 inline-block min-w-[3.25rem] text-[10px] uppercase tracking-[0.22em] text-accent">
            AI
          </span>
          &ldquo;Hi, this is the AI assistant for John&rsquo;s Electrical. We
          just received your quote request &mdash; can you tell me a bit more
          about the job?&rdquo;
        </p>
        <p className="text-text-secondary">
          <span className="mr-2 inline-block min-w-[3.25rem] text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-secondary)]">
            Client
          </span>
          &ldquo;Yeah, I need some outlets added in my garage, probably four or
          five.&rdquo;
        </p>
        <p className="text-text-secondary">
          <span className="mr-2 inline-block min-w-[3.25rem] text-[10px] uppercase tracking-[0.22em] text-accent">
            AI
          </span>
          &ldquo;Got it. I&rsquo;ll pass this along to John and he&rsquo;ll get
          you a quote today.&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-2 border-t border-border px-4 py-3 text-xs text-text-muted">
        <span
          aria-hidden="true"
          className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
        />
        Transcript and summary delivered to your phone
      </div>
    </div>
  );
}

const STEPS = [
  {
    number: "01",
    kicker: "Provision",
    title: "Get a verified number",
    description:
      "Pick a US or Canadian number in the area code you want. Yours alone, registered for A-level STIR/SHAKEN so it actually gets picked up.",
    icon: PhoneOutgoing,
    Artifact: NumberArtifact,
  },
  {
    number: "02",
    kicker: "Brief",
    title: "Write the call brief",
    description:
      "Describe the goal and add notes. The AI stays on the brief \u2014 it won\u2019t improvise past what you wrote or share anything you didn\u2019t include.",
    icon: Target,
    Artifact: BriefArtifact,
  },
  {
    number: "03",
    kicker: "Handoff",
    title: "Listen when it hangs up",
    description:
      "The AI dials, handles hold queues and phone trees, and pings you in-app if it gets stuck. Audio, transcript, and summary land on your phone.",
    icon: FileText,
    Artifact: HandoffArtifact,
  },
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(() =>
    prefersReducedMotion() ? 1 : 0
  );

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = vh * 0.25;
      const travelled = start - rect.top;
      const total = start - end + rect.height;
      const p = Math.max(0, Math.min(1, travelled / total));
      setProgress(p);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <section id="how-it-works" className="relative overflow-hidden py-28 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="min-w-0 lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-accent/50"
            />
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
              The Flow
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
            Three steps.
            <span className="block text-text-muted">Then it calls.</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-text-secondary sm:text-lg">
            No onboarding call, no sales demo, no &ldquo;let&rsquo;s hop on a
            call.&rdquo; Pick a number, brief the AI, and listen when it hangs
            up.
          </p>
        </div>

        <div>
          <div ref={timelineRef} className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[22px] top-3 bottom-3 w-px bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0_5px,transparent_5px_11px)]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[22px] top-3 w-px bg-accent shadow-[0_0_12px_var(--color-accent-glow)]"
              style={{
                height: `calc(${progress} * (100% - 24px))`,
                transition: "height 140ms linear",
              }}
            />

            <ol className="list-none">
              {STEPS.map((step) => (
                <li
                  key={step.number}
                  className="relative grid grid-cols-[46px_1fr] gap-5 pb-16 last:pb-0 sm:grid-cols-[52px_1fr] sm:gap-8"
                >
                  <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-border bg-bg">
                    <step.icon
                      size={18}
                      className="text-text-secondary"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 pt-1">
                    <span
                      aria-hidden="true"
                      className="block font-display text-[3.75rem] font-extralight leading-[0.85] tracking-[-0.05em] text-white/35 sm:text-[6rem]"
                    >
                      {step.number}
                    </span>
                    <p className="-mt-3 text-xs uppercase tracking-[0.26em] text-[var(--color-accent-secondary)] sm:-mt-5">
                      {step.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                    <step.Artifact />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-text-muted">
              Verified caller ID. The AI always identifies itself as your
              assistant. Stop the call from the app anytime.
            </p>
            <StoreButton
              analyticsLocation="home_how_it_works"
              href={GOOGLE_PLAY_URL}
              platform="google_play"
            >
              Start 7-day trial &rarr;
            </StoreButton>
          </div>
        </div>
      </div>
    </section>
  );
}
