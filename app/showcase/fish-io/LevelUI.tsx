"use client";

import React from "react";
import { ArrowLeft, Lock, PawPrint, Play } from "lucide-react";
import { Kind, KIND_ICON_PHOTO, KIND_LABEL } from "./animals";
import { LEVELS, LevelDef, Task, TaskResult, taskText } from "./levels";

// Ecranele și panourile pentru niveluri. Jocul propriu-zis (desen, mișcare, coliziuni) rămâne în page.tsx.

export interface LevelHud {
  eaten: number;
  avoidBroken: boolean;
  hit: boolean;
  elapsed: number; // secunde de la începutul nivelului
}

const GREEN = "#39FF88";
const AMBER = "#FFD400";

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function KindIcon({ kind, forbidden = false, size = 30 }: { kind: Kind | "orice"; forbidden?: boolean; size?: number }) {
  const color = forbidden ? AMBER : GREEN;
  if (kind === "orice") {
    return (
      <div className="shrink-0 rounded-full flex items-center justify-center border-2" style={{ width: size, height: size, borderColor: color, color }}>
        <PawPrint size={size * 0.55} />
      </div>
    );
  }
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/abyss-assets/enemies/enemy_${KIND_ICON_PHOTO[kind] + 1}.jpg`}
        alt=""
        className="rounded-full object-cover border-2 w-full h-full"
        style={{ borderColor: color }}
      />
      {forbidden && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black flex items-center justify-center text-[10px] font-bold leading-none" style={{ color: AMBER }}>
          ✕
        </span>
      )}
    </div>
  );
}

function taskKind(task: Task): { kind: Kind | "orice" | null; forbidden: boolean } {
  if (task.type === "eat") return { kind: task.kind, forbidden: false };
  if (task.type === "avoid") return { kind: task.kind, forbidden: true };
  return { kind: null, forbidden: false };
}

function Stars({ count, total = 3, size = "text-2xl" }: { count: number; total?: number; size?: string }) {
  return (
    <span className={`${size} tracking-widest`} aria-label={`${count} din ${total} stele`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} style={{ color: i < count ? "#FFD700" : "rgba(255,255,255,0.2)" }}>★</span>
      ))}
    </span>
  );
}

// Panoul cu task-urile din timpul jocului (sus, la mijloc).
export function TaskPanel({ level, hud }: { level: LevelDef; hud: LevelHud }) {
  const main = level.main;
  const mainLabel = main.kind === "orice" ? "Animale" : capitalize(KIND_LABEL[main.kind].plural);
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 w-[min(92vw,340px)] pointer-events-none">
      <div className="bg-black/55 border border-white/10 rounded-xl px-3 py-2 backdrop-blur-md space-y-1.5">
        <div className="flex items-center gap-2 text-white">
          <KindIcon kind={main.kind} size={28} />
          <span className="text-sm font-bold">{mainLabel}</span>
          <span className="ml-auto text-lg font-bold" style={{ color: GREEN }}>
            {Math.min(hud.eaten, main.count)}/{main.count}
          </span>
        </div>
        {level.bonus.map((b, i) => {
          let failed = false;
          let text = taskText(b);
          if (b.type === "time") {
            // hud.elapsed e în secunde întregi (rotunjit în jos): la 60 de secunde întregi, limita de 60 s a trecut deja.
            failed = hud.elapsed >= b.seconds;
            text = failed ? `Timp depășit (${b.seconds} s)` : `Mai ai ${b.seconds - hud.elapsed} s`;
          } else if (b.type === "avoid") failed = hud.avoidBroken;
          else if (b.type === "nohit") failed = hud.hit;
          const { kind, forbidden } = taskKind(b);
          return (
            <div key={i} className="flex items-center gap-2 text-xs" style={{ color: failed ? "#FF6B81" : "rgba(255,255,255,0.8)" }}>
              <span className="w-[28px] flex justify-center">{kind ? <KindIcon kind={kind} forbidden={forbidden} size={20} /> : <span>★</span>}</span>
              <span className={failed ? "line-through" : ""}>{text}</span>
              <span className="ml-auto font-bold">{failed ? "✗" : "★"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md">
      <div className="min-h-full flex items-center justify-center p-4">{children}</div>
    </div>
  );
}

// Alegerea nivelului.
export function LevelsScreen({ stars, theme, onPick, onBack }: { stars: number[]; theme: string; onPick: (i: number) => void; onBack: () => void }) {
  const total = stars.reduce((s, n) => s + (n || 0), 0);
  return (
    <Shell>
      <div className="max-w-xl w-full bg-[#0A1220]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={14} /> Meniu
          </button>
          <div className="text-white/60 text-xs uppercase tracking-widest font-bold">
            Stele: <span style={{ color: "#FFD700" }}>{total}</span> / {LEVELS.length * 3}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">Niveluri</h2>
        <p className="text-white/40 text-xs mb-6">Termină sarcina principală ca să treci mai departe. Bonusurile îți dau stele.</p>
        <div className="space-y-3">
          {LEVELS.map((lv, i) => {
            const locked = i > 0 && !(stars[i - 1] > 0);
            return (
              <button
                key={lv.id}
                disabled={locked}
                onClick={() => onPick(i)}
                className="w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-colors disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white/10 bg-white/5 border-white/10"
                style={!locked ? { borderColor: `${theme}40` } : undefined}
              >
                <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-black" style={{ backgroundColor: locked ? "rgba(255,255,255,0.3)" : theme }}>
                  {locked ? <Lock size={16} /> : lv.id}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-bold">{lv.title}</div>
                  <div className="text-white/50 text-xs truncate">{taskText(lv.main)}</div>
                </div>
                <Stars count={stars[i] || 0} size="text-lg" />
              </button>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

// Ce trebuie făcut în nivel, înainte de start.
export function LevelIntro({ index, theme, onStart, onBack }: { index: number; theme: string; onStart: () => void; onBack: () => void }) {
  const level = LEVELS[index];
  const rows: { task: Task; label: string }[] = [
    { task: level.main, label: "Sarcină principală" },
    { task: level.bonus[0], label: "Bonus ★" },
    { task: level.bonus[1], label: "Bonus ★" },
  ];
  return (
    <Shell>
      <div className="max-w-md w-full bg-[#0A1220]/90 border rounded-2xl p-6 sm:p-8 shadow-2xl" style={{ borderColor: `${theme}40` }}>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: theme }}>Nivelul {level.id}</div>
        <h2 className="text-3xl font-bold text-white mb-6">{level.title}</h2>
        <div className="space-y-3 mb-8">
          {rows.map(({ task, label }, i) => {
            const { kind, forbidden } = taskKind(task);
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 flex justify-center">{kind ? <KindIcon kind={kind} forbidden={forbidden} size={34} /> : <span className="text-xl" style={{ color: "#FFD700" }}>★</span>}</div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">{label}</div>
                  <div className="text-white text-sm font-bold">{taskText(task)}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-white/40 text-xs mb-6">
          Inelul <span style={{ color: GREEN }}>verde</span> arată animalele de mâncat, cel <span style={{ color: AMBER }}>galben</span> pe cele interzise. O săgeată îți arată încotro e cea mai apropiată țintă.
        </p>
        <div className="flex gap-3">
          <button onClick={onBack} className="px-4 py-3 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
            Înapoi
          </button>
          <button onClick={onStart} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-black" style={{ backgroundColor: theme }}>
            <Play size={16} /> Start
          </button>
        </div>
      </div>
    </Shell>
  );
}

// Rezultatul după ce sarcina principală e gata.
export function LevelComplete({
  index,
  result,
  theme,
  totalStars,
  onNext,
  onRetry,
  onLevels,
  onFree,
}: {
  index: number;
  result: { stars: number; tasks: TaskResult[]; seconds: number };
  theme: string;
  totalStars: number;
  onNext: () => void;
  onRetry: () => void;
  onLevels: () => void;
  onFree: () => void;
}) {
  const isLast = index === LEVELS.length - 1;
  return (
    <Shell>
      <div className="max-w-md w-full bg-[#051A10]/90 border border-[#00FF00]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_100px_rgba(0,255,0,0.15)] text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#00FF00]">Nivelul {LEVELS[index].id}: {LEVELS[index].title}</div>
        <h2 className="text-4xl font-bold text-white mb-3">NIVEL TERMINAT</h2>
        <div className="mb-5"><Stars count={result.stars} size="text-4xl" /></div>
        <div className="space-y-2 mb-5 text-left">
          {result.tasks.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-bold text-lg w-5 text-center" style={{ color: t.ok ? GREEN : "#FF6B81" }}>{t.ok ? "✓" : "✗"}</span>
              <span className={`text-sm ${t.ok ? "text-white" : "text-white/50"}`}>{t.text}</span>
              <span className="ml-auto text-[9px] uppercase tracking-widest text-white/30">{t.main ? "principală" : "bonus"}</span>
            </div>
          ))}
        </div>
        <div className="text-white/50 text-xs mb-6">Timp: {result.seconds} s</div>
        {isLast && (
          <div className="mb-6 p-4 rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5">
            <div className="text-[#FFD700] font-bold uppercase tracking-widest text-xs mb-1">Final</div>
            <div className="text-white text-sm">Ai terminat toate nivelurile disponibile. Stele adunate: {totalStars} / {LEVELS.length * 3}.</div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          {!isLast && (
            <button onClick={onNext} className="flex-1 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-black text-xs" style={{ backgroundColor: theme }}>
              Nivelul următor
            </button>
          )}
          <button onClick={onRetry} className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
            Rejoacă
          </button>
          <button onClick={isLast ? onFree : onLevels} className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
            {isLast ? "Mod liber" : "Niveluri"}
          </button>
        </div>
        {isLast && (
          <button onClick={onLevels} className="mt-3 text-white/40 hover:text-white text-xs uppercase tracking-widest font-bold">Înapoi la niveluri</button>
        )}
      </div>
    </Shell>
  );
}
