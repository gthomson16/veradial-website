"use client";

import { useEffect, useMemo, useState } from "react";

type CountryCode = "US" | "CA";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  onValid?: (e164: string | null) => void;
  allowedCountries?: CountryCode[];
  autoFocus?: boolean;
  disabled?: boolean;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatNanp(value: string) {
  const digits = digitsOnly(value).slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function toE164(value: string) {
  const digits = digitsOnly(value);
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  return null;
}

export function PhoneInput({
  value,
  onChange,
  onValid,
  allowedCountries = ["US", "CA"],
  autoFocus = false,
  disabled = false,
}: PhoneInputProps) {
  const [country, setCountry] = useState<CountryCode>(allowedCountries[0] ?? "US");
  const formattedValue = useMemo(() => formatNanp(value), [value]);
  const e164 = useMemo(() => toE164(value), [value]);

  useEffect(() => {
    onValid?.(e164);
  }, [e164, onValid]);

  return (
    <div className="space-y-3">
      <div className="flex w-fit rounded-full border border-border bg-surface p-1">
        {allowedCountries.map((option) => (
          <button
            key={option}
            type="button"
            disabled={disabled}
            onClick={() => setCountry(option)}
            className={`h-9 rounded-full px-4 text-sm font-semibold transition-colors ${
              country === option
                ? "bg-accent text-bg"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-text-secondary">Phone number</span>
        <input
          type="tel"
          value={formattedValue}
          onChange={(event) => onChange(digitsOnly(event.target.value).slice(0, 10))}
          autoFocus={autoFocus}
          disabled={disabled}
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 123-4567"
          className="h-14 w-full rounded-2xl border border-border bg-surface px-4 text-lg text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent/70 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>

      <p className={`text-sm ${e164 ? "text-accent" : "text-text-muted"}`}>
        {e164 ? `${e164} is ready for verification.` : "Enter a US or Canadian mobile number."}
      </p>
    </div>
  );
}
