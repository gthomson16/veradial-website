import { DEMO_FUNNEL_CONTRACT_VERSION } from "./contract";

export type TranscriptRole = "user" | "assistant";

export type CallStatus =
  | "awaiting_verification"
  | "verified"
  | "dialing"
  | "initiated"
  | "ringing"
  | "in_progress"
  | "completed"
  | "failed"
  | "no_answer"
  | "busy"
  | "canceled"
  | "expired";

export type TranscriptIngressEvent = {
  botCallId: string;
  eventId: string;
  agentInstanceId: string;
  role: TranscriptRole;
  turnIndex: number;
  agentSequenceNumber: number;
  content: string;
  isFinal: boolean;
  source: "livekit-agent";
  provider?: "gemini" | "openai" | "xai" | "xai-pipelined";
  emittedAt: string;
};

export type StatusSseEvent = {
  type: "status";
  id?: string;
  botCallId: string;
  sequenceNumber: number;
  status: CallStatus;
  startedAt?: string;
  message?: string;
  contractVersion: typeof DEMO_FUNNEL_CONTRACT_VERSION | string;
};

export type TranscriptTurnSseEvent = TranscriptIngressEvent & {
  sequenceNumber: number;
  type: "transcript.partial" | "transcript.final";
  contractVersion: typeof DEMO_FUNNEL_CONTRACT_VERSION | string;
};

export type CallEndedSseEvent = {
  type: "call.ended";
  botCallId: string;
  sequenceNumber: number;
  status: Extract<CallStatus, "completed" | "failed" | "no_answer" | "busy" | "canceled">;
  summary: string | null;
  endedAt: string;
  contractVersion: typeof DEMO_FUNNEL_CONTRACT_VERSION | string;
};

export type TranscriptSseEvent = StatusSseEvent | TranscriptTurnSseEvent | CallEndedSseEvent;

export type Preset = {
  id: string;
  title: string;
  subtitle: string;
  goal: string;
};

export type Turn = {
  turnIndex: number;
  role: TranscriptRole;
  content: string;
  isFinal: boolean;
  sequenceNumber: number;
  updatedAt: string;
};

export type DemoCallCreateRequest = {
  preset: string;
  phone: string;
  consent: true;
  turnstileToken: string;
  copyVersion: string;
  contractVersion: string;
};

export type DemoCallCreateResponse = {
  id: string;
  status: Extract<CallStatus, "awaiting_verification">;
  verificationExpiresAt: string;
  smsFromNumber: string;
  nonce: string;
  listenToken: string;
  nextStep: "reply_yes_with_nonce";
  contractVersion: string;
};
