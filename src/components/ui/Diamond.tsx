import { cn } from "@/lib/cn";

/** Gold diamond bullet — echoes the brand brochures. */
export function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("mt-[0.55em] size-[7px] shrink-0 rotate-45 bg-gold-500", className)} />;
}
