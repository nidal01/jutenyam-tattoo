"use client";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import {
  CookieBanner,
  openCookiePreferences,
} from "@/components/consent/CookieBanner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        İçeriğe geç
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">{children}</main>
      <Footer onOpenCookiePreferences={openCookiePreferences} />
      <MobileContactBar />
      <CookieBanner />
    </>
  );
}
