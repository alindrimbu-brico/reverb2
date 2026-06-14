"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Factory, TrendingDown, BarChart3, ChevronRight, Cpu, Play, Square } from "lucide-react";

type Lang = "ro" | "en";

const content = {
  ro: {
    nav: "Realitatea Umanoidă 2026",
    chapterNum: "02",
    chapterLabel: "CAPITOLUL",
    category: "Producție de Masă",
    subtitle: "Tesla Optimus Gen 3 — Primul humanoidal destinat producției la scară globală.",
    badge: "INTEGRARE VERTICALĂ TOTALĂ",
    specs: [
      { label: "Articulații", value: "28", detail: "Grad de libertate total al corpului" },
      { label: "Mâini DoF", value: "11 DoF", detail: "Per mână, pentru manipulare fină" },
      { label: "Viteza de mers", value: "0.45 → 1.1 m/s", detail: "Gen 2 → Gen 3" },
      { label: "Payload maxim", value: "20 kg", detail: "Capacitate de ridicare continuă" },
      { label: "Preț actual 2026", value: "$30–40K", detail: "Target la scară: sub $20,000" },
      { label: "Producție săpt.", value: "1,000 unități", detail: "Linia Gigafactory Austin" },
    ],
    sections: [
      {
        icon: "Factory",
        accent: "#FFE600",
        heading: "Integrare verticală totală — Avantajul Tesla",
        body: "Niciun alt producător de roboți nu controlează întregul lanț de valoare al hardware-ului. Tesla produce propriile actuatoare (Tesla Actuators), bateriile de înaltă densitate (celule 4680), procesorul AI (computerul FSD adaptat pentru corp), designul mecanic și linia de producție. Acest model, identic cu cel al vehiculelor Tesla, elimină dependența de furnizori externi și permite optimizări de cost imposibile pentru competitori. Când Tesla reduce costul celulei 4680 cu 20%, costul per robot scade automat.",
      },
      {
        icon: "Cpu",
        accent: "#00E5FF",
        heading: "AI — Neural Net FSD adaptată pentru corp uman",
        body: "Creierul Optimus Gen 3 rulează o versiune adaptată a Neural Net de la Full Self-Driving, antrenată pe date sintetice generate în Tesla Simulation plus date reale din fabricile Gigafactory. Supercomputerul Dojo procesează 10^18 operații pe secundă pentru antrenament continuu. Spre deosebire de Figure și Sanctuary care apelează la LLM-uri externe, Tesla menține modelele complet intern — avantaj în latență și în securitatea datelor de producție.",
      },
      {
        icon: "TrendingDown",
        accent: "#FFE600",
        heading: "Curba de cost — Playbook-ul Toyota la scară robotică",
        body: "Tesla a adaptat Toyota Production System (TPS) pentru roboți. La 1,000 unități/săptămână curent, costul de producție este ~$30,000–40,000. Modelul economic prevede că la 100,000 unități/an (2027) costul va scădea la ~$20,000, iar la 1,000,000 unități/an sub $10,000. Această curbă de cost exponențial-descrescătoare nu poate fi replicată de jucătorii fără capacitate de producție proprie. Profitabilitatea la scară nu vine din prețul per robot, ci din ecosistemul de servicii și subscription models.",
      },
      {
        icon: "BarChart3",
        accent: "#00E5FF",
        heading: "ROI operațional — 18–24 luni",
        body: "La un preț de $35,000 per unitate și un cost operațional de ~$2/oră (energie + mentenanță), Optimus Gen 3 devine profitabil față de forța de muncă umană în 18–24 luni pentru sarcini repetitive (inspecție vizuală, sortare, asamblare componente mici, logistică internă). Calculul se îmbunătățește dramatic la prețuri sub $20,000. Cele 5,000+ unități active în fabricile Tesla furnizează date validate de ROI pe care Tesla le poate prezenta clienților enterprise.",
      },
    ],
    timeline: {
      title: "Cronologie Producție",
      subtitle: "Traiectoria de scală Tesla Optimus",
      items: [
        { year: "2024", event: "Optimus Gen 2", detail: "Primele unități funcționale intern la Tesla. Demonstrație publică: sarcini simple de asamblare." },
        { year: "2025 Q4", event: "Optimus Gen 3 launch", detail: "28 articulații, mâini 11 DoF, payload 20kg. 1,000 unități activate în Gigafactory Austin." },
        { year: "2026", event: "5,000+ unități active", detail: "3 Gigafactory-uri. Sarcini: logistică, asamblare, inspecție. Precomandă externă deschisă." },
        { year: "2027 Q2", event: "100,000 unități/an", detail: "Prima linie dedicată non-Tesla. Cost sub $20,000. Parteneriate enterprise anunțate." },
        { year: "2028", event: "1M+ unități cumulate", detail: "Ecosistem de aplicații și updates OTA. Potențial sub $10,000 la volum maxim." },
      ],
    },
    usecases: {
      title: "Aplicații Principale",
      subtitle: "Unde Optimus Gen 3 este deja operațional",
      items: [
        { label: "Logistică internă", detail: "Transport piese între stații de asamblare. Înlocuiește conveyor belts și AGV-uri simple.", accent: "#FFE600" },
        { label: "Asamblare componente mici", detail: "Șuruburi, cleme, conectori. Sarcini cu DoF înalt care necesită dexteritate de mână.", accent: "#00E5FF" },
        { label: "Inspecție vizuală", detail: "Quality control automat pe linia de producție. Camera + AI detectează defecte sub 0.1mm.", accent: "#FFE600" },
        { label: "Packaging & sortare", detail: "Depozite și centre de fulfillment. Picking și packing la viteza umană.", accent: "#00E5FF" },
      ],
    },
    competition: {
      title: "Tesla vs. Competiția",
      headers: ["Criteriu", "Tesla Optimus Gen 3", "Figure 03", "Sanctuary Phoenix"],
      rows: [
        ["Model AI", "FSD Neural Net (intern)", "GPT-4o (OpenAI)", "Carbon AI (proprietar)"],
        ["Integrare verticală", "Totală (hardware+AI)", "Parțială (AI extern)", "Parțială (AI intern)"],
        ["Preț 2026", "$30–40K", "~$150K", "Contract enterprise"],
        ["Volum producție", "1,000/săpt.", "Limitat", "Foarte limitat"],
        ["Target cost la scară", "< $10K (2028)", "< $50K (2028)", "N/A public"],
        ["Deployment curent", "5,000+ (intern)", "500 (BMW)", "Limitat (TELUS)"],
        ["ROI recuperare", "18–24 luni", "36–48 luni est.", "N/A public"],
      ],
    },
    cards: [
      { label: "5,000+", accent: "#FFE600", title: "Unități active 2026", detail: "Operaționale în 3 Gigafactory-uri Tesla pe 3 continente. Cel mai mare deployment de umanoidali din istorie." },
      { label: "$20K", accent: "#00E5FF", title: "Target cost la scară", detail: "La 100,000 unități/an. Sub costul unui an de salariu pentru un lucrător de linie în SUA." },
      { label: "10^18", accent: "#FFE600", title: "Op/sec Dojo", detail: "Supercomputerul Tesla antrenează modelele Optimus continuu. Cel mai rapid sistem de training în robotică." },
    ],
    cta: {
      label: "ÎNAPOI LA OVERVIEW",
      text: "Explorează toți liderii pieței",
    },
  },
  en: {
    nav: "Humanoid Reality 2026",
    chapterNum: "02",
    chapterLabel: "CHAPTER",
    category: "Mass Production",
    subtitle: "Tesla Optimus Gen 3 — The first humanoid designed for global-scale production.",
    badge: "FULL VERTICAL INTEGRATION",
    specs: [
      { label: "Joints", value: "28", detail: "Total body degrees of freedom" },
      { label: "Hand DoF", value: "11 DoF", detail: "Per hand, for fine manipulation" },
      { label: "Walking speed", value: "0.45 → 1.1 m/s", detail: "Gen 2 → Gen 3" },
      { label: "Max payload", value: "20 kg", detail: "Continuous lift capacity" },
      { label: "Current price 2026", value: "$30–40K", detail: "Scale target: under $20,000" },
      { label: "Weekly production", value: "1,000 units", detail: "Gigafactory Austin line" },
    ],
    sections: [
      {
        icon: "Factory",
        accent: "#FFE600",
        heading: "Full vertical integration — The Tesla advantage",
        body: "No other robot manufacturer controls the entire hardware value chain. Tesla produces its own actuators (Tesla Actuators), high-density batteries (4680 cells), AI processor (FSD computer adapted for the body), mechanical design, and production line. This model, identical to Tesla vehicles, eliminates dependency on external suppliers and enables cost optimizations impossible for competitors. When Tesla reduces the 4680 cell cost by 20%, the cost per robot automatically decreases.",
      },
      {
        icon: "Cpu",
        accent: "#00E5FF",
        heading: "AI — FSD Neural Net adapted for the human body",
        body: "The Optimus Gen 3 brain runs an adapted version of the Full Self-Driving Neural Net, trained on synthetic data generated in Tesla Simulation plus real data from Gigafactory plants. The Dojo supercomputer processes 10^18 operations per second for continuous training. Unlike Figure and Sanctuary which call external LLMs, Tesla keeps models entirely in-house — an advantage in latency and in production data security.",
      },
      {
        icon: "TrendingDown",
        accent: "#FFE600",
        heading: "Cost curve — Toyota Production System at robotic scale",
        body: "Tesla adapted the Toyota Production System (TPS) for robots. At current 1,000 units/week, production cost is ~$30,000–40,000. The economic model predicts that at 100,000 units/year (2027) cost will drop to ~$20,000, and at 1,000,000 units/year below $10,000. This exponentially decreasing cost curve cannot be replicated by players without their own production capacity. Profitability at scale comes not from the price per robot, but from the service ecosystem and subscription models.",
      },
      {
        icon: "BarChart3",
        accent: "#00E5FF",
        heading: "Operational ROI — 18–24 months",
        body: "At a price of $35,000 per unit and an operational cost of ~$2/hour (energy + maintenance), Optimus Gen 3 becomes profitable versus human labor in 18–24 months for repetitive tasks (visual inspection, sorting, small component assembly, internal logistics). The calculation improves dramatically at prices below $20,000. The 5,000+ active units in Tesla factories provide validated ROI data that Tesla can present to enterprise customers.",
      },
    ],
    timeline: {
      title: "Production Timeline",
      subtitle: "Tesla Optimus scale trajectory",
      items: [
        { year: "2024", event: "Optimus Gen 2", detail: "First functional units internal at Tesla. Public demo: simple assembly tasks." },
        { year: "2025 Q4", event: "Optimus Gen 3 launch", detail: "28 joints, 11 DoF hands, 20kg payload. 1,000 units activated in Gigafactory Austin." },
        { year: "2026", event: "5,000+ active units", detail: "3 Gigafactories. Tasks: logistics, assembly, inspection. External pre-order open." },
        { year: "2027 Q2", event: "100,000 units/year", detail: "First dedicated non-Tesla line. Cost below $20,000. Enterprise partnerships announced." },
        { year: "2028", event: "1M+ cumulative units", detail: "App ecosystem and OTA updates. Potential below $10,000 at peak volume." },
      ],
    },
    usecases: {
      title: "Main Use Cases",
      subtitle: "Where Optimus Gen 3 is already operational",
      items: [
        { label: "Internal logistics", detail: "Parts transport between assembly stations. Replaces conveyor belts and simple AGVs.", accent: "#FFE600" },
        { label: "Small component assembly", detail: "Screws, clamps, connectors. High-DoF tasks requiring hand dexterity.", accent: "#00E5FF" },
        { label: "Visual inspection", detail: "Automated quality control on production line. Camera + AI detects defects below 0.1mm.", accent: "#FFE600" },
        { label: "Packaging & sorting", detail: "Warehouses and fulfillment centers. Picking and packing at human speed.", accent: "#00E5FF" },
      ],
    },
    competition: {
      title: "Tesla vs. Competition",
      headers: ["Criteria", "Tesla Optimus Gen 3", "Figure 03", "Sanctuary Phoenix"],
      rows: [
        ["AI Model", "FSD Neural Net (internal)", "GPT-4o (OpenAI)", "Carbon AI (proprietary)"],
        ["Vertical integration", "Full (hardware+AI)", "Partial (external AI)", "Partial (internal AI)"],
        ["Price 2026", "$30–40K", "~$150K", "Enterprise contract"],
        ["Production volume", "1,000/week", "Limited", "Very limited"],
        ["Scale cost target", "< $10K (2028)", "< $50K (2028)", "N/A public"],
        ["Current deployment", "5,000+ (internal)", "500 (BMW)", "Limited (TELUS)"],
        ["ROI recovery", "18–24 months", "36–48 months est.", "N/A public"],
      ],
    },
    cards: [
      { label: "5,000+", accent: "#FFE600", title: "Active units 2026", detail: "Operational in 3 Tesla Gigafactories on 3 continents. The largest humanoid deployment in history." },
      { label: "$20K", accent: "#00E5FF", title: "Scale cost target", detail: "At 100,000 units/year. Below the cost of one year's salary for a US line worker." },
      { label: "10^18", accent: "#FFE600", title: "Ops/sec Dojo", detail: "Tesla's supercomputer continuously trains Optimus models. The fastest training system in robotics." },
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
  { freq: 65.4, type: "sawtooth" as OscillatorType, gain: 0.018, lfoRate: 0.06 },
  { freq: 130.8, type: "sine" as OscillatorType, gain: 0.03, lfoRate: 0.1 },
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

export default function MassProductionPage() {
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
                border: `1px solid ${audioEnabled ? "rgba(255,230,0,0.45)" : "rgba(255,255,255,0.10)"}`,
                background: audioEnabled ? "rgba(255,230,0,0.10)" : "transparent",
                color: audioEnabled ? "#FFE600" : "rgba(255,255,255,0.35)",
              }}
            >
              {audioEnabled ? <Square size={10} fill="currentColor" strokeWidth={0} /> : <Play size={10} fill="currentColor" strokeWidth={0} />}
              <span>{audioEnabled ? "On" : "Sound"}</span>
            </button>
            <button
              onClick={() => setLang((l) => (l === "ro" ? "en" : "ro"))}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-3 py-1.5 hover:border-[#FFE600]/40 hover:text-[#FFE600] transition-all duration-200"
            >
              <span className={lang === "ro" ? "text-[#FFE600]" : "text-white/40"}>RO</span>
              <span className="text-white/20">/</span>
              <span className={lang === "en" ? "text-[#FFE600]" : "text-white/40"}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,230,0,0.06)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/30 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 border border-[#FFE600]/20 rounded-full px-4 py-1.5 bg-[#FFE600]/5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE600]/70 font-semibold">{tx.badge}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="text-[100px] md:text-[160px] font-black leading-none tracking-tighter text-white/[0.04] select-none mb-[-20px]">
              {tx.chapterNum}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-white to-[#FFE600]/60 bg-clip-text text-transparent">
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

      {/* Specs Grid */}
      <section className="py-16 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <RobotImageHero name="Tesla Optimus Gen 3" company="Tesla" accent="#FFE600" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/25 flex items-center justify-center">
                <Factory size={16} className="text-[#FFE600]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600]/60">Tesla / Optimus Gen 3</span>
            </div>
          </motion.div>
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {tx.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#FFE600]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#FFE600] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Analysis Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {tx.sections.map((s, i) => (
            <motion.div
              key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/6 bg-[#0a0a14] p-7 hover:border-white/10 transition-colors duration-300"
            >
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                <ChevronRight size={16} style={{ color: s.accent }} />
                {s.heading}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
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
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.timeline.title}</h2>
            <p className="text-white/40 text-sm">{tx.timeline.subtitle}</p>
          </motion.div>
          <div className="relative space-y-0">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[#FFE600]/30 via-[#FFE600]/10 to-transparent" />
            {tx.timeline.items.map((item, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="relative flex gap-6 pb-8"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#FFE600]/40 bg-[#080810] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#FFE600]" />
                </div>
                <div className="flex-1 rounded-xl border border-white/6 bg-[#0a0a14] p-5 hover:border-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#FFE600] font-bold text-sm">{item.year}</span>
                    <span className="text-white font-semibold text-sm">{item.event}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.usecases.title}</h2>
            <p className="text-white/40 text-sm">{tx.usecases.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {tx.usecases.items.map((uc, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-xl border border-white/6 bg-[#0e0e1a] p-5 hover:border-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[40px] rounded-full mt-1" style={{ background: uc.accent }} />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{uc.label}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{uc.detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Competition Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.competition.title}</h2>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-white/[0.02]">
                    {tx.competition.headers.map((h, i) => (
                      <th key={i} className="text-left px-5 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tx.competition.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/4 hover:bg-white/[0.015] transition-colors duration-150">
                      <td className="px-5 py-3.5 text-white/60 text-sm font-medium">{row[0]}</td>
                      <td className="px-5 py-3.5 text-[#FFE600] text-sm font-semibold">{row[1]}</td>
                      <td className="px-5 py-3.5 text-white/50 text-sm">{row[2]}</td>
                      <td className="px-5 py-3.5 text-white/50 text-sm">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">{tx.cta.label}</div>
            <Link
              href="/humanoid-reality-2026"
              className="inline-flex items-center gap-3 border border-[#FFE600]/25 rounded-full px-8 py-4 text-[#FFE600] text-sm font-semibold hover:bg-[#FFE600]/8 hover:border-[#FFE600]/50 transition-all duration-300 group"
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
