import { CaretDown, Check } from "@phosphor-icons/react/ssr";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Shared control look: soft sand fill, no visible border at rest; on focus it lifts to white
 * with a gold hairline and halo. 52px high, 4px radius (same as buttons).
 */
export const controlClass = cn(
  "block h-13 w-full rounded-sm border border-transparent bg-sand-50 px-4 text-[15px] text-ink-800",
  "placeholder:text-ink-800/35 transition-[background-color,border-color,box-shadow] duration-300 ease-out-soft",
  "hover:border-gold-500/35",
  "focus:border-gold-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-gold-500/12",
  "aria-[invalid=true]:border-danger/70 aria-[invalid=true]:bg-white aria-[invalid=true]:focus:ring-danger/10",
);

/** White card that holds a form — the same on every page. */
export const formPanelClass =
  "rounded-md border border-ink-800/6 bg-white p-6 md:p-10";

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

/** Label + control + hint / error. The control should use `id` and `aria-describedby={describedBy(id)}`. */
export function Field({ id, label, required, optional, hint, error, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <label htmlFor={id} className="text-caption font-semibold uppercase tracking-[0.1em] text-ink-800/80">
        {label}
        {required && (
          <span aria-hidden className="text-gold-600">
            {" "}
            *
          </span>
        )}
        {optional && <span className="font-medium normal-case tracking-normal text-subtle"> · optional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-caption text-danger">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="text-caption text-subtle">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

export const describedBy = (id: string, error?: string, hint?: string) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined;

export function Input({ className, ...rest }: ComponentProps<"input">) {
  return <input className={cn(controlClass, className)} {...rest} />;
}

export function Textarea({ className, ...rest }: ComponentProps<"textarea">) {
  return <textarea className={cn(controlClass, "h-auto min-h-40 resize-y py-3 leading-relaxed", className)} {...rest} />;
}

export function Select({ className, children, ...rest }: ComponentProps<"select">) {
  return (
    <div className={cn("relative", className)}>
      <select className={cn(controlClass, "cursor-pointer appearance-none pr-10 [&:has(option[value='']:checked)]:text-ink-800/40")} {...rest}>
        {children}
      </select>
      <Icon
        icon={CaretDown}
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtle"
      />
    </div>
  );
}

type CheckboxProps = Omit<ComponentProps<"input">, "type"> & { label: ReactNode; error?: string };

export function Checkbox({ id, label, error, className, ...rest }: CheckboxProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="group flex cursor-pointer items-start gap-3 text-body-sm text-muted">
        <span className="relative mt-0.5 inline-flex size-5 shrink-0">
          <input
            id={id}
            type="checkbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={cn(
              "peer size-5 cursor-pointer appearance-none rounded-sm border-[1.5px] border-gold-500 bg-white transition-colors",
              "checked:bg-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500",
              "aria-[invalid=true]:border-danger",
            )}
            {...rest}
          />
          <Icon
            icon={Check}
            size={14}
            className="pointer-events-none absolute inset-0 m-auto text-ink-800 opacity-0 transition-opacity peer-checked:opacity-100"
          />
        </span>
        <span>{label}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 pl-8 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
