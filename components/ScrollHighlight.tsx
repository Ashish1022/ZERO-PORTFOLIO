"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * One word of the paragraph. Its opacity is tied to a slice of the parent's
 * scroll progress, so the sentence lights up left-to-right as it passes through
 * the viewport.
 */
const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
};

/**
 * A paragraph that reads as dim until you scroll it into place, then resolves
 * word by word. Used on the lead copy so the page rewards scrolling instead of
 * just sitting there.
 */
const ScrollHighlight = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const words = text.split(" ");

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default ScrollHighlight;
