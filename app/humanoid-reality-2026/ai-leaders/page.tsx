"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Brain, Zap, TrendingUp, ChevronRight, BarChart3, Shield, Play, Square } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

type Lang = "ro" | "en";

const content = {
  ro: {
    nav: "Realitatea Umanoidă 2026",
    chapterNum: "01",
    chapterLabel: "CAPITOLUL",
    category: "Lideri AI",
    subtitle: "Cel mai avansat software cognitiv. Figure 03 și Sanctuary Phoenix.",
    badge: "ANALIZĂ COMPETITIVĂ",
    figure: {
      title: "Figure 03",
      company: "Figure AI",
      tagline: "Cel mai avansat ciclu de raționament autonom",
      specs: [
        { label: "Parteneriat AI", value: "OpenAI GPT-4o", detail: "Motor de raționament multimodal integrat nativ" },
        { label: "Latență decizie", value: "< 200ms", detail: "Cel mai rapid ciclu autonom din industrie" },
        { label: "Mâini dextere", value: "16 DoF", detail: "4 degete, prindere 0.5–9.5 kg per deget" },
        { label: "Viteză deplasare", value: "1.2 → 1.8 m/s", detail: "Curent → Target 2026" },
        { label: "Autonomie", value: "8 ore", detail: "Per ciclu de baterie la sarcini moderate" },
        { label: "Preț estimat 2026", value: "~$150,000", detail: "Target 2028: sub $50,000 per unitate" },
      ],
      sections: [
        {
          heading: "Parteneriat OpenAI — Raționament la nivel uman",
          body: "Figure 03 integrează nativ motorul de raționament GPT-4o multimodal, ceea ce îi conferă capacitatea de a purta conversații naturale cu operatorii umani și de a rezolva sarcini complexe fără preprogramare explicită. Robotul percepe mediul prin viziune stereoscopică, procesează instrucțiunile în limbaj natural și generează secvențe de acțiuni în timp real — un pipeline end-to-end de la percepție la execuție sub 200ms.",
        },
        {
          heading: "Implementare BMW Spartanburg — Validare industrială",
          body: "Parteneriatul cu BMW reprezintă primul deployment la scară a unui humanoidal cognitiv avansat într-o fabrică auto reală. Cele 500 de unități active în uzina din Spartanburg, SC, execută sarcini de asamblare care anterior necesitau intervenție umană. Datele de performanță din producție alimentează continuu modelele de antrenament, creând un avantaj compus: cu cât robotul lucrează mai mult, cu atât devine mai capabil.",
        },
        {
          heading: "Avantaj competitiv — Latența deciziei",
          body: "Diferențiatorul fundamental al Figure 03 față de concurență nu este hardware-ul (care poate fi replicat), ci latența ciclului de decizie autonomă de sub 200ms. Aceasta permite robotului să reacționeze în timp real la variații neașteptate — o piesă deplasată, un coleg uman care intră în câmpul de lucru, o unealtă schimbată. Niciun alt humanoidal comercial nu atinge această performanță în 2026.",
        },
      ],
      status: "Precomandă B2B deschisă",
      delivery: "Livrare Q4 2026",
    },
    sanctuary: {
      title: "Sanctuary Phoenix",
      company: "Sanctuary AI",
      tagline: "AGI-first, body second — inteligența este prioritatea",
      specs: [
        { label: "Platformă AI", value: "Carbon AI", detail: "Sistem AGI proprietar, nu un wrapper LLM" },
        { label: "Transfer sarcini", value: "Zero-shot", detail: "Medii complet necunoscute, fără preprogramare" },
        { label: "Mâini", value: "20 DoF", detail: "Senzori de presiune pe fiecare falangă" },
        { label: "Antrenament", value: "< 2 ore", detail: "Asimilare sarcină nouă vs. săptămâni la sisteme clasice" },
        { label: "Parteneriat", value: "TELUS International", detail: "Operațional în medii comerciale controlate" },
        { label: "Status", value: "B2B limitat", detail: "Waiting list Q1 2027" },
      ],
      sections: [
        {
          heading: "Carbon AI — Inteligență generală, nu modele specializate",
          body: "Spre deosebire de toți ceilalți competitori care construiesc peste LLM-uri existente (GPT-4o, Gemini, Llama), Sanctuary AI a dezvoltat Carbon — un sistem AGI proprietar construit de la zero pentru controlul robotic. Carbon nu este antrenat să recunoască tipare specifice, ci să înțeleagă intenția sarcinii și să genereze secvențe de acțiuni în medii complet necunoscute. Aceasta se traduce în capacitate de zero-shot task transfer: robotul poate aborda o sarcină nouă fără exemple de antrenament suplimentare.",
        },
        {
          heading: "Cel mai avansat sistem de mână din industrie",
          body: "Cu 20 grade de libertate și senzori de presiune distribuiți pe fiecare falangă, mâna Phoenix oferă un feedback haptic complet care permite manipularea obiectelor fragile sau cu geometrie neregulată. Sistemul poate estima forța optimă de prindere în timp real, prevenind deteriorarea obiectelor — o capacitate esențială pentru industria alimentară, ambalare și logistică de precizie.",
        },
        {
          heading: "Viteza de antrenament — Avantajul operațional decisiv",
          body: "Cel mai important diferențiator operațional al Phoenix nu este calitatea AI-ului în sine, ci viteza cu care poate asimila sarcini noi. O sarcină nouă poate fi înțeleasă și executată după < 2 ore de footage demonstrativ, față de săptămâni sau luni necesare pentru sisteme clasice bazate pe reinforcement learning. Aceasta transformă radical calculul ROI pentru companii: investiția în adaptarea robotului la noi procese este minimă.",
        },
      ],
      status: "Deployment limitat B2B",
      delivery: "Waiting list Q1 2027",
    },
    market: {
      title: "Analiza Pieței AI Robotice",
      subtitle: "Competiția pentru supremația cognitivă în 2026",
      body1: "Piața roboticii cognitive se structurează în 2026 pe o axă clară: viteza de raționament (Figure) vs. profunzimea înțelegerii contextuale (Sanctuary). Figure 03 domină prin latența de decizie și validarea industrială la scară (BMW, 500 unități), în timp ce Sanctuary Phoenix conduce în capacitatea de generalizare — abilitatea de a înțelege nu doar comenzi explicite, ci și context și subtext.",
      body2: "Investitorii alocă capital diferențiat: Figure AI a atras $675M la o valoare de $2.6B, susținută de OpenAI și Microsoft. Sanctuary AI a ridicat $140M, cu focalizare pe calitatea arhitecturii AGI mai degrabă decât pe volumul de deployment. Piața validează ambele abordări, iar în 2026–2028 vom vedea probabil o consolidare sau o achiziție — ambele companii sunt ținte strategice pentru Big Tech.",
      body3: "Factorul de risc comun: dependența de infrastructura cloud pentru inferență. Ambii roboți necesită conectivitate cu latență scăzută pentru a-și exploata întreaga capacitate AI. Edge computing avansat rămâne un blocaj tehnic pentru deployment în medii izolate (construcții, răspuns la dezastre, zone fără conectivitate).",
    },
    metrics: {
      title: "Metrici Cheie Comparative",
      headers: ["Metric", "Figure 03", "Sanctuary Phoenix"],
      rows: [
        ["Platformă AI", "GPT-4o (OpenAI)", "Carbon AI (proprietar)"],
        ["Latență decizie", "< 200ms", "N/A public"],
        ["Mâini — DoF", "16 DoF", "20 DoF"],
        ["Forță prindere", "0.5–9.5 kg/deget", "Senzori presiune/falangă"],
        ["Viteza deplasare", "1.2 m/s (→1.8)", "N/A public"],
        ["Autonomie baterie", "8 ore", "N/A public"],
        ["Preț estimat", "~$150,000", "Contract enterprise"],
        ["Deployment curent", "500 unități (BMW)", "TELUS (limitat)"],
        ["Finanțare totală", "$675M", "$140M"],
        ["Disponibilitate", "Q4 2026", "Q1 2027 (WL)"],
      ],
    },
    investment: {
      title: "Considerații de Investiție",
      subtitle: "Perspectiva strategică 2026–2030",
      cards: [
        {
          icon: "TrendingUp",
          accent: "#00E5FF",
          label: "$2.6B",
          title: "Valoarea Figure AI",
          detail: "La ultima rundă de finanțare. Susținută de OpenAI, Microsoft, Intel Capital și Parkway Venture Capital.",
        },
        {
          icon: "Shield",
          accent: "#FFE600",
          label: "AGI moat",
          title: "Avantajul Sanctuary",
          detail: "Proprietatea intelectuală Carbon AI reprezintă cel mai adânc moat defensiv din industrie. Dificil de replicat în < 5 ani.",
        },
        {
          icon: "BarChart3",
          accent: "#00E5FF",
          label: "2028",
          title: "Fereastra de oportunitate",
          detail: "Costul per unitate scade sub $50K la ambii jucători. Piața adresabilă se extinde de 10x față de 2026.",
        },
      ],
    },
    cta: {
      label: "ÎNAPOI LA OVERVIEW",
      text: "Explorează toți liderii pieței",
    },
  },
  en: {
    nav: "Humanoid Reality 2026",
    chapterNum: "01",
    chapterLabel: "CHAPTER",
    category: "AI Leaders",
    subtitle: "The most advanced cognitive software. Figure 03 and Sanctuary Phoenix.",
    badge: "COMPETITIVE ANALYSIS",
    figure: {
      title: "Figure 03",
      company: "Figure AI",
      tagline: "The most advanced autonomous reasoning cycle",
      specs: [
        { label: "AI Partnership", value: "OpenAI GPT-4o", detail: "Natively integrated multimodal reasoning engine" },
        { label: "Decision latency", value: "< 200ms", detail: "Fastest autonomous decision cycle in the industry" },
        { label: "Dexterous hands", value: "16 DoF", detail: "4 fingers, grip force 0.5–9.5 kg per finger" },
        { label: "Walking speed", value: "1.2 → 1.8 m/s", detail: "Current → 2026 target" },
        { label: "Battery life", value: "8 hours", detail: "Per charge cycle at moderate workloads" },
        { label: "Estimated price 2026", value: "~$150,000", detail: "2028 target: under $50,000 per unit" },
      ],
      sections: [
        {
          heading: "OpenAI Partnership — Human-level reasoning",
          body: "Figure 03 natively integrates the GPT-4o multimodal reasoning engine, enabling natural conversations with human operators and solving complex tasks without explicit preprogramming. The robot perceives its environment through stereoscopic vision, processes natural language instructions, and generates action sequences in real time — an end-to-end pipeline from perception to execution in under 200ms.",
        },
        {
          heading: "BMW Spartanburg Deployment — Industrial validation",
          body: "The BMW partnership represents the first large-scale deployment of an advanced cognitive humanoid in a real automotive plant. The 500 active units at the Spartanburg, SC facility execute assembly tasks that previously required human intervention. Production performance data continuously feeds training models, creating a compounding advantage: the more the robot works, the more capable it becomes.",
        },
        {
          heading: "Competitive advantage — Decision latency",
          body: "Figure 03's fundamental differentiator over the competition is not hardware (which can be replicated), but its sub-200ms autonomous decision cycle latency. This allows the robot to respond in real time to unexpected variations — a displaced part, a human colleague entering the workspace, a changed tool. No other commercial humanoid reaches this performance level in 2026.",
        },
      ],
      status: "B2B pre-order open",
      delivery: "Q4 2026 delivery",
    },
    sanctuary: {
      title: "Sanctuary Phoenix",
      company: "Sanctuary AI",
      tagline: "AGI-first, body second — intelligence is the priority",
      specs: [
        { label: "AI Platform", value: "Carbon AI", detail: "Proprietary AGI system, not an LLM wrapper" },
        { label: "Task transfer", value: "Zero-shot", detail: "Completely unknown environments, no preprogramming" },
        { label: "Hands", value: "20 DoF", detail: "Pressure sensors on every phalanx" },
        { label: "Training speed", value: "< 2 hours", detail: "New task assimilation vs. weeks for classical systems" },
        { label: "Partnership", value: "TELUS International", detail: "Operational in controlled commercial environments" },
        { label: "Status", value: "Limited B2B", detail: "Waiting list Q1 2027" },
      ],
      sections: [
        {
          heading: "Carbon AI — General intelligence, not specialized models",
          body: "Unlike all other competitors who build on top of existing LLMs (GPT-4o, Gemini, Llama), Sanctuary AI developed Carbon — a proprietary AGI system built from scratch for robotic control. Carbon is not trained to recognize specific patterns, but to understand task intent and generate action sequences in completely unknown environments. This translates to zero-shot task transfer capability: the robot can approach a new task without additional training examples.",
        },
        {
          heading: "The most advanced hand system in the industry",
          body: "With 20 degrees of freedom and pressure sensors distributed across every phalanx, the Phoenix hand provides full haptic feedback enabling manipulation of fragile objects or objects with irregular geometry. The system can estimate optimal grip force in real time, preventing object damage — an essential capability for food processing, packaging, and precision logistics.",
        },
        {
          heading: "Training speed — The decisive operational advantage",
          body: "Phoenix's most important operational differentiator is not the quality of the AI itself, but the speed at which it can assimilate new tasks. A new task can be understood and executed after < 2 hours of demonstrative footage, compared to weeks or months required for classical reinforcement learning systems. This radically transforms ROI calculations for companies: the investment in adapting the robot to new processes is minimal.",
        },
      ],
      status: "Limited B2B deployment",
      delivery: "Waiting list Q1 2027",
    },
    market: {
      title: "Cognitive Robotics Market Analysis",
      subtitle: "The competition for cognitive supremacy in 2026",
      body1: "The cognitive robotics market is structuring itself in 2026 on a clear axis: reasoning speed (Figure) vs. depth of contextual understanding (Sanctuary). Figure 03 dominates through decision latency and large-scale industrial validation (BMW, 500 units), while Sanctuary Phoenix leads in generalization capability — the ability to understand not just explicit commands, but context and subtext.",
      body2: "Investors are allocating differentiated capital: Figure AI raised $675M at a $2.6B valuation, backed by OpenAI and Microsoft. Sanctuary AI raised $140M, focusing on AGI architecture quality rather than deployment volume. The market validates both approaches, and in 2026–2028 we will likely see consolidation or an acquisition — both companies are strategic targets for Big Tech.",
      body3: "Common risk factor: dependency on cloud infrastructure for inference. Both robots require low-latency connectivity to leverage their full AI capability. Advanced edge computing remains a technical bottleneck for deployment in isolated environments (construction, disaster response, no-connectivity zones).",
    },
    metrics: {
      title: "Comparative Key Metrics",
      headers: ["Metric", "Figure 03", "Sanctuary Phoenix"],
      rows: [
        ["AI Platform", "GPT-4o (OpenAI)", "Carbon AI (proprietary)"],
        ["Decision latency", "< 200ms", "N/A public"],
        ["Hands — DoF", "16 DoF", "20 DoF"],
        ["Grip force", "0.5–9.5 kg/finger", "Pressure sensors/phalanx"],
        ["Walking speed", "1.2 m/s (→1.8)", "N/A public"],
        ["Battery life", "8 hours", "N/A public"],
        ["Estimated price", "~$150,000", "Enterprise contract"],
        ["Current deployment", "500 units (BMW)", "TELUS (limited)"],
        ["Total funding", "$675M", "$140M"],
        ["Availability", "Q4 2026", "Q1 2027 (WL)"],
      ],
    },
    investment: {
      title: "Investment Considerations",
      subtitle: "Strategic perspective 2026–2030",
      cards: [
        {
          icon: "TrendingUp",
          accent: "#00E5FF",
          label: "$2.6B",
          title: "Figure AI Valuation",
          detail: "At last funding round. Backed by OpenAI, Microsoft, Intel Capital and Parkway Venture Capital.",
        },
        {
          icon: "Shield",
          accent: "#FFE600",
          label: "AGI moat",
          title: "Sanctuary's Advantage",
          detail: "Carbon AI intellectual property represents the deepest defensive moat in the industry. Difficult to replicate in < 5 years.",
        },
        {
          icon: "BarChart3",
          accent: "#00E5FF",
          label: "2028",
          title: "Opportunity window",
          detail: "Cost per unit drops below $50K for both players. Addressable market expands 10x compared to 2026.",
        },
      ],
    },
    cta: {
      label: "BACK TO OVERVIEW",
      text: "Explore all market leaders",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const AUDIO_LAYERS = [
  { freq: 82.4, type: "sine" as OscillatorType, gain: 0.045, lfoRate: 0.09 },
  { freq: 164.8, type: "sine" as OscillatorType, gain: 0.02, lfoRate: 0.15 },
];

function usePageAudio() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const activeRef = useRef<{ osc: OscillatorNode; lfo: OscillatorNode; gain: GainNode }[]>([]);
  const [enabled, setEnabled] = useState(false);

  const start = useCallback(() => {
    const ctx = ctxRef.current!;
    const master = masterRef.current!;
    AUDIO_LAYERS.forEach(({ freq, type, gain: gainVal, lfoRate }) => {
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

  const toggle = useCallback(() => {
    if (!enabled) {
      if (!ctxRef.current) {
        const ctx = new AudioContext();
        ctxRef.current = ctx;
        ctx.resume().then(() => {
          const master = ctx.createGain();
          master.gain.value = 0.28;
          master.connect(ctx.destination);
          masterRef.current = master;
          start();
        });
      } else if (ctxRef.current.state === "suspended") {
        ctxRef.current.resume();
      }
      setEnabled(true);
    } else {
      if (masterRef.current && ctxRef.current) {
        masterRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.4);
      }
      setEnabled(false);
    }
  }, [enabled, start]);

  useEffect(() => {
    return () => {
      activeRef.current.forEach(({ osc, lfo }) => {
        try { osc.stop(); lfo.stop(); } catch {}
      });
      ctxRef.current?.close();
    };
  }, []);

  return { enabled, toggle };
}

function RobotImageHero({ name, company, accent }: { name: string; company: string; accent: string }) {
  return (
    <div
      className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden mb-8"
      style={{ background: `linear-gradient(135deg, ${accent}06 0%, #0a0a14 60%, #080810 100%)` }}
    >
      <Image
        src="/ai_human_poster.png"
        alt={name}
        fill
        className="object-cover object-top"
        style={{ opacity: 0.15, mixBlendMode: "luminosity" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: `${accent}60` }}>
          {company}
        </div>
        <div
          className="text-4xl md:text-5xl font-black tracking-tight"
          style={{ color: accent, textShadow: `0 0 40px ${accent}35` }}
        >
          {name}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "linear-gradient(to top, #080810, transparent)" }}
      />
    </div>
  );
}

export default function AILeadersPage() {
  const [lang, setLang] = useState<Lang>("ro");
  const tx = content[lang];
  const { enabled: audioEnabled, toggle: toggleAudio } = usePageAudio();

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      {/* Mini Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/6 bg-[#080810]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/humanoid-reality-2026"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="text-[10px] uppercase tracking-widest hidden sm:inline">{tx.nav}</span>
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">{tx.chapterLabel} {tx.chapterNum}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1.5 transition-all duration-200 cursor-pointer"
              style={{
                border: `1px solid ${audioEnabled ? "rgba(0,229,255,0.45)" : "rgba(255,255,255,0.10)"}`,
                background: audioEnabled ? "rgba(0,229,255,0.12)" : "transparent",
                color: audioEnabled ? "#00E5FF" : "rgba(255,255,255,0.35)",
              }}
            >
              {audioEnabled ? <Square size={10} fill="currentColor" strokeWidth={0} /> : <Play size={10} fill="currentColor" strokeWidth={0} />}
              <span>{audioEnabled ? "On" : "Sound"}</span>
            </button>
            <button
              onClick={() => setLang((l) => (l === "ro" ? "en" : "ro"))}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-3 py-1.5 hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-200"
            >
              <span className={lang === "ro" ? "text-[#00E5FF]" : "text-white/40"}>RO</span>
              <span className="text-white/20">/</span>
              <span className={lang === "en" ? "text-[#00E5FF]" : "text-white/40"}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.07)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 border border-[#00E5FF]/20 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">{tx.badge}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-[100px] md:text-[160px] font-black leading-none tracking-tighter text-white/[0.04] select-none mb-[-20px]">
              {tx.chapterNum}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-white to-[#00E5FF]/60 bg-clip-text text-transparent">
              {tx.category}
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              {tx.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Figure 03 Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <RobotImageHero name={tx.figure.title} company={tx.figure.company} accent="#00E5FF" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                <Brain size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF]/60">Figure AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.figure.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.figure.tagline}</p>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
          >
            {tx.figure.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#00E5FF]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#00E5FF] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          {/* Analysis Paragraphs */}
          <div className="space-y-8">
            {tx.figure.sections.map((s, i) => (
              <motion.div
                key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0a0a14] p-7 hover:border-white/10 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#00E5FF]" />
                  {s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Status Pills */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs border border-[#00E5FF]/25 rounded-full px-4 py-2 bg-[#00E5FF]/8 text-[#00E5FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              {tx.figure.status}
            </span>
            <span className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50">
              {tx.figure.delivery}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Sanctuary Phoenix Section */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <RobotImageHero name={tx.sanctuary.title} company={tx.sanctuary.company} accent="#FFE600" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/25 flex items-center justify-center">
                <Zap size={16} className="text-[#FFE600]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600]/60">Sanctuary AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.sanctuary.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.sanctuary.tagline}</p>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
          >
            {tx.sanctuary.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#FFE600]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#FFE600] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          {/* Analysis */}
          <div className="space-y-8">
            {tx.sanctuary.sections.map((s, i) => (
              <motion.div
                key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0e0e1a] p-7 hover:border-white/10 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#FFE600]" />
                  {s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Status Pills */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs border border-[#FFE600]/25 rounded-full px-4 py-2 bg-[#FFE600]/8 text-[#FFE600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
              {tx.sanctuary.status}
            </span>
            <span className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50">
              {tx.sanctuary.delivery}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Market Analysis Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                <TrendingUp size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.market.title}</h2>
            <p className="text-white/40 text-sm">{tx.market.subtitle}</p>
          </motion.div>
          <div className="space-y-5">
            {[tx.market.body1, tx.market.body2, tx.market.body3].map((para, i) => (
              <motion.p
                key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="text-white/50 text-sm md:text-base leading-relaxed border-l-2 border-[#00E5FF]/20 pl-5"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Metrics Table */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.metrics.title}</h2>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-white/[0.02]">
                    {tx.metrics.headers.map((h, i) => (
                      <th key={i} className="text-left px-5 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tx.metrics.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/4 hover:bg-white/[0.015] transition-colors duration-150">
                      <td className="px-5 py-3.5 text-white/60 text-sm font-medium">{row[0]}</td>
                      <td className="px-5 py-3.5 text-[#00E5FF] text-sm font-semibold">{row[1]}</td>
                      <td className="px-5 py-3.5 text-[#FFE600] text-sm font-semibold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Investment Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.investment.title}</h2>
            <p className="text-white/40 text-sm">{tx.investment.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {tx.investment.cards.map((card, i) => (
              <motion.div
                key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative group rounded-2xl border bg-[#0e0e1a] p-8 overflow-hidden transition-all duration-300"
                style={{ borderColor: `${card.accent}20` }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[50px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ background: `${card.accent}15` }}
                />
                <div className="relative z-10 text-4xl font-black mb-3" style={{ color: card.accent }}>
                  {card.label}
                </div>
                <h3 className="relative z-10 text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="relative z-10 text-white/40 text-sm leading-relaxed">{card.detail}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">{tx.cta.label}</div>
            <Link
              href="/humanoid-reality-2026"
              className="inline-flex items-center gap-3 border border-[#00E5FF]/25 rounded-full px-8 py-4 text-[#00E5FF] text-sm font-semibold hover:bg-[#00E5FF]/8 hover:border-[#00E5FF]/50 transition-all duration-300 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              {tx.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
