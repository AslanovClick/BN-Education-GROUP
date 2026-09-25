import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export type Crumb = { label: string; href?: string };

type Props = {
  crumbs: Crumb[];
  title: ReactNode;
  description?: ReactNode;
  image: StaticImageData;
};

/** Compact hero for inner pages: breadcrumbs, H1 (wrap the accent part in <em>) and a lead line. */
export function PageHero({ crumbs, title, description, image }: Props) {
  return (
    <section data-surface="dark" className="theme-dark relative isolate overflow-hidden bg-ink-800">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill preload sizes="100vw" placeholder="blur" className="object-cover" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <Reveal className="container-page pb-16 pt-36 md:pb-20 md:pt-40">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-white/75">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="transition-colors duration-300 hover:text-gold-500">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? "page" : undefined} className={last ? "text-white" : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!last && (
                    <span aria-hidden className="text-gold-500">
                      \
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="mt-4 text-display text-balance text-white [&_em]:not-italic [&_em]:text-gold-500">{title}</h1>
        {description && <p className="mt-6 max-w-[680px] text-lead text-pretty text-white/80">{description}</p>}
      </Reveal>
    </section>
  );
}
