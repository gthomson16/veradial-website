"use client";

import { useEffect, useState } from "react";
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
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <GradientMesh />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[55%_45%] lg:items-center lg:gap-8">
        {/* Text */}
        <div className="max-w-xl">
          <Stagger index={0} mounted={mounted}>
            <Badge variant="outline">Verified Business Calling</Badge>
          </Stagger>

          <Stagger index={1} mounted={mounted} className="mt-6">
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Your number.
              <br />
              Your identity.
              <br />
              <span className="text-accent">Your call.</span>
            </h1>
          </Stagger>

          <Stagger index={2} mounted={mounted} className="mt-6">
            <p className="max-w-md text-lg leading-relaxed text-text-secondary">
              Purchase dedicated phone numbers, control your caller ID, and make
              business calls through secure, carrier-grade infrastructure.
            </p>
          </Stagger>

          <Stagger index={3} mounted={mounted} className="mt-8">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#download">
                Download on the App Store
              </Button>
              <Button variant="ghost" href="#features">
                Learn More
              </Button>
            </div>
          </Stagger>
        </div>

        {/* Visual — stylized phone + floating UI cards */}
        <Stagger index={2} mounted={mounted} className="relative hidden lg:block">
          <div className="relative mx-auto w-[280px]">
            {/* Phone frame */}
            <div className="aspect-[9/19] rounded-[40px] border border-border bg-surface/50 p-3 shadow-2xl shadow-black/30">
              <div className="h-full rounded-[28px] bg-bg/80">
                {/* Status bar mock */}
                <div className="flex justify-center pt-4">
                  <div className="h-6 w-24 rounded-full bg-card" />
                </div>
                {/* Content mock */}
                <div className="flex flex-col items-center gap-3 pt-12">
                  <div className="h-16 w-16 rounded-full bg-accent/10 ring-2 ring-accent/20" />
                  <div className="h-3 w-32 rounded-full bg-card" />
                  <div className="h-3 w-24 rounded-full bg-card/60" />
                  <div className="mt-4 h-10 w-40 rounded-full bg-accent/20" />
                </div>
                {/* Dialer mock */}
                <div className="mt-8 grid grid-cols-3 gap-3 px-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <div
                      key={n}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-xs text-text-secondary"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card 1 — Caller ID */}
            <div
              className="absolute -left-16 top-20 rounded-xl border border-border bg-card/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-sm"
              style={{ animation: "drift-1 15s ease-in-out infinite" }}
            >
              <p className="text-[10px] font-medium text-text-muted">CALLER ID</p>
              <p className="mt-0.5 font-display text-sm font-semibold text-text-primary">
                +1 (415) 555-0192
              </p>
              <p className="text-[10px] text-accent">A-Level Verified</p>
            </div>

            {/* Floating card 2 — Voice effect */}
            <div
              className="absolute -right-12 top-52 rounded-xl border border-border bg-card/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-sm"
              style={{ animation: "drift-2 18s ease-in-out infinite" }}
            >
              <p className="text-[10px] font-medium text-text-muted">VOICE EFFECT</p>
              <p className="mt-0.5 text-sm font-semibold text-text-primary">Deep</p>
              <div className="mt-1 flex gap-0.5">
                {[3, 7, 5, 9, 4].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-accent"
                    style={{ height: `${h + 6}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
