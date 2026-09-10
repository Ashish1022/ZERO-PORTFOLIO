"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Mono eyebrow, e.g. "Selected work". */
  label: string;
  /** Right-aligned mono metadata, e.g. "2022 — 26" or a link. */
  aside?: ReactNode;
  className?: string;
}

/**
 * A rule that draws itself in from the left as it enters view, with a mono
 * label beneath. Every section on the site opens with one of these.
 */
export const SectionHeading = ({
  label,
  aside,
  className,
}: SectionHeadingProps) => (
  <div className={cn("relative pt-4", className)}>
    <motion.span
      aria-hidden
      className="absolute inset-x-0 top-0 h-px origin-left bg-border"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    />
    <div className="flex items-center justify-between gap-6">
      <span className="eyebrow">{label}</span>
      {aside ? <span className="meta">{aside}</span> : null}
    </div>
  </div>
);

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-20 md:py-28", className)}>
    {children}
  </section>
);
