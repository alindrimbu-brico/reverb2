import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/confidentialitate",
    languages: { ro: "/confidentialitate", en: "/en/privacy", "x-default": "/confidentialitate" },
  },
  title: "Confidențialitate",
  description: "Ce date strânge reverb.ro, de ce, cât le păstrăm și cum ne ceri să le ștergem. Fără cookie-uri.",
};

export default function ConfidentialitatePage() {
  return <PrivacyContent lang="ro" />;
}
