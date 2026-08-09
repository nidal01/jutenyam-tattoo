"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/config/navigation.config";
import { cn } from "@/lib/utils/cn";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Ana menü" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {mainNavigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex min-h-11 items-center px-2.5 text-[13px] font-medium tracking-wide transition",
                  active
                    ? "border-b-2 border-accent text-accent"
                    : "text-muted hover:text-text",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
