"use client";

import { MapPinned } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";

type DirectionsButtonProps = {
  label?: string;
  className?: string;
  ctaLocation: string;
  sourcePage?: string;
  showIcon?: boolean;
};

export function DirectionsButton({
  label = "Yol Tarifi Al",
  className,
  ctaLocation,
  sourcePage,
  showIcon = true,
}: DirectionsButtonProps) {
  return (
    <a
      href={businessConfig.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent",
        className,
      )}
      onClick={() =>
        trackEvent("directions_click", {
          cta_location: ctaLocation,
          source_page: sourcePage,
        })
      }
    >
      {showIcon ? <MapPinned className="size-4" aria-hidden /> : null}
      {label}
    </a>
  );
}
