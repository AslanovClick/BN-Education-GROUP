import Image from "next/image";
import { TextLink } from "@/components/ui/TextLink";
import { storyHref, type Story } from "@/content/stories";
import { cn } from "@/lib/cn";

/** "Age · route" plus the service, as one quiet caption line — tags never look like buttons. */
export function StoryMeta({ story, className }: { story: Story; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-caption font-semibold uppercase tracking-[0.08em]", className)}>
      <span className="text-subtle">
        {story.age} · {story.route}
      </span>
      <span aria-hidden className="size-1 rounded-full bg-gold-500" />
      <span className="text-gold-700">{story.service.label}</span>
    </p>
  );
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group/card relative flex h-full flex-col overflow-hidden rounded-md border border-gold-300/70 bg-white transition-[border-color,box-shadow,transform] duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold-500 hover:shadow-[0_18px_40px_-20px_rgb(29_15_51/0.28)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand-100">
        <Image
          src={story.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/card:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <StoryMeta story={story} />
        <h3 className="mt-3 text-h3 text-ink-800">{story.title}</h3>
        <p className="mt-2 line-clamp-3 text-body-sm text-muted">{story.excerpt}</p>
        <TextLink href={storyHref(story.slug)} className="mt-auto self-start pt-5 after:absolute after:inset-0">
          Read the story
        </TextLink>
      </div>
    </article>
  );
}
