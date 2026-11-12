"use client";

// Braț robotic cu două oase și clește. Cât timp cursorul e în raza lui, cleștele îl urmărește (cinematică inversă
// cu două oase, rezolvată analitic, cu limite la articulații). Altfel se leagănă încet. Mișcarea trece prin arcuri,
// ca brațul să aibă masă. Fiecare os e un element HTML rotit în jurul articulației lui.

import { useRef } from "react";
import { motion, useAnimationFrame, useInView, useMotionValue, useSpring } from "framer-motion";
import { useMech } from "./MechProvider";

const L1 = 150; // umăr → cot
const L2 = 120; // cot → încheietură
const REACH = 520; // distanța de la care brațul începe să urmărească cursorul
const DEG = 180 / Math.PI;

function Bone({ length, children }: { length: number; children?: React.ReactNode }) {
  return (
    <svg focusable="false" className="absolute left-0 top-0 -translate-y-1/2 overflow-visible text-white" width={length} height={24} viewBox={`0 -12 ${length} 24`} fill="none" stroke="currentColor">
      <path d={`M 0 -7 L ${length} -5 M 0 7 L ${length} 5`} strokeWidth={1.2} strokeOpacity={0.7} />
      <path d={`M 18 -6.5 L ${length - 18} 5.2 M 18 6.5 L ${length - 18} -5.2`} strokeWidth={0.7} strokeOpacity={0.35} />
      {/* cilindru hidraulic */}
      <path d={`M ${length * 0.22} -11 H ${length * 0.62} M ${length * 0.62} -11 L ${length * 0.82} -6`} strokeWidth={1} strokeOpacity={0.5} />
      <circle r={9} strokeWidth={1.2} fill="var(--bg)" />
      <circle r={2.5} fill="currentColor" stroke="none" />
      {children}
    </svg>
  );
}

export default function RobotArm({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const { pointer, active } = useMech();
  const shoulder = useMotionValue(-62);
  const elbow = useMotionValue(74);
  const jaw = useMotionValue(16);
  const s1 = useSpring(shoulder, { stiffness: 60, damping: 13, mass: 1.2 });
  const s2 = useSpring(elbow, { stiffness: 70, damping: 12, mass: 1 });
  const j = useSpring(jaw, { stiffness: 160, damping: 14 });
  const jUp = useMotionValue(-16);
  const box = useRef<{ x: number; y: number; at: number } | null>(null);

  useAnimationFrame((time) => {
    if (!inView || !active) return;
    const el = ref.current;
    if (!el) return;
    if (!box.current || time - box.current.at > 200) {
      const r = el.getBoundingClientRect();
      box.current = { x: r.left + r.width * 0.5, y: r.bottom - 18, at: time };
    }
    const p = pointer.current;
    const tx = p ? p.x - box.current.x : 0;
    const ty = p ? p.y - box.current.y : 0;
    const dist = Math.hypot(tx, ty);
    if (p && dist < REACH && ty < 40) {
      // două oase spre țintă; ținta se trage înapoi în raza brațului
      const d = Math.max(Math.abs(L1 - L2) + 12, Math.min(L1 + L2 - 6, dist));
      const a = Math.atan2(ty, tx);
      const phi = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))));
      const t1 = a - phi;
      const ex = L1 * Math.cos(t1);
      const ey = L1 * Math.sin(t1);
      const t2 = Math.atan2(d * Math.sin(a) - ey, d * Math.cos(a) - ex);
      shoulder.set(Math.max(-172, Math.min(-8, t1 * DEG)));
      elbow.set(Math.max(-150, Math.min(150, (t2 - t1) * DEG)));
      jaw.set(dist < L1 + L2 ? 4 : 18);
    } else {
      const t = time / 1000;
      shoulder.set(-62 + 7 * Math.sin(t * 0.55));
      elbow.set(74 + 10 * Math.sin(t * 0.8 + 1.1));
      jaw.set(14 + 6 * Math.sin(t * 1.3));
    }
    jUp.set(-j.get());
  });

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none relative ${className}`} style={{ width: 320, height: 300 }}>
      {/* soclul */}
      <svg focusable="false" className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white" width="120" height="36" viewBox="-60 -18 120 36" fill="none" stroke="currentColor">
        <path d="M -44 18 L -30 0 H 30 L 44 18 Z" strokeWidth={1.2} strokeOpacity={0.6} fill="currentColor" fillOpacity={0.03} />
        <path d="M -52 18 H 52" strokeWidth={1.2} />
      </svg>
      {/* umărul */}
      <motion.div className="absolute" style={{ left: "50%", bottom: 18, rotate: s1, transformOrigin: "0px 0px", width: 0, height: 0 }}>
        <Bone length={L1} />
        {/* cotul */}
        <motion.div className="absolute" style={{ left: L1, top: 0, rotate: s2, transformOrigin: "0px 0px", width: 0, height: 0 }}>
          <Bone length={L2} />
          {/* cleștele */}
          <div className="absolute" style={{ left: L2, top: 0, width: 0, height: 0 }}>
            <svg focusable="false" className="absolute left-0 top-0 -translate-y-1/2 overflow-visible text-white" width="46" height="40" viewBox="0 -20 46 40" fill="none" stroke="currentColor">
              <circle r={7} strokeWidth={1.2} fill="var(--bg)" />
              <circle r={2} fill="currentColor" stroke="none" />
            </svg>
            <motion.svg focusable="false" className="absolute left-0 top-0 overflow-visible text-white" width="40" height="2" viewBox="0 -1 40 2" fill="none" stroke="currentColor" style={{ rotate: j, transformOrigin: "0px 0px" }}>
              <path d="M 6 0 H 26 L 38 -6" strokeWidth={1.4} strokeLinejoin="round" />
            </motion.svg>
            <motion.svg focusable="false" className="absolute left-0 top-0 overflow-visible text-white" width="40" height="2" viewBox="0 -1 40 2" fill="none" stroke="currentColor" style={{ rotate: jUp, transformOrigin: "0px 0px" }}>
              <path d="M 6 0 H 26 L 38 6" strokeWidth={1.4} strokeLinejoin="round" />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
