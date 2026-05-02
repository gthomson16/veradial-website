"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Points } from "three";

import { generateFibonacciSphere } from "./orbGeometry";
import { type OrbCurve, getAmplitude, pickCurve } from "./orbMotion";
import {
  DEFAULT_ORB_STATE,
  ORB_STATE_CONFIG,
  type OrbState,
} from "./orbStates";

type OrbSceneProps = {
  state?: OrbState;
  paused?: boolean;
};

const POINT_COUNT = 800;
const FRAME_INTERVAL_MS = 33;
const AMP_SCALE_GAIN = 0.18;
const AMP_BRIGHTNESS_GAIN = 0.25;
const SCALE_SMOOTHING = 0.18;
const BRIGHTNESS_SMOOTHING = 0.18;
const STATE_COLOR_SMOOTHING = 0.06;
const ROTATION_SMOOTHING = 0.1;
const AMP_SCALE_SMOOTHING = 0.12;

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

function createParticleMaterial(initialColor: string): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uRotationY: { value: 0 },
      uScale: { value: 1.0 },
      uPointSize: { value: 5.5 },
      uPixelRatio: { value: 1.0 },
      uColor: { value: new THREE.Color(initialColor) },
      uBrightness: { value: 0.92 },
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
  state,
}: {
  amplitudeRef: React.MutableRefObject<number>;
  state: OrbState;
}) {
  const config = ORB_STATE_CONFIG[state];
  const pointsRef = useRef<Points>(null);
  const rotationSpeedRef = useRef(config.rotationSpeedRadPerSec);
  const amplitudeScaleRef = useRef(config.amplitudeScale);
  const targetColor = useMemo(
    () => new THREE.Color(config.color),
    [config.color],
  );
  const material = useMemo(
    () => createParticleMaterial(config.color),
    // Initialize once per mount; subsequent state-driven color changes are
    // smoothly lerped in useFrame so the material instance is stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
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

    u.uColor.value.lerp(targetColor, STATE_COLOR_SMOOTHING);

    rotationSpeedRef.current +=
      (config.rotationSpeedRadPerSec - rotationSpeedRef.current) *
      ROTATION_SMOOTHING;
    amplitudeScaleRef.current +=
      (config.amplitudeScale - amplitudeScaleRef.current) *
      AMP_SCALE_SMOOTHING;

    u.uRotationY.value =
      (u.uRotationY.value + rotationSpeedRef.current * delta) %
      (Math.PI * 2);

    const ampScaled = amp * amplitudeScaleRef.current;

    const targetScale = config.baseScale + ampScaled * AMP_SCALE_GAIN;
    u.uScale.value =
      u.uScale.value + (targetScale - u.uScale.value) * SCALE_SMOOTHING;

    const targetBrightness =
      config.baseBrightness + ampScaled * AMP_BRIGHTNESS_GAIN;
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
  paused,
}: {
  amplitudeRef: React.MutableRefObject<number>;
  curve: OrbCurve;
  startOffsetMs: number;
  paused: boolean;
}) {
  const { invalidate } = useThree();

  useEffect(() => {
    if (paused) return;
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
  }, [amplitudeRef, curve, invalidate, startOffsetMs, paused]);

  return null;
}

export function OrbScene({
  state = DEFAULT_ORB_STATE,
  paused = false,
}: OrbSceneProps) {
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
      <ParticleSphere amplitudeRef={amplitudeRef} state={state} />
      <AmplitudeDriver
        amplitudeRef={amplitudeRef}
        curve={curve}
        startOffsetMs={startOffsetMs}
        paused={paused}
      />
    </Canvas>
  );
}
