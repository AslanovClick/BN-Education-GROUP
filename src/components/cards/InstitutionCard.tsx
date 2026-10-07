"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { schoolHref, type Institution } from "@/content/schools";
import { cn } from "@/lib/cn";

/**
 * Photo card for a school / university.
 * Rest: clean photo, a gradient only along the bottom, location + name + tuition.
 * Hover / keyboard focus / tap: the photo dims and the description + CTA slide in.
 * On touch screens (no hover) the details are open by default over a top-to-bottom gradient,
 * and the full-width CTA is the link — one tap, no reveal step.
 * `compact` — portrait card for 3–4 column grids.
 */
export function InstitutionCard({ institution, compact = false }: { institution: Institution; compact?: boolean }) {
  const { name, location, price, text, image, slug } = institution;
  const href = schoolHref(slug);
  const [open, setOpen] = useState(false);
  const reveal =
    "group-hover/card:opacity-100 group-focus-within/card:opacity-100 group-data-[open=true]/card:opacity-100 touch:opacity-100";

  return (
    <article
      data-open={open}
      className={cn(
        "group/card relative isolate overflow-hidden rounded-md bg-ink-800 text-white",
        compact
          ? "aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5]"
          : "aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5] lg:aspect-[4/3] xl:aspect-[3/2]",
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={compact ? "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        placeholder="blur"
        className="-z-10 object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/card:scale-[1.04] group-data-[open=true]/card:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-ink-950/90 via-ink-950/45 to-transparent touch:h-full touch:bg-[linear-gradient(180deg,rgb(13_7_22/0.05)_0%,rgb(13_7_22/0.2)_35%,rgb(13_7_22/0.82)_70%,rgb(13_7_22/0.94)_100%)]"
      />
      {/* Hover dim — not used on touch, where the gradient above carries the text */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-ink-950/55 opacity-0 transition-opacity duration-500 ease-out-soft group-hover/card:opacity-100 group-focus-within/card:opacity-100 group-data-[open=true]/card:opacity-100 touch:hidden"
      />

      <button
        type="button"
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Show"} details for ${name}`}
        onClick={() => setOpen((v) => !v)}
        className="absolute inset-0 cursor-pointer touch:hidden"
      />

      <div className={cn("pointer-events-none absolute inset-x-0 bottom-0", compact ? "p-5 lg:p-6" : "p-6 lg:p-8")}>
        {compact ? (
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.1em] text-white/80">{location}</p>
            <h3 className="mt-1.5 text-xl font-bold leading-snug text-balance">{name}</h3>
            <p className="mt-2 leading-tight">
              <span className="text-caption text-white/70">Tuition from </span>
              <span className="text-base font-bold tabular-nums">{price}</span>
              <span className="text-caption text-white/70"> / year</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:flex-col md:items-start md:gap-3 lg:flex-row lg:items-end lg:gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-white/80">{location}</p>
              <h3 className="mt-2 text-h3 xl:text-2xl xl:leading-tight">{name}</h3>
            </div>
            <p className="shrink-0 leading-tight sm:text-right md:text-left lg:text-right">
              <span className="text-caption text-white/70 sm:block md:inline lg:block">Tuition from </span>
              <span className="text-xl font-bold tabular-nums md:text-2xl">{price}</span>
              <span className="text-caption text-white/70"> / year</span>
            </p>
          </div>
        )}

        {/* Collapsed at rest (0fr → 1fr row), so it takes no space until hover/focus */}
        <div
          className={`grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out-soft group-hover/card:grid-rows-[1fr] group-focus-within/card:grid-rows-[1fr] group-data-[open=true]/card:grid-rows-[1fr] touch:grid-rows-[1fr] ${reveal}`}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "mt-4 flex flex-col gap-4 border-t border-white/15 pt-4",
                !compact && "mt-5 gap-5 pt-5 hover-fine:xl:flex-row hover-fine:xl:items-end hover-fine:xl:justify-between hover-fine:xl:gap-10",
              )}
            >
              <p className="line-clamp-3 max-w-[480px] text-body-sm leading-relaxed text-white/85">{text}</p>
              <Button
                href={href}
                size="md"
                arrow
                className={cn("pointer-events-auto self-start touch:w-full touch:self-stretch", !compact && "xl:shrink-0 xl:self-auto")}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
