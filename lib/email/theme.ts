// Tema e-mailurilor Reverb: aceeași ca a site-ului (fundal aproape negru, carduri închise, text alb și gri,
// etichete mono cu majuscule, un singur buton alb). Culorile sunt hex plin: Outlook nu citește rgba.
// Fără verde, roșu sau alte accente: e-mailurile nu au stări.

export const theme = {
  bg: "#070809",
  card: "#0d0e10",
  panel: "#121417",
  border: "#25282c",
  hairline: "#1b1d20",
  title: "#ffffff",
  text: "#c9ccd1",
  strong: "#f2f3f5",
  muted: "#9aa0a8",
  faint: "#8a9099",
  buttonBg: "#ffffff",
  buttonText: "#0a0a0a",
  outline: "#3b3f45",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  /** Imaginile au nume cu versiune: e-mailurile deja trimise le cer de la aceeași adresă, deci nu se redenumesc. */
  logo: "/email/logo-v1.png",
  grid: "/email/grid-v1.png",
  /** De unde se iau imaginile într-un e-mail trimis. Previzualizarea locală dă originea ei. */
  assetBase: "https://reverb.ro",
} as const;
