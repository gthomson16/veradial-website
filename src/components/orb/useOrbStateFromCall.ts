"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import type { CallStatus, Turn } from "@/lib/calls/types";

import type { OrbState } from "./orbStates";

const TRANSCRIPT_DECAY_MS = 700;

export function mapCallStatusToOrbState(status: CallStatus): OrbState {
  switch (status) {
    case "awaiting_verification":
      return "waiting_for_agent";
    case "verified":
    case "dialing":
    case "initiated":
    case "ringing":
      return "waiting_for_callee";
    case "in_progress":
      return "live_idle";
    case "completed":
      return "completed";
    case "failed":
    case "no_answer":
    case "busy":
    case "canceled":
    case "expired":
      return "muted_failure";
  }
}

type TranscriptRole = "user" | "assistant" | null;

class TranscriptDecayStore {
  private listeners = new Set<() => void>();
  private timer: number | null = null;
  private activeRole: TranscriptRole = null;

  subscribe = (cb: () => void) => {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  };

  getSnapshot = (): TranscriptRole => this.activeRole;

  pulse(role: Exclude<TranscriptRole, null>, emittedAtMs: number) {
    if (this.timer !== null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    const remaining = TRANSCRIPT_DECAY_MS - (Date.now() - emittedAtMs);
    if (remaining <= 0) {
      this.setActive(null);
      return;
    }
    this.setActive(role);
    this.timer = window.setTimeout(() => {
      this.timer = null;
      this.setActive(null);
    }, remaining);
  }

  clear() {
    if (this.timer !== null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    this.setActive(null);
  }

  private setActive(next: TranscriptRole) {
    if (this.activeRole === next) return;
    this.activeRole = next;
    this.listeners.forEach((cb) => cb());
  }
}

const SERVER_SNAPSHOT: TranscriptRole = null;
const getServerSnapshot = (): TranscriptRole => SERVER_SNAPSHOT;

export function useOrbStateFromCall(status: CallStatus, turns: Turn[]): OrbState {
  const [store] = useState(() => new TranscriptDecayStore());

  useEffect(() => {
    if (status !== "in_progress" || turns.length === 0) {
      store.clear();
      return;
    }
    const last = turns[turns.length - 1];
    store.pulse(last.role, new Date(last.updatedAt).getTime());
  }, [status, turns, store]);

  const activeRole = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    getServerSnapshot,
  );

  if (status !== "in_progress") return mapCallStatusToOrbState(status);
  if (activeRole === null) return "live_idle";
  return activeRole === "assistant" ? "agent_speaking" : "callee_speaking";
}
