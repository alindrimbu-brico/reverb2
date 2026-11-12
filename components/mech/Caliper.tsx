"use client";

// Șubler: falca mobilă se mută odată cu derularea paginii și arată cât la sută ai parcurs.
// Stă sub antetul fix al site-ului, doar de la lățimea „md” în sus (pe telefon rămâne bara de progres a site-ului).

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Caliper() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.8 });
  const left = useTransform(p, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);
  const pct = useTransform(p, (v) => `${Math.round(Math.max(0, Math.min(1, v)) * 100)}`.padStart(2, "0"));
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-[5.25rem] z-30 hidden text-white md:block">
      {/* Fâșia din spate ține conținutul care trece pe dedesubt departe de gradații */}
      <div className="mx-auto max-w-5xl rounded-full border border-white/10 bg-[var(--bg)]/85 px-10 py-1 backdrop-blur-sm">
        <div className="relative h-7">
          {/* rigla cu gradații */}
          <div
            className="absolute inset-x-0 top-2 h-2 opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 10px)" }}
          />
          <div
            className="absolute inset-x-0 top-2 h-3.5 opacity-40"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 50px)" }}
          />
          <div className="absolute inset-x-0 top-2 h-px bg-current opacity-40" />
          {/* falca fixă */}
          <svg focusable="false" className="absolute -left-2 top-0 opacity-70" width="10" height="28" viewBox="0 0 10 28" fill="none" stroke="currentColor">
            <path d="M 9 2 V 26 M 9 2 H 3 V 9" strokeWidth={1.2} strokeLinejoin="round" />
          </svg>
          {/* falca mobilă, cu vernier și citire */}
          <motion.div className="absolute top-0" style={{ left }}>
            <svg focusable="false" className="-translate-x-[1px] opacity-90" width="46" height="28" viewBox="0 0 46 28" fill="none" stroke="currentColor">
              <path d="M 1 2 V 26 M 1 2 H 7 V 9" strokeWidth={1.2} strokeLinejoin="round" />
              <rect x="1" y="6" width="44" height="12" rx="2" strokeWidth={1} fill="var(--bg)" />
              <path d="M 6 18 V 14 M 11 18 V 15 M 16 18 V 15 M 21 18 V 14" strokeWidth={0.8} strokeOpacity={0.7} />
            </svg>
            <motion.span className="absolute left-[25px] top-[7px] font-mono text-[9px] leading-none tracking-wider text-white">{pct}</motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
