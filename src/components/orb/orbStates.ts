export type OrbState =
  | "connecting"
  | "waiting_for_agent"
  | "waiting_for_callee"
  | "agent_speaking"
  | "callee_speaking"
  | "live_idle"
  | "stepped_in"
  | "stepout_failed"
  | "completed"
  | "muted_failure";

export type OrbStateConfig = {
  color: string;
  rotationSpeedRadPerSec: number;
  baseScale: number;
  baseBrightness: number;
  // Multiplier applied to the synthetic speech-amplitude pulse (scale +
  // brightness). 1.0 = full pulse (someone is talking). 0 = calm/no pulse.
  amplitudeScale: number;
};

export const ORB_STATE_CONFIG: Record<OrbState, OrbStateConfig> = {
  connecting: {
    color: "#00D4AA",
    rotationSpeedRadPerSec: 0.18,
    baseScale: 0.92,
    baseBrightness: 0.55,
    amplitudeScale: 0.5,
  },
  waiting_for_agent: {
    color: "#00D4AA",
    rotationSpeedRadPerSec: 0.18,
    baseScale: 0.92,
    baseBrightness: 0.6,
    amplitudeScale: 0.4,
  },
  waiting_for_callee: {
    color: "#00D4AA",
    rotationSpeedRadPerSec: 0.28,
    baseScale: 0.96,
    baseBrightness: 0.7,
    amplitudeScale: 0.4,
  },
  agent_speaking: {
    color: "#3CFFB8",
    rotationSpeedRadPerSec: 0.6,
    baseScale: 1.0,
    baseBrightness: 0.92,
    amplitudeScale: 1.0,
  },
  callee_speaking: {
    color: "#3CC9FF",
    rotationSpeedRadPerSec: 0.22,
    baseScale: 1.0,
    baseBrightness: 0.8,
    amplitudeScale: 0.6,
  },
  live_idle: {
    color: "#00D4AA",
    rotationSpeedRadPerSec: 0.32,
    baseScale: 0.98,
    baseBrightness: 0.78,
    amplitudeScale: 0.3,
  },
  stepped_in: {
    color: "#9AA3AF",
    rotationSpeedRadPerSec: 0.2,
    baseScale: 0.96,
    baseBrightness: 0.5,
    amplitudeScale: 0.2,
  },
  stepout_failed: {
    color: "#9AA3AF",
    rotationSpeedRadPerSec: 0.2,
    baseScale: 0.96,
    baseBrightness: 0.6,
    amplitudeScale: 0,
  },
  completed: {
    color: "#00B585",
    rotationSpeedRadPerSec: 0.15,
    baseScale: 0.96,
    baseBrightness: 0.55,
    amplitudeScale: 0,
  },
  muted_failure: {
    color: "#5A6B70",
    rotationSpeedRadPerSec: 0.1,
    baseScale: 0.94,
    baseBrightness: 0.5,
    amplitudeScale: 0,
  },
};

export const DEFAULT_ORB_STATE: OrbState = "agent_speaking";
