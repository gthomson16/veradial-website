/* eslint-disable react-hooks/immutability --
 * three.js ShaderMaterial.uniforms is the documented mutation surface for
 * per-frame animation. R3F's render loop reads these mutations directly; the
 * React purity rules don't apply to GPU uniform state. */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Points } from "three";
import { generateFibonacciSphere } from "./heroOrbGeometry";
import { type OrbCurve, getAmplitude, pickCurve } from "./heroOrbMotion";

type HeroOrbSceneProps = {
  accent: string;
};

const POINT_COUNT = 800;
const FRAME_INTERVAL_MS = 33;
const AMP_SCALE_GAIN = 0.18;
const AMP_BRIGHTNESS_GAIN = 0.25;
const ROTATION_SPEED_RAD_PER_SEC = 0.6;
const SCALE_SMOOTHING = 0.18;
const BRIGHTNESS_SMOOTHING = 0.18;
const BASE_BRIGHTNESS = 0.92;

const SPHERE_POSITIONS = (() => {
  const points = generateFibonacciSphere(POINT_COUNT);
  const arr = new Float32Array(POINT_COUNT * 3);
  for (let i = 0; i < POINT_COUNT; i++) {
    arr[i * 3] = points[i].x;
    arr[i * 3 + 1] = points[i].y;
    arr[i * 3 + 2] = points[i].z;
  }
  return arr;
})();

const vertexShader = /* glsl */ `
  uniform float uRotationY;
  uniform float uScale;
  uniform float uPointSize;
  uniform float uPixelRatio;
  varying float vDepth;

  void main() {
    float c = cos(uRotationY);
    float s = sin(uRotationY);
    vec3 rotated = vec3(
      position.x * c + position.z * s,
      position.y,
      -position.x * s + position.z * c
    );
    vDepth = (rotated.z + 1.0) * 0.5;

    vec3 scaled = rotated * uScale;
    vec4 mvPosition = modelViewMatrix * vec4(scaled, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float sizeMult = 0.85 + (1.0 - vDepth) * 0.55;
    gl_PointSize = uPointSize * sizeMult * uPixelRatio;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uBrightness;
  varying float vDepth;

  void main() {
    vec2 cuv = gl_PointCoord - vec2(0.5);
    float dist = length(cuv);
    float circular = smoothstep(0.5, 0.0, dist);
    float depthAlpha = mix(1.0, 0.32, vDepth);
    float alpha = circular * depthAlpha * uBrightness;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function createParticleMaterial(color: string): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uRotationY: { value: 0 },
      uScale: { value: 1.0 },
      uPointSize: { value: 5.5 },
      uPixelRatio: { value: 1.0 },
      uColor: { value: new THREE.Color(color) },
      uBrightness: { value: BASE_BRIGHTNESS },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function ParticleSphere({
  amplitudeRef,
  color,
}: {
  amplitudeRef: React.MutableRefObject<number>;
  color: string;
}) {
  const pointsRef = useRef<Points>(null);
  const material = useMemo(() => createParticleMaterial(color), [color]);
  const { gl } = useThree();

  useEffect(() => {
    material.uniforms.uPixelRatio.value = Math.min(gl.getPixelRatio(), 1.5);
  }, [gl, material]);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((_, delta) => {
    const amp = amplitudeRef.current;
    const u = material.uniforms;

    u.uRotationY.value =
      (u.uRotationY.value + ROTATION_SPEED_RAD_PER_SEC * delta) %
      (Math.PI * 2);

    const targetScale = 1.0 + amp * AMP_SCALE_GAIN;
    u.uScale.value =
      u.uScale.value + (targetScale - u.uScale.value) * SCALE_SMOOTHING;

    const targetBrightness = BASE_BRIGHTNESS + amp * AMP_BRIGHTNESS_GAIN;
    u.uBrightness.value =
      u.uBrightness.value +
      (targetBrightness - u.uBrightness.value) * BRIGHTNESS_SMOOTHING;
  });

  return (
    <points ref={pointsRef} material={material}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[SPHERE_POSITIONS, 3]}
        />
      </bufferGeometry>
    </points>
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

export function HeroOrbScene({ accent }: HeroOrbSceneProps) {
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
      camera={{ position: [0, 0, 3.2], fov: 45 }}
    >
      <ParticleSphere amplitudeRef={amplitudeRef} color={accent} />
      <AmplitudeDriver
        amplitudeRef={amplitudeRef}
        curve={curve}
        startOffsetMs={startOffsetMs}
      />
    </Canvas>
  );
}
