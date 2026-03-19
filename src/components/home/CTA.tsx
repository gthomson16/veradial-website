"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StoreBadges } from "@/components/ui/StoreBadges";

function CTAWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-medium text-accent">
        You&apos;re on the list! We&apos;ll email you when VeraDial launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent/50"
      />
      <Button variant="primary" type="submit">
        Get Early Access
      </Button>
    </form>
  );
}

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
              Let AI handle the calls you don&apos;t want to make.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
              Coming soon to iOS and Android. Join the waitlist to get early
              access.
            </p>
            <div className="mt-8">
              <CTAWaitlistForm />
            </div>
            <p className="mt-3 text-xs text-text-muted">
              No spam. We&apos;ll email you when the app launches.
            </p>
            <StoreBadges className="mt-6 justify-center" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
