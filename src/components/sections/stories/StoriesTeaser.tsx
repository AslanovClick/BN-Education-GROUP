import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Typography";
import { stories } from "@/content/stories";
import { routes } from "@/content/site";
import { StoryCard } from "./StoryParts";

/** Homepage: three stories in regular cards, with a link to all of them. */
export function StoriesTeaser() {
  return (
    <section id="stories" className="section-y bg-white">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Our stories</Eyebrow>
            <h2 className="mt-3 text-h2 text-balance text-ink-800">Better Than Words</h2>
            <p className="mt-4 max-w-[560px] text-lead text-pretty text-muted">
              Real families, changed details. How we work — and why we’re so proud of our students.
            </p>
          </div>
          <TextLink href={routes.stories} className="mb-1.5 shrink-0">
            All stories
          </TextLink>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {stories.slice(0, 3).map((story, i) => (
            <StaggerItem key={story.title} className={i === 2 ? "sm:hidden lg:block" : undefined}>
              <StoryCard story={story} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
