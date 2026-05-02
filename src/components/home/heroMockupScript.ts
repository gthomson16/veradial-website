import type { OrbState } from "@/components/orb/orbStates";

export type MockupPhase =
  | "inbound:ringing"
  | "inbound:caller_speaks"
  | "inbound:ai_speaks"
  | "inbound:result"
  | "handoff"
  | "outbound:dialing"
  | "outbound:ai_speaks"
  | "outbound:caller_speaks"
  | "outbound:result"
  | "pause";

export type ModeTone = "screening" | "follow-up";

export type Bubble = {
  role: "ai" | "caller";
  text: string;
};

export type MockupFrame = {
  phase: MockupPhase;
  durationMs: number;
  modePill: { text: string; tone: ModeTone };
  bubbles: Bubble[];
  result?: { headline: string; sub?: string };
  showActionChip?: boolean;
};

export const MOCKUP_CONTACT = {
  name: "Sarah Chen",
  phoneFull: "+1 (512) 555-0142",
  phoneShort: "(•••) 0142",
  initial: "S",
} as const;

const PILL_INBOUND = {
  text: "AI screening",
  tone: "screening",
} as const;

const PILL_OUTBOUND = {
  text: "AI follow-up",
  tone: "follow-up",
} as const;

const CALLER_INBOUND: Bubble = {
  role: "caller",
  text: "Hi, I need an electrician for my kitchen — can you come Tuesday?",
};

const AI_INBOUND: Bubble = {
  role: "ai",
  text: "I'll have Mike call you back about Tuesday. What's the best number?",
};

const AI_OUTBOUND: Bubble = {
  role: "ai",
  text: "Hi Sarah — calling on behalf of Smith Electric, following up on your kitchen request.",
};

const CALLER_OUTBOUND: Bubble = {
  role: "caller",
  text: "Yes, I'd love to schedule a quote visit.",
};

const INBOUND_RESULT = {
  headline: "Captured Sarah's request",
  sub: "Wants Tuesday quote for kitchen work.",
};

const OUTBOUND_RESULT = {
  headline: "Sarah confirmed she wants a quote visit",
  sub: "Best time: Tuesday.",
};

export const HERO_MOCKUP_FRAMES: MockupFrame[] = [
  {
    phase: "inbound:ringing",
    durationMs: 800,
    modePill: PILL_INBOUND,
    bubbles: [],
  },
  {
    phase: "inbound:caller_speaks",
    durationMs: 1600,
    modePill: PILL_INBOUND,
    bubbles: [CALLER_INBOUND],
  },
  {
    phase: "inbound:ai_speaks",
    durationMs: 1600,
    modePill: PILL_INBOUND,
    bubbles: [CALLER_INBOUND, AI_INBOUND],
  },
  {
    phase: "inbound:result",
    durationMs: 1400,
    modePill: PILL_INBOUND,
    bubbles: [CALLER_INBOUND, AI_INBOUND],
    result: INBOUND_RESULT,
  },
  {
    phase: "handoff",
    durationMs: 1100,
    modePill: PILL_INBOUND,
    bubbles: [CALLER_INBOUND, AI_INBOUND],
    result: INBOUND_RESULT,
    showActionChip: true,
  },
  {
    phase: "outbound:dialing",
    durationMs: 700,
    modePill: PILL_OUTBOUND,
    bubbles: [],
  },
  {
    phase: "outbound:ai_speaks",
    durationMs: 1600,
    modePill: PILL_OUTBOUND,
    bubbles: [AI_OUTBOUND],
  },
  {
    phase: "outbound:caller_speaks",
    durationMs: 1500,
    modePill: PILL_OUTBOUND,
    bubbles: [AI_OUTBOUND, CALLER_OUTBOUND],
  },
  {
    phase: "outbound:result",
    durationMs: 1700,
    modePill: PILL_OUTBOUND,
    bubbles: [AI_OUTBOUND, CALLER_OUTBOUND],
    result: OUTBOUND_RESULT,
  },
  {
    phase: "pause",
    durationMs: 900,
    modePill: PILL_OUTBOUND,
    bubbles: [AI_OUTBOUND, CALLER_OUTBOUND],
    result: OUTBOUND_RESULT,
  },
];

export const HERO_MOCKUP_FINAL_INDEX = HERO_MOCKUP_FRAMES.findIndex(
  (f) => f.phase === "outbound:result",
);

export const HERO_MOCKUP_FINAL_FRAME =
  HERO_MOCKUP_FRAMES[HERO_MOCKUP_FINAL_INDEX];

export function mapPhaseToOrbState(phase: MockupPhase): OrbState {
  switch (phase) {
    case "inbound:ringing":
    case "outbound:dialing":
      return "waiting_for_callee";
    case "inbound:caller_speaks":
    case "outbound:caller_speaks":
      return "callee_speaking";
    case "inbound:ai_speaks":
    case "outbound:ai_speaks":
      return "agent_speaking";
    case "inbound:result":
    case "outbound:result":
    case "pause":
    case "handoff":
      return "completed";
  }
}

export function isPageTurnTransition(
  prev: MockupPhase,
  next: MockupPhase,
): boolean {
  if (prev === "handoff" && next === "outbound:dialing") return true;
  if (prev === "pause" && next === "inbound:ringing") return true;
  return false;
}

export function isInboundPhase(phase: MockupPhase): boolean {
  return phase.startsWith("inbound:") || phase === "handoff";
}
