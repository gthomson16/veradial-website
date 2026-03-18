"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { StoreBadges } from "@/components/ui/StoreBadges";

function Stagger({
  index,
  mounted,
  children,
  className = "",
}: {
  index: number;
  mounted: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative overflow-hidden pt-[88px]">
      <GradientMesh />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="min-w-0 max-w-2xl">
          <Stagger index={0} mounted={mounted}>
            <Image
              src="/icon.png"
              alt="VeraDial"
              width={72}
              height={72}
              className="rounded-2xl"
            />
          </Stagger>

          <Stagger index={1} mounted={mounted} className="mt-5">
            <Badge
              variant="outline"
              className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
            >
              Verified outbound identity for modern operators
            </Badge>
          </Stagger>

          <Stagger index={2} mounted={mounted} className="mt-6">
            <h1 className="font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] min-[420px]:text-4xl sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
              Business calling that looks
              <span className="block text-accent">trusted before you say hello.</span>
            </h1>
          </Stagger>

          <Stagger index={3} mounted={mounted} className="mt-6">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg lg:text-xl lg:max-w-xl">
              VeraDial gives you dedicated calling identities, carrier-backed
              verification, and clean follow-up messaging so your outbound calls
              land with more credibility from the first ring.
            </p>
          </Stagger>

          <Stagger index={4} mounted={mounted} className="mt-8">
            <Button variant="ghost" href="#pricing">
              See Pricing
            </Button>
            <StoreBadges className="mt-6" />
          </Stagger>

          <Stagger index={5} mounted={mounted} className="mt-10">
            <div className="grid gap-3 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-display text-lg text-text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Stagger>
        </div>

        <Stagger index={3} mounted={mounted} className="relative flex justify-center">
          <div className="relative mx-auto w-[280px] sm:w-[300px]">
            {/* iPhone frame */}
            <div className="rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/screenshots/dialer.jpg"
                  alt="VeraDial dialer with caller ID, voice effects, and call recording"
                  width={390}
                  height={844}
                  priority
                  className="w-full"
                />
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -left-4 bottom-24 hidden rounded-2xl border border-accent/20 bg-card/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block sm:-left-16">
              <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                Voice Effects
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                Normal · Male · Female · Privacy
              </p>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
