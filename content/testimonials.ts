export type ManualTestimonial = {
  id: string;
  authorDisplay: string;
  quote: string;
  source: "manual" | "google-manual";
  published: boolean;
  /** ISO date when known; leave undefined if not verified */
  date?: string;
};

/**
 * Yalnızca gerçek müşteri yorumları eklenir.
 * Sahte veya örnek yorum eklenmez.
 * Google API puanıyla karıştırılmaz; kaynak açıkça gösterilir.
 */
export const manualTestimonials: ManualTestimonial[] = [];
