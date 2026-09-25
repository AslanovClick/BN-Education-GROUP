"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

/**
 * Internal navigation link. Clicking a link to the page you're already on would otherwise do
 * nothing (Next keeps the scroll position), which feels broken for the logo / "Home" — so in
 * that case it scrolls smoothly back to the top instead.
 */
export function SiteLink({ href, onClick, ...rest }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
