"use client";

import { useRef, useState } from "react";
import { Check, Minus } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";
import type { CompareRow } from "@/content/tiers";
import { cn } from "@/lib/cn";

function Value({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <>
        <Icon icon={Check} size={20} className="inline text-gold-600" />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Icon icon={Minus} size={16} className="inline text-ink-800/25" />
        <span className="sr-only">Not included</span>
      </>
    );
  return <>{value}</>;
}

/**
 * Package comparison. From md up a full table; on phones a swipeable slider of
 * card-tables (one package each), so the page itself never scrolls sideways.
 */
export function CompareTable({ columns, rows, notes }: { columns: string[]; rows: CompareRow[]; notes?: string[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  const step = () => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return 0;
    return card.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
  };
  const onScroll = () => {
    const el = trackRef.current;
    const w = step();
    if (!el || !w) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const next = atEnd ? columns.length - 1 : Math.round(el.scrollLeft / w);
    setActive((prev) => (prev === next ? prev : next));
  };
  const goTo = (i: number) => trackRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div>
      {/* Desktop / tablet */}
      <div className="hidden overflow-hidden rounded-md border border-gold-300/70 bg-white md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-gold-500">
              <th scope="col" className="w-[34%] px-6 pb-4 pt-6 align-bottom text-caption font-semibold uppercase tracking-[0.1em] text-subtle">
                Package
              </th>
              {columns.map((c) => (
                <th key={c} scope="col" className="px-4 pb-4 pt-6 text-center align-bottom text-base font-bold text-ink-800">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row.label} className={cn("border-t border-ink-800/6", r % 2 === 1 && "bg-sand-50/60")}>
                <th scope="row" className="px-6 py-3.5 text-body-sm font-semibold text-ink-800">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className={cn("px-4 py-3.5 text-center text-body-sm text-muted", r === 0 && "text-base font-bold text-ink-800")}>
                    <Value value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phones */}
      {/* Phones: a swipeable row of card-tables, one per package, with dots */}
      <div className="md:hidden">
        <ul
          ref={trackRef}
          onScroll={onScroll}
          aria-label="Packages"
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1"
        >
          {columns.map((c, col) => (
            <li key={c} className="relative w-[86%] shrink-0 snap-start">
              <article className="h-full overflow-hidden rounded-md border border-gold-300/70 bg-white">
                {/* One-line title so every card's rows start at the same height */}
                <header className="border-b-2 border-gold-500 px-5 pb-3.5 pt-5">
                  <h3 className="truncate whitespace-nowrap text-base font-bold text-ink-800">{c}</h3>
                </header>
                <dl className="divide-y divide-ink-800/6 px-5">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-5 py-3">
                      <dt className="text-body-sm text-ink-800/75">{row.label}</dt>
                      <dd className="max-w-[45%] shrink-0 text-right text-body-sm font-semibold text-ink-800">
                        <Value value={row.values[col]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center gap-2">
          {columns.map((c, i) => (
            <button
              key={c}
              type="button"
              aria-label={`Show ${c}`}
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

      {notes && (
        <div className="mt-4 space-y-1 text-caption text-subtle">
          {notes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      )}
    </div>
  );
}
