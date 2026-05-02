import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { isDemoFunnelEnabled } from "@/lib/demo-flags";
import { DEMO_PRESETS } from "@/lib/demo-presets";

import { HeroOrbCanvas } from "./HeroOrbCanvas";
import { generateFibonacciSphere } from "./heroOrbGeometry";

const ORB_COLOR = "#3CFFB8";
const SSR_PRESET = DEMO_PRESETS[0];
const FALLBACK_POINT_COUNT = 140;

const FALLBACK_POINTS = generateFibonacciSphere(FALLBACK_POINT_COUNT)
  .map((p) => ({
    x: p.x,
    y: p.y,
    z: p.z,
    depth: (p.z + 1) * 0.5,
  }))
  .sort((a, b) => a.depth - b.depth);

function FallbackOrb() {
  return (
    <svg
      viewBox="-1.25 -1.25 2.5 2.5"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hero-orb-halo-outer" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#00B585" stopOpacity="0.18" />
          <stop offset="55%" stopColor="#00B585" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#00B585" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hero-orb-halo-inner" cx="50%" cy="50%" r="38%">
          <stop offset="0%" stopColor="#3CFFB8" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#3CFFB8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3CFFB8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        x="-1.25"
        y="-1.25"
        width="2.5"
        height="2.5"
        fill="url(#hero-orb-halo-outer)"
      />
      <rect
        x="-1.25"
        y="-1.25"
        width="2.5"
        height="2.5"
        fill="url(#hero-orb-halo-inner)"
      />
      <g fill="#3CFFB8">
        {FALLBACK_POINTS.map((p, i) => {
          const opacity = (1 - p.depth * 0.68).toFixed(2);
          const radius = (0.018 + (1 - p.depth) * 0.014).toFixed(3);
          return (
            <circle
              key={i}
              cx={p.x.toFixed(3)}
              cy={p.y.toFixed(3)}
              r={radius}
              opacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}

function StatusBar() {
  return (
    <div
      className="relative flex h-[34px] items-center justify-between px-6 pt-3"
      aria-hidden="true"
    >
      <span className="text-[11px] font-semibold tracking-tight text-text-primary">
        9:41
      </span>

      <div className="absolute left-1/2 top-[6px] h-[20px] w-[78px] -translate-x-1/2 rounded-full bg-black" />

      <div className="flex items-center gap-[5px] text-text-primary">
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="0" y="6" width="2.5" height="4" rx="0.6" />
          <rect x="3.5" y="4" width="2.5" height="6" rx="0.6" />
          <rect x="7" y="2" width="2.5" height="8" rx="0.6" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.6" />
        </svg>
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6.5 9.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"
            fill="currentColor"
          />
          <path
            d="M3 5.6c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M0.7 3.3c1.6-1.6 3.7-2.5 5.8-2.5s4.2.9 5.8 2.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          width="22"
          height="11"
          viewBox="0 0 22 11"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="0.5"
            y="0.5"
            width="18"
            height="10"
            rx="2.4"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
          <rect x="2" y="2" width="15" height="7" rx="1.2" fill="currentColor" />
          <rect
            x="19.4"
            y="3.6"
            width="1.6"
            height="3.8"
            rx="0.6"
            fill="currentColor"
            fillOpacity="0.55"
          />
        </svg>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="relative flex aspect-[1320/2868] w-full flex-col overflow-hidden rounded-[2.25rem] bg-bg">
      <StatusBar />

      <div className="px-6 pt-5 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-accent">
          VeraDial · Outbound call
        </p>
        <p className="mt-2 font-display text-base leading-tight text-text-primary">
          {SSR_PRESET.title}
        </p>
        <p className="mt-1 text-[11px] tabular-nums text-text-muted">00:14</p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div
          className="relative h-44 w-44 sm:h-48 sm:w-48"
          style={{
            maskImage:
              "radial-gradient(circle closest-side at center, #000 72%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle closest-side at center, #000 72%, transparent 100%)",
          }}
        >
          <FallbackOrb />
          <HeroOrbCanvas accent={ORB_COLOR} />
        </div>
      </div>

      <div className="px-7 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-text-muted">
          Goal
        </p>
        <p className="mt-2 text-[11px] leading-snug text-text-secondary">
          {SSR_PRESET.goal}
        </p>
      </div>

      {isDemoFunnelEnabled ? (
        <div className="px-6 pb-6 pt-5">
          <div className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-accent text-[11px] font-semibold uppercase tracking-[0.2em] text-bg shadow-[0_10px_30px_rgba(115,242,195,0.35)]">
            <span>Try a live AI call</span>
            <ArrowRight size={13} strokeWidth={2.6} aria-hidden="true" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-around px-9 pb-7 pt-5">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-card/80 text-[8px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Mute
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-500/90 text-[8px] font-semibold uppercase tracking-[0.18em] text-white">
            End
          </span>
        </div>
      )}
    </div>
  );
}

function PhoneFrame() {
  return (
    <div
      aria-hidden="true"
      className="rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
    >
      <PhoneScreen />
    </div>
  );
}

export function HeroPhone() {
  return (
    <div
      className="relative flex justify-center"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative mx-auto w-[280px] sm:w-[300px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {isDemoFunnelEnabled ? (
          <Link
            href="/try"
            aria-label="Try a live VeraDial AI call"
            className="block rounded-[3rem] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
          >
            <PhoneFrame />
          </Link>
        ) : (
          <div role="img" aria-label="VeraDial AI assistant on a live call">
            <PhoneFrame />
          </div>
        )}
      </div>
    </div>
  );
}
