"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setTheme, playTransitionSound, playGeneralClickSound } from "./AudioEngine";
import { useNeuroluminaTheme } from "./ThemeContext";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "./translations";

interface ArticleLayoutProps {
  themeName: 'chaos' | 'withdrawal' | 'alcohol' | 'cannabis' | 'stimulants' | 'recovery' | 'joy';
  children: React.ReactNode;
  accentColor: string;
}

const shareTexts: Record<string, string> = {
  ro: "Distribuiți această sinapsă:",
  en: "Share this synapse:",
  es: "Compartir esta sinapsis:",
  pt: "Compartilhar esta sinapse:",
  ru: "Поделиться синапсом:",
  zh: "分享此突触："
};

const copiedTexts: Record<string, string> = {
  ro: "Copiat!",
  en: "Copied!",
  es: "¡Copiado!",
  pt: "Copiado!",
  ru: "Скопировано!",
  zh: "已复制！"
};

export default function ArticleLayout({ themeName, children, accentColor }: ArticleLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useNeuroluminaTheme();
  const isDark = theme === "dark";
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareTitle = typeof window !== "undefined" ? encodeURIComponent(document.title) : "";

  useEffect(() => {
    // When the article loads, try to play its theme (if AutoMode is ON)
    setTheme(themeName);
    playTransitionSound();
  }, [themeName]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleCopyLink = () => {
    playGeneralClickSound();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen transition-colors duration-700 ease-in-out selection:bg-rose-500/20 ${
        isDark 
          ? "bg-neutral-950 text-neutral-200" 
          : "bg-[#FFFDF9] text-stone-800"
      }`}
    >
      
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
        {isDark && (
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        )}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/showcase/neuro-recovery"
          onClick={() => playGeneralClickSound()}
          className={`inline-flex items-center space-x-2 mb-12 transition-colors group ${
            isDark ? "text-neutral-400 hover:text-white" : "text-stone-500 hover:text-stone-900"
          }`}
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm tracking-widest uppercase">Înapoi la Ecosistem</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`prose prose-lg md:prose-xl max-w-none transition-colors duration-700
                     prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl md:prose-h1:text-6xl prose-h1:mb-12
                     prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                     prose-h3:text-xl md:prose-h3:text-2xl
                     prose-p:leading-relaxed prose-p:mb-8
                     ${
                       isDark 
                         ? "prose-invert prose-headings:text-neutral-100 prose-h2:text-neutral-100 prose-h3:text-neutral-300 prose-p:text-neutral-400 prose-strong:text-neutral-200" 
                         : "text-stone-850 prose-headings:text-stone-900 prose-h2:text-stone-900 prose-h3:text-stone-850 prose-p:text-stone-650 prose-strong:text-stone-950"
                     }`}
        >
          {children}
        </motion.div>

        {/* Share buttons section */}
        <hr className={`border-t my-16 ${isDark ? "border-neutral-800" : "border-stone-200"}`} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            {shareTexts[locale] || shareTexts.en}
          </span>
          <div className="flex items-center gap-3">
            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playGeneralClickSound()}
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm ${
                isDark 
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white hover:scale-105" 
                  : "border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:scale-105"
              }`}
              aria-label="Share on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

            {/* X / Twitter Share */}
            <a
              href={`https://x.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playGeneralClickSound()}
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm ${
                isDark 
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white hover:scale-105" 
                  : "border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:scale-105"
              }`}
              aria-label="Share on X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playGeneralClickSound()}
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm ${
                isDark 
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white hover:scale-105" 
                  : "border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:scale-105"
              }`}
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm ${
                isDark 
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white hover:scale-105" 
                  : "border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:scale-105"
              }`}
              aria-label="Copy Link"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.svg 
                    key="check"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="w-4 h-4 text-emerald-500 stroke-current stroke-2 fill-none" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </motion.svg>
                ) : (
                  <motion.svg 
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="w-4 h-4 stroke-current stroke-2 fill-none" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </motion.svg>
                )}
              </AnimatePresence>

              {/* Copied Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -35, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded shadow-lg pointer-events-none"
                  >
                    {copiedTexts[locale] || copiedTexts.en}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
