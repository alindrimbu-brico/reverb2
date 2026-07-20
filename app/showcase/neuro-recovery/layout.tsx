import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "O explorare interactivă a dopaminei, a dependenței și a arhitecturii bucuriei.",
};

import GlobalAudioToggle from "./components/GlobalAudioToggle";
import ScrollToTop from "./components/ScrollToTop";
import { NeuroluminaThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import NeuroluminaFooter from "./components/NeuroluminaFooter";

export default function NeuroRecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NeuroluminaThemeProvider>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="flex-1">
          {children}
        </main>
        <NeuroluminaFooter />
      </div>
      <ThemeSwitcher />
      <GlobalAudioToggle />
      <ScrollToTop />
    </NeuroluminaThemeProvider>
  );
}
