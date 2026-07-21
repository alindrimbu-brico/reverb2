"use client";

import { useNeuroluminaTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "./translations";

const switcherTranslations = {
  ro: { light: "Temă: Light", dark: "Temă: Dark" },
  en: { light: "Theme: Light", dark: "Theme: Dark" },
  es: { light: "Tema: Claro", dark: "Tema: Oscuro" },
  pt: { light: "Tema: Claro", dark: "Tema: Escuro" },
  ru: { light: "Тема: Светлая", dark: "Тема: Темная" },
  zh: { light: "主题：明亮", dark: "主题：暗黑" }
};

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useNeuroluminaTheme();
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  const labels = switcherTranslations[locale];

  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-center justify-center">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={toggleTheme}
        className={`flex items-center justify-center px-4 h-12 rounded-full transition-all duration-500 backdrop-blur-md border shadow-lg ${
          theme === "light"
            ? "bg-amber-500/10 text-amber-700 border-amber-500/20 hover:bg-amber-500/20"
            : "bg-neutral-900/90 text-white border-neutral-800 hover:bg-neutral-800"
        }`}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <>
            <Sun strokeWidth={1.5} className="w-5 h-5 mr-2 text-amber-600 animate-spin-slow" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">{labels.light}</span>
          </>
        ) : (
          <>
            <Moon strokeWidth={1.5} className="w-5 h-5 mr-2 text-indigo-400" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">{labels.dark}</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
