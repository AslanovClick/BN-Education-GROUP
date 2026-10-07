"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretDown, List, SquaresFour, X } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { EASE_OUT } from "@/components/motion/Reveal";
import { mainNav, routes, type NavItem } from "@/content/site";
import { cn } from "@/lib/cn";
import { SiteLink } from "./SiteLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navLinkClass } from "./navStyles";
import { ServicesMenu } from "./ServicesMenu";
import { useSurfaceBelow } from "./useSurfaceBelow";

const isActive = (href: string, pathname: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

/**
 * Fixed, static header. At the very top it's transparent over the hero (as in the design);
 * once the page scrolls it sits on frosted glass whose tint and text colour follow the surface
 * underneath (dark glass + white text over imagery, light glass + ink text over sand).
 */
export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { surface, scrolled } = useSurfaceBelow(headerRef);
  const dark = !menuOpen && surface === "dark";
  const glass = scrolled && !menuOpen;

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b",
          "transition-[background-color,border-color,color,backdrop-filter] duration-500 ease-out-soft",
          menuOpen && "border-ink-800/8 bg-sand-50 text-ink-800",
          !glass && !menuOpen && "border-white/8 bg-transparent text-white",
          glass && "backdrop-blur-xl backdrop-saturate-150",
          glass && (dark ? "border-white/10 bg-white/[0.06] text-white" : "border-ink-800/8 bg-white/70 text-ink-800"),
        )}
      >
        <div className="container-page grid h-20 grid-cols-[1fr_auto] items-center gap-4 xl:grid-cols-[1fr_auto_1fr]">
          <SiteLink href={routes.home} aria-label="BN Education Group — home" className="justify-self-start">
            {/* Logo drawn with a mask so it takes the header's current text colour */}
            <span
              aria-hidden
              className="block aspect-[130/54] w-[112px] bg-current [mask:url(/brand/logo-horizontal.svg)_center/contain_no-repeat] lg:w-[130px]"
            />
          </SiteLink>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-6 2xl:gap-8">
              {mainNav.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <li key={item.href}>
                    {item.children ? (
                      <ServicesMenu item={item} active={active} pathname={pathname} />
                    ) : (
                      <SiteLink href={item.href} aria-current={active ? "page" : undefined} className={navLinkClass(active)}>
                        {item.label}
                      </SiteLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-self-end gap-1 sm:gap-3">
            <LanguageSwitcher />
            <Button href={routes.assessment} size="md" className="hidden sm:inline-flex">
              Take an Assessment
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex size-12 items-center justify-center rounded-sm transition-colors hover:bg-current/10 xl:hidden"
            >
              <Icon icon={menuOpen ? X : List} size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu pathname={pathname} onNavigate={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

function MobileMenu({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className="fixed inset-0 z-40 flex flex-col bg-sand-50 pt-20 xl:hidden"
    >
      <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto pt-2">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } } }}
          className="divide-y divide-ink-800/8"
        >
          {mainNav.map((item) => (
            <motion.li key={item.href} variants={itemVariants}>
              <MobileItem item={item} pathname={pathname} onNavigate={onNavigate} />
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5, ease: EASE_OUT } }}
        className="container-page pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:hidden"
      >
        {/* From sm up the header already shows this button */}
        <Button href={routes.assessment} onClick={onNavigate} className="w-full">
          Take an Assessment
        </Button>
      </motion.div>
    </motion.div>
  );
}

function MobileItem({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const active = isActive(item.href, pathname);
  const [open, setOpen] = useState(() => !!item.children && active);
  const linkClass = cn(
    "flex flex-1 items-center py-3 text-lg font-semibold tracking-tight transition-colors",
    active ? "text-accent-text" : "text-ink-800 hover:text-accent-text",
  );

  if (!item.children) {
    return (
      <SiteLink href={item.href} onClick={onNavigate} aria-current={active ? "page" : undefined} className={linkClass}>
        {item.label}
      </SiteLink>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <SiteLink href={item.href} onClick={onNavigate} aria-current={pathname === item.href ? "page" : undefined} className={linkClass}>
          {item.label}
        </SiteLink>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} ${item.label.toLowerCase()} pages`}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-sm text-ink-800 transition-colors hover:bg-ink-800/5"
        >
          <Icon icon={CaretDown} size={18} className={cn("transition-transform duration-300 ease-out-soft", open && "rotate-180")} />
        </button>
      </div>
      <div className={cn("grid transition-[grid-template-rows] duration-400 ease-out-soft", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
        <ul className="pb-3">
          {/* The hub itself, so the list is useful without tapping "Services" first */}
          <li>
            <SiteLink
              href={item.href}
              onClick={onNavigate}
              tabIndex={open ? undefined : -1}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 py-2 pl-1 text-[15px] font-medium transition-colors",
                pathname === item.href ? "text-accent-text" : "text-ink-800/75 hover:text-accent-text",
              )}
            >
              <Icon icon={SquaresFour} size={18} className="shrink-0 text-gold-600" />
              All services
            </SiteLink>
          </li>
          {item.children.map((child) => {
            const childActive = pathname.startsWith(child.href);
            return (
              <li key={child.href}>
                <SiteLink
                  href={child.href}
                  onClick={onNavigate}
                  tabIndex={open ? undefined : -1}
                  aria-current={childActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 py-2 pl-1 text-[15px] font-medium transition-colors",
                    childActive ? "text-accent-text" : "text-ink-800/75 hover:text-accent-text",
                  )}
                >
                  <Icon icon={child.icon} size={18} className="shrink-0 text-gold-600" />
                  {child.label}
                </SiteLink>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </>
  );
}
