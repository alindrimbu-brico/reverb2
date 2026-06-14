"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Zap, Globe, ChevronRight, Shield, Play, Square } from "lucide-react";

type Lang = "ro" | "en";

const content = {
  ro: {
    nav: "Realitatea Umanoidă 2026",
    chapterNum: "03",
    chapterLabel: "CAPITOLUL",
    category: "Performanță Supremă",
    subtitle: "Capabilități de vârf în medii extreme. Atlas și Apollo — limita actuală a ingineriei.",
    badge: "FRONTIERA INGINERIEI",
    atlas: {
      title: "Boston Dynamics Atlas",
      company: "Boston Dynamics / Hyundai",
      tagline: "Regele mobilității — cel mai avansat robot din punct de vedere al mișcării",
      specs: [
        { label: "Grade de libertate", value: "28 DoF", detail: "Complet electric (fără hidraulice)" },
        { label: "Cuplu maxim", value: "340 Nm", detail: "Per articulație — cel mai mare din industrie" },
        { label: "Forța mâinii", value: "800N", detail: "Cel mai mare payload raportat la greutate" },
        { label: "Payload raportat", value: "22.5%", detail: "20kg payload / 89kg greutate robot" },
        { label: "Capabilitate unică", value: "Parkour", detail: "Salturi, rotiri, manipulare haotică" },
        { label: "API dev", value: "Python / ROS2", detail: "Open SDK pentru cercetare și B2B" },
      ],
      sections: [
        {
          heading: "Tranziția la electric — Revoluția din 2024",
          body: "Boston Dynamics a abandonat complet sistemul hidraulic în 2024, migrând Atlas la acționare electrică cu motoare de înaltă densitate de putere. Această tranziție nu este doar tehnică — este strategică. Robotul electric este mai silențios, mai curat, mai precis și infinit mai ușor de întreținut decât versiunile anterioare hidraulice. Cuplul maxim de 340 Nm pe articulație depășește orice competitor din industrie, permițând Atlas să execute mișcări imposibil de replicat pentru alți roboți.",
        },
        {
          heading: "Parkour și manipulare în medii haotice",
          body: "Demonstrațiile publice Atlas au stabilit un standard nou pentru ce înseamnă 'control dinamic' în robotică. Robotul poate sări obstacole, rula pe podele cu obiecte dezordonate, se roti în aer și ateriza stabil — capabilități care nu sunt demonstrații de PR, ci rezultatul unui sistem de planificare a mișcării în timp real bazat pe model predictiv control (MPC). Aceste capabilități au aplicabilitate directă în răspuns la dezastre, construcții și logistică în medii nestructurate.",
        },
        {
          heading: "Parteneriatul Hyundai și Open SDK",
          body: "Achiziția Boston Dynamics de către Hyundai în 2021 a deschis calea pentru integrarea Atlas în fabricile auto. Targetul de 100 unități pilot în 2026 în liniile Hyundai reprezintă primul test real la scară industrială pentru un robot cu capabilități de parkour. Simultan, Open SDK (Python + ROS2) democratizează accesul pentru cercetători și developeri B2B — creând un ecosistem de aplicații imposibil de replicat rapid de un competitor.",
        },
      ],
      status: "Contract enterprise direct",
      delivery: "Hyundai partner + cercetători selectați",
    },
    apollo: {
      title: "Apptronik Apollo",
      company: "Apptronik / Google DeepMind",
      tagline: "Cel mai mare payload din industrie — optimizat pentru logistică grea",
      specs: [
        { label: "Payload maxim", value: "55 kg", detail: "Cel mai mare din industrie la o unitate mobilă" },
        { label: "Înălțime / Greutate", value: "1.73m / 73kg", detail: "Dimensionat pentru sarcini umane standard" },
        { label: "Viteza de mers", value: "1.5 m/s", detail: "0.8 m/s cu sarcină maximă de 55kg" },
        { label: "Autonomie", value: "4 ore", detail: "Schimb baterie < 2 min (swap station autonomă)" },
        { label: "Partener AI", value: "Google DeepMind", detail: "Cel mai puternic stack AI non-Figure/Sanctuary" },
        { label: "Preț / Lease", value: "$200K / $3,500/lună", detail: "Include mentenanță completă" },
      ],
      sections: [
        {
          heading: "Google DeepMind Partnership — AI de clasă mondială",
          body: "Parteneriatul cu Google DeepMind plasează Apollo în liga restrânsă a roboților cu acces la cele mai avansate modele AI disponibile. DeepMind contribuie cu modele de planificare a sarcinilor și control motric care permit Apolloului să generalizeze sarcini noi cu puțin antrenament. Combinația dintre payload-ul masiv de 55kg și un AI sofisticat creează un profil unic: robotul cu cea mai mare putere de ridicare capabil de raționament complex.",
        },
        {
          heading: "55kg Payload — Înlocuitor direct al lucrătorilor de depozit",
          body: "Un muncitor uman poate ridica în siguranță 25kg în condiții optime. Apollo poate ridica 55kg continuu, 4 ore pe baterie, fără oboseală, reclamații sau concedii medicale. Aceasta îl face soluția optimă pentru warehouse picking de mare volum, asamblare industrială grea și logistică periculoasă. GXO Logistics, cel mai mare operator de depozite terțiare din lume, a semnat deja un parteneriat pilot.",
        },
        {
          heading: "Sistemul de swap rapid al bateriei — Uptime maxim",
          body: "Autonomia de 4 ore per baterie ar fi o limitare critică dacă nu ar exista soluția de swap autonom în < 2 minute. Stațiile de schimb rapid integrează robotul într-o linie de producție fără întreruperi semnificative — efectiv Apollo poate opera 22h/zi cu un singur set de 3 baterii pe stație. Această arhitectură de uptime nu are echivalent la competitori care necesită 2+ ore de reîncărcare.",
        },
      ],
      partners: ["NASA", "GXO Logistics", "Mercedes-Benz"],
      status: "Available B2B",
      delivery: "Lease: $3,500/lună + mentenanță inclusă",
    },
    benchmarks: {
      title: "Benchmarks Comparative",
      subtitle: "Atlas vs. Apollo vs. piața",
      headers: ["Metric", "Atlas (BD)", "Apollo (Apptronik)", "Figure 03", "Optimus Gen 3"],
      rows: [
        ["Viteză mers", "~1.5 m/s", "1.5 m/s (0.8 cu sarcină)", "1.2 m/s", "1.1 m/s"],
        ["Payload", "20 kg", "55 kg ★", "~10 kg", "20 kg"],
        ["DoF total", "28", "N/A public", "N/A public", "28"],
        ["Cuplu max", "340 Nm ★", "N/A public", "N/A public", "N/A public"],
        ["Autonomie", "N/A public", "4 ore", "8 ore ★", "N/A public"],
        ["AI Stack", "Open SDK", "Google DeepMind", "GPT-4o", "FSD NN (intern)"],
        ["Preț", "Enterprise", "$200K / $3.5K/lună", "~$150K", "$30–40K"],
        ["Parkour", "Da ★", "Nu", "Nu", "Nu"],
        ["Disponibil retail", "Nu", "Da (lease)", "Q4 2026", "Q4 2026"],
      ],
    },
    usecases: {
      title: "Aplicații și Piața Țintă",
      atlas: {
        label: "Atlas — Medii extreme",
        items: [
          { label: "Construcții", detail: "Acces în zone periculoase, transport materiale pe scări și suprafețe neregulate." },
          { label: "Logistică periculoasă", detail: "Manipulare substanțe toxice sau radioactive, zone de incendiu sau inundație." },
          { label: "Răspuns dezastre", detail: "Operațional pe teren deformat. Capacitate de a naviga ruine și structuri prăbușite." },
          { label: "Cercetare avansată", detail: "Open SDK permite experimentare liberă în instituții academice și R&D labs." },
        ],
      },
      apollo: {
        label: "Apollo — Logistică și industrie",
        items: [
          { label: "Warehouse picking", detail: "GXO Logistics: înlocuire directă a lucrătorilor de depozit pentru picking greu." },
          { label: "Asamblare auto", detail: "Mercedes-Benz: sarcini de asamblare care necesită forță > 25kg." },
          { label: "Logistică spațială", detail: "NASA: testare pentru operațiuni în medii cu gravitație redusă și scafandri robotici." },
          { label: "Customer lease", detail: "$3,500/lună cu mentenanță inclusă — model accesibil pentru SMB-uri." },
        ],
      },
    },
    positioning: {
      title: "Poziționare pe Piață",
      body: "Atlas și Apollo nu concurează direct cu Figure sau Tesla Optimus. Ele ocupă nișa premium a pieței — roboți cu capabilități superioare pentru medii extreme sau payload excepțional, unde costul mai ridicat este justificat de valoarea operațională creată. Atlas este singurul robot capabil de mobilitate avansată în medii nestructurate; Apollo este singurul cu payload de 55kg disponibil comercial. Ambele își vor vedea prețurile scăzând odată cu scara, dar în 2026–2028 rămân instrumente pentru parteneri enterprise selectați.",
    },
    cards: [
      { label: "340 Nm", accent: "#00E5FF", title: "Cuplu maxim Atlas", detail: "Per articulație. Niciun competitor nu se apropie de această valoare în industria robotică comercială." },
      { label: "55 kg", accent: "#FFE600", title: "Payload Apollo", detail: "Cel mai mare payload dintr-un robot mobil umanoid. Echivalentul a 2 lucrători umani la forță maximă." },
      { label: "2 min", accent: "#00E5FF", title: "Swap baterie Apollo", detail: "Schimb autonom complet în sub 2 minute. Permite operare 22h/zi cu 3 baterii pe stație." },
    ],
    cta: {
      label: "ÎNAPOI LA OVERVIEW",
      text: "Explorează toți liderii pieței",
    },
  },
  en: {
    nav: "Humanoid Reality 2026",
    chapterNum: "03",
    chapterLabel: "CHAPTER",
    category: "Peak Performance",
    subtitle: "Top capabilities in extreme environments. Atlas and Apollo — the current engineering frontier.",
    badge: "ENGINEERING FRONTIER",
    atlas: {
      title: "Boston Dynamics Atlas",
      company: "Boston Dynamics / Hyundai",
      tagline: "King of mobility — the most advanced robot in terms of movement",
      specs: [
        { label: "Degrees of freedom", value: "28 DoF", detail: "Fully electric (no hydraulics)" },
        { label: "Max torque", value: "340 Nm", detail: "Per joint — highest in the industry" },
        { label: "Hand force", value: "800N", detail: "Highest payload-to-weight ratio" },
        { label: "Payload ratio", value: "22.5%", detail: "20kg payload / 89kg robot weight" },
        { label: "Unique capability", value: "Parkour", detail: "Jumps, flips, manipulation in chaotic environments" },
        { label: "Dev API", value: "Python / ROS2", detail: "Open SDK for research and B2B" },
      ],
      sections: [
        {
          heading: "The electric transition — The 2024 revolution",
          body: "Boston Dynamics completely abandoned the hydraulic system in 2024, migrating Atlas to electric actuation with high-power-density motors. This transition is not just technical — it is strategic. The electric robot is quieter, cleaner, more precise and infinitely easier to maintain than previous hydraulic versions. Maximum torque of 340 Nm per joint exceeds any competitor in the industry, allowing Atlas to execute movements impossible to replicate for other robots.",
        },
        {
          heading: "Parkour and manipulation in chaotic environments",
          body: "Atlas public demonstrations set a new standard for what 'dynamic control' means in robotics. The robot can jump obstacles, run on floors with disordered objects, flip in the air and land stably — capabilities that are not PR demonstrations, but the result of a real-time motion planning system based on model predictive control (MPC). These capabilities have direct applicability in disaster response, construction, and logistics in unstructured environments.",
        },
        {
          heading: "Hyundai partnership and Open SDK",
          body: "Hyundai's acquisition of Boston Dynamics in 2021 paved the way for Atlas integration in automotive plants. The target of 100 pilot units in 2026 on Hyundai lines represents the first real industrial-scale test for a robot with parkour capabilities. Simultaneously, the Open SDK (Python + ROS2) democratizes access for researchers and B2B developers — creating an application ecosystem impossible to rapidly replicate by a competitor.",
        },
      ],
      status: "Direct enterprise contract",
      delivery: "Hyundai partner + selected researchers",
    },
    apollo: {
      title: "Apptronik Apollo",
      company: "Apptronik / Google DeepMind",
      tagline: "The highest payload in the industry — optimized for heavy logistics",
      specs: [
        { label: "Max payload", value: "55 kg", detail: "Highest in the industry for a mobile unit" },
        { label: "Height / Weight", value: "1.73m / 73kg", detail: "Sized for standard human tasks" },
        { label: "Walking speed", value: "1.5 m/s", detail: "0.8 m/s with maximum 55kg load" },
        { label: "Battery life", value: "4 hours", detail: "Battery swap < 2 min (autonomous swap station)" },
        { label: "AI Partner", value: "Google DeepMind", detail: "Most powerful AI stack outside Figure/Sanctuary" },
        { label: "Price / Lease", value: "$200K / $3,500/mo", detail: "Includes full maintenance" },
      ],
      sections: [
        {
          heading: "Google DeepMind Partnership — World-class AI",
          body: "The Google DeepMind partnership places Apollo in the select league of robots with access to the most advanced AI models available. DeepMind contributes task planning and motor control models that allow Apollo to generalize new tasks with little training. The combination of massive 55kg payload and sophisticated AI creates a unique profile: the robot with the highest lifting power capable of complex reasoning.",
        },
        {
          heading: "55kg Payload — Direct replacement of warehouse workers",
          body: "A human worker can safely lift 25kg under optimal conditions. Apollo can lift 55kg continuously for 4 hours per battery charge, without fatigue, complaints, or sick leave. This makes it the optimal solution for high-volume warehouse picking, heavy industrial assembly, and hazardous logistics. GXO Logistics, the world's largest third-party warehouse operator, has already signed a pilot partnership.",
        },
        {
          heading: "Rapid battery swap system — Maximum uptime",
          body: "4-hour battery life would be a critical limitation if not for the autonomous swap solution in < 2 minutes. Rapid swap stations integrate the robot into a production line without significant interruptions — effectively Apollo can operate 22h/day with a single set of 3 batteries per station. This uptime architecture has no equivalent at competitors who require 2+ hours of recharging.",
        },
      ],
      partners: ["NASA", "GXO Logistics", "Mercedes-Benz"],
      status: "Available B2B",
      delivery: "Lease: $3,500/mo + maintenance included",
    },
    benchmarks: {
      title: "Comparative Benchmarks",
      subtitle: "Atlas vs. Apollo vs. the market",
      headers: ["Metric", "Atlas (BD)", "Apollo (Apptronik)", "Figure 03", "Optimus Gen 3"],
      rows: [
        ["Walking speed", "~1.5 m/s", "1.5 m/s (0.8 with load)", "1.2 m/s", "1.1 m/s"],
        ["Payload", "20 kg", "55 kg ★", "~10 kg", "20 kg"],
        ["Total DoF", "28", "N/A public", "N/A public", "28"],
        ["Max torque", "340 Nm ★", "N/A public", "N/A public", "N/A public"],
        ["Battery life", "N/A public", "4 hours", "8 hours ★", "N/A public"],
        ["AI Stack", "Open SDK", "Google DeepMind", "GPT-4o", "FSD NN (internal)"],
        ["Price", "Enterprise", "$200K / $3.5K/mo", "~$150K", "$30–40K"],
        ["Parkour", "Yes ★", "No", "No", "No"],
        ["Retail available", "No", "Yes (lease)", "Q4 2026", "Q4 2026"],
      ],
    },
    usecases: {
      title: "Applications and Target Market",
      atlas: {
        label: "Atlas — Extreme environments",
        items: [
          { label: "Construction", detail: "Access to hazardous areas, material transport on stairs and irregular surfaces." },
          { label: "Hazardous logistics", detail: "Handling toxic or radioactive substances, fire or flood zones." },
          { label: "Disaster response", detail: "Operational on deformed terrain. Ability to navigate ruins and collapsed structures." },
          { label: "Advanced research", detail: "Open SDK enables free experimentation in academic institutions and R&D labs." },
        ],
      },
      apollo: {
        label: "Apollo — Logistics and industry",
        items: [
          { label: "Warehouse picking", detail: "GXO Logistics: direct replacement of warehouse workers for heavy picking." },
          { label: "Auto assembly", detail: "Mercedes-Benz: assembly tasks requiring force > 25kg." },
          { label: "Space logistics", detail: "NASA: testing for operations in reduced gravity environments and robotic EVA suits." },
          { label: "Customer lease", detail: "$3,500/month with included maintenance — accessible model for SMBs." },
        ],
      },
    },
    positioning: {
      title: "Market Positioning",
      body: "Atlas and Apollo do not compete directly with Figure or Tesla Optimus. They occupy the premium niche of the market — robots with superior capabilities for extreme environments or exceptional payload, where higher cost is justified by the operational value created. Atlas is the only robot capable of advanced mobility in unstructured environments; Apollo is the only one with a commercially available 55kg payload. Both will see their prices decline with scale, but in 2026–2028 they remain instruments for selected enterprise partners.",
    },
    cards: [
      { label: "340 Nm", accent: "#00E5FF", title: "Atlas max torque", detail: "Per joint. No competitor comes close to this value in commercial robotics." },
      { label: "55 kg", accent: "#FFE600", title: "Apollo payload", detail: "Highest payload in a mobile humanoid robot. Equivalent to 2 human workers at maximum strength." },
      { label: "2 min", accent: "#00E5FF", title: "Apollo battery swap", detail: "Full autonomous swap in under 2 minutes. Enables 22h/day operation with 3 batteries per station." },
    ],
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
  { freq: 110, type: "sine" as OscillatorType, gain: 0.04, lfoRate: 0.05 },
  { freq: 220, type: "sine" as OscillatorType, gain: 0.02, lfoRate: 0.09 },
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
      osc.type = type; osc.frequency.value = freq;
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.setTargetAtTime(gainVal, ctx.currentTime, 2.5);
      lfo.type = "sine"; lfo.frequency.value = lfoRate;
      lfoGain.gain.value = freq * 0.003;
      lfo.connect(lfoGain); lfoGain.connect(osc.frequency);
      osc.connect(gainNode); gainNode.connect(master);
      lfo.start(); osc.start();
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
      activeRef.current.forEach(({ osc, lfo }) => { try { osc.stop(); lfo.stop(); } catch {} });
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
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: `${accent}60` }}>{company}</div>
        <div className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: accent, textShadow: `0 0 40px ${accent}35` }}>{name}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to top, #080810, transparent)" }} />
    </div>
  );
}

export default function PeakPerformancePage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.06)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 border border-[#00E5FF]/20 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">{tx.badge}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
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

      {/* Atlas Section */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <RobotImageHero name={tx.atlas.title} company={tx.atlas.company} accent="#00E5FF" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                <Zap size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF]/60">{tx.atlas.company}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.atlas.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.atlas.tagline}</p>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
          >
            {tx.atlas.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#00E5FF]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#00E5FF] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {tx.atlas.sections.map((s, i) => (
              <motion.div
                key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#080810] p-7 hover:border-white/10 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#00E5FF]" />
                  {s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs border border-[#00E5FF]/25 rounded-full px-4 py-2 bg-[#00E5FF]/8 text-[#00E5FF]">
              <Shield size={12} />
              {tx.atlas.status}
            </span>
            <span className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50">
              {tx.atlas.delivery}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Apollo Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <RobotImageHero name={tx.apollo.title} company={tx.apollo.company} accent="#FFE600" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/25 flex items-center justify-center">
                <Globe size={16} className="text-[#FFE600]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600]/60">{tx.apollo.company}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.apollo.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.apollo.tagline}</p>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
          >
            {tx.apollo.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0a0a14] p-4 hover:border-[#FFE600]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#FFE600] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {tx.apollo.sections.map((s, i) => (
              <motion.div
                key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0a0a14] p-7 hover:border-white/10 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#FFE600]" />
                  {s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Partners */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-wrap gap-3 items-center">
            {tx.apollo.partners.map((p) => (
              <span key={p} className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50 hover:border-[#FFE600]/20 hover:text-white/70 transition-colors duration-200">
                {p}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 text-xs border border-[#FFE600]/25 rounded-full px-4 py-2 bg-[#FFE600]/8 text-[#FFE600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
              {tx.apollo.status}
            </span>
          </motion.div>
          <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-3">
            <span className="text-xs text-white/40">{tx.apollo.delivery}</span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Metric Cards */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {tx.cards.map((card, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative group rounded-2xl border bg-[#0e0e1a] p-8 overflow-hidden transition-all duration-300"
                style={{ borderColor: `${card.accent}20` }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[50px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ background: `${card.accent}15` }}
                />
                <div className="relative z-10 text-4xl font-black mb-3" style={{ color: card.accent }}>{card.label}</div>
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent mx-6" />

      {/* Benchmarks Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.benchmarks.title}</h2>
            <p className="text-white/40 text-sm">{tx.benchmarks.subtitle}</p>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-white/[0.02]">
                    {tx.benchmarks.headers.map((h, i) => (
                      <th key={i} className="text-left px-4 py-4 text-[9px] uppercase tracking-widest text-white/40 font-semibold whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tx.benchmarks.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/4 hover:bg-white/[0.015] transition-colors duration-150">
                      <td className="px-4 py-3.5 text-white/60 text-sm font-medium whitespace-nowrap">{row[0]}</td>
                      <td className="px-4 py-3.5 text-[#00E5FF] text-sm font-semibold whitespace-nowrap">{row[1]}</td>
                      <td className="px-4 py-3.5 text-[#FFE600] text-sm font-semibold whitespace-nowrap">{row[2]}</td>
                      <td className="px-4 py-3.5 text-white/50 text-sm whitespace-nowrap">{row[3]}</td>
                      <td className="px-4 py-3.5 text-white/50 text-sm whitespace-nowrap">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.usecases.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Atlas */}
            <div>
              <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="text-[10px] uppercase tracking-widest text-[#00E5FF]/60 mb-4 font-mono">
                {tx.usecases.atlas.label}
              </motion.div>
              <div className="space-y-3">
                {tx.usecases.atlas.items.map((item, i) => (
                  <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                    className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#00E5FF]/15 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-1 min-h-[40px] rounded-full bg-[#00E5FF]/40 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                        <div className="text-white/40 text-xs leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Apollo */}
            <div>
              <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="text-[10px] uppercase tracking-widest text-[#FFE600]/60 mb-4 font-mono">
                {tx.usecases.apollo.label}
              </motion.div>
              <div className="space-y-3">
                {tx.usecases.apollo.items.map((item, i) => (
                  <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                    className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#FFE600]/15 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-1 min-h-[40px] rounded-full bg-[#FFE600]/40 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                        <div className="text-white/40 text-xs leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Market Positioning */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.positioning.title}</h2>
          </motion.div>
          <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="text-white/50 text-sm md:text-base leading-relaxed border-l-2 border-[#00E5FF]/20 pl-5">
            {tx.positioning.body}
          </motion.p>
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
