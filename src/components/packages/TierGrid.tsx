import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { Tier } from "@/content/tiers";
import { cn } from "@/lib/cn";
import { TierCard } from "./TierCard";

/** Tier cards side by side: three columns from lg, two-tier sets from md. Stacks on phones. */
export function TierGrid({ tiers, className }: { tiers: Tier[]; className?: string }) {
  return (
    <Stagger
      className={cn(
        "mx-auto grid gap-5 lg:gap-6",
        tiers.length === 2 ? "max-w-[960px] md:grid-cols-2" : "max-w-[640px] lg:max-w-none lg:grid-cols-3",
        className,
      )}
    >
      {tiers.map((tier) => (
        <StaggerItem key={tier.id} className="flex">
          <TierCard tier={tier} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
