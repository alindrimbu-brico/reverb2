"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import InstallPWA from "@/components/InstallPWA";

interface Scene {
  id: number;
  time: string;
  section: string;
  visualPrompt: string;
  voiceover: string;
  cameraDirection: string;
}

interface ScriptData {
  title: string;
  targetBrand: string;
  targetDurationSeconds: number;
  hook: {
    timestamp: string;
    visualPrompt: string;
    voiceover: string;
    subtitleEmphasis: string[];
  };
  scenes: Scene[];
  audioSettings: {
    voiceModel: string;
    pacing: string;
    backgroundTrack: string;
  };
}

const presetTemplates = [
  {
    label: "Bricolando — Trusă Chei Tubulare Profesionale",
    brand: "Bricolando.ro",
    prompt: "Prezintă trusa de chei tubulare din crom-vanadiu. Meșterul care s-a săturat de unelte ieftine care se rup la prima forțare. Demonstrație de rezistență la torsiune extremă, clichet cu 72 de dinți și livrare rapidă în 24-48h cu garanție.",
  },
  {
    label: "Reverb Digital — Optimizare Căutare AI (GEO)",
    brand: "Reverb Digital",
    prompt: "De ce afacerile locale pierd clienți în 2026 dacă nu sunt vizibile în ChatGPT, Perplexity și Gemini. Explică pe scurt noua căutare conversațională și cum transformă Reverb un site obișnuit într-o sursă recomandată de AI.",
  },
  {
    label: "Raft Plin — Organizare Casă & Bucătărie",
    brand: "RaftPlin.ro",
    prompt: "Problema dulapurilor supraaglomerate. Prezentare rapidă a sistemelor modulare de organizare sertare și rafturi. Satisfacție vizuală 'before and after' și preț promoțional de lansare.",
  },
];

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState<"intake" | "script" | "audio" | "video" | "approval" | "briefing">("intake");
  const [selectedBrand, setSelectedBrand] = useState("Bricolando.ro");
  const [voiceInput, setVoiceInput] = useState(presetTemplates[0].prompt);
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState<"draft" | "approved" | "queued">("draft");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"ro" | "en" | "es" | "de">("ro");

  const [script, setScript] = useState<ScriptData>({
    title: "Trusă Chei Crom-Vanadiu: Stop Uneltelor Care Cedează",
    targetBrand: "Bricolando.ro",
    targetDurationSeconds: 30,
    hook: {
      timestamp: "00:00 - 00:03",
      visualPrompt: "Macro cinematic la 60fps: un clichet din oțel crom-vanadiu rotindu-se cu sunet mecanic metalic perfect, reflexii aurii pe fundal negru obsidian.",
      voiceover: "Dacă încă cumperi chei care se îndoaie la prima piuliță ruginită, oprește-te 30 de secunde.",
      subtitleEmphasis: ["chei care se îndoaie", "oprește-te"],
    },
    scenes: [
      {
        id: 1,
        time: "00:03 - 00:10",
        section: "TENSIUNE & PROBLEMA REALĂ",
        visualPrompt: "Plan mediu: meșter în atelier auto sau garaj forțând o cheie ieftină care alunecă și îi zgârie mâna. Iluminare cinematică contrastantă.",
        voiceover: "Știi senzația aia când ești la jumătatea unei lucrări urgente și un clichet ieftin cedează exact când ai mai mare nevoie de el?",
        cameraDirection: "Slow zoom-in 4K, focus pe cheia deteriorată.",
      },
      {
        id: 2,
        time: "00:10 - 00:22",
        section: "DEMONSTRAȚIE ÎN ACȚIUNE & REZISTENȚĂ",
        visualPrompt: "Prim-plan dinamic: deschiderea trusei profesionale Bricolando. Fiecare piesă fixată cu precizie laser. Test de forță la cuplu maxim fără joc.",
        voiceover: "Asta este trusa profesională din oțel crom-vanadiu călit termic de pe Bricolando. 72 de dinți, unghi de acționare de doar 5 grade și garanție completă de rezistență.",
        cameraDirection: "Panoramare circulară fluidă la nivelul ochilor, 60fps.",
      },
      {
        id: 3,
        time: "00:22 - 00:30",
        section: "OFERTĂ & APEL LA ACȚIUNE (CTA)",
        visualPrompt: "Cadru de final: cutia trusei închisă cu sigla Bricolando, etichetă 'Livrare în 24-48h', linkul magazinului afișat curat.",
        voiceover: "Comanzi azi direct de pe Bricolando.ro și o ai pe bancul de lucru mâine. Link direct în bio sau descriere.",
        cameraDirection: "Cadru static stabil, text dinamic centrat.",
      },
    ],
    audioSettings: {
      voiceModel: "ElevenLabs Signature (Voce Naturală Română, Ton Autoritar & Cald)",
      pacing: "145 cuvinte/minut cu pauze de impact",
      backgroundTrack: "Lo-Fi Cinematic Bass (ducking automat la -20dB în timpul vorbirii)",
    },
  });

  const handleApplyPreset = (preset: typeof presetTemplates[0]) => {
    setSelectedBrand(preset.brand);
    setVoiceInput(preset.prompt);
  };

  const handleGenerateScript = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_script",
          topic: voiceInput,
          targetBrand: selectedBrand,
          duration: 30,
        }),
      });
      const data = await res.json();
      if (data.success && data.script) {
        setScript(data.script);
        setActiveTab("script");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApprove = async () => {
    setApprovalStatus("approved");
    setTimeout(() => {
      setApprovalStatus("queued");
    }, 1200);
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Top Console Header */}
      <div className="relative z-20 border-b border-white/10 pt-28 pb-8 px-6 lg:px-10 bg-[#090a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sistem Automatizat ReStructure AI • 0 Angajați</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
              Reverb Creator Studio AI
            </h1>
            <p className="text-xs md:text-sm text-neutral-400 font-mono mt-1">
              De la dictare vocală la scenariu viral, clonare voce ElevenLabs, cadre video Google Veo și montaj FFmpeg.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <InstallPWA />
            <Link
              href="/"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 transition-all"
            >
              ← Înapoi la Site
            </Link>
            <button
              onClick={() => setActiveTab("briefing")}
              className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/20 transition-all font-semibold"
            >
              Briefing Zilnic (KPI)
            </button>
          </div>
        </div>

        {/* Workflow Steps Tabs */}
        <div className="max-w-7xl mx-auto mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab("intake")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "intake"
                ? "bg-white text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            1. Dictare & Idei
          </button>
          <button
            onClick={() => setActiveTab("script")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "script"
                ? "bg-white text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            2. Scenariu & Cadre (Claude)
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "audio"
                ? "bg-white text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            3. Voce & ElevenLabs
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "video"
                ? "bg-white text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            4. Cadre Veo & Subtitrări
          </button>
          <button
            onClick={() => setActiveTab("approval")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "approval"
                ? "bg-emerald-500 text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            5. Aprobare & Publicare
          </button>
          <button
            onClick={() => setActiveTab("briefing")}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === "briefing"
                ? "bg-white text-black font-bold shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            6. Tablou Zilnic (Digest)
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* ── TAB 1: INTAKE & KALKI VOICE ── */}
        {activeTab === "intake" && (
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-medium text-white">Consola de Preluare Vocală & Idei</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Conectat cu Kalki Voice (Ctrl+Win) sau înregistrare audio directă.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-bold uppercase transition-all ${
                      isRecording
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isRecording ? "bg-white" : "bg-red-500"}`} />
                    {isRecording ? "Se Înregistrează (Microfon Activ)..." : "Simulează Dictare"}
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Brandul Țintă din Ecosistem:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Bricolando.ro", "Reverb Digital", "RaftPlin.ro", "Kalki.work"].map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all ${
                          selectedBrand === b
                            ? "bg-white text-black font-bold"
                            : "border border-white/10 bg-white/5 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Text / Transcriere Gânduri brute (Input pentru Scenariu):
                  </label>
                  <textarea
                    rows={6}
                    value={voiceInput}
                    onChange={(e) => setVoiceInput(e.target.value)}
                    placeholder="Dictează ideea ta, specificațiile produsului sau problema clientului..."
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-white/40 font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Format automat: Hook 3s • Problemă 7s • Demonstrație 12s • Ofertă/CTA 8s
                  </span>
                  <button
                    onClick={handleGenerateScript}
                    disabled={isGenerating || !voiceInput.trim()}
                    className="rounded-full bg-white px-6 py-3 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50 shadow-md"
                  >
                    {isGenerating ? "Se Generează Scenariul AI..." : "Generează Scenariul Viral →"}
                  </button>
                </div>
              </div>

              {/* Presets Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                    Șabloane Rapide (1-Click)
                  </div>
                  <div className="space-y-3">
                    {presetTemplates.map((p) => (
                      <button
                        key={p.label}
                        onClick={() => handleApplyPreset(p)}
                        className="w-full text-left p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
                      >
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          {p.label}
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono mt-1 line-clamp-2">
                          {p.prompt}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 font-mono text-xs">
                  <div className="text-neutral-400 uppercase tracking-widest text-[10px] mb-2">
                    Infrastructură Conectată
                  </div>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Kalki Voice v1.2.0 (Local Engine)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Claude Code Script Architect</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>FFmpeg Automatic Stitching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 2: SCRIPT & SCENE BREAKDOWN ── */}
        {activeTab === "script" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      Scenariu Structurat pentru Retenție Maximă
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">{script.title}</h2>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mt-2">
                      <span>Brand: {script.targetBrand}</span>
                      <span>•</span>
                      <span>Durată Țintă: {script.targetDurationSeconds} secunde</span>
                      <span>•</span>
                      <span>Format: 9:16 Vertical Video</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveTab("audio")}
                      className="rounded-full bg-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                    >
                      Treci la Generare Voce →
                    </button>
                  </div>
                </div>

                {/* Hook Box */}
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      ⚡ THE HOOK (00:00 - 00:03) — Primele 3 secunde decid dacă utilizatorul face swipe
                    </span>
                    <span className="text-[10px] font-mono text-amber-300">Regula Retenției 85%+</span>
                  </div>
                  <div className="text-base text-white font-medium mb-3">
                    &ldquo;{script.hook.voiceover}&rdquo;
                  </div>
                  <div className="text-xs font-mono text-neutral-400 bg-black/40 p-3 rounded-xl border border-white/5">
                    <strong className="text-neutral-300">Prompt Vizual Cadru 0:</strong> {script.hook.visualPrompt}
                  </div>
                </div>

                {/* Scene Sequence */}
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Secvența de Cadre (Desfășurător 30s)
                  </div>

                  {script.scenes.map((scene) => (
                    <div
                      key={scene.id}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-white" />
                          <span className="font-bold text-white">Cadru #{scene.id}: {scene.section}</span>
                        </div>
                        <span className="text-neutral-500">{scene.time}</span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 text-xs font-mono">
                        <div>
                          <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                            Text Voiceover (Ce se spune pe video):
                          </div>
                          <p className="text-sm text-neutral-200 font-sans leading-relaxed bg-black/30 p-3 rounded-xl border border-white/5">
                            {scene.voiceover}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                            Prompt Generare Video (Google Veo / Imagen):
                          </div>
                          <p className="text-xs text-neutral-400 bg-black/30 p-3 rounded-xl border border-white/5">
                            {scene.visualPrompt}
                          </p>
                          <div className="mt-2 text-[11px] text-emerald-400">
                            <strong>Direcție Cameră:</strong> {scene.cameraDirection}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 3: AUDIO & ELEVENLABS ── */}
        {activeTab === "audio" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md max-w-4xl mx-auto">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Modulul 1: Audio & Clonare Voce
                </span>
                <h2 className="text-2xl font-medium text-white mt-1">Sinteză Vocală & Coloană Sonoră</h2>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Generare voiceover realistă sincronizată milimetric cu durata fiecărui cadru.
                </p>
              </div>

              <div className="space-y-6 font-mono text-xs">
                <div>
                  <label className="block text-neutral-400 uppercase tracking-wider mb-2">Model de Voce:</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none">
                    <option className="bg-neutral-900">ElevenLabs — Alin Signature Voice Clone (Română Caldă, Fermă)</option>
                    <option className="bg-neutral-900">ElevenLabs — Studio Narrator Pro (Română Editorială)</option>
                    <option className="bg-neutral-900">ElevenLabs — Adam Deep Authority (Engleză Internațională)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 uppercase tracking-wider mb-2">Pacing & Viteză:</label>
                  <div className="flex gap-4">
                    {["Normal (130 cpm)", "Dinamic Viral (145 cpm)", "Rapid TikTok (160 cpm)"].map((speed, i) => (
                      <button
                        key={speed}
                        className={`rounded-xl px-4 py-2 border transition-all ${
                          i === 1 ? "border-white bg-white text-black font-bold" : "border-white/10 text-neutral-400"
                        }`}
                      >
                        {speed}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Audio Waveform Simulator */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
                  <div className="text-neutral-400 mb-4">Previzualizare Trunchi Audio Sintetizat (30 secunde):</div>
                  <div className="h-16 flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: 48 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1 rounded-full transition-all ${
                          isPlayingAudio ? "bg-emerald-400 animate-pulse" : "bg-neutral-700"
                        }`}
                        style={{
                          height: `${Math.max(12, Math.sin(idx * 0.4) * 45 + 10)}px`,
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={toggleAudio}
                    className="rounded-full bg-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-md"
                  >
                    {isPlayingAudio ? "❚❚ Pauză Audio" : "▶ Ascultă Vocea Sintetizată"}
                  </button>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-neutral-500 text-[11px]">Ducking audio automat configurat la -20dB pe fundal</span>
                  <button
                    onClick={() => setActiveTab("video")}
                    className="rounded-full bg-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                  >
                    Treci la Modulul Video & FFmpeg →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 4: VIDEO & FFMPEG ENGINE ── */}
        {activeTab === "video" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md max-w-5xl mx-auto">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Modulul 2: Producție Video & Montaj Automatizat
                </span>
                <h2 className="text-2xl font-medium text-white mt-1">Generare Cadre & Subtitrare Dinamică</h2>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Google Veo pentru cadre video fotorealiste, combinate automat cu subtitrări cinetice prin FFmpeg.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
                {/* Video Preview Frame */}
                <div className="rounded-2xl border border-white/15 bg-black p-4 flex flex-col items-center justify-center relative overflow-hidden aspect-[9/16] max-w-[280px] mx-auto shadow-2xl">
                  {/* Mock Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-black to-neutral-900 flex flex-col justify-between p-6 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                      Previzualizare 9:16 Vertical
                    </div>

                    <div className="my-auto">
                      <div className="h-16 w-16 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                        ▶
                      </div>
                      <div className="text-sm font-bold text-white mb-1">
                        &ldquo;Dacă încă cumperi chei care se îndoaie...&rdquo;
                      </div>
                      <div className="inline-block bg-yellow-400 text-black font-black text-xs px-2 py-0.5 rounded shadow">
                        OPREȘTE-TE 30 SECUNDE
                      </div>
                    </div>

                    <div className="text-[9px] text-neutral-500 flex justify-between">
                      <span>Bricolando.ro</span>
                      <span>00:30</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle & Pipeline Config */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-neutral-400 uppercase tracking-wider mb-2">
                      Stil Subtitrare Dinamică:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 rounded-xl border border-yellow-400/50 bg-yellow-400/10 text-yellow-300 font-bold text-left">
                        TikTok Bold Yellow
                        <span className="block text-[10px] font-normal text-neutral-400 mt-1">Evidențiere cuvânt cu cuvânt</span>
                      </button>
                      <button className="p-3 rounded-xl border border-white/10 bg-white/5 text-white text-left">
                        Clean Editorial White
                        <span className="block text-[10px] font-normal text-neutral-400 mt-1">Minimalist & Elegant</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase tracking-wider mb-2">
                      Matrice Dublare Multilingvă:
                    </label>
                    <div className="flex gap-2">
                      {[
                        { id: "ro", name: "Română (Nativ)" },
                        { id: "en", name: "Engleză (Global)" },
                        { id: "es", name: "Spaniolă" },
                        { id: "de", name: "Germană" },
                      ].map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => setSelectedLanguage(lang.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                            selectedLanguage === lang.id
                              ? "bg-white text-black font-bold"
                              : "border border-white/10 text-neutral-400 hover:text-white"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[11px] text-neutral-400 space-y-2">
                    <div className="text-white font-bold uppercase tracking-wider">Comandă FFmpeg Generată Automat:</div>
                    <code className="block bg-black/60 p-2.5 rounded text-emerald-400 overflow-x-auto text-[10px]">
                      ffmpeg -i video_track.mp4 -i audio_clean.wav -vf &quot;subtitles=sub.ass:force_style=&apos;FontName=Montserrat,FontSize=22,PrimaryColour=&amp;H00FFFF&apos;&quot; -c:v libx264 -preset fast -crf 20 final_reel.mp4
                    </code>
                  </div>

                  <button
                    onClick={() => setActiveTab("approval")}
                    className="w-full rounded-full bg-white py-3 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-md"
                  >
                    Treci la Poarta de Aprobare & Distribuire →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 5: APPROVAL GATE & PUBLISHING ── */}
        {activeTab === "approval" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 backdrop-blur-md max-w-4xl mx-auto text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                Modulul 3: Human Approval Gate & Distribuire
              </span>
              <h2 className="text-3xl font-medium text-white mt-2 mb-4">
                Poarta de Validare & Lansare Social Media
              </h2>
              <p className="text-sm text-neutral-400 font-mono max-w-xl mx-auto mb-8">
                Regula de aur a asistentului autonom: sistemul produce totul la gata, dar decizia finală de publicare este la un singur click distanță.
              </p>

              {approvalStatus === "draft" && (
                <div className="p-8 rounded-3xl border border-white/10 bg-black/40 mb-8 max-w-lg mx-auto">
                  <div className="text-xs font-mono text-neutral-400 mb-2">STATUS CURENT:</div>
                  <div className="text-2xl font-bold text-amber-400 mb-4">GATA PENTRU APROBARE</div>
                  <div className="text-xs font-mono text-neutral-300 space-y-1 mb-6 text-left">
                    <div>• Scenariu: Verificat (Structură Hook + Demo + CTA)</div>
                    <div>• Voce: Sincronizată ElevenLabs (30s)</div>
                    <div>• Video: Randat 1080x1920 la 60fps</div>
                    <div>• Destinații: TikTok, Instagram Reels, YouTube Shorts</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleApprove}
                      className="rounded-full bg-emerald-400 px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-emerald-300 transition-all shadow-[0_0_25px_rgba(52,211,153,0.3)]"
                    >
                      ✓ Aprobă & Trimite în Coada de Postare
                    </button>
                    <button
                      onClick={() => setActiveTab("script")}
                      className="rounded-full border border-white/20 px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 transition-all"
                    >
                      Regenerează Cadre
                    </button>
                  </div>
                </div>
              )}

              {approvalStatus === "approved" && (
                <div className="p-8 rounded-3xl border border-emerald-500/40 bg-emerald-950/20 max-w-lg mx-auto text-emerald-300 font-mono text-xs animate-pulse">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="text-lg font-bold text-white mb-2">Videoclip Aprobat!</div>
                  <p>Se pregătește injectarea în coada de distribuire automată...</p>
                </div>
              )}

              {approvalStatus === "queued" && (
                <div className="p-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 max-w-lg mx-auto text-left font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    ACTIV ÎN COADA DE DISTRIBUIRE
                  </div>
                  <div className="space-y-2 text-neutral-300 mb-6">
                    <div>• TikTok (@bricolando.ro): Programat azi la 18:30</div>
                    <div>• Instagram Reels (@bricolando): Programat azi la 19:15</div>
                    <div>• YouTube Shorts (Bricolando Official): Programat azi la 20:00</div>
                    <div>• Agent Calificare Leaduri: Pornit & conectat la comentarii</div>
                  </div>
                  <button
                    onClick={() => setActiveTab("briefing")}
                    className="w-full rounded-full bg-white text-black py-3 uppercase tracking-widest font-bold text-center hover:bg-neutral-200 transition-all"
                  >
                    Vezi Raportul Zilnic de Performanță →
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* ── TAB 6: BRIEFING ZILNIC & CONVERSATIONAL AI QUALIFIER ── */}
        {activeTab === "briefing" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      Sistem Autonom de Supraveghere
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">Briefing Executiv de Dimineață</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Generat automat zilnic la ora 08:00 pentru Alin Drîmbu (General Manager).
                    </p>
                  </div>
                  <div className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    Data: Astăzi, 2026 • Status: Toate Sistemele Operaționale
                  </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono text-xs">
                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Clipuri Generate Azi</div>
                    <div className="text-3xl font-light text-white">3 / 3</div>
                    <div className="text-emerald-400 text-[10px] mt-1">100% Cota Atinsă</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Leaduri Calificate AI</div>
                    <div className="text-3xl font-light text-emerald-400">14</div>
                    <div className="text-neutral-400 text-[10px] mt-1">Direct din TikTok & Reels</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Timp Economisit Uman</div>
                    <div className="text-3xl font-light text-white">18.5 h</div>
                    <div className="text-neutral-400 text-[10px] mt-1">0 ore filmare manuală</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Conversie Căutare AI</div>
                    <div className="text-3xl font-light text-white">92%</div>
                    <div className="text-emerald-400 text-[10px] mt-1">Indexat în ChatGPT & Perplexity</div>
                  </div>
                </div>

                {/* AI Sales Conversation Line */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-xs">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
                    Agent Conversațional de Calificare (Exemplu Lead Real în Curs):
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-neutral-500 text-[10px] block mb-1">Utilizator TikTok (@mecanic_auto_88):</span>
                      <p className="text-neutral-200">Trusa asta chiar ține la impact sau e doar reclamă? Am un service și rupem chei săptămânal.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-300">
                      <span className="text-emerald-500 text-[10px] block mb-1">Agent AI Bricolando (Răspuns autonom în 4 secunde):</span>
                      <p>Salut! Trusa este din oțel crom-vanadiu tratat termic conform standardului DIN 3124, special concepută pentru ateliere. Suportă cuplu de torsiune de până la 450 Nm pe clichetul de 1/2. Dacă o comanzi acum, ai garanție de returnare fără întrebări timp de 30 de zile dacă nu trece testul la tine în atelier. Ți-am trimis fișa tehnică în mesaj privat!</p>
                    </div>

                    <div className="text-[10px] text-neutral-500 text-right">
                      Status Lead: <strong className="text-emerald-400">CALIFICAT PENTRU VÂNZARE</strong> • Notificare trimisă pe panoul de comenzi
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        )}
      </main>
    </div>
  );
}
