"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setTheme } from "./AudioEngine";

interface ArticleLayoutProps {
  themeName: 'chaos' | 'withdrawal' | 'alcohol' | 'cannabis' | 'stimulants' | 'recovery' | 'joy';
  children: React.ReactNode;
  accentColor: string;
}

export default function ArticleLayout({ themeName, children, accentColor }: ArticleLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When the article loads, try to play its theme (if AutoMode is ON)
    setTheme(themeName);
  }, [themeName]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-purple-900/50">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 opacity-20"
        >
          <div 
            className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] mix-blend-screen"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/showcase/neuro-recovery"
          className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm tracking-widest uppercase">Înapoi la Ecosistem</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert prose-lg md:prose-xl max-w-none 
                     prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl md:prose-h1:text-6xl prose-h1:mb-12
                     prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-neutral-100
                     prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-neutral-300
                     prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:mb-8
                     prose-strong:text-neutral-200"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
