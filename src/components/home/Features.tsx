"use client";

import { FEATURES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-text-secondary">
              Professional calling tools built on carrier-grade infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 80}>
              <Card className="p-6">
                <feature.icon
                  size={24}
                  className="text-text-secondary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
