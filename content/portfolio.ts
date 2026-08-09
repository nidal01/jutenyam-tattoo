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
 * Portföy öğeleri input-assets klasörüne eklendikten sonra buraya yazılır.
 * Sahte veya stok iş görseli eklenmez.
 * Yayımlama için: clientConsent === true && published === true
 */
export const portfolioItems: PortfolioItem[] = [];
