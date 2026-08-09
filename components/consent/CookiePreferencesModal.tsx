"use client";

import { useEffect, useId, useRef } from "react";
import type { ConsentPreferences } from "@/lib/analytics/consent";

type CookiePreferencesModalProps = {
  open: boolean;
  value: ConsentPreferences;
  onChange: (next: ConsentPreferences) => void;
  onClose: () => void;
  onSave: () => void;
};

export function CookiePreferencesModal({
  open,
  value,
  onChange,
  onClose,
  onSave,
}: CookiePreferencesModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const node = dialogRef.current;
    const focusable = node?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-4 sm:items-center">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-lg border border-border bg-surface p-6 shadow-2xl"
      >
        <h2 id={titleId} className="font-serif text-2xl text-text">
          Çerez Tercihleri
        </h2>
        <p className="mt-2 text-sm text-muted">
          Gerekli çerezler site işleyişi için zorunludur. Analitik ve reklam
          araçları site deneyimini ölçmek için kullanılabilir.
        </p>

        <div className="mt-6 space-y-4">
          <label className="flex items-start justify-between gap-4 border border-border p-3">
            <span>
              <span className="block font-medium text-text">Gerekli</span>
              <span className="text-sm text-muted">
                Temel işlev ve tercih saklama
              </span>
            </span>
            <input type="checkbox" checked disabled className="mt-1 size-5" />
          </label>

          <label className="flex items-start justify-between gap-4 border border-border p-3">
            <span>
              <span className="block font-medium text-text">Analitik</span>
              <span className="text-sm text-muted">
                Anonimleştirilmiş kullanım ölçümü
              </span>
            </span>
            <input
              type="checkbox"
              className="mt-1 size-5 accent-accent"
              checked={value.analytics}
              onChange={(event) =>
                onChange({ ...value, analytics: event.target.checked })
              }
            />
          </label>

          <label className="flex items-start justify-between gap-4 border border-border p-3">
            <span>
              <span className="block font-medium text-text">
                Reklam / pazarlama
              </span>
              <span className="text-sm text-muted">
                Google Ads ve Meta Pixel ölçümü
              </span>
            </span>
            <input
              type="checkbox"
              className="mt-1 size-5 accent-accent"
              checked={value.marketing}
              onChange={(event) =>
                onChange({ ...value, marketing: event.target.checked })
              }
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="min-h-11 bg-accent px-4 font-semibold text-text-dark"
            onClick={onSave}
          >
            Tercihleri Kaydet
          </button>
          <button
            type="button"
            className="min-h-11 border border-border px-4 text-text"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
