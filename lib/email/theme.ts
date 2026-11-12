// Tema e-mailurilor Reverb: exact tema închisă a site-ului (app/globals.css: --bg #070809, --ink #ffffff) și
// griurile neutre Tailwind folosite acolo. Culorile sunt hex plin, pentru că Outlook nu citește rgba; unde site-ul
// are o culoare transparentă, aici e rezultatul ei peste fundal (calculul e scris lângă fiecare).
// Un singur accent, verdele site-ului (Alin, 12 nov: „adu și acel verde… echilibrat, discret”). Fără roșu sau alte
// culori: e-mailurile nu au stări. Fără griuri albăstrui: site-ul nu are.
// Contrastul fiecărei perechi text / fundal se verifică cu docs/designs/email_sabloane_2026-11-12/verificari/contrast.py.

export const theme = {
  /** --bg al site-ului. */
  bg: "#070809",
  /** bg-neutral-900/40 (#171717 la 40 %) peste --bg. */
  card: "#0d0e0f",
  /** bg-neutral-900/60 peste --bg. */
  panel: "#111111",
  /** border-white/10 peste card. */
  border: "#262627",
  /** border-white/6 peste card (liniile dintre rânduri). */
  hairline: "#1c1c1d",
  /** --ink. */
  title: "#ffffff",
  /** text-neutral-300. */
  text: "#d4d4d4",
  /** text-neutral-100. */
  strong: "#f5f5f5",
  /** text-neutral-400. */
  muted: "#a1a1a1",
  /** Între neutral-400 și neutral-500: neutral-500 (#737373) are doar 4,2 : 1 pe --bg, prea puțin la 12 px. */
  faint: "#8a8a8a",
  /** Butonul principal: alb cu text închis, ca pe site (cum se ține alb în Outlook: vezi butonul din layout.ts). */
  buttonBg: "#ffffff",
  buttonText: "#070809",
  /** Conturul butonului secundar: border-white/20 peste card. */
  outline: "#3e3e3f",
  /** Singurul accent: text-emerald-400 al site-ului („WhatsApp Direct” din subsol). Doar ca text, în puține locuri
   *  (punctul din etichetă, WhatsApp în buton și în subsol); niciodată ca fundal. */
  accent: "#00d492",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  /** font-mono al site-ului (lista Tailwind). Mono = date: etichete, valori, numere, butoane, subsol. Sans = text de citit. */
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  /** Imaginile au nume cu versiune: e-mailurile deja trimise le cer de la aceeași adresă, deci nu se redenumesc. */
  logo: "/email/logo-v1.png",
  grid: "/email/grid-v1.png",
  /** Plăcuțe pline, de culoarea `bg`, `card` și `panel`: Outlook revopsește culorile de fundal, nu și imaginile (vezi layout.ts). */
  tileBg: "/email/bg-v1.png",
  tileCard: "/email/card-v1.png",
  tilePanel: "/email/panel-v1.png",
  /** Plăcuțele butonului alb: fondul alb și negrul de sub textul amestecat (#000000, ca amestecul să dea alb curat). */
  tileWhite: "/email/white-v1.png",
  tileBlack: "/email/black-v1.png",
  /** De unde se iau imaginile într-un e-mail trimis. Previzualizarea locală dă originea ei. */
  assetBase: "https://reverb.ro",
} as const;
