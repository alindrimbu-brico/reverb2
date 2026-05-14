"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun } from "lucide-react";
import { setTheme } from "./AudioEngine";

export default function JoyCelebration() {
  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <motion.section 
      onViewportEnter={() => setTheme("joy")}
      onMouseEnter={() => setTheme("joy")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 overflow-hidden bg-gradient-to-b from-transparent to-amber-50/50"
    >
      
      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: "100vh", x: `${p.x}vw` }}
            animate={{ opacity: [0, 0.8, 0], y: "-10vh", x: `${p.x + (Math.random() * 10 - 5)}vw` }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-amber-300 blur-[2px]"
            style={{ width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Sun rays effect behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 mix-blend-overlay">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg 20deg, rgba(251, 191, 36, 0.4) 20deg 40deg, transparent 40deg 60deg, rgba(251, 191, 36, 0.4) 60deg 80deg, transparent 80deg 100deg, rgba(251, 191, 36, 0.4) 100deg 120deg, transparent 120deg 140deg, rgba(251, 191, 36, 0.4) 140deg 160deg, transparent 160deg 180deg, rgba(251, 191, 36, 0.4) 180deg 200deg, transparent 200deg 220deg, rgba(251, 191, 36, 0.4) 220deg 240deg, transparent 240deg 260deg, rgba(251, 191, 36, 0.4) 260deg 280deg, transparent 280deg 300deg, rgba(251, 191, 36, 0.4) 300deg 320deg, transparent 320deg 340deg, rgba(251, 191, 36, 0.4) 340deg 360deg)"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-20">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-8">
            <Sun className="w-12 h-12 text-amber-500 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-400 to-rose-400">
            Explozia de Bucurie
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed max-w-3xl mx-auto">
            Recuperarea nu înseamnă să te întorci la "zero". Nu înseamnă doar să supraviețuiești sau să te abții. <br/><br/>
            Înseamnă <strong className="font-bold text-amber-600">să te poți bucura din nou de frumusețea lumii.</strong>
          </p>

          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Bucuria nu este o stimulare chimică haotică. Este o rezonanță profundă cu viața. Este actul curajos de a fi prezent, de a privi cerul, de a asculta o voce cunoscută și de a simți, pur și simplu, că este extraordinar să fii aici.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
