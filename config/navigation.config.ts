export type NavItem = {
  label: string;
  href: string;
  shortLabel?: string;
};

/** Mobil menü — tam sıra */
export const mainNavigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Dövme", href: "/dovme" },
  { label: "Piercing", href: "/piercing" },
  { label: "Kalıcı Makyaj", href: "/kalici-makyaj", shortLabel: "Kalıcı M." },
  { label: "Portföy", href: "/portfoy" },
  { label: "Hakkımızda", href: "/hakkimizda", shortLabel: "Hakkımızda" },
  { label: "Sevgi İzi", href: "/sevgi-izi" },
  { label: "Bilgi Rehberi", href: "/bilgi-rehberi", shortLabel: "Rehber" },
  { label: "İletişim", href: "/iletisim" },
];

/**
 * Masaüstü nav: logo zaten ana sayfaya gider; Ana Sayfa tekrarlanmaz.
 * shortLabel dar ekranlarda tek satır için kullanılır.
 */
export const desktopNavigation: NavItem[] = mainNavigation
  .filter((item) => item.href !== "/")
  .map((item) => ({
    ...item,
    shortLabel:
      item.shortLabel ??
      (item.label === "Kalıcı Makyaj"
        ? "Kalıcı M."
        : item.label === "Bilgi Rehberi"
          ? "Rehber"
          : item.label === "Hakkımızda"
            ? "Hakkında"
            : undefined),
  }));

export const footerServiceLinks: NavItem[] = [
  { label: "Dövme", href: "/dovme" },
  { label: "Piercing", href: "/piercing" },
  { label: "Kalıcı Makyaj", href: "/kalici-makyaj" },
  { label: "Kaş Mikropigmentasyonu", href: "/kalici-makyaj/kas-mikropigmentasyonu" },
  { label: "Dudak Renklendirme", href: "/kalici-makyaj/dudak-renklendirme" },
  { label: "Dipliner ve Eyeliner", href: "/kalici-makyaj/dipliner-eyeliner" },
  { label: "Portföy", href: "/portfoy" },
  { label: "Hijyen Yaklaşımı", href: "/hijyen-ve-uygulama-yaklasimi" },
];

export const legalLinks: NavItem[] = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
  { label: "Açık Rıza Metni", href: "/acik-riza-metni" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Fotoğraf ve Video Kullanım Politikası", href: "/fotograf-ve-video-kullanim-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { label: "Sık Sorulan Sorular", href: "/sss" },
];
