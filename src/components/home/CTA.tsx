"use client";

import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-32">
      <GradientMesh />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Ready to own your caller ID?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Download VeraDial and start making verified calls today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" href="#">
              Download on the App Store
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Available on iOS. Android coming soon.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
