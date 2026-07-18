import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "O explorare interactivă a dopaminei, a dependenței și a arhitecturii bucuriei.",
};

import GlobalAudioToggle from "./components/GlobalAudioToggle";
import ScrollToTop from "./components/ScrollToTop";

export default function NeuroRecoveryLayout({
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
