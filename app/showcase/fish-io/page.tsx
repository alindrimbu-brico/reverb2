"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, ShieldAlert, ShoppingCart, Zap, Trophy, History, Palette, LogIn, LogOut, Globe, User } from "lucide-react";

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

const MOCK_LEADERBOARD_BASE = [
  { name: "Faker_God", score: 95400, mass: 14500 },
  { name: "Cyber_Shark", score: 82100, mass: 12200 },
  { name: "Neon_Ray", score: 76000, mass: 11000 },
  { name: "AbyssWalker", score: 71200, mass: 10500 },
  { name: "DeepBlue", score: 68000, mass: 9800 },
  { name: "Kraken22", score: 55000, mass: 8000 },
  { name: "Leviathan", score: 49000, mass: 7200 },
  { name: "Aqua_Sniper", score: 41000, mass: 6100 },
  { name: "PlanktonKing", score: 38000, mass: 5500 },
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
interface UserProfile {
  name: string;
  email: string;
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
    
    this.osc.type = "sine"; 
    this.osc.frequency.value = 400; 
    this.gain.gain.value = 0; 
    
    this.osc.connect(this.gain);
    this.gain.connect(this.ctx.destination);
    
    this.osc.start();
  }

  updateProximity(closestDistance: number, playerRadius: number) {
    if (!this.gain || !this.osc || !this.ctx) return;
    const maxThreatDist = 800; 

    if (closestDistance > maxThreatDist) {
       this.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
       return;
    }

    const minDistance = playerRadius * 1.5;
    const intensity = 1 - (closestDistance - minDistance) / (maxThreatDist - minDistance);
    const clampedIntensity = Math.max(0, Math.min(1, Math.pow(intensity, 2))); 

    this.gain.gain.setTargetAtTime(clampedIntensity * 0.4, this.ctx.currentTime, 0.1);
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
  const [user, setUser] = useState<UserProfile | null>(null);
  const [leaderboardTab, setLeaderboardTab] = useState<"global" | "personal">("global");
  
  // Global Mock Stats
  const globalGamesPlayed = 1420953 + history.length;
  const activePlayers = 1043;

  useEffect(() => {
    const savedHistory = localStorage.getItem('abyss_history');
    if (savedHistory) {
      const parsed: MatchHistory[] = JSON.parse(savedHistory);
      setHistory(parsed);
      const topScore = parsed.reduce((max, h) => Math.max(max, h.score), 0);
      setHighScore(topScore);
    }

    const savedUser = localStorage.getItem('abyss_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleGoogleLogin = () => {
    // Simulare sistem real de logare Google OAuth (Showcase mode)
    const mockUser = {
      name: "Alin Dragoș",
      email: "bricolando@gmail.com"
    };
    setUser(mockUser);
    localStorage.setItem('abyss_user', JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('abyss_user');
  };

  const saveToHistory = (finalScore: number, finalMass: number) => {
    const entry: MatchHistory = {
      date: new Date().toLocaleString("ro-RO"),
      score: finalScore,
      mass: Math.floor(finalMass)
    };
    const newHistory = [entry, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem('abyss_history', JSON.stringify(newHistory));
    
    if (finalScore > highScore) setHighScore(finalScore);
  };

  // Dinamic Leaderboard (mix real user with mock)
  const getGlobalLeaderboard = () => {
    const combined = [...MOCK_LEADERBOARD_BASE];
    if (highScore > 0) {
      combined.push({ name: user ? user.name : "You (Guest)", score: highScore, mass: Math.floor(highScore / 5) });
    }
    return combined.sort((a, b) => b.score - a.score).slice(0, 10);
  };

  // Refs for Engine Loop
  const requestRef = useRef<number>(0);
  const playerRef = useRef<Entity>({ id: "p1", x: WORLD_SIZE/2, y: WORLD_SIZE/2, r: INITIAL_RADIUS, vx: 0, vy: 0, color: theme, type: "player" });
  const enemiesRef = useRef<Entity[]>([]);
  const foodRef = useRef<Entity[]>([]);
  const mouseRef = useRef<Vector>({ x: 0, y: 0 });
  const cameraRef = useRef<Vector>({ x: WORLD_SIZE/2, y: WORLD_SIZE/2 });

  useEffect(() => {
    playerRef.current.color = theme;
  }, [theme]);

  const initWorld = (premium = false) => {
    if (!audioRef.current) audioRef.current = new AudioEngine();
    audioRef.current.init();

    playerRef.current = { 
      id: "p1", x: WORLD_SIZE/2, y: WORLD_SIZE/2, r: premium ? INITIAL_RADIUS * 3 : INITIAL_RADIUS, vx: 0, vy: 0, color: theme, type: "player" 
    };
    
    const enemies: Entity[] = [];
    for (let i=0; i<ENEMY_COUNT; i++) {
      enemies.push({
        id: `e${i}`, x: Math.random() * WORLD_SIZE, y: Math.random() * WORLD_SIZE, r: Math.random() * 60 + 10, vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4, color: "#FF0055", type: "enemy"
      });
    }
    enemiesRef.current = enemies;

    const foods: Entity[] = [];
    for (let i=0; i<FOOD_COUNT; i++) {
      foods.push({
        id: `f${i}`, x: Math.random() * WORLD_SIZE, y: Math.random() * WORLD_SIZE, r: 3, vx: 0, vy: 0, color: "#CCFF00", type: "food"
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

  // Engine Loop
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

      let closestEnemyDist = Infinity;

      enemiesRef.current.forEach(e => {
        if (Math.random() < 0.02) {
          e.vx += (Math.random() - 0.5) * 2;
          e.vy += (Math.random() - 0.5) * 2;
        }

        const pdx = p.x - e.x;
        const pdy = p.y - e.y;
        const pdist = Math.hypot(pdx, pdy);
        
        if (e.r > p.r && pdist < closestEnemyDist) closestEnemyDist = pdist;
        
        if (pdist < 400) {
          const forceX = pdx / pdist;
          const forceY = pdy / pdist;
          if (p.r > e.r * 1.1) {
            e.vx -= forceX * 0.1; e.vy -= forceY * 0.1;
          } else if (p.r < e.r * 0.9) {
            e.vx += forceX * 0.1; e.vy += forceY * 0.1;
          }
        }

        const speed = Math.hypot(e.vx, e.vy);
        const maxSpeed = Math.max(1, SPEED_FACTOR * (30 / e.r));
        if (speed > maxSpeed) {
          e.vx = (e.vx / speed) * maxSpeed; e.vy = (e.vy / speed) * maxSpeed;
        }

        e.x += e.vx; e.y += e.vy;

        if (e.x < e.r || e.x > WORLD_SIZE - e.r) e.vx *= -1;
        if (e.y < e.r || e.y > WORLD_SIZE - e.r) e.vy *= -1;
      });

      audioRef.current?.updateProximity(closestEnemyDist, p.r);

      let currentMass = p.r;
      let currentScore = score;
      let isDead = false;

      foodRef.current = foodRef.current.filter(f => {
        if (Math.hypot(p.x - f.x, p.y - f.y) < p.r) {
          currentMass += 0.5; currentScore += 10; return false;
        }
        return true;
      });

      enemiesRef.current = enemiesRef.current.filter(e => {
        if (Math.hypot(p.x - e.x, p.y - e.y) < p.r + e.r - Math.min(p.r, e.r)*0.3) { 
          if (p.r > e.r * 1.1) {
            currentMass += e.r * 0.2; currentScore += Math.floor(e.r * 10); return false;
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
          foodRef.current.push({ id: `nf${Date.now()}${i}`, x: Math.random() * WORLD_SIZE, y: Math.random() * WORLD_SIZE, r: 3, vx: 0, vy: 0, color: "#CCFF00", type: "food" });
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = "#050B14"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      const hw = canvas.width / 2; const hh = canvas.height / 2;
      const cx = cameraRef.current.x; const cy = cameraRef.current.y;

      ctx.save(); ctx.translate(hw - cx, hh - cy);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"; ctx.lineWidth = 1;
      for (let x = 0; x <= WORLD_SIZE; x += 100) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD_SIZE); ctx.stroke(); }
      for (let y = 0; y <= WORLD_SIZE; y += 100) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD_SIZE, y); ctx.stroke(); }

      ctx.strokeStyle = "#FF0055"; ctx.lineWidth = 5; ctx.strokeRect(0, 0, WORLD_SIZE, WORLD_SIZE);

      const drawEntity = (e: Entity) => {
        if (e.x < cx - hw - e.r || e.x > cx + hw + e.r || e.y < cy - hh - e.r || e.y > cy + hh + e.r) return;

        ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2); ctx.fillStyle = e.color;
        ctx.shadowBlur = e.type === 'food' ? 5 : 20; ctx.shadowColor = e.color; ctx.fill(); ctx.shadowBlur = 0;

        if (e.type !== 'food') {
          const angle = Math.atan2(e.vy, e.vx); const eyeDist = e.r * 0.5;
          const eyeX = e.x + Math.cos(angle) * eyeDist; const eyeY = e.y + Math.sin(angle) * eyeDist;
          ctx.beginPath(); ctx.arc(eyeX, eyeY, e.r * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
          ctx.beginPath(); ctx.arc(eyeX + Math.cos(angle)*(e.r*0.05), eyeY + Math.sin(angle)*(e.r*0.05), e.r * 0.1, 0, Math.PI * 2); ctx.fillStyle = "#000"; ctx.fill();
        }
      };

      foodRef.current.forEach(drawEntity); enemiesRef.current.forEach(drawEntity); drawEntity(playerRef.current);
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

    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [gameState, score]);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    handleResize(); window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", handleMouseMove);

    return () => { window.removeEventListener("resize", handleResize); window.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050B14] font-mono selection:bg-white selection:text-black">
      
      {/* CANAVAS ENGINE */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 cursor-crosshair ${gameState === 'playing' ? 'opacity-100' : 'opacity-10 blur-sm'} transition-all duration-1000`} 
      />

      {/* REVERB NAV OVERLAY */}
      <div className="absolute top-6 left-6 z-50 mix-blend-difference flex flex-col gap-4">
        <Link href="/showcase" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
          <ArrowLeft size={14} /> Back to Matrix
        </Link>
      </div>

      {/* AUTH SYSTEM (TOP RIGHT) */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
         {user ? (
           <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white uppercase">{user.name.substring(0, 2)}</div>
              <div className="text-xs font-bold text-white/90">{user.name}</div>
              <button onClick={handleLogout} className="ml-2 text-white/40 hover:text-[#FF0055] transition-colors"><LogOut size={14} /></button>
           </div>
         ) : (
           <button onClick={handleGoogleLogin} className="group flex items-center gap-2 bg-white text-black hover:bg-[#00E5FF] transition-colors px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[10px]">
              <LogIn size={14} /> Google Login
           </button>
         )}
      </div>

      {/* GAME UI IN-PLAY */}
      {gameState === "playing" && (
        <div className="absolute bottom-6 right-6 z-40 flex flex-col items-end gap-2 text-right">
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
           <div className="max-w-2xl w-full flex flex-col md:flex-row gap-6">
             
             {/* Left: Main Menu */}
             <div className="flex-1 bg-[#0A1220]/90 border rounded-2xl p-10 backdrop-blur-xl transition-colors duration-500 text-center" style={{ borderColor: `${theme}40`, boxShadow: `0 0 50px ${theme}10` }}>
                <div className="inline-flex items-center justify-center p-3 rounded-full mb-6 transition-colors duration-500" style={{ backgroundColor: `${theme}15`, color: theme }}>
                   <Zap size={32} />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tighter">Abyss.io <span className="text-xs align-top bg-white/10 px-2 py-1 rounded text-white/50 tracking-widest">V4.0</span></h1>
                <p className="uppercase tracking-[0.3em] text-[9px] font-bold mb-8 transition-colors duration-500" style={{ color: theme }}>Global Leaderboard Edition</p>
                
                {/* Color Picker */}
                <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
                   <div className="flex items-center justify-center gap-2 mb-4 text-[10px] text-white/50 uppercase tracking-widest font-bold">
                     <Palette size={14} /> Color Skin
                   </div>
                   <div className="flex gap-4 justify-center">
                      {THEMES.map(t => (
                        <button
                          key={t.id} onClick={() => setTheme(t.color)}
                          className={`w-10 h-10 rounded-full transition-all duration-300 relative ${theme === t.color ? 'scale-125' : 'hover:scale-110'}`}
                          style={{ backgroundColor: t.color, boxShadow: theme === t.color ? `0 0 20px ${t.color}80` : 'none' }}
                        >
                           {theme === t.color && <div className="absolute inset-0 border-2 border-white rounded-full"></div>}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                   <button onClick={() => startGame(false)} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-black transition-all relative group" style={{ backgroundColor: theme }}>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative z-10 flex items-center gap-2"><Play size={18} /> Play Now</span>
                   </button>
                   <button onClick={() => setGameState("history")} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                      <Trophy size={18} /> Global Rankings
                   </button>
                </div>
             </div>

             {/* Right: Global Stats */}
             <div className="w-full md:w-64 flex flex-col gap-4">
                <div className="bg-[#0A1220]/90 border border-white/10 p-6 rounded-2xl backdrop-blur-xl flex flex-col justify-center text-center h-full">
                   <Globe size={24} className="text-white/30 mx-auto mb-4" />
                   <div className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Global Games Played</div>
                   <div className="text-3xl font-bold text-white mb-6">{globalGamesPlayed.toLocaleString('ro-RO')}</div>
                   
                   <div className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Active Players</div>
                   <div className="text-3xl font-bold text-[#00FF00]">{activePlayers.toLocaleString('ro-RO')}</div>
                </div>
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
              <p className="text-[#FF0055] uppercase tracking-widest text-xs font-bold mb-8">Un prădător te-a devorat.</p>
              
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
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => startGame(false)} className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
                       Respawn Free
                    </button>
                    <button onClick={() => startGame(true)} className="flex-1 relative overflow-hidden group px-6 py-4 rounded-xl bg-gradient-to-r from-[#FF0055] to-[#7000FF] text-white border border-transparent hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all uppercase tracking-widest text-xs font-bold flex flex-col items-center justify-center">
                       <span className="relative z-10 flex items-center gap-2"> <ShoppingCart size={14} /> Buy Titan Respawn </span>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* HISTORY & LEADERBOARD SCREEN */}
      {gameState === "history" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
           <div className="max-w-3xl w-full bg-[#0A1220]/90 border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col h-[80vh]">
              
              <div className="flex items-center justify-between mb-8">
                 <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                    <button 
                       onClick={() => setLeaderboardTab("global")}
                       className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-colors ${leaderboardTab === "global" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}
                    >
                       Top 10 Global
                    </button>
                    <button 
                       onClick={() => setLeaderboardTab("personal")}
                       className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-colors ${leaderboardTab === "personal" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}
                    >
                       My Matches
                    </button>
                 </div>
                 <button onClick={() => setGameState("menu")} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
                   Meniu
                 </button>
              </div>

              {/* GLOBAL TAB */}
              {leaderboardTab === "global" && (
                 <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
                   {!user && (
                      <div className="p-4 mb-4 bg-white/5 border border-white/10 text-center rounded-xl text-white/50 text-xs flex flex-col items-center gap-2">
                        <span>Conectează-te cu Google pentru a-ți oficializa scorul în Topul Global!</span>
                        <button onClick={handleGoogleLogin} className="px-3 py-1.5 bg-white text-black rounded font-bold uppercase tracking-widest text-[9px]">Google Login</button>
                      </div>
                   )}
                   {getGlobalLeaderboard().map((entry, i) => {
                     const isMe = entry.name === (user?.name || "You (Guest)");
                     return (
                       <div key={i} className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${isMe ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/5'}`}>
                          <div className="flex items-center gap-4">
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${i === 0 ? 'bg-[#FFD700] text-black' : i === 1 ? 'bg-gray-300 text-black' : i === 2 ? 'bg-[#CD7F32] text-black' : 'bg-white/10 text-white/50'}`}>
                               #{i + 1}
                             </div>
                             <div className={`font-bold ${isMe ? 'text-white' : 'text-white/70'}`}>{entry.name} {isMe && <span className="ml-2 text-[9px] bg-white/20 px-2 py-0.5 rounded uppercase tracking-widest text-white/70">You</span>}</div>
                          </div>
                          <div className="text-right">
                             <div className="font-bold text-lg" style={{ color: isMe ? theme : '#fff' }}>{entry.score.toLocaleString('ro-RO')}</div>
                             <div className="text-[9px] uppercase tracking-widest text-white/40">Mass: {entry.mass}</div>
                          </div>
                       </div>
                     );
                   })}
                 </div>
              )}

              {/* PERSONAL TAB */}
              {leaderboardTab === "personal" && (
                 <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {history.length === 0 ? (
                       <div className="text-center py-12 text-white/30 text-sm">Nu ai jucat niciun meci încă. Intră în Abyss!</div>
                    ) : (
                       <div className="space-y-2">
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
