export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  documentNumber?: string;
  imageSrc?: string;
  published: boolean;
};

/**
 * Sertifika belge adları, kurumlar, tarihler ve görseller henüz sağlanmamıştır.
 * Belge gelene kadar businessConfig.featureFlags.showCertificates = false kalır
 * ve UI bu bölümü gizler. Sahte sertifika eklenmez.
 */
export const certificates: Certificate[] = [];
