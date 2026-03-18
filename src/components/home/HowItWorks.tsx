"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

const STEPS = [
  {
    number: "01",
    title: "Get a Number",
    description:
      "Purchase a dedicated US or Canadian phone number. It\u2019s yours \u2014 not shared, not recycled.",
  },
  {
    number: "02",
    title: "Set Your Goal",
    description:
      "Tell the AI what you need \u2014 book an appointment, confirm a job, or follow up with a client.",
  },
  {
    number: "03",
    title: "AI Makes the Call",
    description:
      "Your AI assistant calls, handles the conversation, and delivers a full transcript when it\u2019s done.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="min-w-0 lg:max-w-md">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              How It Works
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Three steps to AI-powered calling.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              No onboarding calls, no setup fees. Pick a number, tell the AI
              what you need, and let it handle the rest.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-5">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <Card hover={false} className="p-6">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/12">
                    <span className="font-display text-lg font-semibold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
