import { pageMeta, sectionTitle } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
// Layout-ul are articole sub el, de aceea titlul e de secțiune (păstrează șablonul „| Reverb”).
export const metadata = pageMeta({
  title: sectionTitle("Blog spiritual: showcase cu 101 eseuri filosofice"),
  description: "Demonstrație Reverb de blog spiritual: eseuri despre subconștient, auto-sabotaj și fericire, într-un design contemplativ.",
  path: "/showcase/spiritual-blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
