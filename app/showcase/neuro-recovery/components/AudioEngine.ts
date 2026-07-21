"use client";

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isInitialized = false;
type ThemeType = 'chaos' | 'withdrawal' | 'alcohol' | 'cannabis' | 'stimulants' | 'recovery' | 'joy';
let activeTheme: ThemeType | null = null;
let autoMode = true;

// Store active oscillators and their gain nodes so we can crossfade them
let currentNodes: { osc: OscillatorNode, gain: GainNode }[] = [];

// Alpha wave (10 Hz) background binaural beat state
let alphaLeftOsc: OscillatorNode | null = null;
let alphaRightOsc: OscillatorNode | null = null;
let alphaLeftGain: GainNode | null = null;
let alphaRightGain: GainNode | null = null;

// Local interactive game exercise state
let isExerciseActive = false;
let exerciseLeftOsc: OscillatorNode | null = null;
let exerciseRightOsc: OscillatorNode | null = null;
let exerciseLeftGain: GainNode | null = null;
let exerciseRightGain: GainNode | null = null;

export const isAudioEnabled = () => isInitialized;
export const isAutoModeEnabled = () => autoMode;

export const setAutoMode = (enabled: boolean) => {
  autoMode = enabled;
};

// Continuous background 10 Hz Alpha Wave Binaural Beat
const startAlphaBinauralBeat = () => {
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime;

  stopAlphaBinauralBeat();

  alphaLeftOsc = audioCtx.createOscillator();
  alphaRightOsc = audioCtx.createOscillator();
  alphaLeftGain = audioCtx.createGain();
  alphaRightGain = audioCtx.createGain();

  // Grounding low carrier frequencies
  alphaLeftOsc.frequency.value = 110; // Left ear: 110 Hz
  alphaRightOsc.frequency.value = 120; // Right ear: 120 Hz (10 Hz alpha wave offset)
  
  (alphaLeftOsc as any).baseFrequency = 110;
  (alphaRightOsc as any).baseFrequency = 120;

  alphaLeftOsc.type = "sine";
  alphaRightOsc.type = "sine";

  // Low amplitude to remain a soothing, sub-perceptual grounding field
  alphaLeftGain.gain.setValueAtTime(0, now);
  alphaLeftGain.gain.linearRampToValueAtTime(0.02, now + 3);

  alphaRightGain.gain.setValueAtTime(0, now);
  alphaRightGain.gain.linearRampToValueAtTime(0.02, now + 3);

  if (audioCtx.createStereoPanner) {
    const leftPanner = audioCtx.createStereoPanner();
    leftPanner.pan.value = -1;
    const rightPanner = audioCtx.createStereoPanner();
    rightPanner.pan.value = 1;

    alphaLeftOsc.connect(alphaLeftGain);
    alphaLeftGain.connect(leftPanner);
    leftPanner.connect(masterGain);

    alphaRightOsc.connect(alphaRightGain);
    alphaRightGain.connect(rightPanner);
    rightPanner.connect(masterGain);
  } else {
    alphaLeftOsc.connect(alphaLeftGain);
    alphaLeftGain.connect(masterGain);

    alphaRightOsc.connect(alphaRightGain);
    alphaRightGain.connect(masterGain);
  }

  alphaLeftOsc.start(now);
  alphaRightOsc.start(now);
};

const stopAlphaBinauralBeat = () => {
  const now = audioCtx ? audioCtx.currentTime : 0;
  if (alphaLeftOsc && alphaLeftGain) {
    try {
      alphaLeftGain.gain.cancelScheduledValues(now);
      alphaLeftGain.gain.setValueAtTime(alphaLeftGain.gain.value, now);
      alphaLeftGain.gain.linearRampToValueAtTime(0.001, now + 1.5);
      alphaLeftOsc.stop(now + 1.6);
    } catch (e) {}
    alphaLeftOsc = null;
    alphaLeftGain = null;
  }
  if (alphaRightOsc && alphaRightGain) {
    try {
      alphaRightGain.gain.cancelScheduledValues(now);
      alphaRightGain.gain.setValueAtTime(alphaRightGain.gain.value, now);
      alphaRightGain.gain.linearRampToValueAtTime(0.001, now + 1.5);
      alphaRightOsc.stop(now + 1.6);
    } catch (e) {}
    alphaRightOsc = null;
    alphaRightGain = null;
  }
};

export const initAudioEngine = () => {
  if (typeof window === "undefined") return;

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
    masterGain.gain.value = 0.9; // Master volume head room
    isInitialized = true;
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Start the background alpha brainwave beat
  startAlphaBinauralBeat();
  
  if (activeTheme) {
    playTheme(activeTheme);
  }
};

export const stopAudioEngine = () => {
  isInitialized = false;
  stopAlphaBinauralBeat();
  fadeOutCurrentNodes();
};

const fadeOutCurrentNodes = () => {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  currentNodes.forEach(({ osc, gain }) => {
    try {
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 2);
      osc.stop(now + 2.1);
    } catch(e) {}
  });
  currentNodes = [];
};

// Set theme checks or updates activeTheme regardless of initialization state
export const setTheme = (theme: ThemeType, forceManual = false) => {
  if (!autoMode && !forceManual) return;
  if (theme === activeTheme) return;
  activeTheme = theme;
  if (isInitialized && audioCtx) {
    playTheme(theme);
  }
};

// Modulate audio frequencies smoothly in real time based on cursor balance (0 to 1)
export const modulateAudio = (balance: number) => {
  if (!audioCtx || !isInitialized) return;
  const now = audioCtx.currentTime;

  let multiplier = 1.0;
  if (balance < 0.5) {
    multiplier = 0.7 + (balance * 0.6); // scale from 0.7 to 1.0
  } else {
    multiplier = 1.0 + (balance - 0.5) * 2.4; // scale from 1.0 to 2.2
  }

  // Glide active nodes
  currentNodes.forEach(({ osc }) => {
    const base = (osc as any).baseFrequency;
    if (base && osc.frequency) {
      try {
        osc.frequency.setTargetAtTime(base * multiplier, now, 0.1);
      } catch(e) {}
    }
  });

  // Glide background alpha binaural beat as well for full auditory sync
  if (alphaLeftOsc && alphaRightOsc) {
    try {
      const leftBase = (alphaLeftOsc as any).baseFrequency || 110;
      const rightBase = (alphaRightOsc as any).baseFrequency || 120;
      alphaLeftOsc.frequency.setTargetAtTime(leftBase * multiplier, now, 0.12);
      alphaRightOsc.frequency.setTargetAtTime(rightBase * multiplier, now, 0.12);
    } catch(e) {}
  }
};

// Local game exercise sound triggers
const stopExerciseOscillators = () => {
  const now = audioCtx ? audioCtx.currentTime : 0;
  if (exerciseLeftOsc && exerciseLeftGain) {
    try {
      exerciseLeftGain.gain.cancelScheduledValues(now);
      exerciseLeftGain.gain.setValueAtTime(exerciseLeftGain.gain.value, now);
      exerciseLeftGain.gain.linearRampToValueAtTime(0.001, now + 0.3);
      exerciseLeftOsc.stop(now + 0.4);
    } catch(e) {}
    exerciseLeftOsc = null;
    exerciseLeftGain = null;
  }
  if (exerciseRightOsc && exerciseRightGain) {
    try {
      exerciseRightGain.gain.cancelScheduledValues(now);
      exerciseRightGain.gain.setValueAtTime(exerciseRightGain.gain.value, now);
      exerciseRightGain.gain.linearRampToValueAtTime(0.001, now + 0.3);
      exerciseRightOsc.stop(now + 0.4);
    } catch(e) {}
    exerciseRightOsc = null;
    exerciseRightGain = null;
  }
};

export const startExerciseAudio = () => {
  if (typeof window === "undefined") return;

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
    masterGain.gain.value = 0.9;
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isExerciseActive = true;
  const now = audioCtx.currentTime;

  // 1. Smoothly fade down background theme soundtrack to avoid clashing
  currentNodes.forEach(({ gain }) => {
    try {
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.4); // quick dip
    } catch(e) {}
  });

  // Fade down background alpha beats as well
  if (alphaLeftGain && alphaRightGain) {
    try {
      alphaLeftGain.gain.cancelScheduledValues(now);
      alphaLeftGain.gain.linearRampToValueAtTime(0.001, now + 0.4);
      alphaRightGain.gain.cancelScheduledValues(now);
      alphaRightGain.gain.linearRampToValueAtTime(0.001, now + 0.4);
    } catch(e) {}
  }

  // 2. Start pure alpha/beta exercise sweep tones
  stopExerciseOscillators();

  exerciseLeftOsc = audioCtx.createOscillator();
  exerciseRightOsc = audioCtx.createOscillator();
  exerciseLeftGain = audioCtx.createGain();
  exerciseRightGain = audioCtx.createGain();

  exerciseLeftOsc.type = "sine";
  exerciseRightOsc.type = "sine";

  // Base frequencies
  exerciseLeftOsc.frequency.value = 100;
  exerciseRightOsc.frequency.value = 110; // 10 Hz (Alpha beat) difference

  exerciseLeftGain.gain.setValueAtTime(0, now);
  exerciseLeftGain.gain.linearRampToValueAtTime(0.07, now + 0.25);

  exerciseRightGain.gain.setValueAtTime(0, now);
  exerciseRightGain.gain.linearRampToValueAtTime(0.07, now + 0.25);

  if (audioCtx.createStereoPanner) {
    const leftPanner = audioCtx.createStereoPanner();
    leftPanner.pan.value = -1;
    const rightPanner = audioCtx.createStereoPanner();
    rightPanner.pan.value = 1;

    exerciseLeftOsc.connect(exerciseLeftGain);
    exerciseLeftGain.connect(leftPanner);
    leftPanner.connect(masterGain!);

    exerciseRightOsc.connect(exerciseRightGain);
    exerciseRightGain.connect(rightPanner);
    rightPanner.connect(masterGain!);
  } else {
    exerciseLeftOsc.connect(exerciseLeftGain);
    exerciseLeftGain.connect(masterGain!);
    exerciseRightOsc.connect(exerciseRightGain);
    exerciseRightGain.connect(masterGain!);
  }

  exerciseLeftOsc.start(now);
  exerciseRightOsc.start(now);
};

export const modulateExerciseAudio = (balance: number) => {
  if (!audioCtx || !exerciseLeftOsc || !exerciseRightOsc) return;
  const now = audioCtx.currentTime;

  // Carrier slides from 80 Hz (deep grounding) to 200 Hz (exciting pitch)
  const carrier = 80 + balance * 120;
  // Beat frequency slides from 10 Hz (Alpha - left) to 30 Hz (Beta - right)
  const beat = 10 + balance * 20;

  try {
    exerciseLeftOsc.frequency.setTargetAtTime(carrier, now, 0.08);
    exerciseRightOsc.frequency.setTargetAtTime(carrier + beat, now, 0.08);
  } catch(e) {}
};

export const stopExerciseAudio = () => {
  isExerciseActive = false;
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  stopExerciseOscillators();

  // Restore background theme volumes if the user has enabled the global site sound
  if (isInitialized) {
    currentNodes.forEach(({ gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 1.0); // fade back up
      } catch(e) {}
    });

    if (alphaLeftGain && alphaRightGain) {
      try {
        alphaLeftGain.gain.cancelScheduledValues(now);
        alphaLeftGain.gain.linearRampToValueAtTime(0.02, now + 1.0);
        alphaRightGain.gain.cancelScheduledValues(now);
        alphaRightGain.gain.linearRampToValueAtTime(0.02, now + 1.0);
      } catch(e) {}
    }
  } else {
    // If global sound is off, suspend audio context after fade-out to release hardware resources
    setTimeout(() => {
      if (!isInitialized && !isExerciseActive && audioCtx && audioCtx.state === 'running') {
        audioCtx.suspend();
      }
    }, 1200);
  }
};

// Helper to apply subtle 10 Hz Alpha Wave volume/pitch modulation (tremolo)
const applyAlphaModulation = (gainNode: GainNode, now: number) => {
  if (!audioCtx) return;
  const lfo = audioCtx.createOscillator();
  const lfoGain = audioCtx.createGain();
  
  lfo.type = "sine";
  lfo.frequency.value = 10; // 10 Hz (Alpha brainwave frequency)
  lfoGain.gain.value = 0.008; // very subtle calming swell
  
  lfo.connect(lfoGain);
  lfoGain.connect(gainNode.gain);
  
  lfo.start(now);
  currentNodes.push({ osc: lfo, gain: lfoGain });
};

const playTheme = (theme: string) => {
  if (!audioCtx || !masterGain || !isInitialized) return;
  
  fadeOutCurrentNodes();
  const now = audioCtx.currentTime;

  switch(theme) {
    case 'chaos': {
      // Grounding low-frequency pad
      const freqs = [55.00, 65.41, 82.41]; // A1, C2, E2 (Grounding A Minor)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 4);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'withdrawal': {
      // Meditative, deep grounding chord
      const freqs = [48.99, 73.42, 87.31]; // G1, D2, F2 (Low calming G7 shell)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 3);
        
        // Gentle slow sweep LFO
        const sweepLfo = audioCtx!.createOscillator();
        const sweepLfoGain = audioCtx!.createGain();
        sweepLfo.type = 'sine';
        sweepLfo.frequency.value = 0.15; // ultra slow breathing rate
        sweepLfoGain.gain.value = 1.5;
        sweepLfo.connect(sweepLfoGain);
        sweepLfoGain.connect(osc.frequency);
        sweepLfo.start(now);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
        currentNodes.push({ osc: sweepLfo, gain: sweepLfoGain });
      });
      break;
    }
    case 'alcohol': {
      // Warm, soft, muffled pad
      const freqs = [65.41, 82.41, 98.00]; // C2, E2, G2
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'triangle'; // triangle has a softer tone
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 3);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'cannabis': {
      // Wide, ethereal relaxing chord
      const freqs = [65.41, 98.00, 130.81, 164.81]; // C2, G2, C3, E3 (C Major grounding)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 4);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'stimulants': {
      // Warm low/mid soothing sweep
      const freqs = [65.41, 98.00, 130.81]; // C2, G2, C3 (Deep grounding)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.025, now + 3);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'recovery': {
      // Deep, soothing Tibetan singing bowls (tuned in 432 Hz harmonics)
      const freqs = [108.00, 144.00, 216.00]; // A2, D3, A3 (meditative 432Hz stack)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 5);
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'joy': {
      // Deep, radiant D Major grounding drone
      const freqs = [73.42, 110.00, 146.83, 185.00]; // D2, A2, D3, F#3 (warm low Major)
      freqs.forEach((freq, i) => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        (osc as any).baseFrequency = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 3 + (i * 1.0));
        
        applyAlphaModulation(gain, now);
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
  }
};

export const playTransitionSound = () => {
  if (!audioCtx || !masterGain || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;
  
  // Crystal chime sound using dual-sine harmonics
  const freqs = [880, 1320, 1760]; // High A5, E6, A6 harmonics
  freqs.forEach((freq, idx) => {
    const osc = audioCtx!.createOscillator();
    const gainNode = audioCtx!.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    
    osc.connect(gainNode);
    gainNode.connect(masterGain!);
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.015 / (idx + 1), now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + (idx * 0.15));
    
    osc.start(now);
    osc.stop(now + 1.8);
  });
};

export const playTabClickSound = () => {
  if (!audioCtx || !masterGain || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, now);
  osc.frequency.exponentialRampToValueAtTime(150, now + 0.12);
  
  osc.connect(gainNode);
  gainNode.connect(masterGain!);
  
  gainNode.gain.setValueAtTime(0.04, now);
  gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.12);
  
  osc.start(now);
  osc.stop(now + 0.15);
};

export const playGeneralClickSound = () => {
  if (!audioCtx || !masterGain || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(400, now + 0.06);
  
  osc.connect(gainNode);
  gainNode.connect(masterGain!);
  
  gainNode.gain.setValueAtTime(0.02, now);
  gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.06);
  
  osc.start(now);
  osc.stop(now + 0.08);
};
