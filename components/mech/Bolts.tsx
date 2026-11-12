"use client";

// Patru șuruburi în colțurile unui card. Se strâng când cardul intră în ecran, se desfac când iese,
// și fac un sfert de tură când treci cu mouse-ul peste card (cardul trebuie să aibă clasele `relative group`).

import { motion } from "framer-motion";

const CORNERS = ["left-3 top-3", "right-3 top-3", "left-3 bottom-3", "right-3 bottom-3"];

export default function Bolts() {
  return (
    <>
      {CORNERS.map((pos, i) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`pointer-events-none absolute ${pos} text-white transition-transform duration-500 ease-out group-hover:rotate-90`}
        >
          <motion.svg
            focusable="false"
            width="9"
            height="9"
            viewBox="-5 -5 10 10"
            fill="none"
            stroke="currentColor"
            initial={{ rotate: -220, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 0.5 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ type: "spring", stiffness: 80, damping: 13, delay: 0.08 * i }}
          >
            <circle r={4} strokeWidth={1} />
            <line x1={-2.6} y1={0} x2={2.6} y2={0} strokeWidth={1.2} />
          </motion.svg>
        </span>
      ))}
    </>
  );
}
