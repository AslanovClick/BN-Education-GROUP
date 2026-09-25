import { DownloadSimple } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Typography";
import { resources } from "@/content/process";

export function Resources() {
  return (
    <section id="resources" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Documents & Resources"
            description="Download helpful guides and checklists to support your application journey."
          />
        </Reveal>

        <Stagger as="ul" className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {resources.map((item) => (
            <StaggerItem as="li" key={item.title}>
              <a
                href={item.href}
                download
                className="group flex h-full items-center justify-between gap-6 rounded-md border border-transparent bg-white px-6 py-5 transition-[border-color,box-shadow] duration-500 ease-out-soft hover:border-gold-500 hover:shadow-[0_18px_40px_-24px_rgb(29_15_51/0.3)] md:px-7 md:py-6"
              >
                <span>
                  <span className="block text-lg font-bold leading-snug text-ink-800">{item.title}</span>
                  <span className="mt-1 block text-body-sm text-muted">{item.text}</span>
                </span>
                {/* Round outline-gold icon control, same family as the carousel arrows */}
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold-500 text-accent-text transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-ink-800">
                  <Icon icon={DownloadSimple} size={20} />
                  <span className="sr-only">Download</span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
