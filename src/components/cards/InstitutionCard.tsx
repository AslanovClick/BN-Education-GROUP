"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Institution } from "@/content/services";

/**
 * Photo card for a school / university.
 * Rest: clean photo, a gradient only along the bottom, location + name + tuition.
 * Hover / keyboard focus / tap: the photo dims and the description + CTA slide in.
 * On touch screens the first tap reveals the details (there is no hover); the CTA is the only link.
 */
export function InstitutionCard({ institution }: { institution: Institution }) {
  const { name, location, price, text, image, href } = institution;
  const [open, setOpen] = useState(false);
  const reveal =
    "group-hover/card:opacity-100 group-focus-within/card:opacity-100 group-data-[open=true]/card:opacity-100";

  return (
    <article data-open={open} className="group/card relative isolate aspect-[4/5] overflow-hidden rounded-md bg-ink-800 text-white sm:aspect-[3/2] md:aspect-[4/5] lg:aspect-[4/3] xl:aspect-[3/2]">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        placeholder="blur"
        className="-z-10 object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/card:scale-[1.04] group-data-[open=true]/card:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-ink-950/90 via-ink-950/45 to-transparent"
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-ink-950/55 opacity-0 transition-opacity duration-500 ease-out-soft ${reveal}`}
      />

      <button
        type="button"
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Show"} details for ${name}`}
        onClick={() => setOpen((v) => !v)}
        className="absolute inset-0 cursor-pointer"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 lg:p-8">
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

        {/* Collapsed at rest (0fr → 1fr row), so it takes no space until hover/focus */}
        <div
          className={`grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out-soft group-hover/card:grid-rows-[1fr] group-focus-within/card:grid-rows-[1fr] group-data-[open=true]/card:grid-rows-[1fr] ${reveal}`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-5 border-t border-white/15 pt-5 mt-5 xl:flex-row xl:items-end xl:justify-between xl:gap-10">
              <p className="line-clamp-3 max-w-[480px] text-body-sm leading-relaxed text-white/85">{text}</p>
              <Button href={href} size="md" arrow className="pointer-events-auto self-start xl:shrink-0 xl:self-auto">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
