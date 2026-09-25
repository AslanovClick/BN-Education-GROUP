import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  tone?: "glass" | "gold";
  dot?: boolean;
  className?: string;
};

/** Small pill label. `glass` sits on dark imagery, `gold` on photos inside cards. */
export function Badge({ children, tone = "glass", dot, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        tone === "glass" &&
          "border border-white/15 bg-white/10 px-4 py-2 text-sm tracking-[0.02em] text-white/85 backdrop-blur-md",
        tone === "gold" && "bg-gold-500/95 px-3 py-1 text-[13px] text-ink-800 shadow-sm",
        className,
      )}
    >
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-gold-500" />}
      {children}
    </span>
  );
}
