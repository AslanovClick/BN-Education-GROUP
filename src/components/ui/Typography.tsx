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

type SplitHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

/** Section header with the title on the left and the lead copy beside it (stacks on mobile). */
export function SplitHeading({ eyebrow, title, description, className }: SplitHeadingProps) {
  return (
    <div className={cn("grid items-end gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]", className)}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-h2 text-balance text-fg">{title}</h2>
      </div>
      {description && <div className="max-w-[640px] text-lead text-pretty text-fg-muted lg:pb-1">{description}</div>}
    </div>
  );
}
