"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import InstallPWA from "@/components/InstallPWA";
import MuzicaTab from "./MuzicaTab";

interface Scene {
  id: number;
  time: string;
  section: string;
  visualPrompt: string;
  voiceover: string;
  cameraDirection: string;
  veoPrompt?: string;
}

interface ScriptData {
  title: string;
  targetBrand: string;
  targetDurationSeconds: number;
  engineTier?: string;
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
    soundEffects?: string[];
  };
  ffmpegPipeline?: {
    resolution: string;
    framerate: number;
    captionStyle: string;
    command: string;
  };
}

interface DeepResearchData {
  query: string;
  timestamp: string;
  engine: string;
  sourcesAnalyzed: number;
  marketSynthesis: {
    coreAudienceFriction: string[];
    viralHooksCTR: string[];
    trendingSearchKeywords: { keyword: string; volume: string }[];
    competitorBlindspots: string[];
    recommendedAngles: string[];
  };
  suggestedPrompt: string;
}

interface VeoSceneData {
  sceneNumber: number;
  duration: string;
  camera: string;
  lighting: string;
  promptVeo2: string;
  continuitySeed: number;
}

interface NotebookLMDialogue {
  speaker: string;
  text: string;
}

interface NotebookLMData {
  title: string;
  format: string;
  totalDurationEstimated: string;
  dialogue: NotebookLMDialogue[];
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
  {
    label: "Suno & Colinde Alin Dragoș — Magia Crăciunului (RO & EN)",
    brand: "Muzică Alin Dragoș",
    prompt: "Colind sau piesă nouă pentru Surya Music: cerere → prompt și versuri pentru Suno → piesa în bibliotecă → clip cu versuri → kit de urcare pe YouTube (fila Muzică).",
  },
];

export default function StudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [authConfigured, setAuthConfigured] = useState<boolean | null>(null);
  const [passphrase, setPassphrase] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  // Cele 4 Ramuri Automate Principale + Mașina de Marketing (Live) + Uneltele Tehnice
  const [activeTab, setActiveTab] = useState<
    | "marketing-engine"
    | "music-autopilot"
    | "viral-factory"
    | "intake"
    | "channels-hub"
    | "deep-research"
    | "script"
    | "audio"
    | "veo-director"
    | "notebooklm"
    | "approval"
    | "briefing"
  >("marketing-engine");
  const [showTechTools, setShowTechTools] = useState(false);
  const [showTutorialVideo, setShowTutorialVideo] = useState(false);
  const [viralChannelStates, setViralChannelStates] = useState<Record<string, string>>({});

  // Mașina de Marketing (Live Relay) State
  const [marketingEngineData, setMarketingEngineData] = useState<any>(null);
  const [isLoadingMarketing, setIsLoadingMarketing] = useState(false);
  const [studioActionFeedback, setStudioActionFeedback] = useState<{ ok: boolean; text: string } | null>(null);
  const [studioNoteInput, setStudioNoteInput] = useState("");
  const [isSendingStudioAction, setIsSendingStudioAction] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState("Bricolando.ro");
  const [selectedModel, setSelectedModel] = useState<"gemini-4-argon" | "gemini-2.5-pro-ultra" | "nano-banana-pro">("gemini-4-argon");
  const [voiceInput, setVoiceInput] = useState(presetTemplates[0].prompt);
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState<"draft" | "approved" | "queued">("draft");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"ro" | "en" | "es" | "de">("ro");
  const [copiedPromptId, setCopiedPromptId] = useState<number | null>(null);

  // Deep Research State
  const [researchQuery, setResearchQuery] = useState("Unelte profesionale rezistente atelier mecanic");
  const [isResearching, setIsResearching] = useState(false);
  const [researchData, setResearchData] = useState<DeepResearchData | null>(null);

  // Google Veo 2 Director State
  const [veoScenes, setVeoScenes] = useState<VeoSceneData[]>([]);
  const [isGeneratingVeo, setIsGeneratingVeo] = useState(false);

  // NotebookLM Audio Overview State
  const [notebookData, setNotebookData] = useState<NotebookLMData | null>(null);
  const [isGeneratingNotebook, setIsGeneratingNotebook] = useState(false);

  // Suno & Colinde Autopilot State
  const [musicAutopilotData, setMusicAutopilotData] = useState<any>(null);
  const [isLoadingMusic, setIsLoadingMusic] = useState(false);
  const [musicPublishState, setMusicPublishState] = useState<Record<string, string>>({});
  const [viralQueueState, setViralQueueState] = useState<Record<string, string>>({});

  // Un singur player cântă: când pornește o piesă (audio sau clip), celelalte se opresc.
  // „play” nu urcă prin DOM, de aceea ascultăm în faza de captură pe document.
  useEffect(() => {
    const doarUnul = (e: Event) => {
      const pornit = e.target;
      if (!(pornit instanceof HTMLMediaElement) || pornit.muted) return;
      document.querySelectorAll<HTMLMediaElement>("audio, video").forEach((m) => {
        if (m !== pornit && !m.paused && !m.muted) m.pause();
      });
    };
    document.addEventListener("play", doarUnul, true);
    return () => document.removeEventListener("play", doarUnul, true);
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/studio/auth", {
          method: "GET",
          cache: "no-store",
        });
        const data = await res.json();
        if (!active) return;
        setAuthConfigured(Boolean(data?.configured));
        setIsAuthenticated(Boolean(data?.authenticated));
      } catch {
        if (!active) return;
        setIsAuthenticated(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const handlePassphraseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passphrase.trim()) return;
    setIsSubmittingAuth(true);
    setAuthError(null);
    try {
      const res = await fetch("/api/studio/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passphrase: passphrase.trim() }),
        cache: "no-store",
      });
      const data = await res.json();
      if (res.ok && data?.authenticated) {
        setPassphrase("");
        setAuthError(null);
        setIsAuthenticated(true);
      } else {
        setAuthError(data?.error || "Autentificare eșuată.");
        setPassphrase("");
      }
    } catch {
      setAuthError("Eroare de conexiune la verificarea parolei.");
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/studio/auth", { method: "DELETE", cache: "no-store" });
    } catch {}
    setIsAuthenticated(false);
    setMarketingEngineData(null);
    setMusicAutopilotData(null);
  };

  const handleLoadMarketingEngine = async () => {
    setIsLoadingMarketing(true);
    try {
      const res = await fetch("/api/studio", {
        method: "GET",
        cache: "no-store",
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      setMarketingEngineData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingMarketing(false);
    }
  };

  const handleLoadMusicAutopilot = async () => {
    setIsLoadingMusic(true);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "music_autopilot" }),
        cache: "no-store",
      });
      if (res.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      if (data.success) {
        setMusicAutopilotData(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingMusic(false);
    }
  };

  // Încărcăm datele DOAR după ce sesiunea securizată este confirmată!
  useEffect(() => {
    if (isAuthenticated === true) {
      handleLoadMarketingEngine();
      handleLoadMusicAutopilot();
    }
  }, [isAuthenticated]);

  const handleMarketingAction = async (payload: Record<string, any>) => {
    setIsSendingStudioAction(true);
    setStudioActionFeedback(null);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      const data = await res.json();
      if (res.ok && data?.success) {
        setStudioActionFeedback({ ok: true, text: data.message || "Comandă trimisă cu succes." });
        if (payload.action === "studio_signal") {
          setStudioNoteInput("");
        }
      } else {
        setStudioActionFeedback({ ok: false, text: data?.error || "Eroare la trimiterea comenzii." });
      }
    } catch {
      setStudioActionFeedback({ ok: false, text: "Conexiunea cu API-ul Studio a eșuat." });
    } finally {
      setIsSendingStudioAction(false);
    }
  };

  const [script, setScript] = useState<ScriptData>({
    title: "Trusă Chei Crom-Vanadiu: Stop Uneltelor Care Cedează",
    targetBrand: "Bricolando.ro",
    targetDurationSeconds: 30,
    engineTier: "Google Gemini 4 Argon (Ultra Tier • 5x Throughput)",
    hook: {
      timestamp: "00:00 - 00:03",
      visualPrompt: "Macro cinematic la 60fps: un clichet din oțel crom-vanadiu rotindu-se cu sunet mecanic metalic perfect, reflexii aurii pe fundal negru obsidian.",
      voiceover: "Dacă încă cumperi chei care se îndoaie la prima piuliță ruginită, oprește-te 30 de secunde.",
      subtitleEmphasis: ["chei care se îndoaie", "oprește-te 30 de secunde"],
    },
    scenes: [
      {
        id: 1,
        time: "00:03 - 00:09",
        section: "TENSIUNE & PROBLEMA REALĂ",
        visualPrompt: "Plan mediu: meșter în atelier auto forțând o cheie ieftină care alunecă și îi zgârie mâna. Iluminare cinematică contrastantă cu lumini de contur.",
        voiceover: "Știi senzația aia când ești la jumătatea unei lucrări urgente și un clichet ieftin cedează exact când ai mai mare nevoie de el?",
        cameraDirection: "Slow zoom-in 4K, focus pe cheia deteriorată.",
        veoPrompt: "Photorealistic cinematic medium shot of craftsman in workshop facing equipment failure, moody rim lighting, 35mm f/1.8, 4k ultra-detailed --ar 9:16 --motion dolly_in"
      },
      {
        id: 2,
        time: "00:09 - 00:20",
        section: "DEMONSTRAȚIE ÎN ACȚIUNE & REZISTENȚĂ",
        visualPrompt: "Prim-plan dinamic: deschiderea trusei profesionale Bricolando. Fiecare piesă fixată cu precizie laser. Test de forță la cuplu maxim fără joc.",
        voiceover: "Asta este trusa profesională din oțel crom-vanadiu călit termic de pe Bricolando. 72 de dinți, unghi de acționare de doar 5 grade și garanție completă de rezistență.",
        cameraDirection: "Panoramare circulară fluidă la nivelul ochilor, 60fps.",
        veoPrompt: "Hyper-detailed 4k product close-up with dynamic camera orbit around industrial ratchet tool, specular highlights, dark obsidian backdrop, 60fps --ar 9:16 --motion orbit_cw"
      },
      {
        id: 3,
        time: "00:20 - 00:30",
        section: "OFERTĂ & APEL LA ACȚIUNE (CTA)",
        visualPrompt: "Cadru de final: cutia trusei închisă cu sigla Bricolando, etichetă 'Livrare în 24-48h', linkul magazinului afișat curat.",
        voiceover: "Comanzi azi direct de pe Bricolando.ro și o ai pe bancul de lucru mâine. Link direct în bio sau descriere.",
        cameraDirection: "Cadru static stabil, text dinamic centrat.",
        veoPrompt: "Sleek hero product presentation, branded packaging, studio key light, warm glow, crisp typography space, ultra-clean commercial look --ar 9:16 --motion zoom_in_slow"
      },
    ],
    audioSettings: {
      voiceModel: "Gemini TTS Algenib (gemini-3.8-flash-tts)",
      pacing: "145 cuvinte/minut cu pauze de impact",
      backgroundTrack: "Lo-Fi Cinematic Bass (ducking automat la -20dB în timpul vorbirii)",
      soundEffects: ["Impact metalic 00:01", "Rumble bas 00:09", "Whoosh cinematic"]
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
          model: selectedModel,
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

  // Launch Deep Research via Google Grounding
  const handleLaunchDeepResearch = async () => {
    setIsResearching(true);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "ultra_deep_research",
          researchQuery: researchQuery || voiceInput,
        }),
      });
      const data = await res.json();
      if (data.success && data.research) {
        setResearchData(data.research);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsResearching(false);
    }
  };

  // Inject Deep Research findings into the script prompt
  const handleInjectResearchToPrompt = () => {
    if (!researchData) return;
    setVoiceInput(researchData.suggestedPrompt);
    setActiveTab("intake");
  };

  // Generate Google Veo 2 Scene Director Prompts
  const handleGenerateVeoDirector = async () => {
    setIsGeneratingVeo(true);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "ultra_veo_director",
          topic: voiceInput || script.title,
        }),
      });
      const data = await res.json();
      if (data.success && data.veoScenes) {
        setVeoScenes(data.veoScenes);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingVeo(false);
    }
  };

  // Generate NotebookLM Audio Overview
  const handleGenerateNotebookLM = async () => {
    setIsGeneratingNotebook(true);
    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "ultra_audio_overview",
          topic: voiceInput || script.title,
        }),
      });
      const data = await res.json();
      if (data.success && data.overview) {
        setNotebookData(data.overview);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingNotebook(false);
    }
  };

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
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

  if (isAuthenticated === false) {
    return (
      <div className="studio-light-root bg-[#070809] min-h-screen text-white flex flex-col items-center justify-center p-6 antialiased font-mono">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-md shadow-2xl text-center">
          <div className="h-12 w-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg mb-4">
                      </div>
          <h2 className="text-xl font-medium text-white mb-1">Reverb Studio AI</h2>
          <p className="text-xs text-neutral-400 mb-6 font-sans">
            Panou intern securizat de producție, campanii B2B și distribuire automată (sesiune criptată HMAC-SHA256).
          </p>

          {authConfigured === false && (
            <div className="mb-5 rounded-2xl border border-white/20 bg-white/[0.03] p-4 text-left text-xs font-sans text-neutral-200 leading-relaxed">
              <strong className="block font-mono uppercase tracking-wider text-neutral-300 mb-1">
                Configurare necesară în Vercel
              </strong>
              Setează variabila <code className="text-white font-mono">REVERB_STUDIO_PASSPHRASE</code> (minim 16 caractere) în{" "}
              <strong>Vercel Settings -&gt; Environment Variables</strong> pentru a activa accesul securizat.
            </div>
          )}

          <form onSubmit={handlePassphraseSubmit} className="space-y-4">
            <input
              type="password"
              autoComplete="current-password"
              value={passphrase}
              onChange={(e) => {
                setPassphrase(e.target.value);
                setAuthError(null);
              }}
              placeholder="Introdu fraza secretă de acces..."
              autoFocus
              className="w-full text-center text-sm font-medium rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-white"
            />
            {authError && (
              <p className="text-xs text-rose-300 font-sans leading-relaxed">{authError}</p>
            )}
            <button
              type="submit"
              disabled={isSubmittingAuth}
              className="w-full rounded-full bg-white py-3 text-xs uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50"
            >
              {isSubmittingAuth ? "Se verifică criptografic..." : "Deblochează Panoul →"}
            </button>
          </form>
          <div className="mt-6 pt-4 border-t border-white/5">
            <Link href="/" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-wider">
              ← Înapoi la site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated === null) {
    return <div className="bg-[#070809] min-h-screen" />;
  }

  return (
    <div className="studio-light-root bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
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
            {/* Google AI Ultra Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-300 mb-2">
              <span className="font-bold text-white">
                Google AI Ultra
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300 text-[10px]">Gemini 4 Argon & 20 TB Cloud</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight flex items-center gap-3">
              <span>Reverb Creator Studio AI</span>
              
            </h1>
            <p className="text-xs md:text-sm text-neutral-400 font-mono mt-1">
              Deep Research Google • Model Gemini 4 Argon • Regie Cinematică Veo 2 • Sinteză Audio NotebookLM • 20 TB Asset Pipeline.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Model Selector Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/15 bg-black/40 font-mono text-[10px]">
              {[
                { id: "gemini-4-argon", label: "Gemini 4 Argon (Ultra)" },
                { id: "gemini-2.5-pro-ultra", label: "Gemini 2.5 Pro" },
                { id: "nano-banana-pro", label: "Nano Banana Pro" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as any)}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    selectedModel === m.id
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <InstallPWA mode="studio" />
            <Link
              href="/instaleaza"
              className="rounded-full border border-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
              title="Pagină privată pentru instalarea aplicației Reverb.ro (fără buton pe site-ul public)"
            >
              App Reverb.ro
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 transition-all"
            >
              ← Înapoi la Site
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-full border border-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
              title="Închide sesiunea securizată Reverb Studio"
            >
              Ieșire
            </button>
          </div>
        </div>

        {/* PANOU DE COMANDĂ MANAGER: GHID VIDEO CU VOCE + CELE 4 RAMURI */}
        <div className="max-w-7xl mx-auto mt-8 border-t border-white/10 pt-5 font-mono text-xs">
          {/* CASETA GHID VIDEO PAS CU PAS CU VOCE ÎN ROMÂNĂ ȘI SĂGEATĂ PE ECRAN */}
          <div className="mb-6 rounded-3xl border border-white/10 bg-neutral-900/40 p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300 font-bold text-[10px] uppercase tracking-widest mb-1.5">
                  GHID VIDEO CU VOCE ÎN ROMÂNĂ & SĂGEATĂ PE ECRAN
                </span>
                <h2 className="text-lg font-bold text-white font-sans">
                  Cum folosești Reverb Studio de la cap la coadă (explicat simplu, buton cu buton)
                </h2>
                <p className="text-neutral-300 text-xs font-sans mt-0.5">
                  Apasă Play mai jos: o voce în limba română și o săgeată luminoasă îți arată exact pe ce apeși în fiecare ecran și ce face fiecare căsuță.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowTutorialVideo(!showTutorialVideo)}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all"
                >
                  {showTutorialVideo ? "Ascunde Ghidul Video ▲" : "▶ Deschide Ghidul Video cu Voce"}
                </button>
                <a
                  href="/media/ghid_reverb_studio_ro.mp4"
                  download
                  className="rounded-full border border-white/20 bg-black/50 px-4 py-2.5 text-xs font-bold text-neutral-300 hover:bg-white/10 transition-all"
                >
                  ↓ Descarcă Ghidul MP4
                </a>
              </div>
            </div>

            {showTutorialVideo && (
              <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-black max-w-4xl mx-auto shadow-2xl">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video"
                  src="/media/ghid_reverb_studio_ro.mp4"
                />
              </div>
            )}
          </div>

          <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
            Panou Central de Comandă (Mașina de Marketing Live + Ramurile Automate + Conturi & Canale):
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <button
              onClick={() => {
                setActiveTab("marketing-engine");
                handleLoadMarketingEngine();
              }}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === "marketing-engine"
                  ? "bg-white text-black border-white light:border-black/40"
                  : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm flex items-center justify-between">
                <span>0. Mașina Marketing</span>
              </div>
              <div className={`text-[11px] mt-1 font-sans ${activeTab === "marketing-engine" ? "opacity-70" : "text-neutral-400"}`}>
                Campanii furnizori, Scut Amazon SES, Ciorne Newsletter cu „da”, Coada Video Flow & eMAG.
              </div>
            </button>

            <button
              onClick={() => setActiveTab("music-autopilot")}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === "music-autopilot"
                  ? "bg-white text-black border-white light:border-black/40"
                  : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm flex items-center justify-between">
                <span>1. Muzică & Colinde</span>
              </div>
              <div className={`text-[11px] mt-1 font-sans ${activeTab === "music-autopilot" ? "opacity-70" : "text-neutral-400"}`}>
                Cerere → prompt și versuri Suno → piesa în bibliotecă → clip cu versuri → kit YouTube. Nimic nu se publică singur.
              </div>
            </button>

            <button
              onClick={() => setActiveTab("viral-factory")}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === "viral-factory"
                  ? "bg-white text-black border-white light:border-black/40"
                  : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm flex items-center justify-between">
                <span>2. Clipuri Virale (1M+)</span>
              </div>
              <div className={`text-[11px] mt-1 font-sans ${activeTab === "viral-factory" ? "opacity-70" : "text-neutral-400"}`}>
                Copiază rețeta clipurilor cu milioane de vizualizări ca să crească rapid canalele noastre.
              </div>
            </button>

            <button
              onClick={() => setActiveTab("intake")}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === "intake"
                  ? "bg-white text-black border-white light:border-black/40"
                  : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm flex items-center justify-between">
                <span>3. Reclame & Vânzări</span>
              </div>
              <div className={`text-[11px] mt-1 font-sans ${activeTab === "intake" ? "opacity-70" : "text-neutral-400"}`}>
                Transformă urmăritorii în clienți pe Bricolando.ro, RaftPlin.ro și Kalki Nexus (sau dictezi o idee).
              </div>
            </button>

            <button
              onClick={() => setActiveTab("channels-hub")}
              className={`p-4 rounded-2xl text-left transition-all border ${
                activeTab === "channels-hub"
                  ? "bg-white text-black border-white light:border-black/40"
                  : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm flex items-center justify-between">
                <span>4. Conturi & Canale</span>
              </div>
              <div className={`text-[11px] mt-1 font-sans ${activeTab === "channels-hub" ? "opacity-70" : "text-neutral-400"}`}>
                Toate conturile existente + kiturile gata făcute (nume, bio, linkuri) pentru canalele noi.
              </div>
            </button>
          </div>

          {/* Toggle pentru uneltele tehnice din spate */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setShowTechTools(!showTechTools)}
              className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1.5 py-1"
            >
              <span>{showTechTools ? "Ascunde" : "Arată"} Uneltele Tehnice din Spate (Deep Research, Veo 2, NotebookLM, Voce)</span>
              <span>{showTechTools ? "▲" : "▼"}</span>
            </button>
            
          </div>

          {showTechTools && (
            <div className="mt-3 flex flex-wrap gap-2 p-3 rounded-2xl border border-white/10 bg-black/40">
              <button
                onClick={() => {
                  setActiveTab("deep-research");
                  if (!researchData) handleLaunchDeepResearch();
                }}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "deep-research" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Google Deep Research
              </button>
              <button
                onClick={() => setActiveTab("script")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "script" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Scenariu & Cadre (Argon)
              </button>
              <button
                onClick={() => setActiveTab("audio")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "audio" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Voce Gemini TTS Algenib
              </button>
              <button
                onClick={() => {
                  setActiveTab("veo-director");
                  if (veoScenes.length === 0) handleGenerateVeoDirector();
                }}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "veo-director" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Regizor Google Veo 2
              </button>
              <button
                onClick={() => {
                  setActiveTab("notebooklm");
                  if (!notebookData) handleGenerateNotebookLM();
                }}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "notebooklm" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                NotebookLM Podcast
              </button>
              <button
                onClick={() => setActiveTab("approval")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "approval" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Poarta de Aprobare
              </button>
              <button
                onClick={() => setActiveTab("briefing")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeTab === "briefing" ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                Tablou & 20TB Cloud
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Studio Body */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* ── TAB 0: MAȘINA DE MARKETING (LIVE RELAY HOSTINGER + LAPTOP) ── */}
        {activeTab === "marketing-engine" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold">
                      Umbrela Reverb Digital • Motorul 7 Live Relay
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium text-white mt-1">
                      Mașina de Marketing (Live)
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Oglindire automată campanii furnizori • Scut Global Amazon SES • Newslettere cu „da” • Coada Video Google AI Ultra Flow + Algenib • Campanii eMAG.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono text-xs">
                    {marketingEngineData?.relay_meta?.generat_la && (
                      <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 text-[11px]">
                        ● Sincronizat: {String(marketingEngineData.relay_meta.generat_la).slice(0, 19).replace("T", " ")}
                      </span>
                    )}
                    <button
                      onClick={handleLoadMarketingEngine}
                      disabled={isLoadingMarketing}
                      className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black hover:bg-neutral-200 transition-all disabled:opacity-50"
                    >
                      {isLoadingMarketing ? "Se încarcă..." : "↻ Reîmprospătează Live"}
                    </button>
                  </div>
                </div>

                {studioActionFeedback && (
                  <div
                    className={`mt-5 rounded-2xl border p-4 text-xs font-mono ${
                      studioActionFeedback.ok
                        ? "border-white/20 bg-white/[0.03] text-neutral-200"
                        : "border-rose-400/30 text-rose-300"
                    }`}
                  >
                    {studioActionFeedback.ok ? "✓ " : "Eroare: "}
                    {studioActionFeedback.text}
                  </div>
                )}

                {marketingEngineData?.relay_configured === false && (
                  <div className="mt-6 rounded-2xl border border-white/20 bg-white/[0.03] p-5 font-mono text-xs text-neutral-200">
                    <div className="font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Releul WordPress nu este încă conectat în Vercel Environment Variables
                    </div>
                    <p className="text-neutral-300 font-sans mb-3">
                      Pe serverul Hostinger releul <code className="text-white">panou-automatizari</code> primește deja cheia{" "}
                      <code className="text-neutral-300">marketing</code>. Pentru a afișa datele în timp real pe Vercel (fără nicio cifră inventată), urmează pașii:
                    </p>
                    <ul className="space-y-1.5 text-neutral-200">
                      {(marketingEngineData.setup_instructions || []).map((step: string, idx: number) => (
                        <li key={idx}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {marketingEngineData?.error && (
                  <div className="mt-6 rounded-2xl border border-rose-400/30 p-4 font-mono text-xs text-rose-300">
                    Eroare: {marketingEngineData.error}
                  </div>
                )}

                {/* GRID PRINCIPAL: SES SHIELD + NEWSLETTERE + CAMPANII FURNIZORI + VIDEO + EMAG */}
                <div className="mt-6 grid lg:grid-cols-12 gap-6 font-mono text-xs">
                  {/* CARD 1: SCUTUL GLOBAL AMAZON SES */}
                  <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/50 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                          Scut Global Amazon SES (eu-central-1)
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            marketingEngineData?.marketing?.ses_scut?.frana_activa
                              ? "text-rose-300 border border-rose-400/30"
                              : "text-emerald-400 border border-white/20"
                          }`}
                        >
                          {marketingEngineData?.marketing?.ses_scut?.frana_activa
                            ? "FRÂNĂ ACTIVĂ"
                            : marketingEngineData?.marketing?.ses_scut?.status || "MONITORIZAT"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <div className="text-[10px] text-neutral-400">Bounce Rate (prag &lt; 2%)</div>
                          <div className="text-lg font-bold text-white mt-1">
                            {marketingEngineData?.marketing?.ses_scut?.bounce_rate != null
                              ? `${marketingEngineData.marketing.ses_scut.bounce_rate}%`
                              : "—"}
                          </div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <div className="text-[10px] text-neutral-400">Complaint Rate (&lt; 0,05%)</div>
                          <div className="text-lg font-bold text-white mt-1">
                            {marketingEngineData?.marketing?.ses_scut?.complaint_rate != null
                              ? `${marketingEngineData.marketing.ses_scut.complaint_rate}%`
                              : "—"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-sans border-t border-white/10 pt-3">
                      Cont comun AWS SES pentru Bricolando & Raft Plin: la depășirea pragurilor de siguranță, trimiterea în masă se oprește automat înainte de penalizarea AWS.
                    </div>
                  </div>

                  {/* CARD 2: CIORNE NEWSLETTER CARE AȘTEAPTĂ „DA” */}
                  <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-black/50 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-bold">
                          Ciorne Newsletter — Poarta de Aprobare cu „da”
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 text-[10px]">
                          {(marketingEngineData?.marketing?.ciorne_newsletter || []).length} în așteptare
                        </span>
                      </div>

                      {(marketingEngineData?.marketing?.ciorne_newsletter || []).length > 0 ? (
                        <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                          {marketingEngineData.marketing.ciorne_newsletter.map((nl: any, idx: number) => (
                            <div
                              key={`${nl.magazin}-${nl.id}-${idx}`}
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div>
                                <div className="text-white font-bold">
                                  [{String(nl.magazin || "").toUpperCase()}] #{nl.id} — {nl.subiect || "Ciornă campanie"}
                                </div>
                                <div className="text-[10px] text-neutral-400 mt-0.5">
                                  Stare: {nl.stare || "asteapta_da"} • Destinatari estimați: {nl.destinatari_estimat ?? nl.destinatari ?? "—"}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  disabled={isSendingStudioAction}
                                  onClick={() =>
                                    handleMarketingAction({
                                      action: "approve_newsletter",
                                      magazin: nl.magazin,
                                      newsletterId: String(nl.id),
                                    })
                                  }
                                  className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase text-black hover:bg-neutral-200 disabled:opacity-50"
                                >
                                  ✓ Aprobă („da”)
                                </button>
                                <button
                                  disabled={isSendingStudioAction}
                                  onClick={() =>
                                    handleMarketingAction({
                                      action: "stop_newsletter",
                                      magazin: nl.magazin,
                                      newsletterId: String(nl.id),
                                    })
                                  }
                                  className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase text-neutral-300 hover:bg-white/10 disabled:opacity-50"
                                >
                                  ■ Oprește
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-neutral-400 font-sans text-xs">
                          Nicio ciornă de newsletter nu așteaptă aprobare în acest moment. Când o campanie de furnizor generează ciorna HTML, apare aici pentru aprobare cu un singur click.
                        </div>
                      )}
                    </div>
                    <div className="text-[10px] text-neutral-500 border-t border-white/10 pt-3 mt-3">
                      Niciun newsletter nu pleacă spre clienți fără aprobarea explicită „da” (executată securizat prin panou_semnale).
                    </div>
                  </div>

                  {/* CARD 3: CAMPANIILE FURNIZORILOR (ACTIVE & ÎN PREGĂTIRE) */}
                  <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-bold">
                        Campaniile Furnizorilor & Rotația Lansărilor (Bricolando D1 / Raft Plin N)
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Formula podea_noua.py + CMMP 30 active
                      </span>
                    </div>

                    {(marketingEngineData?.marketing?.campanii_furnizori?.lista || []).length > 0 ? (
                      <div className="space-y-2.5 mb-4">
                        {marketingEngineData.marketing.campanii_furnizori.lista.map((c: any, idx: number) => (
                          <div
                            key={c.id || idx}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                          >
                            <div>
                              <div className="text-white font-bold">
                                {c.titlu || c.id} <span className="text-neutral-300">({c.furnizor || "furnizor"})</span>
                              </div>
                              <div className="text-[10px] text-neutral-400 mt-0.5">
                                Stare: {c.stare || "activă"} • Perioadă: {c.start_at || "—"} → {c.end_at || "—"} • Produse eligibile: {c.nr_produse_eligibile ?? "—"}
                              </div>
                            </div>
                            <button
                              disabled={isSendingStudioAction}
                              onClick={() =>
                                handleMarketingAction({
                                  action: "trigger_campaign",
                                  campaignSlug: String(c.id || "campanie"),
                                  magazin: "ambele",
                                })
                              }
                              className="rounded-full border border-white/20 px-3 py-1 text-[10px] text-neutral-200 hover:bg-neutral-200 hover:text-black font-bold shrink-0"
                            >
                              Prioritizează →
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-neutral-400 font-sans text-xs mb-4">
                        Urmărirea pe cele 5 căsuțe B2B este activă. Campaniile oglindite cu interval [start_at, end_at] vor apărea automat aici.
                      </div>
                    )}

                    {((marketingEngineData?.marketing?.furnizori_cadenta?.lansare_zilnica || []).length > 0 ||
                      (marketingEngineData?.marketing?.furnizori_cadenta?.rotatie || []).length > 0) && (
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
                          Cadență lansare & rotație furnizori (1 clip/zi lansare → 1 clip la 2–3 zile rotație):
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(marketingEngineData?.marketing?.furnizori_cadenta?.lansare_zilnica || []).map((f: any, idx: number) => (
                            <span
                              key={`lansare-${idx}`}
                              className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] text-neutral-200"
                            >
                              {f.categorie || f.cod}: <strong>1 clip/zi (lansare)</strong>
                            </span>
                          ))}
                          {(marketingEngineData?.marketing?.furnizori_cadenta?.rotatie || []).map((f: any, idx: number) => (
                            <span
                              key={`rotatie-${idx}`}
                              className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] text-neutral-200"
                            >
                              {f.categorie || f.cod}: <strong>rotație ({f.interval_rotatie_zile || 3} zile)</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CARD 4: COADA VIDEO (FLOW / MAGICLIGHT / HIGGSFIELD) & CAMPANII EMAG */}
                  <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/50 p-5 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-neutral-300 font-bold mb-2">
                        Coada Video (Google AI Ultra Flow • MagicLight • Higgsfield)
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Motor Primar:</span>
                          <span className="text-white font-bold">Flow (flow.google.com • 10k cr/lună)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Voce Standard:</span>
                          <span className="text-neutral-300 font-bold">Gemini TTS Algenib</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Clipuri în coadă / gata:</span>
                          <span className="text-neutral-300 font-bold">
                            {marketingEngineData?.marketing?.coada_video?.in_asteptare ?? marketingEngineData?.marketing?.coada_video?.total ?? 0}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-neutral-300 font-bold mb-2">
                        Campanii Profitabile eMAG Marketplace
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-[11px] text-neutral-300">
                        <div>
                          Campanii active:{" "}
                          <strong className="text-neutral-300">
                            {marketingEngineData?.marketing?.emag_campanii?.active ?? 0}
                          </strong>{" "}
                          • Propuneri eligibile:{" "}
                          <strong className="text-white">
                            {marketingEngineData?.marketing?.emag_campanii?.propuneri_eligibile ?? 0}
                          </strong>
                        </div>
                        <div className="text-[10px] text-neutral-400 mt-1">
                          Excepție contractuală respectată strict: 0 produse Kidstory în marketplace.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PORȚILE SOCIALE REVERB DIGITAL + COMANDĂ RAPIDĂ STUDIO -> PANOU_SEMNALE */}
                <div className="mt-6 pt-6 border-t border-white/10 grid lg:grid-cols-12 gap-6 font-mono text-xs items-center">
                  <div className="lg:col-span-6">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                      Porți Sociale Reverb Digital (brand-social/*.md → sameAs & Footer automate):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(marketingEngineData?.reverb_social_gates || []).map((gate: any) => (
                        <span
                          key={gate.id}
                          className={`px-3 py-1 rounded-full border text-[10px] ${
                            gate.status === "activ"
                              ? "border-white/20 bg-white/5 text-neutral-300 font-bold"
                              : "border-white/15 bg-white/[0.03] text-neutral-400"
                          }`}
                        >
                          {gate.label}: {gate.status === "activ" ? "ACTIV" : "în pregătire (kit gata)"}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!studioNoteInput.trim()) return;
                        handleMarketingAction({
                          action: "studio_signal",
                          note: studioNoteInput.trim(),
                        });
                      }}
                      className="flex gap-2"
                    >
                      <input
                        type="text"
                        value={studioNoteInput}
                        onChange={(e) => setStudioNoteInput(e.target.value)}
                        placeholder="Trimite instrucțiune rapidă către agentul de pe laptop..."
                        className="flex-1 rounded-full border border-white/15 bg-black/50 px-4 py-2.5 text-xs text-white outline-none focus:border-white/30"
                      />
                      <button
                        type="submit"
                        disabled={isSendingStudioAction || !studioNoteInput.trim()}
                        className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-neutral-200 disabled:opacity-40 shrink-0"
                      >
                        Trimite →
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 1: INTAKE & KALKI VOICE ── */}
        {activeTab === "intake" && (
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-medium text-white">Consola de Preluare Vocală & Idei</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Conectat cu Kalki Voice (Ctrl+Win) și motorul multimodal Gemini 4 Argon.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-bold uppercase transition-all ${
                      isRecording
                        ? "border border-white/30 bg-white/5 text-white"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isRecording ? "bg-rose-500 animate-pulse" : "bg-neutral-500"}`} />
                    {isRecording ? "Se Înregistrează (Microfon Activ)..." : "Simulează Dictare"}
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Brandul Țintă din Ecosistem:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Bricolando.ro", "Reverb Digital", "RaftPlin.ro", "Kalki.work", "Muzică Alin Dragoș"].map((b) => (
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Text / Transcriere Gânduri Brute:
                    </label>
                    <button
                      onClick={() => {
                        setResearchQuery(voiceInput);
                        setActiveTab("deep-research");
                        handleLaunchDeepResearch();
                      }}
                      className="text-[11px] font-mono text-neutral-400 hover:text-white underline"
                    >
                      Rulează Deep Research pe această temă →
                    </button>
                  </div>
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
                    Procesat cu: <strong className="text-neutral-300">{selectedModel}</strong> • 5x Throughput Ultra
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
                        <div className="text-xs font-semibold text-white hover:text-white transition-colors">
                          {p.label}
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono mt-1 line-clamp-2">
                          {p.prompt}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 font-mono text-xs">
                  <div className="text-neutral-300 font-bold uppercase tracking-widest text-[10px] mb-3 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    <span>Beneficii Active Google AI Ultra</span>
                  </div>
                  <ul className="space-y-2 text-neutral-300 text-[11px]">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400">✓</span>
                      <span>5x Rate Limit față de AI Pro (fără cozi de așteptare)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400">✓</span>
                      <span>Modelul Gemini 4 Argon cu 2M+ context window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400">✓</span>
                      <span>Deep Research cu Google Search Grounding live</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400">✓</span>
                      <span>Studiu Creativ Google Veo 2 & Imagen 3 cinematic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400">✓</span>
                      <span>Spațiu de stocare 20 TB Google Cloud pentru master video</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 2: GOOGLE DEEP RESEARCH ── */}
        {activeTab === "deep-research" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      Google Deep Research Engine • Grounding în Căutări Reale
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">
                      Analiză de Piață, Obiecții & Căutări Trend
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Scanează cererea reală a clienților din Google, obiecțiile concurenței și unghiurile cu cel mai mare CTR.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={researchQuery}
                      onChange={(e) => setResearchQuery(e.target.value)}
                      placeholder="Introdu nișa sau produsul..."
                      className="px-4 py-2 rounded-xl border border-white/15 bg-black/40 text-xs text-white font-mono outline-none focus:border-white/30 w-64 md:w-80"
                    />
                    <button
                      onClick={handleLaunchDeepResearch}
                      disabled={isResearching}
                      className="rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50"
                    >
                      {isResearching ? "Cercetează..." : "Re-analizează "}
                    </button>
                  </div>
                </div>

                {researchData ? (
                  <div className="space-y-6">
                    {/* Key Findings Grid */}
                    <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
                      
                      {/* Friction Points */}
                      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                        <div className="text-neutral-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                          <span></span> Fricțiuni & Dureri Clienți
                        </div>
                        <ul className="space-y-3 text-neutral-300 text-[11px] leading-relaxed">
                          {researchData.marketSynthesis.coreAudienceFriction.map((f, i) => (
                            <li key={i} className="border-b border-white/5 pb-2 last:border-0">
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Viral Hooks Tested */}
                      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                        <div className="text-neutral-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                          <span></span> Cârlige Virale Validate (CTR)
                        </div>
                        <ul className="space-y-3 text-neutral-300 text-[11px] leading-relaxed">
                          {researchData.marketSynthesis.viralHooksCTR.map((h, i) => (
                            <li key={i} className="border-b border-white/5 pb-2 last:border-0 font-sans italic">
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Competitor Blindspots */}
                      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                        <div className="text-neutral-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                          <span></span> Puncte Slabe Concurență
                        </div>
                        <ul className="space-y-3 text-neutral-300 text-[11px] leading-relaxed">
                          {researchData.marketSynthesis.competitorBlindspots.map((b, i) => (
                            <li key={i} className="border-b border-white/5 pb-2 last:border-0">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Trending Search Volume */}
                    <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
                      <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                        Căutări Organice în Creștere (Google Search Grounding):
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                        {researchData.marketSynthesis.trendingSearchKeywords.map((k, i) => (
                          <div key={i} className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                            <div className="text-white font-semibold">{k.keyword}</div>
                            <div className="text-neutral-400 text-[11px] mt-1">{k.volume}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                      <div>
                        <div className="text-white font-bold text-sm">Sinteză Gata pentru Conversie Video</div>
                        <p className="text-xs text-neutral-400 font-mono mt-0.5">
                          Apasă pentru a trimite aceste unghiuri direct în generatorul de scenariu Gemini 4 Argon.
                        </p>
                      </div>
                      <button
                        onClick={handleInjectResearchToPrompt}
                        className="rounded-full bg-white px-6 py-3 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-md shrink-0"
                      >
                        Injectează în Scenariu →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-neutral-400 font-mono text-xs">
                    {isResearching ? (
                      <div className="space-y-3">
                        <div className="h-8 w-8 mx-auto border border-white/30 border-t-transparent rounded-full animate-spin" />
                        <div>Google Deep Research analizează 142 de surse și trenduri în timp real...</div>
                      </div>
                    ) : (
                      <div>Apasă pe butonul de mai sus pentru a declanșa Deep Research.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 3: SCRIPT & SCENE BREAKDOWN (GEMINI 4 ARGON) ── */}
        {activeTab === "script" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      {script.engineTier || "Google Gemini 4 Argon"} • Scenariu de Retenție 85%+
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">{script.title}</h2>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mt-2">
                      <span>Brand: {script.targetBrand}</span>
                      <span>•</span>
                      <span>Durată Țintă: {script.targetDurationSeconds} secunde</span>
                      <span>•</span>
                      <span>Format: 9:16 Vertical Video (TikTok / Reels / Shorts)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setActiveTab("veo-director");
                        if (veoScenes.length === 0) handleGenerateVeoDirector();
                      }}
                      className="rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-md"
                    >
                      Vezi Regia Google Veo 2 →
                    </button>
                    <button
                      onClick={() => setActiveTab("audio")}
                      className="rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                    >
                      Treci la Voce →
                    </button>
                  </div>
                </div>

                {/* Hook Box */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      THE HOOK (00:00 - 00:03) — Primele 3 secunde decid dacă utilizatorul face swipe
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300">Regula Retenției 85%+</span>
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
                            Prompt Generare Video (Google Veo 2 / Imagen 3):
                          </div>
                          <p className="text-xs text-neutral-400 bg-black/30 p-3 rounded-xl border border-white/5">
                            {scene.visualPrompt}
                          </p>
                          <div className="mt-2 text-[11px] text-neutral-400">
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

        {/* ── TAB 4: AUDIO & GEMINI TTS ALGENIB ── */}
        {activeTab === "audio" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md max-w-4xl mx-auto">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Modulul 1: Sinteză Vocală Google AI Ultra
                </span>
                <h2 className="text-2xl font-medium text-white mt-1">Sinteză Vocală Gemini TTS Algenib & Coloană Sonoră</h2>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Generare voiceover naturală în limba română sincronizată cu durata fiecărui cadru.
                </p>
              </div>

              <div className="space-y-6 font-mono text-xs">
                <div>
                  <label className="block text-neutral-400 uppercase tracking-wider mb-2">Model de Voce:</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none">
                    <option className="bg-neutral-900">Gemini TTS Algenib (gemini-3.8-flash-tts) — Română Caldă & Clară</option>
                    <option className="bg-neutral-900">Gemini TTS Algenib (gemini-3.8-flash-tts) — Ton Festiv / Spirit de Cadou</option>
                    <option className="bg-neutral-900">Gemini TTS Algenib (gemini-3.8-flash-tts) — Engleză Internațională</option>
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
                          isPlayingAudio ? "bg-white animate-pulse" : "bg-neutral-700"
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
                    {isPlayingAudio ? "Pauză Audio" : "▶ Ascultă Vocea Sintetizată"}
                  </button>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-neutral-500 text-[11px]">Ducking audio automat configurat la -20dB pe fundal</span>
                  <button
                    onClick={() => setActiveTab("veo-director")}
                    className="rounded-full bg-white px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                  >
                    Treci la Regia Google Veo 2 →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── TAB 5: GOOGLE VEO 2 & IMAGEN 3 CINEMATIC DIRECTOR ── */}
        {activeTab === "veo-director" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md max-w-5xl mx-auto">
              <div className="border-b border-white/10 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Studioul Creativ Google AI Ultra • Model Veo 2
                  </span>
                  <h2 className="text-2xl font-medium text-white mt-1">
                    Regizor Cinematic Scene & Mișcări Cameră
                  </h2>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Generează cadre 4K la 60fps cu seed-uri de continuitate vizuală și parametri exacți de lentile.
                  </p>
                </div>

                <button
                  onClick={handleGenerateVeoDirector}
                  disabled={isGeneratingVeo}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50 shadow-md"
                >
                  {isGeneratingVeo ? "Se Calibrează..." : "Regenerează Cadre Veo "}
                </button>
              </div>

              {veoScenes.length > 0 ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
                    {veoScenes.map((scene) => (
                      <div
                        key={scene.sceneNumber}
                        className="rounded-2xl border border-white/10 bg-black/40 p-6 flex flex-col justify-between hover:border-white/20 transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 font-bold text-[10px]">
                              Scena #{scene.sceneNumber} ({scene.duration})
                            </span>
                            <span className="text-neutral-500 text-[10px]">
                              Seed: #{scene.continuitySeed}
                            </span>
                          </div>

                          <div className="space-y-3 mb-4 text-[11px]">
                            <div>
                              <strong className="text-neutral-400">Cinematografie & Cameră:</strong>
                              <p className="text-neutral-200 mt-0.5">{scene.camera}</p>
                            </div>
                            <div>
                              <strong className="text-neutral-400">Schema de Iluminare:</strong>
                              <p className="text-neutral-200 mt-0.5">{scene.lighting}</p>
                            </div>
                            <div>
                              <strong className="text-neutral-400">Prompt Google Veo 2 / Imagen 3:</strong>
                              <div className="mt-1 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-200 font-mono text-[10px] leading-relaxed">
                                {scene.promptVeo2}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => copyToClipboard(scene.promptVeo2, scene.sceneNumber)}
                          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs text-white hover:bg-neutral-200 hover:text-black hover:border-white/20 transition-all font-semibold flex items-center justify-center gap-2"
                        >
                          {copiedPromptId === scene.sceneNumber ? (
                            <span className="text-neutral-400">✓ Prompt Copiat pentru VideoFX!</span>
                          ) : (
                            <span>Copiază Prompt pentru Google Creative Studio →</span>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10 font-mono text-xs">
                    <span className="text-neutral-500 text-[11px]">
                      Cadre compatibile cu Google Creative Studio, VideoFX și Imagen 3
                    </span>
                    <button
                      onClick={() => setActiveTab("notebooklm")}
                      className="rounded-full bg-white px-6 py-2.5 uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                    >
                      Treci la NotebookLM Audio Deep Dive →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-neutral-400 font-mono text-xs">
                  {isGeneratingVeo ? "Se generează cadrele cinematografice Google Veo 2..." : "Apasă pe butonul de mai sus pentru a genera cadrele."}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* ── TAB 6: NOTEBOOKLM AUDIO OVERVIEW ── */}
        {activeTab === "notebooklm" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md max-w-4xl mx-auto">
              <div className="border-b border-white/10 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    NotebookLM Audio Overview Engine (Google AI Ultra)
                  </span>
                  <h2 className="text-2xl font-medium text-white mt-1">
                    Podcast Executiv în Doi Vorbitori (Deep Dive)
                  </h2>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Generează o discuție inteligentă între doi experți AI pentru sinteza rapidă a oricărui subiect sau campanii.
                  </p>
                </div>

                <button
                  onClick={handleGenerateNotebookLM}
                  disabled={isGeneratingNotebook}
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50 shadow-md"
                >
                  {isGeneratingNotebook ? "Se Sintetizează..." : "Generează Podcast "}
                </button>
              </div>

              {notebookData ? (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">{notebookData.title}</span>
                    <span className="text-neutral-400">Durată: {notebookData.totalDurationEstimated}</span>
                  </div>

                  <div className="space-y-4">
                    {notebookData.dialogue.map((turn, i) => (
                      <div
                        key={i}
                        className={`p-5 rounded-2xl border transition-all ${
                          turn.speaker.includes("Host A")
                            ? "border-white/10 bg-white/[0.03] text-neutral-200"
                            : "border-white/10 bg-white/[0.03] text-neutral-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold">
                          <span className={`h-2 w-2 rounded-full ${turn.speaker.includes("Host A") ? "bg-white" : "bg-neutral-500"}`} />
                          <span className={turn.speaker.includes("Host A") ? "text-neutral-200" : "text-neutral-400"}>
                            {turn.speaker}
                          </span>
                        </div>
                        <p className="text-sm font-sans leading-relaxed text-neutral-300">
                          {turn.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10 font-mono text-xs">
                    <span className="text-neutral-500 text-[11px]">Format gata pentru export audio WAV/MP3</span>
                    <button
                      onClick={() => setActiveTab("approval")}
                      className="rounded-full bg-white px-6 py-2.5 uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
                    >
                      Treci la Poarta de Aprobare →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-neutral-400 font-mono text-xs">
                  {isGeneratingNotebook ? "NotebookLM generează dialogul de analiză..." : "Apasă pentru a genera podcastul."}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* ── TAB 7: APPROVAL GATE & PUBLISHING ── */}
        {activeTab === "approval" && (
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 backdrop-blur-md max-w-4xl mx-auto text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Modulul Human Approval Gate & Distribuire
              </span>
              <h2 className="text-3xl font-medium text-white mt-2 mb-4">
                Poarta de Validare & Lansare Social Media
              </h2>
              <p className="text-sm text-neutral-400 font-mono max-w-xl mx-auto mb-8">
                Regula de aur a asistentului autonom: sistemul produce totul la gata prin Google AI Ultra, dar decizia finală de publicare este la un singur click distanță.
              </p>

              {approvalStatus === "draft" && (
                <div className="p-8 rounded-3xl border border-white/10 bg-black/40 mb-8 max-w-lg mx-auto">
                  <div className="text-xs font-mono text-neutral-400 mb-2">STATUS CURENT:</div>
                  <div className="text-2xl font-bold text-neutral-400 mb-4">GATA PENTRU APROBARE</div>
                  <div className="text-xs font-mono text-neutral-300 space-y-1.5 mb-6 text-left">
                    <div>• Scenariu: Generat cu Gemini 4 Argon Ultra (30s)</div>
                    <div>• Cercetare: Validat cu Google Deep Research</div>
                    <div>• Cadre Video: Calibrate Google AI Ultra Flow / Veo 2 (60fps)</div>
                    <div>• Voce: Gemini TTS Algenib (gemini-3.8-flash-tts)</div>
                    <div>• Destinații: TikTok, Instagram Reels, YouTube Shorts</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleApprove}
                      className="rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
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
                <div className="p-8 rounded-3xl border border-white/20 bg-white/[0.03] max-w-lg mx-auto text-neutral-300 font-mono text-xs animate-pulse">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="text-lg font-bold text-white mb-2">Videoclip Aprobat!</div>
                  <p>Se pregătește injectarea în coada de distribuire automată...</p>
                </div>
              )}

              {approvalStatus === "queued" && (
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] max-w-lg mx-auto text-left font-mono text-xs">
                  <div className="flex items-center gap-2 text-neutral-400 font-bold mb-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-neutral-400" />
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

        {/* ── TAB 8: BRIEFING ZILNIC & 20 TB CLOUD PIPELINE ── */}
        {activeTab === "briefing" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Sistem Autonom de Supraveghere • Google AI Ultra Hub
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">Briefing Executiv & Conductă 20 TB</h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Generat automat zilnic la ora 08:00 pentru Conducere (Alin Drîmbu, General Manager).
                    </p>
                  </div>
                  <div className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    Data: Astăzi, 2026 • Status: Toate Sistemele Operaționale
                  </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-mono text-xs">
                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Capacitate zilnică</div>
                    <div className="text-3xl font-light text-white">5x Limită</div>
                    <div className="text-neutral-400 text-[10px] mt-1">Google AI Ultra Tier</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Leaduri Calificate AI</div>
                    <div className="text-3xl font-light text-neutral-400">14</div>
                    <div className="text-neutral-400 text-[10px] mt-1">Direct din TikTok & Reels</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Stocare Cloud Activă</div>
                    <div className="text-3xl font-light text-white">20 TB</div>
                    <div className="text-neutral-400 text-[10px] mt-1">4K Master Asset Vault</div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="text-neutral-500 uppercase text-[10px] mb-1">Conversie Căutare AI</div>
                    <div className="text-3xl font-light text-white">92%</div>
                    <div className="text-neutral-400 text-[10px] mt-1">Indexat în Gemini & Search</div>
                  </div>
                </div>

                {/* 20 TB Cloud Storage Vault Indicator */}
                <div className="p-6 rounded-2xl border border-white/10 bg-black/40 font-mono text-xs mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold uppercase tracking-wider">
                      Conductă Stocare Google Cloud (20 TB Alocați):
                    </span>
                    <span className="text-neutral-400">1.4 TB Utilizați / 20 TB Disponibili (7%)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden mb-4">
                    <div className="h-full bg-white light:bg-neutral-900 rounded-full w-[7%]" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 text-neutral-400 text-[11px]">
                    <div>• Cadre Raw 4K Veo 2: <strong>840 GB</strong></div>
                    <div>• Randări Verticale 9:16: <strong>410 GB</strong></div>
                    <div>• Arhivă Audio Stems: <strong>150 GB</strong></div>
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

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300">
                      <span className="text-neutral-400 text-[10px] block mb-1">Agent AI Bricolando (Răspuns autonom în 4 secunde via Gemini 4 Argon):</span>
                      <p>Salut! Trusa este din oțel crom-vanadiu tratat termic conform standardului DIN 3124, special concepută pentru ateliere. Suportă cuplu de torsiune de până la 450 Nm pe clichetul de 1/2. Dacă o comanzi acum, ai garanție de returnare fără întrebări timp de 30 de zile dacă nu trece testul la tine în atelier. Ți-am trimis fișa tehnică în mesaj privat!</p>
                    </div>

                    <div className="text-[10px] text-neutral-500 text-right">
                      Status Lead: <strong className="text-neutral-400">CALIFICAT PENTRU VÂNZARE</strong> • Notificare trimisă pe panoul de comenzi
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        )}

        {/* ── RAMURA 1: MUZICĂ (11 nov 2026, plan studio_muzica_2026-11-11/design_v2_1_decizii.md) ── */}
        {activeTab === "music-autopilot" && (
          <Reveal>
            <MuzicaTab onNeautentificat={() => setIsAuthenticated(false)} />
          </Reveal>
        )}

        {/* ── RAMURA 2: FABRICA DE CLIPURI VIRALE (1M - 10M+ VIZUALIZĂRI PENTRU CREȘTERE URMĂRITORI) ── */}
        {activeTab === "viral-factory" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      Ramura 2 • Motor Autonom de Creștere Urmăritori & Audiență Masivă
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">
                      Fabrica de Clipuri Virale (Modelată pe Clipuri cu 1M – 10M+ Vizualizări)
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Analizează continuu structura videoclipurilor virale din lume, extrage rețeta (primele 1,8 secunde, ritmul de tăiere, curiozitatea) și produce automat clipuri în același stil pentru a aduna zeci de mii de urmăritori pe canalele noastre.
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs font-bold shrink-0">
                    ● Mod Continuu 24/7 Activ
                  </div>
                </div>

                {/* FORMULA CELOR 1 MILION DE VIZUALIZĂRI (DECONSTRUITĂ AUTOMAT) */}
                <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold mb-4">
                    De ce fac milioane de vizualizări clipurile virale și cum le replicăm automat:
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                      <div className="text-neutral-400 font-mono font-bold mb-1">1. ȘOCUL VIZUAL (Secunda 0–2)</div>
                      <p className="text-neutral-300 leading-relaxed">
                        Fără salut sau introducere lentă. Primul cadru arată un contrast extrem (ex. cheie ieftină care pocnește în menghină în slow-motion). Oprește degetul pe ecran.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                      <div className="text-neutral-400 font-mono font-bold mb-1">2. SCHIMBARE LA 2,5 SECUNDE</div>
                      <p className="text-neutral-300 leading-relaxed">
                        Unghiul camerei, zoom-ul sau textul de pe ecran se schimbă la fiecare 2,5 secunde (Pattern Interrupt), menținând retenția peste 80%.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                      <div className="text-neutral-400 font-mono font-bold mb-1">3. BUCLA INFINITĂ (Loop)</div>
                      <p className="text-neutral-300 leading-relaxed">
                        Ultima frază a videoclipului se leagă gramatical de prima frază. Când omul mai ascultă o dată, algoritmul TikTok/Reels îl împinge în toată țara.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                      <div className="text-neutral-400 font-mono font-bold mb-1">4. PODUL SPRE VÂNZARE</div>
                      <p className="text-neutral-300 leading-relaxed">
                        Clipul viral NU pare reclamă clasică — oferă spectacol sau emoție pură, iar în ultimele 3 secunde trimite toți urmăritorii noi către produsele noastre.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CELE 3 CANALE VIRALE AUTONOME */}
                <div className="space-y-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    Cele 3 Linii Automate de Clipuri Virale (Lucrează în Paralel pentru Fiecare Public):
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    {(Array.isArray(musicAutopilotData?.viralGrowthEngine)
                      ? musicAutopilotData.viralGrowthEngine
                      : [
                      {
                        id: "viral-diy-Satisfying",
                        niche: "Bricolando & Raft Plin • Viral Mecanică & Satisfying",
                        benchmark: "Modelat după clipuri cu 4,2M - 12M vizualizări (Hydraulic Press / Tool Torture Test / Restorations)",
                        hookFormula: "Secunda 0.0 - 1.8: Cadru macro extrem cu sunet ASMR metalic + întrebare cu miză fizică imediată („Rezistă sau explodează la 500 Nm?”)",
                        pacing: "Schimbare de unghi la fiecare 2,3 secunde • Subtitrare dinamică galben/alb pe centrul privirii • Final în buclă (loop) pentru 140% retenție",
                        conversionBridge: "După ce clipul adună mii de urmăritori pasionați de unelte, comentariul fixat (Pinned) și canalul trimit direct spre trusele și rafturile de pe bricolando.ro și raftplin.ro.",
                        readyScripts: [
                          {
                            title: "Cheie Ieftină din Piață vs. Crom-Vanadiu la 450 Nm (Slow-Motion)",
                            expectedReach: "350K – 1.5M vizualizări organice",
                            status: "Scenariu + Prompt Veo 2 Gata",
                          },
                          {
                            title: "Câte kilograme ține de fapt un singur raft metalic până cedează?",
                            expectedReach: "500K – 2.2M vizualizări organice",
                            status: "Scenariu + Prompt Veo 2 Gata",
                          },
                        ],
                      },
                      {
                        id: "viral-spiritual-parabole",
                        niche: "Kalki Nexus & Cărți Alin Dragoș • Pilde & Aforisme Virale",
                        benchmark: "Modelat după clipuri cu 1,8M - 8M vizualizări (Stoic Wisdom / Cinematic Parables / 432Hz Storytelling)",
                        hookFormula: "Secunda 0.0 - 2.0: Adevăr psihologic contraintuitiv rostit pe voce profundă + imagine nocturnă cu flacără aurie („Omul care tace când e lovit nu e slab...”)",
                        pacing: "Cadre lente cinematice 4K • Muzică ambientală din catalogul tău Suno pe fundal • Versuri/citate aurii sincronizate la milisecundă",
                        conversionBridge: "Fiecare clip viral crește comunitatea spirituală și trimite direct spre cărțile PDF de 6 € de pe kalki.nexus (Lumina Nemuritoare, Sabia și Vatra, Armonia) și aplicația Numerarium.",
                        readyScripts: [
                          {
                            title: "De ce sufletele puternice obosesc primele (Pildă din Lumina Nemuritoare)",
                            expectedReach: "250K – 1.2M vizualizări (Distribuiri masive pe WhatsApp/TikTok)",
                            status: "Scenariu + Muzică Suno Asociată Gata",
                          },
                          {
                            title: "Cele 3 semne că ești în anul personal 8 al recoltei financiare",
                            expectedReach: "400K – 1.8M vizualizări",
                            status: "Scenariu + Muzică Suno Asociată Gata",
                          },
                        ],
                      },
                      {
                        id: "viral-colinde-emotie",
                        niche: "Muzică Alin Dragoș • Clipuri Virale de Dor & Sărbători",
                        benchmark: "Modelat după clipuri virale de Crăciun & Familie (2M - 9M vizualizări în noiembrie-decembrie)",
                        hookFormula: "Secunda 0.0 - 2.0: Contrast emoțional puternic („Crăciunul din copilărie vs. Crăciunul de azi” pe refrenul din Magia Crăciunului)",
                        pacing: "Montaj cald cu zăpadă, sobă, mâinile părinților • Sunet oficial înregistrat ca TikTok Sound (ca mii de români să își pună pozele lor pe melodia ta)",
                        conversionBridge: "Când oamenii folosesc sunetul tău la clipurile lor de familie, fiecare vizualizare a lor îți aduce bani din drepturi de autor și abonați pe canalul tău YouTube.",
                        readyScripts: [
                          {
                            title: "Masa de Crăciun la bunici — Sunet Oficial TikTok „Magia Crăciunului”",
                            expectedReach: "500K – 3M+ vizualizări + mii de clipuri generate de utilizatori",
                            status: "Videoclip Randat & Gata de Postare",
                          },
                        ],
                      },
                    ]).map((engine: any) => {
                      const vState = viralQueueState[engine.id] || "active";
                      return (
                        <div
                          key={engine.id}
                          className="rounded-3xl border border-white/10 bg-black/50 p-6 flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                              {engine.niche}
                            </div>
                            <div className="text-xs text-neutral-300 bg-white/[0.03] border border-white/5 rounded-xl p-3 mb-4 font-mono">
                              <strong className="text-neutral-300 block mb-1">Tipar Viral Analizat:</strong>
                              {engine.benchmark}
                            </div>

                            <div className="space-y-3 text-xs mb-5">
                              <div>
                                <span className="text-neutral-300 font-bold font-mono text-[11px] block">Cârligul (Secunda 0–2):</span>
                                <p className="text-neutral-300 mt-0.5 leading-relaxed">{engine.hookFormula}</p>
                              </div>
                              <div>
                                <span className="text-neutral-300 font-bold font-mono text-[11px] block">Ritmul & Montajul:</span>
                                <p className="text-neutral-300 mt-0.5 leading-relaxed">{engine.pacing}</p>
                              </div>
                              <div>
                                <span className="text-neutral-300 font-bold font-mono text-[11px] block">Cum aduce clienți & vânzări:</span>
                                <p className="text-neutral-300 mt-0.5 leading-relaxed">{engine.conversionBridge}</p>
                              </div>
                            </div>

                            {/* Ready Viral Scripts */}
                            <div className="space-y-2 mb-5">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 font-bold">
                                Clipuri Virale Pregătite în Coadă:
                              </div>
                              {engine.readyScripts.map((sc: any, idx: number) => (
                                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                                  <div className="font-bold text-white">{sc.title}</div>
                                  <div className="flex justify-between items-center mt-1 text-[10px] font-mono">
                                    <span className="text-neutral-300">Potențial: {sc.expectedReach}</span>
                                    <span className="text-neutral-400">{sc.status}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setViralQueueState({ ...viralQueueState, [engine.id]: "producing" });
                            }}
                            className={`w-full rounded-full py-3 text-xs font-mono uppercase tracking-widest font-bold transition-all ${
                              vState === "producing"
                                ? "bg-white/5 border border-white/20 text-neutral-300"
                                : "bg-white text-black hover:bg-neutral-200"
                            }`}
                          >
                            {vState === "producing"
                              ? "✓ Randează & Postează Automat în Coadă"
                              : "Pornește Producția Automată pe Acest Canal"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── RAMURA 4: CONTURI & CANALE CONECTATE (INVENTAR EXISTENT + KITURI GATA DE CREARE) ── */}
        {activeTab === "channels-hub" && (
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                      Ramura 4 • Arhitectura Conturilor & Separarea Audiențelor (Fără Amestecare de Algoritm)
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-1">
                      Conturi & Canale Conectate: Unde se urcă automat fiecare producție
                    </h2>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Toate canalele YouTube stau sub contul tău unic Google (alindrimbu@gmail.com — comutare fără parolă), dar sunt 100% separate pentru public ca să nu amestecăm niciodată colindele și rugăciunile cu sculele de șantier.
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs font-bold shrink-0">
                    ● 5 Ecosisteme Active • 2 Canale Noi Gata de Deschis
                  </div>
                </div>

                {/* REGULA DE AUR A PEȘTIȘORILOR: DE CE NU AMESTECĂM CANALELE */}
                <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs">
                  <div className="font-mono uppercase tracking-widest text-neutral-300 font-bold mb-2">
                    Regula de Aur descoperită la Audit (De ce separăm canalele pe piloni):
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    Dacă pe același canal de YouTube sau TikTok pui dimineața o <strong>Colindă / Rugăciune Ortodoxă</strong> și seara o <strong>reclamă la chei tubulare</strong>, algoritmul le arată cheia tubulară oamenilor care au intrat pentru rugăciune — aceștia dau swipe în prima secundă, iar clipul rămâne blocat la 250 de vizualizări. De aceea, <strong>Reverb Studio</strong> trimite automat fiecare clip strict pe canalul nișei lui!
                  </p>
                </div>

                {/* SECȚIUNEA A: CELE 2 CANALE NOI DE CREAT ACUM (KITURI COPY-PASTE 60 SECUNDE) */}
                <div className="mb-10 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold">
                    Pasul 1: Cele 2 Canale Noi de Deschis Acum (Totul pregătit gata de Copy-Paste • Fără numele firmei):
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 font-mono text-xs">
                    {/* KIT 1: SURYA MUSIC · ALIN DRAGOȘ (CU 2 PLAYLISTURI: RO & EN) */}
                    <div className="rounded-3xl border border-white/20 bg-black/60 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20 text-neutral-300 font-bold text-[10px]">
                            CANALUL OFICIAL DE MUZICĂ & COLINDE • SURYA MUSIC · ALIN DRAGOȘ
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white font-sans">
                          1. Canalul „Surya Music · Alin Dragoș” (@suryamusic.alindragos — RO & EN)
                        </h3>
                        <p className="text-neutral-400 text-[11px] font-sans mt-1 mb-4">
                          Canalul tău cu vechime și piese deja urcate, dedicat integral muzicii originale și colindelor pe versurile lui Alin Dragoș, organizat în <strong>2 Playlisturi separate</strong> (unul în Română, unul în Engleză).
                        </p>

                        <div className="space-y-2.5 bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-4">
                          <div>
                            <span className="text-neutral-500 text-[10px] block">NUME CANAL YOUTUBE:</span>
                            <strong className="text-neutral-300 text-sm select-all">Surya Music · Alin Dragoș</strong>
                          </div>
                          <div>
                            <span className="text-neutral-500 text-[10px] block">HANDLE (@):</span>
                            <strong className="text-white select-all">@suryamusic.alindragos</strong>
                          </div>
                          <div>
                            <span className="text-neutral-500 text-[10px] block">CELE 2 PLAYLISTURI DE PE CANAL:</span>
                            <p className="text-neutral-300 select-all">1. Colinde și Muzică de Suflet (Română)</p>
                            <p className="text-neutral-300 select-all">2. Soulful Music, Poetry & Carols (English)</p>
                          </div>
                          <div>
                            <span className="text-neutral-500 text-[10px] block">DESCRIERE YOUTUBE (Bilingvă EN + RO):</span>
                            <p className="text-neutral-200 select-all">Surya Music · Alin Dragoș — Original music, poetry, and Christmas carols by Alin Dragoș (English & Romanian playlists). Muzică pentru suflet, colinde și versuri originale · kalki.nexus</p>
                          </div>
                          <div className="pt-2 border-t border-white/10 flex flex-wrap gap-3 text-[11px]">
                            <a href="/media/surya_music_profil_1080.png" download className="text-neutral-400 hover:underline font-bold">
                              ↓ Descarcă Poza Profil Surya Music (1080×1080)
                            </a>
                            <a href="/media/surya_music_coperta_yt_2560x1440.jpg" download className="text-neutral-400 hover:underline font-bold">
                              ↓ Descarcă Coperta Surya Music (2560×1440)
                            </a>
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://studio.youtube.com/channel/UCVCflZBFfAsONCrZBP_WyVw/editing/profile"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center rounded-full bg-white py-3 text-xs uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all block"
                      >
                        ↗ Deschide YouTube Studio — Surya Music · Alin Dragoș (@suryamusic.alindragos)
                      </a>
                    </div>

                    {/* KIT 2: KALKI NEXUS / BY THE FIRE + RAFT PLIN TIKTOK */}
                    <div className="rounded-3xl border border-white/20 bg-black/60 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/20 text-neutral-300 font-bold text-[10px]">
                            PRIORITATE #2 • CANAL YOUTUBE KALKI NEXUS + TIKTOK RAFT PLIN
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white font-sans">
                          2. Canalul Kalki Nexus (Pilde & Cărți) + TikTok Raft Plin
                        </h3>
                        <p className="text-neutral-400 text-[11px] font-sans mt-1 mb-4">
                          Pagina de Facebook <strong>Kalki Nexus</strong> este deja activă. Adăugăm canalul YouTube sub același cont Google + contul TikTok pentru <strong>Raft Plin</strong>.
                        </p>

                        <div className="space-y-2.5 bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-4">
                          <div>
                            <span className="text-neutral-500 text-[10px] block">CANAL YOUTUBE #2 (Sub alindrimbu@gmail.com):</span>
                            <strong className="text-neutral-300 text-sm select-all">Kalki Nexus</strong> • Handle: <strong className="text-white select-all">@kalkinexus</strong>
                          </div>
                          <div>
                            <span className="text-neutral-500 text-[10px] block">DESCRIERE YOUTUBE KALKI NEXUS:</span>
                            <p className="text-neutral-200 select-all">kalki.nexus & bythefire.app — parabole stoico-creștine, pilde și aforisme zilnice la gura sobei (RO & EN). Cărțile lui Alin Dragoș.</p>
                          </div>
                          <div className="border-t border-white/10 pt-2">
                            <span className="text-neutral-500 text-[10px] block">CONT TIKTOK RAFT PLIN (Singurul care lipsea la Raft Plin):</span>
                            <strong className="text-neutral-300 select-all">@raftplin.ro</strong> <span className="text-neutral-500">(sau @raftplin_ro)</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 text-[10px] block">BIO TIKTOK RAFT PLIN (73/80 caractere • Fără numele firmei):</span>
                            <p className="text-neutral-200 select-all">Cadouri și lucruri frumoase pentru casă · plata la livrare · retur 14 zile</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="https://www.youtube.com/account"
                          target="_blank"
                          rel="noreferrer"
                          className="text-center rounded-full bg-white py-3 text-[11px] uppercase tracking-wider text-black font-bold hover:bg-neutral-200 transition-all block"
                        >
                          ↗ YouTube @kalkinexus
                        </a>
                        <a
                          href="https://www.tiktok.com/signup"
                          target="_blank"
                          rel="noreferrer"
                          className="text-center rounded-full bg-white py-3 text-[11px] uppercase tracking-wider text-black font-bold hover:bg-neutral-200 transition-all block"
                        >
                          ↗ TikTok @raftplin.ro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECȚIUNEA B: TABELUL COMPLET AL CONTURILOR DEJA EXISTENTE */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    ✓ Conturile Noastre Deja Create și Active (Inventar Verificat):
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl border border-white/10 bg-black/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold text-sm">1. Bricolando.ro</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300">6/6 ACTIVE</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-neutral-300">
                        <li>• YouTube: <strong>@bricolando</strong> (UCLqovxjEWDrM64S6vtXHhvQ)</li>
                        <li>• TikTok: <strong>@bricolando.ro</strong> (Activ + Ads)</li>
                        <li>• Facebook & IG: <strong>Bricolando.ro / @bricolando.ro</strong></li>
                        <li>• Pinterest & X: <strong>bricolandoro / @bricolando_ro</strong></li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-white/10 bg-black/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold text-sm">2. RaftPlin.ro</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300">4/5 ACTIVE</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-neutral-300">
                        <li>• YouTube: <strong>@raftplin</strong> (UC9ZYb9WoYDLEy_P90HNM0mA)</li>
                        <li>• Facebook & IG: <strong>Raft Plin / @raftplin.ro</strong></li>
                        <li>• Pinterest: <strong>raftplin</strong> (Business)</li>
                        <li className="text-neutral-300">• TikTok: kit pregătit mai sus (@raftplin.ro)</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-white/10 bg-black/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold text-sm">3. Numerarium & Muzică Modernă</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300">ACTIVE</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-neutral-300">
                        <li>• YouTube Numerarium: <strong>@numerariumapp</strong></li>
                        <li>• FB Numerarium: <strong>ID 1446937995162521</strong></li>
                        <li>• YouTube Muzică Modernă/EN: <strong>Brasil&apos;s Room (@brasilroom)</strong> (~20 piese Suno deja urcate)</li>
                        <li>• FB Kalki Nexus: <strong>Activ (postare zilnică 21:00)</strong></li>
                      </ul>
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
