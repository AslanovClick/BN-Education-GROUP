import { cn } from "@/lib/cn";

/** Small chip versions of the primary / outline-gold buttons — filters, tabs, switchers. */
export const chipClass = (active: boolean, className?: string) =>
  cn(
    "inline-flex h-10 items-center rounded-sm border-[1.5px] border-gold-500 px-5 text-sm font-semibold",
    "transition-[background-color,color,box-shadow] duration-300 ease-out-soft",
    active ? "bg-gold-500 text-ink-800 shadow-[0_0_14px_rgb(221_186_109/0.3)]" : "text-accent-text hover:bg-gold-500/15",
    className,
  );
