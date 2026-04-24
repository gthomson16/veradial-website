import { DEMO_FUNNEL_CONTRACT_VERSION } from "./contract";
import type {
  DemoCallCreateResponse,
  StatusSseEvent,
  TranscriptSseEvent,
  TranscriptTurnSseEvent,
} from "./types";

const MOCK_SMS_FROM_NUMBER = "+15555550101";

function randomId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function nowIso() {
  return new Date().toISOString();
}

export function createMockDemoCallResponse(): DemoCallCreateResponse {
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

  return {
    id: randomId("demo"),
    status: "awaiting_verification",
    verificationExpiresAt: expiresAt,
    smsFromNumber: MOCK_SMS_FROM_NUMBER,
    nonce: "4829",
    listenToken: randomId("listen"),
    nextStep: "reply_yes_with_nonce",
    contractVersion: DEMO_FUNNEL_CONTRACT_VERSION,
  };
}

type MockSubscriptionOptions = {
  botCallId: string;
  onEvent: (event: TranscriptSseEvent) => void;
  onOpen?: () => void;
};

function statusEvent(
  botCallId: string,
  sequenceNumber: number,
  status: StatusSseEvent["status"],
  message?: string,
): StatusSseEvent {
  return {
    type: "status",
    botCallId,
    sequenceNumber,
    status,
    message,
    startedAt: nowIso(),
    contractVersion: DEMO_FUNNEL_CONTRACT_VERSION,
  };
}

function transcriptEvent(
  botCallId: string,
  sequenceNumber: number,
  turnIndex: number,
  role: TranscriptTurnSseEvent["role"],
  content: string,
  isFinal: boolean,
): TranscriptTurnSseEvent {
  return {
    type: isFinal ? "transcript.final" : "transcript.partial",
    botCallId,
    eventId: randomId("evt"),
    agentInstanceId: "mock-agent",
    role,
    turnIndex,
    agentSequenceNumber: sequenceNumber,
    content,
    isFinal,
    source: "livekit-agent",
    provider: "xai-pipelined",
    emittedAt: nowIso(),
    sequenceNumber,
    contractVersion: DEMO_FUNNEL_CONTRACT_VERSION,
  };
}

export function subscribeToMockCallEvents({
  botCallId,
  onEvent,
  onOpen,
}: MockSubscriptionOptions) {
  const timers: ReturnType<typeof setTimeout>[] = [];

  const script: Array<{ delayMs: number; event: TranscriptSseEvent }> = [
    {
      delayMs: 250,
      event: statusEvent(botCallId, 1, "awaiting_verification", "Waiting for SMS verification"),
    },
    {
      delayMs: 1100,
      event: statusEvent(botCallId, 2, "ringing", "Calling the recipient"),
    },
    {
      delayMs: 2300,
      event: statusEvent(botCallId, 3, "in_progress", "Call connected"),
    },
    {
      delayMs: 3100,
      event: transcriptEvent(botCallId, 4, 0, "assistant", "Hi, this is VeraDial calling", false),
    },
    {
      delayMs: 3800,
      event: transcriptEvent(
        botCallId,
        5,
        0,
        "assistant",
        "Hi, this is VeraDial calling on behalf of Alex. Is now a good time?",
        true,
      ),
    },
    {
      delayMs: 5200,
      event: transcriptEvent(botCallId, 6, 1, "user", "Yes, I have a minute", true),
    },
    {
      delayMs: 6500,
      event: transcriptEvent(botCallId, 7, 2, "assistant", "Great. Alex wanted to confirm", false),
    },
    {
      delayMs: 7300,
      event: transcriptEvent(
        botCallId,
        8,
        2,
        "assistant",
        "Great. Alex wanted to confirm your appointment for Thursday at 2 PM. Does that still work?",
        true,
      ),
    },
    {
      delayMs: 8800,
      event: transcriptEvent(botCallId, 9, 3, "user", "Thursday at two works", true),
    },
    {
      delayMs: 10100,
      event: transcriptEvent(
        botCallId,
        10,
        4,
        "assistant",
        "Perfect. I will let Alex know. Thanks for your time.",
        true,
      ),
    },
    {
      delayMs: 11300,
      event: {
        type: "call.ended",
        botCallId,
        sequenceNumber: 11,
        status: "completed",
        summary: "Recipient confirmed the Thursday 2 PM appointment.",
        endedAt: nowIso(),
        contractVersion: DEMO_FUNNEL_CONTRACT_VERSION,
      },
    },
  ];

  timers.push(
    setTimeout(() => {
      onOpen?.();
    }, 50),
  );

  for (const item of script) {
    timers.push(
      setTimeout(() => {
        onEvent(item.event);
      }, item.delayMs),
    );
  }

  return () => {
    for (const timer of timers) {
      clearTimeout(timer);
    }
  };
}
