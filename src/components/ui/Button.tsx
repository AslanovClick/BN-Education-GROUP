import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export type ButtonVariant = "primary" | "outline-white" | "outline-gold";
export type ButtonSize = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-sm font-semibold " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out-soft " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-ink-800 shadow-[0_0_14px_rgb(221_186_109/0.3)] " +
    "hover:bg-gold-400 hover:shadow-[0_10px_30px_-8px_rgb(221_186_109/0.65)]",
  "outline-white":
    "border-[1.5px] border-white/45 text-white hover:border-white hover:bg-white/10",
  "outline-gold":
    "border-[1.5px] border-gold-500 text-accent-text hover:bg-gold-500 hover:text-ink-800",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing arrow that nudges forward on hover. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, keyof Common | "href">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, keyof Common>;

export function buttonClasses({
  variant = "primary",
  size = "lg",
  className,
}: Pick<Common, "variant" | "size" | "className">) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: AsLink | AsButton) {
  const { variant, size, arrow, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          icon={ArrowRight}
          size={18}
          className="-mr-1 transition-transform duration-300 ease-out-soft group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link {...(rest as Omit<AsLink, keyof Common>)} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" {...(rest as Omit<AsButton, keyof Common>)} className={classes}>
      {content}
    </button>
  );
}
