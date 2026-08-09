import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { businessConfig } from "@/config/business.config";
import { getSiteUrl, siteConfig } from "@/config/site.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
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
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
