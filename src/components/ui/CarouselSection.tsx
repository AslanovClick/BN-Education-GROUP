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
  children: ReactNode;
};

/**
 * Section header with prev/next controls + a horizontal, snap-scrolling track.
 * The track starts on the container edge and bleeds to the right edge of the viewport.
 */
export function CarouselSection({ id, eyebrow, title, description, label, className, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

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
    const el = trackRef.current;
    const item = el?.querySelector("li");
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (item.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const hideControls = edges.start && edges.end;

  return (
    <section id={id} aria-label={typeof title === "string" ? title : undefined} className={cn("section-y overflow-hidden", className)}>
      <Reveal className="container-page grid items-end gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)_auto]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-h2 text-balance text-fg">{title}</h2>
        </div>
        <p className="max-w-[620px] text-lead text-pretty text-fg-muted lg:pb-1">{description}</p>
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
        className="inset-container no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-10 pt-2 -mb-6 lg:mt-12"
      >
        {Children.map(children, (child) => (
          <StaggerItem as="li" className="flex w-[82vw] max-w-[414px] shrink-0 snap-start sm:w-[360px] xl:w-[414px]">
            {child}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
