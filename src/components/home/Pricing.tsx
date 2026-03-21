"use client";

import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";
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
  estimate?: string;
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
        {pack.estimate ? (
          <p className="mt-3 border-t border-border pt-3 text-sm text-text-secondary">
            {pack.estimate}
          </p>
        ) : null}
      </div>
    </Card>
  );
}

const INCLUDED_PERKS = [
  "Inbound calls & SMS",
  "Voicemail transcription",
  "Call forwarding",
  "AI call screening",
  "Call recording",
] as const;

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
              One line. One low price.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              $4.99/mo gets you a dedicated business number. Add credits as you
              need them &mdash; they never expire.
            </p>
          </div>
        </ScrollReveal>

        {/* Subscription card */}
        <ScrollReveal delay={60}>
          <div className="mx-auto mt-12 max-w-2xl">
            <Card glow className="relative overflow-hidden bg-[linear-gradient(155deg,rgba(115,242,195,0.08),rgba(255,255,255,0.02))] p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
                      $4.99
                      <span className="text-lg font-normal text-text-secondary">
                        /mo
                      </span>
                    </p>
                    <span className="rounded-full border border-accent/25 bg-accent/12 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em] text-accent">
                      Per line
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    Dedicated US or Canadian number. Everything included:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {INCLUDED_PERKS.map((perk) => (
                      <span key={perk} className="flex items-center gap-1.5 text-sm text-text-secondary">
                        <span className="text-accent">&#10003;</span>
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-accent/15 bg-accent/5 px-5 py-4 text-center">
                  <Sparkles size={18} className="mx-auto text-accent" />
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    3-day free trial
                  </p>
                </div>
              </div>

              {/* Welcome bonus */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--color-accent-secondary)]/15 bg-[var(--color-accent-secondary)]/5 px-4 py-3">
                <Gift size={18} className="shrink-0 text-[var(--color-accent-secondary)]" />
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">
                    Welcome bonus:
                  </span>{" "}
                  15 call credits + 10 SMS messages with your first subscription.
                </p>
              </div>

              {/* Per-use rates */}
              <p className="mt-5 text-xs text-text-muted">
                Credit usage: 1/min standard &middot; 2/min voice-changed &middot; 3/min AI calls
              </p>
            </Card>
          </div>
        </ScrollReveal>

        {/* Credit/message toggle */}
        <ScrollReveal delay={120}>
          <div className="mt-14 flex justify-center">
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

        {/* Credit packs */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-3">
          {packs.map((pack, index) => (
            <ScrollReveal key={`${view}-${pack.name}`} delay={index * 90}>
              <PricingCard pack={pack} />
            </ScrollReveal>
          ))}
        </div>

        {/* Footer notes */}
        <ScrollReveal delay={200}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
            <p>Credits never expire</p>
            <p>·</p>
            <p>Number swaps $2.50</p>
            <p>·</p>
            <p>In-app purchase</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
