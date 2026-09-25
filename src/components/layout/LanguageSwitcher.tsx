"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretDown, Check, Globe } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";
import { EASE_OUT } from "@/components/motion/Reveal";
import { languages } from "@/content/site";
import { cn } from "@/lib/cn";
import { useLanguage } from "./useLanguage";

/** Dropdown language picker. Colours follow the header (currentColor) so it works on light and dark glass. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const [current, setLanguage] = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    // Focus the active language when the menu opens.
    const index = languages.findIndex((l) => l.code === current);
    requestAnimationFrame(() => itemRefs.current[index]?.focus());
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, current]);

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const onMenuKey = (e: KeyboardEvent) => {
    const items = itemRefs.current;
    const index = items.findIndex((el) => el === document.activeElement);
    if (e.key === "Escape") return close();
    if (e.key === "Tab") return close(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = (index + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Language: ${languages.find((l) => l.code === current)?.label}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="inline-flex h-12 items-center gap-1.5 rounded-sm px-3 text-sm font-semibold uppercase tracking-[0.04em] transition-colors duration-300 hover:bg-current/10"
      >
        <Icon icon={Globe} size={18} />
        <span>{current}</span>
        <Icon
          icon={CaretDown}
          size={12}
          className={cn("transition-transform duration-300 ease-out-soft", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Choose language"
            onKeyDown={onMenuKey}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="absolute right-0 top-full z-10 mt-2 w-52 origin-top-right overflow-hidden rounded-md border border-ink-800/8 bg-white p-1.5 text-ink-800 shadow-[0_18px_40px_-16px_rgb(13_7_22/0.35)]"
          >
            {languages.map((lang, i) => {
              const active = lang.code === current;
              return (
                <button
                  key={lang.code}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setLanguage(lang.code);
                    close();
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm transition-colors duration-200",
                    "outline-none hover:bg-sand-50 focus-visible:bg-sand-50",
                    active ? "font-semibold" : "font-medium text-ink-800/80",
                  )}
                >
                  <span className="w-6 text-xs font-bold uppercase tracking-[0.06em] text-gold-600">{lang.code}</span>
                  <span className="flex-1">{lang.label}</span>
                  {active && <Icon icon={Check} size={16} className="text-gold-600" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
