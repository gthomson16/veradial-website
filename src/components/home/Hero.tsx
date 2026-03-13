"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageSquareMore, PhoneCall, ShieldCheck } from "lucide-react";
import { APP_PRIMARY_URL, HERO_STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";

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
        <div className="max-w-2xl">
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
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Business calling that looks
              <span className="block text-accent">trusted before you say hello.</span>
            </h1>
          </Stagger>

          <Stagger index={3} mounted={mounted} className="mt-6">
            <p className="max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              VeraDial gives you dedicated calling identities, carrier-backed
              verification, and clean follow-up messaging so your outbound calls
              land with more credibility from the first ring.
            </p>
          </Stagger>

          <Stagger index={4} mounted={mounted} className="mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href={APP_PRIMARY_URL}>
                Request iOS Access
              </Button>
              <Button variant="ghost" href="#pricing">
                See Pricing
              </Button>
            </div>
            <a href={APP_PRIMARY_URL} className="mt-5 inline-block">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="opacity-80 transition-opacity hover:opacity-100"
              />
            </a>
          </Stagger>

          <Stagger index={5} mounted={mounted} className="mt-10">
            <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[170px] rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm sm:min-w-0"
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

        <Stagger index={3} mounted={mounted} className="relative">
          <div className="relative mx-auto max-w-[560px]">
            <div className="absolute -left-2 top-8 hidden rounded-2xl border border-accent/20 bg-card/85 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block sm:-left-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                SMS Ready
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                Follow-up from the same number
              </p>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(160deg,rgba(17,36,58,0.92),rgba(7,17,29,0.96))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                      Live Outbound Call
                    </p>
                    <p className="mt-2 font-display text-2xl text-text-primary">
                      Acme Roofing
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      +1 (415) 555-0192
                    </p>
                  </div>
                  <div className="rounded-full border border-accent/25 bg-accent/12 px-3 py-2 text-right">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                      Attestation
                    </p>
                    <p className="mt-1 font-display text-lg text-text-primary">
                      A-Level
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[24px] border border-white/8 bg-bg/45 p-5">
                    <div className="flex items-center justify-between text-text-secondary">
                      <span className="text-sm">Caller identity</span>
                      <ShieldCheck size={18} className="text-accent" />
                    </div>
                    <div className="mt-5 rounded-2xl border border-accent/20 bg-accent/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-accent">
                        Purchased Number
                      </p>
                      <p className="mt-2 font-display text-2xl text-text-primary">
                        VeraDial Sales
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Dedicated caller identity with carrier verification
                      </p>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        "Identity verified before answer",
                        "Single-tap number switching",
                        "Outbound voice with branded follow-up",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`flex items-center gap-3 rounded-2xl border border-white/6 bg-white/2 px-4 py-3 ${
                            index === 2 ? "hidden sm:flex" : ""
                          }`}
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                          <p className="text-sm text-text-secondary">{item}</p>
                        </div>
                      ))}
                    </div>
                    </div>

                  <div className="grid gap-3 sm:hidden">
                    {[
                      "Verified connection in progress",
                      "Voice and SMS stay aligned",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-bg/45 px-4 py-3 text-sm text-text-secondary"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
                    <div className="rounded-[24px] border border-white/8 bg-bg/45 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-text-secondary">Call state</p>
                        <PhoneCall size={18} className="text-accent" />
                      </div>
                      <div className="mt-5 flex items-end gap-2">
                        {[26, 42, 31, 55, 39, 61, 34, 48].map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-full bg-gradient-to-t from-accent/25 to-accent"
                            style={{ height: `${height}px` }}
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-text-muted">
                        Verified connection in progress
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/8 bg-bg/45 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-text-secondary">Follow-up</p>
                        <MessageSquareMore size={18} className="text-[var(--color-accent-secondary)]" />
                      </div>
                      <div className="mt-4 rounded-2xl border border-white/8 bg-card/75 p-4">
                        <p className="text-sm text-text-primary">
                          Thanks for taking the call. We just sent the quote and
                          callback details from your VeraDial number.
                        </p>
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-text-muted">
                        Voice and SMS stay aligned
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-0 hidden rounded-2xl border border-white/10 bg-card/85 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block sm:right-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                Voice Profile
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                Normal / Deep / Robot
              </p>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
