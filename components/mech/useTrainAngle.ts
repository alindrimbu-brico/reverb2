"use client";

// Unghiul unui mecanism (tren de roți, bandă, bielă-manivelă), integrat din viteza arborelui motor.
// Mecanismul accelerează când cursorul e aproape de el și stă pe loc cât timp nu e în ecran.

import { useRef, type RefObject } from "react";
import { useAnimationFrame, useInView, useMotionValue, type MotionValue } from "framer-motion";
import { useMech } from "./MechProvider";

/** Distanța (px) de la care cursorul începe să accelereze mecanismul. */
const NEAR_RADIUS = 260;

export function useTrainAngle(
  ref: RefObject<HTMLElement | null>,
  opts: { speed?: number; near?: number; id?: string } = {},
): { angle: MotionValue<number>; inView: boolean } {
  const { speed = 1, near = 3, id } = opts;
  const { omega, pointer } = useMech();
  const angle = useMotionValue(0);
  const inView = useInView(ref, { margin: "120px 0px 120px 0px" });
  const box = useRef<{ x: number; y: number; at: number } | null>(null);

  useAnimationFrame((time, delta) => {
    if (!inView) return;
    const w = omega.get();
    if (w === 0) return;
    const dt = Math.min(delta, 50) / 1000;
    let gain = 1;
    const p = pointer.current;
    const el = ref.current;
    if (p && el && near > 0) {
      // Poziția mecanismului se recitește cel mult de patru ori pe secundă, nu la fiecare cadru.
      if (!box.current || time - box.current.at > 250) {
        const r = el.getBoundingClientRect();
        box.current = { x: r.left + r.width / 2, y: r.top + r.height / 2, at: time };
      }
      const d = Math.hypot(p.x - box.current.x, p.y - box.current.y);
      if (d < NEAR_RADIUS) {
        const k = 1 - d / NEAR_RADIUS;
        gain += near * k * k;
      }
    }
    const next = angle.get() + w * speed * gain * dt;
    angle.set(next);
    if (id && typeof window !== "undefined" && window.__mech) window.__mech.trains[id] = next;
  });

  return { angle, inView };
}
