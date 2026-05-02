"use client";

import { CalendarCheck, ClipboardCheck, MessagesSquare } from "lucide-react";
import type { Preset } from "@/lib/calls/types";

type PresetPickerProps = {
  value: string;
  onChange: (value: string) => void;
  presets: Preset[];
  disabled?: boolean;
};

const icons = [CalendarCheck, MessagesSquare, ClipboardCheck];

export function PresetPicker({ value, onChange, presets, disabled = false }: PresetPickerProps) {
  return (
    <div
      className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-3"
      role="radiogroup"
      aria-label="Demo call type"
    >
      {presets.map((preset, index) => {
        const Icon = icons[index % icons.length];
        const selected = value === preset.id;

        return (
          <button
            key={preset.id}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled}
            onClick={() => onChange(preset.id)}
            className={`min-h-[154px] rounded-2xl border p-4 text-left transition-all ${
              selected
                ? "border-accent/70 bg-accent/[0.08] shadow-[0_0_24px_var(--color-accent-glow)]"
                : "border-border bg-card hover:border-text-muted/30 hover:bg-card-hover"
            } disabled:cursor-not-allowed disabled:opacity-60`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                selected ? "bg-accent text-bg" : "bg-surface text-accent"
              }`}
            >
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="mt-4 block text-base font-semibold text-text-primary">
              {preset.title}
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-text-secondary">
              {preset.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}
