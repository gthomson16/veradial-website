"use client";

import { useEffect, useRef } from "react";
import type { Turn } from "@/lib/calls/types";

type LiveTranscriptProps = {
  turns: Turn[];
  dense?: boolean;
  summary?: string | null;
};

export function LiveTranscript({ turns, dense = false, summary }: LiveTranscriptProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [turns]);

  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          Live transcript
        </p>
      </div>

      <div className={`${dense ? "max-h-[360px]" : "max-h-[520px]"} overflow-y-auto px-4 py-5`}>
        {turns.length === 0 ? (
          <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border bg-surface/60 px-6 text-center text-sm leading-relaxed text-text-muted">
            The transcript appears here once the recipient answers.
          </div>
        ) : (
          <div className="space-y-4">
            {turns.map((turn) => {
              const isAssistant = turn.role === "assistant";
              return (
                <div
                  key={turn.turnIndex}
                  className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-4 py-3 ${
                      isAssistant
                        ? "bg-surface text-text-primary"
                        : "bg-accent text-bg"
                    } ${turn.isFinal ? "" : "opacity-70"}`}
                  >
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] opacity-70">
                      {isAssistant ? "AI assistant" : "Recipient"}
                    </p>
                    <p className="text-sm leading-relaxed">{turn.content}</p>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {summary ? (
        <div className="border-t border-border bg-surface px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Summary
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{summary}</p>
        </div>
      ) : null}
    </div>
  );
}
