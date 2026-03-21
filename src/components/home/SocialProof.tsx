"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Building2, ShieldCheck, Clock } from "lucide-react";

const PROOF_POINTS = [
  {
    icon: Phone,
    value: "500+",
    label: "Beta calls completed",
  },
  {
    icon: Building2,
    value: "3",
    label: "Industries in beta",
  },
  {
    icon: ShieldCheck,
    value: "A-level",
    label: "STIR/SHAKEN attestation",
  },
  {
    icon: Clock,
    value: "< 2 min",
    label: "Avg. AI call duration",
  },
] as const;

function AnimatedValue({ value, visible }: { value: string; visible: boolean }) {
  return (
    <span
      className={`font-display text-2xl font-semibold tracking-tight text-text-primary transition-all duration-700 sm:text-3xl ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {value}
    </span>
  );
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
          {PROOF_POINTS.map((point, index) => (
            <div
              key={point.label}
              className="flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent">
                <point.icon size={20} strokeWidth={1.6} />
              </div>
              <AnimatedValue value={point.value} visible={visible} />
              <p className="mt-1 text-xs tracking-wide text-text-muted">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
