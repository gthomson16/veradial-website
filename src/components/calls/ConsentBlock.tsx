"use client";

import { DEMO_TCPA_COPY } from "@/lib/demo-copy";

type ConsentBlockProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant: "demo" | "dashboard";
  disabled?: boolean;
};

export function ConsentBlock({ checked, onChange, variant, disabled = false }: ConsentBlockProps) {
  const copy =
    variant === "demo"
      ? DEMO_TCPA_COPY
      : "I confirm I have permission to place this AI-assisted outbound call and agree to follow applicable calling and recording laws.";

  return (
    <label className="flex gap-3 rounded-2xl border border-border bg-surface p-4">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-border accent-[var(--color-accent)]"
      />
      <span className="text-sm leading-relaxed text-text-secondary">{copy}</span>
    </label>
  );
}
