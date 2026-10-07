import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { storyHref, type Story } from "@/content/stories";
import { StoryMeta } from "./StoryParts";

/** "Story of the month": photo beside the story's summary, quote and link. */
export function FeaturedStory({ story }: { story: Story }) {
  return (
    <article className="group/card grid overflow-hidden rounded-md border border-gold-300/70 bg-white lg:grid-cols-2">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand-100 lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={story.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/card:scale-[1.04]"
        />
        <Badge tone="gold" className="absolute left-5 top-5">
          Story of the month
        </Badge>
      </div>
      <div className="flex flex-col p-6 md:p-10">
        <StoryMeta story={story} />
        <h2 className="mt-4 text-h2 text-balance text-ink-800">{story.title}</h2>
        <p className="mt-4 max-w-[540px] text-body text-muted">{story.excerpt}</p>
        <figure className="mt-6 border-l-2 border-gold-500 pl-5">
          <blockquote className="text-quote text-ink-800">“{story.quote.text}”</blockquote>
          <figcaption className="mt-1.5 text-caption text-subtle">{story.quote.source}</figcaption>
        </figure>
        <div className="mt-8 lg:mt-auto lg:pt-8">
          <Button href={storyHref(story.slug)} variant="outline-gold" size="md" arrow>
            Read the story
          </Button>
        </div>
      </div>
    </article>
  );
}
