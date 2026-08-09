"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  CONSENT_STORAGE_KEY,
  defaultConsent,
  parseConsent,
  type ConsentPreferences,
} from "@/lib/analytics/consent";
import { trackEvent } from "@/lib/analytics/track";
import { CookiePreferencesModal } from "@/components/consent/CookiePreferencesModal";
import { AnalyticsLoader } from "@/components/analytics/AnalyticsLoader";

function subscribeConsent(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener("jutenyam:consent-updated", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("jutenyam:consent-updated", handler);
  };
}

let snapshotCache: {
  raw: string | null;
  value: ConsentPreferences | null;
} = { raw: null, value: null };

function getConsentSnapshot(): ConsentPreferences | null {
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (raw === snapshotCache.raw) {
    return snapshotCache.value;
  }
  snapshotCache = { raw, value: parseConsent(raw) };
  return snapshotCache.value;
}

function getServerConsentSnapshot(): ConsentPreferences | null {
  return null;
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [draft, setDraft] = useState<ConsentPreferences>({
    ...defaultConsent,
    updatedAt: new Date().toISOString(),
  });
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draftKey, setDraftKey] = useState<string | null>(null);

  const consentKey = consent?.updatedAt ?? null;
  if (consent && draftKey !== consentKey) {
    setDraft(consent);
    setDraftKey(consentKey);
  }

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener("jutenyam:open-cookie-preferences", openPreferences);
    return () =>
      window.removeEventListener(
        "jutenyam:open-cookie-preferences",
        openPreferences,
      );
  }, []);

  const persist = (next: ConsentPreferences) => {
    const value = {
      ...next,
      necessary: true as const,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
    snapshotCache = { raw: JSON.stringify(value), value };
    window.dispatchEvent(new Event("jutenyam:consent-updated"));
    setDraft(value);
    setDraftKey(value.updatedAt);
    setPreferencesOpen(false);
    trackEvent("cookie_preferences_updated", { source_page: "cookie_banner" });
  };

  return (
    <>
      <AnalyticsLoader consent={consent} />
      {!consent ? (
        <div
          className="fixed inset-x-0 bottom-[var(--mobile-bar-height)] z-[60] border-t border-border bg-surface p-4 md:bottom-0"
          role="region"
          aria-label="Çerez bildirimi"
        >
          <div className="container-page flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-serif text-xl text-text">Çerez tercihleri</p>
              <p className="mt-2 text-sm text-muted">
                Site temel işlevler için gerekli çerezleri kullanır. Analitik ve
                reklam araçları yalnızca onayınızdan sonra yüklenir. Ayrıntılar
                için{" "}
                <a href="/cerez-politikasi" className="text-accent underline">
                  Çerez Politikası
                </a>{" "}
                sayfasına bakabilirsiniz.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:min-w-[20rem]">
              <button
                type="button"
                className="min-h-11 whitespace-nowrap border border-border px-4 text-sm font-semibold text-text"
                onClick={() =>
                  persist({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                    updatedAt: new Date().toISOString(),
                  })
                }
              >
                Reddet
              </button>
              <button
                type="button"
                className="min-h-11 whitespace-nowrap bg-accent px-4 text-sm font-semibold text-text-dark"
                onClick={() =>
                  persist({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                    updatedAt: new Date().toISOString(),
                  })
                }
              >
                Kabul et
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <CookiePreferencesModal
        open={preferencesOpen}
        value={draft}
        onChange={setDraft}
        onClose={() => setPreferencesOpen(false)}
        onSave={() => persist(draft)}
      />
    </>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("jutenyam:open-cookie-preferences"));
}
