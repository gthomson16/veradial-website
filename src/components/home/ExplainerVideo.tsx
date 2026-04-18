"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "N_xQhNfiR4w";
const POSTER_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const POSTER_FALLBACK = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export function ExplainerVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
            See it in action
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            Watch it work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            A minute with VeraDial &mdash; the AI places a call, handles the
            conversation, and hands back a transcript.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl"
          />

          <div className="relative aspect-video overflow-hidden rounded-[1.75rem] border-[3px] border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the VeraDial explainer video"
                className="group relative block h-full w-full cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={POSTER_URL}
                  alt="VeraDial explainer video thumbnail"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== POSTER_FALLBACK) img.src = POSTER_FALLBACK;
                  }}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:left-6 sm:top-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-secondary)]" />
                  1 min explainer
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      style={{ animation: "call-pulse 2.4s ease-out infinite" }}
                    />
                    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent text-[var(--color-bg)] shadow-[0_20px_60px_rgba(115,242,195,0.4)] transition-transform duration-300 ease-out group-hover:scale-105 sm:h-24 sm:w-24">
                      <Play
                        size={28}
                        strokeWidth={2}
                        fill="currentColor"
                        className="ml-[3px] sm:hidden"
                      />
                      <Play
                        size={36}
                        strokeWidth={2}
                        fill="currentColor"
                        className="ml-[4px] hidden sm:block"
                      />
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[0.75rem] uppercase tracking-[0.22em] text-white/70 sm:bottom-7 sm:left-7 sm:right-7"
                >
                  <span className="hidden sm:inline">VeraDial &mdash; AI that makes your calls</span>
                  <span className="ml-auto flex items-center gap-1.5 text-white/60">
                    <span className="h-px w-6 bg-white/40" />
                    Press play
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1&vq=hd1080&hd=1`}
                title="VeraDial explainer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
