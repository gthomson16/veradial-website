"use client";

import { useEffect, useRef, useState, useCallback, type FormEvent } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { StoreBadges } from "@/components/ui/StoreBadges";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-medium text-accent">
        You&apos;re on the list! We&apos;ll email you when VeraDial launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early access"
        className="flex-1 rounded-full border border-border bg-card/80 px-4 py-3 text-sm text-text-primary outline-none backdrop-blur-sm transition-colors placeholder:text-text-muted focus:border-accent/50"
      />
      <Button variant="primary" type="submit">
        Join Waitlist
      </Button>
    </form>
  );
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function HeroDemoPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function onLoadedMetadata() {
      setDuration(audio!.duration);
    }
    function onTimeUpdate() {
      setCurrentTime(audio!.currentTime);
    }
    function onEnded() {
      setPlaying(false);
      setCurrentTime(0);
    }

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm">
      <audio ref={audioRef} src="/demo-call.mp3" preload="metadata" />
      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-text-muted">
        Hear a demo call
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-105"
        >
          {playing ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-0.5" />
          )}
        </button>
        <div className="flex-1">
          <div
            ref={progressRef}
            onClick={handleSeek}
            className="h-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
          >
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-text-muted">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : "0:00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              AI-powered business calling
            </Badge>
          </Stagger>

          <Stagger index={2} mounted={mounted} className="mt-6">
            <h1 className="font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] min-[420px]:text-4xl sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
              Your AI assistant calls
              <span className="block text-accent">so you don&apos;t have to.</span>
            </h1>
          </Stagger>

          <Stagger index={3} mounted={mounted} className="mt-6">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg lg:text-xl lg:max-w-xl">
              VeraDial&apos;s AI makes calls on your behalf &mdash; scheduling
              appointments, following up with clients, and handling the
              conversations you don&apos;t have time for.
            </p>
          </Stagger>

          <Stagger index={4} mounted={mounted} className="mt-8">
            <WaitlistForm />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="ghost" href="#pricing">
                See Pricing
              </Button>
            </div>
            <StoreBadges className="mt-6" />
          </Stagger>

          <Stagger index={5} mounted={mounted} className="mt-10">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="text-accent">&#10003;</span>
                STIR/SHAKEN A-level attestation
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="text-accent">&#128274;</span>
                Twilio SOC 2 infrastructure
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="text-accent">&#127758;</span>
                US + Canada coverage
              </div>
            </div>
          </Stagger>
        </div>

        <Stagger index={3} mounted={mounted} className="relative flex justify-center">
          <div className="relative mx-auto w-[280px] sm:w-[300px]">
            {/* iPhone frame */}
            <div className="rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/screenshots/ai-composer.jpg"
                  alt="VeraDial AI calling with presets and custom goals"
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
                AI Calling
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                Schedule · Follow up · Confirm
              </p>
            </div>

            <div className="mt-12">
              <HeroDemoPlayer />
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
