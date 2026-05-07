"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, ShieldAlert, ShoppingCart, Zap, Trophy, History, Palette } from "lucide-react";

// --- ENGINE CONSTANTS ---
const WORLD_SIZE = 3000;
const INITIAL_RADIUS = 20;
const SPEED_FACTOR = 4;
const ENEMY_COUNT = 30;
const FOOD_COUNT = 400;

const THEMES = [
  { id: "cyan", color: "#00E5FF", name: "Cyber Cyan" },
  { id: "pink", color: "#FF00FF", name: "Plasma Pink" },
  { id: "green", color: "#00FF00", name: "Neon Green" },
  { id: "gold", color: "#FFD700", name: "Solar Gold" },
];

// --- TYPES ---
interface Vector {
  x: number;
  y: number;
}
interface Entity {
  id: string;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  type: "player" | "enemy" | "food";
}
interface MatchHistory {
  date: string;
  score: number;
  mass: number;
}

// --- AUDIO ENGINE ---
class AudioEngine {
  ctx: AudioContext | null = null;
  osc: OscillatorNode | null = null;
  gain: GainNode | null = null;

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.osc = this.ctx.createOscillator();
    this.gain = this.ctx.createGain();
    
    // Wave pattern for whistling
    this.osc.type = "sine"; 
    this.osc.frequency.value = 400; 
    
    this.gain.gain.value = 0; 
    
    this.osc.connect(this.gain);
    this.gain.connect(this.ctx.destination);
    
    this.osc.start();
  }

  updateProximity(closestDistance: number, playerRadius: number) {
    if (!this.gain || !this.osc || !this.ctx) return;
    const maxThreatDist = 800; // distanța la care se aude

    if (closestDistance > maxThreatDist) {
       this.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
       return;
    }

    const minDistance = playerRadius * 1.5;
    const intensity = 1 - (closestDistance - minDistance) / (maxThreatDist - minDistance);
    const clampedIntensity = Math.max(0, Math.min(1, Math.pow(intensity, 2))); // parabolic pt dramatism

    // Volum max 0.4
    this.gain.gain.setTargetAtTime(clampedIntensity * 0.4, this.ctx.currentTime, 0.1);
    
    // Frecvența fluieratului crește (de la 400Hz spre 1600Hz)
    this.osc.frequency.setTargetAtTime(400 + clampedIntensity * 1200, this.ctx.currentTime, 0.1);
  }

  stop() {
    if (this.gain && this.ctx) {
       this.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    }
  }
}

export default function AbyssIOGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<AudioEngine | null>(null);
  
  // States
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover" | "history">("menu");
  const [theme, setTheme] = useState(THEMES[0].color);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [mass, setMass] = useState(INITIAL_RADIUS);
  const [history, setHistory] = useState<MatchHistory[]>([]);
  
  // Load History & Highscore on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('abyss_history');
    if (savedHistory) {
      const parsed: MatchHistory[] = JSON.parse(savedHistory);
      setHistory(parsed);
      const topScore = parsed.reduce((max, h) => Math.max(max, h.score), 0);
      setHighScore(topScore);
    }
  }, []);

  const saveToHistory = (finalScore: number, finalMass: number) => {
    const entry: MatchHistory = {
      date: new Date().toLocaleString("ro-RO"),
      score: finalScore,
      mass: Math.floor(finalMass)
    };
    const newHistory = [entry, ...history].slice(0, 10); // Keep top 10 most recent
    setHistory(newHistory);
    localStorage.setItem('abyss_history', JSON.stringify(newHistory));
    
    if (finalScore > highScore) setHighScore(finalScore);
  };

  // Refs for Engine Loop
  const requestRef = useRef<number>(0);
  const playerRef = useRef<Entity>({ id: "p1", x: WORLD_SIZE/2, y: WORLD_SIZE/2, r: INITIAL_RADIUS, vx: 0, vy: 0, color: theme, type: "player" });
  const enemiesRef = useRef<Entity[]>([]);
  const foodRef = useRef<Entity[]>([]);
  const mouseRef = useRef<Vector>({ x: 0, y: 0 });
  const cameraRef = useRef<Vector>({ x: WORLD_SIZE/2, y: WORLD_SIZE/2 });

  // Update player color when theme changes
  useEffect(() => {
    playerRef.current.color = theme;
  }, [theme]);

  const initWorld = (premium = false) => {
    // Initialize Audio
    if (!audioRef.current) audioRef.current = new AudioEngine();
    audioRef.current.init();

    playerRef.current = { 
      id: "p1", 
      x: WORLD_SIZE/2, 
      y: WORLD_SIZE/2, 
      r: premium ? INITIAL_RADIUS * 3 : INITIAL_RADIUS, 
      vx: 0, 
      vy: 0, 
      color: theme, 
      type: "player" 
    };
    
    // Spawn Enemies
    const enemies: Entity[] = [];
    for (let i=0; i<ENEMY_COUNT; i++) {
      enemies.push({
        id: `e${i}`,
        x: Math.random() * WORLD_SIZE,
        y: Math.random() * WORLD_SIZE,
        r: Math.random() * 60 + 10,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: "#FF0055", // All enemies are menacing red
        type: "enemy"
      });
    }
    enemiesRef.current = enemies;

    // Spawn Food
    const foods: Entity[] = [];
    for (let i=0; i<FOOD_COUNT; i++) {
      foods.push({
        id: `f${i}`,
        x: Math.random() * WORLD_SIZE,
        y: Math.random() * WORLD_SIZE,
        r: 3,
        vx: 0, vy: 0,
        color: "#CCFF00",
        type: "food"
      });
    }
    foodRef.current = foods;

    setScore(premium ? 500 : 0);
    setMass(premium ? INITIAL_RADIUS * 3 : INITIAL_RADIUS);
  };

  const startGame = (premium = false) => {
    initWorld(premium);
    setGameState("playing");
  };

  // The Core Loop
  useEffect(() => {
    if (gameState !== "playing") {
      audioRef.current?.stop();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const update = () => {
      // 1. Update Player Physics
      const p = playerRef.current;
      const hw = window.innerWidth / 2;
      const hh = window.innerHeight / 2;
      
      const dx = mouseRef.current.x - hw;
      const dy = mouseRef.current.y - hh;
      const dist = Math.hypot(dx, dy);
      
      if (dist > 0) {
        const speed = Math.max(1, SPEED_FACTOR * (30 / p.r)); 
        p.vx = (dx / dist) * speed;
        p.vy = (dy / dist) * speed;
      }

      p.x += p.vx;
      p.y += p.vy;
      
      p.x = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.x));
      p.y = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.y));

      cameraRef.current.x += (p.x - cameraRef.current.x) * 0.1;
      cameraRef.current.y += (p.y - cameraRef.current.y) * 0.1;

      // 2. Update Enemies AI
      let closestEnemyDist = Infinity;

      enemiesRef.current.forEach(e => {
        if (Math.random() < 0.02) {
          e.vx += (Math.random() - 0.5) * 2;
          e.vy += (Math.random() - 0.5) * 2;
        }

        const pdx = p.x - e.x;
        const pdy = p.y - e.y;
        const pdist = Math.hypot(pdx, pdy);
        
        // Audio Logic: Track closest enemy that is BIGGER than player
        if (e.r > p.r) {
          if (pdist < closestEnemyDist) closestEnemyDist = pdist;
        }
        
        if (pdist < 400) {
          const forceX = pdx / pdist;
          const forceY = pdy / pdist;
          if (p.r > e.r * 1.1) {
            e.vx -= forceX * 0.1;
            e.vy -= forceY * 0.1;
          } else if (p.r < e.r * 0.9) {
            e.vx += forceX * 0.1;
            e.vy += forceY * 0.1;
          }
        }

        const speed = Math.hypot(e.vx, e.vy);
        const maxSpeed = Math.max(1, SPEED_FACTOR * (30 / e.r));
        if (speed > maxSpeed) {
          e.vx = (e.vx / speed) * maxSpeed;
          e.vy = (e.vy / speed) * maxSpeed;
        }

        e.x += e.vx;
        e.y += e.vy;

        if (e.x < e.r || e.x > WORLD_SIZE - e.r) e.vx *= -1;
        if (e.y < e.r || e.y > WORLD_SIZE - e.r) e.vy *= -1;
      });

      // Update Audio Proximity
      audioRef.current?.updateProximity(closestEnemyDist, p.r);

      // 3. Collision Detection
      let currentMass = p.r;
      let currentScore = score;
      let isDead = false;

      // Food
      foodRef.current = foodRef.current.filter(f => {
        const dist = Math.hypot(p.x - f.x, p.y - f.y);
        if (dist < p.r) {
          currentMass += 0.5;
          currentScore += 10;
          return false;
        }
        return true;
      });

      // Enemies vs Player
      enemiesRef.current = enemiesRef.current.filter(e => {
        const dist = Math.hypot(p.x - e.x, p.y - e.y);
        if (dist < p.r + e.r - Math.min(p.r, e.r)*0.3) { 
          if (p.r > e.r * 1.1) {
            currentMass += e.r * 0.2;
            currentScore += Math.floor(e.r * 10);
            return false;
          } else if (e.r > p.r * 1.1) {
            isDead = true;
          }
        }
        return true;
      });

      if (isDead) {
        audioRef.current?.stop();
        saveToHistory(currentScore, currentMass);
        setGameState("gameover");
        return;
      }

      p.r = currentMass;
      setMass(Math.floor(currentMass));
      setScore(currentScore);

      if (foodRef.current.length < FOOD_COUNT / 2) {
        for (let i=0; i<50; i++) {
          foodRef.current.push({
            id: `nf${Date.now()}${i}`,
            x: Math.random() * WORLD_SIZE,
            y: Math.random() * WORLD_SIZE,
            r: 3, vx: 0, vy: 0, color: "#CCFF00", type: "food"
          });
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = "#050B14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const hw = canvas.width / 2;
      const hh = canvas.height / 2;
      const cx = cameraRef.current.x;
      const cy = cameraRef.current.y;

      ctx.save();
      ctx.translate(hw - cx, hh - cy);

      // Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x <= WORLD_SIZE; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD_SIZE); ctx.stroke();
      }
      for (let y = 0; y <= WORLD_SIZE; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD_SIZE, y); ctx.stroke();
      }

      ctx.strokeStyle = "#FF0055";
      ctx.lineWidth = 5;
      ctx.strokeRect(0, 0, WORLD_SIZE, WORLD_SIZE);

      const drawEntity = (e: Entity) => {
        if (e.x < cx - hw - e.r || e.x > cx + hw + e.r ||
            e.y < cy - hh - e.r || e.y > cy + hh + e.r) return;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        
        ctx.shadowBlur = e.type === 'food' ? 5 : 20;
        ctx.shadowColor = e.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (e.type !== 'food') {
          const angle = Math.atan2(e.vy, e.vx);
          const eyeDist = e.r * 0.5;
          const eyeX = e.x + Math.cos(angle) * eyeDist;
          const eyeY = e.y + Math.sin(angle) * eyeDist;
          
          ctx.beginPath();
          ctx.arc(eyeX, eyeY, e.r * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(eyeX + Math.cos(angle)*(e.r*0.05), eyeY + Math.sin(angle)*(e.r*0.05), e.r * 0.1, 0, Math.PI * 2);
          ctx.fillStyle = "#000";
          ctx.fill();
        }
      };

      foodRef.current.forEach(drawEntity);
      enemiesRef.current.forEach(drawEntity);
      drawEntity(playerRef.current);

      ctx.restore();
    };

    const loop = () => {
      update();
      if (gameState === "playing") {
        draw();
        requestRef.current = requestAnimationFrame(loop);
      }
    };

    requestRef.current = requestAnimationFrame(loop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameState, score]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050B14] font-mono selection:bg-white selection:text-black">
      
      {/* CANAVAS ENGINE */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 cursor-crosshair ${gameState === 'playing' ? 'opacity-100' : 'opacity-10 blur-sm'} transition-all duration-1000`} 
      />

      {/* REVERB NAV OVERLAY */}
      <div className="absolute top-6 left-6 z-50 mix-blend-difference">
        <Link href="/showcase" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
          <ArrowLeft size={14} /> Back to Matrix
        </Link>
      </div>

      {/* GAME UI IN-PLAY */}
      {gameState === "playing" && (
        <div className="absolute top-6 right-6 z-40 flex flex-col items-end gap-2 text-right">
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md" style={{ borderColor: `${theme}40` }}>
             <div className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: theme }}>SCORE</div>
             <div className="text-2xl text-white font-bold">{score}</div>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md" style={{ borderColor: `${theme}40` }}>
             <div className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: theme }}>MASS (RADIUS)</div>
             <div className="text-lg text-white font-bold">{mass}</div>
          </div>
        </div>
      )}

      {/* MENU STATE */}
      {gameState === "menu" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
           <div className="max-w-xl w-full bg-[#0A1220]/90 border rounded-2xl p-10 backdrop-blur-xl transition-colors duration-500 text-center" style={{ borderColor: `${theme}40`, boxShadow: `0 0 50px ${theme}10` }}>
              <div className="inline-flex items-center justify-center p-3 rounded-full mb-6 transition-colors duration-500" style={{ backgroundColor: `${theme}15`, color: theme }}>
                 <Zap size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">Abyss.io <span className="text-xs align-top bg-white/10 px-2 py-1 rounded text-white/50 tracking-widest">V2</span></h1>
              <p className="uppercase tracking-[0.3em] text-xs font-bold mb-8 transition-colors duration-500" style={{ color: theme }}>Reverb Engine Showcase</p>
              
              {/* Color Picker / Theme Selector */}
              <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                 <div className="flex items-center justify-center gap-2 mb-4 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                   <Palette size={14} /> Alege Pielea Jucătorului
                 </div>
                 <div className="flex gap-4 justify-center">
                    {THEMES.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.color)}
                        className={`w-10 h-10 rounded-full transition-all duration-300 relative ${theme === t.color ? 'scale-125' : 'hover:scale-110'}`}
                        style={{ backgroundColor: t.color, boxShadow: theme === t.color ? `0 0 20px ${t.color}80` : 'none' }}
                      >
                         {theme === t.color && <div className="absolute inset-0 border-2 border-white rounded-full"></div>}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                   onClick={() => startGame(false)}
                   className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-black transition-all overflow-hidden relative group"
                   style={{ backgroundColor: theme }}
                 >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-2"><Play size={18} /> Enter</span>
                 </button>
                 <button 
                   onClick={() => setGameState("history")}
                   className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                 >
                    <History size={18} /> Istoric
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* GAME OVER & MONETIZATION HOOK STATE */}
      {gameState === "gameover" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
           <div className="max-w-2xl w-full bg-[#110505]/90 border border-[#FF0055]/30 rounded-2xl p-10 shadow-[0_0_100px_rgba(255,0,85,0.15)] text-center relative">
              
              <button onClick={() => setGameState("history")} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                <Trophy size={20} />
              </button>

              <ShieldAlert size={48} className="text-[#FF0055] mx-auto mb-6" />
              <h2 className="text-5xl font-bold text-white mb-2">YOU DIED</h2>
              <p className="text-[#FF0055] uppercase tracking-widest text-xs font-bold mb-8">Un prădător mai mare te-a înghițit.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Final Score</div>
                    <div className="text-3xl text-white font-bold">{score}</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">High Score</div>
                    <div className="text-3xl font-bold" style={{ color: theme }}>{highScore}</div>
                 </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-4">
                 <div className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-6">Monetization Demo (Reverb Hook)</div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => startGame(false)}
                      className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                       Respawn Free
                       <span className="block text-[9px] text-white/30 normal-case tracking-normal mt-1">(Start as Plankton)</span>
                    </button>
                    
                    <button 
                      onClick={() => startGame(true)}
                      className="flex-1 relative overflow-hidden group px-6 py-4 rounded-xl bg-gradient-to-r from-[#FF0055] to-[#7000FF] text-white border border-transparent hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all uppercase tracking-widest text-xs font-bold flex flex-col items-center justify-center"
                    >
                       <span className="relative z-10 flex items-center gap-2">
                         <ShoppingCart size={14} /> Buy Titan Respawn
                       </span>
                       <span className="relative z-10 block text-[10px] text-white/80 normal-case tracking-normal mt-1 font-sans">
                         $1.99 via Stripe Demo
                       </span>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* HISTORY SCREEN */}
      {gameState === "history" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
           <div className="max-w-2xl w-full bg-[#0A1220]/90 border border-white/10 rounded-2xl p-10 shadow-2xl text-left">
              <div className="flex items-center justify-between mb-8">
                 <div>
                   <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                     <History className="text-white/50" /> Istoric Meciuri
                   </h2>
                   <p className="text-[10px] text-white/40 uppercase tracking-widest mt-2">Salvat local în memoria browserului</p>
                 </div>
                 <button onClick={() => setGameState("menu")} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
                   Meniu
                 </button>
              </div>

              {history.length === 0 ? (
                 <div className="text-center py-12 text-white/30 text-sm">Nu ai jucat niciun meci încă. Intră în Abyss!</div>
              ) : (
                 <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                    {history.map((h, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                         <div className="flex flex-col">
                            <span className="text-white/40 text-xs">{h.date}</span>
                         </div>
                         <div className="flex gap-8">
                            <div className="text-right">
                               <div className="text-[9px] uppercase tracking-widest text-white/40">Score</div>
                               <div className="font-bold" style={{ color: theme }}>{h.score}</div>
                            </div>
                            <div className="text-right">
                               <div className="text-[9px] uppercase tracking-widest text-white/40">Mass</div>
                               <div className="font-bold text-white">{h.mass}</div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              )}
           </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
