import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "An interactive exploration of dopamine, addiction, and the architecture of joy.",
};

import GlobalAudioToggle from "./components/GlobalAudioToggle";
import ScrollToTop from "./components/ScrollToTop";

export default function NeuroRecoveryLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <GlobalAudioToggle />
      <ScrollToTop />
    </>
  );
}
