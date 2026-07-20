"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Maximize, Volume2, Sparkles, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveVideoPlayerProps {
  imageSrc: string;
  themeColor: string;
  title: string;
}

interface MovingElement {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  angle?: number;
  spinSpeed?: number;
  life?: number;
}

export default function InteractiveVideoPlayer({ imageSrc, themeColor, title }: InteractiveVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(120); // mock duration: 2:00
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Video progress bar simulation
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0; // loop
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current);
    }
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isPlaying]);

  // Generative Canvas Visualizer representing moving parts inside the image
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

    // Determine visual style based on the page theme/imageSrc
    const isPleasure = imageSrc.includes("pleasure");
    const isHappiness = imageSrc.includes("happiness");
    const isJoy = imageSrc.includes("joy-soul");
    const isEcstasy = imageSrc.includes("ecstasy");
    const isEpigenetics = imageSrc.includes("epigenetics");
    const isTrauma = imageSrc.includes("collective-trauma");

    // Initialize 25 moving visual components
    const elements: MovingElement[] = Array.from({ length: 25 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (isEcstasy ? 4 : 8) + (isPleasure ? 8 : 2),
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - (isJoy ? 0.3 : 0), // upward drift for Joy
        color: themeColor,
        angle: angle,
        spinSpeed: (Math.random() - 0.5) * 0.02
      };
    });

    const drawSimulation = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Animation speed multiplier based on play state
      const speedMult = isPlaying ? 1.5 : 0.15;

      // Render elements based on theme
      elements.forEach((el) => {
        // Update physics
        el.x += el.speedX * speedMult;
        el.y += el.speedY * speedMult;
        if (el.angle !== undefined && el.spinSpeed !== undefined) {
          el.angle += el.spinSpeed * speedMult;
        }

        // Boundary wrap
        if (el.x < 0) el.x = width;
        if (el.x > width) el.x = 0;
        if (el.y < 0) el.y = height;
        if (el.y > height) el.y = 0;

        // Render themed styling
        ctx.save();
        ctx.globalAlpha = isPlaying ? 0.35 : 0.15;
        ctx.shadowBlur = 15;
        ctx.shadowColor = themeColor;

        if (isPleasure) {
          // Drifting organic somatic cells
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();
        } else if (isHappiness) {
          // Connective neural synapses
          ctx.beginPath();
          ctx.arc(el.x, el.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();
          
          // Draw geometric lines to nearby nodes
          elements.forEach((other) => {
            const dist = Math.hypot(el.x - other.x, el.y - other.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(el.x, el.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = themeColor;
              ctx.globalAlpha = (1 - dist / 100) * 0.15 * (isPlaying ? 1 : 0.2);
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          });
        } else if (isJoy) {
          // Rising golden sparks/feathers
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();
        } else if (isEcstasy) {
          // Cosmic dust spiraling around the center
          const centerX = width / 2;
          const centerY = height / 2;
          const radius = Math.hypot(el.x - centerX, el.y - centerY);
          const currentAngle = Math.atan2(el.y - centerY, el.x - centerX) + 0.002 * speedMult;
          
          el.x = centerX + Math.cos(currentAngle) * radius;
          el.y = centerY + Math.sin(currentAngle) * radius;

          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#ffffff";
          ctx.fill();
        } else if (isEpigenetics) {
          // Pulsing DNA helix wave overlays
          ctx.beginPath();
          const waveOffset = Math.sin((el.x / width) * Math.PI * 4 + (performance.now() * 0.002 * speedMult)) * 25;
          ctx.arc(el.x, el.y + waveOffset, el.size, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();
        } else if (isTrauma) {
          // Pulsing endocrine stress electrical lines
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
          ctx.fillStyle = themeColor;
          ctx.fill();
          
          if (isPlaying && Math.random() < 0.02) {
            // Draw a subtle crackle/spark
            ctx.beginPath();
            ctx.moveTo(el.x, el.y);
            ctx.lineTo(el.x + (Math.random() - 0.5) * 40, el.y + (Math.random() - 0.5) * 40);
            ctx.strokeStyle = "#ffffff";
            ctx.globalAlpha = 0.5;
            ctx.stroke();
          }
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(drawSimulation);
    };

    drawSimulation();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, imageSrc, themeColor]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const currentSeconds = (progress / 100) * duration;

  return (
    <div className="relative w-full rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl group my-12 select-none">
      
      {/* Video Content Area */}
      <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center">
        
        {/* Main Background Image (Suggestive Visual) */}
        <motion.img
          src={imageSrc}
          alt={title}
          animate={{
            scale: isPlaying ? [1, 1.05, 1.01] : 1,
            filter: isPlaying ? ["hue-rotate(0deg)", "hue-rotate(5deg)", "hue-rotate(0deg)"] : "hue-rotate(0deg)"
          }}
          transition={{
            scale: { repeat: Infinity, duration: 15, ease: "easeInOut" },
            filter: { repeat: Infinity, duration: 10, ease: "linear" }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700"
        />

        {/* Generative Interactive Canvas Overlay (Moving elements in the picture) */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-screen"
        />

        {/* Video Scanlines & Noise Overlay for cinematic look */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-20 z-12" />
        
        {/* Holographic Glowing Ring Visualizer (only active when playing) */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1], 
                scale: [1, 1.3, 1],
                borderColor: themeColor
              }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full border-2 pointer-events-none mix-blend-screen blur-sm z-12"
            />
          )}
        </AnimatePresence>

        {/* Cinematic Darkness Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none z-12" />

        {/* Dynamic Center Play Overlay Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute z-20 p-5 rounded-full border border-neutral-700 bg-neutral-900/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
        </button>

        {/* Floating AI Logo tag */}
        <div className="absolute top-4 left-4 z-15 flex items-center space-x-2 bg-neutral-950/80 border border-neutral-800 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-amber-500 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span>VLA Neural Simulation v2.0</span>
        </div>
      </div>

      {/* Video Player Controls Bar */}
      <div className="p-4 bg-neutral-900/90 border-t border-neutral-800 backdrop-blur-md flex flex-col space-y-3 z-20 relative">
        
        {/* Progress Slider */}
        <div className="relative w-full h-1 bg-neutral-800 rounded-full cursor-pointer overflow-hidden group/progress">
          <div 
            className="h-full rounded-full transition-all duration-100"
            style={{ 
              width: `${progress}%`,
              backgroundColor: themeColor || '#fbbf24'
            }}
          />
        </div>

        {/* Lower Controls */}
        <div className="flex items-center justify-between text-neutral-300 text-xs font-mono">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex items-center space-x-1.5 text-[10px] text-neutral-400">
              <span>{formatTime(currentSeconds)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <span className="text-[10px] tracking-wider text-neutral-400 font-bold truncate max-w-[200px] md:max-w-none">
            {title} — SIMULARE DINAMICĂ
          </span>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer text-[10px]">
              <Volume2 className="w-4 h-4 text-neutral-400" />
              <span className="hidden sm:inline">SOUND SYNCED</span>
            </div>
            <div className="flex items-center space-x-1 text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded text-[8px]">
              <Tv className="w-3 h-3 text-neutral-500" />
              <span>1080p ULTRA</span>
            </div>
            <Maximize className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>

    </div>
  );
}
