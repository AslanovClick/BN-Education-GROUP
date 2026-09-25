"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Typography";
import { services } from "@/content/home";
import { Services } from "../Services";

// Pair the six services into three rows: [left, right]
const rows = Array.from({ length: Math.ceil(services.length / 2) }, (_, i) => services.slice(i * 2, i * 2 + 2));

/**
 * Services page: from md up a compact timeline — three rows, a card either side of the rail and a
 * single node per row. Phones get the regular carousel instead of a long scroll.
 */
export function ServicesTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.0005 });

  return (
    <>
      <Services id="services" links={false} className="bg-sand-50 md:hidden" />

      <section id="services-timeline" className="section-y hidden bg-sand-50 md:block">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we do"
              title="Our Services"
              description="Comprehensive education consulting services designed to help your child succeed at every stage of their academic journey."
              className="mx-auto"
            />
          </Reveal>

          <ol ref={listRef} className="relative mx-auto mt-14 flex max-w-[1200px] flex-col gap-8 lg:mt-16">
            <span aria-hidden className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold-300" />
            <motion.span
              aria-hidden
              style={{ scaleY: progress }}
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top bg-gold-500"
            />

            {rows.map((pair, row) => (
              <li key={row} className="relative grid grid-cols-[1fr_48px_1fr] items-stretch lg:grid-cols-[1fr_72px_1fr]">
                <Reveal className="flex">
                  <ServiceCard service={pair[0]} variant="row" />
                </Reveal>

                <motion.span
                  aria-hidden
                  initial={{ backgroundColor: "var(--color-sand-50)", scale: 0.6 }}
                  whileInView={{ backgroundColor: "var(--color-gold-500)", scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -45% 0px" }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="z-10 size-3 self-center justify-self-center rounded-full border-[1.5px] border-gold-500 ring-[5px] ring-sand-50"
                />

                {pair[1] && (
                  <Reveal delay={0.1} className="flex">
                    <ServiceCard service={pair[1]} variant="row" />
                  </Reveal>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
