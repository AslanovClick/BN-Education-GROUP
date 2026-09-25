import Image from "next/image";
import founderImage from "@/assets/images/about/founder.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { founderQuote } from "@/content/home";

/** Founder story: copy + quote on the left, portrait on the right; both columns end on the same line. */
export function Founder() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-18">
        <Reveal className="flex flex-col">
          <Eyebrow>About founder</Eyebrow>
          <h2 className="mt-3 max-w-[460px] text-h2 text-balance text-ink-800">Oksana — Founder of BN Education</h2>
          <div className="mt-6 space-y-4 text-body text-muted">
            <p>
              More than 15 years ago BN began with a simple question:{" "}
              <span className="font-serif text-[1.2em] italic text-ink-800">
                “Why do we choose a school first and only then try to understand who the child really is?”
              </span>
            </p>
            <p>
              Today, Oksana works at the intersection of international education, Generation Alpha research and the
              impact of AI on children’s future. These insights form the foundation of the BN approach and its
              proprietary potential assessment.
            </p>
            <p>
              For more than 15 years, BN has been helping families navigate international education with a deeply
              personal, long-term approach. From Dubai and Monaco to Silicon Valley, we work across borders to connect
              children with the schools, opportunities and environments where they can truly thrive.
            </p>
          </div>

          <figure className="relative mt-10 overflow-hidden rounded-md bg-sand-50 p-7 lg:mt-auto">
            <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-gold-500" />
            <blockquote className="font-serif text-[24px] italic leading-[1.3] text-ink-800 md:text-[28px]">
              “{founderQuote}”
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-md bg-sand-100 lg:aspect-auto lg:min-h-[600px]">
          <Image
            src={founderImage}
            alt="Oksana, founder of BN Education"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover object-[50%_20%]"
          />
        </Reveal>
      </div>
    </section>
  );
}
