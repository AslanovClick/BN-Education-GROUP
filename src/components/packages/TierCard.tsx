"use client";

import { useId, useState } from "react";
import { CaretDown, Check } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Diamond } from "@/components/ui/Diamond";
import { Icon } from "@/components/ui/Icon";
import { routes } from "@/content/site";
import type { Tier } from "@/content/tiers";
import { cn } from "@/lib/cn";

/**
 * Package card: price, promise and four highlights up front; the full list sits behind
 * "Everything included" so the three cards stay easy to compare at a glance.
 * `featured` is marked by a stronger gold frame and soft shadow only — never a filled surface.
 */
export function TierCard({ tier }: { tier: Tier }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const { featured } = tier;

  return (
    <article
      className={cn(
        "relative flex h-full w-full flex-col rounded-md border bg-white p-6 transition-[border-color,box-shadow] duration-500 ease-out-soft md:p-8",
        featured
          ? "border-[1.5px] border-gold-500 shadow-[0_28px_60px_-34px_rgb(134_102_42/0.55)]"
          : "border-gold-300/70 hover:border-gold-500",
      )}
    >
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gold-700">{tier.name}</h3>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2 text-ink-800">
        <span className={cn("font-bold tracking-[-0.02em]", tier.price.startsWith("€") ? "text-[40px] leading-none" : "text-[28px] leading-tight")}>
          {tier.price}
        </span>
        {tier.priceNote && <span className="text-body-sm text-muted">{tier.priceNote}</span>}
      </p>
      {/* Fixed two-line slots keep the checklists level across the row */}
      <p className="mt-3 text-body text-pretty text-muted md:min-h-[2lh]">{tier.headline}</p>
      <p className="mt-4 text-caption font-medium uppercase tracking-[0.08em] text-subtle md:min-h-[2lh]">{tier.meta.join(" · ")}</p>

      <ul className="mt-6 flex flex-col gap-3 border-t border-ink-800/8 pt-6">
        {tier.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-body-sm font-medium text-ink-800">
            <Icon icon={Check} size={18} className="mt-0.5 shrink-0 text-gold-600" />
            {h}
          </li>
        ))}
      </ul>

      {/* Full contents, collapsed by default */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold-700 transition-colors hover:text-ink-800"
      >
        {open ? "Hide details" : `Everything included (${tier.includes.length})`}
        <Icon icon={CaretDown} size={14} className={cn("transition-transform duration-300 ease-out-soft", open && "rotate-180")} />
      </button>
      <div
        id={listId}
        className={cn("grid transition-[grid-template-rows] duration-500 ease-out-soft", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <div className="pt-4">
            {tier.intro && <p className="mb-3 text-body-sm font-semibold text-ink-800">{tier.intro}</p>}
            <ul className="flex flex-col gap-2.5 text-body-sm text-muted">
              {tier.includes.map((item) => {
                const text = typeof item === "string" ? item : `${item.text}: ${item.sub.join(", ").toLowerCase()}`;
                return (
                  <li key={text} className="flex gap-3">
                    <Diamond className="size-[5px]" />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
            {tier.footnotes && (
              <div className="mt-4 space-y-1 text-caption text-subtle">
                {tier.footnotes.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <Button href={routes.consultation} variant={featured ? "primary" : "outline-gold"} size="md" className="w-full">
          Discuss this package
        </Button>
      </div>
    </article>
  );
}
