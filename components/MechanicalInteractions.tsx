"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMagnetic } from "@/lib/motion/magnetic";

/**
 * MechanicalInteractions
 * 
 * High-performance global interaction engine that powers varied micro-mechanics
 * across all interactive elements on Reverb:
 * 
 * 1. [data-mech="card"] / .mech-card:
 *    - Cursor-tracking spotlight glow (--mouse-x, --mouse-y)
 *    - 3D perspective spring tilt (--tilt-x, --tilt-y)
 * 2. [data-mech="magnetic"] / .mech-magnetic + orice buton-pastilă din <main>:
 *    - Elastic magnetic attraction pulling the element towards cursor
 *    - Implementarea e în lib/motion/magnetic.ts (biblioteca de mișcare)
 * 3. [data-mech="scan"] / .mech-scanline:
 *    - High-precision telemetry scanline sweep
 * 4. Micro-tactile sound / feedback for button engagements
 */
export default function MechanicalInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on devices with fine pointer (mouse / trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    // ── 1. Butoane magnetice: biblioteca lib/motion/magnetic.ts ──
    // Pe machetele individuale (/showcase/<x>) rămân magnetice doar elementele marcate explicit.
    const isShowcaseDemo = /^\/(en\/)?showcase\/.+/.test(pathname || "");
    const stopMagnetic = initMagnetic({ auto: !isShowcaseDemo });

    // ── 2. Card 3D Tilt & Cursor Spotlight Engine ──
    const cardElements = document.querySelectorAll<HTMLElement>(
      '.mech-card, [data-mech="card"], [data-mech="tilt"]'
    );

    const cardCleanups: Array<() => void> = [];

    cardElements.forEach((card) => {
      let isHovered = false;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let curTiltX = 0;
      let curTiltY = 0;
      let rafId: number | null = null;

      const animateTilt = () => {
        if (!isHovered && Math.abs(curTiltX) < 0.05 && Math.abs(curTiltY) < 0.05) {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
          card.style.setProperty("--lift-y", "0px");
          rafId = null;
          return;
        }

        curTiltX += (targetTiltX - curTiltX) * 0.15;
        curTiltY += (targetTiltY - curTiltY) * 0.15;

        card.style.setProperty("--tilt-x", `${curTiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${curTiltY.toFixed(2)}deg`);
        card.style.setProperty("--lift-y", isHovered ? "-4px" : "0px");

        rafId = requestAnimationFrame(animateTilt);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set spotlight pixel coordinates
        card.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
        card.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);

        // Compute 3D tilt angles (max +/- 3.5 deg for subtle, high-end feel)
        const normX = (x / rect.width - 0.5) * 2;
        const normY = (y / rect.height - 0.5) * 2;

        targetTiltX = -normY * 3.5;
        targetTiltY = normX * 3.5;

        if (!rafId) rafId = requestAnimationFrame(animateTilt);
      };

      const onMouseEnter = (e: MouseEvent) => {
        isHovered = true;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${(e.clientX - rect.left).toFixed(1)}px`);
        card.style.setProperty("--mouse-y", `${(e.clientY - rect.top).toFixed(1)}px`);
        if (!rafId) rafId = requestAnimationFrame(animateTilt);
      };

      const onMouseLeave = () => {
        isHovered = false;
        targetTiltX = 0;
        targetTiltY = 0;
        card.style.setProperty("--mouse-x", "-999px");
        card.style.setProperty("--mouse-y", "-999px");
      };

      card.addEventListener("mousemove", onMouseMove, { passive: true });
      card.addEventListener("mouseenter", onMouseEnter, { passive: true });
      card.addEventListener("mouseleave", onMouseLeave, { passive: true });

      cardCleanups.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mouseleave", onMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
      });
    });

    return () => {
      stopMagnetic();
      cardCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
