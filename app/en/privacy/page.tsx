import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en/privacy",
    languages: { ro: "/confidentialitate", en: "/en/privacy", "x-default": "/confidentialitate" },
  },
  title: "Privacy",
  description: "What data reverb.ro collects, why, how long we keep it and how to ask us to delete it. No cookies.",
};

export default function PrivacyPage() {
  return <PrivacyContent lang="en" />;
}
