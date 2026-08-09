import type {
  AnalyticsEventName,
  AnalyticsEventParams,
} from "@/config/analytics.config";
import { analyticsConfig } from "@/config/analytics.config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: AnalyticsEventName,
  params: AnalyticsEventParams = {},
): void {
  if (typeof window === "undefined") return;
  if (!analyticsConfig.enableAnalytics && !analyticsConfig.gaMeasurementId) {
    return;
  }

  const safeParams: AnalyticsEventParams = {
    source_page: params.source_page,
    service: params.service,
    cta_location: params.cta_location,
    portfolio_category: params.portfolio_category,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, safeParams);
  }

  if (
    name === "whatsapp_click" &&
    analyticsConfig.enableGoogleAds &&
    analyticsConfig.googleAdsWhatsappLabel
  ) {
    window.gtag?.("event", "conversion", {
      send_to: `${analyticsConfig.googleAdsId}/${analyticsConfig.googleAdsWhatsappLabel}`,
    });
  }

  if (
    name === "phone_click" &&
    analyticsConfig.enableGoogleAds &&
    analyticsConfig.googleAdsPhoneLabel
  ) {
    window.gtag?.("event", "conversion", {
      send_to: `${analyticsConfig.googleAdsId}/${analyticsConfig.googleAdsPhoneLabel}`,
    });
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, safeParams);
  }
}
