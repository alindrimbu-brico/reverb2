"use client";

// Rândul de sus al fiecărui capitol: înapoi la raport, numărul capitolului (cu o pereche de roți) și comenzile
// comune (limbă, întrerupătorul mecanicii). Nu e lipit de marginea de sus: antetul site-ului stă deja acolo.

import GearTrain from "@/components/mech/GearTrain";
import MechLink from "@/components/mech/MechLink";
import HumanoidControls from "./HumanoidControls";

const PAIR = [{ teeth: 12 }, { teeth: 8, at: 0 }];

export default function ChapterTop({ back, label }: { back: string; label: string }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 pt-28 md:pt-36">
      <MechLink
        href="/humanoid-reality-2026"
        className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-200 transition-colors hover:bg-white hover:text-black"
      >
        ←&nbsp;{back}
      </MechLink>
      <div className="flex items-center gap-3">
        <GearTrain gears={PAIR} module={3} speed={1.6} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">{label}</span>
      </div>
      <HumanoidControls />
    </div>
  );
}
