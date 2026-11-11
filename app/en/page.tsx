import type { Metadata } from "next";
import HomeClientEn from "./HomeClientEn";

// The home page is a client component (HomeClientEn.tsx); metadata can only be declared
// from a server file, so it lives here: its own canonical and its own title.
export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { ro: "/", en: "/en", "x-default": "/" } },
  title: "Websites and online stores for new businesses",
  description:
    "We take a business from zero to its first sale: a fast website or online store, daily AI video content and optimisation for search in ChatGPT, Perplexity and Gemini. Fixed prices.",
};

export default function Page() {
  return <HomeClientEn />;
}
