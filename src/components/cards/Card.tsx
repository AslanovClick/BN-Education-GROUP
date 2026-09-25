import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared card shell: white surface, hairline gold border, lift + image zoom on hover. */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <article
      className={cn(
        "group/card relative flex w-full flex-col overflow-hidden rounded-md border border-gold-300/70 bg-white",
        "transition-[border-color,box-shadow,transform] duration-500 ease-out-soft",
        "hover:-translate-y-1 hover:border-gold-500 hover:shadow-[0_18px_40px_-20px_rgb(29_15_51/0.28)]",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function CardImage({
  src,
  className,
  sizes = "(min-width: 1280px) 414px, (min-width: 640px) 360px, 82vw",
  children,
}: {
  src: StaticImageData;
  className?: string;
  sizes?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sand-100", className)}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/card:scale-[1.05]"
      />
      {children}
    </div>
  );
}
