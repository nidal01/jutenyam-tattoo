"use client";

import { Phone } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { buildPhoneUrl } from "@/lib/utils/phone";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";

type PhoneButtonProps = {
  label?: string;
  className?: string;
  ctaLocation: string;
  sourcePage?: string;
  showIcon?: boolean;
};

export function PhoneButton({
  label = "Hemen Ara",
  className,
  ctaLocation,
  sourcePage,
  showIcon = true,
}: PhoneButtonProps) {
  return (
    <a
      href={buildPhoneUrl()}
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent",
        className,
      )}
      onClick={() =>
        trackEvent("phone_click", {
          cta_location: ctaLocation,
          source_page: sourcePage,
        })
      }
      aria-label={`Telefon: ${businessConfig.phoneDisplay}`}
    >
      {showIcon ? <Phone className="size-4" aria-hidden /> : null}
      {label}
    </a>
  );
}
