import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Align = "start" | "center";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-eyebrow text-gold-500", className)}>{children}</p>;
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow + title + optional lead paragraph, stacked. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", align === "center" && "items-center text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading className="mt-3 text-h2 text-balance text-fg">{title}</Heading>
      {description && <p className="mt-4 max-w-[620px] text-lead text-pretty text-fg-muted">{description}</p>}
    </div>
  );
}
