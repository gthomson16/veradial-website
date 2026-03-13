"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Get a Number",
    description:
      "Purchase a dedicated US or Canadian phone number. It\u2019s yours \u2014 not shared, not recycled.",
  },
  {
    number: "02",
    title: "Make Your Call",
    description:
      "Dial from the app. Your purchased number appears as the caller ID with carrier verification.",
  },
  {
    number: "03",
    title: "Stay in Control",
    description:
      "Add voice effects, send SMS, or swap your number anytime. All from one app.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-text-secondary">
              Three steps to verified business calling.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-12">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className="mt-3 h-full w-px bg-accent/20" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
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
