"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { desktopNavigation } from "@/config/navigation.config";
import { cn } from "@/lib/utils/cn";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Ana menü"
      className="hidden min-w-0 flex-1 justify-center lg:flex"
    >
      <ul className="flex flex-nowrap items-center justify-center gap-0">
        {desktopNavigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex h-11 items-center whitespace-nowrap px-1.5 text-[11px] font-medium tracking-wide transition xl:px-2 xl:text-xs 2xl:px-2.5 2xl:text-sm",
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
