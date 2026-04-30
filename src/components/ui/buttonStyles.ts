export type ButtonVariant = "primary" | "ghost";

export function getButtonClasses({
  variant = "primary",
  className = "",
}: {
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-bg shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_0_24px_var(--color-accent-glow)]",
    ghost:
      "border border-border bg-white/2 text-text-secondary hover:border-white/18 hover:bg-white/4 hover:text-text-primary",
  };

  return `${base} ${variants[variant]} ${className}`;
}
