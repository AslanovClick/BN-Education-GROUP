"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "@phosphor-icons/react/ssr";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { chipClass } from "@/components/ui/chip";
import { routes } from "@/content/site";
import type { Tier, TierFlow } from "@/content/tiers";

/** "How it works": one tab per tier, each a short timeline plus what parents receive. */
export function TierFlowTabs({ tiers, flows }: { tiers: Tier[]; flows: TierFlow[] }) {
  const [index, setIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tier = tiers[index];
  const flow = flows.find((f) => f.tierId === tier.id)!;

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + tiers.length) % tiers.length;
    setIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Packages" onKeyDown={onKey} className="flex flex-wrap gap-2 sm:gap-3">
        {tiers.map((t, i) => {
          const selected = i === index;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={chipClass(selected)}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${index}`}
        className="mt-8 lg:mt-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14"
          >
            <div>
              <p className="max-w-[640px] text-lead text-pretty text-ink-800">{flow.summary}</p>
              <ol className="relative mt-10">
                {flow.phases.map((phase, i) => (
                  <li key={phase.title} className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-4 pb-8 last:pb-0 sm:grid-cols-[28px_150px_minmax(0,1fr)] sm:gap-x-6">
                    {/* Rail from this node down to the next one */}
                    {i < flow.phases.length - 1 && (
                      <span aria-hidden className="absolute bottom-0 left-[13.5px] top-7 w-px bg-gold-300" />
                    )}
                    {/* Node, label and title share one 28px first line so they sit level */}
                    <span aria-hidden className="relative z-10 inline-flex size-7 items-center justify-center rounded-full border-[1.5px] border-gold-500 bg-white text-xs font-bold leading-none tabular-nums text-gold-700">
                      {i + 1}
                    </span>
                    <p className="flex h-7 items-center text-caption font-bold uppercase tracking-[0.1em] text-gold-700">{phase.when}</p>
                    <div className="col-start-2 sm:col-start-3">
                      <h4 className="text-lg font-bold leading-7 text-ink-800">{phase.title}</h4>
                      <p className="mt-1 text-body-sm text-muted">{phase.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="self-start rounded-md border border-gold-300/70 bg-white p-6 md:p-7">
              {tier.suits && (
                <div className="mb-6 border-b border-ink-800/8 pb-6">
                  <p className="text-caption font-bold uppercase tracking-[0.12em] text-gold-700">Who it suits</p>
                  <p className="mt-2 text-body-sm text-muted">{tier.suits}</p>
                </div>
              )}
              <p className="text-caption font-bold uppercase tracking-[0.12em] text-gold-700">What you receive</p>
              <ul className="mt-4 flex flex-col gap-3">
                {flow.parents.map((p) => (
                  <li key={p} className="flex gap-3 text-body-sm font-medium text-ink-800">
                    <Icon icon={Check} size={18} className="mt-0.5 shrink-0 text-gold-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink-800/8 pt-5">
                <p className="flex items-baseline gap-2 text-ink-800">
                  <span className="text-2xl font-bold tracking-[-0.02em]">{tier.price}</span>
                  {tier.priceNote && <span className="text-body-sm text-muted">{tier.priceNote}</span>}
                </p>
                <Button href={routes.consultation} size="md" arrow className="mt-4 w-full">
                  Discuss {tier.name}
                </Button>
              </div>
            </aside>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
