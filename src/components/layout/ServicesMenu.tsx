"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CaretDown } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";
import { EASE_OUT } from "@/components/motion/Reveal";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/cn";
import { navLinkClass } from "./navStyles";
import { SiteLink } from "./SiteLink";

/**
 * Desktop "Services" item: the label links to the hub, the panel opens on hover (with a short
 * close delay so the pointer can travel into it) or via the caret button for keyboard and touch.
 */
export function ServicesMenu({ item, active, pathname }: { item: NavItem; active: boolean; pathname: string }) {
  // Remember which page the panel was opened on, so it closes by itself after navigating
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((prev) => {
      const next = typeof value === "function" ? value(prev === pathname) : value;
      return next ? pathname : null;
    });
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const panelId = useId();
  const children = item.children ?? [];

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div
      ref={rootRef}
      className="relative flex items-center gap-0.5"
      onPointerEnter={(e) => e.pointerType === "mouse" && show()}
      onPointerLeave={(e) => e.pointerType === "mouse" && hide()}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <SiteLink href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={navLinkClass(active)}>
        {item.label}
      </SiteLink>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${item.label} pages`}
        // A mouse has already opened the panel on hover, so a click only keeps it open;
        // keyboard and touch toggle it.
        onClick={(e) => ((e.nativeEvent as PointerEvent).pointerType === "mouse" ? setOpen(true) : setOpen((v) => !v))}
        className={cn(
          "-mr-1.5 inline-flex size-7 items-center justify-center rounded-sm transition-[opacity,background-color] duration-300 hover:bg-current/10",
          active || open ? "opacity-100" : "opacity-75",
        )}
      >
        <Icon icon={CaretDown} size={12} className={cn("transition-transform duration-300 ease-out-soft", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            // pt bridges the gap below the label so the pointer can move into the panel
            className="absolute left-1/2 top-full z-10 -translate-x-1/2 pt-5"
          >
            <div className="w-[600px] overflow-hidden rounded-md border border-ink-800/8 bg-white text-ink-800 shadow-[0_24px_60px_-24px_rgb(13_7_22/0.4)]">
              <ul className="grid grid-cols-2 gap-1 p-2">
                {children.map((child) => {
                  const current = pathname.startsWith(child.href);
                  return (
                    <li key={child.href}>
                      <SiteLink
                        href={child.href}
                        aria-current={current ? "page" : undefined}
                        className={cn(
                          "group/item flex h-full gap-3.5 rounded-sm p-4 transition-colors duration-300 hover:bg-sand-50 focus-visible:bg-sand-50",
                          current && "bg-sand-50",
                        )}
                      >
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition-colors duration-300 group-hover/item:border-gold-500 group-hover/item:bg-gold-500 group-hover/item:text-ink-800">
                          <Icon icon={child.icon} size={20} />
                        </span>
                        <span>
                          <span className="block text-[15px] font-bold leading-snug">{child.label}</span>
                          <span className="mt-1 block text-body-sm text-muted">{child.text}</span>
                        </span>
                      </SiteLink>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between gap-4 border-t border-ink-800/8 bg-sand-50/70 px-6 py-3.5">
                <p className="text-body-sm text-muted">Summer programmes, family support and more</p>
                <SiteLink
                  href={item.href}
                  className="group/all inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700"
                >
                  All services
                  <Icon icon={ArrowRight} size={16} className="transition-transform duration-300 ease-out-soft group-hover/all:translate-x-1" />
                </SiteLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
