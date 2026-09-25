"use client";

import { useEffect, useState, type RefObject } from "react";

export type Surface = "light" | "dark";

/**
 * Tracks what the fixed header is floating over:
 * - `scrolled`: the page has left its very top (the header only gets a background after that);
 * - `surface`: whether the content under the header is a dark or light `[data-surface]`.
 * Checked at most once per frame; state only changes when a value actually flips,
 * so scrolling doesn't re-render the header.
 */
export function useSurfaceBelow(headerRef: RefObject<HTMLElement | null>) {
  const [surface, setSurface] = useState<Surface>("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const probe = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      setScrolled(window.scrollY > 8);
      const under = document
        .elementsFromPoint(window.innerWidth / 2, header.offsetHeight / 2)
        .find((el) => !header.contains(el));
      const next = (under?.closest("[data-surface]")?.getAttribute("data-surface") as Surface) ?? "light";
      setSurface((prev) => (prev === next ? prev : next));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(probe);
    };
    probe();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [headerRef]);

  return { surface, scrolled };
}
