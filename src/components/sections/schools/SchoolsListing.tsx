"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { InstitutionCard } from "@/components/cards/InstitutionCard";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { chipClass } from "@/components/ui/chip";
import { SplitHeading } from "@/components/ui/Typography";
import { schools } from "@/content/schools";

const countries = ["All", ...Array.from(new Set(schools.map((s) => s.country)))];

/** Boarding schools: country filter + portrait photo cards. */
export function SchoolsListing() {
  const [country, setCountry] = useState("All");
  const visible = country === "All" ? schools : schools.filter((s) => s.country === country);

  return (
    <section id="boarding-schools" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SplitHeading
            eyebrow="Our selection"
            title="Boarding Schools"
            description={
              <p>
                We start not with a list of schools, but with your child. After the assessment we present 5–8 carefully
                selected schools and explain the strengths and specifics of each — these are some of the schools families
                choose with us.
              </p>
            }
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-8 lg:mt-10">
          <div role="group" aria-label="Filter schools by country" className="flex flex-wrap gap-2 sm:gap-3">
            {countries.map((c) => (
              <button key={c} type="button" aria-pressed={c === country} onClick={() => setCountry(c)} className={chipClass(c === country)}>
                {c === "All" ? "All Countries" : c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((school, i) => (
              <motion.li
                layout
                key={school.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: Math.min(i, 5) * 0.04 }}
              >
                <InstitutionCard institution={school} compact />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
