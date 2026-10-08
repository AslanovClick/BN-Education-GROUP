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
 * Package comparison — one table for every screen. From md up it fits the container;
 * on phones the row labels stay pinned on the left while the package columns scroll sideways.
 */
export function CompareTable({ columns, rows, notes }: { columns: string[]; rows: CompareRow[]; notes?: string[] }) {
  // Opaque row colours so the pinned label column fully covers the cells scrolling under it
  const rowBg = (r: number) => (r % 2 === 1 ? "bg-[#faf9f7]" : "bg-white");
  const pinned =
    "max-md:sticky max-md:left-0 max-md:z-10 max-md:w-[132px] max-md:min-w-[132px] max-md:shadow-[8px_0_12px_-10px_rgb(29_15_51/0.25)]";

  return (
    <div>
      <p className="mb-3 text-caption text-subtle md:hidden">Swipe the table sideways to compare packages →</p>
      {/* `relative` keeps the sr-only labels inside the scroll area */}
      <div className="no-scrollbar relative overflow-x-auto rounded-md border border-gold-300/70 bg-white">
        <table className="w-full min-w-[560px] border-collapse text-left md:min-w-0">
          <thead>
            <tr className="border-b-2 border-gold-500">
              <th
                scope="col"
                className={cn(
                  "bg-white px-4 py-4 align-middle text-caption font-semibold uppercase tracking-[0.1em] text-subtle md:w-[34%] md:px-6 md:pb-4 md:pt-6 md:align-bottom",
                  pinned,
                )}
              >
                Package
              </th>
              {columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="min-w-[140px] px-3 py-4 text-center align-middle text-sm font-bold leading-snug text-ink-800 md:px-4 md:pb-4 md:pt-6 md:align-bottom md:text-base"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row.label} className={cn("border-t border-ink-800/6", rowBg(r))}>
                <th scope="row" className={cn("bg-inherit px-4 py-3.5 text-body-sm font-semibold text-ink-800 md:px-6", pinned)}>
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={cn("px-3 py-3.5 text-center text-body-sm text-muted md:px-4", r === 0 && "text-base font-bold text-ink-800")}
                  >
                    <Value value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
