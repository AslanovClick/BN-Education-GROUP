import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Typography";
import type { CompareRow, Tier, TierFlow } from "@/content/tiers";
import { cn } from "@/lib/cn";
import { CompareTable } from "./CompareTable";
import { TierFlowTabs } from "./TierFlowTabs";

/** "How each package works" — section wrapper around the tabbed timelines. */
export function HowItWorksSection({
  tiers,
  flows,
  title = "How Each Package Works",
  description,
  className,
}: {
  tiers: Tier[];
  flows: TierFlow[];
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section id="how-it-works" className={cn("section-y bg-white", className)}>
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="How it works" title={title} description={description} />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 lg:mt-10">
          <TierFlowTabs tiers={tiers} flows={flows} />
        </Reveal>
      </div>
    </section>
  );
}

/** Side-by-side comparison of the packages. */
export function CompareSection({
  tiers,
  rows,
  notes,
  className,
}: {
  tiers: Tier[];
  rows: CompareRow[];
  notes?: string[];
  className?: string;
}) {
  return (
    <section id="compare" className={cn("section-y bg-sand-50", className)}>
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Compare" title="Packages Side by Side" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 lg:mt-10">
          <CompareTable columns={tiers.map((t) => t.name)} rows={rows} notes={notes} />
        </Reveal>
      </div>
    </section>
  );
}
