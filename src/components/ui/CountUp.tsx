"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

/**
 * Counts from 0 to `value` once it's properly in view.
 * The final value is rendered invisibly to reserve the width, so the layout never shifts
 * while digits change, and is exposed to screen readers as plain text.
 */
export function CountUp({ value, suffix = "", duration = 1.6, delay = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.9 });
  const reduce = useReducedMotion();
  const final = `${value}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduce) {
      node.textContent = final;
      return;
    }
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix, final, duration, delay]);

  return (
    <span className={`relative inline-block tabular-nums ${className ?? ""}`}>
      <span className="sr-only">{final}</span>
      <span aria-hidden className="invisible">
        {final}
      </span>
      <span ref={ref} aria-hidden className="absolute inset-0">
        0{suffix}
      </span>
    </span>
  );
}
