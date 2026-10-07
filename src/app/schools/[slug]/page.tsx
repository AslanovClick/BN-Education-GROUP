import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DownloadSimple } from "@phosphor-icons/react/ssr";
import { ArticleBody } from "@/components/article/ArticleBody";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { institutionBody } from "@/content/school-pages";
import { allInstitutions, findInstitution, universities } from "@/content/schools";
import { routes } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allInstitutions.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/schools/[slug]">): Promise<Metadata> {
  const inst = findInstitution((await params).slug);
  return inst ? { title: inst.name, description: inst.text } : {};
}

export default async function SchoolPage({ params }: PageProps<"/schools/[slug]">) {
  const inst = findInstitution((await params).slug);
  if (!inst) notFound();

  const isUniversity = universities.some((u) => u.slug === inst.slug);
  const section = isUniversity
    ? { label: "Universities", href: `${routes.schools}#universities` }
    : { label: "Boarding Schools", href: `${routes.schools}#boarding-schools` };

  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Schools", href: routes.schools },
            section,
            { label: inst.name },
          ]}
          title={inst.name}
          description={inst.location}
          image={inst.image}
        />

        <section className="section-y bg-white">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-sand-100 md:aspect-[21/9]">
                <Image
                  src={inst.image}
                  alt=""
                  fill
                  preload
                  sizes="(min-width: 1440px) 1440px, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-y-4 border-b border-line pb-6 sm:grid-cols-4">
                {inst.facts.map((f, i) => (
                  <div key={f.label} className={i % 2 === 1 ? "pl-5 sm:pl-6" : i > 0 ? "sm:pl-6" : ""}>
                    <dt className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{f.label}</dt>
                    <dd className="mt-1 text-base font-bold text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,720px)_minmax(0,320px)] lg:justify-between lg:gap-16">
              <article className="min-w-0">
                <ArticleBody blocks={institutionBody(inst)} />
              </article>

              <aside>
                <div className="flex flex-col gap-4 lg:sticky lg:top-28">
                  <div className="rounded-md bg-sand-50 p-6">
                    <p className="text-caption font-bold uppercase tracking-[0.12em] text-gold-600">Prospectus</p>
                    <p className="mt-3 text-body-sm text-muted">
                      Programme details, fees and admission requirements in one document.
                    </p>
                    {/* Placeholder until the PDF is uploaded */}
                    <a
                      href="#"
                      download
                      className="group mt-5 flex items-center justify-between gap-4 rounded-sm bg-white px-4 py-3.5 transition-shadow duration-300 hover:shadow-[0_12px_30px_-18px_rgb(29_15_51/0.4)]"
                    >
                      <span className="text-sm font-semibold text-ink-800">Download PDF</span>
                      <span className="inline-flex size-9 items-center justify-center rounded-full border-[1.5px] border-gold-500 text-accent-text transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-ink-800">
                        <Icon icon={DownloadSimple} size={18} />
                      </span>
                    </a>
                  </div>
                  <div className="rounded-md border border-ink-800/8 p-6">
                    <p className="text-lg font-bold leading-snug text-ink-800">Is this {isUniversity ? "university" : "school"} right for your child?</p>
                    <p className="mt-2 text-body-sm text-muted">The first meeting is free — we’ll tell you honestly.</p>
                    <Button href={routes.consultation} size="md" arrow className="mt-5 w-full">
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
