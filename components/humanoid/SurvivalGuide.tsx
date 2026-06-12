"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, UserCheck, ShieldAlert, Scale, ChevronDown } from "lucide-react";

const tips = [
  {
    icon: Database,
    number: "01",
    title: "Schimb de Date",
    tagline: "Datele tale = Roboți mai ieftini",
    description:
      "Companiile care furnizează date reale de operare (traiectorii, sarcini, erori de manipulare) producătorilor de roboți primesc acces prioritar la hardware subsidiat cu 40–60% față de prețul de piață. Acesta este noul contract industrial: tu oferi date de antrenament din lumea reală, ei îți oferă un avantaj competitiv masiv. BMW, Amazon și DHL au deja acorduri de tip 'data-for-robots'.",
    accent: "#00E5FF",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Noul Rol Uman",
    tagline: "De la executor la supervizor de flotă",
    description:
      "Tranziția nu elimină omul — îl repoziționează. Rolul de 'Fleet Supervisor' (supervizor de flotă) gestionează 10–50 roboți simultan prin interfețe intuitive. Companiile care investesc acum în re-skilling-ul angajaților actuali (cursuri de 3–6 luni în robotics operations) raportează o satisfacție a angajaților cu 34% mai mare și costuri de tranziție cu 70% mai mici față de angajările externe.",
    accent: "#FFE600",
  },
  {
    icon: ShieldAlert,
    number: "03",
    title: "Bariere de Siguranță",
    tagline: "Protejarea operatorului uman de greșelile AI",
    description:
      "ISO 10218-2 și standardele ANSI/RIA R15.06 cer acum 'safety layers' independente față de modelul AI principal. Soluția practică: zona de colaborare om-robot (< 1,5m) trebuie să aibă senzori de siguranță certificați SIL-3, independenți de sistemul cognitiv. Un robot cu AI defect trebuie oprit de hardware, nu de software. Investiția în safety middleware corect reduce accidentele cu 89% față de sistemele fără redundanță.",
    accent: "#00E5FF",
  },
  {
    icon: Scale,
    number: "04",
    title: "Distribuția Justă a Riscului",
    tagline: "Evitarea mutării riscurilor",
    description:
      "Cel mai mare pericol ascuns al contractelor de robotică: clauzele care transferă integral riscul de mentenanță și defecțiune către operatorul uman. Un model just include: garanții performanță (SLA) de uptime > 95%, responsabilitate partajată pentru defecțiunile de model AI (nu doar hardware), fonduri de reconversie profesională incluse în contractele enterprise, și clauze de audit algoritmic pentru deciziile autonome cu impact operațional major.",
    accent: "#FFE600",
  },
];

export default function SurvivalGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0a0a14] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-[#FFE600]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#FFE600]/15 rounded-full px-4 py-1.5 bg-[#FFE600]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE600]/70 font-semibold">
              Ghid de Supraviețuire
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            4 strategii pentru{" "}
            <span className="text-[#FFE600]">era post-umanoide</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto text-base md:text-lg">
            Nu rezistă cel mai puternic, ci cel mai adaptabil. Iată playbook-ul pragmatic.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {tips.map((tip, i) => {
            const Icon = tip.icon;
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={tip.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-white/12 bg-[#0e0e1a]"
                    : "border-white/5 bg-[#0e0e1a]/60 hover:border-white/8"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 p-6 md:p-8 text-left cursor-pointer group"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? `linear-gradient(135deg, ${tip.accent}25, ${tip.accent}08)`
                        : `rgba(255,255,255,0.04)`,
                      border: isOpen ? `1px solid ${tip.accent}30` : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: isOpen ? tip.accent : "rgba(255,255,255,0.35)" }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title group */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-0.5">
                      <span className="text-[10px] font-mono text-white/25 tracking-widest">
                        {tip.number}
                      </span>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300"
                        style={
                          isOpen
                            ? {
                                background: `${tip.accent}15`,
                                color: tip.accent,
                                border: `1px solid ${tip.accent}30`,
                              }
                            : {
                                background: "rgba(255,255,255,0.04)",
                                color: "rgba(255,255,255,0.30)",
                                border: "1px solid rgba(255,255,255,0.06)",
                              }
                        }
                      >
                        {tip.tagline}
                      </span>
                    </div>
                    <h3
                      className="text-white font-bold text-lg md:text-xl leading-tight transition-colors duration-300"
                      style={{ color: isOpen ? "white" : "rgba(255,255,255,0.8)" }}
                    >
                      {tip.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={18}
                      style={{ color: isOpen ? tip.accent : "rgba(255,255,255,0.25)" }}
                    />
                  </motion.div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-7 pt-0">
                        <div
                          className="h-px mb-5"
                          style={{
                            background: `linear-gradient(90deg, ${tip.accent}30, transparent)`,
                          }}
                        />
                        <p className="text-white/55 font-light leading-relaxed text-[15px]">
                          {tip.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
