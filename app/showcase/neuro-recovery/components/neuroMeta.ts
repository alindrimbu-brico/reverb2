import type { Metadata } from "next";
import { pageMeta, sectionTitle } from "@/lib/seo";
import { NEURO_LOCALES, NEURO_SLUGS_ALL, neuroPath, type NeuroLocale } from "@/lib/routes";
import { translationStrings } from "./translations";

const INDEX: Record<NeuroLocale, { title: string; description: string }> = {
  ro: { title: "NeuroLumina", description: "O explorare interactivă a dopaminei, a dependenței și a arhitecturii bucuriei." },
  en: { title: "NeuroLumina", description: "An interactive exploration of dopamine, addiction, and the architecture of joy." },
  es: { title: "NeuroLumina", description: "Una exploración interactiva de la dopamina, la adicción y la arquitectura de la alegría." },
  pt: { title: "NeuroLumina", description: "Uma exploração interativa da dopamina, da adicção e da arquitetura da alegria." },
  ru: { title: "NeuroLumina", description: "Интерактивное исследование дофамина, зависимости и архитектуры радости." },
  zh: { title: "NeuroLumina", description: "探索多巴胺、成瘾与喜悦的神经生物学交互之旅。" },
};

/** Articole fără intrare în translationStrings (titlul din pagină). */
const EXTRA: Record<string, Partial<Record<NeuroLocale, { title: string; description: string }>>> = {
  joy: {
    ro: {
      title: "Compendiu de parabole filosofice: de la ego la extaz",
      description: "O colecție de parabole despre deconstrucția hipnozei colective și regăsirea stării naturale de fericire.",
    },
    en: {
      title: "A Compendium of Philosophical Parables: From Ego to Ecstasy",
      description: "A collection of parables on dismantling collective hypnosis and returning to the natural state of happiness.",
    },
  },
};

function languagesFor(slug: string): Record<string, string> {
  const locales: readonly NeuroLocale[] = NEURO_SLUGS_ALL.includes(slug) ? NEURO_LOCALES : ["ro", "en"];
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = neuroPath(l, slug);
  languages["x-default"] = neuroPath("ro", slug);
  return languages;
}

/**
 * Metadata unei pagini NeuroLumina: titlu și descriere în limba paginii,
 * canonical propriu și hreflang spre celelalte limbi.
 * slug = "" (sau lipsă) pentru pagina de start; "substances/alcohol" pentru substanțe.
 * layout = true în layout.tsx-ul secțiunii (păstrează șablonul „| Reverb” pentru paginile de sub el).
 */
export function neuroMeta(locale: NeuroLocale, slug: string = "", { layout = false } = {}): Metadata {
  const key = slug.startsWith("substances/") ? slug.slice("substances/".length) : slug;
  let title: Metadata["title"] = layout ? sectionTitle(INDEX[locale].title) : INDEX[locale].title;
  let description = INDEX[locale].description;

  if (slug) {
    const strings = translationStrings[key]?.[locale];
    const extra = EXTRA[key]?.[locale];
    if (strings) {
      title = strings.title;
      description = strings.subtitle;
    } else if (extra) {
      title = extra.title;
      description = extra.description;
    } else {
      title = `NeuroLumina: ${key}`;
    }
  }

  return pageMeta({ title, description, path: neuroPath(locale, slug), languages: languagesFor(slug) });
}
