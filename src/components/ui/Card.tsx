interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border bg-card
        ${glow ? "border-accent/30 shadow-[0_0_32px_var(--color-accent-glow)]" : "border-border"}
        ${hover ? "transition-all duration-200 hover:scale-[1.02] hover:border-text-muted/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
