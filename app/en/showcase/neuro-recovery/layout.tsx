import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "An interactive exploration of dopamine, addiction, and the architecture of joy.",
};

export default function NeuroRecoveryLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
