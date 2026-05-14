"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, PlayCircle } from "lucide-react";
import { setTheme } from "./AudioEngine";

export default function HomeostasisGraph() {
  const [dose, setDose] = useState(0); // 0 to 100

  // Calculate Process A (Dopamine peak) and Process B (Withdrawal depth)
  // The more the dose, the higher the peak, but Process B gets disproportionately deeper.
  const processA = dose * 1.5;
  const processB = dose * 2.2; 

  return (
    <motion.section 
      onViewportEnter={() => setTheme("withdrawal")}
      onMouseEnter={() => setTheme("withdrawal")}
      onFocusCapture={() => setTheme("withdrawal")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 z-10"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4 items-center mb-2">
            <div className="inline-flex items-center justify-center space-x-2 text-neutral-400">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="uppercase tracking-widest text-xs font-mono">The Law of Compensation</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            The Brain Seeking Balance
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light mb-8">
            Every artificial peak (Process A) triggers an equal and opposite reaction to restore homeostasis (Process B). Over time, the peaks shrink, but the abyss grows deeper.
          </p>
          <button
            onClick={() => setTheme("withdrawal", true)}
            className="flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors border border-white/10 mx-auto"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Play Theme</span>
          </button>
        </motion.div>

        <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md">
          {/* Controls */}
          <div className="mb-12">
            <label className="text-sm font-mono tracking-widest text-neutral-400 uppercase mb-4 block">
              Stimulus Dose (Dopamine Spike)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={dose}
              onChange={(e) => setDose(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Visualization Area */}
          <div className="relative h-64 border-l border-b border-neutral-700 flex items-end justify-center pb-8 pt-8">
            
            {/* Zero Line (Homeostasis) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-600 border-dashed border-t border-neutral-500 z-0">
              <span className="absolute -top-6 left-2 text-xs text-neutral-500 font-mono">Baseline (Homeostasis)</span>
            </div>

            {/* Process A Bar */}
            <div className="relative flex flex-col items-center w-1/3 z-10">
              <span className="text-blue-400 font-bold mb-2 text-sm opacity-80">Process A</span>
              <motion.div
                className="w-16 bg-gradient-to-t from-blue-900 to-blue-400 rounded-t-md origin-bottom"
                animate={{ height: processA > 0 ? `${processA}px` : '4px' }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            </div>

            {/* Process B Bar */}
            <div className="relative flex flex-col items-center w-1/3 z-10">
               <motion.div
                className="w-16 bg-gradient-to-b from-red-900 to-red-600 rounded-b-md origin-top"
                animate={{ height: processB > 0 ? `${processB}px` : '4px' }}
                transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
                style={{ top: '50%', position: 'absolute' }}
              />
              <span className="text-red-400 font-bold mt-2 text-sm opacity-80 absolute" style={{ top: `calc(50% + ${processB > 0 ? processB : 4}px + 8px)` }}>Process B</span>
            </div>
            
          </div>

          {/* Explanation Text */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Process A: The False Paradise</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Represents the immediate effect of the substance—the dopamine peak, emotional numbness, or false calm. It is artificial and temporary.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-red-400 font-medium">Process B: The Price Paid</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The brain struggles desperately to return to balance by pumping "anti-drug" neurochemicals. Tolerance means this counter-effort has become stronger. When the substance fades, Process B remains active, leaving an abyss of anxiety and dysphoria (withdrawal).
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
