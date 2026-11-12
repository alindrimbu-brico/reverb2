"use client";

// Eroul raportului: titlul în tipografia site-ului, cu două trenuri de roți și un braț robotic în jurul lui.
// Roțile merg singure, accelerează la derulare și când cursorul e aproape; brațul urmărește cursorul.

import { motion } from "framer-motion";
import GearTrain from "@/components/mech/GearTrain";
import RobotArm from "@/components/mech/RobotArm";
import MechLink from "@/components/mech/MechLink";
import HumanoidControls from "./HumanoidControls";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const TRAIN_BIG = [{ teeth: 34 }, { teeth: 17, at: -150 }, { teeth: 22, at: -75 }, { teeth: 11, at: -160 }];
const TRAIN_LEFT = [{ teeth: 20 }, { teeth: 10, at: 35 }, { teeth: 15, at: -30 }];
const TRAIN_PHONE = [{ teeth: 16 }, { teeth: 9, at: 0 }, { teeth: 12, at: 0 }, { teeth: 8, at: 0 }];

export default function HeroSection() {
  const { lang } = useLanguage();
  const tx = translations[lang].hero;

  const scrollToExplore = () => {
    document.getElementById("economic-impact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-44 text-center md:pt-40">
      {/* Mecanica din jurul titlului (doar decor) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 -right-28 hidden lg:block">
          <GearTrain gears={TRAIN_BIG} module={7} id="hero" near={4} />
        </div>
        <div className="absolute -left-16 top-28 hidden lg:block">
          <GearTrain gears={TRAIN_LEFT} module={6} speed={1.3} />
        </div>
        <div className="absolute bottom-0 left-[6%] hidden xl:block">
          <RobotArm />
        </div>
      </div>

      <HumanoidControls className="absolute right-6 top-28 z-20 justify-end md:top-36 lg:right-10" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">{tx.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {tx.headline1} <br className="hidden md:block" />
          <span className="font-light text-neutral-400">{tx.headline2}</span> <br className="hidden md:block" />
          {tx.headline3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mx-auto mb-12 max-w-3xl text-base font-light leading-relaxed text-neutral-400 md:text-xl"
        >
          {tx.sub1} <span className="font-medium text-white">{tx.cost}</span>
          {tx.sub2} <span className="font-medium text-white">{tx.market}</span>
          {tx.sub3}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
          <button
            type="button"
            onClick={scrollToExplore}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-neutral-200 sm:px-12"
          >
            {tx.cta}&nbsp;→
          </button>
          {/* Cine a scris raportul și ce face: să nu rămână de ghicit până la finalul paginii */}
          <p className="mx-auto mt-7 max-w-xl text-sm font-light leading-relaxed text-neutral-400">
            {lang === "ro"
              ? "Un raport Reverb Digital. Facem site-uri, magazine online și automatizări pentru firme."
              : "A Reverb Digital report. We build websites, online stores and automation for companies."}
          </p>
          <MechLink
            href={lang === "ro" ? "/portofoliu" : "/en/portfolio"}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-200 transition-colors hover:bg-white hover:text-black"
          >
            {lang === "ro" ? "Vezi ce am construit" : "See what we have built"}&nbsp;→
          </MechLink>
        </motion.div>

        {/* Pe telefon și tabletă, un tren mic sub buton ține locul celor mari de pe margini */}
        <div className="mt-14 flex justify-center lg:hidden">
          <GearTrain gears={TRAIN_PHONE} module={5} id="hero-phone" speed={1.4} />
        </div>

        <div className="mt-14 hidden flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{tx.scroll}</span>
          <span className="h-10 w-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
