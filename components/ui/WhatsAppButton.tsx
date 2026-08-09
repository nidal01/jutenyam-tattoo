"use client";

import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

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
        "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#075E54] transition hover:bg-[#20bd5a]",
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
      {showIcon ? <WhatsAppIcon className="size-4 text-[#075E54]" /> : null}
      {label}
    </a>
  );
}
