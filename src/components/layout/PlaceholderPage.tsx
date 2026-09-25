import Image from "next/image";
import heroImage from "@/assets/images/hero.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Temporary page for routes that are linked from the homepage but not designed yet. */
export function PlaceholderPage({ title, text }: { title: string; text: string }) {
  return (
    <>
      <Header />
      <main>
        <section data-surface="dark" className="theme-dark relative isolate flex min-h-[80svh] items-center overflow-hidden bg-ink-800">
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image src={heroImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover" />
            <div className="overlay-ink absolute inset-0" />
          </div>
          <Reveal className="container-page flex flex-col items-center pb-16 pt-32 text-center">
            <Eyebrow>Coming soon</Eyebrow>
            <h1 className="mt-4 text-h1 text-balance text-white">{title}</h1>
            <p className="mt-5 max-w-[560px] text-lead text-fg-muted">{text}</p>
            <Button href="/" variant="outline-white" className="mt-10">
              Back to Home
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
