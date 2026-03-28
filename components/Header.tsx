"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const nav = [
  { href: "/despre", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
  { href: "/showcase", label: "Showcase" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d2731]/8 bg-[#f5f1ea]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/12 bg-white/70 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(29,39,49,0.15)] group-hover:-translate-y-0.5 text-[#1d2731]">
            <Logo size={28} />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] uppercase text-[#1d2731] transition-colors duration-300">reverb.ro</div>
            <div className="text-[9px] uppercase tracking-widest font-bold text-[#1d2731]/50">Claritate & Structură</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-300 text-xs uppercase tracking-widest font-semibold hover:text-[#1d2731] ${
                pathname === href ? "text-[#1d2731]" : "text-[#1d2731]/50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="ml-2 inline-flex items-center justify-center rounded-full border border-[#1d2731] bg-transparent hover:bg-[#1d2731]/5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1d2731] transition-all duration-300 hover:-translate-y-0.5"
          >
            Client Login
          </Link>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#1d2731] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#f5f1ea] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(29,39,49,0.2)] hover:shadow-[0_10px_20px_rgba(29,39,49,0.4)]"
          >
            Start Proiect
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white/60 md:hidden transition-transform duration-300 hover:scale-105"
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
              className={`block py-3 text-sm uppercase tracking-widest font-bold transition-colors ${
                pathname === href ? "text-[#1d2731]" : "text-[#1d2731]/60"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#1d2731] py-3 text-xs font-bold uppercase tracking-widest text-[#1d2731] hover:bg-[#1d2731]/5 transition-colors"
          >
            Client Login
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] py-3 text-xs font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
          >
            Start Proiect
          </Link>
        </div>
      )}
    </header>
  );
}
