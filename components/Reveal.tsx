"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { introOffsetSeconds } from "@/lib/intro";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step adds 60ms. */
  delay?: number;
  /**
   * Set on above-the-fold content: waits for the intro panel to clear before
   * animating, instead of playing unseen behind it. Never set it on content
   * below the fold — it would still be waiting when you scrolled down to it.
   */
  intro?: boolean;
  as?: "div" | "section" | "li" | "header" | "footer";
}

/**
 * The only entrance animation in the system: 10px up, fade in, once.
 * No spring, no scale, no rotation. Skipped entirely under reduced motion.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  intro = false,
  as = "div",
}: RevealProps) => {
  const reduced = useReducedMotion();
  const [introOffset] = useState(introOffsetSeconds);
  const Tag = motion[as];

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: delay * 0.06 + (intro ? introOffset : 0),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
