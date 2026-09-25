import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "@/assets/images/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
};

/** 404 — used for unknown URLs and for pages that aren't built yet. */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section
          data-surface="dark"
          className="theme-dark relative isolate flex min-h-[88svh] items-center overflow-hidden bg-ink-800"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image src={heroImage} alt="" fill preload sizes="100vw" placeholder="blur" className="object-cover" />
            <div className="overlay-ink absolute inset-0" />
          </div>

          <Reveal className="container-page relative flex flex-col items-center pb-20 pt-36 text-center">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none text-[clamp(10rem,28vw,20rem)] font-bold leading-none tracking-[-0.04em] text-gold-500/10"
            >
              404
            </span>
            <Eyebrow>Error 404</Eyebrow>
            <h1 className="mt-4 text-h1 text-balance text-white">
              This page <span className="text-gold-500">isn’t here yet</span>
            </h1>
            <p className="mt-5 max-w-[540px] text-lead text-pretty text-fg-muted">
              The page you’re looking for doesn’t exist or is still being prepared. Let’s get you back on track.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:gap-4">
              <Button href={routes.home} arrow>
                Back to Home
              </Button>
              <Button href={routes.contact} variant="outline-white">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
