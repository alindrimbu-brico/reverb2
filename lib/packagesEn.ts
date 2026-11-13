// English texts for the packages in lib/packages.ts. Prices are NOT written here:
// they come from the registry through priceEn(), so the two languages cannot drift apart.
// Package texts are written for a reader who does not work in IT: no technology names
// (Next.js, Payload, JSON-LD) and no abbreviations (GEO, A/B, SLA) in what the client sees.

import { deliveryEn, HOSTING_AFTER_FIRST_YEAR, packages, pkg, priceEn, type PackageId } from "./packages";

export type PackageEn = {
  name: string;
  shortName: string;
  tagline: string;
  /** Only for terms that are not a number of days; day ranges come from the registry. */
  delivery?: string;
  description: string;
  includes: string[];
  ideal: string;
  badge?: string;
};

/** All registry prices exclude VAT. The label sits next to a price, the note under a price list. */
export const VAT_LABEL_EN = "+ VAT"; // non-breaking space: the label stays on one line
export const VAT_NOTE_EN = "Prices exclude VAT.";

export const packagesEn: Record<PackageId, PackageEn> = {
  "social-growth": {
    name: "Social Growth AI Video",
    shortName: "Social Growth (12 videos/mo)",
    tagline: "A steady video presence on social media.",
    delivery: "Weekly delivery",
    description: "12 short videos and 12 product carousels a month, made with AI and built for TikTok, Reels and YouTube Shorts.",
    includes: [
      "12 short videos a month, 3 every week",
      "12 graphic posts and product carousels",
      "Published on TikTok, Instagram, Facebook and YouTube Shorts",
      "Sales scripts and on-screen subtitles",
      "Monthly report: how many people saw your videos",
    ],
    ideal: "Local businesses, clinics and service firms that want a regular video presence without the cost of a film crew.",
  },
  "daily-impact": {
    name: "Daily Impact 1 Video Daily",
    shortName: "Daily Impact (30 videos/mo)",
    tagline: "A new video every day, with your products.",
    delivery: "Daily delivery",
    description: "30 short videos a month, one every day, plus 30 graphic posts. We show your equipment, products and services in action, with an AI-generated voice and fast editing.",
    includes: [
      "30 short videos a month, one every day",
      "30 graphic posts adapted to each platform",
      "Products and equipment shown in action",
      "AI-generated presenter voice that sounds natural",
      "Scripts written to sell",
      "A weekly talk: what worked and what we change",
    ],
    ideal: "Online stores, distributors and brands that want faster growth through steady volume.",
    badge: "Most Requested",
  },
  "dominance-3x": {
    name: "Dominance 3X 3 Videos Daily",
    shortName: "Dominance 3X (90 videos/mo)",
    tagline: "Three videos a day, so your brand shows up everywhere.",
    delivery: "3 daily deliveries",
    description: "90 short videos a month, 3 a day, for large brands and retailers that want to be seen daily by everyone interested in their field.",
    includes: [
      "90 short videos a month, 3 every day",
      "Published on several accounts",
      "We test several versions of the message and keep what sells",
      "Voice in several languages, on request",
      "Priority support, at any hour",
    ],
    ideal: "Large retailers, national brands and companies with large product catalogues.",
  },
  "site-start": {
    name: "Website Start",
    shortName: "Website Start",
    tagline: "A fast presentation website, started from a ready-made style.",
    description: "A presentation website of up to 5 pages, built from a style in our concept gallery and adapted to your business: colours, texts, photos.",
    includes: [
      "Up to 5 pages: Home, About, Services, Gallery, Contact",
      "Design started from a style in our gallery, adapted to your brand",
      "Contact form, WhatsApp and Google map",
      "Optimized for phones and for speed",
      "Texts and photos come from you; two rounds of changes included",
      `Hosting included for the first year; then ${priceEn(HOSTING_AFTER_FIRST_YEAR)}, or you move it to your own hosting`,
      "Published on your domain (the domain is paid separately)",
      "30 days of support after launch: WhatsApp, phone and meetings online or at our office in Focșani",
    ],
    ideal: "Small firms, practices and tradespeople who need a correct online presence quickly, on a small budget.",
  },
  "start-digital": {
    name: "Start Digital Web & Video",
    shortName: "Start Digital (website + 15 videos)",
    tagline: "A fast, modern website backed by video from day one.",
    description: "A very fast presentation website of 3–5 pages, with a design made only for you, contact form, Google map and WhatsApp, plus 15 launch videos.",
    includes: [
      "A very fast website: it loads in under 1.2 seconds",
      "Exclusive design, no templates",
      "Contact form, WhatsApp and Google map",
      "Looks good on phones too",
      "Prepared to be found by Google and by AI assistants (ChatGPT, Gemini)",
      "15 short videos for the launch",
      "30 days of support after launch: WhatsApp, phone and meetings online or at our office in Focșani",
    ],
    ideal: "Service companies, practices, consultants and workshops that are serious about going online.",
  },
  "magazin-start": {
    name: "Store Start",
    shortName: "Store Start",
    tagline: "An online store ready to sell, with card payments, courier and automatic invoices.",
    description: "An online store on WooCommerce, started from a theme we prepared, with card payments, one courier with labels generated from the order and automatic invoicing. We load your first 50 products.",
    includes: [
      "Up to 50 products loaded by us",
      "Card payments, cash on delivery and bank transfer",
      "One integrated courier, with the label generated from the order",
      "Automatic invoicing through FGO or SmartBill",
      "A theme we prepared, adapted to your brand; two rounds of changes",
      "Hosting, the domain and the contracts with the payment processor, the courier and the invoicing service are yours",
      "30 days of support after launch: WhatsApp, phone and meetings online or at our office in Focșani",
    ],
    ideal: "Local producers and small shops that want to start selling online without a large investment.",
  },
  "magazin-digital-activ": {
    name: "Active Digital Store",
    shortName: "Active Digital Store (+ 30 videos)",
    tagline: "A complete online store, built to sell and to be found by Google and by AI assistants.",
    description: "A complete online store with card payments, automatic invoicing and courier labels, a panel where you manage products and orders yourself, plus 30 launch videos.",
    includes: [
      "Complete online store with card payments and couriers",
      "Admin panel for products and orders: WooCommerce or one built to order",
      "Automatic invoicing and courier labels generated on the spot",
      "Product catalogue organized to be easy to buy from",
      "Prepared to be found by Google and by AI assistants (ChatGPT, Gemini)",
      "30 product videos for the launch",
      "30 days of support after launch: WhatsApp, phone and meetings online or at our office in Focșani",
    ],
    ideal: "Retailers, distributors, local producers and growing brands that want to sell a lot online.",
    badge: "Complete System",
  },
  "infrastructura-enterprise": {
    name: "Large Projects & B2B",
    shortName: "Large Projects & B2B",
    tagline: "Custom digital systems for large companies.",
    delivery: "Dedicated scope",
    description: "Large projects, done together with our London partner, Zylaris Group: portals for clients and partners, automation of repetitive work inside the company, AI assistants that work on their own, and secure hosting.",
    includes: [
      "Your own infrastructure, which grows with the company",
      "Secure portals for clients and partners",
      "A review of how the company works, and AI assistants that take over repetitive tasks",
      "Security and working rules at international standard",
      "Permanent monitoring and a response time guaranteed by contract",
    ],
    ideal: "Large companies and organizations that need digital systems they can rely on.",
  },
};

/** English price of a package, from the registry. */
export function enPrice(id: PackageId): string {
  return priceEn(pkg(id).price);
}

/** English delivery term: the hand-written one if present, otherwise the registry's day range. */
export function enDelivery(id: PackageId): string {
  return packagesEn[id].delivery ?? deliveryEn(pkg(id).delivery);
}

/** Options of the English contact form: the same values (package ids) as the Romanian one, so ?package=<id> preselects. */
export function serviceOptionsEn(): { value: string; label: string }[] {
  return [
    ...packages.map((p) => ({ value: p.id, label: `${packagesEn[p.id].shortName} — ${enPrice(p.id)}` })),
    { value: "geo-search", label: "Being found by AI assistants (ChatGPT, Gemini)" },
    { value: "consultanta-alta", label: "Consulting / Custom project" },
  ];
}
