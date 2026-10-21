import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Performanță de vârf: cei mai avansați roboți umanoizi din 2026",
  description: "Mobilitate, sarcină utilă și autonomie: comparația modelelor de top din robotica umanoidă și ce aduc în logistică și producție.",
  path: "/humanoid-reality-2026/peak-performance",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
