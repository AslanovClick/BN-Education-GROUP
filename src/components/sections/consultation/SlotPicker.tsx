"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretLeft, CaretRight, Globe } from "@phosphor-icons/react/ssr";
import { Select } from "@/components/forms/Field";
import { EASE_OUT } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { meeting, timezones } from "@/content/consultation";
import { cn } from "@/lib/cn";
import { dateKey, formatTime, hourIn, offsetLabel, zonedTime } from "@/lib/time";

export type Slot = { date: Date; key: string };

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const noop = () => () => {};

/** Local "today" and timezone only exist in the browser — null during SSR, filled in on hydration. */
function useClientValue<T>(read: () => T) {
  return useSyncExternalStore(noop, read, () => null);
}

// Deterministic "already booked" pattern so the demo looks realistic but stable.
const isBooked = (key: string, i: number) => {
  let h = 0;
  for (const c of key + i) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h % 5 === 0;
};

type Props = {
  value: Slot | null;
  onChange: (slot: Slot | null) => void;
  tz: string | null;
  onTzChange: (tz: string) => void;
  error?: string;
};

export function SlotPicker({ value, onChange, tz, onTzChange, error }: Props) {
  const todayKey = useClientValue(() => new Date().toDateString());
  const detectedTz = useClientValue(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
  const zone = tz ?? detectedTz ?? meeting.officeTz;

  const today = useMemo(() => (todayKey ? new Date(todayKey) : null), [todayKey]);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const [pickedDay, setDay] = useState<{ y: number; m: number; d: number } | null>(null);

  const firstBookable = useMemo(() => {
    if (!today) return null;
    const d = new Date(today);
    do d.setDate(d.getDate() + 1);
    while (d.getDay() === 0 || d.getDay() === 6);
    return { y: d.getFullYear(), m: d.getMonth(), d: d.getDate() };
  }, [today]);
  const day = pickedDay ?? firstBookable;
  const current = view ?? (day ? { y: day.y, m: day.m } : null);

  const zoneOptions = useMemo(() => {
    const list = [...timezones];
    if (detectedTz && !list.some((z) => z.id === detectedTz)) {
      list.unshift({ id: detectedTz, label: detectedTz.split("/").pop()!.replace(/_/g, " ") });
    }
    return list;
  }, [detectedTz]);

  if (!today || !current) {
    // SSR / first paint placeholder with the same footprint
    return <div className="h-[400px] animate-pulse rounded-md bg-sand-50" aria-hidden />;
  }

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + meeting.horizonDays);

  const first = new Date(current.y, current.m, 1);
  const lead = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(current.y, current.m + 1, 0).getDate();
  const canPrev = current.y > today.getFullYear() || current.m > today.getMonth();
  const canNext = new Date(current.y, current.m + 1, 1) <= maxDate;

  const isAvailable = (d: number) => {
    const date = new Date(current.y, current.m, d);
    const weekend = date.getDay() === 0 || date.getDay() === 6;
    return !weekend && date > today && date <= maxDate;
  };

  const shiftMonth = (delta: number) => {
    const next = new Date(current.y, current.m + delta, 1);
    setView({ y: next.getFullYear(), m: next.getMonth() });
  };

  const slots = day
    ? meeting.slots.map((hhmm, i) => {
        const date = zonedTime(day.y, day.m, day.d, hhmm, meeting.officeTz);
        const key = `${dateKey(day.y, day.m, day.d)}T${hhmm}`;
        return { date, key, booked: isBooked(key, i) };
      })
    : [];
  const morning = slots.filter((s) => hourIn(s.date, zone) < 12);
  const afternoon = slots.filter((s) => hourIn(s.date, zone) >= 12);

  return (
    <div className="grid gap-6 sm:grid-cols-[minmax(0,300px)_minmax(0,1fr)] sm:gap-6">
      {/* Calendar */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-ink-800" aria-live="polite">
            {new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(first)}
          </p>
          <div className="flex gap-2">
            <MonthButton label="Previous month" icon={CaretLeft} disabled={!canPrev} onClick={() => shiftMonth(-1)} />
            <MonthButton label="Next month" icon={CaretRight} disabled={!canNext} onClick={() => shiftMonth(1)} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-y-0.5 text-center">
          {WEEKDAYS.map((w) => (
            <span key={w} className="pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-subtle">
              {w}
            </span>
          ))}
          {Array.from({ length: lead }, (_, i) => (
            <span key={`pad-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const d = i + 1;
            const date = new Date(current.y, current.m, d);
            const available = isAvailable(d);
            const selected = day?.y === current.y && day.m === current.m && day.d === d;
            const isToday = date.toDateString() === todayKey;
            return (
              <div key={d} className="flex justify-center">
                <button
                  type="button"
                  disabled={!available}
                  aria-pressed={selected}
                  aria-label={new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(date)}
                  onClick={() => {
                    setDay({ y: current.y, m: current.m, d });
                    onChange(null);
                  }}
                  className={cn(
                    "inline-flex size-9 items-center justify-center rounded-full text-sm tabular-nums transition-colors duration-200",
                    selected
                      ? "bg-gold-500 font-bold text-ink-800 shadow-[0_6px_16px_-6px_rgb(221_186_109/0.8)]"
                      : available
                        ? "font-semibold text-ink-800 hover:bg-gold-500/15"
                        : "cursor-default text-ink-800/25",
                    isToday && !selected && "ring-1 ring-gold-500/60",
                  )}
                >
                  {d}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Times */}
      <div className="flex flex-col sm:border-l sm:border-line sm:pl-6">
        <label htmlFor="timezone" className="text-caption font-semibold uppercase tracking-[0.1em] text-ink-800/80">
          Your timezone
        </label>
        <div className="relative mt-2.5">
          <Icon icon={Globe} size={18} className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gold-600" />
          <Select
            id="timezone"
            value={zone}
            onChange={(e) => onTzChange(e.target.value)}
            className="[&_select]:pl-11 [&_select]:text-sm"
          >
            {zoneOptions.map((z) => (
              <option key={z.id} value={z.id}>
                {z.label} ({offsetLabel(z.id)})
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-5 flex-1" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {!day ? (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-md bg-sand-50 p-5 text-body-sm text-muted"
              >
                Select a date to see available times.
              </motion.p>
            ) : (
              <motion.div
                key={dateKey(day.y, day.m, day.d)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="flex flex-col gap-4"
              >
                {[
                  { label: "Morning", items: morning },
                  { label: "Afternoon", items: afternoon },
                ]
                  .filter((g) => g.items.length)
                  .map((group) => (
                    <div key={group.label}>
                      <p className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{group.label}</p>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {group.items.map((s) => {
                          const selected = value?.key === s.key;
                          return (
                            <button
                              key={s.key}
                              type="button"
                              disabled={s.booked}
                              aria-pressed={selected}
                              aria-label={`${formatTime(s.date, zone)}${s.booked ? ", unavailable" : ""}`}
                              onClick={() => onChange({ date: s.date, key: s.key })}
                              className={cn(
                                "h-10 rounded-sm border text-sm font-semibold tabular-nums transition-colors duration-200",
                                selected
                                  ? "border-gold-500 bg-gold-500 text-ink-800"
                                  : s.booked
                                    ? "cursor-default border-transparent bg-sand-50 text-ink-800/25 line-through"
                                    : "border-gold-500/40 text-ink-800 hover:border-gold-500 hover:bg-gold-500/10",
                              )}
                            >
                              {formatTime(s.date, zone)}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {error && (
          <p id="slot-error" className="mt-4 text-caption text-danger" role="alert">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

function MonthButton({
  label,
  icon,
  disabled,
  onClick,
}: {
  label: string;
  icon: typeof CaretLeft;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-9 items-center justify-center rounded-full border border-gold-500/60 text-gold-600 transition-colors hover:bg-gold-500 hover:text-ink-800 disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon icon={icon} size={16} />
    </button>
  );
}
