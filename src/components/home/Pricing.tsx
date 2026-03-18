"use client";

import { useState } from "react";
import {
  CALL_CREDITS,
  MESSAGE_PACKS,
} from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type PricingView = "minutes" | "messages";

type Pack = {
  name: string;
  amount: string;
  price: string;
  perUnit: string;
  popular: boolean;
};

function PricingCard({ pack }: { pack: Pack }) {
  return (
    <Card
      glow={pack.popular}
      className={`h-full p-6 ${
        pack.popular
          ? "bg-[linear-gradient(180deg,rgba(115,242,195,0.09),rgba(255,255,255,0.02))]"
          : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-text-secondary">{pack.name}</p>
          {pack.popular ? (
            <span className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-accent">
              Recommended
            </span>
          ) : null}
        </div>
        <p className="mt-3 font-display text-3xl text-text-primary xl:text-4xl">
          {pack.amount}
        </p>
      </div>

      <div className="mt-6">
        <p className="font-display text-3xl text-text-primary">{pack.price}</p>
        <p className="mt-2 text-sm text-text-secondary">{pack.perUnit}</p>
      </div>
    </Card>
  );
}

export function Pricing() {
  const [view, setView] = useState<PricingView>("minutes");

  const packs = view === "minutes" ? CALL_CREDITS : MESSAGE_PACKS;

  return (
    <section id="pricing" className="relative overflow-x-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Pricing
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Buy credits, not contracts.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              Your first number is included. No subscriptions, no seat fees.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-card/80 p-1">
              {[
                { value: "minutes", label: "Call Credits" },
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
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {packs.map((pack, index) => (
            <ScrollReveal key={`${view}-${pack.name}`} delay={index * 90}>
              <PricingCard pack={pack} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
            <p>First number included</p>
            <p>·</p>
            <p>Number swaps $2.50</p>
            <p>·</p>
            <p>iOS in-app purchase</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
