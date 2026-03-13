interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className = "" }: GradientMeshProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]"
        style={{ animation: "drift-1 20s ease-in-out infinite" }}
      />
      <div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[100px]"
        style={{ animation: "drift-2 25s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/6 blur-[80px]"
        style={{ animation: "drift-3 22s ease-in-out infinite" }}
      />
    </div>
  );
}
