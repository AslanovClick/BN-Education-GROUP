"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { IconButton } from "./IconButton";
import { Eyebrow } from "./Typography";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** Accessible name of the scrolling list. */
  label: string;
  className?: string;
  /** Width classes for each slide; defaults to the standard 414px card. */
  itemClassName?: string;
  children: ReactNode;
};

const DEFAULT_ITEM = "w-[82vw] max-w-[414px] sm:w-[360px] xl:w-[414px]";

/**
 * Section header with prev/next controls + a horizontal, snap-scrolling track.
 * The track starts on the container edge and bleeds to the right edge of the viewport.
 */
export function CarouselSection({
  id,
  eyebrow,
  title,
  description,
  label,
  className,
  itemClassName = DEFAULT_ITEM,
  children,
}: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const count = Children.count(children);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [active, setActive] = useState(0);

  /** Distance between the starts of two neighbouring cards. */
  const stepSize = () => {
    const el = trackRef.current;
    const item = el?.querySelector("li");
    if (!el || !item) return 0;
    return item.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
  };

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 4;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const step = stepSize();
    const index = end ? count - 1 : step ? Math.round(el.scrollLeft / step) : 0;
    // Only re-render when something visible actually changes
    setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
    setActive(Math.min(count - 1, Math.max(0, index)));
  }, [count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * stepSize(), behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    trackRef.current?.scrollTo({ left: index * stepSize(), behavior: "smooth" });
  };

  const hideControls = edges.start && edges.end;

  return (
    <section id={id} aria-label={typeof title === "string" ? title : undefined} className={cn("section-y overflow-hidden", className)}>
      <Reveal className="container-page grid items-end gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)_auto]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-h2 text-balance text-fg">{title}</h2>
        </div>
        <div className="max-w-[640px] text-lead text-pretty text-fg-muted lg:pb-1">{description}</div>
        <div className={cn("hidden gap-3 md:flex", hideControls && "md:hidden")}>
          <IconButton icon={ArrowLeft} label="Previous" onClick={() => scrollBy(-1)} disabled={edges.start} />
          <IconButton icon={ArrowRight} label="Next" onClick={() => scrollBy(1)} disabled={edges.end} />
        </div>
      </Reveal>

      <Stagger
        as="ul"
        ref={trackRef as React.Ref<HTMLDivElement>}
        aria-label={label}
        gap={0.1}
        // The track is tall and often sits at the bottom edge of the first screen — start as soon as it peeks in
        viewport={{ once: true, amount: 0 }}
        className="inset-container no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-10 pt-2 -mb-6 lg:mt-12"
      >
        {Children.map(children, (child) => (
          <StaggerItem as="li" className={cn("flex shrink-0 snap-start", itemClassName)}>
            {child}
          </StaggerItem>
        ))}
      </Stagger>

      {/* Mobile pagination — arrows are hidden below md, swiping is the main control there */}
      {count > 1 && (
        <div className="container-page mt-1 flex justify-center gap-1 md:hidden" aria-label={`${label} pagination`}>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1} of ${count}`}
              aria-current={i === active ? "true" : undefined}
              className="group/dot flex h-6 items-center px-1"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-out-soft",
                  i === active ? "w-6 bg-gold-500" : "w-1.5 bg-gold-500/45 group-hover/dot:bg-gold-500/70",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
