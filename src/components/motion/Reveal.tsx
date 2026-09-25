"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

/** Soft expo-out used across the site. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Fire a little before the element is fully in view, and only once.
const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

// Only opacity + transform are animated (GPU-composited, no layout/paint work while scrolling).
// `custom` carries an optional delay (seconds) into the visible state.
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE_OUT, delay } }),
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({ opacity: 1, transition: { duration: 1, ease: EASE_OUT, delay } }),
};

/** Image reveal: fades in while settling from a slight zoom. */
const unveil: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: (delay = 0) => ({ opacity: 1, scale: 1, transition: { duration: 1.4, ease: EASE_OUT, delay } }),
};

const VARIANTS = { fadeUp, fade, unveil };

type RevealProps = Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView"> & {
  variant?: keyof typeof VARIANTS;
  delay?: number;
  children?: ReactNode;
};

/** Animates its content in once it scrolls into view. */
export function Reveal({ variant = "fadeUp", delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={VARIANTS[variant]}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    />
  );
}

type StaggerProps = Omit<ComponentProps<typeof motion.div>, "variants" | "initial" | "whileInView"> & {
  gap?: number;
  delay?: number;
  as?: "div" | "ol" | "ul";
};

/** Parent that staggers its <StaggerItem> children as they enter the viewport. */
export function Stagger({ gap = 0.08, delay = 0, as = "div", ...rest }: StaggerProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    />
  );
}

type StaggerItemProps = Omit<ComponentProps<typeof motion.div>, "variants"> & {
  variant?: keyof typeof VARIANTS;
  as?: "div" | "li" | "article";
};

export function StaggerItem({ variant = "fadeUp", as = "div", ...rest }: StaggerItemProps) {
  const Comp = motion[as] as typeof motion.div;
  return <Comp variants={VARIANTS[variant]} {...rest} />;
}
