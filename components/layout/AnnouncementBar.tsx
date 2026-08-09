import { businessConfig } from "@/config/business.config";
import { buildPhoneUrl } from "@/lib/utils/phone";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-surface text-sm text-muted">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
        <p>
          <span className="text-text">Tokat Merkez</span>
          <span className="mx-2 text-border" aria-hidden>
            |
          </span>
          {businessConfig.openingHoursDisplay}
        </p>
        <a
          href={buildPhoneUrl()}
          className="min-h-11 inline-flex items-center font-medium text-accent hover:text-accent-soft"
        >
          {businessConfig.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
