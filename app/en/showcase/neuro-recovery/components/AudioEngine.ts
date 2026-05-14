"use client";

type ThemeName = 'chaos' | 'withdrawal' | 'alcohol' | 'cannabis' | 'stimulants' | 'recovery' | 'joy';

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let activeTheme: ThemeName | null = null;
let autoPlayEnabled = true;

// Store active oscillators and their gain nodes so we can crossfade them
let currentNodes: { osc: OscillatorNode, gain: GainNode }[] = [];

export const isAudioEnabled = () => !!audioCtx && audioCtx.state === 'running';
export const isAutoPlayEnabled = () => autoPlayEnabled;
export const setAutoPlay = (enabled: boolean) => {
  autoPlayEnabled = enabled;
};

export const initAudioEngine = () => {
  if (typeof window === "undefined") return;

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
    masterGain.gain.value = 1;
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  if (activeTheme) {
    playTheme(activeTheme);
  }
};

export const stopAudioEngine = () => {
  fadeOutCurrentNodes(audioCtx?.currentTime || 0);
};

const fadeOutCurrentNodes = (now: number) => {
  if (!audioCtx) return;
  currentNodes.forEach(({ osc, gain }) => {
    try {
      // Smooth fade out over 2 seconds
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 2);
      osc.stop(now + 2.1);
    } catch(e) {}
  });
  currentNodes = [];
  activeTheme = null;
};

export const setTheme = (theme: ThemeName, forceManual: boolean = false) => {
  if (!forceManual && !autoPlayEnabled) return;
  if (theme === activeTheme || !audioCtx) return;
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  activeTheme = theme;
  playTheme(theme);
};

const playTheme = (theme: string) => {
  if (!audioCtx || !masterGain || audioCtx.state !== 'running') return;
  
  fadeOutCurrentNodes(audioCtx.currentTime);
  const now = audioCtx.currentTime;

  switch(theme) {
    case 'chaos': {
      // Chill but slightly melancholic ambient pad
      const freqs = [110, 130.81, 164.81]; // A2, C3, E3 (A minor)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine'; // Changed from sawtooth to sine for chill vibe
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 4); // Very slow, relaxing fade
        
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'withdrawal': {
      // Melancholic, chill deep ambient chord
      const freqs = [98.00, 146.83, 174.61]; // G2, D3, F3 (G7 shell)
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 3);
        
        // Gentle slow modulation
        const lfo = audioCtx!.createOscillator();
        const lfoGain = audioCtx!.createGain();
        lfo.type = 'sine';
        lfo.frequency.value = 0.2; // very relaxing slow sweep
        lfoGain.gain.value = 2;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(now);
        
        osc.start(now);
        currentNodes.push({ osc, gain });
        currentNodes.push({ osc: lfo, gain: lfoGain });
      });
      break;
    }
    case 'alcohol': {
      // Warm, soft, muffled electric piano vibe
      const freqs = [130.81, 164.81, 196.00]; // C3, E3, G3
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'triangle'; // triangle is softer
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 2.5);
        
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'cannabis': {
      // Ethereal wide chords
      const freqs = [130.81, 196.00, 261.63, 329.63]; // C Major 7th
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 4);
        
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'stimulants': {
      // Bright but relaxing, like a soft twinkling marimba/rhodes
      const freqs = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine'; // keep it chill
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.02, now + 2);
        
        // Soft tremolo
        const lfo = audioCtx!.createOscillator();
        const lfoGain = audioCtx!.createGain();
        lfo.type = 'sine';
        lfo.frequency.value = 4; // Gentle pulse, not frantic
        lfoGain.gain.value = 0.01;
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        lfo.start(now);
        
        osc.start(now);
        currentNodes.push({ osc, gain });
        currentNodes.push({ osc: lfo, gain: lfoGain });
      });
      break;
    }
    case 'recovery': {
      // Warm, soothing singing bowl tones
      const freqs = [432, 544.29];
      freqs.forEach(freq => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 5);
        
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
    case 'joy': {
      // Radiant, high, bright continuous chords
      const freqs = [587.33, 739.99, 880.00, 1174.66]; // D Major high
      freqs.forEach((freq, i) => {
        const osc = audioCtx!.createOscillator();
        const gain = audioCtx!.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(masterGain!);
        
        gain.gain.setValueAtTime(0, now);
        // Stagger the fade in
        gain.gain.linearRampToValueAtTime(0.04, now + 2 + (i * 1.5));
        
        osc.start(now);
        currentNodes.push({ osc, gain });
      });
      break;
    }
  }
};
