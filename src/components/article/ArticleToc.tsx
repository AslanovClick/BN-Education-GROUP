"use client";

import { useEffect, useMemo, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type TocItem = { id: string; text: string; level: 2 | 3 };

/** Tracks which heading is currently at the top of the reading area. */
function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function TocList({ items, active, onNavigate }: { items: TocItem[]; active?: string; onNavigate?: () => void }) {
  return (
    <ol className="flex flex-col gap-0.5">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "block border-l-2 py-1.5 pl-3 text-sm leading-snug transition-colors duration-300",
                isActive
                  ? "border-gold-500 font-semibold text-ink-800"
                  : "border-transparent text-ink-800/60 hover:text-ink-800",
              )}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

const panel = "rounded-md bg-sand-50";
const title = "text-caption font-bold uppercase tracking-[0.12em] text-gold-600";

/** Table of contents in a soft panel: sticky sidebar on desktop, collapsible above the article on mobile. */
export function ArticleToc({ items, variant }: { items: TocItem[]; variant: "sidebar" | "inline" }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useActiveHeading(ids);
  const [open, setOpen] = useState(false);

  if (variant === "sidebar") {
    return (
      <nav aria-label="On this page" className={cn(panel, "p-6")}>
        <p className={cn(title, "mb-4")}>On this page</p>
        <TocList items={items} active={active} />
      </nav>
    );
  }

  return (
    <nav aria-label="On this page" className={panel}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className={title}>On this page</span>
        <Icon icon={CaretDown} size={16} className={cn("text-subtle transition-transform duration-300", open && "rotate-180")} />
      </button>
      <div className={cn("grid transition-[grid-template-rows] duration-400 ease-out-soft", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <TocList items={items} active={active} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
