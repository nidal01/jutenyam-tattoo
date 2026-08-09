import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/config/business.config";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  variant?: "primary" | "light" | "dark";
  className?: string;
  priority?: boolean;
};

const sources = {
  primary: "/logo/logo-primary.svg",
  light: "/logo/logo-light.svg",
  dark: "/logo/logo-dark.svg",
} as const;

export function Logo({
  variant = "primary",
  className,
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${businessConfig.brandName} ana sayfa`}
    >
      <Image
        src={sources[variant]}
        alt={businessConfig.brandName}
        width={168}
        height={44}
        priority={priority}
        className="h-9 w-auto lg:h-10 xl:h-11"
      />
    </Link>
  );
}
