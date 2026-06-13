"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface Layer { freq: number; type: OscillatorType; gain: number; lfoRate: number }

const SECTIONS: Record<string, Layer[]> = {
  hero: [
    { freq: 55, type: "sine", gain: 0.055, lfoRate: 0.07 },
    { freq: 110, type: "sine", gain: 0.025, lfoRate: 0.12 },
  ],
  "economic-impact": [
    { freq: 82.4, type: "sine", gain: 0.045, lfoRate: 0.09 },
    { freq: 164.8, type: "sine", gain: 0.02, lfoRate: 0.15 },
    { freq: 329.6, type: "sine", gain: 0.01, lfoRate: 0.22 },
  ],
  "market-leaders": [
    { freq: 65.4, type: "sawtooth", gain: 0.018, lfoRate: 0.06 },
    { freq: 130.8, type: "sine", gain: 0.03, lfoRate: 0.1 },
    { freq: 196.0, type: "sine", gain: 0.015, lfoRate: 0.18 },
  ],
  "brain-behind": [
    { freq: 110, type: "sine", gain: 0.04, lfoRate: 0.05 },
    { freq: 165, type: "sine", gain: 0.025, lfoRate: 0.08 },
    { freq: 220, type: "sine", gain: 0.015, lfoRate: 0.14 },
    { freq: 440, type: "sine", gain: 0.006, lfoRate: 0.25 },
  ],
  "survival-guide": [
    { freq: 73.4, type: "sine", gain: 0.05, lfoRate: 0.08 },
    { freq: 146.8, type: "sine", gain: 0.02, lfoRate: 0.13 },
  ],
  "footer-cta": [
    { freq: 87.3, type: "sine", gain: 0.04, lfoRate: 0.07 },
    { freq: 130.8, type: "sine", gain: 0.022, lfoRate: 0.11 },
    { freq: 174.6, type: "sine", gain: 0.012, lfoRate: 0.19 },
  ],
};

export default function AudioEngine() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const activeRef = useRef<{ osc: OscillatorNode; lfo: OscillatorNode; gain: GainNode }[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  const startSection = useCallback((sectionId: string) => {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;

    const layers = SECTIONS[sectionId] ?? SECTIONS.hero;

    // Fade out old oscillators
    const old = activeRef.current;
    old.forEach(({ osc, lfo, gain }) => {
      gain.gain.setTargetAtTime(0, ctx.currentTime, 1.2);
      setTimeout(() => { try { osc.stop(); lfo.stop(); } catch {} }, 5000);
    });
    activeRef.current = [];

    // Fade in new oscillators
    layers.forEach(({ freq, type, gain: gainVal, lfoRate }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();

      osc.type = type;
      osc.frequency.value = freq;
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.setTargetAtTime(gainVal, ctx.currentTime, 2.5);

      lfo.type = "sine";
      lfo.frequency.value = lfoRate;
      lfoGain.gain.value = freq * 0.003;

      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      osc.connect(gainNode);
      gainNode.connect(master);

      lfo.start();
      osc.start();

      activeRef.current.push({ osc, lfo, gain: gainNode });
    });
  }, []);

  const toggle = () => {
    if (!enabled) {
      if (!ctxRef.current) {
        const ctx = new AudioContext();
        ctxRef.current = ctx;
        // iOS Safari: AudioContext starts suspended even inside a gesture handler
        ctx.resume().then(() => {
          const master = ctx.createGain();
          master.gain.value = 0.28;
          master.connect(ctx.destination);
          masterRef.current = master;
          startSection(currentSection);
        });
      } else if (ctxRef.current.state === "suspended") {
        ctxRef.current.resume();
      }
      if (ctxRef.current && ctxRef.current.state !== "suspended" && masterRef.current) {
        masterRef.current.gain.setTargetAtTime(0.28, ctxRef.current.currentTime, 0.5);
      }
      setEnabled(true);
    } else {
      if (masterRef.current && ctxRef.current) {
        masterRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.4);
      }
      setEnabled(false);
    }
  };

  useEffect(() => {
    if (enabled && masterRef.current && ctxRef.current && ctxRef.current.state === "running") {
      masterRef.current.gain.setTargetAtTime(0.28, ctxRef.current.currentTime, 0.5);
      startSection(currentSection);
    }
  }, [currentSection, startSection]);

  // IntersectionObserver watcher
  useEffect(() => {
    const ids = Object.keys(SECTIONS);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrentSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    return () => {
      activeRef.current.forEach(({ osc, lfo }) => {
        try { osc.stop(); lfo.stop(); } catch {}
      });
      ctxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggle}
      title={enabled ? "Mute ambient sound" : "Enable ambient sound"}
      className="fixed left-4 z-50 flex items-center gap-2 rounded-full backdrop-blur-sm border transition-all duration-500 cursor-pointer group"
      style={{
        bottom: "calc(5rem + env(safe-area-inset-bottom, 0px))",
        padding: "8px 14px",
        background: enabled ? "rgba(0,229,255,0.12)" : "rgba(8,8,16,0.85)",
        borderColor: enabled ? "rgba(0,229,255,0.40)" : "rgba(255,255,255,0.12)",
        boxShadow: enabled ? "0 0 28px rgba(0,229,255,0.25)" : "none",
      }}
    >
      {enabled ? (
        <Volume2 size={14} className="text-[#00E5FF] shrink-0" />
      ) : (
        <VolumeX size={14} className="text-white/40 group-hover:text-white/70 transition-colors shrink-0" />
      )}
      <span
        className="text-[10px] font-semibold uppercase tracking-wider"
        style={{ color: enabled ? "#00E5FF" : "rgba(255,255,255,0.35)" }}
      >
        {enabled ? "On" : "Sound"}
      </span>
      {enabled && (
        <span className="absolute inset-0 rounded-full border border-[#00E5FF]/25 animate-ping" style={{ animationDuration: "2s" }} />
      )}
    </button>
  );
}
