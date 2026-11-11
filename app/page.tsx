import type { Metadata } from "next";
import HomeClient from "./HomeClient";

// Pagina de pornire e o componentă client (HomeClient.tsx); metadata se poate declara
// doar dintr-un fișier server, de aceea stă aici: canonical propriu și titlu propriu.
export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { ro: "/", en: "/en", "x-default": "/" } },
  title: { absolute: "Reverb — Site-uri și magazine online pentru afaceri la început" },
  description:
    "Ducem o afacere de la zero la prima vânzare: site sau magazin online rapid, conținut video zilnic cu AI și optimizare pentru căutarea în ChatGPT, Perplexity și Gemini. Prețuri fixe.",
};

export default function Page() {
  return <HomeClient />;
}
