"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react/ssr";
import { Diamond } from "@/components/ui/Diamond";
import { Icon } from "@/components/ui/Icon";
import { globalRoute } from "@/content/academic-support";
import { cn } from "@/lib/cn";

/** The eight parts of the route as a calm list: title + one line, details on demand. */
export function RouteAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ol className="border-t border-ink-800/10">
      {globalRoute.components.map((c, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <li key={c.title} className="border-b border-ink-800/10">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start gap-5 py-5 text-left md:gap-7 md:py-6"
            >
              <span className="w-8 shrink-0 pt-0.5 text-lg font-bold tabular-nums text-gold-600">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold leading-snug text-ink-800 transition-colors group-hover:text-gold-700">
                  {c.title}
                </span>
                <span className="mt-1 block text-body-sm text-muted">{c.summary}</span>
              </span>
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-700 transition-[transform,background-color,color] duration-300 ease-out-soft",
                  isOpen ? "rotate-45 bg-gold-500 text-ink-800" : "group-hover:bg-gold-500/15",
                )}
              >
                <Icon icon={Plus} size={16} />
              </span>
            </button>

            <div
              id={panelId}
              className={cn("grid transition-[grid-template-rows] duration-500 ease-out-soft", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pl-[3.25rem] pr-4 text-body-sm text-muted md:pl-[3.75rem] md:pr-14">
                  {c.lead && <p className="mb-2.5 font-semibold text-ink-800">{c.lead}</p>}
                  {c.text && <p>{c.text}</p>}
                  {c.items && (
                    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {c.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <Diamond className="size-[5px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {c.note && <p className="mt-3 font-semibold text-ink-800">{c.note}</p>}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
