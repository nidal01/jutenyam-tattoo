"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone, MapPinned } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";
import { buildPhoneUrl } from "@/lib/utils/phone";
import { trackEvent } from "@/lib/analytics/track";

export function MobileContactBar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <nav
        aria-label="Hızlı iletişim"
        className="grid h-[var(--mobile-bar-height)] grid-cols-3"
      >
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center gap-1 text-xs text-text"
          onClick={() =>
            trackEvent("whatsapp_click", {
              cta_location: "mobile_bar",
              source_page: pathname,
            })
          }
        >
          <MessageCircle className="size-5 text-[#3d9b6e]" aria-hidden />
          WhatsApp
        </a>
        <a
          href={buildPhoneUrl()}
          className="inline-flex flex-col items-center justify-center gap-1 text-xs text-text"
          onClick={() =>
            trackEvent("phone_click", {
              cta_location: "mobile_bar",
              source_page: pathname,
            })
          }
          aria-label={`Ara: ${businessConfig.phoneDisplay}`}
        >
          <Phone className="size-5 text-accent" aria-hidden />
          Ara
        </a>
        <a
          href={businessConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center gap-1 text-xs text-text"
          onClick={() =>
            trackEvent("directions_click", {
              cta_location: "mobile_bar",
              source_page: pathname,
            })
          }
        >
          <MapPinned className="size-5 text-accent" aria-hidden />
          Yol Tarifi
        </a>
      </nav>
    </div>
  );
}
