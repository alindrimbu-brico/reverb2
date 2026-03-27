import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Reverb — Human Digital Marketing AI", template: "%s | Reverb" },
  description:
    "Construim prezență online care inspiră încredere și generează cereri. Website, magazine online, marketing digital — structură, execuție, rezultate. Fără jargon. Fără haos.",
  metadataBase: new URL("https://reverb.ro"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={geist.variable}>
      <head>
        <script src="https://nevronix.ai/nevronix-sdk.js" />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://nevronix.ai/nevronix-sdk.js" strategy="afterInteractive" />
        <Script id="nevronix-init" strategy="afterInteractive">{`
          NevronixAI.init({
            apiUrl: 'https://platform.nevronix.ai?id=59&s=efb92348-b235-4209-974e-4f8a69b14dee',
            position: 'bottom-right',
            iframeWidth: '340px',
            iframeHeight: '340px',
            iframeMobileWidth: '300px',
            iframeMobileHeight: '300px',
            buttonText: 'Hi! Click here to start a conversation',
          });
        `}</Script>
      </body>
    </html>
  );
}
