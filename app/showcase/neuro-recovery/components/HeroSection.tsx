"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Dna, History, BookOpen, Quote } from "lucide-react";
import Link from "next/link";
import { setTheme } from "./AudioEngine";

export default function HeroSection() {
  return (
    <motion.section 
      onViewportEnter={() => setTheme("chaos")}
      onMouseEnter={() => setTheme("chaos")}
      onFocusCapture={() => setTheme("chaos")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6"
    >
      {/* Background abstract elements to simulate "chaos/noise" */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-900 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-red-900 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-4 items-center">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-neutral-400 uppercase shadow-lg">
              <BrainCircuit className="w-4 h-4 text-purple-500" />
              <span>Rădăcinile Neurobiologice</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]">
            Umbra Proiectată a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-500 to-neutral-700">
              Suferinței Mute.
            </span>
          </h1>

          <div className="border-l-4 border-purple-800/50 pl-6 space-y-4">
            <p className="text-xl text-neutral-300 leading-relaxed font-light">
              Dependența nu este o slăbiciune morală, o alegere greșită sau o simplă lipsă de voință. În paradigma neuroștiinței moderne, este o <strong className="font-medium text-white">boală profundă a conectivității</strong>—o tulburare a emoțiilor și a comportamentului.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Este o încercare disperată a creierului de a supraviețui, de a regla un sistem nervos copleșit și de a rezolva problema durerii fundamentale, înrădăcinate adesea în traumele timpurii.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/showcase/neuro-recovery/roots"
              className="flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-purple-400 bg-purple-900/20 hover:bg-purple-900/40 px-8 py-4 rounded-full transition-all border border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explorează Cercetarea</span>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-xl relative overflow-hidden group hover:border-purple-900/50 transition-colors shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
              <Dna size={160} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Dna className="text-purple-500" /> Epigenetica Trage Trăgaciul
            </h3>
            <p className="text-neutral-400 text-base leading-relaxed mb-4">
              Totul începe din rădăcinile noastre. Genetica dictează vulnerabilitățile, dar epigenetica dictează activarea. Traumele generațiilor trecute și suferințele nespuse modifică felul în care ni se activează genele, lăsând „semne de carte” moleculare pe ADN.
            </p>
            <div className="bg-neutral-950/50 p-4 rounded-xl border border-neutral-800/50 flex gap-3 items-start">
              <Quote className="w-5 h-5 text-purple-500/50 shrink-0 mt-1" />
              <p className="text-sm text-neutral-300 font-light italic">
                „Nu întreba de ce dependența, întreabă de ce durerea.” — Dr. Gabor Maté
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-xl relative overflow-hidden group hover:border-red-900/50 transition-colors shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-6 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
              <History size={160} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <History className="text-red-500" /> Trauma Colectivă & Axa HPA
            </h3>
            <p className="text-neutral-400 text-base leading-relaxed">
              Stresul cronic dereglează axa HPA (Hipotalamo-Hipofizo-Suprarenală), blocând creierul într-un mod permanent de supraviețuire. Lipsa cronică de speranță, genocidul cultural sau neglijarea în copilărie schimbă însăși arhitectura neurobiologică. Când alarma de stres nu se oprește niciodată, o substanță care o poate reduce la tăcere devine irezistibilă.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
