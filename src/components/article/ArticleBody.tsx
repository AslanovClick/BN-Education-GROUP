import Image from "next/image";
import type { Block } from "@/content/articles";
import { cn } from "@/lib/cn";

/** Renders structured article blocks — calm editorial rhythm, one reading column. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  let paragraphs = 0;
  return (
    <div className="text-[17px] leading-[1.75] text-ink-800/80">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className={cn(
                  "scroll-mt-28 text-[clamp(1.625rem,1.4rem+0.8vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink-800",
                  i === 0 ? "mt-0" : "mt-14",
                )}
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={block.id} className="mt-10 scroll-mt-28 text-[1.3125rem] font-bold leading-snug text-ink-800">
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={i} id={block.id} className="mt-8 scroll-mt-28 text-[1.0625rem] font-bold text-ink-800">
                {block.text}
              </h4>
            );
          case "p": {
            // The opening paragraph reads as the article's intro
            const intro = paragraphs++ === 0;
            return (
              <p key={i} className={intro ? "mt-5 text-[19px] leading-[1.65] text-ink-800" : "mt-4"}>
                {block.text}
              </p>
            );
          }
          case "image":
            return (
              <figure key={i} className="mt-10 mb-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-sand-100">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
                {block.caption && <figcaption className="mt-3 text-caption text-subtle">{block.caption}</figcaption>}
              </figure>
            );
          case "quote":
            return (
              <figure key={i} className="mt-8 rounded-md border-l-2 border-gold-500 bg-gold-500/10 px-6 py-5">
                <blockquote className="font-serif text-[1.5rem] italic leading-snug text-ink-800">“{block.text}”</blockquote>
                {block.cite && <figcaption className="mt-2 text-caption text-subtle">— {block.cite}</figcaption>}
              </figure>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className="relative pl-6">
                    <span aria-hidden className="absolute left-0.5 top-[0.72em] size-1.5 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 flex flex-col gap-3">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-3.5">
                    <span className="mt-[0.2em] inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-caption font-bold tabular-nums text-gold-700">
                      {n + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
        }
      })}
    </div>
  );
}
