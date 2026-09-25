# BN Education Group — web

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Phosphor Icons

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Figma source: `BN Education Group | UI Design` → frame `912:24` (homepage).
Original exported assets are kept in `design/source-assets/`; optimised copies live in `src/assets/images/`.

## Structure

```
src/
  app/                 routes (/, /assessment, /consultation — the last two are placeholders)
  components/
    ui/                Button, IconButton, TextLink, Badge, Icon, Typography, CountUp, CarouselSection
    cards/             Card shell, ServiceCard, EventCard
    motion/            MotionProvider, Reveal / Stagger / StaggerItem
    layout/            Header (+ mobile menu), Footer, PlaceholderPage
    sections/          homepage sections
  content/             copy & data (home.ts, site.ts — routes, nav, contacts)
```

## Design system (tokens in `src/app/globals.css`)

**Colour**
- `ink-800` #1D0F33 — headings, dark surfaces · `ink-950` footer
- `gold-500` #DDBA6D — primary fills, accents, text on dark
- `gold-700` #86662A — gold *text* on light surfaces (AA 4.9:1; `gold-500` fails there at 1.7:1)
- `sand-50` #F7F5F1 — light section background · `muted` #5C5666 body copy · `subtle` #6F6878 secondary labels
- Surfaces: add `theme-dark` to a dark section and `text-fg`, `text-fg-muted`, `text-accent-text`, `border-line` adapt automatically.

**Type** — Raleway (UI), Cormorant Garamond italic (quotes only).
Utilities: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-body-sm`, `text-eyebrow`, `text-caption`, `text-quote`.

**Radius** — `rounded-sm` 4px (buttons), `rounded-md` 8px (cards, images), `rounded-full` (badges, icon buttons). Nothing else.

**Spacing** — 8pt grid; `container-page` (1440 + gutters 16/24/32); `section-y` (64/80/96).

**Buttons** — exactly three variants: `primary`, `outline-white`, `outline-gold`; sizes `md` (48) / `lg` (56); optional `arrow`.
`IconButton` is the round icon form of outline-gold (52px). `TextLink` is a text link, not a button.

**Icons** — Phosphor only, always through `<Icon icon={…} size={…} />`. Weight is picked by size
(Regular ≤ 20px, Light above) so the rendered stroke stays ~1–1.5px everywhere.

**Motion** — `Reveal` (fadeUp / fade / unveil), `Stagger` + `StaggerItem`; ease `cubic-bezier(.22,1,.36,1)`.
`MotionConfig reducedMotion="user"` honours the OS setting.
