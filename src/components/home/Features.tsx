"use client";

import Link from "next/link";
import { FEATURES, USE_CASES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const [primaryFeature, ...secondaryFeatures] = FEATURES;

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="min-w-0 lg:max-w-md">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Why VeraDial
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Not another second number app.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Most business phone tools give you a number and leave you to do the
              work. VeraDial does the calling for you.{" "}
              <Link href="/compare" className="text-accent hover:underline">
                See how we compare
              </Link>.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-4">
            {USE_CASES.map((useCase, index) => (
              <ScrollReveal key={useCase.title} delay={index * 100}>
                <div className="rounded-2xl border border-border bg-card/75 p-5">
                  <p className="font-display text-xl text-text-primary">
                    {useCase.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {useCase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ScrollReveal className="sm:col-span-2">
            <Card className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 lg:border-b-0 lg:border-r">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <primaryFeature.icon size={24} strokeWidth={1.8} />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.28em] text-text-muted">
                    Lead feature
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-text-primary">
                    {primaryFeature.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
                    {primaryFeature.description}
                  </p>
                </div>

                <div className="bg-surface/75 p-7">
                  <div className="grid gap-4">
                    {[
                      {
                        label: "Caller Profile",
                        value: "Set your display name, website, and context once — AI uses it on every call",
                      },
                      {
                        label: "Custom Goals",
                        value: "Describe what you need and add per-call notes for extra detail",
                      },
                      {
                        label: "Transcripts",
                        value: "Full conversation log and summary after every AI call",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/8 bg-bg/40 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-accent">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {secondaryFeatures.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 90}
              className={
                secondaryFeatures.length % 2 !== 0 &&
                index === secondaryFeatures.length - 1
                  ? "sm:col-span-2"
                  : ""
              }
            >
              <Card className="h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-accent">
                  <feature.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
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
