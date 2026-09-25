import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/ArticleBody";
import { ArticleToc, type TocItem } from "@/components/article/ArticleToc";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { articles, findArticle } from "@/content/articles";
import { routes } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const article = findArticle((await params).slug);
  return article ? { title: article.title, description: article.lead } : {};
}

export default async function ProgrammeArticlePage({ params }: PageProps<"/programmes/[slug]">) {
  const article = findArticle((await params).slug);
  if (!article) notFound();

  const toc: TocItem[] = article.body.flatMap((b) =>
    b.type === "h2" || b.type === "h3" ? [{ id: b.id, text: b.text, level: b.type === "h2" ? 2 : 3 }] : [],
  );

  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: "Summer Programmes", href: `${routes.services}#programmes` },
            { label: article.title },
          ]}
          title={article.title}
          description={article.lead}
          image={article.image}
        />

        <section className="section-y bg-white">
          <div className="container-page">
            {/* Wide lead image spanning both columns, facts underneath */}
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-sand-100 md:aspect-[21/9]">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  preload
                  sizes="(min-width: 1440px) 1440px, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-y-4 border-b border-line pb-6 sm:grid-cols-4">
                {article.facts.map((f, i) => (
                  <div key={f.label} className={i % 2 === 1 ? "pl-5 sm:pl-6" : i > 0 ? "sm:pl-6" : ""}>
                    <dt className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{f.label}</dt>
                    <dd className="mt-1 text-base font-bold text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,720px)_minmax(0,320px)] lg:justify-between lg:gap-16">
              <article className="min-w-0">
                {/* Mobile table of contents */}
                <div className="mb-10 lg:hidden">
                  <ArticleToc items={toc} variant="inline" />
                </div>

                <ArticleBody blocks={article.body} />

                <div className="mt-14 rounded-md bg-sand-50 p-7 md:p-9">
                  <p className="text-eyebrow text-gold-500">Next step</p>
                  <h2 className="mt-3 text-h3 text-balance text-ink-800 md:text-2xl">Is this programme right for your child?</h2>
                  <p className="mt-3 max-w-[520px] text-body text-muted">
                    Book a free consultation and we’ll help you choose the programme that fits your child’s goals.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 xs:flex-row">
                    <Button href={routes.consultation} arrow>
                      Book a Consultation
                    </Button>
                    <Button href={`${routes.services}#programmes`} variant="outline-gold">
                      All programmes
                    </Button>
                  </div>
                </div>
              </article>

              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <ArticleToc items={toc} variant="sidebar" />
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
