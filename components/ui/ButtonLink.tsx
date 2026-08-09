import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-text-dark hover:bg-accent-soft focus-visible:outline-accent",
  secondary:
    "border border-border bg-transparent text-text hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-text underline-offset-4 hover:underline",
  light:
    "bg-text-dark text-light hover:bg-[#2a2b31] border border-transparent",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  onClick,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
