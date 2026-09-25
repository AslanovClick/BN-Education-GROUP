"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { EASE_OUT } from "@/components/motion/Reveal";
import { mainNav, routes } from "@/content/site";
import { cn } from "@/lib/cn";
import { SiteLink } from "./SiteLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useSurfaceBelow } from "./useSurfaceBelow";

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
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <SiteLink
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-sm font-medium tracking-[0.01em] transition-opacity duration-300",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gold-500",
                        "after:transition-transform after:duration-500 after:ease-out-soft",
                        active
                          ? "after:scale-x-100"
                          : "opacity-75 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </SiteLink>
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
      <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto pt-4">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } } }}
          className="divide-y divide-ink-800/8"
        >
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <motion.li
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                }}
              >
                <SiteLink
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center py-3.5 text-xl font-semibold tracking-tight transition-colors",
                    active ? "text-accent-text" : "text-ink-800 hover:text-accent-text",
                  )}
                >
                  {item.label}
                </SiteLink>
              </motion.li>
            );
          })}
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
