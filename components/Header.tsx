"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const nav = [
  { href: "/despre", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
  { href: "/magazine-online", label: "Magazine Online" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d2731]/8 bg-[#f5f1ea]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/12 bg-white/70 shadow-sm transition group-hover:shadow-md text-[#1d2731]">
            <Logo size={28} />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] uppercase text-[#1d2731]">reverb.ro</div>
            <div className="text-xs text-[#1d2731]/55">Structură · Sens · Rezultate</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-[#1d2731] ${
                pathname === href ? "font-medium text-[#1d2731]" : "text-[#1d2731]/65"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#1d2731] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Programează un call
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white/60 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[#1d2731] transition-all ${open ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute block h-px w-5 bg-[#1d2731] transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-px w-5 bg-[#1d2731] transition-all ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1d2731]/8 bg-[#f5f1ea] px-6 py-4 md:hidden">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base transition ${
                pathname === href ? "font-medium text-[#1d2731]" : "text-[#1d2731]/70"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] py-3 text-sm font-medium text-white"
          >
            Programează un call
          </Link>
        </div>
      )}
    </header>
  );
}
