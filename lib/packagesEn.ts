// English texts for the packages in lib/packages.ts. Prices are NOT written here:
// they come from the registry through priceEn(), so the two languages cannot drift apart.

import { deliveryEn, pkg, priceEn, type PackageId } from "./packages";

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

export const packagesEn: Record<PackageId, PackageEn> = {
  "social-growth": {
    name: "Social Growth AI Video",
    shortName: "Social Growth (12 videos/mo)",
    tagline: "Constant video presence and visual credibility across channels.",
    delivery: "Weekly delivery",
    description: "12 short-form videos and 12 product carousels generated with modern AI models, optimized for TikTok, Reels, and YouTube Shorts algorithms.",
    includes: [
      "12 short-form videos monthly, 3 weekly cadence",
      "12 graphic posts and product carousels",
      "Synchronized publishing across TikTok, Instagram, Facebook, Shorts",
      "Direct conversion scripts and dynamic subtitles",
      "Clear monthly visibility and reach reporting",
    ],
    ideal: "Local businesses, clinics, and service firms seeking regular video presence without conventional shooting overhead.",
  },
  "daily-impact": {
    name: "Daily Impact 1 Video Daily",
    shortName: "Daily Impact (30 videos/mo)",
    tagline: "Visual dominance through daily product video content.",
    delivery: "Daily delivery",
    description: "30 short-form video assets monthly, 1 published every day, plus 30 graphic posts. Real equipment and product demonstrations with synthetic voiceover.",
    includes: [
      "30 short-form videos monthly, 1 video every single day",
      "30 graphic assets tailored for each platform",
      "Product and hardware demonstrations in action",
      "High-fidelity neural synthetic voiceover",
      "Conversion-focused sales hooks and direct call to action",
      "Weekly content consulting and algorithm optimization",
    ],
    ideal: "Online stores, distributors, and brands seeking accelerated organic growth through sustained volume.",
    badge: "Most Requested",
  },
  "dominance-3x": {
    name: "Dominance 3X 3 Videos Daily",
    shortName: "Dominance 3X (90 videos/mo)",
    tagline: "Aggressive scaling for maximum algorithm coverage.",
    delivery: "3 daily deliveries",
    description: "90 short-form video assets monthly, 3 per day, for brands and retail companies wanting full saturation across feed algorithms.",
    includes: [
      "90 short-form videos monthly, 3 videos daily",
      "Multi-account distribution across targeted campaigns",
      "Systematic A/B angle testing for performance",
      "Multilingual synthetic voiceover on request",
      "24/7 dedicated priority support channel",
    ],
    ideal: "Large retailers, national brands, and enterprises with deep product catalogs.",
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
      "Published on your domain (the domain is paid separately)",
    ],
    ideal: "Small firms, practices and tradespeople who need a correct online presence quickly, on a small budget.",
  },
  "start-digital": {
    name: "Start Digital Web & Video",
    shortName: "Start Digital (website + 15 videos)",
    tagline: "High-speed modern website powered by video from day one.",
    description: "High-speed 3–5 page presentation platform built on Next.js, integrated with contact forms, Google Maps, WhatsApp, and 15 launch videos.",
    includes: [
      "Next.js high-speed web platform under 1.2s loading",
      "Bespoke architectural layout, zero generic templates",
      "Contact forms, WhatsApp direct, and Google Maps integrated",
      "Full mobile responsiveness and adaptive typography",
      "Semantic data structures ready for Google and AI Agents GEO",
      "Launch package: 15 short-form videos included",
    ],
    ideal: "Service companies, medical practices, consultancies entering the digital space with authority.",
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
    ],
    ideal: "Local producers and small shops that want to start selling online without a large investment.",
  },
  "magazin-digital-activ": {
    name: "Active Digital Store eCommerce & AI",
    shortName: "Active Digital Store (+ 30 videos)",
    tagline: "Complete eCommerce platform engineered for conversion and AI search.",
    description: "Full eCommerce infrastructure on WooCommerce or Next.js with Payload CMS, cognitive checkout, card payments, automated billing, and 30 launch videos.",
    includes: [
      "Turnkey online store setup with card payments and courier APIs",
      "Enterprise Control Panel option via Payload CMS or WooCommerce",
      "Automated invoicing plus instant courier AWB dispatch",
      "Conversion-engineered product catalog architecture",
      "Generative Engine Optimization GEO and Schema JSON-LD",
      "Launch package: 30 product demonstration videos",
    ],
    ideal: "Retailers, distributors, and growing brands scaling direct-to-consumer sales.",
    badge: "Complete System",
  },
  "infrastructura-enterprise": {
    name: "Enterprise Infrastructure & B2B",
    shortName: "Enterprise Infrastructure",
    tagline: "Dedicated digital systems and operational transformation.",
    delivery: "Dedicated scope",
    description: "Enterprise systems executed in strategic partnership with Zylaris Group London: B2B client portals, workflow automation, autonomous AI agents, and secure cloud hosting.",
    includes: [
      "Dedicated scalable cloud architecture",
      "Secure client and partner B2B portals",
      "Operational workflow audit and autonomous AI agent deployment",
      "International corporate governance and security standards",
      "Proactive 24/7 system monitoring and guaranteed SLA",
    ],
    ideal: "Enterprises, corporate networks, and organizations requiring zero-compromise digital reliability.",
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
