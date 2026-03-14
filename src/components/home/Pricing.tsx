"use client";

import { useState } from "react";
import {
  APP_PRIMARY_URL,
  CALL_MINUTES,
  MESSAGE_PACKS,
  PRICING_FACTS,
} from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type PricingView = "minutes" | "messages";

type Pack = {
  name: string;
  amount: string;
  price: string;
  perUnit: string;
  popular: boolean;
};

function PricingCard({
  pack,
  activeLabel,
}: {
  pack: Pack;
  activeLabel: string;
}) {
  return (
    <Card
      glow={pack.popular}
      className={`h-full p-6 ${
        pack.popular ? "bg-[linear-gradient(180deg,rgba(115,242,195,0.09),rgba(255,255,255,0.02))]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-text-secondary">{pack.name}</p>
          <p className="mt-3 font-display text-4xl text-text-primary">
            {pack.amount}
          </p>
        </div>
        {pack.popular ? (
          <span className="rounded-full border border-accent/25 bg-accent/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-accent">
            Recommended
          </span>
        ) : null}
      </div>

      <div className="mt-8">
        <p className="font-display text-3xl text-text-primary">{pack.price}</p>
        <p className="mt-2 text-sm text-text-secondary">{pack.perUnit}</p>
      </div>

      <div className="mt-8 space-y-3">
        {[
          `Instant ${activeLabel.toLowerCase()} credit`,
          "Dedicated number stays attached to your account",
          "App-based purchase and usage tracking",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-text-secondary">{item}</p>
          </div>
        ))}
      </div>

      <Button variant={pack.popular ? "primary" : "ghost"} className="mt-8 w-full" href={APP_PRIMARY_URL}>
        Request Access
      </Button>
    </Card>
  );
}

export function Pricing() {
  const [view, setView] = useState<PricingView>("minutes");

  const packs = view === "minutes" ? CALL_MINUTES : MESSAGE_PACKS;
  const activeLabel = view === "minutes" ? "Call Minutes" : "Message Packs";

  return (
    <section id="pricing" className="relative overflow-x-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="min-w-0 overflow-hidden lg:max-w-md lg:overflow-visible">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Pricing
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Flexible credits instead of rigid seats or contracts.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              VeraDial is structured for people who want dedicated outbound
              identity without monthly seat bloat. Buy what you need, keep your
              number, and scale usage when the workflow demands it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-8">
            <div className="inline-flex rounded-full border border-border bg-card/80 p-1">
              {[
                { value: "minutes", label: "Call Minutes" },
                { value: "messages", label: "Message Packs" },
              ].map((option) => {
                const active = view === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-accent text-bg"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    onClick={() => setView(option.value as PricingView)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {PRICING_FACTS.map((fact, index) => (
              <ScrollReveal key={fact} delay={160 + index * 60}>
                <div className="rounded-2xl border border-border bg-card/70 px-5 py-4">
                  <p className="text-sm text-text-secondary">{fact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="min-w-0 space-y-6">
          <ScrollReveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                  Active pack type
                </p>
                <h3 className="mt-2 font-display text-3xl text-text-primary">
                  {activeLabel}
                </h3>
              </div>
              <p className="max-w-xs text-sm text-text-secondary sm:text-right">
                Use the same page for calling credits or follow-up messaging.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted sm:hidden">
              Swipe to compare packs
            </p>
          </ScrollReveal>

          <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-2 xl:mx-0 xl:grid xl:grid-cols-3 xl:overflow-visible xl:px-0 xl:pb-0">
            {packs.map((pack, index) => (
              <ScrollReveal
                key={`${view}-${pack.name}`}
                delay={index * 90}
                className="min-w-[min(82vw,320px)] shrink-0 snap-start xl:min-w-0"
              >
                <PricingCard pack={pack} activeLabel={activeLabel} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240}>
            <Card hover={false} className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                  Included with setup
                </p>
                <h3 className="mt-3 font-display text-3xl text-text-primary">
                  Your first number is already part of the entry point.
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Number included",
                    description: "Start with a dedicated number attached to the account.",
                  },
                  {
                    title: "Swap any time",
                    description: "Change identities later for $2.50 when the workflow changes.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface/70 p-5"
                  >
                    <p className="font-display text-xl text-text-primary">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
