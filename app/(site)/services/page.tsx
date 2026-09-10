import type { Metadata } from "next";
import Link from "next/link";

import AnimatedText from "@/components/AnimatedText";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import RollText from "@/components/RollText";
import { Section, SectionHeading } from "@/components/Section";
import { capabilities, profile } from "@/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, data and platform architecture, automation and integrations, infrastructure and deployment.",
};

const process = [
  {
    title: "Scope",
    detail:
      "We agree on what the thing actually has to do, what it explicitly won't do, and what success looks like in numbers rather than adjectives.",
  },
  {
    title: "Build",
    detail:
      "Schema first, then the API, then the interface. You see working software early and often — not a demo at the end.",
  },
  {
    title: "Ship & hand over",
    detail:
      "Deployed, monitored and documented, with the deployment path set up so your team can keep shipping without me.",
  },
];

const Services = () => {
  return (
    <>
      <section className="shell pb-16 pt-20 md:pb-24 md:pt-28">
        <Reveal intro>
          <p className="eyebrow">Services</p>
        </Reveal>
        <AnimatedText
          text="What I can build for you."
          delay={0.2}
          className="display mt-7 max-w-[15ch] text-foreground"
        />
        <Reveal delay={1} intro>
          <p className="lede mt-8 max-w-xl">
            Four things I do well, all of them end to end. Most engagements are a
            combination — a product that needs a data model behind it, or an
            integration that needs infrastructure around it.
          </p>
        </Reveal>
      </section>

      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading
            label="Capabilities"
            aside={`${String(capabilities.length).padStart(2, "0")} areas`}
            className="mb-10 md:mb-14"
          />
        </Reveal>

        <div>
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index}>
              <article
                className="group relative isolate grid gap-6 overflow-hidden border-t border-border py-10 md:grid-cols-12 md:gap-10"
                data-cursor-grow
              >
                <span className="absolute inset-x-[-1.5rem] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <div className="flex items-baseline gap-6 md:col-span-4">
                  <span className="meta transition-colors duration-300 group-hover:text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="h2 text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    {capability.title}
                  </h2>
                </div>

                <div className="md:col-span-8">
                  <p className="body max-w-xl text-[16px]">
                    {capability.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {capability.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </Section>

      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading label="How I work" className="mb-10 md:mb-14" />
        </Reveal>

        <div className="grid gap-x-10 md:grid-cols-3">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={index}>
              <div
                className="group relative isolate overflow-hidden border-t border-border py-8"
                data-cursor-grow
              >
                <span className="absolute inset-x-[-1.5rem] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <span className="meta transition-colors duration-300 group-hover:text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="h3 mt-5 text-foreground">{step.title}</h3>
                <p className="body mt-3">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="shell !pt-0">
        <Reveal>
          <div className="border-t border-border pt-14 md:pt-20">
            <p className="eyebrow">Next</p>
            <h2 className="h1 mt-6 max-w-[16ch] text-foreground">
              Tell me what you&apos;re building.
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link href="/contact" className="group btn-solid overflow-hidden">
                  <RollText>Start a project</RollText>
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${profile.email}`}
                  className="group btn-ghost relative overflow-hidden"
                >
                  <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                  <RollText>{profile.email}</RollText>
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Services;
