import type { Metadata } from "next";
import HomeClientEn from "./HomeClientEn";

// The home page is a client component (HomeClientEn.tsx); metadata can only be declared
// from a server file, so it lives here: its own canonical and its own title.
export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { ro: "/", en: "/en", "x-default": "/" } },
  title: "Websites and online stores, from launch to scale",
  description:
    "Websites, online stores and video, from launch to scale. Optimised for Google and AI assistants. Clear prices, set from the start.",
};

export default function Page() {
  return <HomeClientEn />;
}
