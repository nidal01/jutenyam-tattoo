"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  ctaLocation: string;
  sourcePage?: string;
  service?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  label = "WhatsApp’tan Bilgi Al",
  className,
  ctaLocation,
  sourcePage,
  service,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 bg-[#1f6b4a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a855c]",
        className,
      )}
      onClick={() =>
        trackEvent("whatsapp_click", {
          cta_location: ctaLocation,
          source_page: sourcePage,
          service,
        })
      }
    >
      {showIcon ? <MessageCircle className="size-4" aria-hidden /> : null}
      {label}
    </a>
  );
}
