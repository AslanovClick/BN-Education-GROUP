import Image from "next/image";
import campusImage from "@/assets/images/about/campus.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Typography";

/** "15 Years in International Education" — photo with an overlapping quote card + story copy. */
export function AboutIntro() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-18">
        <Reveal className="relative pb-28 pl-5 sm:pb-12 sm:pl-7 lg:pb-0">
          <div className="relative aspect-square overflow-hidden rounded-md bg-sand-100 lg:aspect-auto lg:h-full lg:min-h-[560px]">
            <Image
              src={campusImage}
              alt="A historic university campus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <figure className="absolute bottom-0 left-0 w-[min(100%,380px)] overflow-hidden rounded-md bg-sand-50 p-7 lg:-bottom-8">
            <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-gold-500" />
            <blockquote className="font-serif text-[26px] italic leading-[1.25] text-ink-800 md:text-[30px]">
              Different children.
              <br />
              Brighter futures.
              <br />
              The same trust for 15 years.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={0.1} className="lg:py-4">
          <Eyebrow>About BN Education</Eyebrow>
          <h2 className="mt-3 max-w-[520px] text-h2 text-balance text-ink-800">15 Years in International Education</h2>
          <div className="mt-6 space-y-4 text-body text-muted">
            <p>
              The BN method is built around <strong className="font-semibold text-ink-800">full-cycle education planning</strong> —
              from discovering a child’s potential to school, university and future career.
            </p>
            <p>
              <strong className="font-semibold text-ink-800">Over 15 years</strong> this approach has grown into an
              international team of admissions specialists, academic curators, visa experts and our own Academic Centre.
            </p>
            <p>
              Our experience is grounded in{" "}
              <strong className="font-semibold text-ink-800">long-term relationships with families, schools and universities</strong>,
              allowing us to understand not only how to secure the right opportunity, but how to make each step of the journey
              purposeful and well supported.
            </p>
            <p>
              Today BN Education Swiss works from Switzerland with families around the world —{" "}
              <strong className="font-semibold text-ink-800">from Dubai and Monaco to Silicon Valley</strong>.
            </p>
            <p>
              Our first students have already become entrepreneurs, doctors, politicians, artists and internationally
              recognised professionals. Perhaps the strongest sign of trust is that today,{" "}
              <strong className="font-semibold text-ink-800">the younger siblings of our first students</strong> are becoming
              part of BN too.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
