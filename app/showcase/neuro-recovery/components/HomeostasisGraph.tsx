"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, Brain, HeartPulse, Play, Lock, Unlock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  setTheme, 
  modulateAudio, 
  startExerciseAudio, 
  modulateExerciseAudio, 
  stopExerciseAudio 
} from "./AudioEngine";
import { getLocaleFromPath, localizePath } from "./translations";
import { 
  homeostasisQuotes, 
  homeostasisDiagnostics, 
  homeostasisUI, 
  getPhysiologicalStateTranslated,
  QuoteType
} from "./homeostasisTranslations";

export default function HomeostasisGraph() {
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  const quotes = homeostasisQuotes[locale];
  const ui = homeostasisUI[locale];

  const [balance, setBalance] = useState(0.5); // 0 (Homeostasis) to 1 (Hyperstimulation)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<QuoteType | null>(null);
  
  // Click-lock Diagnostic Map states
  const [isLocked, setIsLocked] = useState(false);
  const [lockedBalance, setLockedBalance] = useState(0.5);
  const [lockedMousePos, setLockedMousePos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(50);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // Active balance value (uses locked state if locked, mouse pos if tracking)
  const activeBalance = isLocked ? lockedBalance : balance;
  const heightA = (1 - activeBalance) * 100;
  const heightB = activeBalance * 100;

  // Set initial quote
  useEffect(() => {
    setCurrentQuote(quotes[0]);
  }, [locale]);

  // Update theme music based on current balance
  useEffect(() => {
    if (activeBalance < 0.5) {
      setTheme("recovery");
    } else {
      setTheme("stimulants");
    }
  }, [activeBalance]);

  // Canvas Firing Simulation Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize particles
    const particlesCount = 65;
    const particles = Array.from({ length: particlesCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2.5 + 1.2,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.5 + 0.2
    }));

    const drawLoop = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw central division threshold line
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.setLineDash([5, 10]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();
      ctx.restore();

      // 2. Firing speed multiplier & color interpolation based on activeBalance
      const r = Math.floor(59 + activeBalance * (239 - 59));
      const g = Math.floor(130 - activeBalance * (130 - 68));
      const b = Math.floor(246 - activeBalance * (246 - 68));
      const themeColor = `rgb(${r}, ${g}, ${b})`;

      // Dynamic variables based on activeBalance
      const particleSpeedMult = isLocked ? 0.08 : (0.3 + activeBalance * 7.5);
      const centerNodeSize = 25 + (1 - activeBalance) * 15;
      const centralPulseSpeed = isLocked ? 0.001 : (0.002 + activeBalance * 0.04);
      const pulseFactor = 1 + Math.sin(performance.now() * centralPulseSpeed) * (0.05 + activeBalance * 0.2);

      // 3. Render center node (Hypothalamus/Core)
      ctx.save();
      ctx.shadowBlur = 15 + activeBalance * 40;
      ctx.shadowColor = themeColor;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, centerNodeSize * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = activeBalance < 0.5 ? "rgba(30, 58, 138, 0.65)" : "rgba(127, 29, 29, 0.7)";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = themeColor;
      ctx.stroke();
      ctx.restore();

      // Label inside center node
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "8px monospace";
      ctx.textAlign = "center";
      ctx.fillText(activeBalance < 0.5 ? "NUCLEU" : "HIPER-FOCAR", width / 2, height / 2 + 3);
      ctx.restore();

      // 4. Draw interactive lightning discharges towards active target
      const targetX = isLocked ? lockedMousePos.x : mousePos.x;
      const targetY = isLocked ? lockedMousePos.y : mousePos.y;
      const shouldDrawLightning = activeBalance > 0.5 && (isLocked || isHovering);

      if (shouldDrawLightning && Math.random() < (isLocked ? 0.12 : activeBalance * 0.5)) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ffffff";
        ctx.lineWidth = 1.5 + Math.random() * 2;
        
        ctx.moveTo(width / 2, height / 2);
        
        let curX = width / 2;
        let curY = height / 2;
        const steps = 6;
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const currentTargetX = width / 2 + (targetX - width / 2) * t;
          const currentTargetY = height / 2 + (targetY - height / 2) * t;
          
          const devX = (Math.random() - 0.5) * 35 * (1 - t);
          const devY = (Math.random() - 0.5) * 35 * (1 - t);
          
          curX = currentTargetX + devX;
          curY = currentTargetY + devY;
          ctx.lineTo(curX, curY);
        }
        ctx.lineTo(targetX, targetY);
        ctx.stroke();
        ctx.restore();
      }

      // 5. Draw smooth calming sinusoidal waves in homeostasis
      if (activeBalance < 0.5) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - activeBalance * 2)})`;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < width; x++) {
          const waveY = height / 2 + Math.sin(x * 0.012 + performance.now() * 0.002) * (25 * (1 - activeBalance * 2));
          if (x === 0) ctx.moveTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.stroke();
        ctx.restore();
      }

      // 6. Update and draw particles
      particles.forEach((p, idx) => {
        let speed = p.speed * particleSpeedMult;
        
        if (isHovering || isLocked) {
          const dx = targetX - p.x;
          const dy = targetY - p.y;
          const dist = Math.hypot(dx, dy);

          if (activeBalance < 0.5) {
            if (dist < 185) {
              const force = (185 - dist) * 0.0003 * (1 - activeBalance * 2);
              p.vx += dx * force;
              p.vy += dy * force;
            }
          } else {
            if (dist < 120) {
              const force = (120 - dist) * 0.005 * (activeBalance - 0.5) * 2;
              p.vx -= dx * force;
              p.vy -= dy * force;
              p.vx += (Math.random() - 0.5) * 1.5;
              p.vy += (Math.random() - 0.5) * 1.5;
            }
          }
        }

        p.x += p.vx * speed;
        p.y += p.vy * speed;
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.angle += 0.01 * (isLocked ? 0.2 : particleSpeedMult);
        p.x += Math.cos(p.angle) * 0.1 * (isLocked ? 0.2 : particleSpeedMult);
        p.y += Math.sin(p.angle) * 0.1 * (isLocked ? 0.2 : particleSpeedMult);

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.shadowBlur = activeBalance > 0.5 ? 6 : 0;
        ctx.shadowColor = themeColor;
        ctx.fill();
        ctx.restore();

        if (activeBalance < 0.5) {
          particles.forEach((other, oIdx) => {
            if (idx === oIdx) return;
            const dist = Math.hypot(p.x - other.x, p.y - other.y);
            if (dist < 60) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 60) * 0.06 * (1 - activeBalance * 2)})`;
              ctx.stroke();
            }
          });
        }
      });

      // 7. Draw target indicator ring
      if (isHovering || isLocked) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(targetX, targetY, activeBalance < 0.5 ? 12 : 25, 0, Math.PI * 2);
        ctx.strokeStyle = activeBalance < 0.5 ? "rgba(59, 130, 246, 0.4)" : "rgba(239, 68, 68, 0.6)";
        ctx.lineWidth = isLocked ? 2 : 1;
        if (isLocked) {
          ctx.setLineDash([2, 4]);
        }
        ctx.stroke();

        // Lock target cursor crosshair
        if (isLocked) {
          ctx.beginPath();
          ctx.moveTo(targetX - 8, targetY);
          ctx.lineTo(targetX + 8, targetY);
          ctx.moveTo(targetX, targetY - 8);
          ctx.lineTo(targetX, targetY + 8);
          ctx.strokeStyle = activeBalance < 0.5 ? "#3b82f6" : "#ef4444";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeBalance, mousePos, isHovering, isLocked, lockedMousePos]);

  // Track cursor position on canvas to calculate balance state & modulate audio frequency
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isLocked) return; // ignore tracking if locked

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const newBalance = Math.max(0, Math.min(1, x / rect.width));
    setBalance(newBalance);

    // Call real-time audio modulation sweep based on cursor balance
    modulateAudio(newBalance);
    modulateExerciseAudio(newBalance);

    // Calculate score based on homeostasis proximity (best score at balance=0.1)
    const deviation = Math.abs(newBalance - 0.1);
    const calculatedScore = Math.floor(Math.max(0, 100 - deviation * 150));
    setScore(calculatedScore);
  };

  const handleMouseEnter = () => {
    if (isLocked) return;
    setIsHovering(true);
    // Start local exercise audio sweep, muting background pads temporarily
    startExerciseAudio();
  };

  const handleMouseLeave = () => {
    if (isLocked) return;
    setIsHovering(false);
    setBalance(0.5);
    // Stop local exercise audio and fade background music back in
    stopExerciseAudio();
    modulateAudio(0.5); 
  };

  // Click on Canvas to lock/unlock diagnostic state
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isLocked) {
      // Unlock
      setIsLocked(false);
      setIsHovering(true);
      // Restart exercise audio tracking
      startExerciseAudio();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newBalance = Math.max(0, Math.min(1, x / rect.width));
      setBalance(newBalance);
      modulateExerciseAudio(newBalance);
    } else {
      // Lock current state
      setIsLocked(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const lockedVal = Math.max(0, Math.min(1, x / rect.width));
      
      setLockedBalance(lockedVal);
      setLockedMousePos({ x, y });
      // Keep exercise audio sustained in this locked state!
      modulateExerciseAudio(lockedVal);
    }
  };

  // Click handler to reveal random quote
  const handleActionClick = () => {
    let nextQuote = currentQuote;
    while (nextQuote === currentQuote) {
      nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    setCurrentQuote(nextQuote);
  };

  const stateDesc = getPhysiologicalStateTranslated(locale, activeBalance);
  const diag = homeostasisDiagnostics[locale](activeBalance, heightA, heightB);

  return (
    <motion.section 
      onViewportEnter={() => setTheme(activeBalance < 0.5 ? "recovery" : "stimulants")}
      onMouseEnter={() => setTheme(activeBalance < 0.5 ? "recovery" : "stimulants")}
      onFocusCapture={() => setTheme(activeBalance < 0.5 ? "recovery" : "stimulants")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 z-10 bg-neutral-950"
    >
      
      {/* Background radial soft light */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] transition-all duration-700"
          style={{
            background: activeBalance < 0.5 ? "radial-gradient(circle, #3b82f6, transparent)" : "radial-gradient(circle, #ef4444, transparent)",
            opacity: 0.3 + (activeBalance * 0.4)
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-neutral-400 uppercase shadow-lg">
              <HeartPulse className="w-4 h-4 text-blue-500 animate-pulse" />
              <span>{ui.interactiveGuideBadge}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {ui.brainSeekingBalanceTitle}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            {ui.interactiveSubtitle}
          </p>
        </motion.div>

        {/* Homeostasis Interactive Game Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Game Firing Arena (Split Layout: Double Progress Columns + Canvas) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            
            {/* Interactive Header Description */}
            <div className="flex items-center justify-between gap-4 mb-6 z-10 relative">
              <div>
                <div className="uppercase tracking-widest text-[8px] text-neutral-500 font-mono flex items-center gap-1.5">
                  {ui.nervousSystemState}
                  {isLocked && <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-500 text-[6px] font-bold tracking-widest animate-pulse">LOCKED</span>}
                </div>
                <div className={`text-base font-bold transition-all duration-300 ${stateDesc.color}`}>
                  {stateDesc.text}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono font-light mt-0.5">
                  {stateDesc.wave}
                </div>
              </div>

              <div className="text-right text-neutral-400 font-mono text-[10px]">
                <div className="uppercase tracking-widest text-[8px] text-neutral-500">{ui.synapticCoherence}</div>
                <div className="text-lg font-bold text-white transition-all duration-300">
                  {score}%
                </div>
              </div>
            </div>

            {/* Split Visualizer: Progress Columns (Process A/B) + Synaptic Canvas */}
            <div className="grid grid-cols-12 gap-6 mb-6 items-stretch">
              
              {/* Process A & Process B Dynamic Progress Columns */}
              <div className="col-span-3 flex justify-around items-end bg-neutral-950/60 rounded-2xl border border-neutral-850 p-4 relative min-h-[220px]">
                
                {/* Process A Column: Parasimpatic (Blue) */}
                <div className="flex flex-col items-center h-full justify-end relative w-1/3">
                  <div className="absolute top-0 text-[7px] font-mono tracking-wider text-blue-400 uppercase text-center select-none leading-none">
                    A: {locale === "ru" ? "Покой" : locale === "en" ? "Rest" : locale === "es" ? "Reposo" : locale === "pt" ? "Repouso" : "Repaus"}
                  </div>
                  <motion.div 
                    className="w-full bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    animate={{ height: `${heightA}%` }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    style={{ minHeight: "4%" }}
                  />
                  <span className="text-[9px] font-mono text-neutral-400 mt-2 font-bold select-none">
                    {Math.floor(heightA)}%
                  </span>
                </div>

                {/* Process B Column: Simpatic (Red) */}
                <div className="flex flex-col items-center h-full justify-end relative w-1/3">
                  <div className="absolute top-0 text-[7px] font-mono tracking-wider text-red-400 uppercase text-center select-none leading-none">
                    B: {locale === "ru" ? "Стресс" : locale === "en" ? "Stress" : locale === "es" ? "Estrés" : locale === "pt" ? "Stress" : "Stres"}
                  </div>
                  <motion.div 
                    className="w-full bg-gradient-to-t from-red-950 to-red-500 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    animate={{ height: `${heightB}%` }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    style={{ minHeight: "4%" }}
                  />
                  <span className="text-[9px] font-mono text-neutral-400 mt-2 font-bold select-none">
                    {Math.floor(heightB)}%
                  </span>
                </div>
              </div>

              {/* Firing Canvas Arena */}
              <div className="col-span-9 relative rounded-2xl overflow-hidden bg-neutral-950/80 border border-neutral-800/60 shadow-inner group cursor-crosshair min-h-[220px]">
                <canvas 
                  ref={canvasRef} 
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleCanvasClick}
                  className="absolute inset-0 w-full h-full z-10" 
                />
                
                <div className="absolute bottom-4 left-4 z-20 text-[7px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-1.5 bg-neutral-950/80 px-2 py-0.5 rounded-full border border-neutral-800/40 pointer-events-none">
                  <Brain className={`w-3.5 h-3.5 ${activeBalance < 0.5 ? "text-blue-400 animate-pulse" : "text-red-400 animate-bounce"}`} />
                  <span>{isLocked ? ui.clickToUnlock : ui.clickToDiagnose}</span>
                </div>

                {/* Side Indicators */}
                <div className="absolute inset-y-0 left-3 flex items-center text-[8px] text-blue-500/40 font-mono tracking-widest uppercase writing-mode-vertical pointer-events-none select-none z-20">
                  ← {locale === "ru" ? "Покой" : locale === "en" ? "Rest" : locale === "es" ? "Reposo" : locale === "pt" ? "Repouso" : "Repaus"}
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center text-[8px] text-red-500/40 font-mono tracking-widest uppercase writing-mode-vertical pointer-events-none select-none z-20 text-right">
                  {locale === "ru" ? "Стресс" : locale === "en" ? "Stress" : locale === "es" ? "Estrés" : locale === "pt" ? "Stress" : "Stres"} →
                </div>
              </div>

            </div>

            {/* Controls and Clicker Action */}
            <div className="flex flex-wrap items-center gap-4 z-10 relative">
              <button
                onClick={handleActionClick}
                className={`flex-1 flex items-center justify-center space-x-2 text-sm font-mono tracking-widest uppercase py-4 rounded-xl border transition-all duration-300 ${
                  activeBalance < 0.5
                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    : "bg-red-600/20 text-red-400 border-red-500/30 hover:bg-red-600/30 hover:border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>{ui.extractTruthBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Side: Generated Image & Live Quote Popup */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Conceptual Artwork Showcase */}
            <Link 
              href={localizePath("/showcase/neuro-recovery/brain-balance", locale)}
              className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-neutral-800/80 shadow-2xl group block cursor-pointer"
            >
              <img 
                src="/images/homeostasis-simulation.jpg" 
                alt="Brain Homeostasis vs Hyperstimulation" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-neutral-950/80 border border-neutral-800 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                <span>{ui.projectionBadge}</span>
              </div>
            </Link>

            {/* Neural Quote Card */}
            <div className="flex-1 p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[180px]">
              <div className="absolute top-4 left-4 text-neutral-800 pointer-events-none">
                <Quote className="w-16 h-16 opacity-10" />
              </div>

              <AnimatePresence mode="wait">
                {currentQuote && (
                  <motion.div
                    key={currentQuote.text}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="z-10 relative flex flex-col justify-between h-full"
                  >
                    <p className="text-neutral-200 text-base leading-relaxed italic font-light mb-4">
                      „{currentQuote.text}”
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-px bg-blue-500/50" />
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        {currentQuote.author}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* Click-lock Diagnostic Deep Explanation Panel */}
        <AnimatePresence>
          {isLocked && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 40 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="p-8 rounded-3xl bg-neutral-900/55 border border-amber-500/30 backdrop-blur-2xl relative shadow-2xl space-y-8">
                
                {/* Diagnostic Title */}
                <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <Lock className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">
                        {locale === "ru" ? "ОТЧЕТ О НЕЙРОДИАГНОСТИКЕ" : locale === "en" ? "NEURAL DIAGNOSTIC REPORT" : locale === "es" ? "INFORME DE DIAGNÓSTICO NEURAL" : locale === "pt" ? "RELATÓRIO DE DIAGNÓSTICO NEURAL" : "RAPORT DE DIAGNOSTICARE NEURALĂ"}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{diag.stateName}</h3>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setIsLocked(false);
                      stopExerciseAudio();
                    }}
                    className="text-xs font-mono uppercase text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 px-3 py-1.5 rounded-lg bg-neutral-950 transition-colors"
                  >
                    {ui.resetMapBtn}
                  </button>
                </div>

                {/* Grid: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Column 1: Physiology description */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      <span>{ui.neuroAnalysis}</span>
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                      {diag.explanation}
                    </p>
                    <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-850 space-y-2">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{ui.keyIndicators}:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                        <div>{ui.processADopamine}: <span className="text-blue-400 font-bold">{Math.floor(heightA)}%</span></div>
                        <div>{ui.processBStress}: <span className="text-red-400 font-bold">{Math.floor(heightB)}%</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Healing Guide (Explicit & Detailed) */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>{ui.healingGuide}</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light whitespace-pre-line">
                      {diag.advice}
                    </p>
                  </div>

                </div>

                {/* Bottom line: Star note representing the graph model */}
                <div className="border-t border-neutral-850/60 pt-4 text-[10px] text-neutral-500 font-mono leading-relaxed">
                  <span className="text-amber-500 font-bold mr-1">*</span> 
                  <span className="text-neutral-400 font-semibold">{diag.graphType}</span>: {diag.graphExplanation}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link 
            href={localizePath("/showcase/neuro-recovery/homeostasis", locale)}
            className="inline-flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-blue-400 bg-blue-900/20 hover:bg-blue-900/40 px-8 py-4 rounded-full transition-all border border-blue-500/30 hover:border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <Play className="w-4 h-4" />
            <span>{ui.fullDocumentationBtn}</span>
          </Link>
        </div>

      </div>
    </motion.section>
  );
}
