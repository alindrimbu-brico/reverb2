"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * BackgroundWatermarkLogo
 * 
 * Large, elegant, architectural agency watermark fixed in the background across all pages.
 * Remains anchored to the viewport at all times when the user scrolls.
 * 
 * Features:
 * - Visible, high-definition CAD geometry (8% in dark, 6% in light)
 * - Precision concentric acoustic waves and central focal emitter
 * - Cardinal telemetry coordinates (+ 00°N, + 00°S, + 90°W, + 90°E)
 * - Pure pointer-events-none, never blocks any clicks
 */
export default function BackgroundWatermarkLogo() {
  const pathname = usePathname();
  const isShowcaseDemo = (pathname.startsWith("/showcase/") && pathname !== "/showcase") || (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase");
  if (isShowcaseDemo) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Centered Fixed Architectural Watermark */}
      <div className="relative w-[85vw] max-w-[850px] aspect-square flex items-center justify-center">
        
        {/* Cardinal CAD Coordinate Reticles */}
        <span className="absolute top-2 text-[10px] font-mono tracking-widest text-white/30 dark:text-white/30 light:text-neutral-900/30">
          + 00°N • REVERB ARCHITECTURE
        </span>
        <span className="absolute bottom-2 text-[10px] font-mono tracking-widest text-white/30 dark:text-white/30 light:text-neutral-900/30">
          + 00°S • CLARITY & STRUCTURE
        </span>
        <span className="absolute left-2 text-[10px] font-mono tracking-widest text-white/30 dark:text-white/30 light:text-neutral-900/30 [writing-mode:vertical-lr] rotate-180">
          + 90°W • ENGINE 2026
        </span>
        <span className="absolute right-2 text-[10px] font-mono tracking-widest text-white/30 dark:text-white/30 light:text-neutral-900/30 [writing-mode:vertical-lr]">
          + 90°E • ZYLARIS CORE
        </span>

        {/* Large Geometric Watermark SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white dark:text-white light:text-neutral-900 opacity-[0.08] dark:opacity-[0.09] light:opacity-[0.06] transition-opacity duration-700"
          fill="none"
        >
          {/* Outer Calibration Ring */}
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Secondary Structural Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="currentColor"
            strokeWidth="0.6"
          />

          {/* Inner Precision Ring */}
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1.5 2"
          />

          {/* Primary Reverberation Wave Arcs (Reverb Signature Geometry) */}
          <path
            d="M 18 50 C 18 50, 28 22, 50 22 C 72 22, 82 50, 82 50"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 27 50 C 27 50, 34 30, 50 30 C 66 30, 73 50, 73 50"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 36 50 C 36 50, 41 39, 50 39 C 59 39, 64 50, 64 50"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Echo Wave Reflection Symmetry */}
          <path
            d="M 22 50 C 22 50, 31 71, 50 71 C 69 71, 78 50, 78 50"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <path
            d="M 31 50 C 31 50, 37 63, 50 63 C 63 63, 69 50, 69 50"
            stroke="currentColor"
            strokeWidth="1.0"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />

          {/* Central Acoustic Emitter Focal Point */}
          <circle cx="50" cy="50" r="3.5" fill="currentColor" />
          <circle cx="50" cy="50" r="7.5" stroke="currentColor" strokeWidth="0.7" />

          {/* Axial Crosshairs */}
          <line x1="2" y1="50" x2="12" y2="50" stroke="currentColor" strokeWidth="0.7" />
          <line x1="88" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.7" />
          <line x1="50" y1="2" x2="50" y2="12" stroke="currentColor" strokeWidth="0.7" />
          <line x1="50" y1="88" x2="50" y2="98" stroke="currentColor" strokeWidth="0.7" />
        </svg>
      </div>
    </div>
  );
}
