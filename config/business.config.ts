export const businessConfig = {
  brandName: "Jutenyam Tattoo & Piercing",
  shortName: "Jutenyam",
  slogan: "Senin Tarzın, Senin İzin",
  artistName: "Nuran DELEN",
  artistTitle: "Dövme, Piercing ve Kalıcı Makyaj Uzmanı",
  startYear: 2008,

  phoneDisplay: "0542 461 78 09",
  phoneInternational: "+905424617809",
  whatsappNumber: "905424617809",
  whatsappMessage:
    "Merhaba, hizmetleriniz hakkında bilgi ve randevu almak istiyorum.",

  email: "sakalar34@gmail.com",

  address: {
    neighborhood: "Yarahmet Mahallesi",
    street: "Gaziosmanpaşa Bulvarı",
    building: "1. Vakıf İş Hanı",
    floor: "Kat: 2",
    district: "Merkez",
    city: "Tokat",
    country: "Türkiye",
    full: "Yarahmet Mahallesi, Gaziosmanpaşa Bulvarı, 1. Vakıf İş Hanı, Kat: 2, Merkez / Tokat",
  },

  mapsUrl: "https://maps.app.goo.gl/E8HAyCcVBXrbHMnV7",

  openingHours: {
    monday: "08:00–22:00",
    tuesday: "08:00–22:00",
    wednesday: "08:00–22:00",
    thursday: "08:00–22:00",
    friday: "08:00–22:00",
    saturday: "08:00–22:00",
    sunday: "08:00–22:00",
  },

  openingHoursDisplay: "Haftanın 7 günü 08.00–22.00",

  appointmentPolicy:
    "Randevu önceliklidir. Müsaitlik durumunda randevusuz müşteri kabul edilir.",

  depositRequired: false,

  pricingNote:
    "Fiyatlandırma; işlemin türü, tasarımın boyutu, detay seviyesi, uygulama bölgesi, kullanılan takı veya teknik ve gerekli işlem sürecine göre değerlendirme sonrasında paylaşılır.",

  cancellationNote:
    "Randevu iptali veya tarih değişikliği koşulları, seçilen işleme göre görüşme sırasında paylaşılır.",

  aftercareNote:
    "İşlem sonrası bakım bilgileri, yapılan uygulamaya göre işlem tamamlandıktan sonra kişiye özel olarak paylaşılır.",

  ageConsentNote:
    "Yaş ve onay koşulları işlem türüne göre değişebilir. Ayrıntılı bilgi için doğrudan iletişime geçebilirsiniz.",

  retouchNote:
    "Rötuş gereksinimi, zamanı ve ücretlendirmesi yapılan işleme ve uygulama sonucuna göre değerlendirilir.",

  artistBio:
    "Nuran DELEN, 2008 yılından bu yana dövme, piercing ve kalıcı makyaj alanında hizmet vermektedir. Kişiye özel tasarım, estetik uygulama ve müşteri memnuniyetini ön planda tutmaktadır.",

  social: {
    instagram: "https://www.instagram.com/ju_tenyam_dovme_tokat/",
    instagramHandle: "@ju_tenyam_dovme_tokat",
    facebook: "https://www.facebook.com/jutenyam60/",
    youtube:
      "https://www.youtube.com/@jutenyamdovmenurandelentokat",
  },

  featureFlags: {
    showCertificates: false,
    showCampaigns: false,
    showGoogleRating: true,
    showHealedPortfolio: true,
    showSevgiIzi: true,
  },
} as const;

export type BusinessConfig = typeof businessConfig;
