export type Locale = "ro" | "en" | "es" | "pt" | "ru" | "zh";

export interface LevelData {
  id: string;
  title: string;
  desc: string;
  href: string;
  vibrationFreq: string;
}

export const localizedLevels: Record<Locale, LevelData[]> = {
  ro: [
    {
      id: "pleasure",
      title: "Plăcerea (Corpul)",
      desc: "Dependență exterioară. Întărește ego-ul prin sclavie față de obiecte. Vibrații roșu/portocalii.",
      href: "/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "Fericirea (Mintea)",
      desc: "Competiție și viclenie. Frica de pierdere otrăvește orice succes exterior. Valuri portocalii.",
      href: "/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "Bucuria (Sufletul)",
      desc: "Independență absolută. Începe dizolvarea ego-ului prin tăcere și pace interioară. Aurit profund.",
      href: "/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "Extazul (Divinul)",
      desc: "Nirvana. Ego-ul dispare complet; rămâne doar Infinitul. Inocența cosmică absolută.",
      href: "/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ],
  en: [
    {
      id: "pleasure",
      title: "Pleasure (The Body)",
      desc: "External dependence. Strengthens the ego through enslavement to objects. Red/orange vibrations.",
      href: "/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "Happiness (The Mind)",
      desc: "Competition and cunning. Fear of loss poisons all external success. Orange waves.",
      href: "/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "Joy (The Soul)",
      desc: "Absolute independence. Ego dissolution begins through silence and inner peace. Deep gold.",
      href: "/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "Ecstasy (The Divine)",
      desc: "Nirvana. The ego disappears completely; only the Infinite remains. Absolute cosmic innocence.",
      href: "/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ],
  es: [
    {
      id: "pleasure",
      title: "El Placer (El Cuerpo)",
      desc: "Dependencia externa. Fortalece el ego mediante la esclavitud a los objetos. Vibraciones rojas/naranjas.",
      href: "/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "La Felicidad (La Mente)",
      desc: "Competencia y astucia. El miedo a la pérdida envenena todo éxito externo. Ondas naranjas.",
      href: "/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "La Alegría (El Alma)",
      desc: "Independencia absoluta. Comienza la disolución del ego a través del silencio y la paz interior. Oro profundo.",
      href: "/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "El Éxtasis (Lo Divino)",
      desc: "Nirvana. El ego desaparece por completo; solo queda el Infinito. Inocencia cósmica absoluta.",
      href: "/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ],
  pt: [
    {
      id: "pleasure",
      title: "O Prazer (O Corpo)",
      desc: "Dependência externa. Fortalece o ego através da escravidão aos objetos. Vibrações vermelhas/laranjas.",
      href: "/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "A Felicidade (A Mente)",
      desc: "Competição e astúcia. O medo da perda envenena todo o sucesso externo. Ondas laranja.",
      href: "/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "A Alegria (A Alma)",
      desc: "Independência absoluta. Começa a dissolução do ego através do silêncio e da paz interior. Ouro profissional / profundo.",
      href: "/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "O Êxtase (O Divino)",
      desc: "Nirvana. O ego desaparece completamente; resta apenas o Infinito. Inocência cósmica absoluta.",
      href: "/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ],
  ru: [
    {
      id: "pleasure",
      title: "Удовольствие (Тело)",
      desc: "Внешняя зависимость. Укрепляет эго через рабство перед вещами. Красно-оранжевые вибрации.",
      href: "/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "Счастье (Разум)",
      desc: "Соперничество и хитрость. Страх потери отравляет любой внешний успех. Оранжевые волны.",
      href: "/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "Радость (Душа)",
      desc: "Абсолютная независимость. Растворение эго начинается через тишину и внутренний покой. Глубокое золото.",
      href: "/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "Экстаз (Божественное)",
      desc: "Нирвана. Эго полностью исчезает, остается только Бесконечность. Абсолютная космическая чистота.",
      href: "/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ],
  zh: [
    {
      id: "pleasure",
      title: "愉悦（身体）",
      desc: "外部依赖。通过对物品的奴役来增强自我。红色/橙色振动。",
      href: "/zh/showcase/neuro-recovery/pleasure",
      vibrationFreq: "alcohol"
    },
    {
      id: "happiness",
      title: "快乐（精神）",
      desc: "竞争与狡黠。对失去的恐惧毒害了所有的外部成功。橙色波浪。",
      href: "/zh/showcase/neuro-recovery/happiness",
      vibrationFreq: "stimulants"
    },
    {
      id: "joy",
      title: "喜悦（灵魂）",
      desc: "绝对独立。自我溶解开始于宁静与内在和平。深金色。",
      href: "/zh/showcase/neuro-recovery/joy-soul",
      vibrationFreq: "recovery"
    },
    {
      id: "ecstasy",
      title: "狂喜（神圣）",
      desc: "涅槃。自我完全消失；只留下无限。绝对的宇宙纯真。",
      href: "/zh/showcase/neuro-recovery/ecstasy",
      vibrationFreq: "joy"
    }
  ]
};

export const joyUI = {
  sectionBadge: {
    ro: "Ras Lila: Simfonia Interactivă a Minții",
    en: "Ras Lila: The Interactive Symphony of Mind",
    es: "Ras Lila: La Sinfonía Interactiva de la Mente",
    pt: "Ras Lila: A Sinfonia Interativa da Mente",
    ru: "Рас Лила: Интерактивная симфония разума",
    zh: "Ras Lila：心灵互动交响乐"
  },
  sectionTitle: {
    ro: "Dincolo de Ego. Către Extaz.",
    en: "Beyond the Ego. Toward Ecstasy.",
    es: "Más allá del Ego. Hacia el Éxtasis.",
    pt: "Para lá do Ego. Rumo ao Êxtase.",
    ru: "За пределами Эго. К Экстазу.",
    zh: "超越自我。走向狂喜。"
  },
  sectionDesc: {
    ro: "Mintea se vindecă nu prin ridicarea de ziduri, ci prin extinderea propriilor granițe. Selectează un portal în dreapta pentru a călători sau folosește tunerul pentru aliniere.",
    en: "The mind heals not by raising walls, but by expanding its own boundaries. Select a portal on the right to travel, or use the tuner for alignment.",
    es: "La mente se cura no levantando muros, sino expandiendo sus propios límites. Seleccione un portal a la derecha para viajar, o use el sintonizador para alinearse.",
    pt: "A mente cura-se não erguendo muros, mas expandindo as suas próprias fronteiras. Selecione um portal à direita para viajar, ou use o sintonizador para alinhamento.",
    ru: "Разум исцеляется не возведением стен, а расширением собственных границ. Выберите портал справа для путешествия или используйте тюнер для настройки.",
    zh: "心灵愈合不是通过筑起高墙，而是通过扩大其自身的边界。选择右侧的一个门户进行旅行，或使用调谐器进行对准。"
  },
  tunerTitle: {
    ro: "Tuner Interactiv de Conștiință",
    en: "Interactive Consciousness Tuner",
    es: "Sintonizador Interactivo de Consciencia",
    pt: "Sintonizador Interativo de Consciência",
    ru: "Интерактивный тюнер сознания",
    zh: "意识互动调谐器"
  },
  tunerDesc: {
    ro: "Apasă lung pe sfera de mai jos pentru a-ți sincroniza neurochimia și a declanșa o explozie de transcendență.",
    en: "Long press the sphere below to synchronize your neurochemistry and trigger a transcendence explosion.",
    es: "Mantenga presionada la esfera de abajo para sincronizar su neuroquímica y provocar una explosión de trascendencia.",
    pt: "Pressione longamente a esfera abaixo para sincronizar a sua neuroquímica e desencadear uma explosão de transcendência.",
    ru: "Удерживайте нажатой сферу внизу, чтобы синхронизировать свою нейрохимию и запустить взрыв трансцендентности.",
    zh: "长按下方球体以同步您的神经化学，并引发超越性爆发。"
  },
  aligned: {
    ro: "Aliniat",
    en: "Aligned",
    es: "Alineado",
    pt: "Alinhado",
    ru: "Настроено",
    zh: "已对准"
  },
  synchronizing: {
    ro: "Sincronizare...",
    en: "Synchronizing...",
    es: "Sincronizando...",
    pt: "Sincronizando...",
    ru: "Синхронизация...",
    zh: "同步中..."
  },
  holdBtn: {
    ro: "Menține Apăsat",
    en: "Hold Down",
    es: "Mantener Presionado",
    pt: "Manter Pressionado",
    ru: "Удерживайте",
    zh: "按住"
  },
  alignedMessage: {
    ro: "Conștiința s-a aliniat cu planul",
    en: "Consciousness has aligned with the plane of",
    es: "La consciencia se ha alineado con el plano de",
    pt: "A consciência alinhou-se com o plano da",
    ru: "Сознание настроилось на уровень",
    zh: "意识已与以下层面完美对准："
  },
  enterPortal: {
    ro: "Intră Portalul",
    en: "Enter Portal",
    es: "Entrar al Portal",
    pt: "Entrar no Portal",
    ru: "Войти в Портал",
    zh: "进入门户"
  }
};
