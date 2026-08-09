"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background/70",
      )}
    >
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo priority />
        <DesktopNavigation />
        <div className="flex items-center gap-3">
          <WhatsAppButton
            ctaLocation="header"
            sourcePage={pathname}
            className="hidden sm:inline-flex"
          />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
