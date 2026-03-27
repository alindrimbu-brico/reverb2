import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Reverb — Afaceri Digitale cu Structură, Sens și Rezultate", template: "%s | Reverb" },
  description:
    "Reverb construiește afaceri digitale cu structură, sens și rezultate reale: site-uri, magazine online și sisteme de marketing fără zgomot.",
  metadataBase: new URL("https://reverb.ro"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={geist.variable}>
      <body>
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
