"use client";

import { getImageProps } from "next/image";
import { motion, type Variants } from "motion/react";
import heroImage from "@/assets/images/hero.jpg";
import heroMobileImage from "@/assets/images/hero-mobile.jpg";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { EASE_OUT } from "@/components/motion/Reveal";
import { heroStats } from "@/content/home";
import { routes } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Homepage hero. The company name is the headline — set very large, left-aligned and anchored
 * to the bottom of the photo like a magazine cover. "Your Family's Private Education Office"
 * is the eyebrow, and the description is a single sentence.
 */

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
// Each headline line slides up from behind a mask
const line: Variants = {
  hidden: { y: "105%" },
  visible: { y: 0, transition: { duration: 1.2, ease: EASE_OUT } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT } },
};

/**
 * Art-directed background. On phones/tablets the hero is taller than it is wide, so `object-cover`
 * shows only a narrow vertical slice of a landscape photo — a portrait crop of the hi-res shot is
 * used there instead, sized by its rendered width (≈ viewport height), not by `100vw`.
 */
function HeroPicture() {
  const common = { alt: "", quality: 75 };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ ...common, src: heroMobileImage, sizes: "(max-width: 1023px) 900px" });
  const { props: desktop } = getImageProps({
    ...common,
    src: heroImage,
    sizes: "100vw",
    loading: "eager", // <picture> fetches only the matching source, so this is still a single request
    fetchPriority: "high",
  });

  return (
    <picture>
      <source media="(max-width: 1023px)" srcSet={mobileSrcSet} sizes="900px" />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- decorative, alt="" comes from props */}
      <img {...desktop} className="absolute inset-0 size-full object-cover object-[50%_35%] max-lg:object-center" />
    </picture>
  );
}

export function Hero() {
  return (
    <section data-surface="dark" className="theme-dark relative isolate flex min-h-svh overflow-hidden bg-ink-800">
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: EASE_OUT }}
          className="absolute inset-0"
        >
          <HeroPicture />
        </motion.div>
        {/* One top-to-bottom ink gradient: light behind the header and sky, deepest under the type at the bottom.
            Phones get a denser middle — the portrait crop puts bright stone right behind the copy. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(13_7_22/0.42)_0%,rgb(13_7_22/0.26)_22%,rgb(13_7_22/0.44)_38%,rgb(13_7_22/0.56)_60%,rgb(13_7_22/0.85)_84%,rgb(13_7_22/0.92)_100%)] max-lg:bg-[linear-gradient(180deg,rgb(13_7_22/0.45)_0%,rgb(13_7_22/0.4)_25%,rgb(13_7_22/0.58)_48%,rgb(13_7_22/0.82)_72%,rgb(13_7_22/0.92)_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-page flex flex-col justify-end pb-10 pt-32 md:pb-14 lg:pb-16"
      >
        <motion.p variants={rise} className="flex items-center gap-4 text-eyebrow text-gold-500">
          <span aria-hidden className="h-px w-10 bg-gold-500" />
          Your Family’s Private Education Office
        </motion.p>

        <h1 className="mt-6 font-bold uppercase leading-[0.92] tracking-[-0.035em] text-white text-[clamp(3.25rem,1.2rem+7.6vw,9.75rem)]">
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span variants={line} className="block">
              BN Education
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span variants={line} className="flex items-center gap-[0.25em]">
              Group
              {/* Gold rule runs from the word to the edge of the container */}
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.9 }}
                className="mt-[0.08em] h-[2px] flex-1 origin-left bg-gold-500/80"
              />
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-white/15 pt-8 md:mt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <motion.div variants={rise}>
            <p className="max-w-[460px] text-lead text-pretty text-white/80">
              We uncover your child’s potential and manage the whole journey — from the right school to university
              admission.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:gap-4">
              <Button href={routes.assessment}>Take an Assessment</Button>
              <Button href={routes.consultation} variant="outline-white">
                Book a Consultation
              </Button>
            </div>
          </motion.div>

          <motion.dl variants={rise} className="grid grid-cols-3 gap-x-4 sm:gap-x-0 lg:flex">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col gap-1.5 sm:border-l sm:border-white/15 sm:px-6 lg:px-8 lg:last:pr-0",
                  // Phones: light dividers between the three figures
                  i > 0 && "max-sm:border-l max-sm:border-white/15 max-sm:pl-4",
                )}
              >
                <dt className="max-w-[150px] text-balance text-[11px] font-medium uppercase leading-snug tracking-[0.08em] text-white/60 sm:text-caption">
                  {stat.label}
                </dt>
                <dd className="order-first text-[28px] font-bold leading-tight tracking-[-0.02em] text-gold-500 md:text-[36px]">
                  <CountUp value={stat.value} suffix={stat.suffix} delay={1 + i * 0.1} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
}
