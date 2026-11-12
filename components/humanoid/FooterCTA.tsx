"use client";

// Finalul raportului. Înainte era un formular „Descarcă Raportul — 48 de pagini”; fișierul nu a existat niciodată.
// Acum spune adevărul: raportul se citește pe site, pe capitole, iar cine vrea o discuție ne scrie.
// Subsolul site-ului vine oricum sub pagină, deci aici nu mai există un al doilea subsol.

import { motion } from "framer-motion";
import Bolts from "@/components/mech/Bolts";
import GearTrain from "@/components/mech/GearTrain";
import MechLink from "@/components/mech/MechLink";
import SectionHead from "./SectionHead";
import { chapterSlugs } from "./MarketLeaders";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const TRAIN = [{ teeth: 22 }, { teeth: 11, at: 0 }, { teeth: 16, at: 0 }, { teeth: 9, at: 0 }];

export default function FooterCTA() {
  const { lang } = useLanguage();
  const tx = translations[lang].footer;
  const chapters = translations[lang].market.categories;

  return (
    <footer id="footer-cta" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead badge={tx.badge} title={tx.title} accent={tx.titleAccent} subtitle={tx.subtitle} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {chapters.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-7"
            >
              <Bolts />
              <div className="min-w-0">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {tx.chapter} 0{i + 1}
                </div>
                <h3 className="text-xl font-medium leading-tight text-white">{cat.title}</h3>
                <p className="mt-1 text-sm font-light text-neutral-400">{cat.subtitle}</p>
              </div>
              <MechLink
                href={`/humanoid-reality-2026/${chapterSlugs[i]}`}
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-200 transition-colors hover:bg-white hover:text-black"
              >
                {tx.read}&nbsp;→
              </MechLink>
            </motion.div>
          ))}
        </div>

        {/* Discuția: singura cale de contact a paginii, fără nicio promisiune de fișier */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12">
          <div className="pointer-events-none absolute -bottom-10 -right-6 hidden md:block">
            <GearTrain gears={TRAIN} module={5} id="final" />
          </div>
          <div className="relative max-w-xl">
            <h3 className="text-2xl font-light leading-tight tracking-tight text-white md:text-3xl">{tx.askTitle}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 md:text-base">{tx.askText}</p>
            <MechLink
              href="/contact?pachet=consultanta-alta"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-neutral-200"
            >
              {tx.askCta}&nbsp;→
            </MechLink>
            <MechLink
              href={lang === "ro" ? "/pachete" : "/en/packages"}
              className="ml-0 mt-3 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-200 transition-colors hover:bg-white hover:text-black sm:ml-3 sm:mt-8"
            >
              {lang === "ro" ? "Pachete și prețuri" : "Packages and prices"}&nbsp;→
            </MechLink>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-light leading-relaxed text-neutral-500">{tx.note}</p>
      </div>
    </footer>
  );
}
