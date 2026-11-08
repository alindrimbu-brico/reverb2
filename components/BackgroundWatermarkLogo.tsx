"use client";

import React from "react";

/**
 * BackgroundWatermarkLogo
 * 
 * A large, ultra-discreet agency logo watermark fixed in the background
 * on all pages. Stays anchored to the viewport during scroll.
 * 
 * Minimalist, architectural CAD aesthetics:
 * - Extremely low opacity (~3% in dark, ~2% in light)
 * - Subtle geometric crosshairs & telemetry markings
 * - Zero layout shift or pointer interference (pointer-events-none)
 */
export default function BackgroundWatermarkLogo() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden"
    >
      {/* Centered Large Watermark */}
      <div className="relative w-[85vw] max-w-[880px] aspect-square flex items-center justify-center select-none">
        
        {/* Subtle CAD Crosshairs at cardinal points */}
        <span className="absolute top-0 text-[10px] font-mono opacity-20 text-neutral-400 dark:text-neutral-500 light:text-neutral-600">
          + 00°N
        </span>
        <span className="absolute bottom-0 text-[10px] font-mono opacity-20 text-neutral-400 dark:text-neutral-500 light:text-neutral-600">
          + 00°S
        </span>
        <span className="absolute left-0 text-[10px] font-mono opacity-20 text-neutral-400 dark:text-neutral-500 light:text-neutral-600">
          + 90°W
        </span>
        <span className="absolute right-0 text-[10px] font-mono opacity-20 text-neutral-400 dark:text-neutral-500 light:text-neutral-600">
          + 90°E
        </span>

        {/* Large Geometric SVG Watermark matching Reverb Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-black dark:text-white opacity-[0.022] dark:opacity-[0.035] transition-opacity duration-700"
          fill="none"
        >
          {/* Outer Calibration Ring */}
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />

          {/* Secondary Structural Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="currentColor"
            strokeWidth="0.4"
          />

          {/* Inner Ring */}
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="1 2"
          />

          {/* Acoustic Wave Arcs (Reverb Signature Geometry) */}
          <path
            d="M 20 50 C 20 50, 30 25, 50 25 C 70 25, 80 50, 80 50"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M 29 50 C 29 50, 36 32, 50 32 C 64 32, 71 50, 71 50"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d="M 38 50 C 38 50, 42 41, 50 41 C 58 41, 62 50, 62 50"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />

          {/* Lower Echo Symmetry */}
          <path
            d="M 24 50 C 24 50, 32 68, 50 68 C 68 68, 76 50, 76 50"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <path
            d="M 33 50 C 33 50, 38 61, 50 61 C 62 61, 67 50, 67 50"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />

          {/* Central Acoustic Emitter */}
          <circle cx="50" cy="50" r="3.5" fill="currentColor" />
          <circle cx="50" cy="50" r="7" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        {/* Ambient Radial Vignette to soften edges */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[var(--bg)] opacity-60" />
      </div>
    </div>
  );
}
