import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Linie } from "@/components/RunningLine";
import WhoWeAre, { AGENCY_DEF } from "@/components/WhoWeAre";
import { inProduction, liveProjectsEn, STATUS_LABEL } from "@/lib/liveProjects";
import WorkShots from "@/components/WorkShots";

const work = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"]
  .map((n) => liveProjectsEn.find((p) => p.name === n))
  .filter((p) => !!p);

// The "About" page: data only, mirroring app/despre/page.tsx. The definition comes from components/WhoWeAre.tsx,
// the figures and names from lib/liveProjects.ts. The partner appears in the footer only.

export const metadata: Metadata = {
  alternates: { canonical: "/en/about", languages: { ro: "/despre", en: "/en/about", "x-default": "/despre" } },
  title: "About Us — Reverb Digital",
  description:
    "Reverb Digital, a digital marketing agency in Focșani, Romania: we build, promote and manage websites, online stores and apps.",
};

const BTN =
  "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-xs font-mono uppercase tracking-wider text-neutral-200 transition hover:bg-white hover:text-black";

export default function AboutPageEN() {
  const managed = liveProjectsEn.filter((p) => p.state === "managed");
  const wip = liveProjectsEn.length - inProduction(liveProjectsEn);

  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">

      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Definition and company data */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] sm:tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>About us</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>{AGENCY_DEF.en.what}</Linie>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-300 font-light leading-relaxed">
              {AGENCY_DEF.en.does}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <WhoWeAre lang="en" center showDef={false} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The portfolio in figures */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            <Linie>Portfolio.</Linie>
          </h2>
        </Reveal>

        <div className={`mt-12 grid gap-6 ${wip > 0 ? "sm:grid-cols-2" : ""}`}>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
            <div className="font-mono text-5xl font-light text-white">{managed.length}</div>
            <div className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-300">{STATUS_LABEL.en.managed}</div>
          </div>
          {wip > 0 && (
            <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
              <div className="font-mono text-5xl font-light text-white">{wip}</div>
              <div className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-300">
                {wip === 1 ? STATUS_LABEL.en.in_progress : "Projects in progress"}
              </div>
            </div>
          )}
        </div>

        {/* Three projects with a picture, the same as on the home page. */}
        <div className="mt-6 text-left">
          <WorkShots items={work} lang="en" />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/en/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-center text-xs font-mono uppercase tracking-wider text-black font-bold transition hover:bg-neutral-200"
          >
            Full portfolio →
          </Link>
          <Link href="/en/services" className={BTN}>Services and prices →</Link>
          <Link href="/en/contact" className={BTN}>Contact →</Link>
        </div>
      </section>

    </div>
  );
}
