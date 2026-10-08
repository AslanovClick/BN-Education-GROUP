"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Accessible name of the list. */
  label: string;
  /** Layout from the breakpoint where the slider turns into a grid, e.g. "md:grid md:grid-cols-2 lg:grid-cols-3". */
  gridClassName: string;
  /** Breakpoint prefix that hides the dots, e.g. "md". */
  until: "sm" | "md" | "lg";
  /** Slide width on phones. */
  itemClassName?: string;
  className?: string;
  children: ReactNode;
};

const hideFrom = { sm: "sm:hidden", md: "md:hidden", lg: "lg:hidden" } as const;
const resetFrom = {
  sm: "sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none",
  md: "md:mx-0 md:overflow-visible md:px-0 md:pb-0 md:snap-none",
  lg: "lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none",
} as const;
const itemResetFrom = { sm: "sm:w-auto", md: "md:w-auto", lg: "lg:w-auto" } as const;

/**
 * Phones: a swipeable snap row bleeding to the screen edges, with dots.
 * From `until` up: a regular grid (pass the grid classes in `gridClassName`).
 */
export function SnapSlider({ label, gridClassName, until, itemClassName = "w-[84%]", className, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  const step = () => {
    const el = trackRef.current;
    const first = el?.querySelector("li");
    if (!el || !first) return 0;
    return first.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
  };
  const onScroll = () => {
    const el = trackRef.current;
    const w = step();
    if (!el || !w) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const next = atEnd ? items.length - 1 : Math.round(el.scrollLeft / w);
    setActive((prev) => (prev === next ? prev : next));
  };
  const goTo = (i: number) => trackRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div className={className}>
      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label={label}
        className={cn(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1",
          resetFrom[until],
          gridClassName,
        )}
      >
        {items.map((child, i) => (
          // `relative` keeps absolutely positioned descendants (sr-only text, stretched links) inside the track
          <li key={i} className={cn("relative shrink-0 snap-start", itemClassName, itemResetFrom[until])}>
            {child}
          </li>
        ))}
      </ul>
      <div className={cn("mt-5 flex justify-center gap-2", hideFrom[until])}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show item ${i + 1}`}
            aria-current={i === active || undefined}
            onClick={() => goTo(i)}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-300 ease-out-soft",
                i === active ? "w-6 bg-gold-500" : "w-1.5 bg-ink-800/20",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
