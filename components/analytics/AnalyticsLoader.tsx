"use client";

import Script from "next/script";
import { analyticsConfig } from "@/config/analytics.config";

/** Loads GA / Ads / Meta when env flags + IDs are set (banner is UI-only). */
export function AnalyticsLoader() {
  const loadGa =
    analyticsConfig.enableAnalytics &&
    Boolean(analyticsConfig.gaMeasurementId);

  const loadAds =
    analyticsConfig.enableGoogleAds &&
    Boolean(analyticsConfig.googleAdsId);

  const loadMeta =
    analyticsConfig.enableMetaPixel &&
    Boolean(analyticsConfig.metaPixelId);

  const gaId = analyticsConfig.gaMeasurementId;

  if (!loadGa && !loadAds && !loadMeta) return null;

  return (
    <>
      {loadGa || loadAds ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId || analyticsConfig.googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${loadGa ? `gtag('config', '${gaId}', { anonymize_ip: true });` : ""}
              ${loadAds ? `gtag('config', '${analyticsConfig.googleAdsId}');` : ""}
            `}
          </Script>
        </>
      ) : null}

      {loadMeta ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${analyticsConfig.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
