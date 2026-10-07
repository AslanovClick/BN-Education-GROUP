import { ChalkboardTeacher, Exam, Info, SunHorizon } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/ui/Typography";
import { extras } from "@/content/admissions";
import { routes } from "@/content/site";
import { Diamond } from "@/components/ui/Diamond";

/** "Additionally": BN tutors, exam preparation and summer programmes. */
export function Extras() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Additionally"
            title="Tutors, Exams and Summer Programmes"
            description="Admission sometimes needs more than strategy and paperwork. These are arranged on top of any package."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-6">
          <StaggerItem className="flex flex-col rounded-md border border-gold-300/70 bg-white p-6 md:p-8">
            <Icon icon={ChalkboardTeacher} size={40} className="text-gold-600" />
            <h3 className="mt-5 text-h3 text-ink-800">BN Academic Centre tutors</h3>
            <div className="mt-3 space-y-2 text-body-sm text-muted">
              {extras.tutors.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-body-sm text-subtle">
              <Icon icon={Info} size={16} className="shrink-0 text-gold-600" />
              Lessons are paid separately.
            </p>
            <TextLink href={routes.academicCentre} className="mt-auto self-start pt-6">
              Meet our tutors
            </TextLink>
          </StaggerItem>

          <StaggerItem className="rounded-md border border-gold-300/70 bg-white p-6 md:p-8">
            <Icon icon={Exam} size={40} className="text-gold-600" />
            <h3 className="mt-5 text-h3 text-ink-800">Exam preparation</h3>
            <ul className="mt-3 flex flex-col gap-2.5 text-body-sm text-muted">
              {extras.exams.map((e) => (
                <li key={e} className="flex gap-3">
                  <Diamond />
                  {e}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="flex flex-col rounded-md border border-gold-300/70 bg-white p-6 md:p-8">
            <Icon icon={SunHorizon} size={40} className="text-gold-600" />
            <h3 className="mt-5 text-h3 text-ink-800">Summer programme</h3>
            <p className="mt-3 text-body-sm text-muted">{extras.summer}</p>
            <TextLink href={`${routes.schools}#programmes`} className="mt-auto self-start pt-6">
              Explore programmes
            </TextLink>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
