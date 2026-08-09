import { businessConfig } from "@/config/business.config";
import { buildPhoneUrl } from "@/lib/utils/phone";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-surface text-xs text-muted sm:text-sm">
      <div className="container-page flex h-9 items-center justify-between gap-3 overflow-hidden whitespace-nowrap sm:h-10">
        <p className="min-w-0 truncate">
          <span className="text-text">Tokat Merkez</span>
          <span className="mx-1.5 text-border sm:mx-2" aria-hidden>
            ·
          </span>
          <span className="sm:hidden">08.00–22.00 · 7 gün</span>
          <span className="hidden sm:inline">
            {businessConfig.openingHoursDisplay}
          </span>
        </p>
        <a
          href={buildPhoneUrl()}
          className="inline-flex h-9 shrink-0 items-center font-medium text-accent hover:text-accent-soft sm:h-10"
        >
          {businessConfig.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
