"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/content/portfolio";

type AccessibleLightboxProps = {
  items: PortfolioItem[];
  activeId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export function AccessibleLightbox({
  items,
  activeId,
  onClose,
  onNavigate,
}: AccessibleLightboxProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const index = items.findIndex((item) => item.id === activeId);
  const active = index >= 0 ? items[index] : null;

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && items[index + 1]) {
        onNavigate(items[index + 1].id);
      }
      if (event.key === "ArrowLeft" && items[index - 1]) {
        onNavigate(items[index - 1].id);
      }
      if (event.key === "Tab") {
        const root = document.getElementById("portfolio-lightbox");
        const focusable = root?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, index, items, onClose, onNavigate]);

  if (!active) return null;

  return (
    <div
      id="portfolio-lightbox"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full max-w-4xl border border-border bg-surface p-4 md:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="font-serif text-2xl text-text">
              {active.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{active.alt}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="min-h-11 min-w-11 border border-border px-3 text-text"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
        <div className="relative aspect-[4/3] overflow-auto bg-background">
          {active.image ? (
            <Image
              src={active.image}
              alt={active.alt}
              width={1200}
              height={900}
              className="mx-auto h-auto max-h-[70vh] w-auto object-contain"
            />
          ) : null}
        </div>
        <div className="mt-4 flex justify-between gap-3">
          <button
            type="button"
            className="min-h-11 border border-border px-4 disabled:opacity-40"
            disabled={!items[index - 1]}
            onClick={() => items[index - 1] && onNavigate(items[index - 1].id)}
          >
            Önceki
          </button>
          <button
            type="button"
            className="min-h-11 border border-border px-4 disabled:opacity-40"
            disabled={!items[index + 1]}
            onClick={() => items[index + 1] && onNavigate(items[index + 1].id)}
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}
