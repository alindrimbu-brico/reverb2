"use client";

// Cadrul comun al raportului „Realitatea Umanoidă 2026”: pagina principală și cele patru capitole.
// Ține limba, arborele motor al pieselor mecanice, diafragma și șublerul, deci toate cele cinci pagini
// arată și se mișcă la fel. Mișcarea redusă cerută în sistem oprește și animațiile framer-motion.

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import PageBackdrop from "@/components/PageBackdrop";
import { MechProvider } from "@/components/mech/MechProvider";
import Shutter from "@/components/mech/Shutter";
import Caliper from "@/components/mech/Caliper";
import { LanguageProvider } from "./LanguageContext";

export default function HumanoidFrame({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <MechProvider>
          <div className="relative text-white">
            <PageBackdrop />
            <Shutter />
            <Caliper />
            {children}
          </div>
        </MechProvider>
      </MotionConfig>
    </LanguageProvider>
  );
}
