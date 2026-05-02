"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Phone } from "lucide-react";

import { FallbackOrb } from "@/components/orb/FallbackOrb";
import { OrbCanvas } from "@/components/orb/OrbCanvas";

import {
  HERO_MOCKUP_FINAL_INDEX,
  HERO_MOCKUP_FRAMES,
  MOCKUP_CONTACT,
  isInboundPhase,
  mapPhaseToOrbState,
  type Bubble,
  type MockupFrame,
  type ModeTone,
} from "./heroMockupScript";

const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const getReducedMotionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getReducedMotionServerSnapshot = () => false;

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

const MOBILE_QUERY = "(max-width: 639.98px)";

const subscribeMobile = (cb: () => void) => {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const getMobileSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;

const getMobileServerSnapshot = () => false;

function useIsMobile(): boolean {
  return useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );
}

function ModePill({ text, tone }: { text: string; tone: ModeTone }) {
  const isInbound = tone === "screening";
  return (
    <div
      key={tone}
      className={`hero-mockup-pill inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${
        isInbound
          ? "border border-accent/30 bg-accent/10 text-accent"
          : "border border-accent-secondary/35 bg-accent-secondary/12 text-accent-secondary"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-flex h-1 w-1 rounded-full ${
          isInbound ? "bg-accent" : "bg-accent-secondary"
        }`}
      />
      <span className="min-w-0 truncate">{text}</span>
    </div>
  );
}

function ContactHeader({ phase }: { phase: MockupFrame["phase"] }) {
  const showShortPhone = phase === "outbound:dialing";
  return (
    <div className="flex items-center gap-2.5 px-1">
      <div className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-card text-[11px] font-semibold text-text-primary ring-1 ring-accent/35">
        {MOCKUP_CONTACT.initial}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-semibold text-text-primary">
          {MOCKUP_CONTACT.name}
        </p>
        <p className="truncate text-[9px] text-text-muted">
          {showShortPhone
            ? "Calling…"
            : MOCKUP_CONTACT.phoneShort}
        </p>
      </div>
      <Phone
        size={11}
        strokeWidth={2.4}
        aria-hidden="true"
        className={`shrink-0 ${
          isInboundPhase(phase) ? "text-accent" : "text-accent-secondary"
        }`}
      />
    </div>
  );
}

function OrbStage({ state }: { state: ReturnType<typeof mapPhaseToOrbState> }) {
  const showRing = state === "agent_speaking";
  return (
    <div className="relative grid h-32 w-full place-items-center sm:h-36">
      <div
        className="relative h-32 w-32 sm:h-36 sm:w-36"
        style={{
          maskImage:
            "radial-gradient(circle closest-side at center, #000 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle closest-side at center, #000 72%, transparent 100%)",
        }}
      >
        <FallbackOrb state={state} />
        <OrbCanvas state={state} />
      </div>
      {showRing ? (
        <span
          aria-hidden="true"
          className="hero-mockup-ring pointer-events-none absolute h-24 w-24 rounded-full border border-accent/45 sm:h-28 sm:w-28"
        />
      ) : null}
    </div>
  );
}

function BubbleNode({ bubble }: { bubble: Bubble }) {
  const isAi = bubble.role === "ai";
  return (
    <div
      className={`hero-mockup-bubble flex ${isAi ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-1.5 text-[11.5px] leading-snug ${
          isAi
            ? "rounded-bl-sm border border-accent/25 bg-accent/[0.08] text-text-primary"
            : "rounded-br-sm border border-white/8 bg-card text-text-secondary"
        }`}
      >
        <p>{bubble.text}</p>
      </div>
    </div>
  );
}

function BubbleStack({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <div className="flex min-h-[68px] flex-col gap-1.5 px-1">
      {bubbles.map((bubble) => (
        <BubbleNode
          key={`${bubble.role}-${bubble.text.slice(0, 16)}`}
          bubble={bubble}
        />
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      className="hero-mockup-check shrink-0 text-accent"
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M4.5 8.2l2.4 2.4 4.6-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResultCard({
  headline,
  sub,
  contentKey,
}: {
  headline: string;
  sub?: string;
  contentKey: string;
}) {
  return (
    <div
      key={contentKey}
      className="hero-mockup-result rounded-xl border border-accent/30 bg-card-hover/90 px-3.5 py-2.5 shadow-[0_8px_24px_rgba(115,242,195,0.10)]"
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5">
          <CheckIcon key={`${contentKey}-check`} />
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold leading-tight text-text-primary">
            {headline}
          </p>
          {sub ? (
            <p className="mt-1 text-[10.5px] leading-snug text-text-muted">
              {sub}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ActionChip({ text }: { text: string }) {
  return (
    <div
      className="hero-mockup-chip relative overflow-hidden rounded-xl border border-accent/35 bg-surface/80 px-3.5 py-2.5"
      role="presentation"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11.5px] font-semibold text-text-primary">
          {text}
        </span>
        <ArrowRight
          size={12}
          strokeWidth={2.4}
          className="shrink-0 text-accent"
          aria-hidden="true"
        />
      </div>
      <span
        aria-hidden="true"
        className="hero-mockup-chip-shimmer pointer-events-none absolute inset-0"
      />
    </div>
  );
}

function PhaseScreen({ frame }: { frame: MockupFrame }) {
  const sideKey = isInboundPhase(frame.phase) ? "inbound" : "outbound";
  const orbState = mapPhaseToOrbState(frame.phase);
  return (
    <div
      key={sideKey}
      className="hero-mockup-screen flex h-full flex-col gap-3 px-4 pt-3"
    >
      <div className="flex items-center justify-between">
        <ModePill text={frame.modePill.text} tone={frame.modePill.tone} />
      </div>
      <ContactHeader phase={frame.phase} />
      <OrbStage state={orbState} />
      <div className="flex flex-1 flex-col gap-2">
        <BubbleStack bubbles={frame.bubbles} />
        <div className="flex flex-col gap-1.5">
          {frame.result ? (
            <ResultCard
              contentKey={`${sideKey}-${frame.result.headline}`}
              headline={frame.result.headline}
              sub={frame.result.sub}
            />
          ) : null}
          {frame.showActionChip ? (
            <ActionChip text="Have AI follow up about the quote" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

const FIRST_TICK_MS = 1700;
const RINGING_INDEX = HERO_MOCKUP_FRAMES.findIndex(
  (f) => f.phase === "inbound:ringing",
);
const POST_RINGING_INDEX = RINGING_INDEX + 1;

export function HeroPhoneMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [inView, setInView] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [frameIndex, setFrameIndex] = useState(HERO_MOCKUP_FINAL_INDEX);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (!inView || hovered) return;

    const startIndex = isMobile ? POST_RINGING_INDEX : RINGING_INDEX;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      const startTimer = window.setTimeout(
        () => setFrameIndex(startIndex),
        FIRST_TICK_MS,
      );
      return () => window.clearTimeout(startTimer);
    }

    const frame = HERO_MOCKUP_FRAMES[frameIndex];
    const timer = window.setTimeout(() => {
      setFrameIndex((i) => {
        const next = (i + 1) % HERO_MOCKUP_FRAMES.length;
        if (isMobile && next === RINGING_INDEX) return POST_RINGING_INDEX;
        return next;
      });
    }, frame.durationMs);
    return () => window.clearTimeout(timer);
  }, [frameIndex, reducedMotion, inView, hovered, isMobile]);

  const frame = HERO_MOCKUP_FRAMES[frameIndex];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative flex flex-1 flex-col"
      aria-hidden="true"
    >
      <PhaseScreen frame={frame} />
    </div>
  );
}
