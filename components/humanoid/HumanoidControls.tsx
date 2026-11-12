"use client";

// Cele două comenzi ale raportului: limba (RO / EN) și întrerupătorul mecanicii (oprește toate piesele în mișcare).
// Apar sus în erou și în rândul de sus al fiecărui capitol.

import { useLanguage } from "./LanguageContext";
import { useMech } from "@/components/mech/MechProvider";

const PILL =
  "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-900/40 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-400 transition-colors hover:border-white/20 hover:text-white";

export default function HumanoidControls({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  const { running, setRunning, reduced } = useMech();
  const en = lang === "en";
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <button
        type="button"
        data-no-magnetic
        onClick={toggle}
        aria-label={en ? "Switch the report to Romanian" : "Schimbă raportul în engleză"}
        className={PILL}
      >
        <span className={en ? "text-neutral-500" : "text-white"}>RO</span>
        <span className="text-neutral-500">/</span>
        <span className={en ? "text-white" : "text-neutral-500"}>EN</span>
      </button>
      {!reduced && (
        <button
          type="button"
          data-no-magnetic
          onClick={() => setRunning(!running)}
          aria-pressed={running}
          aria-label={en ? "Mechanical motion on or off" : "Mișcarea pieselor mecanice, pornită sau oprită"}
          className={PILL}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${running ? "bg-white" : "border border-current"}`} />
          <span>{en ? (running ? "Mechanics on" : "Mechanics off") : running ? "Mecanică pornită" : "Mecanică oprită"}</span>
        </button>
      )}
    </div>
  );
}
