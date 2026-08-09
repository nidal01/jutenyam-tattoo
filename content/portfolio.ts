export type PortfolioCategory =
  | "tattoo"
  | "piercing"
  | "pmu-eyebrow"
  | "pmu-lips"
  | "pmu-eyeliner";

export type ResultStatus =
  | "fresh"
  | "healed"
  | "before"
  | "after"
  | "retouch";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  subcategory?: string;
  tags: string[];
  image: string;
  thumbnail?: string;
  alt: string;
  description?: string;
  resultStatus: ResultStatus;
  clientConsent: boolean;
  published: boolean;
  featured: boolean;
  captureDate?: string;
  serviceUrl: string;
}

/**
 * Lansman görselleri: stüdyo tarzı üretilmiş tanıtım görselleridir.
 * Gerçek müşteri fotoğrafları geldiğinde aynı yapıyla değiştirilir.
 * Yayımlama için: clientConsent === true && published === true
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "tattoo-floral-01",
    slug: "floral-fine-line",
    title: "Floral fine line",
    category: "tattoo",
    subcategory: "fine-line",
    tags: ["floral", "fine-line", "minimal"],
    image: "/images/portfolio/tattoo-floral-fineline.webp",
    alt: "İnce çizgi floral dövme çalışması",
    description: "Botanik temalı ince çizgi uygulama örneği.",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "tattoo-geo-01",
    slug: "geometrik-blackwork",
    title: "Geometrik blackwork",
    category: "tattoo",
    subcategory: "geometric",
    tags: ["geometric", "blackwork"],
    image: "/images/portfolio/tattoo-geometric.webp",
    alt: "Geometrik blackwork dövme çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "tattoo-letter-01",
    slug: "yazi-dovmesi",
    title: "Yazı dövmesi",
    category: "tattoo",
    subcategory: "lettering",
    tags: ["lettering", "yazı"],
    image: "/images/portfolio/tattoo-lettering.webp",
    alt: "Bilek üzerine yazı dövmesi çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "tattoo-rose-01",
    slug: "siyah-gri-gul",
    title: "Siyah-gri gül",
    category: "tattoo",
    subcategory: "black-grey",
    tags: ["black-grey", "realism"],
    image: "/images/portfolio/tattoo-blackgrey-rose.webp",
    alt: "Siyah-gri gül dövme çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "tattoo-minimal-01",
    slug: "minimal-cizgi",
    title: "Minimal çizgi",
    category: "tattoo",
    subcategory: "minimal",
    tags: ["minimal", "fine-line"],
    image: "/images/portfolio/tattoo-minimal.webp",
    alt: "Minimal çizgi dövme çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "tattoo-coverup-01",
    slug: "cover-up-floral",
    title: "Cover-up floral",
    category: "tattoo",
    subcategory: "cover-up",
    tags: ["cover-up", "floral"],
    image: "/images/portfolio/tattoo-coverup.webp",
    alt: "Cover-up floral dövme çalışması",
    description: "Eski dövmeyi kapatmaya yönelik floral yaklaşım örneği.",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "piercing-helix-01",
    slug: "helix-piercing",
    title: "Helix piercing",
    category: "piercing",
    subcategory: "helix",
    tags: ["helix", "kulak"],
    image: "/images/portfolio/piercing-helix.webp",
    alt: "Helix piercing ve takı uygulaması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/piercing",
  },
  {
    id: "piercing-septum-01",
    slug: "septum-piercing",
    title: "Septum piercing",
    category: "piercing",
    subcategory: "septum",
    tags: ["septum", "yüz"],
    image: "/images/portfolio/piercing-septum.webp",
    alt: "Septum piercing uygulaması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/piercing",
  },
  {
    id: "piercing-ear-01",
    slug: "ear-styling",
    title: "Ear styling",
    category: "piercing",
    subcategory: "ear-styling",
    tags: ["ear-styling", "kulak", "helix", "conch"],
    image: "/images/portfolio/piercing-ear-styling.webp",
    alt: "Kulak piercing kombinasyonu ear styling çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/piercing",
  },
  {
    id: "piercing-nostril-01",
    slug: "burun-piercing",
    title: "Burun piercing",
    category: "piercing",
    subcategory: "nostril",
    tags: ["nostril", "burun"],
    image: "/images/portfolio/piercing-nostril.webp",
    alt: "Burun / nostril piercing uygulaması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/piercing",
  },
  {
    id: "pmu-brow-01",
    slug: "kas-mikropigmentasyonu",
    title: "Kaş mikropigmentasyonu",
    category: "pmu-eyebrow",
    subcategory: "eyebrow",
    tags: ["kaş", "mikropigmentasyon"],
    image: "/images/portfolio/pmu-eyebrow.webp",
    alt: "Kaş mikropigmentasyonu uygulama sonucu",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/kalici-makyaj/kas-mikropigmentasyonu",
  },
  {
    id: "pmu-lips-01",
    slug: "dudak-renklendirme",
    title: "Dudak renklendirme",
    category: "pmu-lips",
    subcategory: "lips",
    tags: ["dudak", "renklendirme"],
    image: "/images/portfolio/pmu-lips.webp",
    alt: "Dudak renklendirme kalıcı makyaj çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/kalici-makyaj/dudak-renklendirme",
  },
  {
    id: "pmu-eye-01",
    slug: "dipliner-eyeliner",
    title: "Dipliner / eyeliner",
    category: "pmu-eyeliner",
    subcategory: "eyeliner",
    tags: ["dipliner", "eyeliner"],
    image: "/images/portfolio/pmu-eyeliner.webp",
    alt: "Dipliner ve eyeliner kalıcı makyaj çalışması",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/kalici-makyaj/dipliner-eyeliner",
  },
];
