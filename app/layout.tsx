import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Reverb — Human Digital Marketing AI", template: "%s | Reverb" },
  description:
    "Reverb construiește infrastructură digitală pentru IMM-uri: site-uri, magazine online și sisteme de marketing în care omul și AI-ul lucrează împreună. Claritate, structură, rezultate.",
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
