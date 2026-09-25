import type { StaticImageData } from "next/image";
import summerImage from "@/assets/images/service-summer.jpg";
import enrolmentImage from "@/assets/images/step-5.jpg";
import { programmes } from "./services";

/** Structured article body — rendered by <ArticleBody>, headings also feed the table of contents. */
export type Block =
  | { type: "h2" | "h3" | "h4"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "image"; src: StaticImageData; alt: string; caption?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul" | "ol"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  lead: string;
  image: StaticImageData;
  facts: { label: string; value: string }[];
  body: Block[];
};

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Template body shared by every programme until individual articles are written.
 * Copy is intentionally programme-agnostic.
 */
const templateBody: Block[] = [
  { type: "h2", id: "overview", text: "Programme overview" },
  {
    type: "p",
    text: "We never recommend a summer programme simply to fill the holidays. Each experience is chosen as part of your child’s long-term education strategy — to test an interest, build confidence in a new environment or strengthen an application for the next stage.",
  },
  {
    type: "p",
    text: "Programmes combine structured academic sessions with project work, cultural visits and time outdoors. Groups are small, and every participant is supported by experienced staff throughout their stay.",
  },
  { type: "h3", id: "who-is-it-for", text: "Who is it for" },
  {
    type: "p",
    text: "The programme suits curious, motivated students who are ready to spend time away from home and want to explore a subject in more depth than school allows.",
  },
  {
    type: "ul",
    items: [
      "Students aged 13–18 with a good level of English",
      "Young people considering boarding school or university abroad",
      "Families looking for a purposeful, well-supervised summer",
    ],
  },
  {
    type: "image",
    src: summerImage,
    alt: "Students on a summer programme at a historic campus",
    caption: "Afternoon sessions often move outdoors — learning continues well beyond the classroom.",
  },
  { type: "h2", id: "typical-day", text: "A typical day" },
  {
    type: "p",
    text: "Days follow a clear rhythm that balances focus and freedom. Mornings are dedicated to learning, afternoons to applying it, and evenings to reflection and community.",
  },
  { type: "h3", id: "morning", text: "Morning" },
  {
    type: "p",
    text: "Seminars and workshops led by subject specialists, typically in groups of eight to twelve students.",
  },
  { type: "h3", id: "afternoon-and-evening", text: "Afternoon & evening" },
  {
    type: "p",
    text: "Team projects, excursions and sports, followed by dinner together and a short evening programme.",
  },
  { type: "h4", id: "sample-schedule", text: "Sample schedule" },
  {
    type: "ol",
    items: [
      "08:00 — Breakfast and daily briefing",
      "09:00 — Academic sessions and workshops",
      "13:00 — Lunch",
      "14:00 — Project work, excursions or sport",
      "19:00 — Dinner and evening activity",
    ],
  },
  {
    type: "quote",
    text: "The best programmes don’t just add a line to an application — they help a child discover what genuinely excites them.",
    cite: "Oksana, Founder of BN Education",
  },
  { type: "h2", id: "how-bn-supports", text: "How BN supports your family" },
  {
    type: "p",
    text: "From choosing the right programme to the day your child returns home, one dedicated advisor stays with your family.",
  },
  {
    type: "ol",
    items: [
      "An initial conversation about your child’s interests and goals",
      "A shortlist of programmes that fit the wider education strategy",
      "Application, travel, insurance and visa arrangements",
      "Regular updates during the programme and a review afterwards",
    ],
  },
  {
    type: "image",
    src: enrolmentImage,
    alt: "Students walking to class together",
    caption: "After the programme we review the experience together and agree the next step.",
  },
  { type: "h2", id: "practical-information", text: "Practical information" },
  {
    type: "p",
    text: "Places are limited and popular programmes fill early. We recommend starting the conversation at least four to six months before the summer.",
  },
];

const facts = [
  { label: "Ages", value: "13–18" },
  { label: "Duration", value: "2–3 weeks" },
  { label: "Season", value: "July – August" },
  { label: "Group size", value: "Up to 20" },
];

export const articles: Article[] = programmes.map((p) => ({
  slug: p.href.split("/").pop()!,
  title: p.title,
  lead: p.text,
  image: p.image,
  facts,
  body: templateBody,
}));

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
