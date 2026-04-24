import type { CallStatus as CallStatusValue } from "@/lib/calls/types";

type CallStatusProps = {
  status: CallStatusValue;
  startedAt?: string;
};

const statusLabels: Record<CallStatusValue, string> = {
  awaiting_verification: "Awaiting SMS",
  verified: "Verified",
  dialing: "Dialing",
  initiated: "Starting",
  ringing: "Ringing",
  in_progress: "Live",
  completed: "Completed",
  failed: "Failed",
  no_answer: "No answer",
  busy: "Busy",
  canceled: "Canceled",
  expired: "Expired",
};

const statusSubtitles: Record<CallStatusValue, string> = {
  awaiting_verification: "Reply to the verification text to authorize the demo call.",
  verified: "Verification received. Preparing the call.",
  dialing: "The AI assistant is dialing now.",
  initiated: "The call request has started.",
  ringing: "The recipient phone is ringing.",
  in_progress: "The conversation is streaming live.",
  completed: "The call has ended successfully.",
  failed: "The call could not be completed.",
  no_answer: "The recipient did not answer.",
  busy: "The recipient line was busy.",
  canceled: "The call was canceled.",
  expired: "The verification window expired.",
};

export function CallStatus({ status, startedAt }: CallStatusProps) {
  const isLive = status === "in_progress" || status === "ringing" || status === "dialing";
  const isTerminal = ["completed", "failed", "no_answer", "busy", "canceled", "expired"].includes(status);

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            Call status
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {statusLabels[status]}
          </h2>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
            isLive
              ? "bg-accent text-bg"
              : isTerminal
                ? "bg-surface text-text-secondary"
                : "bg-accent/[0.08] text-accent"
          }`}
        >
          {isLive ? (
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-bg"
              style={{ animation: "call-pulse 1.8s ease-out infinite" }}
            />
          ) : null}
          {statusLabels[status]}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">{statusSubtitles[status]}</p>
      {startedAt ? <p className="mt-3 text-xs text-text-muted">Started {startedAt}</p> : null}
    </div>
  );
}
