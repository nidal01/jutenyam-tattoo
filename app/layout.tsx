import type { Metadata } from "next";
import { Fraunces, Outfit, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { businessConfig } from "@/config/business.config";
import { getSiteUrl, siteConfig } from "@/config/site.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Jutenyam Tattoo & Piercing | Tokat Dövme ve Piercing",
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(getSiteUrl()),
  applicationName: businessConfig.brandName,
  icons: {
    icon: "/logo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${fraunces.variable} ${outfit.variable} ${syne.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
