"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * AmbientBeams — fundalul animat al site-ului agenției: cinci dungi de lumină foarte discrete, oblice, care alunecă încet.
 *
 * Cum e făcut ieftin (13 nov 2026, după măsurătoarea `docs/designs/linia_care_merge_2026-11-12/verificari/greutate_cauza.py`):
 * varianta veche umplea tot ecranul, la rezoluție plină, de 60 de ori pe secundă, și ținea singură firul principal ocupat
 * (telefon încetinit de 4 ori: 13 cadre pe secundă cu ea, 60 fără ea). Acum:
 *  - dungile și vigneta, care sunt degradeuri moi, se desenează pe un canvas de trei ori mai mic pe fiecare latură, mărit din CSS;
 *  - firele subțiri din mijlocul dungilor sunt cinci elemente mutate cu `transform` (rămân la fel de fine, nu costă desen);
 *  - se redesenează de cel mult 30 de ori pe secundă (dungile se mișcă sub 40 px pe secundă).
 * NU ridicați rezoluția canvasului și nu scoateți limita de cadre fără să rulați din nou măsurătoarea.
 */
const SCALE = 1 / 3; // rezoluția canvasului față de pixelii CSS
const FRAME_MS = 1000 / 30;

const BEAMS = [
  { baseX: -0.2, speedX: 0.00012, widthMultiplier: 0.45, angle: -32 * (Math.PI / 180), colorA: "rgba(0, 229, 255, 0.038)", colorB: "rgba(99, 102, 241, 0.02)", lightA: "rgba(2, 132, 199, 0.11)", lightB: "rgba(79, 70, 229, 0.05)", phase: 0 },
  { baseX: 0.15, speedX: 0.00009, widthMultiplier: 0.6, angle: -28 * (Math.PI / 180), colorA: "rgba(255, 255, 255, 0.042)", colorB: "rgba(201, 164, 68, 0.025)", lightA: "rgba(17, 18, 21, 0.085)", lightB: "rgba(71, 84, 103, 0.045)", phase: 2.1 },
  { baseX: 0.5, speedX: 0.00015, widthMultiplier: 0.35, angle: -34 * (Math.PI / 180), colorA: "rgba(16, 185, 129, 0.03)", colorB: "rgba(0, 229, 255, 0.015)", lightA: "rgba(6, 95, 70, 0.13)", lightB: "rgba(6, 95, 70, 0.05)", phase: 4.3 },
  { baseX: 0.85, speedX: 0.00008, widthMultiplier: 0.55, angle: -30 * (Math.PI / 180), colorA: "rgba(201, 164, 68, 0.032)", colorB: "rgba(255, 255, 255, 0.018)", lightA: "rgba(17, 18, 21, 0.075)", lightB: "rgba(71, 84, 103, 0.04)", phase: 1.5 },
  { baseX: 1.15, speedX: 0.00011, widthMultiplier: 0.4, angle: -33 * (Math.PI / 180), colorA: "rgba(139, 92, 246, 0.035)", colorB: "rgba(0, 229, 255, 0.02)", lightA: "rgba(109, 40, 217, 0.10)", lightB: "rgba(2, 132, 199, 0.045)", phase: 3.2 },
];

export default function AmbientBeams() {
  const pathname = usePathname() || "";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

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

    let animationFrameId = 0;
    let normW = window.innerWidth;
    let normH = window.innerHeight;

    // Mouse tracking with gentle easing
    let targetMouseX = normW * 0.5;
    let targetMouseY = normH * 0.3;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      normW = window.innerWidth;
      normH = window.innerHeight;
      canvas.width = Math.max(1, Math.round(normW * SCALE));
      canvas.height = Math.max(1, Math.round(normH * SCALE));
      // Se desenează în pixeli CSS; canvasul e mai mic și e mărit din CSS.
      ctx.setTransform(canvas.width / normW, 0, 0, canvas.height / normH, 0, 0);
      // Firul din mijlocul fiecărei dungi: 1,5 px lățime, de la -normH la +normH în jurul punctului (x, 40 % din înălțime).
      for (const line of linesRef.current) {
        if (!line) continue;
        line.style.top = `${normH * 0.4 - normH}px`;
        line.style.height = `${normH * 2}px`;
      }
      lastDraw = -Infinity;
    };

    const startTime = performance.now();
    let lastDraw = -Infinity;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (now: number) => {
      if (!reduceMotion) animationFrameId = requestAnimationFrame(render);
      const dt = now - lastDraw;
      if (dt < FRAME_MS - 1) return;
      lastDraw = now;
      const elapsed = now - startTime;

      // Smooth mouse interpolation (aceeași constantă de timp ca la 0,03 pe cadru la 60 de cadre pe secundă)
      const ease = 1 - Math.pow(0.97, Math.min(dt, 250) / (1000 / 60));
      currentMouseX += (targetMouseX - currentMouseX) * ease;
      currentMouseY += (targetMouseY - currentMouseY) * ease;

      const isLight = document.documentElement.classList.contains("light");

      ctx.clearRect(0, 0, normW, normH);

      BEAMS.forEach((beam, idx) => {
        const drift = Math.sin(elapsed * beam.speedX * 3 + beam.phase) * (normW * 0.08);
        const mouseShift = (currentMouseX / normW - 0.5) * 50 * (idx % 2 === 0 ? 1 : -1);
        const xPos = beam.baseX * normW + drift + mouseShift;
        const beamWidth = normW * beam.widthMultiplier;

        ctx.save();
        ctx.translate(xPos, normH * 0.4);
        ctx.rotate(beam.angle);

        const grad = ctx.createLinearGradient(-beamWidth * 0.5, 0, beamWidth * 0.5, 0);
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
        ctx.restore();

        // Firul subțire din mijlocul dungii („architectural sharpness”): element separat, mutat cu transform.
        const line = linesRef.current[idx];
        if (line) line.style.transform = `translate3d(${(xPos - 1).toFixed(2)}px, 0, 0) rotate(${beam.angle}rad)`;
      });

      // Subtle atmospheric vignette overlay
      const vignette = ctx.createRadialGradient(normW * 0.5, normH * 0.4, normW * 0.2, normW * 0.5, normH * 0.5, normW * 0.8);
      if (isLight) {
        vignette.addColorStop(0, "rgba(246, 247, 248, 0)");
        vignette.addColorStop(1, "rgba(246, 247, 248, 0.25)");
      } else {
        vignette.addColorStop(0, "rgba(7, 8, 9, 0)");
        vignette.addColorStop(1, "rgba(7, 8, 9, 0.5)");
      }
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, normW, normH);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isShowcaseDemo]);

  if (isShowcaseDemo) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Firele stau sub canvas: vigneta desenată pe canvas le stinge spre margini, ca în varianta dintr-o singură bucată. */}
      {BEAMS.map((_, i) => (
        <span
          key={i}
          ref={(el) => { linesRef.current[i] = el; }}
          className="ambient-hairline"
        />
      ))}
      <canvas ref={canvasRef} className="ambient-canvas absolute inset-0 w-full h-full" style={{ display: "block" }} />
    </div>
  );
}
