"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function AudioPlayer() {
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

    // Handle case where metadata is already loaded
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
    <>
      <audio ref={audioRef} src="/demo-call.mp3" preload="metadata" />
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={togglePlay}
          className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-105"
        >
          {playing ? (
            <Pause size={24} fill="currentColor" />
          ) : (
            <Play size={24} fill="currentColor" className="ml-0.5" />
          )}
        </button>
        <div className="flex-1">
          <div
            ref={progressRef}
            onClick={handleSeek}
            className="h-1.5 cursor-pointer overflow-hidden rounded-full bg-white/10"
          >
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-text-muted">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : "0:00"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function DemoPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
            Hear It In Action
          </p>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            What an AI call sounds like.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
            Listen to an AI assistant handle an incoming lead for a local
            electrician &mdash; qualifying the job and scheduling a callback.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto mt-10 max-w-xl">
            <Card hover={false} className="p-8">
              <AudioPlayer />
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
