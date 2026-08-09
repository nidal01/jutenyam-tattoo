import { businessConfig } from "@/config/business.config";
import { getSiteUrl } from "@/config/site.config";
import { toSchemaOpeningHours } from "@/lib/utils/hours";

export function localBusinessJsonLd(options?: {
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  const siteUrl = getSiteUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: businessConfig.brandName,
    description: `${businessConfig.artistName} — ${businessConfig.artistTitle}. ${businessConfig.slogan}`,
    url: siteUrl,
    telephone: businessConfig.phoneInternational,
    email: businessConfig.email,
    image: `${siteUrl}/images/og/og-home.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessConfig.address.street}, ${businessConfig.address.building}, ${businessConfig.address.floor}`,
      addressLocality: businessConfig.address.district,
      addressRegion: businessConfig.address.city,
      addressCountry: "TR",
    },
    openingHours: toSchemaOpeningHours(),
    sameAs: [
      businessConfig.social.instagram,
      businessConfig.social.facebook,
      businessConfig.social.youtube,
    ],
    hasMap: businessConfig.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "Tokat",
    },
  };

  if (
    options?.aggregateRating &&
    options.aggregateRating.reviewCount > 0 &&
    options.aggregateRating.ratingValue > 0
  ) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: options.aggregateRating.ratingValue,
      reviewCount: options.aggregateRating.reviewCount,
    };
  }

  return data;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: businessConfig.artistName,
    jobTitle: businessConfig.artistTitle,
    worksFor: {
      "@type": "LocalBusiness",
      name: businessConfig.brandName,
    },
    url: `${getSiteUrl()}/hakkimizda`,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessConfig.brandName,
    url: getSiteUrl(),
    inLanguage: "tr-TR",
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Organization",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: businessConfig.brandName,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}${input.path}`,
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "LocalBusiness",
      name: businessConfig.brandName,
      telephone: businessConfig.phoneInternational,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessConfig.address.full,
        addressLocality: "Tokat",
        addressCountry: "TR",
      },
    },
    areaServed: "Tokat",
    url: `${getSiteUrl()}${input.path}`,
  };
}
