import type { Metadata } from "next";
import Link from "next/link";

import AnimatedText from "@/components/AnimatedText";
import Magnetic from "@/components/Magnetic";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import RollText from "@/components/RollText";
import { Section, SectionHeading } from "@/components/Section";
import { education, experiences, profile, stack } from "@/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack engineer in Mumbai. Founding Engineer at GradGuide — experience, education and the stack I work in.",
};

const About = () => {
  return (
    <>
      <section className="shell pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <Reveal intro>
              <p className="eyebrow">About</p>
            </Reveal>
            <AnimatedText
              text="Engineer, based in Mumbai."
              delay={0.2}
              className="display mt-7 max-w-[14ch] text-foreground"
            />

            <Reveal delay={1} intro>
              <div className="mt-10 max-w-xl space-y-5">
                <p className="lede">
                  I started out building SaaS and DevOps side projects while
                  studying Information Technology, and turned that into a full-time
                  engineering role. Today I&apos;m the founding engineer at
                  GradGuide, where I built the CRM from an empty schema into a
                  system three teams depend on daily.
                </p>
                <p className="lede">
                  I like the parts of the job most people skip: getting the data
                  model right, making the reminder fire exactly on time after a
                  deploy, keeping a system honest when it grows past what it was
                  designed for. Most of what I ship, I own — design, database,
                  API, interface and the deployment behind it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2} intro>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="group btn-solid overflow-hidden"
                  >
                    <RollText>Download résumé</RollText>
                    <span aria-hidden>↗</span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/credentials"
                    className="group btn-ghost relative overflow-hidden"
                  >
                    <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                    <RollText>CV sheet</RollText>
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} intro className="md:col-span-4">
            <ParallaxImage
              src="/profile.png"
              alt={profile.name}
              priority
              className="aspect-[4/5] w-full max-w-[280px] md:ml-auto md:max-w-none"
            />
            <dl className="mt-6 space-y-3">
              {[
                ["Role", profile.role],
                ["Company", `${profile.title}, ${profile.company}`],
                ["Based in", profile.location],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-t border-border pt-3"
                >
                  <dt className="eyebrow">{label}</dt>
                  <dd className="meta text-right text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Experience ---------------------------------------------------- */}
      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading
            label="Experience"
            aside={`${experiences.length} roles`}
            className="mb-10 md:mb-14"
          />
        </Reveal>

        <div>
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.role}-${experience.period}`} delay={index}>
              <article
                className="group relative isolate grid gap-6 overflow-hidden border-t border-border py-10 md:grid-cols-12 md:gap-10"
                data-cursor-grow
              >
                <span className="absolute inset-x-[-1.5rem] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <div className="md:col-span-4">
                  <p className="meta transition-colors duration-300 group-hover:text-foreground">
                    {experience.period}
                  </p>
                  <h3 className="h3 mt-4 text-foreground">{experience.role}</h3>
                  <p className="body mt-1 text-[14px]">{experience.company}</p>
                  <p className="meta mt-4">
                    {experience.type} · {experience.duration} ·{" "}
                    {experience.location}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <p className="body text-[16px] text-foreground/85">
                    {experience.description}
                  </p>

                  <ul className="mt-7 space-y-4">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-4">
                        <span aria-hidden className="meta pt-1">
                          —
                        </span>
                        <span className="body">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
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

      {/* Education ----------------------------------------------------- */}
      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading label="Education" className="mb-10 md:mb-14" />
        </Reveal>

        <div>
          {education.map((entry, index) => (
            <Reveal key={entry.degree} delay={index}>
              <article className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-10">
                <p className="meta md:col-span-4">{entry.period}</p>
                <div className="md:col-span-8">
                  <h3 className="h3 text-foreground">{entry.degree}</h3>
                  <p className="body mt-1 text-[14px]">{entry.institution}</p>
                  <p className="body mt-4 max-w-xl">{entry.detail}</p>
                  <p className="meta mt-4 text-foreground">{entry.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </Section>

      {/* Stack --------------------------------------------------------- */}
      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading label="Stack" className="mb-10 md:mb-14" />
        </Reveal>

        <div className="grid gap-x-10 gap-y-0 md:grid-cols-2">
          {stack.map((group, index) => (
            <Reveal key={group.group} delay={index}>
              <div className="border-t border-border py-7">
                <p className="eyebrow">{group.group}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-[15px] text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
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
              Want to work together?
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link href="/contact" className="group btn-solid overflow-hidden">
                  <RollText>Get in touch</RollText>
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/work" className="group btn-ghost relative overflow-hidden">
                  <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                  <RollText>See the work</RollText>
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default About;
