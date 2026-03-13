interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "filled";
  className?: string;
}

export function Badge({
  children,
  variant = "outline",
  className = "",
}: BadgeProps) {
  const variants = {
    outline:
      "border border-accent/30 text-accent bg-accent/5",
    filled:
      "bg-accent text-bg",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
