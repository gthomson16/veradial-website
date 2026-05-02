"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const HeroOrbScene = dynamic(
  () => import("./HeroOrbScene").then((mod) => mod.HeroOrbScene),
  { ssr: false },
);

type HeroOrbCanvasProps = {
  accent: string;
};

function probeWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      (canvas.getContext("webgl2") as WebGLRenderingContext | null) ??
      (canvas.getContext("webgl") as WebGLRenderingContext | null);
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function userPrefersReduced(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (window.matchMedia("(prefers-reduced-data: reduce)").matches) return true;
  return false;
}

let cachedCapable: boolean | null = null;
function subscribeCapable() {
  return () => {};
}
function getCapableClientSnapshot(): boolean {
  if (cachedCapable === null) {
    cachedCapable = !userPrefersReduced() && probeWebGL();
  }
  return cachedCapable;
}
function getCapableServerSnapshot(): boolean {
  return false;
}

const INTERSECTION_ROOT_MARGIN = "200px";
const IDLE_DEADLINE_MS = 3000;
const IDLE_FALLBACK_MS = 1500;

export function HeroOrbCanvas({ accent }: HeroOrbCanvasProps) {
  const capable = useSyncExternalStore(
    subscribeCapable,
    getCapableClientSnapshot,
    getCapableServerSnapshot,
  );
  const [ready, setReady] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!capable || ready) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let cancelled = false;
    let idleHandle: number | null = null;
    let idleFallbackTimer: number | null = null;
    let observer: IntersectionObserver | null = null;
    let triggered = false;

    const flip = () => {
      if (cancelled) return;
      setReady(true);
    };

    const scheduleIdle = () => {
      if (triggered || cancelled) return;
      triggered = true;
      const ric =
        typeof window !== "undefined"
          ? (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
          : undefined;
      if (typeof ric === "function") {
        idleHandle = ric(flip, { timeout: IDLE_DEADLINE_MS });
      } else {
        idleFallbackTimer = window.setTimeout(flip, IDLE_FALLBACK_MS);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      scheduleIdle();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              observer?.disconnect();
              scheduleIdle();
              break;
            }
          }
        },
        { rootMargin: INTERSECTION_ROOT_MARGIN },
      );
      observer.observe(wrapper);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      const cic =
        typeof window !== "undefined"
          ? (window as Window & { cancelIdleCallback?: (handle: number) => void }).cancelIdleCallback
          : undefined;
      if (idleHandle !== null && typeof cic === "function") {
        cic(idleHandle);
      }
      if (idleFallbackTimer !== null) {
        clearTimeout(idleFallbackTimer);
      }
    };
  }, [capable, ready]);

  if (!capable) return null;

  return (
    <div ref={wrapperRef} aria-hidden="true" className="absolute inset-0">
      {ready ? <HeroOrbScene accent={accent} /> : null}
    </div>
  );
}
