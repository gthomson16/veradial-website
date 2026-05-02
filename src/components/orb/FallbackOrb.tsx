import { generateFibonacciSphere } from "./orbGeometry";
import { ORB_STATE_CONFIG, type OrbState } from "./orbStates";

const FALLBACK_POINT_COUNT = 140;

const FALLBACK_POINTS = generateFibonacciSphere(FALLBACK_POINT_COUNT)
  .map((p) => ({
    x: p.x,
    y: p.y,
    z: p.z,
    depth: (p.z + 1) * 0.5,
  }))
  .sort((a, b) => a.depth - b.depth);

const HALO_INNER_BOOST: Partial<Record<OrbState, string>> = {
  agent_speaking: "#3CFFB8",
  callee_speaking: "#3CC9FF",
};

export function FallbackOrb({ state = "completed" }: { state?: OrbState }) {
  const cfg = ORB_STATE_CONFIG[state];
  const haloColor = cfg.color;
  const innerColor = HALO_INNER_BOOST[state] ?? cfg.color;
  const haloOuterId = `hero-orb-halo-outer-${state}`;
  const haloInnerId = `hero-orb-halo-inner-${state}`;

  return (
    <svg
      viewBox="-1.25 -1.25 2.5 2.5"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={haloOuterId} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={haloColor} stopOpacity="0.18" />
          <stop offset="55%" stopColor={haloColor} stopOpacity="0.07" />
          <stop offset="100%" stopColor={haloColor} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={haloInnerId} cx="50%" cy="50%" r="38%">
          <stop offset="0%" stopColor={innerColor} stopOpacity="0.28" />
          <stop offset="60%" stopColor={innerColor} stopOpacity="0.1" />
          <stop offset="100%" stopColor={innerColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        x="-1.25"
        y="-1.25"
        width="2.5"
        height="2.5"
        fill={`url(#${haloOuterId})`}
      />
      <rect
        x="-1.25"
        y="-1.25"
        width="2.5"
        height="2.5"
        fill={`url(#${haloInnerId})`}
      />
      <g fill={innerColor}>
        {FALLBACK_POINTS.map((p, i) => {
          const opacity = (1 - p.depth * 0.68).toFixed(2);
          const radius = (0.018 + (1 - p.depth) * 0.014).toFixed(3);
          return (
            <circle
              key={i}
              cx={p.x.toFixed(3)}
              cy={p.y.toFixed(3)}
              r={radius}
              opacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}
