interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className = "" }: GradientMeshProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[140px]" />
      <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--color-accent-secondary)]/5 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/4 blur-[100px]" />
    </div>
  );
}
