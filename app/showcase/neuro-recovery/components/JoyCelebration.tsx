"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, PlayCircle, BookOpen, Fingerprint, Flame, Feather, Infinity as InfinityIcon } from "lucide-react";
import Link from "next/link";
import { setTheme } from "./AudioEngine";

interface Particle {
  id: number;
  size: number;
  x: number;
  targetX: number;
  y: number;
  duration: number;
  delay: number;
}

const consciousnessLevels = [
  {
    icon: <Fingerprint className="w-6 h-6 text-neutral-400" />,
    title: "Plăcerea (Corpul)",
    desc: "Dependență exterioară. Întărește ego-ul prin sclavie față de obiecte."
  },
  {
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    title: "Fericirea (Mintea)",
    desc: "Competiție și viclenie. Frica de pierdere otrăvește orice succes exterior."
  },
  {
    icon: <Feather className="w-6 h-6 text-amber-300" />,
    title: "Bucuria (Sufletul)",
    desc: "Independență absolută. Începe dizolvarea ego-ului prin tăcere și pace."
  },
  {
    icon: <InfinityIcon className="w-8 h-8 text-white animate-pulse" />,
    title: "Extazul (Divinul)",
    desc: "Nirvana. Ego-ul dispare complet; rămâne doar Infinitul. Inocența absolută."
  }
];

export default function JoyCelebration() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map((_, i) => {
        const x = Math.random() * 100;
        return {
          id: i,
          size: Math.random() * 12 + 6,
          x,
          targetX: x + (Math.random() * 15 - 7.5),
          y: Math.random() * 100,
          duration: Math.random() * 12 + 10,
          delay: Math.random() * 5
        };
      })
    );
  }, []);

  return (
    <motion.section 
      onViewportEnter={() => setTheme("joy")}
      onMouseEnter={() => setTheme("joy")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 overflow-hidden bg-neutral-950"
    >
      
      {/* Floating Light Particles - The Void/Neant */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "100vh", x: `${p.x}vw` }}
            animate={{ opacity: [0, 1, 0], y: "-10vh", x: `${p.targetX}vw` }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-amber-500/80 blur-[3px]"
            style={{ width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Radiant Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.4) 0%, rgba(217,119,6,0.1) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-amber-500 uppercase">
            <Sun className="w-4 h-4 animate-spin-slow" />
            <span>Ras Lila: Sărbătoarea Existenței</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Dincolo de Ego. <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
              Către Extaz.
            </span>
          </h2>

          <div className="border-l-4 border-amber-600/50 pl-6 space-y-4">
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              Viața nu are nevoie de sens pentru a fi trăită; ea este un dans în care stelele și oamenii participă împreună. Fericirea este natura ta lăuntrică; ea nu trebuie <em>realizată</em>, ci doar <em>recunoscută</em>.
            </p>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              Nu căuta acul pierdut pe stradă doar pentru că e lumină. Caută-l înăuntru, în întunericul fertil al ființei tale (Meditația). Acolo vei găsi adevărata independență.
            </p>
          </div>

          <div className="pt-6">
            <Link 
              href="/showcase/neuro-recovery/joy"
              className="inline-flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-black bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-full transition-all border border-transparent shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              <BookOpen className="w-5 h-5" />
              <span>Compendiul Extazului</span>
            </Link>
          </div>
        </motion.div>

        {/* Harta Conștiinței / The Map of Consciousness */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          {consciousnessLevels.map((level, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl border backdrop-blur-md transition-colors duration-300 flex items-start space-x-4
                ${idx === 3 ? 'bg-amber-900/20 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'bg-neutral-900/50 border-neutral-800/50 hover:border-neutral-600'}`}
            >
              <div className="shrink-0 mt-1">
                {level.icon}
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-1 ${idx === 3 ? 'text-amber-400' : 'text-neutral-200'}`}>
                  {level.title}
                </h4>
                <p className={`text-sm leading-relaxed ${idx === 3 ? 'text-amber-200/80' : 'text-neutral-400'}`}>
                  {level.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
