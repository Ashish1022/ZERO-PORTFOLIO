import type { Metadata } from "next";

import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";
import RollText from "@/components/RollText";
import { Section, SectionHeading } from "@/components/Section";
import { profile, socials } from "@/constants";

export const metadata: Metadata = {
  title: "Elsewhere",
  description: "Where to find Ashish Jadhav across the internet.",
};

const Socials = () => {
  return (
    <>
      <section className="shell pb-12 pt-20 md:pt-28">
        <Reveal intro>
          <p className="eyebrow">Elsewhere</p>
        </Reveal>
        <AnimatedText
          text="Find me online."
          delay={0.2}
          className="display mt-7 max-w-[12ch] text-foreground"
        />
        <Reveal delay={1} intro>
          <p className="lede mt-8 max-w-xl">
            Code on GitHub, work updates on LinkedIn, and everything else in
            between. Email is still the fastest way to reach me.
          </p>
        </Reveal>
      </section>

      <Section className="shell !pt-0">
        <Reveal>
          <SectionHeading
            label="Profiles"
            aside={`${socials.length} links`}
            className="mb-8"
          />
        </Reveal>

        <div>
          {socials.map((social, index) => (
            <Reveal key={social.label} delay={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative isolate flex items-center justify-between gap-6 overflow-hidden border-t border-border py-7"
                data-cursor-label="Open"
              >
                <span className="absolute inset-x-[-100vw] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                <div className="flex items-baseline gap-6">
                  <span className="meta w-8 shrink-0 transition-colors duration-300 group-hover:text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="h2 text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    <RollText>{social.label}</RollText>
                  </h2>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
          <div className="rule" />
        </div>

        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="link mt-10 inline-flex text-[15px]"
          >
            {profile.email}
          </a>
        </Reveal>
      </Section>
    </>
  );
};

export default Socials;
