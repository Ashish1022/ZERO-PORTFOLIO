import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AnimatedText from "@/components/AnimatedText";
import Counter from "@/components/Counter";
import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { projects } from "@/constants";
import { isRealAsset, toHref } from "@/lib/utils";

type Params = Promise<{ projectId: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((entry) => entry.id === projectId);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
  };
}

/** A labelled row in the project fact table. */
const Fact = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-baseline justify-between gap-4 border-t border-border py-3">
    <dt className="eyebrow">{label}</dt>
    <dd className="meta text-right text-foreground">{children}</dd>
  </div>
);

/** Two-column section: mono label on the left, prose on the right. */
const Block = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Reveal intro>
    <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10">
      <h2 className="eyebrow md:col-span-3 md:pt-1">{label}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  </Reveal>
);

const ProjectPage = async ({ params }: { params: Params }) => {
  const { projectId } = await params;
  const index = projects.findIndex((entry) => entry.id === projectId);
  const project = projects[index];

  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const images = project.showcaseImages.filter(isRealAsset);
  const video = isRealAsset(project.videoUrl) ? project.videoUrl : undefined;

  return (
    <>
      {/* Header -------------------------------------------------------- */}
      <section className="shell pb-14 pt-14 md:pt-20">
        <Reveal intro>
          <Link href="/work" className="meta transition-colors hover:text-foreground">
            ← Work
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <Reveal intro>
              <p className="eyebrow">
                {project.service} · {project.year}
              </p>
            </Reveal>
            <AnimatedText
              text={project.name}
              delay={0.18}
              className="h1 mt-6 max-w-[16ch] text-foreground"
            />

            <Reveal delay={1} intro>
              <p className="lede mt-8 max-w-xl">{project.description}</p>
            </Reveal>

            <Reveal delay={2} intro>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {project.link ? (
                  <a
                    href={toHref(project.link)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid"
                  >
                    Visit site ↗
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    Source ↗
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} intro className="md:col-span-4">
            <dl>
              <Fact label="Role">{project.role}</Fact>
              <Fact label="Timeline">{project.duration}</Fact>
              <Fact label="Team">{project.teamSize}</Fact>
              <Fact label="Year">{project.year}</Fact>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Media --------------------------------------------------------- */}
      {video || images.length > 0 ? (
        <div className="shell pb-16 md:pb-24">
          <Reveal>
            <ProjectShowcase
              videoUrl={video}
              images={images}
              name={project.name}
            />
          </Reveal>
        </div>
      ) : null}

      {/* Body ---------------------------------------------------------- */}
      <div className="shell pb-10">
        <Block label="Overview">
          <p className="body max-w-2xl text-[16px]">{project.overview}</p>
        </Block>

        <Block label="The problem">
          <p className="body max-w-2xl text-[16px]">{project.challenge}</p>
        </Block>

        <Block label="What I built">
          <p className="body max-w-2xl text-[16px]">{project.solution}</p>
        </Block>

        <Block label="Features">
          <div className="grid gap-x-10 sm:grid-cols-2">
            {project.features.map((feature, featureIndex) => (
              <div
                key={feature.title}
                className="group relative isolate flex gap-5 overflow-hidden border-b border-border py-5 first:border-t sm:[&:nth-child(2)]:border-t"
              >
                <span className="absolute inset-x-[-1rem] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <span className="meta pt-1 transition-colors duration-300 group-hover:text-foreground">
                  {String(featureIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="body mt-1.5 text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Architecture">
          <p className="body max-w-2xl text-[16px]">{project.architecture}</p>
          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </Block>

        <Block label="Results">
          {Array.isArray(project.impact) ? (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4">
              {project.impact.map((item) => (
                <div key={item.label}>
                  <dt className="text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-none tracking-tightest text-foreground">
                    <Counter value={item.value} />
                  </dt>
                  <dd className="meta mt-3 leading-relaxed">{item.label}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="body max-w-2xl text-[16px]">{project.impact}</p>
          )}

          <dl className="mt-12 max-w-md">
            {project.performanceMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-baseline justify-between gap-4 border-t border-border py-3"
              >
                <dt className="body text-[14px]">{metric.label}</dt>
                <dd className="meta text-foreground">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block label="What I learned">
          <ul className="max-w-2xl space-y-4">
            {project.keyLearnings.map((learning) => (
              <li key={learning} className="flex gap-4">
                <span aria-hidden className="meta pt-1">
                  —
                </span>
                <span className="body">{learning}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="What's next">
          <ul className="flex max-w-2xl flex-wrap gap-x-2 gap-y-2">
            {project.futureEnhancements.map((enhancement) => (
              <li key={enhancement} className="tag normal-case tracking-normal">
                {enhancement}
              </li>
            ))}
          </ul>
        </Block>

        <div className="rule" />
      </div>

      {/* Next project -------------------------------------------------- */}
      <Section className="shell !pt-6">
        <Reveal>
          <SectionHeading label="Next project" className="mb-8" />
          <Link
            href={`/project/${next.id}`}
            className="group block"
            data-cursor-label="Open"
          >
            <div className="flex items-center justify-between gap-6 border-t border-border py-8">
              <div>
                <h2 className="h2 text-foreground">{next.name}</h2>
                <p className="meta mt-3">
                  {next.service} · {next.year}
                </p>
              </div>
              <span
                aria-hidden
                className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
              >
                ↗
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>
    </>
  );
};

export default ProjectPage;
