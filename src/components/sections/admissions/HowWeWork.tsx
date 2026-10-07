import { Compass, IdentificationCard, UsersThree } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Typography";
import { curators, workSteps } from "@/content/admissions";

const curatorIcons = [Compass, IdentificationCard, UsersThree];

/** Three steps of the admission and the team of three curators behind every child. */
export function HowWeWork() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Three Steps to Admission"
            description="Every package follows the same path — what changes is how many universities, how early we start and how closely we work with your child."
          />
        </Reveal>

        {/* Steps sit on thin gold rules — no filled cards */}
        <Stagger as="ol" className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-12 lg:gap-10">
          {workSteps.map((step, i) => (
            <StaggerItem as="li" key={step.title} className="border-t border-gold-500 pt-6">
              <span className="text-eyebrow text-gold-500">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h3 text-ink-800">{step.title}</h3>
              <p className="mt-2 max-w-[380px] text-body text-muted">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 rounded-md border border-gold-300/70 p-6 md:p-8 lg:mt-14 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-10">
            <div>
              <p className="text-eyebrow text-gold-500">Your team</p>
              <p className="mt-3 max-w-[260px] text-h3 text-ink-800">Three curators work for your child</p>
            </div>
            {/* Icon above each title so every column starts on the same line */}
            <ul className="grid gap-8 sm:grid-cols-3 sm:gap-8">
              {curators.map((c, i) => (
                <li key={c.title}>
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-gold-500/50 text-gold-600">
                    <Icon icon={curatorIcons[i]} size={20} />
                  </span>
                  <p className="mt-4 text-base font-bold text-ink-800">{c.title}</p>
                  <p className="mt-1.5 text-body-sm text-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
