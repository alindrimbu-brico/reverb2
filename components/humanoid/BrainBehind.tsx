"use client";

import { motion } from "framer-motion";
import { Eye, Cpu, GitMerge } from "lucide-react";

const concepts = [
  {
    icon: Eye,
    title: "Modele VLA",
    subtitle: "Vision-Language-Action",
    description:
      "Robotul percepe vizual lumea, înțelege instrucțiuni în limbaj natural și execută acțiuni fizice — totul dintr-un singur model neuronal end-to-end. RT-2 (Google) și π0 (Physical Intelligence) sunt liderii actuali.",
    metric: "10× mai rapid",
    metricLabel: "adaptare la sarcini noi vs. robotica clasică",
    accent: "#00E5FF",
  },
  {
    icon: Cpu,
    title: "NVIDIA Omniverse",
    subtitle: "Platforma de simulare fizică",
    description:
      "Mediu de simulare cu fidelitate înaltă unde robotul acumulează milioane de ore de experiență virtuală înainte de a atinge lumea reală. Isaac Sim rulează scenarii de antrenament la 100× viteza reală.",
    metric: "100M ore",
    metricLabel: "experiență sintetică în 48h de calcul GPU",
    accent: "#FFE600",
  },
  {
    icon: GitMerge,
    title: "Digital Twins",
    subtitle: "Gemenii Digitali",
    description:
      "Replica exactă digitală a fabricii / depozitului / spitalului. Orice modificare de workflow este testată mai întâi în geamăn. Reduce timpul de implementare cu 50–70% și elimină costurile de downtime industrial.",
    metric: "−50–70%",
    metricLabel: "reducere timp de implementare față de metoda clasică",
    accent: "#00E5FF",
  },
];

export default function BrainBehind() {
  return (
    <section className="relative bg-[#080810] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00E5FF]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Text content */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="inline-flex items-center gap-2 mb-6 border border-[#00E5FF]/15 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">
                  Motorul Cognitiv
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Creierul din{" "}
                <span className="text-[#00E5FF]">spatele mașinii</span>
              </h2>

              <p className="text-white/50 font-light text-base md:text-lg leading-relaxed mb-8">
                Robotul fizic e rezolvat. Diferența reală între jucători o face stratul software:
                cât de rapid învață, cât de bine se adaptează și cât de sigur operează.
              </p>

              {/* Stat callout */}
              <div className="rounded-2xl border border-[#00E5FF]/15 bg-[#00E5FF]/5 p-6">
                <div className="text-4xl font-bold text-[#00E5FF] mb-2">50–70%</div>
                <p className="text-white/60 text-sm font-light">
                  Reducere în timpul de implementare industrială prin utilizarea combinată a{" "}
                  <strong className="text-white/80 font-medium">Digital Twins</strong> și{" "}
                  <strong className="text-white/80 font-medium">NVIDIA Omniverse</strong>.
                </p>
              </div>

              {/* Visual illustration */}
              <div className="mt-8 rounded-2xl border border-white/6 bg-[#0e0e1a] p-6 overflow-hidden relative">
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-4">
                  Pipeline VLA — Flow de inferință
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Senzori RGB-D", "→", "VLA Model", "→", "Planificare", "→", "Acțiune Fizică"].map((step, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={
                        step === "→"
                          ? "text-[#00E5FF]/40 font-bold"
                          : "text-[10px] font-mono font-semibold px-3 py-1.5 rounded-lg border border-[#00E5FF]/15 bg-[#00E5FF]/5 text-[#00E5FF]/80"
                      }
                    >
                      {step}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#00E5FF]/5 rounded-full blur-[30px]" />
              </div>
            </motion.div>
          </div>

          {/* Right: Concept cards */}
          <div className="space-y-5">
            {concepts.map((concept, i) => {
              const Icon = concept.icon;
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group rounded-2xl border border-white/6 bg-[#0e0e1a] p-7 hover:border-white/10 transition-colors duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${concept.accent}18, ${concept.accent}05)`,
                        border: `1px solid ${concept.accent}25`,
                      }}
                    >
                      <Icon size={20} style={{ color: concept.accent }} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono tracking-widest text-white/30 mb-1">
                        {concept.subtitle}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 leading-tight">
                        {concept.title}
                      </h3>
                      <p className="text-white/45 text-sm font-light leading-relaxed mb-5">
                        {concept.description}
                      </p>

                      {/* Metric */}
                      <div
                        className="inline-flex items-center gap-3 rounded-xl px-4 py-2.5"
                        style={{
                          background: `${concept.accent}0d`,
                          border: `1px solid ${concept.accent}20`,
                        }}
                      >
                        <span
                          className="text-xl font-bold tracking-tight"
                          style={{ color: concept.accent }}
                        >
                          {concept.metric}
                        </span>
                        <span className="text-white/40 text-xs font-light leading-tight max-w-[180px]">
                          {concept.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
