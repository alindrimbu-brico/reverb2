"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { initAudioEngine, stopAudioEngine, isAudioEnabled } from "./AudioEngine";
import { motion } from "framer-motion";

export default function GlobalAudioToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (enabled !== isAudioEnabled()) {
        setEnabled(isAudioEnabled());
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
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={toggleAudio}
        className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 backdrop-blur-md border shadow-lg ${
          enabled 
            ? "bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800" 
            : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-transparent animate-pulse"
        }`}
        aria-label="Audio Menu"
      >
        {enabled ? (
          <Volume2 strokeWidth={1.5} className="w-6 h-6" />
        ) : (
          <VolumeX strokeWidth={1.5} className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
