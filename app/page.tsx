import type { Metadata } from "next";
import HomeClient from "./HomeClient";

// Pagina de pornire e o componentă client (HomeClient.tsx); metadata se poate declara
// doar dintr-un fișier server, de aceea stă aici: canonical propriu și titlu propriu.
export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { ro: "/", en: "/en", "x-default": "/" } },
  title: { absolute: "Reverb — Site-uri și magazine, de la lansare la scalare" },
  description:
    "Site-uri, magazine online și clipuri video, de la lansare la scalare. Optimizate pentru Google și asistenții AI. Prețuri clare, stabilite de la început.",
};

export default function Page() {
  return <HomeClient />;
}
