"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "dark" | "light";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function NeuroluminaThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  useEffect(() => {
    // Read the stored preference on mount
    const saved = localStorage.getItem("neurolumina-theme") as ThemeMode | null;
    if (saved === "light" || saved === "dark") {
      setThemeState(saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    localStorage.setItem("neurolumina-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-mode" : "dark-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useNeuroluminaTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useNeuroluminaTheme must be used within a NeuroluminaThemeProvider");
  }
  return context;
}
