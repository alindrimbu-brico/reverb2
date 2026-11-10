import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBeams from "@/components/AmbientBeams";
import MechanicalInteractions from "@/components/MechanicalInteractions";
import BackgroundWatermarkLogo from "@/components/BackgroundWatermarkLogo";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL, TITLE_TEMPLATE } from "@/lib/seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: "Reverb" };

export const metadata: Metadata = {
  title: { default: "Reverb — Structură, execuție, rezultate", template: TITLE_TEMPLATE },
  description:
    "Structură, execuție, rezultate. Website, magazine online, marketing digital. Fără jargon. Fără haos.",
  // Toate adresele relative din metadata (canonical, hreflang, og:image) se rezolvă față de aceasta.
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Reverb",
    title: "Reverb — Structură, execuție, rezultate",
    description:
      "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverb — Structură, execuție, rezultate",
    description:
      "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură.",
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site-manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  // Canonicalul NU se pune aici: fiecare pagină își declară canonicalul ei
  // (altfel toate paginile ar moșteni adresa primei pagini).
  // Codul de verificare Google Search Console se pune în Vercel ca variabilă
  // de mediu (NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION), fără modificări de cod.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Reverb",
      alternateName: ["Reverb.ro", "Reverb Digital"],
      url: SITE_URL,
      logo: `${SITE_URL}/og.jpg`,
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
        telephone: "+40767235693",
        email: "reverb@reverb.ro",
        contactType: "customer service",
        availableLanguage: ["Romanian", "English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Reverb",
      alternateName: "Reverb.ro",
      url: SITE_URL,
      inLanguage: "ro",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={geist.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  window.__reverbDeferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    window.__reverbDeferredPrompt = e;
    try {
      var isStudio = location.pathname.indexOf('/studio') === 0;
      localStorage.removeItem(isStudio ? 'reverb_pwa_installed_studio_v3' : 'reverb_pwa_installed_site_v3');
    } catch(err) {}
    window.dispatchEvent(new CustomEvent('reverb-pwa-ready'));
  });
  window.addEventListener('appinstalled', function() {
    window.__reverbDeferredPrompt = null;
    try {
      var isStudio = location.pathname.indexOf('/studio') === 0;
      localStorage.setItem(isStudio ? 'reverb_pwa_installed_studio_v3' : 'reverb_pwa_installed_site_v3', '1');
    } catch(err) {}
    window.dispatchEvent(new CustomEvent('reverb-pwa-installed'));
  });
  if ('serviceWorker' in navigator) {
    var regSw = function() {
      var isStudio = location.pathname.indexOf('/studio') === 0;
      var swUrl = isStudio ? '/studio/sw.js' : '/sw.js';
      var swScope = isStudio ? '/studio' : '/';
      navigator.serviceWorker.register(swUrl, { scope: swScope }).catch(function(){});
    };
    if (document.readyState === 'complete') { regSw(); }
    else { window.addEventListener('load', regSw); }
  }
})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AmbientBeams />
        <BackgroundWatermarkLogo />
        <MechanicalInteractions />
        <ScrollProgress />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
