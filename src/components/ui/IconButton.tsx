import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Props = Omit<ComponentProps<"button">, "children"> & {
  icon: PhosphorIcon;
  label: string;
};

/** Round icon-only control — the icon form of the Outline Gold button. */
export function IconButton({ icon, label, className, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-13 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold-500 text-accent-text",
        "transition-[background-color,color,opacity,transform] duration-300 ease-out-soft",
        "hover:bg-gold-500 hover:text-ink-800 active:scale-95",
        "disabled:pointer-events-none disabled:opacity-35",
        className,
      )}
      {...rest}
    >
      <Icon icon={icon} size={20} />
    </button>
  );
}
