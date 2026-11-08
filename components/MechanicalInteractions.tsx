"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * MechanicalInteractions
 * 
 * High-performance global interaction engine that powers varied micro-mechanics
 * across all interactive elements on Reverb:
 * 
 * 1. [data-mech="card"] / .mech-card:
 *    - Cursor-tracking spotlight glow (--mouse-x, --mouse-y)
 *    - 3D perspective spring tilt (--tilt-x, --tilt-y)
 * 2. [data-mech="magnetic"] / .mech-magnetic:
 *    - Elastic magnetic attraction pulling the element towards cursor
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

    // ── 1. Magnetic Elements Engine ──
    const magneticElements = document.querySelectorAll<HTMLElement>(
      '.mech-magnetic, [data-mech="magnetic"]'
    );

    const magneticCleanups: Array<() => void> = [];

    magneticElements.forEach((el) => {
      let rafId: number | null = null;
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovered = false;

      const animate = () => {
        if (!isHovered && Math.abs(currentX) < 0.1 && Math.abs(currentY) < 0.1) {
          el.style.transform = "";
          rafId = null;
          return;
        }

        // Spring lerp
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;

        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
        rafId = requestAnimationFrame(animate);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const maxPull = 6; // max pull in pixels
        const dx = (e.clientX - centerX) / (rect.width / 2);
        const dy = (e.clientY - centerY) / (rect.height / 2);

        targetX = Math.max(-maxPull, Math.min(maxPull, dx * maxPull));
        targetY = Math.max(-maxPull, Math.min(maxPull, dy * maxPull));

        if (!rafId) {
          rafId = requestAnimationFrame(animate);
        }
      };

      const onMouseEnter = () => {
        isHovered = true;
        if (!rafId) rafId = requestAnimationFrame(animate);
      };

      const onMouseLeave = () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
      };

      el.addEventListener("mousemove", onMouseMove, { passive: true });
      el.addEventListener("mouseenter", onMouseEnter, { passive: true });
      el.addEventListener("mouseleave", onMouseLeave, { passive: true });

      magneticCleanups.push(() => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
      });
    });

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
      magneticCleanups.forEach((fn) => fn());
      cardCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
