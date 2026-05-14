"use client";

import { motion } from "framer-motion";
import { Brain, HeartHandshake, ShieldPlus, PlayCircle } from "lucide-react";
import { setTheme } from "./AudioEngine";

export default function RecoveryAlgorithm() {
  return (
    <motion.section 
      onViewportEnter={() => setTheme("recovery")}
      onMouseEnter={() => setTheme("recovery")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 transition-colors duration-1000"
    >
      <div className="max-w-4xl mx-auto w-full space-y-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 items-center mb-4">
            <div className="inline-flex items-center justify-center space-x-2 text-neutral-500 bg-white/50 px-4 py-2 rounded-full border border-neutral-200">
              <HeartHandshake className="w-5 h-5 text-rose-500" />
              <span className="uppercase tracking-widest text-xs font-mono font-semibold">Recovery Algorithm</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            The Road Back to Light
          </h2>
          <button
            onClick={() => setTheme("recovery", true)}
            className="flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-neutral-600 bg-neutral-200/50 hover:bg-neutral-300/50 px-6 py-3 rounded-full transition-colors border border-neutral-300 mx-auto"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Play Theme</span>
          </button>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
          
          {/* Step 1: Medical */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <ShieldPlus className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-bold text-neutral-900 text-xl mb-2">1. The Medical Shield</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Recovery often begins with physical support. Substitution treatments (like Naltrexone, which blocks opioid receptors in alcoholics, or Suboxone) are vital shields in the first phase. They reduce the deafening chemical "noise" to allow the mind to fight.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Mental */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-purple-100 text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-bold text-neutral-900 text-xl mb-2">2. Neuroplasticity</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                No lifelong vows. Broken vows breed guilt, and guilt fuels relapse. The method is <strong>"One day at a time"</strong>. The brain heals only through action, daily training the <em>"muscle of choice"</em>—the conscious ability to face the urge and not act on it.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Conclusion / Social */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 text-center shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Users size={200} />
          </div>
          <HeartHandshake className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            The opposite of addiction is not mere abstinence. <br/>
            <span className="text-rose-600">It is human connection.</span>
          </h3>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Furthermore, the essential theme of our existence is that <strong>humans live in symbols</strong>. We find our meaning in the stories we tell ourselves, in the rituals we keep, and in the tribes we belong to. Addiction thrives exactly when these symbolic structures collapse. When we are left bare in a void of meaning and technological loneliness, we artificially seek that shred of comfort. The path to healing is rebuilding the symbolic architecture: from human to human, from heart to heart.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
