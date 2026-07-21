"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Sun, Fingerprint, Flame, Feather, Infinity as InfinityIcon, Sparkles, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { setTheme } from "./AudioEngine";
import { getLocaleFromPath, localizePath } from "./translations";
import { localizedLevels, joyUI } from "./joyTranslations";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
}

const levelStyles: Record<string, {
  icon: React.ReactNode;
  color: string;
  accent: string;
  border: string;
  bg: string;
  glowColor: string;
}> = {
  pleasure: {
    icon: <Fingerprint className="w-6 h-6 text-neutral-400" />,
    color: "rgba(239, 68, 68, 0.7)",
    accent: "text-red-400",
    border: "border-red-950/60 hover:border-red-500/50",
    bg: "hover:bg-red-950/20",
    glowColor: "rgba(239, 68, 68, 0.3)"
  },
  happiness: {
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    color: "rgba(249, 115, 22, 0.7)",
    accent: "text-orange-400",
    border: "border-orange-950/60 hover:border-orange-500/50",
    bg: "hover:bg-orange-950/20",
    glowColor: "rgba(249, 115, 22, 0.3)"
  },
  joy: {
    icon: <Feather className="w-6 h-6 text-amber-300" />,
    color: "rgba(245, 158, 11, 0.7)",
    accent: "text-amber-400",
    border: "border-amber-950/60 hover:border-amber-500/50",
    bg: "hover:bg-amber-950/20",
    glowColor: "rgba(245, 158, 11, 0.3)"
  },
  ecstasy: {
    icon: <InfinityIcon className="w-8 h-8 text-white animate-pulse" />,
    color: "rgba(255, 255, 255, 0.9)",
    accent: "text-white font-bold",
    border: "border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]",
    bg: "bg-amber-950/10",
    glowColor: "rgba(255, 255, 255, 0.3)"
  }
};

interface LevelCardProps {
  level: any;
  isSelected: boolean;
  onSelect: () => void;
  enterPortalText: string;
}

function LevelCard({ level, isSelected, onSelect, enterPortalText }: LevelCardProps) {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);

    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(level.href);
  };

  const styles = levelStyles[level.id];

  return (
    <motion.div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={onSelect}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`p-6 rounded-2xl border backdrop-blur-md cursor-pointer transition-colors duration-500 flex items-start space-x-4 relative overflow-hidden group select-none
        ${isSelected ? styles.border + " bg-neutral-900/90 text-white shadow-xl scale-[1.01]" : "bg-neutral-900/30 border-neutral-800/40 text-neutral-400 " + styles.bg}`}
    >
      {/* Flashlight Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, ${styles.glowColor}, transparent)`
        }}
      />

      <div className={`shrink-0 mt-1 p-2 rounded-xl bg-neutral-950/80 border z-10 transition-colors ${isSelected ? 'border-neutral-700' : 'border-neutral-900'}`}>
        {styles.icon}
      </div>

      <div className="z-10 flex-grow" style={{ transform: "translateZ(10px)" }}>
        <div className="flex items-center justify-between">
          <h4 className={`text-lg font-bold mb-1 transition-colors duration-500 ${isSelected ? styles.accent : 'text-neutral-300'}`}>
            {level.title}
          </h4>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 duration-300">
            {enterPortalText} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
        <p className="text-sm leading-relaxed font-light transition-colors duration-500 text-neutral-400 group-hover:text-neutral-300">
          {level.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function JoyCelebration() {
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  
  const ui = {
    sectionBadge: joyUI.sectionBadge[locale],
    sectionTitle: joyUI.sectionTitle[locale],
    sectionDesc: joyUI.sectionDesc[locale],
    tunerTitle: joyUI.tunerTitle[locale],
    tunerDesc: joyUI.tunerDesc[locale],
    aligned: joyUI.aligned[locale],
    synchronizing: joyUI.synchronizing[locale],
    holdBtn: joyUI.holdBtn[locale],
    alignedMessage: joyUI.alignedMessage[locale],
    enterPortal: joyUI.enterPortal[locale]
  };

  const rawLevels = localizedLevels[locale];
  const consciousnessLevels = rawLevels.map((lvl) => ({
    ...lvl,
    href: localizePath(lvl.href, locale),
    icon: levelStyles[lvl.id].icon,
    color: levelStyles[lvl.id].color,
    accent: levelStyles[lvl.id].accent,
    border: levelStyles[lvl.id].border,
    bg: levelStyles[lvl.id].bg,
    glowColor: levelStyles[lvl.id].glowColor
  }));

  const [activeLevel, setActiveLevel] = useState(consciousnessLevels[2]); // default: Bucuria (Joy)
  const [vibration, setVibration] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [transcended, setTranscended] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  // Background particles animation loop
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 40 }).map((_, i) => ({
      id: Math.random(),
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.1,
      vy: -(Math.random() * 0.2 + 0.05),
      color: activeLevel.color,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(initialParticles);
  }, []);

  // Update particles and handle vibration charging/decay
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setVibration((prev) => {
        if (isCharging) {
          const next = prev + delta * 35;
          if (next >= 100) {
            if (!transcended) {
              triggerTranscendenceExplosion();
            }
            return 100;
          }
          return next;
        } else {
          return Math.max(0, prev - delta * 40);
        }
      });

      setParticles((prevParticles) => {
        const updated = prevParticles
          .map((p) => {
            let nextY = p.y + p.vy * (1 + vibration * 0.05);
            let nextX = p.x + p.vx;

            if (nextY < -10) {
              nextY = 110;
              nextX = Math.random() * 100;
            }
            return {
              ...p,
              x: nextX,
              y: nextY
            };
          });
        return updated.length > 150 ? updated.slice(updated.length - 150) : updated;
      });

      animationFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameId.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isCharging, vibration, activeLevel, transcended]);

  const triggerTranscendenceExplosion = () => {
    setTranscended(true);
    setTheme(activeLevel.vibrationFreq as any, true);

    const burstParticles: Particle[] = Array.from({ length: 60 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      return {
        id: Math.random(),
        size: Math.random() * 12 + 6,
        x: 50,
        y: 50,
        vx: Math.cos(angle) * speed * 0.5,
        vy: Math.sin(angle) * speed * 0.5,
        color: activeLevel.color,
        opacity: 1
      };
    });

    setParticles((prev) => [...prev, ...burstParticles]);

    setTimeout(() => {
      setTranscended(false);
    }, 5000);
  };

  const handleLevelChange = (level: any) => {
    setActiveLevel(level);
    setVibration(0);
    setTranscended(false);
    setTheme(level.vibrationFreq as any, true);

    setParticles((prev) =>
      prev.map((p) => ({
        ...p,
        color: level.color
      }))
    );
  };

  return (
    <motion.section 
      onViewportEnter={() => setTheme("joy")}
      onMouseEnter={() => setTheme("joy")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 overflow-hidden bg-neutral-950"
    >
      
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full transition-colors duration-1000"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}vw`,
              top: `${p.y}vh`,
              backgroundColor: p.color,
              opacity: p.opacity,
              filter: `blur(${p.size > 8 ? "3px" : "1px"})`,
              transform: "translate(-50%, -50%)"
            }}
          />
        ))}
      </div>

      {/* Radiant Background Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen">
        <motion.div 
          animate={{ 
            rotate: 360, 
            scale: isCharging ? [1, 1.2, 1] : [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity }
          }}
          className="w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeLevel.color} 0%, rgba(0,0,0,0) 70%)`
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and interactive charging mechanic */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="space-y-8 flex flex-col justify-center"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-amber-500 uppercase self-start">
            <Sun className="w-4 h-4 animate-spin-slow text-amber-500" />
            <span>{ui.sectionBadge}</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            {ui.sectionTitle.split(". ")[0]}. <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              {ui.sectionTitle.split(". ")[1]}
            </span>
          </h2>

          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            {ui.sectionDesc}
          </p>

          {/* Interactive Playful Charger Mechanic */}
          <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                {ui.tunerTitle}
              </h4>
              <p className="text-xs text-neutral-400 max-w-sm">
                {ui.tunerDesc}
              </p>
            </div>

            <div className="relative flex items-center justify-center h-48 w-48">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="76"
                  className="stroke-neutral-800 fill-transparent"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="76"
                  className="fill-transparent"
                  strokeWidth="6"
                  strokeDasharray={2 * Math.PI * 76}
                  strokeDashoffset={2 * Math.PI * 76 * (1 - vibration / 100)}
                  strokeLinecap="round"
                  style={{ stroke: activeLevel.color }}
                  transition={{ ease: "easeOut" }}
                />
              </svg>

              <motion.button
                onMouseDown={() => setIsCharging(true)}
                onMouseUp={() => setIsCharging(false)}
                onMouseLeave={() => setIsCharging(false)}
                onTouchStart={() => setIsCharging(true)}
                onTouchEnd={() => setIsCharging(false)}
                animate={{
                  scale: isCharging ? [1, 1.08, 1.02] : 1,
                  boxShadow: isCharging
                    ? `0 0 50px ${activeLevel.color}`
                    : `0 0 20px ${activeLevel.color}22`
                }}
                transition={{
                  scale: { repeat: Infinity, duration: 1.5 },
                  boxShadow: { duration: 0.3 }
                }}
                className="relative z-10 w-32 h-32 rounded-full border border-neutral-700/50 flex flex-col items-center justify-center cursor-pointer select-none active:scale-95 transition-all duration-300 overflow-hidden"
                style={{
                  background: `radial-gradient(circle, ${activeLevel.color}44 0%, rgba(10,10,10,0.9) 80%)`
                }}
              >
                <AnimatePresence mode="wait">
                  {transcended ? (
                    <motion.div
                      key="transcended"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex flex-col items-center text-white"
                    >
                      <Sparkles className="w-8 h-8 text-amber-300 animate-pulse mb-1" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">{ui.aligned}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="charge-state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      {activeLevel.icon}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mt-2">
                        {isCharging ? ui.synchronizing : ui.holdBtn}
                      </span>
                      <span className="text-xs font-bold text-neutral-200 mt-1">
                        {Math.round(vibration)}%
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <AnimatePresence>
              {transcended && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-mono text-amber-400 animate-pulse"
                >
                  {ui.alignedMessage} {activeLevel.title.split(" (")[0]}!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side: Interactive Level Selector cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          {consciousnessLevels.map((level) => {
            const isSelected = activeLevel.id === level.id;
            return (
              <LevelCard
                key={level.id}
                level={level}
                isSelected={isSelected}
                onSelect={() => handleLevelChange(level)}
                enterPortalText={ui.enterPortal}
              />
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
