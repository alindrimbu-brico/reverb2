"use client";

import { motion } from "framer-motion";
import { Brain, Factory, Zap, Globe } from "lucide-react";

const categories = [
  {
    id: "01",
    icon: Brain,
    title: "Lideri AI",
    subtitle: "Cel mai avansat software cognitiv",
    accent: "#00E5FF",
    robots: [
      {
        name: "Figure 03",
        company: "Figure AI",
        badge: "OpenAI Partnership",
        detail: "Motor de raționament multimodal GPT-4o. Viteză de lucru: 90% din viteza umană.",
      },
      {
        name: "Sanctuary Phoenix",
        company: "Sanctuary AI",
        badge: "AGI-focused",
        detail: "Carbon AI platform. Capabil de transfer de sarcini zero-shot în medii necunoscute.",
      },
    ],
  },
  {
    id: "02",
    icon: Factory,
    title: "Producție de Masă",
    subtitle: "Volum industrial la scară globală",
    accent: "#FFE600",
    robots: [
      {
        name: "Tesla Optimus Gen 3",
        company: "Tesla",
        badge: "1M unități/an target",
        detail: "Linia de asamblare Gigafactory produce 1.000 unități/săptămână. Cost țintă: sub 20.000$.",
      },
    ],
  },
  {
    id: "03",
    icon: Zap,
    title: "Performanță Supremă",
    subtitle: "Capabilități de vârf în medii extreme",
    accent: "#00E5FF",
    robots: [
      {
        name: "Boston Dynamics Atlas",
        company: "Boston Dynamics",
        badge: "Fully Electric",
        detail: "Forța de 800N. Parkour și manipulare de obiecte în medii haotice. SDK deschis.",
      },
      {
        name: "Apptronik Apollo",
        company: "Apptronik",
        badge: "Google Partnership",
        detail: "Proiectat pentru logistică grea: portare de 55kg. Sistem de schimb rapid al bateriei.",
      },
    ],
  },
  {
    id: "04",
    icon: Globe,
    title: "Democratizare",
    subtitle: "Acces la masele largi de adoptatori",
    accent: "#FFE600",
    robots: [
      {
        name: "Unitree G1",
        company: "Unitree Robotics",
        badge: "$16,000",
        detail: "Primul humanoidal sub $20K. 43 grade de libertate. API Python deschis.",
      },
      {
        name: "Unitree R1",
        company: "Unitree Robotics",
        badge: "$4,900",
        detail: "Robot cu roți pentru spații interioare. Ideal pentru retail și ospitalitate.",
      },
      {
        name: "Noetix Bumi",
        company: "Noetix Robotics",
        badge: "$1,400",
        detail: "Cel mai ieftin humanoidal funcțional. Target: gospodării și educație.",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function MarketLeaders() {
  return (
    <section className="relative bg-[#0a0a14] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#FFE600]/15 rounded-full px-4 py-1.5 bg-[#FFE600]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE600]/70 font-semibold">
              Harta Pieței
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Liderii care{" "}
            <span className="text-[#FFE600]">conduc revoluția</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto text-base md:text-lg">
            De la AI cognitiv la democratizare completă — ecosistemul umanoidelor în 2026.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative group rounded-2xl border border-white/6 bg-[#0e0e1a] p-8 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                {/* Corner accent */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: cat.accent }}
                />

                {/* Category header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${cat.accent}20, ${cat.accent}06)`,
                      border: `1px solid ${cat.accent}25`,
                    }}
                  >
                    <Icon size={20} style={{ color: cat.accent }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-mono tracking-widest mb-0.5">
                      {cat.id} / Categorie
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight">{cat.title}</h3>
                    <p className="text-white/40 text-sm font-light mt-1">{cat.subtitle}</p>
                  </div>
                </div>

                {/* Robots list */}
                <div className="space-y-3">
                  {cat.robots.map((robot) => (
                    <div
                      key={robot.name}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-white font-semibold text-base">{robot.name}</span>
                          <span className="text-white/40 text-sm font-light ml-2">{robot.company}</span>
                        </div>
                        <span
                          className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            background: `${cat.accent}15`,
                            color: cat.accent,
                            border: `1px solid ${cat.accent}30`,
                          }}
                        >
                          {robot.badge}
                        </span>
                      </div>
                      <p className="text-white/40 text-sm font-light leading-relaxed">{robot.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom line accent */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}50, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
