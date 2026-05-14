"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { initAudioEngine, stopAudioEngine, isAudioEnabled } from "./AudioEngine";
import { motion } from "framer-motion";

export default function GlobalAudioToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Sync state if it was changed externally
    const interval = setInterval(() => {
      if (enabled !== isAudioEnabled) {
        setEnabled(isAudioEnabled);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [enabled]);

  const toggleAudio = () => {
    if (enabled) {
      stopAudioEngine();
      setEnabled(false);
    } else {
      initAudioEngine();
      setEnabled(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
      onClick={toggleAudio}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-700 backdrop-blur-md border ${
        enabled 
          ? "bg-transparent text-neutral-500 border-transparent hover:bg-neutral-900/10 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white opacity-40 hover:opacity-100" 
          : "bg-white/50 text-neutral-800 border-neutral-200/50 hover:bg-white dark:bg-neutral-900/50 dark:text-neutral-200 dark:border-neutral-800 shadow-lg animate-pulse"
      }`}
      aria-label="Toggle Audio"
    >
      {enabled ? (
        <Volume2 strokeWidth={1.5} className="w-5 h-5 transition-transform hover:scale-110" />
      ) : (
        <VolumeX strokeWidth={1.5} className="w-5 h-5" />
      )}
    </motion.button>
  );
}
