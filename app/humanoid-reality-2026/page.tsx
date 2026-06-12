import type { Metadata } from "next";
import HumanoidSite from "@/components/humanoid/HumanoidSite";

export const metadata: Metadata = {
  title: "Realitatea Umanoidă 2026 — De la Science Fiction la Realitate Industrială",
  description:
    "Hardware-ul este gata. Modelele AI preiau controlul. Costul operațional a ajuns la 2$/oră. Descoperă economia de 4 Trilioane $ care redefinește industria globală în 2026.",
  openGraph: {
    title: "Realitatea Umanoidă 2026",
    description:
      "De la Science Fiction la Realitate Industrială. Piața de 750 Miliarde $, liderii AI, VLA models și ghidul de supraviețuire pentru companii.",
    type: "website",
  },
};

export default function HumanoidRealityPage() {
  return <HumanoidSite />;
}
