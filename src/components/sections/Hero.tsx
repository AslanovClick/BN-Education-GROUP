"use client";

import Image, { getImageProps } from "next/image";
import { motion, type Variants } from "motion/react";
import heroImage from "@/assets/images/hero.jpg";
import heroMobileImage from "@/assets/images/hero-mobile.jpg";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { EASE_OUT } from "@/components/motion/Reveal";
import { heroStats } from "@/content/home";
import { routes } from "@/content/site";

const intro: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
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
    <section
      data-surface="dark"
      className="theme-dark relative isolate flex min-h-svh items-center overflow-hidden bg-ink-800"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <HeroPicture />
        </motion.div>
        <div className="overlay-ink absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(13_7_22/0.45)_100%)]" />
      </div>

      <div className="container-page flex flex-col items-center pb-12 pt-28 text-center md:pb-14 md:pt-30">
        <motion.div variants={intro} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.div variants={rise}>
            <Image
              src="/brand/logo-stacked.svg"
              alt="BN Education Group"
              width={336}
              height={150}
              preload
              className="h-auto w-[210px] md:w-[250px] lg:w-[280px]"
            />
          </motion.div>

          <motion.div variants={rise} className="mt-8 md:mt-10">
            <Badge dot>Trusted by families worldwide</Badge>
          </motion.div>

          <h1 className="mt-8 flex flex-col items-center gap-2 md:mt-10 md:gap-3">
            <motion.span variants={rise} className="text-h1 text-white">
              Your Family’s
            </motion.span>
            <motion.span variants={rise} className="text-display text-balance text-gold-500">
              Private Education Office
            </motion.span>
          </h1>

          <motion.div variants={rise} className="mt-8 max-w-[720px] space-y-4 text-lead text-white/80 md:mt-10">
            <p className="text-pretty">
              We uncover your child’s potential, create a personalised education strategy, and manage the entire
              journey — from choosing the right school to university admission.
            </p>
            <p className="text-pretty">So you can focus on what matters most — being there for your child.</p>
          </motion.div>

          <motion.div
            variants={rise}
            className="mt-10 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:gap-4"
          >
            <Button href={routes.assessment}>Take an Assessment</Button>
            <Button href={routes.consultation} variant="outline-white">
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: EASE_OUT }}
          className="mt-12 grid w-full max-w-[960px] grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:mt-14 md:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <dd className="order-first text-[28px] font-bold leading-tight tracking-[-0.02em] text-gold-500 md:text-[32px]">
                <CountUp value={stat.value} suffix={stat.suffix} delay={0.9 + i * 0.08} />
              </dd>
              <dt className="text-caption font-medium uppercase tracking-[0.1em] text-white/65">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
