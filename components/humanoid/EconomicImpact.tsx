"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import Bolts from "@/components/mech/Bolts";
import SectionHead from "./SectionHead";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const icons = [TrendingUp, Users, DollarSign];

// Cifrele apar ca text, din prima (fără numărătoare și fără instrumente): sunt estimări, nu măsurători.
export default function EconomicImpact() {
  const { lang } = useLanguage();
  const tx = translations[lang].economic;

  return (
    <section id="economic-impact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead badge={tx.badge} title={tx.title} accent={tx.titleAccent} subtitle={tx.subtitle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tx.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-10"
              >
                <Bolts />
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon size={22} strokeWidth={1.5} className="text-white" />
                </div>
                <div className="mb-3 text-4xl font-light tracking-tight text-white tabular-nums md:text-5xl">{stat.value}</div>
                <h3 className="mb-4 text-lg font-medium leading-snug text-white">{stat.label}</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">{stat.detail}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Nota stă lângă primele cifre, nu doar la finalul paginii */}
        <p className="mt-8 text-center text-xs font-light leading-relaxed text-neutral-500">{translations[lang].footer.note}</p>
      </div>
    </section>
  );
}
