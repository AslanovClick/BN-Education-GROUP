import { InstitutionCard } from "@/components/cards/InstitutionCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/ui/Typography";
import { institutions } from "@/content/services";

export function PartnerInstitutions() {
  return (
    <section id="schools" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SplitHeading
            eyebrow="Our selection"
            title="Partner Schools & Universities"
            description={
              <p>
                We start not with a list of schools, but with your child — their talents, personality, interests and
                long-term goals. Following our assessment, we present 5–8 carefully selected schools, explaining the
                strengths and specifics of each option.
              </p>
            }
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {institutions.map((item) => (
            <StaggerItem key={item.name}>
              <InstitutionCard institution={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
