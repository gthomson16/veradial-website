import Link from "next/link";

import { isDemoFunnelEnabled } from "@/lib/demo-flags";
import { DEMO_PRESETS } from "@/lib/demo-presets";

import { HeroOrbCanvas } from "./HeroOrbCanvas";

const ACCENT = "#73f2c3";
const ACCENT_SECONDARY = "#ffbf69";

const SSR_PRESET = DEMO_PRESETS[0];

function FallbackOrb() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hero-orb-core" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#a6f7d8" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#73f2c3" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#3eaa84" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#11243a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hero-orb-warm" cx="68%" cy="68%" r="32%">
          <stop offset="0%" stopColor="#ffbf69" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffbf69" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hero-orb-bloom" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#73f2c3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#73f2c3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="96" fill="url(#hero-orb-bloom)" />
      <circle cx="100" cy="100" r="64" fill="url(#hero-orb-core)" />
      <circle cx="100" cy="100" r="64" fill="url(#hero-orb-warm)" />
      <circle
        cx="100"
        cy="100"
        r="64"
        fill="none"
        stroke="#73f2c3"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function PhoneScreen() {
  return (
    <div className="relative aspect-[1320/2868] w-full overflow-hidden rounded-[2.25rem] bg-bg">
      <div className="flex items-center justify-between px-7 pt-3 text-[10px] font-semibold tracking-[0.18em] text-text-secondary">
        <span>9:41</span>
        <span aria-hidden="true">●●●</span>
      </div>

      <div className="px-6 pt-7 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-accent">
          VeraDial · Outbound call
        </p>
        <p className="mt-2 font-display text-base leading-tight text-text-primary">
          {SSR_PRESET.title}
        </p>
        <p className="mt-1 text-[11px] tabular-nums text-text-muted">00:14</p>
      </div>

      <div className="relative mx-auto mt-7 h-44 w-44 sm:h-48 sm:w-48">
        <FallbackOrb />
        <HeroOrbCanvas accent={ACCENT} accentSecondary={ACCENT_SECONDARY} />
      </div>

      <div className="px-7 pt-9 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-text-muted">
          Goal
        </p>
        <p className="mt-2 text-[11px] leading-snug text-text-secondary">
          {SSR_PRESET.goal}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-7 flex items-center justify-around px-9">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-card/80 text-[8px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
          Mute
        </span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-500/90 text-[8px] font-semibold uppercase tracking-[0.18em] text-white">
          End
        </span>
      </div>
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
