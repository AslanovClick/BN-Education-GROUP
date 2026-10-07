import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/ArticleBody";
import { ArticleToc, type TocItem } from "@/components/article/ArticleToc";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StoryCard } from "@/components/sections/stories/StoryParts";
import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Typography";
import { slugify, type Block } from "@/content/articles";
import { findStory, publishedStories, stories, type Story } from "@/content/stories";
import { routes } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const story = findStory((await params).slug);
  return story ? { title: story.title, description: story.excerpt } : {};
}

/** Story sections → article blocks; the school's words land right after "what we saw". */
function storyBlocks(story: Story): Block[] {
  return story.sections.flatMap((section, i): Block[] => [
    { type: "h2", id: slugify(section.label), text: section.label },
    ...section.paragraphs.map((text): Block => ({ type: "p", text })),
    ...(i === 1 ? [{ type: "quote", text: story.quote.text, cite: story.quote.source } as Block] : []),
  ]);
}

export default async function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  const story = findStory((await params).slug);
  if (!story) notFound();

  const blocks = storyBlocks(story);
  const toc: TocItem[] = story.sections.map((s) => ({ id: slugify(s.label), text: s.label, level: 2 }));
  const facts = [
    { label: "Age", value: story.age.replace(/^Ages? /, "") },
    { label: "Route", value: story.route },
    { label: "Service", value: story.service.label },
    { label: "Reading time", value: story.readingTime.replace(" read", "") },
  ];
  const more = stories.filter((s) => s !== story).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Stories", href: routes.stories }, { label: story.title }]}
          title={story.title}
          description={story.excerpt}
          image={story.image}
        />

        <section className="section-y bg-white">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-sand-100 md:aspect-[21/9]">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  preload
                  sizes="(min-width: 1440px) 1440px, 100vw"
                  placeholder="blur"
                  className="object-cover object-[50%_35%]"
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-y-4 border-b border-line pb-6 sm:grid-cols-4">
                {facts.map((f, i) => (
                  <div key={f.label} className={i % 2 === 1 ? "pl-5 sm:pl-6" : i > 0 ? "sm:pl-6" : ""}>
                    <dt className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{f.label}</dt>
                    <dd className="mt-1 text-base font-bold text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,720px)_minmax(0,320px)] lg:justify-between lg:gap-16">
              <article className="min-w-0">
                <div className="mb-10 lg:hidden">
                  <ArticleToc items={toc} variant="inline" />
                </div>

                <ArticleBody blocks={blocks} />

                <p className="mt-14 border-t border-line pt-10 text-center text-h3 text-balance text-ink-800 md:text-2xl">
                  {story.closing[0]}
                  <br />
                  <span className="text-gold-700">{story.closing[1]}</span>
                </p>

                <div className="mt-10 flex flex-col gap-2 border-t border-line pt-5 text-body-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                  <p>
                    Service in this story:{" "}
                    <TextLink href={story.service.href} className="align-baseline">
                      {story.service.label}
                    </TextLink>
                  </p>
                  <p>Names and details changed</p>
                </div>
              </article>

              <aside className="hidden lg:block">
                <div className="sticky top-28 flex flex-col gap-4">
                  <ArticleToc items={toc} variant="sidebar" />
                  <div className="rounded-md border border-gold-300/70 p-6">
                    <p className="text-lg font-bold leading-snug text-ink-800">Recognise your child?</p>
                    <p className="mt-2 text-body-sm text-muted">This story began with a diagnostic. Yours can begin the same way.</p>
                    <TextLink href={routes.consultation} className="mt-4">
                      Book a diagnostic
                    </TextLink>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-y bg-sand-50">
          <div className="container-page">
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow>Our stories</Eyebrow>
                <h2 className="mt-3 text-h2 text-ink-800">More Stories</h2>
              </div>
              <TextLink href={routes.stories} className="mb-2 hidden sm:inline-flex">
                All stories
              </TextLink>
            </Reveal>
            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
              {more.map((s, i) => (
                <StaggerItem key={s.title} className={i === 2 ? "sm:hidden lg:block" : undefined}>
                  <StoryCard story={s} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <CtaBanner
          title="Recognise Your Child?"
          text="This story began with a diagnostic. Yours can begin the same way."
          action={{ label: "Book a Diagnostic", href: routes.consultation }}
        />
      </main>
      <Footer />
    </>
  );
}
