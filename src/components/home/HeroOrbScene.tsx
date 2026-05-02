"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { type ComponentRef, useEffect, useRef, useState } from "react";
import type { Mesh } from "three";
import { type OrbCurve, getAmplitude, pickCurve } from "./heroOrbMotion";

type HeroOrbSceneProps = {
  accent: string;
  accentSecondary: string;
};

const FRAME_INTERVAL_MS = 33;

function Orb({
  amplitudeRef,
  accent,
}: {
  amplitudeRef: React.MutableRefObject<number>;
  accent: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ComponentRef<typeof MeshDistortMaterial>>(null);

  useFrame(() => {
    const amp = amplitudeRef.current;
    if (materialRef.current) {
      materialRef.current.distort = 0.28 + amp * 0.32;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0014;
      meshRef.current.rotation.x = Math.sin(performance.now() * 0.0002) * 0.08;
      const scale = 1 + amp * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 32]} />
      <MeshDistortMaterial
        ref={materialRef}
        color={accent}
        emissive={accent}
        emissiveIntensity={0.4}
        roughness={0.35}
        metalness={0.1}
        distort={0.3}
        speed={1.1}
      />
    </mesh>
  );
}

function AmplitudeDriver({
  amplitudeRef,
  curve,
  startOffsetMs,
}: {
  amplitudeRef: React.MutableRefObject<number>;
  curve: OrbCurve;
  startOffsetMs: number;
}) {
  const { invalidate } = useThree();

  useEffect(() => {
    const startedAt = performance.now() - startOffsetMs;
    let lastTick = 0;
    let raf = 0;

    const tick = (now: number) => {
      if (now - lastTick >= FRAME_INTERVAL_MS) {
        amplitudeRef.current = getAmplitude(curve, now - startedAt);
        invalidate();
        lastTick = now;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [amplitudeRef, curve, invalidate, startOffsetMs]);

  return null;
}

export function HeroOrbScene({ accent, accentSecondary }: HeroOrbSceneProps) {
  const amplitudeRef = useRef(0);
  const [curve] = useState<OrbCurve>(() => pickCurve());
  const [startOffsetMs] = useState<number>(() => Math.random() * 1500);

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
      }}
      camera={{ position: [0, 0, 2.6], fov: 45 }}
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[2, 2, 2.4]} intensity={1.1} color={accent} />
      <pointLight position={[-2, -1.5, 1.6]} intensity={0.6} color={accentSecondary} />
      <Orb amplitudeRef={amplitudeRef} accent={accent} />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.18}
          luminanceSmoothing={0.65}
          mipmapBlur
        />
      </EffectComposer>
      <AmplitudeDriver
        amplitudeRef={amplitudeRef}
        curve={curve}
        startOffsetMs={startOffsetMs}
      />
    </Canvas>
  );
}
