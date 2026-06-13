"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(0,229,255,0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-[#00E5FF]/25 bg-[#080810]/90 backdrop-blur-sm transition-colors hover:bg-[#00E5FF]/10"
        >
          <ArrowUp size={16} className="text-[#00E5FF]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
