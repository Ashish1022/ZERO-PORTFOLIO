import type { Metadata } from "next";
import Link from "next/link";

import AnimatedText from "@/components/AnimatedText";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import RollText from "@/components/RollText";
import WorkList from "@/components/WorkList";
import { Section, SectionHeading } from "@/components/Section";
import { profile, projects } from "@/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — SaaS platforms, deployment tooling, data pipelines and client work, built end to end.",
};

const items = projects.map((project) => ({
  id: project.id,
  name: project.name,
  service: project.service,
  year: project.year,
  thumbnail: project.thumbnail,
}));

const years = projects.map((project) => Number(project.year));
const range = `${Math.min(...years)} — ${String(Math.max(...years)).slice(2)}`;

const Work = () => {
  return (
    <>
      <section className="shell pb-16 pt-20 md:pb-24 md:pt-28">
        <Reveal intro>
          <p className="eyebrow">Index</p>
        </Reveal>
        <AnimatedText
          text="Work"
          delay={0.15}
          className="display mt-7 max-w-[12ch] text-foreground"
        />
        <Reveal delay={1} intro>
          <p className="lede mt-8 max-w-xl">
            Platforms, tooling and client work — each one shipped, deployed and
            maintained. Open a project for the architecture, trade-offs and what
            it taught me.
          </p>
        </Reveal>
      </section>

      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading
            label={`${projects.length} projects`}
            aside={range}
            className="mb-8"
          />
        </Reveal>

        <Reveal delay={1}>
          <WorkList items={items} />
        </Reveal>
      </Section>

      <Section className="shell !pt-0">
        <Reveal>
          <div className="border-t border-border pt-14 md:pt-20">
            <p className="eyebrow">Next</p>
            <h2 className="h1 mt-6 max-w-[16ch] text-foreground">
              Got something you want built?
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

export default Work;
