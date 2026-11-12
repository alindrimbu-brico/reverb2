import type { Metadata } from "next";
import HomeClient from "../HomeClient";

// PAGINĂ DE PROBĂ (13 nov 2026): prima pagină în modul `proba`, ca Alin să compare și să aleagă: liniuțe pe rândul alb al titlului mare,
// verde lângă alb pe titlurile din caseta GEO, colțul etichetelor la trei valori. Nu e legată din niciun meniu și nu se indexează.
// Se șterge (împreună cu modul `proba` din HomeClient și cu intrările „/proba-linii” din lib/routes.ts și scripts/check-seo.mjs) după ce alege.
export const metadata: Metadata = {
  title: "Probă linii — Reverb Digital",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

export default function ProbaLiniiPage() {
  return <HomeClient proba />;
}
