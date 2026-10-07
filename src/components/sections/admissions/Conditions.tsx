import { Reveal } from "@/components/motion/Reveal";
import { Diamond } from "@/components/ui/Diamond";
import { Eyebrow } from "@/components/ui/Typography";
import { afterEnrolment, conditions } from "@/content/admissions";

/** Terms of the admission packages and what happens after enrolment. */
export function Conditions() {
  return (
    <section className="section-y bg-sand-50">
      <div className="container-page grid gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal className="rounded-md border border-gold-300/70 bg-white p-6 md:p-10">
          <Eyebrow>Conditions</Eyebrow>
          <h2 className="mt-3 text-h2 text-ink-800">Good to Know</h2>
          <ul className="mt-6 flex flex-col gap-4 text-body text-muted">
            {conditions.map((c) => (
              <li key={c} className="flex gap-3.5">
                <Diamond />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col rounded-md border border-gold-300/70 bg-white p-6 md:p-10">
          <Eyebrow>After enrolment</Eyebrow>
          <h2 className="mt-3 text-h2 text-ink-800">Support in the First Year</h2>
          <p className="mt-6 max-w-[520px] text-lead text-pretty text-muted">{afterEnrolment.text}</p>
          <p className="mt-6 border-t border-ink-800/8 pt-5 text-body-sm font-semibold text-ink-800 lg:mt-auto">{afterEnrolment.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
