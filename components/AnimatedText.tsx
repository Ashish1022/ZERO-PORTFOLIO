"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { introOffsetSeconds } from "@/lib/intro";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Seconds to wait before the first word lifts. */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Headline reveal: each word sits in an overflow-hidden box and lifts into
 * place on a stagger. The whole string stays in the accessibility tree as one
 * label, so screen readers never hear it word-by-word.
 */
const AnimatedText = ({
  text,
  className,
  delay = 0,
  as = "h1",
}: AnimatedTextProps) => {
  const reduced = useReducedMotion();
  /* Captured once, so a re-render mid-intro can't change the timing. */
  const [introOffset] = useState(introOffsetSeconds);
  const Tag = as as React.ElementType;
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text} data-animated-text>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.055,
          delayChildren: delay + introOffset,
        }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            /* Padding + negative margin keeps descenders from being clipped. */
            className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
            style={{ marginBottom: "-0.12em" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
              {index < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;

/**
 * Same treatment, but triggered when the element scrolls into view rather than
 * on mount. Used for headlines below the fold.
 */
export const AnimatedTextInView = ({
  text,
  className,
  as = "h2",
}: Omit<AnimatedTextProps, "delay">) => {
  const reduced = useReducedMotion();
  const Tag = as as React.ElementType;
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn(className)} aria-label={text} data-animated-text>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.055 }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
            style={{ marginBottom: "-0.12em" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
              {index < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};
