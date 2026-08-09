export type FaqCategory =
  | "genel"
  | "dovme"
  | "piercing"
  | "kalici-makyaj"
  | "randevu"
  | "fiyatlandirma"
  | "fotograf";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
  featuredOnHome?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    id: "randevu-nasil",
    question: "Randevu nasıl alınır?",
    answer:
      "Randevu için WhatsApp veya telefon üzerinden iletişime geçebilirsiniz. Uygun gün ve saat birlikte değerlendirilir.",
    category: "randevu",
    featuredOnHome: true,
  },
  {
    id: "randevusuz",
    question: "Randevusuz müşteri kabul ediliyor mu?",
    answer:
      "Randevu önceliklidir. Müsaitlik bulunması hâlinde randevusuz müşteriler de kabul edilir.",
    category: "randevu",
    featuredOnHome: true,
  },
  {
    id: "fiyat",
    question: "Fiyat nasıl belirlenir?",
    answer:
      "Fiyatlandırma; işlemin türü, tasarımın boyutu, detay seviyesi, uygulama bölgesi, kullanılan takı veya teknik ve gerekli işlem sürecine göre değerlendirme sonrasında paylaşılır.",
    category: "fiyatlandirma",
    featuredOnHome: true,
  },
  {
    id: "dovme-bilgi",
    question: "Dövme için hangi bilgileri paylaşmalıyım?",
    answer:
      "İstediğiniz stil, yaklaşık boyut, uygulama bölgesi ve varsa referans görselleri paylaşmanız değerlendirmeyi kolaylaştırır. Cover-up düşünüyorsanız mevcut dövmenin net fotoğrafı yardımcı olur.",
    category: "dovme",
    featuredOnHome: true,
  },
  {
    id: "cover-up",
    question: "Cover-up işlemi yapılıyor mu?",
    answer:
      "Evet, cover-up ve dövme yenileme hizmetleri sunulmaktadır. Uygunluk, mevcut dövmenin durumu ve istenen yeni tasarıma göre değerlendirilir.",
    category: "dovme",
  },
  {
    id: "piercing-turleri",
    question: "Hangi piercing türleri uygulanıyor?",
    answer:
      "Kulak, yüz ve vücut piercingleri ile dermal piercing, takı değişimi ve ear styling uygulamaları sunulmaktadır. Uygun piercing türü yüz yüze veya iletişim sırasında değerlendirilir.",
    category: "piercing",
    featuredOnHome: true,
  },
  {
    id: "taki-degisim",
    question: "Takı değişimi yapılıyor mu?",
    answer:
      "Evet, uygun materyal standartlarına sahip takılarla takı değişimi yapılmaktadır.",
    category: "piercing",
  },
  {
    id: "kas-pmu",
    question: "Kaş mikropigmentasyonu hizmeti var mı?",
    answer:
      "Evet, kaş mikropigmentasyonu hizmeti sunulmaktadır. Tasarım ve teknik yaklaşım kişiye göre değerlendirilir.",
    category: "kalici-makyaj",
  },
  {
    id: "dudak-pmu",
    question: "Dudak renklendirme ve kontür yapılıyor mu?",
    answer:
      "Evet, dudak renklendirme ve dudak kontürü uygulamaları sunulmaktadır. Renk tercihi kişiye göre değerlendirilir; sonuçlar kişiden kişiye değişebilir.",
    category: "kalici-makyaj",
  },
  {
    id: "dipliner-fark",
    question: "Dipliner ile eyeliner arasındaki fark nedir?",
    answer:
      "Dipliner daha ince ve doğal bir hat görünümü hedeflerken; klasik veya kuyruklu eyeliner daha belirgin bir makyaj etkisi için tercih edilebilir. Size uygun seçenek değerlendirme sırasında netleştirilir.",
    category: "kalici-makyaj",
  },
  {
    id: "rotus",
    question: "Rötuş ücretli mi?",
    answer:
      "Rötuş gereksinimi, zamanı ve ücretlendirmesi yapılan işleme ve uygulama sonucuna göre değerlendirilir.",
    category: "kalici-makyaj",
  },
  {
    id: "bakim",
    question: "İşlem sonrası bakım bilgisi nasıl veriliyor?",
    answer:
      "İşlem sonrası bakım bilgileri, yapılan uygulamaya göre işlem tamamlandıktan sonra kişiye özel olarak paylaşılır.",
    category: "genel",
    featuredOnHome: true,
  },
  {
    id: "yas",
    question: "Yaş ve veli onayı şartları nelerdir?",
    answer:
      "Yaş ve onay koşulları işlem türüne göre değişebilir. Ayrıntılı bilgi için doğrudan iletişime geçebilirsiniz.",
    category: "genel",
  },
  {
    id: "foto",
    question: "Fotoğraflar izinsiz paylaşılır mı?",
    answer:
      "Hayır. Portföyde yalnızca paylaşım izni alınan görseller yayımlanır. Ayrıntılar Fotoğraf ve Video Kullanım Politikası sayfasında yer alır.",
    category: "fotograf",
  },
  {
    id: "saatler",
    question: "Hangi gün ve saatlerde açıksınız?",
    answer:
      "Haftanın 7 günü 08.00–22.00 saatleri arasında hizmet vermekteyiz. Randevu önceliklidir.",
    category: "randevu",
  },
];

export const faqCategories: Array<{ id: FaqCategory; label: string }> = [
  { id: "genel", label: "Genel" },
  { id: "dovme", label: "Dövme" },
  { id: "piercing", label: "Piercing" },
  { id: "kalici-makyaj", label: "Kalıcı Makyaj" },
  { id: "randevu", label: "Randevu" },
  { id: "fiyatlandirma", label: "Fiyatlandırma" },
  { id: "fotograf", label: "Fotoğraf ve Gizlilik" },
];
