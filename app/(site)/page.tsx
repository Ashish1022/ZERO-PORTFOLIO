import Link from "next/link";

import AnimatedText, { AnimatedTextInView } from "@/components/AnimatedText";
import Counter from "@/components/Counter";
import LocalTime from "@/components/LocalTime";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import ScrollHighlight from "@/components/ScrollHighlight";
import RollText from "@/components/RollText";
import Spotlight from "@/components/Spotlight";
import WorkList from "@/components/WorkList";
import { Section, SectionHeading } from "@/components/Section";
import {
  capabilities,
  experiences,
  metrics,
  profile,
  projects,
  stack,
} from "@/constants";

const featured = projects.slice(0, 4).map((project) => ({
  id: project.id,
  name: project.name,
  service: project.service,
  year: project.year,
  thumbnail: project.thumbnail,
}));

const current = experiences[0];
const ticker = stack.flatMap((group) => group.items).slice(0, 14);

const Home = () => {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <Spotlight />

        <div className="shell pb-16 pt-20 md:pb-24 md:pt-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <Reveal intro>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="flex items-center gap-2.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                    </span>
                    <span className="eyebrow">Available for work</span>
                  </span>
                  <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
                  <span className="eyebrow normal-case tracking-wider">
                    <LocalTime />
                  </span>
                </div>
              </Reveal>

              <AnimatedText
                as="h1"
                text="I build products end to end."
                delay={0.25}
                className="display mt-8 max-w-[16ch] text-foreground"
              />

              <Reveal delay={5} intro>
                <p className="lede mt-8 max-w-xl">{profile.intro}</p>
              </Reveal>

              <Reveal delay={6} intro>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Link href="/work" className="group btn-solid overflow-hidden">
                      <RollText>View work</RollText>
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
                      href={profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="group btn-ghost relative overflow-hidden"
                    >
                      <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                      <RollText>Résumé</RollText>
                      <span aria-hidden>↗</span>
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            <Reveal delay={3} intro className="md:col-span-4">
              <ParallaxImage
                src="/profile2.png"
                alt={profile.name}
                priority
                className="aspect-[4/5] w-full max-w-[280px] md:ml-auto md:max-w-none"
              />
              <p className="meta mt-4">
                {profile.title} · {profile.company}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Ticker ------------------------------------------------------ */}
        <div className="mask-fade-r border-y border-border">
          <Marquee items={ticker} baseVelocity={0.85} />
        </div>
      </section>

      {/* Metrics ------------------------------------------------------- */}
      <div className="shell pt-16 md:pt-20">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} data-cursor-grow>
                <dt className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-none tracking-tightest text-foreground">
                  <Counter value={metric.value} />
                </dt>
                <dd className="meta mt-3 leading-relaxed">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Selected work ------------------------------------------------- */}
      <Section className="shell">
        <SectionHeading
          label="Selected work"
          aside={
            <Link href="/work" className="link">
              All projects ↗
            </Link>
          }
          className="mb-10 md:mb-14"
        />
        <WorkList items={featured} />
      </Section>

      {/* Now ----------------------------------------------------------- */}
      <Section className="shell !pt-0">
        <SectionHeading
          label="Now"
          aside={current.period}
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="h2 text-foreground">
              {current.role}
              <span className="block text-muted-foreground">
                {current.company}
              </span>
            </h2>
            <p className="meta mt-4">
              {current.type} · {current.location}
            </p>
          </Reveal>

          <Reveal delay={1} className="md:col-span-7">
            <ScrollHighlight
              text={current.description}
              className="body text-[16px] text-foreground"
            />
            <ul className="mt-6 space-y-4">
              {current.highlights.slice(0, 2).map((highlight, index) => (
                <Reveal
                  as="li"
                  key={highlight}
                  delay={index + 1}
                  className="flex gap-4 border-t border-border pt-4"
                >
                  <span aria-hidden className="meta pt-0.5">
                    —
                  </span>
                  <span className="body">{highlight}</span>
                </Reveal>
              ))}
            </ul>
            <Link href="/about" className="link mt-8 text-[14px]">
              Full experience ↗
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Capabilities -------------------------------------------------- */}
      <Section className="shell !pt-0">
        <SectionHeading
          label="What I do"
          aside={
            <Link href="/services" className="link">
              Services ↗
            </Link>
          }
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-x-10 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index}>
              <div
                className="group relative isolate flex gap-6 overflow-hidden border-t border-border py-7"
                data-cursor-grow
              >
                <span className="absolute inset-x-[-1.5rem] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <span className="meta w-8 shrink-0 pt-1.5 transition-colors duration-300 group-hover:text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="h3 text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                    {capability.title}
                  </h3>
                  <p className="body mt-3">{capability.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {capability.stack.map((tech) => (
                      <span
                        key={tech}
                        className="tag transition-colors duration-300 group-hover:border-foreground/25 group-hover:text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact ------------------------------------------------------- */}
      <Section className="shell !pt-0">
        <div className="border-t border-border pt-14 md:pt-20">
          <Reveal>
            <p className="eyebrow">Next</p>
          </Reveal>
          <AnimatedTextInView
            as="h2"
            text="Let's build something."
            className="display mt-6 max-w-[14ch] text-foreground"
          />
          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
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
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Home;
