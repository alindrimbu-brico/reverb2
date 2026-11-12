"use client";

// Legătură internă care închide diafragma înainte de plecare („când se închide pagina”).
// Folosește onNavigate al lui <Link> (Next 16): rulează doar la navigarea în aplicație, deci Ctrl + clic,
// clicul din mijloc și deschiderea în filă nouă merg ca de obicei. Cu mecanica oprită sau cu mișcare redusă
// nu intervine deloc.

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { useMech } from "./MechProvider";

type Props = Omit<ComponentProps<typeof Link>, "href" | "onNavigate"> & { href: string };

export default function MechLink({ href, children, ...rest }: Props) {
  const { active, shutter, closeShutter } = useMech();
  const router = useRouter();
  return (
    <Link
      href={href}
      {...rest}
      onNavigate={(e) => {
        if (!active) return;
        e.preventDefault();
        if (shutter === "closing") return; // al doilea clic în timpul închiderii
        router.prefetch(href);
        closeShutter().then(() => router.push(href));
      }}
    >
      {children}
    </Link>
  );
}
