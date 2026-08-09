"use client";

import Link from "next/link";
import {
  footerServiceLinks,
  legalLinks,
  mainNavigation,
} from "@/config/navigation.config";
import { businessConfig } from "@/config/business.config";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

type FooterProps = {
  onOpenCookiePreferences?: () => void;
};

export function Footer({ onOpenCookiePreferences }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface pb-[calc(var(--mobile-bar-height)+1rem)] pt-14 xl:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">
            {businessConfig.artistName} ile Tokat Merkez’de dövme, piercing ve
            kalıcı makyaj. {businessConfig.slogan}.
          </p>
          <SocialLinks className="mt-5" sourcePage="footer" />
        </div>

        <div>
          <h2 className="font-serif text-xl text-text">Menü</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-text">Hizmetler</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-text">İletişim</h2>
          <address className="mt-4 space-y-2 text-sm text-muted not-italic">
            <p>{businessConfig.address.full}</p>
            <p>
              <a
                href={`tel:${businessConfig.phoneInternational}`}
                className="hover:text-accent"
              >
                {businessConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${businessConfig.email}`}
                className="hover:text-accent"
              >
                {businessConfig.email}
              </a>
            </p>
            <p>{businessConfig.openingHoursDisplay}</p>
          </address>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-border pt-6">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
          {legalLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="min-h-11 hover:text-accent"
              onClick={onOpenCookiePreferences}
            >
              Çerez Tercihleri
            </button>
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted">
          © {year} {businessConfig.brandName}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
