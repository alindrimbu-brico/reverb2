"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Award, ExternalLink, Clock, DollarSign, ChevronRight, Zap, BookOpen, Star, Users, TrendingUp, Lock } from "lucide-react";
import SectionPlayButton from "./SectionPlayButton";

const CATS = [
  { id: "microsoft", label: "Microsoft", color: "#0078D4", bg: "rgba(0,120,212,0.12)", border: "rgba(0,120,212,0.3)" },
  { id: "google", label: "Google", color: "#34A853", bg: "rgba(52,168,83,0.12)", border: "rgba(52,168,83,0.3)" },
  { id: "nvidia", label: "NVIDIA", color: "#76B900", bg: "rgba(118,185,0,0.12)", border: "rgba(118,185,0,0.3)" },
  { id: "academic", label: "Academic", color: "#A855F7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.3)" },
  { id: "robotics", label: "Robotică", color: "#FFE600", bg: "rgba(255,230,0,0.10)", border: "rgba(255,230,0,0.3)" },
];

type Cert = {
  name: string;
  code?: string;
  provider: string;
  level: "Începător" | "Intermediar" | "Avansat" | "Master";
  cost: string;
  duration: string;
  format: string;
  badge?: string;
  note?: string;
  hot?: boolean;
  free?: boolean;
  new?: boolean;
};

const CERTS: Record<string, Cert[]> = {
  microsoft: [
    {
      name: "Azure AI Fundamentals",
      code: "AI-900",
      provider: "Microsoft Learn",
      level: "Începător",
      cost: "$99",
      duration: "60 min examen",
      format: "Proctored online / test center",
      badge: "Fundament solid — nu expiră niciodată",
    },
    {
      name: "Azure AI Apps & Agents Developer",
      code: "AI-103",
      provider: "Microsoft Learn",
      level: "Intermediar",
      cost: "$165",
      duration: "~100 min examen",
      format: "Self-paced + proctored",
      note: "Înlocuiește AI-102 (retras iun. 2026)",
      hot: true,
      new: true,
    },
    {
      name: "AI Agent Builder Associate",
      code: "AB-620",
      provider: "Microsoft Copilot Studio",
      level: "Intermediar",
      cost: "$165",
      duration: "90–120 min examen",
      format: "Self-paced + proctored",
      hot: true,
      new: true,
      badge: "Cel mai căutat rol 2026",
    },
    {
      name: "MLOps Engineer Associate",
      code: "AI-300",
      provider: "Microsoft Azure",
      level: "Intermediar",
      cost: "$165",
      duration: "150 min examen (40–60 întrebări)",
      format: "Self-paced + proctored",
      note: "Înlocuiește DP-100 (retras iun. 2026)",
      new: true,
    },
    {
      name: "Applied Skills: Generate Reports with AI Agents",
      provider: "Microsoft 365 Copilot",
      level: "Începător",
      cost: "GRATUIT",
      duration: "Lab interactiv",
      format: "Evaluare practică online",
      free: true,
      badge: "Badge digital verificat",
    },
    {
      name: "Applied Skills: Create Agents in Copilot Studio",
      provider: "Microsoft Power Platform",
      level: "Începător",
      cost: "GRATUIT",
      duration: "Lab interactiv",
      format: "Evaluare practică online",
      free: true,
    },
  ],
  google: [
    {
      name: "Professional Machine Learning Engineer",
      provider: "Google Cloud",
      level: "Avansat",
      cost: "$200",
      duration: "2 ore examen (50–60 întrebări)",
      format: "Self-paced + proctored",
      badge: "Flagship Google Cloud ML — valabil 2 ani",
      hot: true,
    },
    {
      name: "Google AI Professional Certificate",
      provider: "Google / Coursera",
      level: "Începător",
      cost: "$49/lună",
      duration: "< 10 ore total",
      format: "Self-paced online",
      new: true,
      badge: "150+ angajatori în consorțiu",
      note: "Lansat feb. 2026 — 635.000+ înscriși",
    },
    {
      name: "Google AI Essentials",
      provider: "Google / Coursera",
      level: "Începător",
      cost: "$49/lună",
      duration: "6–10 ore",
      format: "Self-paced online",
    },
    {
      name: "Google Prompting Essentials",
      provider: "Google / Coursera",
      level: "Începător",
      cost: "$49/lună",
      duration: "< 10 ore",
      format: "Self-paced online",
    },
    {
      name: "Developer Program Innovators Plus",
      provider: "Google Cloud",
      level: "Intermediar",
      cost: "$299/an",
      duration: "Abonament continuu",
      format: "700+ labs, live events, voucher examen",
      badge: "$500 credite cloud + voucher incluse",
    },
    {
      name: "AI Research Foundations",
      provider: "Google DeepMind",
      level: "Avansat",
      cost: "GRATUIT",
      duration: "~4h/curs (track complet ~25h)",
      format: "Self-paced pe Google Skills",
      free: true,
      badge: "Dezvoltat cu UCL — pentru cercetători",
    },
  ],
  nvidia: [
    {
      name: "Building Your First Robot in Isaac Sim",
      provider: "NVIDIA DLI",
      level: "Începător",
      cost: "GRATUIT",
      duration: "6–10 ore",
      format: "Self-paced online",
      free: true,
      badge: "Zero experiență necesară",
    },
    {
      name: "Physical AI Learning: Isaac Lab + GR00T",
      provider: "NVIDIA DLI",
      level: "Intermediar",
      cost: "GRATUIT",
      duration: "6–10 ore",
      format: "Self-paced online",
      free: true,
      hot: true,
      note: "Isaac Lab, GR00T, LeRobot by Hugging Face",
    },
    {
      name: "Building Digital Twins for Physical AI with Omniverse",
      code: "DLI+C-OV-04+V1",
      provider: "NVIDIA DLI",
      level: "Intermediar",
      cost: "GRATUIT",
      duration: "8 ore",
      format: "Self-paced + certificat de absolvire",
      free: true,
    },
    {
      name: "OpenUSD Curriculum & Certification",
      provider: "NVIDIA / Alianță industrie",
      level: "Intermediar",
      cost: "Variabil",
      duration: "Self-paced modular",
      format: "Online + certificare industrie",
      note: "Suport de la Adobe, Apple, Autodesk, Pixar",
    },
  ],
  academic: [
    {
      name: "M.S. în Inteligență Artificială",
      provider: "Udacity + Woolf University",
      level: "Master",
      cost: "$3.500 total",
      duration: "~2.250 ore (echivalent master european)",
      format: "Self-paced online — acreditat EU",
      hot: true,
      badge: "Recunoscut în 60+ țări prin EQF",
      note: "Lansat oct. 2025 — acreditare Woolf University",
    },
    {
      name: "Robotics Software Engineer Nanodegree",
      code: "ND209",
      provider: "Udacity",
      level: "Intermediar",
      cost: "~$249/lună",
      duration: "4 luni (~10h/săpt.)",
      format: "Self-paced online",
      badge: "ROS, path planning, environment mapping",
    },
    {
      name: "Artificial Intelligence Nanodegree",
      code: "ND898",
      provider: "Udacity",
      level: "Avansat",
      cost: "~$106–125/lună",
      duration: "3–5 luni",
      format: "Self-paced online",
      note: "Instructori: Sebastian Thrun, Peter Norvig",
    },
    {
      name: "CS7638 — Robotics: AI Techniques",
      provider: "Georgia Tech OMSCS",
      level: "Avansat",
      cost: "$225/credit",
      duration: "1 semestru (~$7.000 program complet)",
      format: "Online în cadrul programului MS",
      badge: "Predat de Sebastian Thrun",
    },
    {
      name: "Robotics Specialization",
      provider: "UPenn / Coursera",
      level: "Intermediar",
      cost: "$265 (5 cursuri + capstone)",
      duration: "~6 luni",
      format: "Self-paced cu certificate",
    },
    {
      name: "AI for Everyone",
      provider: "DeepLearning.AI / Coursera",
      level: "Începător",
      cost: "$49",
      duration: "~6 ore",
      format: "Self-paced online",
      badge: "Andrew Ng — ideal pentru manageri",
    },
  ],
  robotics: [
    {
      name: "Humanoid Robotics Masterclass 2026",
      provider: "The Construct Robotics Institute",
      level: "Avansat",
      cost: "€1.299/lună",
      duration: "6+ luni — cohortă live",
      format: "Interactiv online + lab real",
      hot: true,
      badge: "Doar 20 locuri · Start: 31 aug. 2026",
      note: "Prerequisit: Robotics Developer Masterclass",
    },
    {
      name: "Robotics Developer Masterclass 2026",
      provider: "The Construct Robotics Institute",
      level: "Intermediar",
      cost: "Contact direct",
      duration: "6 luni recomandat",
      format: "Hibrid instructor + self-paced",
      badge: "ROS2, Nav2, MoveIt2, SLAM, BTs, LiDAR",
    },
    {
      name: "RAS University — Robot Perception & Control",
      provider: "IEEE Robotics & Automation Society",
      level: "Intermediar",
      cost: "GRATUIT",
      duration: "15 lecții + cursuri avansate (2026)",
      format: "Self-paced online",
      free: true,
      badge: "Brand IEEE — acces global",
      new: true,
    },
    {
      name: "ROS 2 For Beginners (ROS Jazzy)",
      provider: "Edouard Renard / Udemy",
      level: "Începător",
      cost: "$10–20 (promo frecvente)",
      duration: "12,5 ore",
      format: "Self-paced video",
      badge: "4.7★ · 6.200+ studenți",
    },
    {
      name: "Boston Dynamics University (BDU)",
      provider: "Boston Dynamics",
      level: "Intermediar",
      cost: "~$2.500 (5 pers.)",
      duration: "2 zile (in-person + LMS)",
      format: "Hibrid oficial BD",
      badge: "Certificare oficială pentru operatori Spot",
    },
    {
      name: "AI Skill Pathways",
      provider: "LinkedIn Learning",
      level: "Începător",
      cost: "$39.99/lună ($239.88/an)",
      duration: "Continuu",
      format: "Self-paced; certificate vizibile recrutorilor",
      badge: "Verified AI Skills system — lansat ian. 2026",
    },
  ],
};

const SALARIES = [
  { role: "AI Robotics Engineer", range: "$126K – $205K", sector: "Robotică Software & AI", color: "#00E5FF" },
  { role: "ML Engineer (Google/Tesla)", range: "$180K – $280K", sector: "Transport & AV", color: "#FFE600" },
  { role: "RPA Developer (UiPath cert.)", range: "$90K – $151K", sector: "Enterprise Automation", color: "#00E5FF" },
  { role: "AI Agent Builder (MS cert.)", range: "$115K – $175K", sector: "Microsoft Ecosystem", color: "#0078D4" },
];

const PATHS = [
  {
    title: "Calea Business",
    icon: "💼",
    color: "#0078D4",
    steps: ["AI-900 (fundament)", "Google AI Professional", "Applied Skills MS (gratuit)", "LinkedIn AI Paths"],
    outcome: "Manager de flotă AI · Director de Automatizare",
  },
  {
    title: "Calea Tehnică",
    icon: "⚙️",
    color: "#00E5FF",
    steps: ["Google AI Essentials", "NVIDIA DLI Isaac Sim (gratuit)", "AI-103 / AI-300 MS", "Udacity ND209 sau The Construct"],
    outcome: "AI Robotics Engineer · MLOps Engineer",
  },
  {
    title: "Calea Cercetare",
    icon: "🔬",
    color: "#A855F7",
    steps: ["DeepMind AI Research Foundations (gratuit)", "Georgia Tech OMSCS CS7638", "IEEE RAS University", "Udacity MS AI (Woolf — $3.500)"],
    outcome: "Robotics Researcher · Physical AI Scientist",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function LevelBadge({ level }: { level: Cert["level"] }) {
  const map: Record<string, string> = {
    Începător: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
    Intermediar: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/25",
    Avansat: "text-orange-400 bg-orange-400/10 border-orange-400/25",
    Master: "text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/25",
  };
  return (
    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${map[level]}`}>
      {level}
    </span>
  );
}

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("microsoft");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const cat = CATS.find((c) => c.id === activeTab)!;
  const certs = CERTS[activeTab] ?? [];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#080810] overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(168,85,247,0.04) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(0,120,212,0.05) 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.025) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 border border-[#A855F7]/25 rounded-full px-4 py-1.5 bg-[#A855F7]/8">
              <Award size={12} className="text-[#A855F7]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A855F7]/80 font-semibold">
                Hartă completă · Certificări 2025–2026
              </span>
            </div>
            <SectionPlayButton sectionId="certifications" accent="#A855F7" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Certificările care deschid{" "}
            <span className="text-[#A855F7]">ușile corporațiilor</span>
          </h2>
          <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Microsoft, Google, NVIDIA, academii globale și institute de robotică — traseul complet de la zero la
            roluri strategice în companiile care construiesc viitorul.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className="relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer"
              style={{
                background: activeTab === c.id ? c.bg : "rgba(255,255,255,0.03)",
                borderColor: activeTab === c.id ? c.border : "rgba(255,255,255,0.08)",
                color: activeTab === c.id ? c.color : "rgba(255,255,255,0.4)",
                boxShadow: activeTab === c.id ? `0 0 20px ${c.color}22` : "none",
              }}
            >
              {c.label}
              <span
                className="ml-1.5 text-[9px] font-bold opacity-60"
                style={{ color: activeTab === c.id ? c.color : undefined }}
              >
                {CERTS[c.id]?.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cert cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          >
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative rounded-2xl border p-5 flex flex-col gap-3 group"
                style={{
                  background: cert.hot
                    ? `linear-gradient(135deg, ${cat.bg}, rgba(8,8,16,0.95))`
                    : "rgba(255,255,255,0.025)",
                  borderColor: cert.hot ? cat.border : "rgba(255,255,255,0.06)",
                  boxShadow: cert.hot ? `0 0 30px ${cat.color}18` : "none",
                }}
              >
                {/* Hot badge */}
                {cert.hot && (
                  <div
                    className="absolute -top-2.5 -right-2 flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                    style={{ background: cat.color, color: "#000" }}
                  >
                    <Zap size={8} />
                    Hot 2026
                  </div>
                )}
                {cert.new && !cert.hot && (
                  <div className="absolute -top-2.5 -right-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#00E5FF] text-black">
                    Nou
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-wider font-semibold mb-1"
                      style={{ color: cat.color + "aa" }}>
                      {cert.provider}{cert.code ? ` · ${cert.code}` : ""}
                    </p>
                    <h3 className="text-sm font-bold text-white leading-snug">{cert.name}</h3>
                  </div>
                  <LevelBadge level={cert.level} />
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-2">
                  <span
                    className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                    style={{
                      color: cert.free ? "#34D399" : "rgba(255,255,255,0.7)",
                      borderColor: cert.free ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.1)",
                      background: cert.free ? "rgba(52,211,153,0.08)" : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <DollarSign size={9} />
                    {cert.cost}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/45 px-2 py-0.5 rounded-full border border-white/8 bg-white/[0.02]">
                    <Clock size={9} />
                    {cert.duration}
                  </span>
                </div>

                {/* Format */}
                <p className="text-[11px] text-white/35 leading-relaxed">{cert.format}</p>

                {/* Badge highlight */}
                {cert.badge && (
                  <div
                    className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1.5 rounded-lg"
                    style={{ background: cat.bg, color: cat.color, borderLeft: `2px solid ${cat.color}` }}
                  >
                    <Star size={9} />
                    {cert.badge}
                  </div>
                )}

                {/* Note */}
                {cert.note && (
                  <p className="text-[10px] text-white/30 italic border-t border-white/6 pt-2">{cert.note}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learning paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={18} className="text-white/30" />
            <h3 className="text-lg font-bold text-white">Trasee recomandate de certificare</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PATHS.map((path, i) => (
              <motion.div
                key={path.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{path.icon}</span>
                  <h4 className="font-bold text-white text-sm">{path.title}</h4>
                </div>
                <ol className="flex flex-col gap-2">
                  {path.steps.map((step, si) => (
                    <li key={si} className="flex items-start gap-2">
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
                        style={{ background: path.color + "22", color: path.color }}
                      >
                        {si + 1}
                      </span>
                      <span className="text-[11px] text-white/55 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <div
                  className="mt-auto rounded-lg px-3 py-2 text-[10px] font-semibold"
                  style={{ background: path.color + "18", color: path.color }}
                >
                  <ChevronRight size={10} className="inline mr-1" />
                  {path.outcome}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Salary section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={18} className="text-[#00E5FF]" />
            <h3 className="text-lg font-bold text-white">Salarii cu certificare AI/Robotică (SUA, 2026)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SALARIES.map((s, i) => (
              <motion.div
                key={s.role}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3"
              >
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">{s.role}</p>
                  <p className="text-[10px] text-white/35 mt-0.5">{s.sector}</p>
                </div>
                <span className="text-sm font-bold shrink-0" style={{ color: s.color }}>{s.range}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] text-white/25 mt-4 text-right">
            Surse: Glassdoor, ZipRecruiter, Coursera Salary Guide 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}
