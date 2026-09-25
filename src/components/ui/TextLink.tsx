import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Inline "Learn more →" style link. Not a button: text + arrow, underline grows on hover. */
export function TextLink({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text",
        className,
      )}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 ease-out-soft group-hover/link:bg-[length:100%_1px]">
        {children}
      </span>
      <Icon
        icon={ArrowRight}
        size={16}
        className="transition-transform duration-300 ease-out-soft group-hover/link:translate-x-1"
      />
    </Link>
  );
}
