import Image from "next/image";
import statsImage from "@/assets/images/about/stats-bg.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { heroStats } from "@/content/home";

/** Key figures on a dark photographic band (same numbers as the homepage hero). */
export function StatsBand() {
  return (
    <section data-surface="dark" className="theme-dark relative isolate overflow-hidden bg-ink-800 py-16 md:py-20">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={statsImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <div className="container-page">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-md bg-sand-50/15 px-6 py-10 md:grid-cols-4 md:px-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <dd className="order-first text-[32px] font-bold leading-tight tracking-[-0.02em] text-gold-500 md:text-[40px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="text-sm font-medium uppercase tracking-[0.1em] text-white/80">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
