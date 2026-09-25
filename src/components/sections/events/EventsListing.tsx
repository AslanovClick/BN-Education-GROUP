"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EventCard } from "@/components/cards/EventCard";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { eventFormats, type EventItem } from "@/content/events";
import { cn } from "@/lib/cn";

type Filter = "All" | (typeof eventFormats)[number];
const FILTERS: Filter[] = ["All", ...eventFormats];

/** Filter chips + responsive grid of event cards. */
export function EventsListing({ events }: { events: EventItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? events : events.filter((e) => e.format === filter);

  return (
    <section id="events" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <div role="group" aria-label="Filter events by format" className="flex flex-wrap gap-2 sm:gap-3">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={cn(
                    // Small chip versions of the primary / outline-gold buttons
                    "inline-flex h-10 items-center rounded-sm border-[1.5px] px-5 text-sm font-semibold",
                    "transition-[background-color,border-color,color,box-shadow] duration-300 ease-out-soft",
                    active
                      ? "border-gold-500 bg-gold-500 text-ink-800 shadow-[0_0_14px_rgb(221_186_109/0.3)]"
                      : "border-gold-500 text-accent-text hover:bg-gold-500/15",
                  )}
                >
                  {f === "All" ? "All Events" : f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((event, i) => (
              <motion.li
                layout
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: Math.min(i, 5) * 0.04 }}
                className="flex"
              >
                <EventCard event={event} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-body text-muted">No {filter.toLowerCase()} events scheduled right now.</p>
        )}
      </div>
    </section>
  );
}
