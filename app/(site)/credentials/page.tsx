import type { Metadata } from "next";
import Link from "next/link";

import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";
import {
  education,
  experiences,
  profile,
  projects,
  socials,
  stack,
} from "@/constants";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae — experience, education, stack, selected projects and contact details for Ashish Jadhav.",
};

/** A dense CV sheet. The narrative version of this lives on /about. */
const Credentials = () => {
  return (
    <div className="shell pb-24 pt-20 md:pt-28">
      {/* Masthead ------------------------------------------------------ */}
      <Reveal intro>
        <header className="grid gap-8 pb-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Curriculum vitae</p>
            <AnimatedText
              text={profile.name}
              delay={0.15}
              className="h1 mt-6 text-foreground"
            />
            <p className="lede mt-3">
              {profile.title} at {profile.company} · {profile.role}
            </p>
          </div>

          <dl className="md:col-span-5 md:pl-10">
            {[
              ["Email", profile.email, `mailto:${profile.email}`],
              ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
              ["Location", profile.location, null],
              ["Résumé", "PDF ↗", profile.resume],
            ].map(([label, value, href]) => (
              <div
                key={label as string}
                className="flex items-baseline justify-between gap-4 border-t border-border py-2.5"
              >
                <dt className="eyebrow">{label}</dt>
                <dd className="meta text-right text-foreground">
                  {href ? (
                    <a
                      href={href as string}
                      target={
                        (href as string).startsWith("/") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      className="transition-opacity hover:opacity-60"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>
      </Reveal>

      {/* Profile ------------------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Profile</h2>
          <p className="body max-w-2xl text-[16px] md:col-span-9">
            {profile.intro}
          </p>
        </section>
      </Reveal>

      {/* Experience ---------------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Experience</h2>

          <div className="space-y-9 md:col-span-9">
            {experiences.map((experience) => (
              <article key={`${experience.role}-${experience.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[17px] font-medium tracking-tight text-foreground">
                    {experience.role}
                    <span className="text-muted-foreground">
                      {" "}
                      · {experience.company}
                    </span>
                  </h3>
                  <span className="meta">{experience.period}</span>
                </div>

                <p className="meta mt-2">
                  {experience.type} · {experience.duration} ·{" "}
                  {experience.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden className="meta pt-1">
                        —
                      </span>
                      <span className="body text-[14px]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="meta mt-4 leading-relaxed">
                  {experience.skills.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Education ----------------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Education</h2>

          <div className="space-y-7 md:col-span-9">
            {education.map((entry) => (
              <article key={entry.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[17px] font-medium tracking-tight text-foreground">
                    {entry.degree}
                    <span className="text-muted-foreground">
                      {" "}
                      · {entry.institution}
                    </span>
                  </h3>
                  <span className="meta">{entry.period}</span>
                </div>
                <p className="body mt-3 max-w-2xl text-[14px]">{entry.detail}</p>
                <p className="meta mt-3 text-foreground">{entry.result}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Stack --------------------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Stack</h2>

          <dl className="space-y-4 md:col-span-9">
            {stack.map((group) => (
              <div
                key={group.group}
                className="grid gap-1 sm:grid-cols-4 sm:gap-6"
              >
                <dt className="meta sm:pt-1">{group.group}</dt>
                <dd className="body text-[14px] text-foreground sm:col-span-3">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* Selected projects --------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Selected projects</h2>

          <ul className="md:col-span-9">
            {projects.slice(0, 5).map((project) => (
              <li key={project.id}>
                <Link
                  href={`/project/${project.id}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-border py-3 first:border-t"
                >
                  <span className="text-[15px] text-foreground">
                    {project.name}
                  </span>
                  <span className="meta transition-colors group-hover:text-foreground">
                    {project.service} · {project.year} ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Links --------------------------------------------------------- */}
      <Reveal>
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
          <h2 className="eyebrow md:col-span-3 md:pt-1">Links</h2>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-9">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-[15px]"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap items-center gap-3 border-t border-border pt-10">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-solid"
          >
            Download résumé ↗
          </a>
          <Link href="/contact" className="btn-ghost">
            Get in touch
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Credentials;
