import type { Icon as PhosphorIcon, IconProps } from "@phosphor-icons/react";

type Props = Omit<IconProps, "weight"> & {
  icon: PhosphorIcon;
  size?: number;
};

/**
 * Single entry point for icons.
 * Phosphor strokes scale with the icon, so the weight is picked per size to keep
 * the rendered line at ~1–1.5px everywhere: Regular up to 20px, Light up to 32px, Thin above.
 */
export function Icon({ icon: Glyph, size = 20, ...rest }: Props) {
  const weight = size <= 20 ? "regular" : size <= 32 ? "light" : "thin";
  return <Glyph size={size} weight={weight} aria-hidden focusable={false} {...rest} />;
}
