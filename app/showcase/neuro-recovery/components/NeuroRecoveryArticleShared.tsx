"use client";

import { usePathname } from "next/navigation";
import ArticleLayout from "./ArticleLayout";
import GlobalAudioToggle from "./GlobalAudioToggle";
import InteractiveVideoPlayer from "./InteractiveVideoPlayer";
import { translationStrings, getLocaleFromPath } from "./translations";

interface NeuroRecoveryArticleSharedProps {
  slug: string;
}

const pageConfigs: Record<string, { themeName: any; accentColor: string; imageSrc: string }> = {
  "pleasure": { themeName: "alcohol", accentColor: "#ef4444", imageSrc: "/images/pleasure.jpg" },
  "happiness": { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/happiness.jpg" },
  "joy-soul": { themeName: "joy", accentColor: "#eab308", imageSrc: "/images/joy-soul.jpg" },
  "ecstasy": { themeName: "joy", accentColor: "#d946ef", imageSrc: "/images/ecstasy.jpg" },
  "epigenetics-gabor-mate": { themeName: "chaos", accentColor: "#a855f7", imageSrc: "/images/epigenetics.jpg" },
  "collective-trauma-hpa": { themeName: "chaos", accentColor: "#ef4444", imageSrc: "/images/collective-trauma.jpg" },
  "human-connection": { themeName: "recovery", accentColor: "#f43f5e", imageSrc: "/images/human-connection.jpg" },
  "medical-shield": { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/homeostasis-simulation.jpg" },
  "neuroplasticity": { themeName: "recovery", accentColor: "#a855f7", imageSrc: "/images/homeostasis-simulation.jpg" },
  "roots": { themeName: "chaos", accentColor: "#a855f7", imageSrc: "/images/epigenetics.jpg" },
  "homeostasis": { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/homeostasis-simulation.jpg" },
  "brain-balance": { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/homeostasis-simulation.jpg" },
  "recovery": { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/homeostasis-simulation.jpg" },
  "alcohol": { themeName: "alcohol", accentColor: "#ef4444", imageSrc: "/images/pleasure.jpg" },
  "cannabis": { themeName: "cannabis", accentColor: "#10b981", imageSrc: "/images/happiness.jpg" },
  "stimulants": { themeName: "stimulants", accentColor: "#f59e0b", imageSrc: "/images/collective-trauma.jpg" }
};

export default function NeuroRecoveryArticleShared({ slug }: NeuroRecoveryArticleSharedProps) {
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  
  const config = pageConfigs[slug] || { themeName: "recovery", accentColor: "#3b82f6", imageSrc: "/images/homeostasis-simulation.jpg" };
  const strings = translationStrings[slug]?.[locale];

  if (!strings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white font-mono text-xs uppercase tracking-widest">
        Translation not found for slug: {slug} [locale: {locale}]
      </div>
    );
  }

  return (
    <>
      <ArticleLayout themeName={config.themeName} accentColor={config.accentColor}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {strings.title}
        </h1>
        <p className="text-xl font-light leading-relaxed mb-12 border-l-4 pl-6" style={{ borderColor: config.accentColor }}>
          {strings.subtitle}
        </p>

        <div className="space-y-12">
          {/* Loopative Cinematic Simulated Meditation Video Player */}
          <InteractiveVideoPlayer 
            imageSrc={config.imageSrc} 
            themeColor={config.accentColor} 
            title={strings.title.split(" — ")[0]} 
          />

          {/* Section 1 */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed font-light">
              {strings.p1}
            </p>
            {strings.p2 && (
              <p className="text-sm leading-relaxed font-light">
                {strings.p2}
              </p>
            )}
            {strings.p3 && (
              <p className="text-sm leading-relaxed font-light">
                {strings.p3}
              </p>
            )}
            {strings.p4 && (
              <p className="text-sm leading-relaxed font-light">
                {strings.p4}
              </p>
            )}
          </div>

          {/* Quote Section */}
          {strings.quote && (
            <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800/60 backdrop-blur-md flex flex-col gap-3 items-start relative overflow-hidden">
              <span className="text-4xl font-serif text-neutral-600/30 absolute -top-2 left-2">“</span>
              <p className="text-sm text-neutral-200 font-light italic relative z-10 pl-6 leading-relaxed">
                {strings.quote}
              </p>
              {strings.quoteAuthor && (
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 self-end">
                  — {strings.quoteAuthor}
                </span>
              )}
            </div>
          )}
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
