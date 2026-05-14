import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLumina — Reverb.ro",
  description: "O explorare interactivă a dopaminei, a dependenței și a arhitecturii bucuriei.",
};

export default function NeuroRecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
