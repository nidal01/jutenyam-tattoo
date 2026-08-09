"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics/track";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/utils/cn";

type FAQAccordionProps = {
  items: FaqItem[];
  sourcePage: string;
};

export function FAQAccordion({ items, sourcePage }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="border border-border bg-surface/40">
            <h3>
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left text-base font-medium text-text"
                aria-expanded={open}
                onClick={() => {
                  const next = open ? null : item.id;
                  setOpenId(next);
                  if (next) {
                    trackEvent("faq_open", {
                      source_page: sourcePage,
                      service: item.category,
                    });
                  }
                }}
              >
                {item.question}
                <span aria-hidden className="text-accent">
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
