import { cn } from "@/lib/cn";

/** Nav label with the gold underline that grows on hover and stays on the current page. */
export const navLinkClass = (active: boolean) =>
  cn(
    "relative py-2 text-sm font-medium tracking-[0.01em] transition-opacity duration-300",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gold-500",
    "after:transition-transform after:duration-500 after:ease-out-soft",
    active ? "after:scale-x-100" : "opacity-75 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
  );
