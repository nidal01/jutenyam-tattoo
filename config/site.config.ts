import { businessConfig } from "./business.config";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return "https://jutenyamtattoo.com";
}

export const siteConfig = {
  get url() {
    return resolveSiteUrl();
  },
  name: businessConfig.brandName,
  shortName: businessConfig.shortName,
  slogan: businessConfig.slogan,
  locale: "tr_TR",
  language: "tr",
  description:
    "Tokat Merkez’de Nuran DELEN ile dövme, piercing ve kalıcı makyaj. 2008’den bu yana kişiye özel uygulama.",
  defaultOgImage: "/images/og/og-home.jpg",
  legalReviewNotice:
    "Bu metin, işletmenin gerçek veri işleme ve hizmet süreçlerine göre hukuk danışmanı tarafından gözden geçirilmelidir.",
} as const;

export function getSiteUrl(): string {
  return resolveSiteUrl();
}
