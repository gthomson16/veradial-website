"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const DIFFERENTIATORS = [
  {
    others: "Expensive plans with unused minutes",
    veradial: "$9.99/mo with 100 credits included",
  },
  {
    others: "Calls flagged as spam or unknown",
    veradial: "A-level verified caller ID (STIR/SHAKEN)",
  },
  {
    others: "You still make every call yourself",
    veradial: "AI makes calls and sends you the transcript",
  },
  {
    others: "No voicemail, no forwarding, no screening",
    veradial: "Voicemail transcription, forwarding, and AI call screening",
  },
] as const;

export function Differentiators() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
            What&apos;s Different
          </p>
          <h2 className="mt-5 max-w-lg font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            Not another second number app.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            Most business phone tools give you a number and leave you to do the
            work. VeraDial does the calling for you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item, index) => (
            <ScrollReveal key={item.veradial} delay={index * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/20">
                {/* "Others" line */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-[11px] text-text-muted">
                    &times;
                  </span>
                  <p className="text-sm leading-relaxed text-text-muted line-through decoration-text-muted/30">
                    {item.others}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-border" />

                {/* "VeraDial" line */}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-[11px] text-accent">
                    &#10003;
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-text-primary">
                    {item.veradial}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
