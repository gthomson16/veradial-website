"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SCREENS = [
  {
    src: "/screenshots/numbers.jpg",
    alt: "Number management with purchased and verified numbers",
    label: "Number Management",
  },
  {
    src: "/screenshots/ai-composer.jpg",
    alt: "AI calling with presets and custom goals",
    label: "AI Calling",
  },
  {
    src: "/screenshots/ai-detail.jpg",
    alt: "AI call transcript and summary",
    label: "Call Transcripts",
  },
  {
    src: "/screenshots/history.jpg",
    alt: "Unified call and message history",
    label: "Call History",
  },
];

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="overflow-hidden rounded-[2.25rem]">{children}</div>
    </div>
  );
}

export function AppPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Inside the App
            </p>
            <h2 className="mx-auto mt-5 max-w-xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              See what you&apos;re working with.
            </h2>
          </div>
        </ScrollReveal>

        {/* Phone spread — horizontal scroll on mobile, centered row on sm+ */}
        <div className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none sm:snap-none sm:items-end sm:justify-center sm:gap-8 sm:overflow-x-visible sm:pb-0 lg:gap-12">
          {SCREENS.map((screen, index) => {
            const isCenter = index === 1 || index === 2;
            return (
              <ScrollReveal key={screen.src} delay={index * 120}>
                <div className="flex shrink-0 snap-center flex-col items-center gap-4">
                  <PhoneFrame
                    className={`w-[200px] ${
                      isCenter
                        ? "sm:w-[220px] lg:w-[260px]"
                        : "sm:w-[190px] lg:w-[230px] sm:opacity-85"
                    }`}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={390}
                      height={844}
                      className="w-full"
                    />
                  </PhoneFrame>
                  <p className="text-sm text-text-secondary">
                    {screen.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
