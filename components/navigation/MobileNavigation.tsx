"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/config/navigation.config";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils/cn";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(pathname);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-text"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Menüyü aç"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" aria-hidden />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
          id={panelId}
        >
          <div className="container-page flex items-center justify-between py-4">
            <p className="font-serif text-2xl tracking-wide">Menü</p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobil ana menü" className="container-page pb-10">
            <ul className="flex flex-col gap-1">
              {mainNavigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 items-center border-b border-border py-3 text-lg",
                        active ? "text-accent" : "text-text",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <WhatsAppButton
                ctaLocation="mobile_menu"
                sourcePage={pathname}
                className="w-full"
              />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
