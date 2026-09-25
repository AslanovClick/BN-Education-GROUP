"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { EASE_OUT, Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Typography";
import { steps, type Step } from "@/content/home";
import { cn } from "@/lib/cn";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.0005 });

  return (
    <section id="process" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="A clear five-step process"
            description="From the first conversation to ongoing support throughout your child’s educational journey."
            className="mx-auto"
          />
        </Reveal>

        <ol ref={listRef} className="relative mx-auto mt-14 flex max-w-[1120px] flex-col gap-12 lg:mt-20 lg:gap-10">
          {/* Timeline rail + scroll-linked progress */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-[9px] w-px bg-gold-300 md:left-1/2 md:-translate-x-1/2"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute inset-y-0 left-[9px] w-px origin-top bg-gold-500 md:left-1/2 md:-translate-x-1/2"
          />

          {steps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: Step; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const flipped = index % 2 === 1; // image on the left for even steps

  return (
    <li className="relative grid gap-5 pl-10 md:grid-cols-[1fr_56px_1fr] md:gap-0 md:pl-0 lg:grid-cols-[1fr_80px_1fr]">
      {/* Node on the rail */}
      <motion.span
        aria-hidden
        initial={{ backgroundColor: "var(--color-sand-50)", scale: 0.6 }}
        whileInView={{ backgroundColor: "var(--color-gold-500)", scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -45% 0px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="absolute left-0 top-8 z-10 size-[18px] rounded-full border-2 border-gold-500 ring-4 ring-sand-50 md:static md:col-start-2 md:row-start-1 md:self-center md:justify-self-center"
      />

      <Reveal
        className={cn("md:row-start-1 md:h-full", flipped ? "md:col-start-3" : "md:col-start-1")}
      >
        <div className="flex h-full flex-col justify-center overflow-hidden rounded-md bg-white p-7 md:min-h-[300px] lg:p-10">
          <div className="relative">
            {/* Big step number (Figma: 140px, gold 10%, top-right). Shown from lg up; below that it
                would crowd the text, so it's dropped. A float of the same footprint makes the label
                and title wrap around it instead of running underneath. */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-7.5 -top-10 hidden w-[200px] select-none text-center text-[140px] font-normal leading-none text-gold-500/10 lg:block"
            >
              {number}
            </span>
            <span aria-hidden className="float-right ml-4 hidden h-[100px] w-[152px] lg:block" />

            <p className="text-sm font-bold text-gold-500">Step {number}</p>
            <h3 className="mt-3 text-h3 text-balance text-ink-800">{step.title}</h3>
            <div className="mt-4 space-y-3 text-body text-muted">
              {step.text.map((p) => (
                <p key={p} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        variant="unveil"
        delay={0.1}
        className={cn(
          "relative aspect-[5/3] overflow-hidden rounded-md bg-sand-100 md:row-start-1 md:aspect-auto md:min-h-[300px]",
          flipped ? "md:col-start-1" : "md:col-start-3",
        )}
      >
        <Image
          src={step.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 90vw"
          placeholder="blur"
          className="object-cover"
        />
      </Reveal>
    </li>
  );
}
