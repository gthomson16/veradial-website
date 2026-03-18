"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StoreBadges } from "@/components/ui/StoreBadges";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Ready When You Are
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Put a verified identity behind every outbound call.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
              Coming soon to iOS and Android.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" href="mailto:support@veradial.com">
                Email Support
              </Button>
            </div>
            <StoreBadges className="mt-6 justify-center" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
