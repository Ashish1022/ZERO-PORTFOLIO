import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { profile, socials } from "@/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about freelance work, a product build, or anything else worth building.",
};

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "Location", value: profile.location, href: null },
];

const Contact = () => {
  return (
    <>
      <section className="shell pb-16 pt-20 md:pb-24 md:pt-28">
        <Reveal intro>
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="eyebrow">Available for work</span>
          </div>
        </Reveal>
        <AnimatedText
          text="Get in touch."
          delay={0.2}
          className="display mt-8 max-w-[13ch] text-foreground"
        />
        <Reveal delay={1} intro>
          <p className="lede mt-8 max-w-xl">
            Freelance projects, product builds, or a system that needs
            straightening out — tell me what you have in mind and I&apos;ll come
            back with an honest read on it.
          </p>
        </Reveal>
      </section>

      <Section className="shell !pt-0">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Channels ------------------------------------------------- */}
          <Reveal className="md:col-span-4">
            <SectionHeading label="Direct" className="mb-6" />

            <dl>
              {channels.map((channel) => (
                <div key={channel.label} className="border-b border-border py-4">
                  <dt className="eyebrow">{channel.label}</dt>
                  <dd className="mt-2 text-[15px] text-foreground">
                    {channel.href ? (
                      <a href={channel.href} className="link">
                        {channel.value}
                      </a>
                    ) : (
                      channel.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="eyebrow mb-4 mt-12">Elsewhere</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-border pt-5">
              <p className="body text-[14px]">
                Prefer async? Email is fastest. For anything scoped, a
                30-minute call usually saves a week of back and forth.
              </p>
            </div>
          </Reveal>

          {/* Form ----------------------------------------------------- */}
          <Reveal delay={1} className="md:col-span-8 md:pl-10">
            <SectionHeading label="Send a message" className="mb-10" />
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Contact;
