export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  googleAdsWhatsappLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? "",
  googleAdsPhoneLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  enableGoogleAds: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ADS === "true",
  enableMetaPixel: process.env.NEXT_PUBLIC_ENABLE_META_PIXEL === "true",
} as const;

export type AnalyticsEventName =
  | "whatsapp_click"
  | "phone_click"
  | "directions_click"
  | "instagram_click"
  | "facebook_click"
  | "youtube_click"
  | "service_view"
  | "portfolio_filter"
  | "portfolio_item_open"
  | "map_load"
  | "faq_open"
  | "blog_cta_click"
  | "cookie_preferences_updated";

export type AnalyticsEventParams = {
  source_page?: string;
  service?: string;
  cta_location?: string;
  portfolio_category?: string;
};
