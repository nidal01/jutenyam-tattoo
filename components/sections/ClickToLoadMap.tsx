"use client";

import { useState } from "react";
import { businessConfig } from "@/config/business.config";
import { trackEvent } from "@/lib/analytics/track";
import { DirectionsButton } from "@/components/ui/DirectionsButton";

type ClickToLoadMapProps = {
  sourcePage?: string;
};

export function ClickToLoadMap({ sourcePage = "/iletisim" }: ClickToLoadMapProps) {
  const [loaded, setLoaded] = useState(false);
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(businessConfig.address.full)}&output=embed`;

  return (
    <div className="space-y-4">
      <div className="overflow-hidden border border-border bg-surface">
        {loaded ? (
          <iframe
            title="Jutenyam Tattoo & Piercing haritası"
            src={embedSrc}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-80 flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,rgba(196,135,92,0.18),transparent_55%)] px-6 text-center">
            <p className="max-w-md text-muted">
              Harita gizlilik ve performans için yalnızca istediğinizde yüklenir.
              Adres ve yol tarifi her durumda kullanılabilir.
            </p>
            <button
              type="button"
              className="min-h-11 bg-accent px-5 font-semibold text-text-dark"
              onClick={() => {
                setLoaded(true);
                trackEvent("map_load", { source_page: sourcePage });
              }}
            >
              Haritayı Göster
            </button>
          </div>
        )}
      </div>
      <address className="text-sm text-muted not-italic">
        {businessConfig.address.full}
      </address>
      <DirectionsButton
        ctaLocation="map_section"
        sourcePage={sourcePage}
      />
    </div>
  );
}
