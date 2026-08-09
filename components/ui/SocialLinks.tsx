"use client";

import { socialLinks } from "@/content/social-links";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils/cn";

type SocialLinksProps = {
  className?: string;
  sourcePage?: string;
};

export function SocialLinks({ className, sourcePage }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center px-1 text-sm text-muted transition hover:text-accent"
            onClick={() => {
              if (link.id === "instagram") {
                trackEvent("instagram_click", { source_page: sourcePage });
              }
              if (link.id === "facebook") {
                trackEvent("facebook_click", { source_page: sourcePage });
              }
              if (link.id === "youtube") {
                trackEvent("youtube_click", { source_page: sourcePage });
              }
            }}
          >
            {link.label}
            {"handle" in link && link.handle ? ` ${link.handle}` : ""}
          </a>
        </li>
      ))}
    </ul>
  );
}
