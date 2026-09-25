import Image from "next/image";
import founderImage from "@/assets/images/founder.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Typography";
import { founderQuote } from "@/content/home";

export function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-18">
        {/* Portrait with overlapping stat card */}
        <Reveal className="relative pb-28 pl-5 sm:pb-10 sm:pl-7 lg:pb-0">
          <div className="relative aspect-[670/649] overflow-hidden rounded-md lg:aspect-auto lg:h-full lg:min-h-[560px] bg-[linear-gradient(165deg,var(--color-ink-800)_8%,var(--color-ink-700)_46%,var(--color-plum-700)_92%)]">
            <Image
              src={founderImage}
              alt="Oksana, founder of BN Education"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[min(100%,365px)] overflow-hidden rounded-md bg-sand-50 p-7 lg:-bottom-8">
            <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-gold-500" />
            <p className="text-[64px] font-extrabold leading-none tracking-[-0.03em] text-gold-500 md:text-[80px]">
              <CountUp value={15} suffix="+" />
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-800/75">
              Years in international education.
              <br />
              From Dubai and Monaco to Silicon Valley.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>About BN Education</Eyebrow>
          <h2 className="mt-3 max-w-[520px] text-h2 text-balance text-ink-800">15 Years in International Education</h2>
          <div className="mt-6 space-y-4 text-body text-muted">
            <p>
              The BN method is built around full-cycle education planning — from discovering a child’s potential to
              school, university and future career.
            </p>
            <p>
              Over 15 years this approach has grown into an international team of admissions specialists, academic
              curators, visa experts and our own Academic Centre. Today BN Education Swiss works from Switzerland with
              families around the world.
            </p>
            <p>
              Our first students have already become entrepreneurs, doctors, politicians, artists and internationally
              recognised professionals. The strongest sign of trust is that today the younger siblings of our first
              students are becoming part of BN too.
            </p>
          </div>

          <figure className="relative mt-8 overflow-hidden rounded-md bg-sand-50 p-7">
            <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-gold-500" />
            <figcaption className="text-base font-bold text-ink-800">Oksana — Founder of BN Education</figcaption>
            <p className="mt-2 max-w-[480px] text-body-sm text-muted">
              More than 15 years ago BN began with a simple question: Why do we choose a school first and only then try
              to understand who the child really is?
            </p>
            <blockquote className="mt-4 max-w-[480px] font-serif text-xl italic leading-snug text-ink-800">
              “{founderQuote}”
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
