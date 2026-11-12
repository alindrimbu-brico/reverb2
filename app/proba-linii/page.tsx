import type { Metadata } from "next";
import HomeClient from "../HomeClient";

// PAGINĂ DE PROBĂ (12 nov 2026): prima pagină, cu „linia care merge” pusă în zone diferite, ca Alin să compare și să aleagă.
// Nu e legată din niciun meniu și nu se indexează. Prima pagină reală (`/`) nu are nimic din ce e aici.
// Se șterge (împreună cu modul `proba` din HomeClient și cu lib/outlineRun/probaRo.ts) după ce Alin alege.
export const metadata: Metadata = {
  title: "Probă linii — Reverb Digital",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function ProbaLiniiPage() {
  return <HomeClient proba />;
}
