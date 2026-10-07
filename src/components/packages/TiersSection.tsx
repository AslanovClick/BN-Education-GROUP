import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Typography";
import type { Tier } from "@/content/tiers";
import { cn } from "@/lib/cn";
import { TierGrid } from "./TierGrid";

/** Centered heading above a row of package cards. */
export function TiersSection({
  eyebrow = "Packages",
  title,
  description,
  tiers,
  note,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tiers: Tier[];
  note?: ReactNode;
  className?: string;
}) {
  return (
    <section id="packages" className={cn("section-y bg-sand-50", className)}>
      <div className="container-page">
        <Reveal>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} description={description} className="mx-auto" />
        </Reveal>
        <TierGrid tiers={tiers} className="mt-10 lg:mt-14" />
        {note && <p className="mx-auto mt-6 max-w-[640px] text-center text-body-sm text-subtle">{note}</p>}
      </div>
    </section>
  );
}
