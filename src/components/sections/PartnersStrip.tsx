import { Reveal } from "@/components/motion/Reveal";

export function PartnersStrip() {
  return (
    <div className="border-b border-line bg-sand-50">
      <Reveal variant="fade" className="container-page flex items-center justify-center gap-5 py-7">
        <span aria-hidden className="hidden h-px w-12 bg-gradient-to-r from-transparent to-gold-500 sm:block" />
        <p className="text-center text-eyebrow font-semibold text-subtle">
          Partnered with the world’s finest educational institutions
        </p>
        <span aria-hidden className="hidden h-px w-12 bg-gradient-to-l from-transparent to-gold-500 sm:block" />
      </Reveal>
    </div>
  );
}
