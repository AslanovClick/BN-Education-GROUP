import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Typography";
import { routes } from "@/content/site";

export function HelpBlock() {
  return (
    <section className="section-y bg-white">
      <Reveal className="container-page flex flex-col items-center">
        <SectionHeading
          align="center"
          eyebrow="Private sessions"
          title="Can’t find the right event?"
          description="We offer private consultations and customised workshops tailored to your specific needs and timeline."
        />
        <div className="mt-10 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:gap-4">
          <Button href={routes.assessment}>Take an Assessment</Button>
          <Button href={routes.consultation} variant="outline-gold">
            Book a Consultation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
