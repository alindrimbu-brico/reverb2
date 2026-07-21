import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "Интерактивное исследование дофамина, зависимости и архитектуры радости.",
};

import GlobalAudioToggle from "../../../showcase/neuro-recovery/components/GlobalAudioToggle";
import ScrollToTop from "../../../showcase/neuro-recovery/components/ScrollToTop";
import { NeuroluminaThemeProvider } from "../../../showcase/neuro-recovery/components/ThemeContext";
import ThemeSwitcher from "../../../showcase/neuro-recovery/components/ThemeSwitcher";
import NeuroluminaFooter from "../../../showcase/neuro-recovery/components/NeuroluminaFooter";

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
