"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MapPinned } from "lucide-react";
import { businessConfig } from "@/config/business.config";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";
import { buildPhoneUrl } from "@/lib/utils/phone";
import { trackEvent } from "@/lib/analytics/track";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils/cn";

const SCROLL_DELTA = 6;
const TOP_HIDE = 48;

export function MobileContactBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const unlocked = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (!unlocked.current && y > TOP_HIDE) {
        unlocked.current = true;
        setVisible(true);
        lastY.current = y;
        return;
      }

      if (!unlocked.current) {
        lastY.current = y;
        return;
      }

      if (y <= TOP_HIDE) {
        setVisible(false);
      } else if (y > lastY.current + SCROLL_DELTA) {
        setVisible(true);
      } else if (y < lastY.current - SCROLL_DELTA) {
        setVisible(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    unlocked.current = false;
    setVisible(false);
    lastY.current = window.scrollY;
  }, [pathname]);

  useEffect(() => {
    const onMenu = (event: Event) => {
      const detail = (event as CustomEvent<{ open: boolean }>).detail;
      setMenuOpen(Boolean(detail?.open));
    };
    window.addEventListener("jutenyam:mobile-menu", onMenu);
    return () => window.removeEventListener("jutenyam:mobile-menu", onMenu);
  }, []);

  const show = visible && !menuOpen;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--mobile-bar-offset",
      show ? "var(--mobile-bar-height)" : "0px",
    );
    return () => {
      document.documentElement.style.setProperty("--mobile-bar-offset", "0px");
    };
  }, [show]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full pointer-events-none",
      )}
      aria-hidden={!show}
    >
      <nav
        aria-label="Hızlı iletişim"
        className="grid h-[var(--mobile-bar-height)] grid-cols-3"
        inert={!show ? true : undefined}
      >
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center justify-center gap-1 text-xs text-text"
          tabIndex={show ? undefined : -1}
          onClick={() =>
            trackEvent("whatsapp_click", {
              cta_location: "mobile_bar",
              source_page: pathname,
            })
          }
        >
          <WhatsAppIcon className="size-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          href={buildPhoneUrl()}
          className="inline-flex flex-col items-center justify-center gap-1 text-xs text-text"
          tabIndex={show ? undefined : -1}
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
          tabIndex={show ? undefined : -1}
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
