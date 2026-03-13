"use client";

import { CALL_MINUTES, MESSAGE_PACKS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Pack = {
  name: string;
  amount: string;
  price: string;
  perUnit: string;
  popular: boolean;
};

function PricingCard({ pack, index }: { pack: Pack; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <Card glow={pack.popular} className="relative p-6">
        {pack.popular && (
          <Badge variant="filled" className="absolute -top-3 right-4">
            Popular
          </Badge>
        )}
        {pack.name === "Best Value" && (
          <Badge variant="outline" className="absolute -top-3 right-4">
            Best Value
          </Badge>
        )}

        <p className="text-sm font-medium text-text-secondary">{pack.name}</p>
        <p className="mt-2 font-display text-3xl font-bold">{pack.amount}</p>
        <p className="mt-1 text-2xl font-semibold text-text-primary">
          {pack.price}
        </p>
        <p className="mt-1 text-xs text-text-muted">{pack.perUnit}</p>

        <Button
          variant={pack.popular ? "primary" : "ghost"}
          className="mt-6 w-full"
          href="#download"
        >
          Get Started
        </Button>
      </Card>
    </ScrollReveal>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Pay as you go
            </h2>
            <p className="mt-4 text-text-secondary">
              No subscriptions. Buy packs in-app, use them when you need them.
            </p>
          </div>
        </ScrollReveal>

        {/* Call Minutes */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="mb-6 text-center font-display text-xl font-semibold">
              Call Minutes
            </h3>
          </ScrollReveal>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {CALL_MINUTES.map((pack, i) => (
              <PricingCard key={pack.name} pack={pack} index={i} />
            ))}
          </div>
        </div>

        {/* Message Packs */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="mb-6 text-center font-display text-xl font-semibold">
              Message Packs
            </h3>
          </ScrollReveal>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {MESSAGE_PACKS.map((pack, i) => (
              <PricingCard key={pack.name} pack={pack} index={i} />
            ))}
          </div>
        </div>

        {/* Numbers */}
        <ScrollReveal delay={200}>
          <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-border bg-card p-6 text-center">
            <h3 className="font-display text-xl font-semibold">Numbers</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Your first number is included with your account.
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Swap your number anytime &mdash; $2.50
            </p>
            <p className="mt-4 text-xs text-text-muted">
              All purchases are made through the App Store. Prices may vary by
              region.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
