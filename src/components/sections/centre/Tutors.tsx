import { Info, VideoCamera } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Diamond } from "@/components/ui/Diamond";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Typography";
import { subjects, tutorNote, tutorProfiles, tutoringSteps } from "@/content/tutors";

/** Curricula and exams the Academic Centre prepares for. */
export function Subjects() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What we teach"
            title="Curricula, Exams and Projects"
            description="One-to-one online lessons for school subjects, entrance exams and university applications."
          />
        </Reveal>
        {/* One calm panel: curricula as a 2×2 grid, exams as a ruled list, practical notes underneath */}
        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-md border border-gold-300/70 bg-white lg:mt-12">
          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="flex flex-col p-6 md:p-8 lg:p-10">
              <h3 className="text-eyebrow text-gold-500">School curricula</h3>
              <ul className="mt-6 grid flex-1 grid-cols-2 grid-rows-2 gap-px overflow-hidden rounded-sm border border-ink-800/8 bg-ink-800/8">
                {subjects.curricula.map((c) => (
                  <li key={c.name} className="flex flex-col justify-center bg-white p-5">
                    <p className="text-2xl font-bold tracking-[-0.01em] text-ink-800">{c.name}</p>
                    <p className="mt-1 text-body-sm text-muted">{c.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink-800/8 p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="text-eyebrow text-gold-500">Exam preparation</h3>
              <ul className="mt-4 divide-y divide-ink-800/8">
                {subjects.exams.map((e) => (
                  <li key={e.name} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="flex items-baseline gap-3 text-base font-bold text-ink-800">
                      <Diamond className="size-[6px] self-center" />
                      {e.name}
                    </span>
                    <span className="pl-[18px] text-body-sm text-muted sm:pl-0 sm:text-right">{e.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-ink-800/8 bg-sand-50/60 px-6 py-4 text-body-sm text-subtle sm:flex-row sm:gap-8 md:px-8 lg:px-10">
            <p className="flex items-center gap-2">
              <Icon icon={VideoCamera} size={16} className="shrink-0 text-gold-600" />
              One-to-one, online
            </p>
            <p className="flex items-center gap-2">
              <Icon icon={Info} size={16} className="shrink-0 text-gold-600" />
              Lessons are paid separately
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** How tutors and the academic curator work together. */
export function TutoringSteps() {
  return (
    <section className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A Tutor With a Clear Goal"
            description="Tutors don’t work in isolation — your child’s academic curator sets the goals and checks the results."
          />
        </Reveal>
        <Stagger as="ol" className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-10">
          {tutoringSteps.map((step, i) => (
            <StaggerItem as="li" key={step.title} className="border-t border-gold-500 pt-6">
              <span className="text-eyebrow text-gold-500">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-ink-800">{step.title}</h3>
              <p className="mt-2 text-body-sm text-muted">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Tutor profiles by subject — placeholders until real profiles arrive. */
export function TutorProfiles() {
  return (
    <section id="tutors" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our tutors"
            title="Meet the Tutors"
            description="Certified specialists from the US and UK, chosen for their expertise and for how well they work with young people."
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {tutorProfiles.map((t) => (
            <StaggerItem
              key={t.subject}
              className="group relative flex flex-col overflow-hidden rounded-md border border-gold-300/70 bg-white transition-[border-color,box-shadow,transform] duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold-500 hover:shadow-[0_18px_40px_-20px_rgb(29_15_51/0.28)]"
            >
              {/* Soft sand header with a large line icon */}
              <div className="relative flex h-24 items-end justify-between bg-gradient-to-br from-sand-100 via-sand-50 to-white px-6 pb-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold-500/50 bg-white text-gold-600 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-ink-800">
                  <Icon icon={t.icon} size={22} />
                </span>
                <span className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{t.background}</span>
                <Icon
                  icon={t.icon}
                  size={104}
                  className="pointer-events-none absolute -right-4 -top-5 text-gold-500/10 transition-transform duration-700 ease-out-soft group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-h3 text-ink-800">{t.subject}</h3>
                <p className="mt-2 text-body-sm text-muted">{t.text}</p>
                <p className="mt-4 text-caption font-semibold uppercase tracking-[0.08em] text-gold-700">{t.focus.join(" · ")}</p>
                <div className="mt-auto pt-5">
                  <p className="flex items-center gap-2 border-t border-ink-800/8 pt-4 text-body-sm text-subtle">
                    <Icon icon={VideoCamera} size={16} className="text-gold-600" />
                    One-to-one, online
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-body-sm text-subtle">{tutorNote}</p>
      </div>
    </section>
  );
}
