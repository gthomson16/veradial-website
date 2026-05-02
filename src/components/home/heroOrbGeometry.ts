export type SpherePoint = { x: number; y: number; z: number };

export function generateFibonacciSphere(n: number): SpherePoint[] {
  const phi = Math.PI * (Math.sqrt(5) - 1);
  const points: SpherePoint[] = [];
  const denom = Math.max(n - 1, 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / denom) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;
    points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return points;
}
