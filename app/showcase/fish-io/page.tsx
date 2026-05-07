"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, ShieldAlert, ShoppingCart, Zap } from "lucide-react";

// --- ENGINE CONSTANTS ---
const WORLD_SIZE = 3000;
const INITIAL_RADIUS = 20;
const SPEED_FACTOR = 4;
const ENEMY_COUNT = 30;
const FOOD_COUNT = 400;

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

export default function AbyssIOGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game States
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover">("menu");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [mass, setMass] = useState(INITIAL_RADIUS);
  
  // Refs for Engine Loop
  const requestRef = useRef<number>(0);
  const playerRef = useRef<Entity>({ id: "p1", x: WORLD_SIZE/2, y: WORLD_SIZE/2, r: INITIAL_RADIUS, vx: 0, vy: 0, color: "#00E5FF", type: "player" });
  const enemiesRef = useRef<Entity[]>([]);
  const foodRef = useRef<Entity[]>([]);
  const mouseRef = useRef<Vector>({ x: 0, y: 0 });
  const cameraRef = useRef<Vector>({ x: WORLD_SIZE/2, y: WORLD_SIZE/2 });

  // Init World
  const initWorld = (premium = false) => {
    playerRef.current = { 
      id: "p1", 
      x: WORLD_SIZE/2, 
      y: WORLD_SIZE/2, 
      r: premium ? INITIAL_RADIUS * 3 : INITIAL_RADIUS, 
      vx: 0, 
      vy: 0, 
      color: "#00E5FF", 
      type: "player" 
    };
    
    // Spawn Enemies
    const enemies: Entity[] = [];
    for (let i=0; i<ENEMY_COUNT; i++) {
      enemies.push({
        id: `e${i}`,
        x: Math.random() * WORLD_SIZE,
        y: Math.random() * WORLD_SIZE,
        r: Math.random() * 60 + 10, // 10 to 70 radius
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: "#FF0055",
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
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const update = () => {
      // 1. Update Player Physics (Steer towards mouse relative to center of screen)
      const p = playerRef.current;
      const hw = window.innerWidth / 2;
      const hh = window.innerHeight / 2;
      
      const dx = mouseRef.current.x - hw;
      const dy = mouseRef.current.y - hh;
      const dist = Math.hypot(dx, dy);
      
      if (dist > 0) {
        // Normalize and scale speed based on mass (bigger = slower)
        const speed = Math.max(1, SPEED_FACTOR * (30 / p.r)); 
        p.vx = (dx / dist) * speed;
        p.vy = (dy / dist) * speed;
      }

      p.x += p.vx;
      p.y += p.vy;
      
      // Clamp player to world
      p.x = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.x));
      p.y = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.y));

      // Update Camera (Lerp towards player)
      cameraRef.current.x += (p.x - cameraRef.current.x) * 0.1;
      cameraRef.current.y += (p.y - cameraRef.current.y) * 0.1;

      // 2. Update Enemies AI
      enemiesRef.current.forEach(e => {
        // Simple Wander
        if (Math.random() < 0.02) {
          e.vx += (Math.random() - 0.5) * 2;
          e.vy += (Math.random() - 0.5) * 2;
        }

        // Flee or Chase Player
        const pdx = p.x - e.x;
        const pdy = p.y - e.y;
        const pdist = Math.hypot(pdx, pdy);
        
        if (pdist < 400) {
          const forceX = pdx / pdist;
          const forceY = pdy / pdist;
          if (p.r > e.r * 1.1) {
            // Flee
            e.vx -= forceX * 0.1;
            e.vy -= forceY * 0.1;
          } else if (p.r < e.r * 0.9) {
            // Chase
            e.vx += forceX * 0.1;
            e.vy += forceY * 0.1;
          }
        }

        // Limit speed
        const speed = Math.hypot(e.vx, e.vy);
        const maxSpeed = Math.max(1, SPEED_FACTOR * (30 / e.r));
        if (speed > maxSpeed) {
          e.vx = (e.vx / speed) * maxSpeed;
          e.vy = (e.vy / speed) * maxSpeed;
        }

        e.x += e.vx;
        e.y += e.vy;

        // Bounce walls
        if (e.x < e.r || e.x > WORLD_SIZE - e.r) e.vx *= -1;
        if (e.y < e.r || e.y > WORLD_SIZE - e.r) e.vy *= -1;
      });

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
          return false; // eaten
        }
        return true;
      });

      // Enemies vs Player
      enemiesRef.current = enemiesRef.current.filter(e => {
        const dist = Math.hypot(p.x - e.x, p.y - e.y);
        if (dist < p.r + e.r - Math.min(p.r, e.r)*0.3) { // 30% overlap required
          if (p.r > e.r * 1.1) {
            // Player eats enemy
            currentMass += e.r * 0.2;
            currentScore += Math.floor(e.r * 10);
            return false;
          } else if (e.r > p.r * 1.1) {
            // Enemy eats player
            isDead = true;
          }
        }
        return true;
      });

      if (isDead) {
        setHighScore(prev => Math.max(prev, currentScore));
        setGameState("gameover");
        return;
      }

      p.r = currentMass;
      setMass(Math.floor(currentMass));
      setScore(currentScore);

      // Respawn food if low
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
      // Setup
      ctx.fillStyle = "#050B14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const hw = canvas.width / 2;
      const hh = canvas.height / 2;
      const cx = cameraRef.current.x;
      const cy = cameraRef.current.y;

      ctx.save();
      ctx.translate(hw - cx, hh - cy);

      // Draw Grid (Cyber Matrix)
      ctx.strokeStyle = "rgba(0, 229, 255, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x <= WORLD_SIZE; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD_SIZE); ctx.stroke();
      }
      for (let y = 0; y <= WORLD_SIZE; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD_SIZE, y); ctx.stroke();
      }

      // Draw World Borders
      ctx.strokeStyle = "#FF0055";
      ctx.lineWidth = 5;
      ctx.strokeRect(0, 0, WORLD_SIZE, WORLD_SIZE);

      // Draw Entities
      const drawEntity = (e: Entity) => {
        // Skip rendering if offscreen
        if (e.x < cx - hw - e.r || e.x > cx + hw + e.r ||
            e.y < cy - hh - e.r || e.y > cy + hh + e.r) return;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        
        // Neon Glow
        ctx.shadowBlur = e.type === 'food' ? 5 : 20;
        ctx.shadowColor = e.color;
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Eyes for fish
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
  }, [gameState, score]); // score dependency to ensure closure updates, though refs handle physics

  // Window Resize & Mouse Events
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
    <div className="relative w-screen h-screen overflow-hidden bg-[#050B14] font-mono selection:bg-[#00E5FF] selection:text-black">
      
      {/* CANAVAS ENGINE */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 cursor-crosshair ${gameState === 'playing' ? 'opacity-100' : 'opacity-30 blur-sm'} transition-all duration-1000`} 
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
          <div className="bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-4 py-2 rounded-lg backdrop-blur-md">
             <div className="text-[10px] text-[#00E5FF] uppercase tracking-widest font-bold mb-1">SCORE</div>
             <div className="text-2xl text-white font-bold">{score}</div>
          </div>
          <div className="bg-[#FF0055]/10 border border-[#FF0055]/30 px-4 py-2 rounded-lg backdrop-blur-md">
             <div className="text-[10px] text-[#FF0055] uppercase tracking-widest font-bold mb-1">MASS (RADIUS)</div>
             <div className="text-lg text-white font-bold">{mass}</div>
          </div>
        </div>
      )}

      {/* MENU STATE */}
      {gameState === "menu" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
           <div className="max-w-xl w-full bg-[#0A1220]/90 border border-[#00E5FF]/20 rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.1)] text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] mb-6">
                 <Zap size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">Abyss.io</h1>
              <p className="text-[#00E5FF] uppercase tracking-[0.3em] text-xs font-bold mb-8">Reverb Engine Showcase</p>
              
              <div className="text-white/60 text-sm leading-relaxed mb-10 space-y-4">
                 <p>Demonstrație de randare HTML5 Canvas integrată în arhitectura Next.js. O experiență 60FPS fluidă, fizică spațială și AI comportamental.</p>
                 <p className="p-3 bg-white/5 rounded text-xs border border-white/10">
                   <strong>Reguli:</strong> Mută mouse-ul pentru a înota. Mănâncă verde (plancton) și pești mai mici. Fugi de roșu masiv. Supraviețuiește!
                 </p>
              </div>

              <button 
                onClick={() => startGame(false)}
                className="group relative w-full flex items-center justify-center gap-3 bg-[#00E5FF] text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all overflow-hidden"
              >
                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 <span className="relative flex items-center gap-2"><Play size={18} /> Enter The Abyss</span>
              </button>
           </div>
        </div>
      )}

      {/* GAME OVER & MONETIZATION HOOK STATE */}
      {gameState === "gameover" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
           <div className="max-w-2xl w-full bg-[#110505]/90 border border-[#FF0055]/30 rounded-2xl p-10 shadow-[0_0_100px_rgba(255,0,85,0.15)] text-center">
              <ShieldAlert size={48} className="text-[#FF0055] mx-auto mb-6" />
              <h2 className="text-5xl font-bold text-white mb-2">YOU DIED</h2>
              <p className="text-[#FF0055] uppercase tracking-widest text-xs font-bold mb-8">A bigger predator swallowed you whole.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">Final Score</div>
                    <div className="text-3xl text-white font-bold">{score}</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">High Score</div>
                    <div className="text-3xl text-[#00E5FF] font-bold">{highScore}</div>
                 </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-4">
                 <div className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-6">Monetization Demo (Reverb Hook)</div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Free Play */}
                    <button 
                      onClick={() => startGame(false)}
                      className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                       Respawn Free
                       <span className="block text-[9px] text-white/30 normal-case tracking-normal mt-1">(Start as Plankton)</span>
                    </button>
                    
                    {/* Premium Play */}
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

    </div>
  );
}
