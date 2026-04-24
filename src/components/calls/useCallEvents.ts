"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DEMO_FUNNEL_CONTRACT_VERSION, isExpectedDemoContract } from "@/lib/calls/contract";
import { subscribeToMockCallEvents } from "@/lib/calls/mock";
import type { CallStatus, TranscriptSseEvent, Turn } from "@/lib/calls/types";

type UseCallEventsOptions = {
  endpoint: string;
  cancelEndpoint?: string;
  enabled?: boolean;
  useMock?: boolean;
  mockCallId?: string;
  fetchToken?: () => Promise<string>;
  expectedContractVersion?: string;
};

type ContractMismatch = {
  expected: string;
  received: string;
};

function appendQueryParam(url: string, key: string, value: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

function mergeTranscriptTurn(turns: Turn[], event: Extract<TranscriptSseEvent, { role: string }>) {
  const updatedTurn: Turn = {
    turnIndex: event.turnIndex,
    role: event.role,
    content: event.content,
    isFinal: event.isFinal,
    sequenceNumber: event.sequenceNumber,
    updatedAt: event.emittedAt,
  };

  const index = turns.findIndex((turn) => turn.turnIndex === event.turnIndex);
  if (index === -1) {
    return [...turns, updatedTurn].sort((a, b) => a.turnIndex - b.turnIndex);
  }

  const next = turns.slice();
  next[index] = updatedTurn;
  return next;
}

export function useCallEvents({
  endpoint,
  cancelEndpoint,
  enabled = true,
  useMock = false,
  mockCallId,
  fetchToken,
  expectedContractVersion = DEMO_FUNNEL_CONTRACT_VERSION,
}: UseCallEventsOptions) {
  const [status, setStatus] = useState<CallStatus>("awaiting_verification");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contractMismatch, setContractMismatch] = useState<ContractMismatch | null>(null);
  const closeRef = useRef<(() => void) | null>(null);

  const handleEvent = useCallback(
    (event: TranscriptSseEvent) => {
      if (!isExpectedDemoContract(event.contractVersion)) {
        setContractMismatch({
          expected: expectedContractVersion,
          received: event.contractVersion,
        });
      }

      if (event.type === "status") {
        setStatus(event.status);
        return;
      }

      if (event.type === "call.ended") {
        setStatus(event.status);
        setSummary(event.summary);
        setIsConnected(false);
        return;
      }

      setTurns((current) => mergeTranscriptTurn(current, event));
    },
    [expectedContractVersion],
  );

  useEffect(() => {
    if (!enabled) return;

    let disposed = false;
    setError(null);
    setContractMismatch(null);
    setIsConnected(false);

    if (useMock) {
      const close = subscribeToMockCallEvents({
        botCallId: mockCallId ?? "mock-demo-call",
        onOpen: () => {
          if (!disposed) setIsConnected(true);
        },
        onEvent: (event) => {
          if (!disposed) handleEvent(event);
        },
      });
      closeRef.current = close;
      return () => {
        disposed = true;
        close();
        closeRef.current = null;
      };
    }

    let source: EventSource | null = null;

    async function connect() {
      try {
        const token = fetchToken ? await fetchToken() : null;
        if (disposed) return;

        const eventSourceUrl = token ? appendQueryParam(endpoint, "token", token) : endpoint;
        source = new EventSource(eventSourceUrl);
        closeRef.current = () => source?.close();

        source.onopen = () => {
          setIsConnected(true);
          setError(null);
        };

        source.onerror = () => {
          setIsConnected(false);
          setError("Live updates disconnected. Reconnecting...");
        };

        const readEvent = (message: MessageEvent<string>) => {
          try {
            handleEvent(JSON.parse(message.data) as TranscriptSseEvent);
          } catch {
            setError("Received an unreadable call update.");
          }
        };

        source.addEventListener("status", readEvent);
        source.addEventListener("transcript.partial", readEvent);
        source.addEventListener("transcript.final", readEvent);
        source.addEventListener("call.ended", readEvent);
      } catch {
        if (!disposed) {
          setError("Unable to connect to live call updates.");
        }
      }
    }

    void connect();

    return () => {
      disposed = true;
      source?.close();
      closeRef.current = null;
    };
  }, [enabled, endpoint, expectedContractVersion, fetchToken, handleEvent, mockCallId, useMock]);

  const cancel = useCallback(async () => {
    if (isCanceling) return;
    setIsCanceling(true);

    try {
      if (useMock || !cancelEndpoint) {
        closeRef.current?.();
        setStatus("canceled");
        setIsConnected(false);
        return;
      }

      const response = await fetch(cancelEndpoint, { method: "POST" });
      if (!response.ok) {
        throw new Error("Cancel failed");
      }
      setStatus("canceled");
      setIsConnected(false);
    } catch {
      setError("Unable to cancel the call.");
    } finally {
      setIsCanceling(false);
    }
  }, [cancelEndpoint, isCanceling, useMock]);

  return {
    status,
    turns,
    summary,
    isConnected,
    isCanceling,
    error,
    contractMismatch,
    cancel,
  };
}
