"use client";

import { useEffect, useRef, useState, type MouseEvent, type KeyboardEvent } from "react";
import { Play, Pause } from "lucide-react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function HeroDemoPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const currentAudio = audio;

    function onLoadedMetadata() {
      setDuration(currentAudio.duration);
    }

    function onTimeUpdate() {
      setCurrentTime(currentAudio.currentTime);
    }

    function onPlay() {
      setPlaying(true);
    }

    function onPause() {
      setPlaying(false);
    }

    function onEnded() {
      setCurrentTime(0);
    }

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    if (currentAudio.readyState >= 1) {
      setDuration(currentAudio.duration);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play().catch(() => {});
      return;
    }

    audio.pause();
  }

  function handleSeek(event: MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }

  function handleScrubKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const step = 5; // seconds
    if (event.key === "ArrowRight") {
      event.preventDefault();
      audio.currentTime = Math.min(duration, audio.currentTime + step);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - step);
    }
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
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause demo call" : "Play demo call"}
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
            role="slider"
            tabIndex={0}
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            onClick={handleSeek}
            onKeyDown={handleScrubKeyDown}
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
