import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Reverb — Structură, execuție, rezultate", template: "%s | Reverb" },
  description:
    "Structură, execuție, rezultate. Website, magazine online, marketing digital. Fără jargon. Fără haos.",
  metadataBase: new URL("https://reverb.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://reverb.ro",
    siteName: "Reverb.ro",
    title: "Reverb — Structură, execuție, rezultate",
    description:
      "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverb — Structură, execuție, rezultate",
    description:
      "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://reverb.ro",
    languages: { "en": "https://reverb.ro/en" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reverb.ro",
  url: "https://reverb.ro",
  logo: "https://reverb.ro/favicon.ico",
  description:
    "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Măgura 57 F",
    addressLocality: "Focșani",
    addressRegion: "Vrancea",
    postalCode: "620157",
    addressCountry: "RO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+40737478238",
    email: "reverb@reverb.ro",
    contactType: "customer service",
    availableLanguage: ["Romanian", "English"],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={geist.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
