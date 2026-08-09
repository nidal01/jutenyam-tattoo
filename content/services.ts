export type ServiceGroupId = "tattoo" | "piercing" | "pmu";

export type ServiceItem = {
  id: string;
  name: string;
  group: ServiceGroupId;
  href?: string;
};

export const tattooStyles: ServiceItem[] = [
  { id: "minimal", name: "Minimal dövme", group: "tattoo" },
  { id: "lettering", name: "Yazı dövmesi", group: "tattoo" },
  { id: "fine-line", name: "Fine line / ince çizgi", group: "tattoo" },
  { id: "realism", name: "Realistik dövme", group: "tattoo" },
  { id: "portrait", name: "Portre dövmesi", group: "tattoo" },
  { id: "black-grey", name: "Siyah-gri dövme", group: "tattoo" },
  { id: "color", name: "Renkli dövme", group: "tattoo" },
  { id: "geometric", name: "Geometrik dövme", group: "tattoo" },
  { id: "floral", name: "Floral / çiçek dövmesi", group: "tattoo" },
  { id: "tribal", name: "Tribal dövme", group: "tattoo" },
  { id: "old-school", name: "Old school", group: "tattoo" },
  { id: "blackwork", name: "Blackwork", group: "tattoo" },
  { id: "microrealism", name: "Mikrorealizm", group: "tattoo" },
  { id: "custom", name: "Kişiye özel tasarım", group: "tattoo" },
  { id: "cover-up", name: "Cover-up / eski dövme kapatma", group: "tattoo" },
  { id: "refresh", name: "Dövme yenileme", group: "tattoo" },
  { id: "flash", name: "Flash tasarımlar", group: "tattoo" },
];

export const piercingEar: ServiceItem[] = [
  { id: "lobe", name: "Kulak memesi", group: "piercing" },
  { id: "helix", name: "Helix", group: "piercing" },
  { id: "forward-helix", name: "Forward helix", group: "piercing" },
  { id: "flat", name: "Flat", group: "piercing" },
  { id: "tragus", name: "Tragus", group: "piercing" },
  { id: "anti-tragus", name: "Anti-tragus", group: "piercing" },
  { id: "conch", name: "Conch", group: "piercing" },
  { id: "daith", name: "Daith", group: "piercing" },
  { id: "rook", name: "Rook", group: "piercing" },
  { id: "snug", name: "Snug", group: "piercing" },
  { id: "industrial", name: "Industrial", group: "piercing" },
  { id: "ear-styling", name: "Ear styling / kulak kombinasyonu", group: "piercing" },
];

export const piercingFace: ServiceItem[] = [
  { id: "eyebrow", name: "Kaş piercing", group: "piercing" },
  { id: "nostril", name: "Burun / nostril", group: "piercing" },
  { id: "septum", name: "Septum", group: "piercing" },
  { id: "lip", name: "Dudak piercing", group: "piercing" },
  { id: "labret", name: "Labret", group: "piercing" },
  { id: "medusa", name: "Medusa", group: "piercing" },
  { id: "tongue", name: "Dil piercing", group: "piercing" },
];

export const piercingBody: ServiceItem[] = [
  { id: "navel", name: "Göbek piercing", group: "piercing" },
  { id: "nipple", name: "Meme piercing", group: "piercing" },
  { id: "dermal", name: "Dermal piercing", group: "piercing" },
  { id: "jewelry-change", name: "Takı değişimi", group: "piercing" },
];

export const pmuServices: ServiceItem[] = [
  {
    id: "brow",
    name: "Kaş mikropigmentasyonu",
    group: "pmu",
    href: "/kalici-makyaj/kas-mikropigmentasyonu",
  },
  {
    id: "lip-color",
    name: "Dudak renklendirme",
    group: "pmu",
    href: "/kalici-makyaj/dudak-renklendirme",
  },
  {
    id: "lip-contour",
    name: "Dudak kontürü",
    group: "pmu",
    href: "/kalici-makyaj/dudak-renklendirme",
  },
  {
    id: "dipliner",
    name: "Dipliner",
    group: "pmu",
    href: "/kalici-makyaj/dipliner-eyeliner",
  },
  {
    id: "classic-eyeliner",
    name: "Klasik eyeliner",
    group: "pmu",
    href: "/kalici-makyaj/dipliner-eyeliner",
  },
  {
    id: "winged-eyeliner",
    name: "Kuyruklu eyeliner",
    group: "pmu",
    href: "/kalici-makyaj/dipliner-eyeliner",
  },
  {
    id: "eyeliner-refresh",
    name: "Eyeliner yenileme",
    group: "pmu",
    href: "/kalici-makyaj/dipliner-eyeliner",
  },
  {
    id: "pmu-retouch",
    name: "Kalıcı makyaj rötuşu",
    group: "pmu",
    href: "/kalici-makyaj",
  },
];

export const hygienePractices = [
  "Tek kullanımlık iğne ve sarf malzemeleri kullanılmaktadır.",
  "Malzemeler müşteri önünde açılmaktadır.",
  "Çalışma alanı her işlem öncesinde ve sonrasında dezenfekte edilmektedir.",
  "Yeniden kullanılabilir ekipmanlar uygun yöntemlerle sterilize edilmektedir.",
  "Eldiven ve gerekli koruyucu ekipmanlar kullanılmaktadır.",
  "Orijinal ve lisanslı pigmentler ile dövme boyaları kullanılmaktadır.",
  "Piercing takılarında uygun materyal standartlarına sahip ürünler tercih edilmektedir.",
] as const;

export const processSteps = [
  {
    title: "Fikrini paylaş",
    description:
      "İstediğin uygulama, referanslar veya tasarım fikrini WhatsApp veya telefon üzerinden paylaş.",
  },
  {
    title: "Uygulama veya tasarım değerlendirmesi",
    description:
      "Bölge, stil ve teknik ihtiyaca göre uygun yaklaşım birlikte değerlendirilir.",
  },
  {
    title: "Randevunun belirlenmesi",
    description:
      "Randevu önceliklidir; müsaitlik durumunda randevusuz kabul de mümkündür.",
  },
  {
    title: "Uygulama",
    description:
      "Hijyen odaklı hazırlık sonrasında seçilen işlem özenle uygulanır.",
  },
  {
    title: "İşlem sonrası bilgilendirme",
    description:
      "Bakım bilgileri, yapılan uygulamaya göre kişiye özel olarak paylaşılır.",
  },
] as const;

export const trustBadges = [
  { title: "2008’den Bu Yana", description: "Köklü stüdyo deneyimi" },
  { title: "Kişiye Özel Tasarım", description: "Tarza uygun planlama" },
  { title: "Hijyen Odaklı Çalışma", description: "Doğrulanmış uygulamalar" },
  { title: "Gerçek Portföy", description: "İzinli çalışma görselleri" },
  { title: "Sevgi İzi Desteği", description: "Sosyal sorumluluk alanı" },
] as const;
