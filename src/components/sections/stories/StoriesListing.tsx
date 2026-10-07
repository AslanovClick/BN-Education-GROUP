"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { chipClass } from "@/components/ui/chip";
import { featuredStory, situations, stories, type Situation } from "@/content/stories";
import { FeaturedStory } from "./FeaturedStory";
import { StoryCard } from "./StoryParts";

type Filter = "All" | Situation;

/** "Find your situation" filter, the story of the month and the rest of the stories. */
export function StoriesListing() {
  const [filter, setFilter] = useState<Filter>("All");
  const matches = (s: (typeof stories)[number]) => filter === "All" || s.situations.includes(filter);
  const showFeatured = matches(featuredStory);
  const rest = stories.filter((s) => s !== featuredStory && matches(s));

  return (
    <section className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <p className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">Find your situation</p>
          <div role="group" aria-label="Filter stories by situation" className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            {(["All", ...situations] as Filter[]).map((f) => (
              <button key={f} type="button" aria-pressed={f === filter} onClick={() => setFilter(f)} className={chipClass(f === filter)}>
                {f === "All" ? "All Stories" : f}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence initial={false}>
          {showFeatured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <Reveal className="pt-8">
                <FeaturedStory story={featuredStory} />
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.ul layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {rest.map((story, i) => (
              <motion.li
                layout
                key={story.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: Math.min(i, 5) * 0.04 }}
              >
                <StoryCard story={story} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
