"use client";

import Image from "next/image";
import { APP_PRIMARY_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Ready When You Are
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Put a verified identity behind every outbound call.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
              Available on iOS. Android coming soon.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="primary" href={APP_PRIMARY_URL}>
                Request iOS Access
              </Button>
              <Button variant="ghost" href="mailto:support@veradial.com">
                Email Support
              </Button>
            </div>
            <a href={APP_PRIMARY_URL} className="mt-6 inline-block">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="opacity-80 transition-opacity hover:opacity-100"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
