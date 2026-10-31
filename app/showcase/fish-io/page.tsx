"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, ShieldAlert, ShoppingCart, Zap, Trophy, History, Palette, LogIn, LogOut, Globe, User } from "lucide-react";
import { Kind, ENEMY_KIND } from "./animals";
import { LEVELS, LevelRun, TaskResult, evaluateLevel, forbiddenKind, placeEnemies } from "./levels";
import { LevelComplete, LevelHud, LevelIntro, LevelsScreen, TaskPanel } from "./LevelUI";

// --- ENGINE CONSTANTS ---
const WORLD_SIZE = 3000;
const INITIAL_RADIUS = 20;
// Viteza e în pixeli pe cadru la 60 de cadre/s; mișcarea se înmulțește cu `dt` (vezi update), deci nu depinde de ecran.
// Era 4; scăzută cu ~22% pentru tabletă și telefon.
const SPEED_FACTOR = 3.1;
const MIN_SPEED = 0.8;
const ENEMY_COUNT = 30;
const FOOD_COUNT = 400;
// La start, niciun inamic nu apare mai aproape de atât de jucător (în unități din lume).
const SAFE_SPAWN_DISTANCE = 600;
// Atingerea unui inamic mai mare nu omoară pe loc: peștele se micșorează cu HIT_SHRINK din rază,
// primește HIT_COOLDOWN_MS de protecție, iar sub MIN_RADIUS moare (de la raza de start: 3 atingeri suportate, a 4-a omoară).
const HIT_SHRINK = 0.2;
const MIN_RADIUS = 9;
const HIT_COOLDOWN_MS = 1500;
// Doar în niveluri: animalele mai mici decât jucătorul nu fug mai repede de PREY_SPEED_FACTOR din viteza lui.
// Fără limita asta, prada mică (care avea viteza maximă peste a jucătorului) nu putea fi prinsă și nivelurile ieșeau prea lungi.
const PREY_SPEED_FACTOR = 0.7;

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
  imgIndex?: number;
  kind?: Kind; // felul animalului (doar la inamici)
  role?: "target" | "forbidden" | null; // în niveluri: țintă de mâncat sau animal interzis
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
  ambientOsc: OscillatorNode | null = null;
  ambientGain: GainNode | null = null;
  threatOsc: OscillatorNode | null = null;
  threatGain: GainNode | null = null;

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }
    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Ambient rumble
    this.ambientOsc = this.ctx.createOscillator();
    this.ambientGain = this.ctx.createGain();
    this.ambientOsc.type = "sine";
    this.ambientOsc.frequency.value = 80; 
    this.ambientGain.gain.value = 0.05; 
    this.ambientOsc.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);
    this.ambientOsc.start();

    // Threat sound
    this.threatOsc = this.ctx.createOscillator();
    this.threatGain = this.ctx.createGain();
    this.threatOsc.type = "sine"; 
    this.threatOsc.frequency.value = 400; 
    this.threatGain.gain.value = 0; 
    this.threatOsc.connect(this.threatGain);
    this.threatGain.connect(this.ctx.destination);
    this.threatOsc.start();
  }

  resumeAmbient() {
    if (this.ctx && this.ambientGain) {
       this.ambientGain.gain.setTargetAtTime(0.05, this.ctx.currentTime, 0.1);
    }
  }

  playEatSound(isEnemy: boolean) {
    if (!this.ctx) return;
    const eatOsc = this.ctx.createOscillator();
    const eatGain = this.ctx.createGain();
    eatOsc.type = isEnemy ? "square" : "sine";
    eatOsc.frequency.setValueAtTime(isEnemy ? 150 : 800, this.ctx.currentTime);
    eatOsc.frequency.exponentialRampToValueAtTime(isEnemy ? 50 : 1600, this.ctx.currentTime + 0.1);
    
    eatGain.gain.setValueAtTime(isEnemy ? 0.1 : 0.03, this.ctx.currentTime);
    eatGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    
    eatOsc.connect(eatGain);
    eatGain.connect(this.ctx.destination);
    eatOsc.start();
    eatOsc.stop(this.ctx.currentTime + 0.1);
  }

  playHitSound() {
    if (!this.ctx) return;
    const hitOsc = this.ctx.createOscillator();
    const hitGain = this.ctx.createGain();
    hitOsc.type = "sawtooth";
    hitOsc.frequency.setValueAtTime(220, this.ctx.currentTime);
    hitOsc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.25);

    hitGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    hitGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

    hitOsc.connect(hitGain);
    hitGain.connect(this.ctx.destination);
    hitOsc.start();
    hitOsc.stop(this.ctx.currentTime + 0.25);
  }

  updateProximity(closestDistance: number, playerRadius: number) {
    if (!this.threatGain || !this.threatOsc || !this.ctx) return;
    const maxThreatDist = 800; 

    if (closestDistance > maxThreatDist) {
       this.threatGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
       return;
    }

    const minDistance = playerRadius * 1.1;
    let intensity = 1 - (closestDistance - minDistance) / (maxThreatDist - minDistance);
    if (!isFinite(intensity)) intensity = 0;
    const clampedIntensity = Math.max(0, Math.min(1, Math.pow(intensity, 2))); 

    this.threatGain.gain.setTargetAtTime(clampedIntensity * 0.3, this.ctx.currentTime, 0.1);
    this.threatOsc.frequency.setTargetAtTime(400 + clampedIntensity * 800, this.ctx.currentTime, 0.1);
  }

  stop() {
    if (this.ctx) {
       if (this.threatGain) this.threatGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
       if (this.ambientGain) this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    }
  }
}

export default function AbyssIOGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<AudioEngine | null>(null);
  
  // States
  const [gameState, setGameState] = useState<"menu" | "levels" | "levelIntro" | "playing" | "gameover" | "history" | "victory" | "levelComplete">("menu");
  // null = modul liber (arena veche); altfel indexul nivelului (0, 1, 2...)
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [levelStars, setLevelStars] = useState<number[]>([]);
  const [levelResult, setLevelResult] = useState<{ stars: number; tasks: TaskResult[]; seconds: number } | null>(null);
  const [hud, setHud] = useState<LevelHud>({ eaten: 0, avoidBroken: false, hit: false, elapsed: 0 });
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

    // Stelele pe niveluri se păstrează doar în acest browser.
    try {
      const savedLevels = JSON.parse(localStorage.getItem('abyss_levels') || '[]');
      if (Array.isArray(savedLevels)) {
        const stars = savedLevels.map(n => Math.max(0, Math.min(3, Number(n) || 0)));
        levelStarsRef.current = stars;
        setLevelStars(stars);
      }
    } catch { /* date vechi sau stricate: pornim de la zero */ }
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
  const invulnerableUntilRef = useRef<number>(0);
  // Starea nivelului în desfășurare: în refuri, ca bucla jocului să nu depindă de randări. null = mod liber sau nivel încheiat.
  const levelIdxRef = useRef<number | null>(null);
  const levelRunRef = useRef<LevelRun | null>(null);
  const levelStarsRef = useRef<number[]>([]);
  const hudKeyRef = useRef<string>("");
  const cameraRef = useRef<Vector>({ x: WORLD_SIZE/2, y: WORLD_SIZE/2 });
  const avatarsRef = useRef<HTMLImageElement[]>([]);
  const enemiesAvatarsRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const urls = [
      "/abyss-assets/gaina.png",
      "/abyss-assets/pisica.png",
      "/abyss-assets/caine.png",
      "/abyss-assets/delfin.png",
      "/abyss-assets/rechin.png",
      "/abyss-assets/trex.png"
    ];
    const loadedImages = urls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });
    avatarsRef.current = loadedImages;

    const enemyUrls = Array.from({length: 150}, (_, i) => `/abyss-assets/enemies/enemy_${i + 1}.jpg`);
    const loadedEnemyImages = enemyUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });
    enemiesAvatarsRef.current = loadedEnemyImages;
  }, []);

  useEffect(() => {
    playerRef.current.color = theme;
  }, [theme]);

  const initWorld = (premium = false, levelIdx: number | null = null) => {
    if (!audioRef.current) audioRef.current = new AudioEngine();
    audioRef.current.init();
    audioRef.current.resumeAmbient();

    playerRef.current = { 
      id: "p1", x: WORLD_SIZE/2, y: WORLD_SIZE/2, r: premium ? INITIAL_RADIUS * 3 : INITIAL_RADIUS, vx: 0, vy: 0, color: theme, type: "player" 
    };
    
    // Jucătorul stă pe loc până la prima mișcare (mouse sau atingere), nu pleacă spre colțul din stânga sus.
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    invulnerableUntilRef.current = 0;

    const enemies: Entity[] = [];
    if (levelIdx !== null) {
      // Nivel: animalele sunt alese și așezate după regulile nivelului (felul, câte, cât de mari).
      placeEnemies(LEVELS[levelIdx], playerRef.current, WORLD_SIZE, SAFE_SPAWN_DISTANCE).forEach((pe, i) => {
        enemies.push({
          id: `e${i}`, x: pe.x, y: pe.y, r: pe.r, vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4, color: "#FF0055", type: "enemy", imgIndex: pe.photo, kind: pe.kind, role: pe.role
        });
      });
    } else {
      for (let i=0; i<ENEMY_COUNT; i++) {
        let ex = 0, ey = 0;
        do {
          ex = Math.random() * WORLD_SIZE;
          ey = Math.random() * WORLD_SIZE;
        } while (Math.hypot(ex - playerRef.current.x, ey - playerRef.current.y) < SAFE_SPAWN_DISTANCE);
        const imgIndex = Math.floor(Math.random() * 150);
        enemies.push({
          id: `e${i}`, x: ex, y: ey, r: Math.random() * 60 + 10, vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4, color: "#FF0055", type: "enemy", imgIndex, kind: ENEMY_KIND[imgIndex]
        });
      }
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

  // Modul liber: arena veche, fără sarcini.
  const startGame = (premium = false) => {
    levelIdxRef.current = null;
    levelRunRef.current = null;
    setCurrentLevel(null);
    initWorld(premium);
    setGameState("playing");
  };

  const startLevel = (idx: number) => {
    levelIdxRef.current = idx;
    levelRunRef.current = { eaten: 0, avoidBroken: false, hit: false, startedAt: performance.now() };
    hudKeyRef.current = "";
    setHud({ eaten: 0, avoidBroken: false, hit: false, elapsed: 0 });
    setLevelResult(null);
    setCurrentLevel(idx);
    initWorld(false, idx);
    setGameState("playing");
  };

  const openLevel = (idx: number) => {
    setCurrentLevel(idx);
    setGameState("levelIntro");
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

    // dt = câte "cadre de 60 Hz" au trecut de la ultima actualizare (1 la 60 Hz, 0,5 la 120 Hz).
    const update = (dt: number) => {
      // Nivel deja încheiat (terminat sau pierdut), dar bucla mai rulează un cadru până se schimbă ecranul.
      if (levelIdxRef.current !== null && !levelRunRef.current) return;
      const p = playerRef.current;
      const hw = window.innerWidth / 2;
      const hh = window.innerHeight / 2;
      
      const dx = mouseRef.current.x - hw;
      const dy = mouseRef.current.y - hh;
      const dist = Math.hypot(dx, dy);
      
      if (dist > 0) {
        const speed = Math.max(MIN_SPEED, SPEED_FACTOR * (30 / p.r));
        p.vx = (dx / dist) * speed;
        p.vy = (dy / dist) * speed;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;

      p.x = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.x));
      p.y = Math.max(p.r, Math.min(WORLD_SIZE - p.r, p.y));

      const camLerp = 1 - Math.pow(1 - 0.1, dt);
      cameraRef.current.x += (p.x - cameraRef.current.x) * camLerp;
      cameraRef.current.y += (p.y - cameraRef.current.y) * camLerp;

      let closestEnemyDist = Infinity;

      enemiesRef.current.forEach(e => {
        if (Math.random() < 0.02 * dt) {
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
            e.vx -= forceX * 0.1 * dt; e.vy -= forceY * 0.1 * dt;
          } else if (p.r < e.r * 0.9) {
            e.vx += forceX * 0.1 * dt; e.vy += forceY * 0.1 * dt;
          }
        }

        const speed = Math.hypot(e.vx, e.vy);
        let maxSpeed = Math.max(MIN_SPEED, SPEED_FACTOR * (30 / e.r));
        if (levelIdxRef.current !== null && p.r > e.r * 1.1) {
          maxSpeed = Math.min(maxSpeed, PREY_SPEED_FACTOR * Math.max(MIN_SPEED, SPEED_FACTOR * (30 / p.r)));
        }
        if (speed > maxSpeed) {
          e.vx = (e.vx / speed) * maxSpeed; e.vy = (e.vy / speed) * maxSpeed;
        }

        e.x += e.vx * dt; e.y += e.vy * dt;

        if (e.x < e.r || e.x > WORLD_SIZE - e.r) e.vx *= -1;
        if (e.y < e.r || e.y > WORLD_SIZE - e.r) e.vy *= -1;
      });

      audioRef.current?.updateProximity(closestEnemyDist, p.r);

      let currentMass = p.r;
      let currentScore = score;
      let isDead = false;

      foodRef.current = foodRef.current.filter(f => {
        if (Math.hypot(p.x - f.x, p.y - f.y) < p.r) {
          currentMass += 0.5; currentScore += 10; 
          audioRef.current?.playEatSound(false);
          return false;
        }
        return true;
      });

      const now = performance.now();
      let hitBy: Entity | null = null;
      const run = levelRunRef.current; // null în modul liber
      const lvl = run && levelIdxRef.current !== null ? LEVELS[levelIdxRef.current] : null;
      const forbidden = lvl ? forbiddenKind(lvl) : null;

      enemiesRef.current = enemiesRef.current.filter(e => {
        if (Math.hypot(p.x - e.x, p.y - e.y) < p.r + e.r - Math.min(p.r, e.r)*0.3) {
          // Animalul interzis nu trebuie nici atins, nici mâncat: orice contact strică bonusul.
          if (run && forbidden && e.kind === forbidden) run.avoidBroken = true;
          if (p.r > e.r * 1.1) {
            currentMass += e.r * 0.2; currentScore += Math.floor(e.r * 10);
            audioRef.current?.playEatSound(true);
            if (run && lvl && (lvl.main.kind === "orice" || lvl.main.kind === e.kind)) run.eaten++;
            return false;
          } else if (e.r > p.r * 1.1 && now >= invulnerableUntilRef.current && !hitBy) {
            hitBy = e;
          }
        }
        return true;
      });

      if (hitBy) {
        const attacker: Entity = hitBy;
        const shrunk = currentMass * (1 - HIT_SHRINK);
        if (run) run.hit = true;
        if (shrunk < MIN_RADIUS) {
          isDead = true;
        } else {
          currentMass = shrunk;
          invulnerableUntilRef.current = now + HIT_COOLDOWN_MS;
          audioRef.current?.playHitSound();
          // Mică împingere în afară, ca peștele să iasă din inamic.
          const away = Math.hypot(p.x - attacker.x, p.y - attacker.y) || 1;
          const gap = attacker.r + shrunk + 15;
          p.x = Math.max(shrunk, Math.min(WORLD_SIZE - shrunk, attacker.x + ((p.x - attacker.x) / away) * gap));
          p.y = Math.max(shrunk, Math.min(WORLD_SIZE - shrunk, attacker.y + ((p.y - attacker.y) / away) * gap));
        }
      }

      if (isDead) {
        audioRef.current?.stop();
        if (run) {
          levelRunRef.current = null; // nivel pierdut: scorul nu intră în clasamentul din modul liber
        } else {
          saveToHistory(currentScore, currentMass);
        }
        setGameState("gameover");
        return;
      }

      // Sarcina principală gata: nivelul se termină și se calculează stelele.
      if (run && lvl && run.eaten >= lvl.main.count) {
        const elapsed = (now - run.startedAt) / 1000;
        const result = evaluateLevel(lvl, run, elapsed);
        const idx = levelIdxRef.current as number;
        const stars = [...levelStarsRef.current];
        stars[idx] = Math.max(stars[idx] || 0, result.stars);
        levelStarsRef.current = stars;
        localStorage.setItem('abyss_levels', JSON.stringify(stars));
        setLevelStars(stars);
        setLevelResult({ stars: result.stars, tasks: result.tasks, seconds: Math.round(elapsed) });
        levelRunRef.current = null;
        audioRef.current?.stop();
        setGameState("levelComplete");
        return;
      }

      // Victoria din modul liber (în niveluri, finalul vine din sarcina principală).
      const totalEnemyMass = enemiesRef.current.reduce((sum, e) => sum + e.r, 0);
      if (!run && currentMass > totalEnemyMass) {
        audioRef.current?.stop();
        saveToHistory(currentScore, currentMass);
        setGameState("victory");
        return;
      }

      p.r = currentMass;
      setMass(Math.floor(currentMass));
      setScore(currentScore);

      // Panoul cu task-uri se reîmprospătează doar când se schimbă ceva (animal mâncat, atingere, o secundă).
      if (run) {
        const elapsedSec = Math.floor((now - run.startedAt) / 1000);
        const key = `${run.eaten}|${run.avoidBroken}|${run.hit}|${elapsedSec}`;
        if (key !== hudKeyRef.current) {
          hudKeyRef.current = key;
          setHud({ eaten: run.eaten, avoidBroken: run.avoidBroken, hit: run.hit, elapsed: elapsedSec });
        }
      }

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

      const getStageForEntity = (e: Entity, currentScore: number) => {
        if (e.type === 'player') {
          if (currentScore < 50) return 0;
          if (currentScore < 100) return 1;
          if (currentScore < 150) return 2;
          if (currentScore < 200) return 3;
          if (currentScore < 250) return 4;
          return 5;
        } else {
          const eqScore = (e.r - INITIAL_RADIUS) * 20;
          if (eqScore < 50) return 0;
          if (eqScore < 100) return 1;
          if (eqScore < 150) return 2;
          if (eqScore < 200) return 3;
          if (eqScore < 250) return 4;
          return 5;
        }
      };

      const drawEntity = (e: Entity) => {
        if (e.x < cx - hw - e.r || e.x > cx + hw + e.r || e.y < cy - hh - e.r || e.y > cy + hh + e.r) return;

        if (e.type === 'food') {
          ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2); ctx.fillStyle = e.color;
          ctx.shadowBlur = 5; ctx.shadowColor = e.color; ctx.fill(); ctx.shadowBlur = 0;
        } else {
          let img: HTMLImageElement | undefined;
          if (e.type === 'player') {
            const stage = getStageForEntity(e, score);
            img = avatarsRef.current[stage];
          } else {
            img = enemiesAvatarsRef.current[e.imgIndex || 0];
          }
          
          if (img && img.complete && img.naturalWidth !== 0) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.clip(); 
            ctx.drawImage(img, e.x - e.r, e.y - e.r, e.r * 2, e.r * 2);
            ctx.restore();
            
            // În niveluri, inelul arată rolul animalului: verde = de mâncat, galben pulsând = interzis, roz = ca de obicei.
            let ring = e.color;
            let ringWidth = Math.max(2, e.r * 0.05);
            const levelNow = levelIdxRef.current !== null ? LEVELS[levelIdxRef.current] : null;
            if (levelNow && e.type === 'enemy') {
              if (e.role === 'forbidden') {
                ring = "#FFD400";
                ringWidth = Math.max(3, e.r * 0.08) * (1 + 0.35 * Math.sin(performance.now() / 150));
              } else if (e.role === 'target' || (levelNow.main.kind === 'orice' && playerRef.current.r > e.r * 1.1)) {
                ring = "#39FF88";
              }
            }
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.strokeStyle = ring;
            ctx.lineWidth = ringWidth;
            ctx.shadowBlur = 15;
            ctx.shadowColor = ring;
            ctx.stroke();
            ctx.shadowBlur = 0;
            if (e.role === 'forbidden') {
              ctx.fillStyle = "#FFD400";
              ctx.font = "bold 20px sans-serif";
              ctx.textAlign = "center";
              ctx.fillText("✕", e.x, e.y - e.r - 8);
            }

            // Optional: Draw player name or score over them? No, user didn't ask for it.
          } else {
            ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2); ctx.fillStyle = e.color;
            ctx.shadowBlur = 20; ctx.shadowColor = e.color; ctx.fill(); ctx.shadowBlur = 0;
            const angle = Math.atan2(e.vy, e.vx); const eyeDist = e.r * 0.5;
            const eyeX = e.x + Math.cos(angle) * eyeDist; const eyeY = e.y + Math.sin(angle) * eyeDist;
            ctx.beginPath(); ctx.arc(eyeX, eyeY, e.r * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
            ctx.beginPath(); ctx.arc(eyeX + Math.cos(angle)*(e.r*0.05), eyeY + Math.sin(angle)*(e.r*0.05), e.r * 0.1, 0, Math.PI * 2); ctx.fillStyle = "#000"; ctx.fill();
          }
        }
      };

      foodRef.current.forEach(drawEntity); enemiesRef.current.forEach(drawEntity);
      // În timpul protecției de după atingere, peștele clipește.
      const nowDraw = performance.now();
      const blink = nowDraw < invulnerableUntilRef.current && Math.floor(nowDraw / 120) % 2 === 0;
      ctx.globalAlpha = blink ? 0.3 : 1;
      drawEntity(playerRef.current);
      ctx.globalAlpha = 1;
      ctx.restore();

      // Săgeată spre cea mai apropiată țintă, dacă e în afara ecranului.
      const arrowLevel = levelRunRef.current && levelIdxRef.current !== null ? LEVELS[levelIdxRef.current] : null;
      if (arrowLevel) {
        const pl = playerRef.current;
        let nearest: Entity | null = null;
        let nearestDist = Infinity;
        for (const e of enemiesRef.current) {
          const isTarget = e.role === 'target' || (arrowLevel.main.kind === 'orice' && pl.r > e.r * 1.1);
          if (!isTarget) continue;
          const d = Math.hypot(e.x - pl.x, e.y - pl.y);
          if (d < nearestDist) { nearestDist = d; nearest = e; }
        }
        if (nearest) {
          const target: Entity = nearest;
          const sx = hw + (target.x - cx);
          const sy = hh + (target.y - cy);
          if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) {
            const margin = 36;
            const ang = Math.atan2(sy - hh, sx - hw);
            const k = Math.min((hw - margin) / (Math.abs(Math.cos(ang)) || 1e-6), (hh - margin) / (Math.abs(Math.sin(ang)) || 1e-6));
            ctx.save();
            ctx.translate(hw + Math.cos(ang) * k, hh + Math.sin(ang) * k);
            ctx.rotate(ang);
            ctx.fillStyle = "#39FF88";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#39FF88";
            ctx.beginPath();
            ctx.moveTo(14, 0); ctx.lineTo(-10, -9); ctx.lineTo(-10, 9);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          }
        }
      }
    };

    let lastFrame = performance.now();
    const loop = (frameTime: number) => {
      // Limitat la 3 cadre: după o pauză (tab în fundal) jocul nu "sare" înainte.
      const dt = Math.max(0, Math.min(3, (frameTime - lastFrame) / (1000 / 60)));
      lastFrame = frameTime;
      update(dt);
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

    // Pointer events acoperă și mouse-ul, și atingerea pe telefon (degetul ține locul mouse-ului).
    const handlePointer = (e: PointerEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerdown", handlePointer);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerdown", handlePointer);
    };
  }, []);

  // Jocul ocupă tot ecranul, deasupra antetului site-ului: oprim derularea paginii din spate.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden bg-[#050B14] font-mono selection:bg-white selection:text-black">

      {/* CANAVAS ENGINE */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 cursor-crosshair touch-none ${gameState === 'playing' ? 'opacity-100' : 'opacity-10 blur-sm'} transition-all duration-1000`} 
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

      {/* TASK-URILE NIVELULUI (doar în niveluri) */}
      {gameState === "playing" && currentLevel !== null && <TaskPanel level={LEVELS[currentLevel]} hud={hud} />}

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
                   <button onClick={() => setGameState("levels")} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-black transition-all relative group overflow-hidden" style={{ backgroundColor: theme }}>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative z-10 flex items-center gap-2"><Play size={18} /> Niveluri</span>
                   </button>
                   <button onClick={() => startGame(false)} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                      <Zap size={18} /> Mod liber
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
                 {currentLevel !== null ? (
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={() => startLevel(currentLevel)} className="flex-1 px-6 py-4 rounded-xl text-black uppercase tracking-widest text-xs font-bold" style={{ backgroundColor: theme }}>
                         Încearcă din nou nivelul
                      </button>
                      <button onClick={() => setGameState("levels")} className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
                         Niveluri
                      </button>
                   </div>
                 ) : (
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={() => startGame(false)} className="flex-1 px-6 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
                         Respawn Free
                      </button>
                      <button onClick={() => startGame(true)} className="flex-1 relative overflow-hidden group px-6 py-4 rounded-xl bg-gradient-to-r from-[#FF0055] to-[#7000FF] text-white border border-transparent hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all uppercase tracking-widest text-xs font-bold flex flex-col items-center justify-center">
                         <span className="relative z-10 flex items-center gap-2"> <ShoppingCart size={14} /> Buy Titan Respawn </span>
                      </button>
                   </div>
                 )}
              </div>
           </div>
        </div>
      )}

      {/* NIVELURI: alegere, introducere, rezultat */}
      {gameState === "levels" && (
        <LevelsScreen stars={levelStars} theme={theme} onPick={openLevel} onBack={() => setGameState("menu")} />
      )}
      {gameState === "levelIntro" && currentLevel !== null && (
        <LevelIntro index={currentLevel} theme={theme} onStart={() => startLevel(currentLevel)} onBack={() => setGameState("levels")} />
      )}
      {gameState === "levelComplete" && currentLevel !== null && levelResult && (
        <LevelComplete
          index={currentLevel}
          result={levelResult}
          theme={theme}
          totalStars={levelStars.reduce((s, n) => s + (n || 0), 0)}
          onNext={() => openLevel(currentLevel + 1)}
          onRetry={() => startLevel(currentLevel)}
          onLevels={() => setGameState("levels")}
          onFree={() => startGame(false)}
        />
      )}

      {/* VICTORY STATE */}
      {gameState === "victory" && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
           <div className="max-w-2xl w-full bg-[#051A10]/90 border border-[#00FF00]/30 rounded-2xl p-10 shadow-[0_0_100px_rgba(0,255,0,0.15)] text-center relative">
              <button onClick={() => setGameState("history")} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                <Trophy size={20} />
              </button>

              <Trophy size={48} className="text-[#00FF00] mx-auto mb-6" />
              <h2 className="text-5xl font-bold text-white mb-2">DOMINARE</h2>
              <p className="text-[#00FF00] uppercase tracking-widest text-xs font-bold mb-8">Ai atins pragul matematic. Domini întreaga masă a abisului.</p>
              
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
                 <div className="flex justify-center">
                    <button onClick={() => startGame(false)} className="px-8 py-4 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-colors uppercase tracking-widest text-xs font-bold">
                       Play Again
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
