"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, Brain, HeartPulse, Play, Lock, Unlock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { 
  setTheme, 
  modulateAudio, 
  startExerciseAudio, 
  modulateExerciseAudio, 
  stopExerciseAudio 
} from "../../../../showcase/neuro-recovery/components/AudioEngine";

interface QuoteType {
  text: string;
  author: string;
}

const quotes: QuoteType[] = [
  {
    text: "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you.",
    author: "Dr. Gabor Maté"
  },
  {
    text: "Your body keeps a score your mind tries to ignore. Chronic disruption of homeostasis leads to physical and spiritual illness.",
    author: "Dr. Gabor Maté"
  },
  {
    text: "If you can't say no, your body will do it for you in the form of a biological symptom.",
    author: "Dr. Gabor Maté"
  },
  {
    text: "Trauma results in a fundamental redirection of the nervous system to survive, sacrificing the peace of homeostasis.",
    author: "Dr. Bessel van der Kolk"
  },
  {
    text: "Homeostasis is the state of biological harmony. Hyperstimulation means the brain is trading future health for present survival.",
    author: "Dr. Andrew Huberman"
  },
  {
    text: "Stillness is not the absence of movement, but the perfect tuning of biological motion with the vibration of the Universe.",
    author: "Guru Spiritual Perspective"
  }
];

export default function HomeostasisGraphEN() {
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
  }, []);

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
      ctx.fillText(activeBalance < 0.5 ? "CORE NODE" : "HYPER-FOCUS", width / 2, height / 2 + 3);
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
    if (isLocked) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const newBalance = Math.max(0, Math.min(1, x / rect.width));
    setBalance(newBalance);

    modulateAudio(newBalance);
    modulateExerciseAudio(newBalance);

    const deviation = Math.abs(newBalance - 0.1);
    const calculatedScore = Math.floor(Math.max(0, 100 - deviation * 150));
    setScore(calculatedScore);
  };

  const handleMouseEnter = () => {
    if (isLocked) return;
    setIsHovering(true);
    startExerciseAudio();
  };

  const handleMouseLeave = () => {
    if (isLocked) return;
    setIsHovering(false);
    setBalance(0.5);
    stopExerciseAudio();
    modulateAudio(0.5); 
  };

  // Click on Canvas to lock/unlock diagnostic state
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isLocked) {
      setIsLocked(false);
      setIsHovering(true);
      startExerciseAudio();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newBalance = Math.max(0, Math.min(1, x / rect.width));
      setBalance(newBalance);
      modulateExerciseAudio(newBalance);
    } else {
      setIsLocked(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const lockedVal = Math.max(0, Math.min(1, x / rect.width));
      
      setLockedBalance(lockedVal);
      setLockedMousePos({ x, y });
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

  const getPhysiologicalState = () => {
    if (activeBalance < 0.2) return { text: "Deep Parasympathetic (Meditative Rest)", color: "text-blue-400", wave: "Delta / Theta Waves (0.5 - 7 Hz)" };
    if (activeBalance < 0.48) return { text: "Dynamic Homeostasis (Cellular Health)", color: "text-cyan-400", wave: "Alpha Waves (8 - 12 Hz) - Meditation" };
    if (activeBalance >= 0.48 && activeBalance <= 0.52) return { text: "Equilibrium Point (Zero Axis)", color: "text-white", wave: "Mu / SMR Waves (12 - 15 Hz) - Calm Focus" };
    if (activeBalance > 0.52 && activeBalance < 0.8) return { text: "Sympathetic Activation (Alert / Focus)", color: "text-orange-400", wave: "Beta Waves (15 - 30 Hz) - Excitation" };
    return { text: "Hyperstimulation & Toxicity (Cortisol/Adrenaline Overflow)", color: "text-red-500 animate-pulse", wave: "Gamma / High Beta Waves (30 - 100 Hz)" };
  };

  const stateDesc = getPhysiologicalState();

  const getDiagnosticDetails = () => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Zen State / Parasympathetic Dominance (Vagotonia)",
        explanation: "Represents the deep activation of the myelinated ventral pathway of the vagus nerve (Ventral Vagal Pathway), releasing acetylcholine at the sinoatrial node to safely decelerate heart rate (resting physiological bradycardia). The HPA axis is completely silenced, allowing replenishment of liver glycogen stores, resynthesis of intracellular ATP, and restoration of baseline tyrosine hydroxylase. The brain enters deep Delta and Theta states, bio-electrical frequencies that facilitate glymphatic cerebral drainage and immunological memory consolidation.",
        graphType: "Heart Rate Variability (HRV) Power Spectrum Graph",
        graphExplanation: "A Fast Fourier Transform (FFT) spectral analysis of cardiac inter-beat intervals (R-R peaks), demonstrating a massive dominance of power in the High Frequency band (HF: 0.15 - 0.4 Hz), the direct mathematical proxy of cardiac vagal tone.",
        advice: "• 'Physiological Sigh' Breathing: Perform two quick inhalations through the nose (the second being a sharp, short sip to re-expand the lung alveoli), followed by a slow, passive, extended exhalation through the mouth. Repeat 5 times to immediately engage baroreceptor vagal reflexes.\n• Transcendental Meditation & Samadhi: Cultivate absolute introspective silence, directing focus to the natural pause in post-expiratory apnea. This assists in dissolving somatic tension blocks accumulated over time.\n• Clinical Caution (Warning): Avoid slipping from active ventral-vagal presence into dorsal-vagal dominance (freeze state, emotional dissociation, chronic lethargy, or vegetative depression). Re-energize gently through conscious somatic movements or short cold exposure."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Dynamic Homeostasis (Alpha Baseline of Calm)",
        explanation: "This is the gold standard of allostatic balance. The hypothalamic-pituitary-adrenal (HPA) axis functions in a perfect negative feedback loop, keeping cortisol and ACTH secretion within ideal health parameters. The fusion of sympathetic and parasympathetic tones permits immune cells (T-lymphocytes and NK cells) to operate optimally, suppressing pro-inflammatory cytokines (such as IL-6 and TNF-alpha). Dopamine is released tonically (stable and steady) from the ventral tegmental area (VTA) to the nucleus accumbens, preventing D2 receptor down-regulation and keeping motivation clean, void of addictive cravings.",
        graphType: "Zero Allostatic Overload Curve",
        graphExplanation: "The graph demonstrates a perfect steady-state allostatic energy line, where environmental demands are fully matched by biological resources, eliminating cellular wear-and-tear.",
        advice: "• Dr. Gabor Maté's Affective Theory: Cultivate the capacity to recognize and express repressed emotions (healthy anger). Learn to speak an authentic 'NO' to others so your body doesn't have to say 'NO' in the form of autoimmune disorders or chronic fatigue.\n• Circadian Sincronization: Expose your eyes to direct sunlight within the first 30 minutes of waking to generate the natural morning cortisol spike and lock down late-day melatonin leakage.\n• Earthing & Co-Regulation: Practice direct physical contact with the earth (grounding) and nurture relationships within a safe emotional community (Sangha), vital for mirror-neuron-mediated autonomic co-regulation."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Zero Point (Autonomic Co-Activation & Bifurcation)",
        explanation: "A state of pure dynamic balance, characterized by the simultaneous and symmetric co-activation of both sympathetic and parasympathetic branches. In this axis, the amygdala resides in a state of calm alertness under the direct, stable control of the medial prefrontal cortex (mPFC). The cardiovascular system exhibits a perfect sinusoidal pattern (peak heart rate coherence). All bioenergetic resources are pre-mobilized, allowing the organism to adapt instantly to rapid mobilization (sympathetic) or complete relaxation (parasympathetic) without building up residual stress.",
        graphType: "Autonomic Attractor Phase Space Map",
        graphExplanation: "The phase space plot shows a stable, point-like attractor (zero-bias attractor). It represents the mathematical equation of maximum adaptability, where state transitions do not drain baseline metabolic reserves.",
        advice: "• Coherent Breathing (Resonance Frequency): Breathe at a steady rate of 5 seconds on the inhale and 5 seconds on the exhale (approx. 6 breaths per minute). This rhythm engages the pulmonary resonance node, stabilizing arterial blood pressure.\n• Wu Wei (Effortless Action): Adopt the Taoist mindset of non-attachment. Act from flow, guided by presence rather than egoic anxieties or ambitions. Observe biological drives without identifying with them.\n• Somatic Re-alignment: Conduct brief body-scans throughout the day to re-center your posture, calming the activity of the anterior cortex."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Sympathetic Drive (Focused Alert / Beta Drive)",
        explanation: "The sympathetic nervous system mobilizes metabolic resources through the activation of the sympatho-adreno-medullary (SAM) axis. The locus coeruleus increases its firing rate, bathing the cortex in norepinephrine to establish narrow focal vision (selective target attention). Liver glycogen is metabolized into circulating glucose to feed active muscles and brain tissues. Heart rate rises via beta-1 adrenergic receptor stimulation. Dopamine shifts from tonic release to phasic spikes, generating intense goal-oriented drive, high productivity, and external reward seeking.",
        graphType: "Acute Stress Response and Phasic Dopamine Shift Curve",
        graphExplanation: "The chart illustrates the transition from a stable tonic baseline to high-frequency dopamine spikes, mapping goal-seeking energy and dynamic ATP reserve mobilization.",
        advice: "• Allostatic Boundaries: Limit sympathetic work sprints to maximum 90-minute blocks (ultradian cycles). Follow each block with at least 10 minutes of visual de-focus (looking into the distance, away from screens).\n• Rapid Somatic Grounding (5-4-3-2-1 Technique): Identify 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste to immediately ground the brain in physical reality, halting cognitive rumination loops.\n• Conscious Transmutation (Karma Yoga): Channel the adrenergic drive into focused creation and work, ensuring the pressure does not degenerate into irritability or performance anxiety."
      };
    } else {
      return {
        stateName: "HPA Exhaustion & Toxic Alert (Chronic Overload)",
        explanation: "A state of severe systemic allostatic overload. Glucocorticoid receptors in the hippocampus and prefrontal cortex are down-regulated due to prolonged cortisol exposure (cortisol resistance), breaking the HPA shutdown loop. The amygdala becomes hyper-reactive and hypertrophied, interpreting neutral stimuli as immediate vital threats. Excess glutamate accumulates in synapses, triggers excitotoxicity, and causes dendritic atrophy in executive brain areas. Dopamine D2 receptors are drastically reduced, installing baseline anhedonia (inability to feel natural pleasure), which drives compulsive seeking behaviors or total immune collapse.",
        graphType: "Allostatic Overload and Synaptic Degradation Curve",
        graphExplanation: "The saturation graph displays the system breaking point. Chronic cortisol levels have shattered allostasis (adaptability), causing a total collapse of neuroendocrine feedback loops.",
        advice: "• Urgent Sensory Reset: Block all incoming digital, visual, and auditory stimuli (airplane mode, dark room sensory deprivation). Supplement under clinical advice with potent adaptogens (Ashwagandha KSM-66, Rhodiola Rosea, Magnesium L-Threonate to cross the blood-brain barrier).\n• Somatic Experiencing (Dr. Peter Levine's Therapy): Allow the body to tremble naturally to discharge survival energy trapped in muscles. Do not suppress crying or shaking; they are ancestral autonomic mechanisms to discharge somatic trauma.\n• Radical Surrender (Vairagya): Practice total surrender of the need for control. Acknowledge the physical body's limits as a sacred temple of consciousness. Reconnect with the earth through direct grounding and deep abdominal breathing."
      };
    }
  };

  const diag = getDiagnosticDetails();

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
              <span>Interactive Sympathetic/Parasympathetic Balance Guide</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            The Brain Seeking Balance
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore the neural axis by moving your mouse. **Click** on the simulator to lock and analyze a specific state in detail.
          </p>
        </motion.div>

        {/* Homeostasis Interactive Game Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Game Firing Arena (Split Layout) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            
            {/* Interactive Header Description */}
            <div className="flex items-center justify-between gap-4 mb-6 z-10 relative">
              <div>
                <div className="uppercase tracking-widest text-[8px] text-neutral-500 font-mono flex items-center gap-1.5">
                  Nervous System State
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
                <div className="uppercase tracking-widest text-[8px] text-neutral-500">Synaptic Coherence</div>
                <div className="text-lg font-bold text-white transition-all duration-300">
                  {score}%
                </div>
              </div>
            </div>

            {/* Split Visualizer: Progress Columns (Process A/B) + Synaptic Canvas */}
            <div className="grid grid-cols-12 gap-6 mb-6 items-stretch">
              
              {/* Process A & Process B Dynamic Progress Columns */}
              <div className="col-span-3 flex justify-around items-end bg-neutral-950/60 rounded-2xl border border-neutral-850 p-4 relative min-h-[220px]">
                
                {/* Process A Column: Parasympathetic (Blue) */}
                <div className="flex flex-col items-center h-full justify-end relative w-1/3">
                  <div className="absolute top-0 text-[7px] font-mono tracking-wider text-blue-400 uppercase text-center select-none leading-none">
                    A: Rest
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

                {/* Process B Column: Sympathetic (Red) */}
                <div className="flex flex-col items-center h-full justify-end relative w-1/3">
                  <div className="absolute top-0 text-[7px] font-mono tracking-wider text-red-400 uppercase text-center select-none leading-none">
                    B: Stress
                  </div>
                  <motion.div 
                    className="w-full bg-gradient-to-t from-red-900 to-red-500 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.3)]"
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
                  <span>{isLocked ? "CLICK TO UNLOCK" : "CLICK TO DIAGNOSE"}</span>
                </div>

                {/* Side Indicators */}
                <div className="absolute inset-y-0 left-3 flex items-center text-[8px] text-blue-500/40 font-mono tracking-widest uppercase writing-mode-vertical pointer-events-none select-none z-20">
                  ← Rest
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center text-[8px] text-red-500/40 font-mono tracking-widest uppercase writing-mode-vertical pointer-events-none select-none z-20 text-right">
                  Stress →
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
                <span>Reveal Neuro-Truth</span>
              </button>
            </div>

          </div>

          {/* Right Side: Generated Image & Live Quote Popup */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Conceptual Artwork Showcase */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-neutral-800/80 shadow-2xl group">
              <img 
                src="/images/homeostasis-simulation.jpg" 
                alt="Brain Homeostasis vs Hyperstimulation" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-neutral-950/80 border border-neutral-800 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                <span>Guru Projection</span>
              </div>
            </div>

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
                      "{currentQuote.text}"
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
                      <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">NEURAL DIAGNOSTIC REPORT</span>
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
                    Reset Map
                  </button>
                </div>

                {/* Grid: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Column 1: Physiology description */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      <span>Neuro-Physiological Analysis</span>
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                      {diag.explanation}
                    </p>
                    <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-850 space-y-2">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Key Metrics:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                        <div>Process A (Dopamine): <span className="text-blue-400 font-bold">{Math.floor(heightA)}%</span></div>
                        <div>Process B (Stress): <span className="text-red-400 font-bold">{Math.floor(heightB)}%</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Healing Guide */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Healing Path (Recommendation)</span>
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
            href="/en/showcase/neuro-recovery/homeostasis"
            className="inline-flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-blue-400 bg-blue-900/20 hover:bg-blue-900/40 px-8 py-4 rounded-full transition-all border border-blue-500/30 hover:border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <Play className="w-4 h-4" />
            <span>Full Homeostasis Documentation</span>
          </Link>
        </div>

      </div>
    </motion.section>
  );
}
