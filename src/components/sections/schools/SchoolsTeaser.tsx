import { InstitutionCard } from "@/components/cards/InstitutionCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SplitHeading } from "@/components/ui/Typography";
import { schools } from "@/content/schools";
import { routes } from "@/content/site";
import { cn } from "@/lib/cn";

/** Four boarding schools (two by two, large cards) and a link to the full Schools page. */
export function SchoolsTeaser({ className }: { className?: string }) {
  return (
    <section className={cn("section-y bg-sand-50", className)}>
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading
            eyebrow="Schools"
            title="Schools Families Choose With Us"
            className="lg:grid-cols-1"
          />
          <Button href={routes.schools} variant="outline-gold" arrow className="self-start lg:self-auto">
            Explore all schools
          </Button>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {schools.slice(0, 4).map((school) => (
            <StaggerItem key={school.slug}>
              <InstitutionCard institution={school} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
