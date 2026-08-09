import { businessConfig } from "@/config/business.config";
import { buildPhoneUrl } from "@/lib/utils/phone";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-surface text-xs text-muted sm:text-sm">
      <div className="header-shell relative flex h-9 items-center justify-between gap-3 overflow-hidden whitespace-nowrap sm:h-10">
        <p className="min-w-0 truncate lg:max-w-[32%]">
          <span className="text-text">Tokat Merkez</span>
          <span className="mx-1.5 text-border sm:mx-2" aria-hidden>
            ·
          </span>
          <span className="sm:hidden">08.00–22.00 · 7 gün</span>
          <span className="hidden sm:inline">
            {businessConfig.openingHoursDisplay}
          </span>
        </p>

        <p className="pointer-events-none absolute left-1/2 hidden max-w-[42%] -translate-x-1/2 truncate text-center font-serif text-sm italic tracking-wide text-accent-soft lg:block xl:text-[15px]">
          {businessConfig.slogan}
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
