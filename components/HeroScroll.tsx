"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use Framer Motion's useScroll hook to track scroll progress within this container.
  // The container will be very tall (e.g. 400vh) to allow for extended scrolling
  // while the inner canvas remains sticky.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track the current frame index based on scroll progress (pretend we have 120 frames)
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);
  
  // In a real application, you would load an array of Image objects here.
  // Because we do not have actual frames to load right now, we will draw 
  // dynamic abstract geometry on the canvas to represent the AI/Human fusion.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Create a smooth render loop driven by requestAnimationFrame
    const render = () => {
      // Ensure canvas intrinsic size matches display size for sharpness
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      if (canvas.width !== width || canvas.height !== height) {
        // High DPI support
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }

      const progress = scrollYProgress.get();
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // We will draw an abstract organic shape that evolves based on progress
      // to represent "Human + AI".
      ctx.save();
      ctx.translate(width / 2, height / 2);
      
      // Rotate the entire group slowly based on scroll
      ctx.rotate(progress * Math.PI * 2);

      const maxRings = 15;
      for (let i = 0; i < maxRings; i++) {
        ctx.beginPath();
        const baseRadius = 50 + (i * 25);
        // The radius shifts based on scroll progress to create a "breathing" effect
        const radius = baseRadius + Math.sin(progress * Math.PI * 4 + i) * 30;
        
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        
        ctx.lineWidth = 1;
        // Fade lines from #111111 (ink) to transparent based on depth
        ctx.strokeStyle = `rgba(17, 17, 17, ${0.15 - (i * 0.01)})`;
        ctx.stroke();
      }

      ctx.restore();
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress]);

  // Framer Motion transforms for the text layers based on the same scrollYProgress
  const opacityCenter = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const yCenter = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacityLeft = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const xLeft = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [-50, 0, 0, -50]);

  const opacityRight = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const xRight = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [50, 0, 0, 50]);

  const opacityFinal = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const yFinal = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full" id="HERO_WRAP">
      
      {/* ── Strat 1: Background watermark text (z-index 5) ── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-[5]">
        <h1 className="text-[#111111] opacity-5 font-black text-[20vw] md:text-[300px] lg:text-[400px] xl:text-[520px] tracking-tighter m-0 p-0 leading-none select-none">
          HUMAN
        </h1>
      </div>

      {/* ── Strat 2: Hero scroll canvas (z-index 20) ── */}
      <div className="absolute inset-0 pointer-events-none z-[20]">
        <div className="sticky top-0 h-screen w-full">
           <canvas 
             ref={canvasRef} 
             className="w-full h-full object-contain"
           />
        </div>
      </div>

      {/* ── Strat 3: Text overlays (z-index 30) ── */}
      {/* These divs are also sticky so the text can position itself over the canvas. */}
      <div className="absolute inset-0 z-[30] pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center max-w-[1320px] mx-auto px-[60px]">
          
          {/* BEAT 1: 0% scroll (centered) */}
          <motion.div 
            style={{ opacity: opacityCenter, y: yCenter }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-[60px]"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-[#111111] tracking-[-0.02em] leading-[1.1] max-w-[900px]">
              Afacerea ta, pe sufletul tău.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#777777] max-w-[600px] font-normal leading-relaxed">
              Oameni + AI în pace. Sisteme de vânzări stabile. <br />
              Reverb. Human Digital Marketing AI.
            </p>
            <div className="mt-10 flex gap-4 pointer-events-auto">
               <button className="bg-[#111111] text-white px-8 py-4 rounded-full font-medium uppercase tracking-[0.08em] text-[12px] hover:bg-[#333] transition-colors">
                 Vreau o afacere pe sufletul meu
               </button>
               <button className="border border-[#DADADA] text-[#111111] px-8 py-4 rounded-full font-medium uppercase tracking-[0.08em] text-[12px] hover:border-[#111] hover:bg-[#111] hover:text-white transition-colors">
                 Vezi cum lucrăm
               </button>
            </div>
          </motion.div>

          {/* BEAT 2: 25% scroll (left) */}
          <motion.div 
             style={{ opacity: opacityLeft, x: xLeft }}
             className="absolute left-[60px] top-1/2 -translate-y-1/2 max-w-[500px]"
          >
             <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em] leading-[1.1]">
               Construim sisteme, <br/>nu improvizații.
             </h2>
             <p className="mt-6 text-lg text-[#777777] font-normal">
               Nu lăsăm succesul pe seama norocului. Fiecărei decizii îi corespunde un framework arhitectural testat riguros.
             </p>
          </motion.div>

          {/* BEAT 3: 60% scroll (right) */}
          <motion.div 
             style={{ opacity: opacityRight, x: xRight }}
             className="absolute right-[60px] top-1/2 -translate-y-1/2 max-w-[500px] text-right"
          >
             <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] tracking-[-0.02em] leading-[1.1]">
               AI execută. <br/>Tu conduci.
             </h2>
             <p className="mt-6 text-lg text-[#777777] font-normal">
               Automatizăm sarcini repetitive zilnice cu ecosistemul Google și agenți dedicați, redându-ți timpul înapoi.
             </p>
          </motion.div>

          {/* BEAT 4: 90% scroll (center final) */}
          <motion.div 
             style={{ opacity: opacityFinal, y: yFinal }}
             className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
             <h2 className="text-5xl lg:text-[64px] font-bold text-[#111111] tracking-[-0.02em] mb-10">
               Gata să pornești?
             </h2>
             <button className="bg-[#111111] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#1A1A2E] transition-colors pointer-events-auto transform hover:scale-105 active:scale-95 duration-200">
               Începe Auditul Gratuit
             </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
