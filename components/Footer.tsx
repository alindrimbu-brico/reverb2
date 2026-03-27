import Link from "next/link";
import Logo from "@/components/Logo";

const nav = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre" },
  { href: "/servicii", label: "Servicii" },
  { href: "/magazine-online", label: "Magazine Online" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1d2731]/8 bg-[#f2eee7]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d2731]/12 bg-white/70 text-[#1d2731]">
                <Logo size={26} />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.35em] uppercase text-[#1d2731]">reverb.ro</div>
                <div className="text-xs text-[#1d2731]/55">Structură · Sens · Rezultate</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-6 text-[#1d2731]/60">
              Reverb — reîntoarcerea la esența digitală. Structură, precizie, frumusețe funcțională.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#1d2731]/65 sm:grid-cols-3 md:flex md:flex-wrap md:gap-x-8 md:gap-y-3">
            {nav.map(({ href, label }) => (
              <Link key={href} href={href} className="transition hover:text-[#1d2731]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#1d2731]/8 pt-6 flex flex-col gap-2 text-xs text-[#1d2731]/40 md:flex-row md:justify-between">
          <span>&copy; 2026 reverb.ro &mdash; Toate drepturile rezervate.</span>
          <span>Omul gândește. AI-ul execută. Reverb livrează.</span>
        </div>
      </div>
    </footer>
  );
}
