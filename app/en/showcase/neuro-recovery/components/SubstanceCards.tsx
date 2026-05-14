"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, PaintBucket, Zap, ImageIcon, Music, PlayCircle, Activity } from "lucide-react";
import { setTheme } from "./AudioEngine";
import Image from "next/image";

const substances = [
  {
    id: "alcohol",
    title: "Alcohol",
    subtitle: "The Sledgehammer",
    icon: <Hammer className="w-8 h-8 text-orange-500" />,
    color: "from-orange-900/40 to-orange-500/10",
    borderHover: "hover:border-orange-500/50",
    mechanism: "Functions as a chemical sledgehammer. It amplifies the GABA system (which sedates us and stops thoughts) and stimulates the release of endorphins (the body's internal morphine).",
    price: "Long-term, it destroys brain architecture, atrophies the liver, and, by converting to acetaldehyde, massively increases the risk of cancer.",
    image: "/showcase/neuro-recovery/alcohol.png"
  },
  {
    id: "cannabis",
    title: "Cannabis",
    subtitle: "The Rainbow Paint",
    icon: <PaintBucket className="w-8 h-8 text-green-500" />,
    color: "from-green-900/40 to-green-500/10",
    borderHover: "hover:border-green-500/50",
    mechanism: "Floods CB1 receptors, massively amplifying any stimulus. Colors are more vivid, sounds deeper—everything is painted in a rainbow.",
    price: "To defend against hyper-stimulation, the brain downregulates its receptors. The result? Amotivational syndrome, a gray life without desire in the absence of the plant. Fortunately, receptors regenerate after quitting.",
    image: "/showcase/neuro-recovery/cannabis.png"
  },
  {
    id: "stimulants",
    title: "Stimulants",
    subtitle: "The Laser",
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    color: "from-cyan-900/40 to-cyan-500/10",
    borderHover: "hover:border-cyan-500/50",
    mechanism: "Cocaine, amphetamines, and MDMA act like a laser: concentrating energy by blocking the clearance system for dopamine and serotonin. Everything seems ultra-urgent and clear.",
    price: "Total depletion of reserves. MDMA can physically destroy serotonergic axons. Even 7 years after quitting, the damage can cause clinical depression and memory defects.",
    image: "/showcase/neuro-recovery/stimulants.png"
  }
];

export default function SubstanceCards() {
  const [activeTab, setActiveTab] = useState<"audio" | "visual">("audio");
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-24 px-6 z-10 transition-colors duration-1000">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-800 dark:text-white transition-colors duration-1000">
            The Spectrum of Neurochemical Hijacking
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-1000 mb-8">
            How substances interact with our neural network and the silent price each one demands.
          </p>

          <div className="inline-flex bg-neutral-200/50 dark:bg-neutral-800/50 p-1 rounded-full border border-neutral-300 dark:border-neutral-700">
            <button
              onClick={() => setActiveTab("audio")}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "audio" ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
            >
              <Music className="w-4 h-4" />
              <span>Audio Mode</span>
            </button>
            <button
              onClick={() => setActiveTab("visual")}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "visual" ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Visual Mode</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {substances.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              onViewportEnter={() => {
                if (window.innerWidth < 768) {
                  setTheme(sub.id as any);
                }
              }}
              onHoverStart={() => setTheme(sub.id as any)}
              onFocusCapture={() => setTheme(sub.id as any)}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 shadow-xl backdrop-blur-md transition-all duration-500 ${sub.borderHover} relative overflow-hidden group min-h-[450px] flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sub.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <AnimatePresence mode="wait">
                  {activeTab === "audio" ? (
                    <motion.div 
                      key="audio-content"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.4 }}
                      className="flex-grow flex flex-col"
                    >
                      <div className="mb-6 p-4 bg-white dark:bg-neutral-800 rounded-2xl inline-block shadow-sm self-start">
                        {sub.icon}
                      </div>
                      
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-3xl font-bold text-neutral-900 dark:text-white transition-colors duration-1000">{sub.title}</h4>
                          <div className="flex items-center space-x-2 text-neutral-500 font-mono text-sm tracking-widest uppercase">
                            <Activity className="w-4 h-4" />
                            <span>{sub.subtitle}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setTheme(sub.id as any, true)}
                          className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-neutral-600 bg-neutral-200/50 hover:bg-neutral-300/50 dark:text-neutral-400 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 px-4 py-2 rounded-full transition-colors w-max"
                        >
                          <PlayCircle className="w-4 h-4" />
                          <span>Play Theme</span>
                        </button>
                      </div>
                      
                      <div className="space-y-6 mt-auto">
                        <div>
                          <h5 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">How it works</h5>
                          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed transition-colors duration-1000">
                            {sub.mechanism}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-1000">
                          <h5 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">The Price</h5>
                          <p className="text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed transition-colors duration-1000">
                            {sub.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="visual-content"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.4 }}
                      className="flex-grow flex flex-col items-center justify-center text-center"
                    >
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-2xl border border-neutral-200 dark:border-neutral-700">
                        <Image src={sub.image} alt={sub.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 transition-colors duration-1000">{sub.title}</h3>
                      <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">{sub.subtitle}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
