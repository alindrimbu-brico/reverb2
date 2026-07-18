"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.35 + 0.05,
      hue: Math.random() > 0.8 ? 52 : 192, // cyan or yellow
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const color = p.hue === 192 ? `rgba(0,229,255,${p.alpha})` : `rgba(255,230,0,${p.alpha})`;
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw faint connection lines
      particles.forEach((a, i) => {
        particles.slice(i + 1, i + 5).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,229,255,${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default function HeroSection() {
  const { lang, toggle } = useLanguage();
  const tx = translations[lang].hero;

  const scrollToExplore = () => {
    document.getElementById("economic-impact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#080810] flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full bg-[#FFE600]/4 blur-[100px] pointer-events-none z-0" />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.3) 2px, rgba(0,229,255,0.3) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Language switcher */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-6 right-6 z-20"
      >
        <button
          onClick={toggle}
          className="group flex items-center gap-1.5 border border-white/10 rounded-full px-4 py-2 bg-[#080810]/80 backdrop-blur-sm hover:border-[#00E5FF]/40 transition-all duration-300 cursor-pointer"
        >
          <span className="text-[#00E5FF] font-bold text-[11px] tracking-widest uppercase">
            {lang === "ro" ? "RO" : "EN"}
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span className="text-white/35 font-medium text-[11px] tracking-widest uppercase group-hover:text-white/60 transition-colors">
            {lang === "ro" ? "EN" : "RO"}
          </span>
        </button>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 border border-[#00E5FF]/20 rounded-full px-5 py-2 bg-[#00E5FF]/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]/80 font-semibold">{tx.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.05] mb-6"
          style={{ textShadow: "0 0 80px rgba(0,229,255,0.1)" }}
        >
          {tx.headline1}{" "}
          <br className="hidden md:block" />
          <span
            style={{
              background: "linear-gradient(135deg, #00E5FF, #00b8cc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tx.headline2}
          </span>
          <br className="hidden md:block" />
          {tx.headline3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base md:text-xl text-white/50 font-light max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          {tx.sub1}{" "}
          <span className="text-[#FFE600] font-semibold">{tx.cost}</span>
          {tx.sub2}{" "}
          <span className="text-[#00E5FF] font-semibold">{tx.market}</span>
          {tx.sub3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToExplore}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(0,229,255,0.5), 0 0 120px rgba(0,229,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-[#00E5FF] text-[#080810] px-12 py-5 font-black uppercase tracking-[0.2em] text-[11px] cursor-pointer transition-colors hover:bg-white"
          >
            {tx.cta} &nbsp;→
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">{tx.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#00E5FF]/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
