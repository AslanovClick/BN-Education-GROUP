/** Shared shapes for package tiers (University Admissions, Academic Support, Boarding Schools). */

export type TierItem = string | { text: string; sub: string[] };

export type Tier = {
  id: string;
  name: string;
  /** Display price, e.g. "€10,000" — or "On request". */
  price: string;
  /** Small text after the price, e.g. "/ year". */
  priceNote?: string;
  /** One-line promise under the price. */
  headline: string;
  /** Short facts shown in one line (start, reports…). */
  meta: string[];
  /** Four key points shown on the card; the full list stays behind "Everything included". */
  highlights: string[];
  /** Lead-in above the list, e.g. "Everything in Smart Uni, plus:". */
  intro?: string;
  includes: TierItem[];
  /** "Who it suits" copy — shown in "How it works". */
  suits?: string;
  footnotes?: string[];
  /** Highlighted card (gold frame). */
  featured?: boolean;
};

/** One step of a tier's "How it works" timeline. */
export type Phase = { when: string; title: string; text: string };

export type TierFlow = {
  tierId: string;
  summary: string;
  phases: Phase[];
  /** What parents receive along the way. */
  parents: string[];
};

/** Comparison table row: text, ✓ (true) or — (false), one value per tier. */
export type CompareRow = { label: string; values: (string | boolean)[] };
