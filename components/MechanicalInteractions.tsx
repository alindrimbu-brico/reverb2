"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMagnetic } from "@/lib/motion/magnetic";

/**
 * MechanicalInteractions
 *
 * Pornește butoanele magnetice pe tot site-ul: `.mech-magnetic` / `[data-mech="magnetic"]` și orice buton-pastilă din
 * <main> se trag câțiva pixeli spre cursor (lib/motion/magnetic.ts).
 *
 * 25 nov 2026: înclinarea cardurilor după cursor, lumina de sub cursor, linia „laser” și eticheta care sare au fost scoase
 * (hotărârea lui Alin pe planul de reparații). Nu le readuceți: se mișcau deodată cu fundalul și cu liniuțele de pe titluri.
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

    return () => {
      stopMagnetic();
    };
  }, [pathname]);

  return null;
}
