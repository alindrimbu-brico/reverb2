import { neuroMeta } from "@/app/showcase/neuro-recovery/components/neuroMeta";

export const metadata = neuroMeta("en", "", { layout: true });

import GlobalAudioToggle from "./components/GlobalAudioToggle";
import ScrollToTop from "./components/ScrollToTop";
import { NeuroluminaThemeProvider } from "../../../showcase/neuro-recovery/components/ThemeContext";
import ThemeSwitcher from "../../../showcase/neuro-recovery/components/ThemeSwitcher";
import NeuroluminaFooter from "../../../showcase/neuro-recovery/components/NeuroluminaFooter";

export default function NeuroRecoveryLayoutEN({
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
