"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * AmbientBeams — Abstract, minimalist animated background inspired by Payload CMS / Linear.
 * Renders smooth, ultra-discreet luminous diagonal light beams drifting slowly across an obsidian canvas.
 * Extremely lightweight, 60fps GPU-accelerated, zero video asset overhead.
 */
export default function AmbientBeams() {
  const pathname = usePathname() || "";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const isShowcaseDemo = Boolean(
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase")
  );

  useEffect(() => {
    if (isShowcaseDemo) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with gentle easing
    let targetMouseX = width * 0.5;
    let targetMouseY = height * 0.3;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    // Define 5 subtle, architectural light beams
    const beams = [
      {
        baseX: -0.2,
        speedX: 0.00012,
        widthMultiplier: 0.45,
        angle: -32 * (Math.PI / 180),
        colorA: "rgba(0, 229, 255, 0.038)",
        colorB: "rgba(99, 102, 241, 0.02)",
        lightA: "rgba(2, 132, 199, 0.11)",
        lightB: "rgba(79, 70, 229, 0.05)",
        phase: 0,
      },
      {
        baseX: 0.15,
        speedX: 0.00009,
        widthMultiplier: 0.6,
        angle: -28 * (Math.PI / 180),
        colorA: "rgba(255, 255, 255, 0.042)",
        colorB: "rgba(201, 164, 68, 0.025)",
        lightA: "rgba(17, 18, 21, 0.085)",
        lightB: "rgba(71, 84, 103, 0.045)",
        phase: 2.1,
      },
      {
        baseX: 0.5,
        speedX: 0.00015,
        widthMultiplier: 0.35,
        angle: -34 * (Math.PI / 180),
        colorA: "rgba(16, 185, 129, 0.03)",
        colorB: "rgba(0, 229, 255, 0.015)",
        lightA: "rgba(5, 150, 105, 0.10)",
        lightB: "rgba(2, 132, 199, 0.045)",
        phase: 4.3,
      },
      {
        baseX: 0.85,
        speedX: 0.00008,
        widthMultiplier: 0.55,
        angle: -30 * (Math.PI / 180),
        colorA: "rgba(201, 164, 68, 0.032)",
        colorB: "rgba(255, 255, 255, 0.018)",
        lightA: "rgba(17, 18, 21, 0.075)",
        lightB: "rgba(71, 84, 103, 0.04)",
        phase: 1.5,
      },
      {
        baseX: 1.15,
        speedX: 0.00011,
        widthMultiplier: 0.4,
        angle: -33 * (Math.PI / 180),
        colorA: "rgba(139, 92, 246, 0.035)",
        colorB: "rgba(0, 229, 255, 0.02)",
        lightA: "rgba(109, 40, 217, 0.10)",
        lightB: "rgba(2, 132, 199, 0.045)",
        phase: 3.2,
      },
    ];

    let startTime = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (now: number) => {
      const elapsed = now - startTime;

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.03;
      currentMouseY += (targetMouseY - currentMouseY) * 0.03;

      const normW = window.innerWidth;
      const normH = window.innerHeight;

      // Check current theme
      const isLight = document.documentElement.classList.contains("light");

      ctx.clearRect(0, 0, normW, normH);

      // Render subtle subtle noise / grid points (Payload style)
      // Draw each harmonic luminous beam
      beams.forEach((beam, idx) => {
        const drift = Math.sin(elapsed * beam.speedX * 3 + beam.phase) * (normW * 0.08);
        const mouseShift = (currentMouseX / normW - 0.5) * 50 * (idx % 2 === 0 ? 1 : -1);
        const xPos = beam.baseX * normW + drift + mouseShift;

        const beamWidth = normW * beam.widthMultiplier;

        ctx.save();
        ctx.translate(xPos, normH * 0.4);
        ctx.rotate(beam.angle);

        const grad = ctx.createLinearGradient(
          -beamWidth * 0.5,
          0,
          beamWidth * 0.5,
          0
        );

        if (isLight) {
          // Tema light: aceleași dungi, în nuanțe închise pe fundal deschis, ca să se distingă
          grad.addColorStop(0, "rgba(17, 18, 21, 0)");
          grad.addColorStop(0.25, beam.lightB);
          grad.addColorStop(0.5, beam.lightA);
          grad.addColorStop(0.75, beam.lightB);
          grad.addColorStop(1, "rgba(17, 18, 21, 0)");
        } else {
          // Deep obsidian luminous tones for dark mode
          grad.addColorStop(0, "rgba(0, 0, 0, 0)");
          grad.addColorStop(0.25, beam.colorB);
          grad.addColorStop(0.5, beam.colorA);
          grad.addColorStop(0.75, beam.colorB);
          grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        }

        ctx.fillStyle = grad;
        // Draw an elongated beam rectangle extending far off canvas
        ctx.fillRect(-beamWidth * 0.5, -normH * 2, beamWidth, normH * 4);

        // Draw a hairline core edge for architectural sharpness
        const hairlineGrad = ctx.createLinearGradient(0, -normH, 0, normH);
        hairlineGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        hairlineGrad.addColorStop(
          0.5,
          isLight ? "rgba(17, 18, 21, 0.14)" : "rgba(255, 255, 255, 0.06)"
        );
        hairlineGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = hairlineGrad;
        ctx.fillRect(-1, -normH, 1.5, normH * 2);

        ctx.restore();
      });

      // Subtle atmospheric vignette overlay
      const vignette = ctx.createRadialGradient(
        normW * 0.5,
        normH * 0.4,
        normW * 0.2,
        normW * 0.5,
        normH * 0.5,
        normW * 0.8
      );
      if (isLight) {
        vignette.addColorStop(0, "rgba(246, 247, 248, 0)");
        vignette.addColorStop(1, "rgba(246, 247, 248, 0.25)");
      } else {
        vignette.addColorStop(0, "rgba(7, 8, 9, 0)");
        vignette.addColorStop(1, "rgba(7, 8, 9, 0.5)");
      }

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, normW, normH);

      if (!reduceMotion) animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isShowcaseDemo) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{
        display: "block",
      }}
      aria-hidden="true"
    />
  );
}
