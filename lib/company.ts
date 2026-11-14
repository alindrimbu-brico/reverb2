// Datele firmei, într-un singur loc. Folosite de components/WhoWeAre.tsx, de components/Footer.tsx și de e-mailuri (lib/email).
// Fișier fără importuri, ca să poată fi citit și din afara aplicației Next.

export const company = {
  brand: "Reverb Digital",
  legalName: "Kalki Drim Magazin SRL",
  city: "Focșani",
  county: "Vrancea",
  cui: "RO42565965",
  regCom: "J39/335/2020",
  /** Spațiile din numărul afișat nu se rup (numărul rămâne pe un rând). */
  phoneDisplay: "0767 235 693",
  phoneIntl: "+40 767 235 693",
  tel: "tel:+40767235693",
  whatsapp: "https://wa.me/40767235693",
  email: "contact@reverb.ro",
  /** Căsuța din care pleacă ofertele și răspunsurile scrise de mână (Alin, 12 nov 2026). */
  offersEmail: "reverb@reverb.ro",
  site: "https://reverb.ro",
  siteLabel: "reverb.ro",
  /** Biroul din Londra, cum apare în subsolul site-ului (components/Footer.tsx). În subsolul e-mailurilor vine imediat
   *  după „Reverb Digital” (Alin, 13 nov 2026: „Reverb Digital și, după aia, Zylaris Group cu adresa… ca pe site”). */
  partner: {
    name: "Zylaris Group London",
    site: "https://zylarisgroup.com",
    siteLabel: "zylarisgroup.com",
    street: "167–169 Great Portland Street",
    cityLine: "London, W1W 5PF, United Kingdom",
  },
} as const;
