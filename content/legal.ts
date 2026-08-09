import { businessConfig } from "@/config/business.config";

export const legalPages = {
  gizlilik: {
    title: "Gizlilik Politikası",
    path: "/gizlilik-politikasi",
    intro:
      "Bu politika, web sitemizi ziyaret ettiğinizde kişisel verilerinizin nasıl ele alındığına dair genel bilgilendirme sunar.",
    sections: [
      {
        heading: "Veri sorumlusu",
        paragraphs: [
          `${businessConfig.brandName} (${businessConfig.address.full}) bu web sitesinin işletmecisidir. İletişim: ${businessConfig.email}, ${businessConfig.phoneDisplay}.`,
        ],
      },
      {
        heading: "Site üzerinden işlenen veriler",
        paragraphs: [
          "Web sitesinde randevu formu bulunmamaktadır. Site üzerinden doğrudan toplanan veriler; çerez tercihleri, temel analitik tercihler ve onay vermeniz hâlinde Google/Meta araçlarının sağladığı anonimleştirilmiş veya takma adlı kullanım verileri ile sınırlıdır.",
          "WhatsApp, telefon, Instagram, Facebook, YouTube veya Google Maps üzerinden iletişime geçtiğinizde ilgili platformların kendi gizlilik politikaları geçerlidir.",
        ],
      },
      {
        heading: "Haklarınız",
        paragraphs: [
          "KVKK kapsamındaki haklarınız için bizimle iletişime geçebilirsiniz. Bu metin hukuk danışmanı tarafından gözden geçirilmelidir.",
        ],
      },
    ],
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    path: "/kvkk-aydinlatma-metni",
    intro:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metnidir. Açık rıza metninden ayrıdır.",
    sections: [
      {
        heading: "İşleme amaçları",
        paragraphs: [
          "Web sitesi güvenliği, çerez tercihlerinin saklanması, onay vermeniz hâlinde analitik ve reklam ölçümü ile hizmetlerimiz hakkında bilgilendirme amaçlarıyla sınırlı veri işleme söz konusu olabilir.",
        ],
      },
      {
        heading: "Toplanan veri kategorileri",
        paragraphs: [
          "Kimlik veya iletişim formu bulunmadığı için ad, telefon veya e-posta site üzerinden toplanmaz. Çerez tercihleri ve onaylı ölçüm araçlarına ilişkin teknik veriler işlenebilir.",
          "Telefon veya WhatsApp ile iletişime geçtiğinizde paylaştığınız bilgiler ilgili iletişim kanalının kurallarına tabidir.",
        ],
      },
      {
        heading: "Haklar",
        paragraphs: [
          "KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanmak için sakalar34@gmail.com adresine başvurabilirsiniz.",
        ],
      },
    ],
  },
  riza: {
    title: "Açık Rıza Metni",
    path: "/acik-riza-metni",
    intro:
      "Bu metin, zorunlu olmayan analitik ve pazarlama çerezleri için açık rıza süreçlerini açıklar. Aydınlatma metninden ayrıdır.",
    sections: [
      {
        heading: "Kapsam",
        paragraphs: [
          "Gerekli çerezler site işleyişi için kullanılır ve kapatılamaz. Analitik ve reklam/pazarlama çerezleri yalnızca açık rızanızla etkinleşir.",
          "Rızanızı dilediğiniz zaman Çerez Tercihleri üzerinden değiştirebilir veya geri alabilirsiniz.",
        ],
      },
      {
        heading: "Rıza verilmemesi",
        paragraphs: [
          "Rıza vermemeniz hâlinde siteyi temel işlevleriyle kullanmaya devam edebilirsiniz; GA4, Google Ads ve Meta Pixel yüklenmez.",
        ],
      },
    ],
  },
  cerez: {
    title: "Çerez Politikası",
    path: "/cerez-politikasi",
    intro:
      "Çerezler; gerekli işlevler, analitik ve reklam amaçlarıyla kategorilere ayrılır.",
    sections: [
      {
        heading: "Kategoriler",
        paragraphs: [
          "Gerekli: Tercih saklama ve temel site işlevi. Analitik: Onay sonrası kullanım ölçümü. Reklam/pazarlama: Onay sonrası Google Ads ve Meta Pixel.",
        ],
      },
      {
        heading: "Yönetim",
        paragraphs: [
          "İlk ziyarette Reddet, Yalnızca gerekli, Tercihleri yönet ve Kabul et seçenekleri sunulur. Footer’daki Çerez Tercihleri bağlantısından ayarları değiştirebilirsiniz.",
        ],
      },
    ],
  },
  fotograf: {
    title: "Fotoğraf ve Video Kullanım Politikası",
    path: "/fotograf-ve-video-kullanim-politikasi",
    intro:
      "Portföy ve tanıtım görsellerinin kullanımına ilişkin ilkeler.",
    sections: [
      {
        heading: "İzin",
        paragraphs: [
          "Müşteri görselleri yalnızca paylaşım izni alındığında yayımlanır. İzinsiz fotoğraf veya video paylaşımı yapılmaz.",
        ],
      },
      {
        heading: "Düzenleme",
        paragraphs: [
          "Görseller yanıltıcı biçimde düzenlenmez. İyileşmiş sonuç etiketi yalnızca gerçekten iyileşmiş fotoğraflarda kullanılır.",
        ],
      },
    ],
  },
  kullanim: {
    title: "Kullanım Koşulları",
    path: "/kullanim-kosullari",
    intro:
      "Web sitesinin kullanımına ilişkin genel koşullar.",
    sections: [
      {
        heading: "İçerik",
        paragraphs: [
          "Sitedeki bilgiler genel bilgilendirme amaçlıdır; tıbbi teşhis, tedavi veya kesin sonuç vaadi içermez.",
        ],
      },
      {
        heading: "İletişim",
        paragraphs: [
          "Randevu ve bilgi talepleri WhatsApp veya telefon üzerinden alınır. Otomatik rezervasyon sistemi yoktur.",
        ],
      },
      {
        heading: "Üçüncü taraf bağlantılar",
        paragraphs: [
          "Sosyal medya ve harita bağlantıları ilgili platformların politikalarına tabidir.",
        ],
      },
    ],
  },
} as const;
