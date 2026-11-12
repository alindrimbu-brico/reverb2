"use client";

// Ferește machetele de regulile de formă ale agenției (13 nov 2026).
// Pe site-ul agenției, orice capsulă cu text (`rounded-full` + padding) e desenată cu colț, iar butoanele se ridică la hover
// (regulile „Pastile cu colț” și „Butoanele se ridică” din app/globals.css). Machetele (`/showcase/<x>`, în orice limbă)
// sunt lucrări separate, cu forma lor: aici primesc `data-keep-pills`, pe care acele reguli îl ocolesc.
// Pagina-listă `/showcase` e a agenției, deci rămâne fără marcaj.
// Folosit din `layout.tsx` al fiecărui dosar `showcase`. `fixed` = marcaj pus mereu (machete aflate în afara `/showcase/`).

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const DEMO = /^\/(?:(?:en|es|pt|ru|zh)\/)?showcase\/[^/]+/;

export default function DemoScope({ children, fixed = false }: { children: ReactNode; fixed?: boolean }) {
  const pathname = usePathname() || "";
  const keep = fixed || DEMO.test(pathname);
  return (
    <div className="contents" data-keep-pills={keep ? "" : undefined}>
      {children}
    </div>
  );
}
