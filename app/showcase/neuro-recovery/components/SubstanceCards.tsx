"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, PaintBucket, Zap, Volume2, Image as ImageIcon, Music, PlayCircle, BookOpen } from "lucide-react";
import { setTheme, playTabClickSound, playGeneralClickSound } from "./AudioEngine";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, localizePath } from "./translations";
import { localizedSubstances, substanceUI, SubstanceData } from "./substancesTranslations";

const substanceIcons: Record<string, React.ReactNode> = {
  alcohol: <Hammer className="w-8 h-8 text-orange-500" />,
  cannabis: <PaintBucket className="w-8 h-8 text-green-500" />,
  stimulants: <Zap className="w-8 h-8 text-cyan-500" />,
};

const substanceColors: Record<string, string> = {
  alcohol: "from-orange-900/40 to-orange-500/10",
  cannabis: "from-green-900/40 to-green-500/10",
  stimulants: "from-cyan-900/40 to-cyan-500/10",
};

const substanceBorderHovers: Record<string, string> = {
  alcohol: "hover:border-orange-500/50",
  cannabis: "hover:border-green-500/50",
  stimulants: "hover:border-cyan-500/50",
};

const substanceImages: Record<string, string> = {
  alcohol: "/showcase/neuro-recovery/alcohol.png",
  cannabis: "/showcase/neuro-recovery/cannabis.png",
  stimulants: "/showcase/neuro-recovery/stimulants.png",
};

export default function SubstanceCards() {
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  const substances = localizedSubstances[locale];
  const ui = {
    sectionTitle: substanceUI.sectionTitle[locale],
    sectionSubtitle: substanceUI.sectionSubtitle[locale],
    audioMode: substanceUI.audioMode[locale],
    visualMode: substanceUI.visualMode[locale],
    learnMore: substanceUI.learnMore[locale],
    howItWorks: substanceUI.howItWorks[locale],
    thePrice: substanceUI.thePrice[locale]
  };

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
            {ui.sectionTitle}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-1000 mb-8">
            {ui.sectionSubtitle}
          </p>

          <div className="inline-flex bg-neutral-200/50 dark:bg-neutral-800/50 p-1 rounded-full border border-neutral-300 dark:border-neutral-700">
            <button
              onClick={() => {
                setActiveTab("audio");
                playTabClickSound();
              }}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "audio" ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
            >
              <Music className="w-4 h-4" />
              <span>{ui.audioMode}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("visual");
                playTabClickSound();
              }}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "visual" ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>{ui.visualMode}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {substances.map((sub: SubstanceData, index: number) => {
            const icon = substanceIcons[sub.id];
            const color = substanceColors[sub.id];
            const borderHover = substanceBorderHovers[sub.id];
            const image = substanceImages[sub.id];

            return (
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
                className={`p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 shadow-xl backdrop-blur-md transition-all duration-500 ${borderHover} relative overflow-hidden group min-h-[450px] flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
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
                          {icon}
                        </div>
                        
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white transition-colors duration-1000">{sub.title}</h3>
                        </div>
                        <h4 className="text-sm font-mono tracking-widest uppercase mb-4 text-neutral-500 dark:text-neutral-400">{sub.subtitle}</h4>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <Link 
                            href={localizePath(`/showcase/neuro-recovery/substances/${sub.id}`, locale)}
                            onClick={() => playGeneralClickSound()}
                            className="flex items-center justify-center space-x-2 text-xs font-mono tracking-widest uppercase text-blue-500 bg-blue-100/50 hover:bg-blue-200/50 dark:text-blue-400 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 px-4 py-2 rounded-full transition-colors"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>{ui.learnMore}</span>
                          </Link>
                        </div>
                        
                        <div className="space-y-6 mt-auto">
                          <div>
                            <h5 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">{ui.howItWorks}</h5>
                            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed transition-colors duration-1000">
                              {sub.mechanism}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-1000">
                            <h5 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">{ui.thePrice}</h5>
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
                          <Image src={image} alt={sub.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 transition-colors duration-1000">{sub.title}</h3>
                        <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">{sub.subtitle}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
