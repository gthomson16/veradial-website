"use client";

import { TRUST_SIGNALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SignalStrip() {
  return (
    <section className="relative border-y border-border bg-surface/65">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <ScrollReveal>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_repeat(4,1fr)] lg:items-center">
            <div className="max-w-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Trust Layer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Designed for people who depend on a clean caller identity, fast
                setup, and reliable follow-up from the same number.
              </p>
            </div>

            {TRUST_SIGNALS.map((signal, index) => (
              <div
                key={signal.title}
                className={`rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm ${
                  index === TRUST_SIGNALS.length - 1 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <signal.icon size={18} strokeWidth={1.8} />
                  </div>
                  <p className="font-display text-lg text-text-primary">
                    {signal.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {signal.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
