export type OrbPhrase = {
  startMs: number;
  durationMs: number;
  peak: number;
};

export type OrbCurve = {
  totalMs: number;
  phrases: OrbPhrase[];
};

const CURVES: OrbCurve[] = [
  {
    totalMs: 5400,
    phrases: [
      { startMs: 0, durationMs: 620, peak: 0.55 },
      { startMs: 760, durationMs: 380, peak: 0.45 },
      { startMs: 1280, durationMs: 820, peak: 0.7 },
      { startMs: 2300, durationMs: 1100, peak: 0 },
      { startMs: 3400, durationMs: 720, peak: 0.65 },
      { startMs: 4260, durationMs: 360, peak: 0.5 },
    ],
  },
  {
    totalMs: 5800,
    phrases: [
      { startMs: 0, durationMs: 480, peak: 0.5 },
      { startMs: 600, durationMs: 760, peak: 0.7 },
      { startMs: 1500, durationMs: 280, peak: 0.4 },
      { startMs: 1900, durationMs: 920, peak: 0 },
      { startMs: 2820, durationMs: 660, peak: 0.55 },
      { startMs: 3580, durationMs: 380, peak: 0.6 },
      { startMs: 4080, durationMs: 940, peak: 0.7 },
    ],
  },
  {
    totalMs: 6200,
    phrases: [
      { startMs: 0, durationMs: 540, peak: 0.6 },
      { startMs: 700, durationMs: 320, peak: 0.45 },
      { startMs: 1140, durationMs: 660, peak: 0.7 },
      { startMs: 1900, durationMs: 1180, peak: 0 },
      { startMs: 3080, durationMs: 800, peak: 0.55 },
      { startMs: 3980, durationMs: 460, peak: 0.65 },
      { startMs: 4540, durationMs: 660, peak: 0.55 },
    ],
  },
];

export function pickCurve(): OrbCurve {
  return CURVES[Math.floor(Math.random() * CURVES.length)];
}

export function getAmplitude(curve: OrbCurve, elapsedMs: number): number {
  const t = elapsedMs % curve.totalMs;
  for (const phrase of curve.phrases) {
    const end = phrase.startMs + phrase.durationMs;
    if (t >= phrase.startMs && t < end) {
      if (phrase.peak <= 0) return 0;
      const phase = (t - phrase.startMs) / phrase.durationMs;
      return phrase.peak * Math.sin(phase * Math.PI);
    }
  }
  return 0;
}
