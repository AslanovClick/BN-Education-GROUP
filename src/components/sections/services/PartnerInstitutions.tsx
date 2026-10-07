import { InstitutionCard } from "@/components/cards/InstitutionCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/ui/Typography";
import { universities } from "@/content/schools";

/** Partner universities — large photo cards, two per row. */
export function PartnerInstitutions() {
  return (
    <section id="universities" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SplitHeading
            eyebrow="Higher education"
            title="Partner Universities"
            description={
              <p>
                From Oxford and Cambridge to the Ivy League — we build each application around your child’s strengths
                and manage it from the admissions officer audit to enrolment.
              </p>
            }
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {universities.map((item) => (
            <StaggerItem key={item.slug}>
              <InstitutionCard institution={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
