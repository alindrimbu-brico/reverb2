"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Dna, History, PlayCircle } from "lucide-react";
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
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-red-900 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-4 items-center">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <BrainCircuit className="w-4 h-4 text-purple-500" />
              <span>The Roots of Addiction</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            The Projected Shadow of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">
              Silent Suffering.
            </span>
          </h1>

          <p className="text-xl text-neutral-300 leading-relaxed font-light border-l-4 border-purple-900 pl-6 mb-8">
            Addiction is not a wrong choice or a lack of willpower, but a profound disease—a disorder of emotions and behavior. It is a desperate attempt of the brain to survive and regulate an overwhelmed nervous system.
          </p>

          <button
            onClick={() => setTheme("chaos", true)}
            className="flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors border border-white/20"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Play Theme</span>
          </button>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-md relative overflow-hidden group hover:border-purple-900/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <Dna size={120} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3">
              <Dna className="text-purple-500" /> Epigenetics Pulls the Trigger
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Everything begins in our roots. Genetics dictate vulnerabilities, but epigenetics dictate activation. The traumas of past generations and untold sufferings modify how our genes are activated. A child raised in the shadow of an addicted parent carries profound epigenetic changes on their shoulders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-md relative overflow-hidden group hover:border-red-900/50 transition-colors"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <History size={120} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3">
              <History className="text-red-500" /> Collective Trauma
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The massive alcoholism among Native Americans is not the result of a "defective gene". It is the heartbreaking biological reaction to a collective trauma, to genocide, and to the chronic lack of horizon in the reservations. The lack of hope changes the very chemistry of the brain.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
