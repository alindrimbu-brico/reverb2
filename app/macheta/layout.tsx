import type { Metadata } from "next";

// /macheta e o machetă internă de lucru (pagină client, fără metadata proprie):
// rămâne accesibilă, dar nu se indexează și nu intră în sitemap.
export const metadata: Metadata = {
  title: "Machetă internă",
  robots: { index: false, follow: false },
};

export default function MachetaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
