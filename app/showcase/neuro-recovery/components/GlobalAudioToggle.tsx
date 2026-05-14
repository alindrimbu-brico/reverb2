"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX, Repeat, Repeat1 } from "lucide-react";
import { initAudioEngine, stopAudioEngine, isAudioEnabled, isAutoPlayEnabled, setAutoPlay } from "./AudioEngine";
import { motion } from "framer-motion";

export default function GlobalAudioToggle() {
  const [enabled, setEnabled] = useState(false);
  const [autoPlay, setAutoPlayState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (enabled !== isAudioEnabled()) {
        setEnabled(isAudioEnabled());
      }
      if (autoPlay !== isAutoPlayEnabled()) {
        setAutoPlayState(isAutoPlayEnabled());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [enabled, autoPlay]);

  const toggleAudio = () => {
    if (enabled) {
      stopAudioEngine();
      setEnabled(false);
    } else {
      initAudioEngine();
      setEnabled(true);
    }
  };

  const toggleAutoPlay = () => {
    const newVal = !autoPlay;
    setAutoPlay(newVal);
    setAutoPlayState(newVal);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-full shadow-2xl border border-neutral-200 dark:border-neutral-800 p-1"
    >
      <button
        onClick={toggleAutoPlay}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
          autoPlay 
            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
            : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
        }`}
      >
        {autoPlay ? <Repeat className="w-3.5 h-3.5" /> : <Repeat1 className="w-3.5 h-3.5" />}
        <span>Auto: {autoPlay ? "ON" : "OFF"}</span>
      </button>

      <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-1"></div>

      <button
        onClick={toggleAudio}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
          enabled 
            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" 
            : "text-rose-500 dark:text-rose-400"
        }`}
      >
        {enabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        <span>{enabled ? "Mute" : "Unmute"}</span>
      </button>
    </motion.div>
  );
}
