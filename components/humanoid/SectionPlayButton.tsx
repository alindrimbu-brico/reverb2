"use client";

import { useState, useEffect } from "react";
import { Play, Square } from "lucide-react";

interface Props {
  sectionId: string;
  accent?: string;
  label?: string;
}

export default function SectionPlayButton({ sectionId, accent = "#00E5FF", label }: Props) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onState = (e: Event) => {
      const detail = (e as CustomEvent<{ sectionId: string; enabled: boolean }>).detail;
      if (detail.sectionId === sectionId) setPlaying(detail.enabled);
      else setPlaying(false);
    };
    window.addEventListener("humanoid-audio-state", onState);
    return () => window.removeEventListener("humanoid-audio-state", onState);
  }, [sectionId]);

  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent("humanoid-play-section", { detail: { sectionId } })
    );
  };

  return (
    <button
      onClick={handleClick}
      title={playing ? "Stop audio" : "Play ambient audio for this section"}
      className="inline-flex items-center gap-1.5 rounded-full transition-all duration-300 cursor-pointer group"
      style={{
        padding: "5px 12px",
        background: playing ? `${accent}18` : "rgba(255,255,255,0.04)",
        border: `1px solid ${playing ? accent + "45" : "rgba(255,255,255,0.10)"}`,
        color: playing ? accent : "rgba(255,255,255,0.35)",
        boxShadow: playing ? `0 0 14px ${accent}20` : "none",
      }}
    >
      {playing ? (
        <Square size={10} fill="currentColor" strokeWidth={0} />
      ) : (
        <Play size={10} fill="currentColor" strokeWidth={0} />
      )}
      <span className="text-[9px] font-bold uppercase tracking-widest">
        {playing ? "On" : (label ?? "Sound")}
      </span>
      {playing && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
          style={{ background: accent }}
        />
      )}
    </button>
  );
}
