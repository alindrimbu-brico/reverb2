"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "750 Mld $",
    label: "Piața globală până în 2035",
    detail: "Creștere anuală compusă de 38% față de 2024. Sectorul manufacturier concentrează 47% din cerere.",
    accent: "#00E5FF",
    gradient: "from-[#00E5FF]/10 to-transparent",
    border: "border-[#00E5FF]/20",
    glow: "shadow-[0_0_40px_rgba(0,229,255,0.08)]",
  },
  {
    icon: Users,
    value: "−18%",
    label: "Forța de muncă activă în UE până în 2050",
    detail: "OECD estimează o tranziție de la 'executor' la 'supervizor de flotă' pentru 65% din locurile de muncă afectate.",
    accent: "#FFE600",
    gradient: "from-[#FFE600]/10 to-transparent",
    border: "border-[#FFE600]/20",
    glow: "shadow-[0_0_40px_rgba(255,230,0,0.08)]",
  },
  {
    icon: DollarSign,
    value: "2$/oră",
    label: "Cost operațional mediu al unui humanoidal",
    detail: "Față de 18–35$/oră pentru forța de muncă umană echivalentă. Crossover-ul economic a fost atins în Q2 2025.",
    accent: "#00E5FF",
    gradient: "from-[#00E5FF]/10 to-transparent",
    border: "border-[#00E5FF]/20",
    glow: "shadow-[0_0_40px_rgba(0,229,255,0.08)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function EconomicImpact() {
  return (
    <section
      id="economic-impact"
      className="relative bg-[#080810] py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#00E5FF]/15 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">
              Impact Economic
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Cifrele care{" "}
            <span className="text-[#00E5FF]">redefinesc economia</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto text-base md:text-lg">
            Datele confirmă: nu mai e o întrebare de "dacă", ci de "când" și "cum te pregătești".
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative group rounded-2xl border ${stat.border} bg-[#0e0e1a] p-8 md:p-10 overflow-hidden ${stat.glow} transition-all duration-300`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${stat.gradient} rounded-full blur-[40px] opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                  style={{
                    background: `linear-gradient(135deg, ${stat.accent}18, ${stat.accent}05)`,
                    border: `1px solid ${stat.accent}25`,
                  }}
                >
                  <Icon size={22} style={{ color: stat.accent }} strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div
                  className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight mb-3"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="relative z-10 text-white font-semibold text-lg mb-4 leading-snug">
                  {stat.label}
                </h3>

                {/* Detail */}
                <p className="relative z-10 text-white/40 text-sm font-light leading-relaxed">
                  {stat.detail}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.accent}60, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
