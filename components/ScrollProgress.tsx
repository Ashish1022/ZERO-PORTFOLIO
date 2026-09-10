"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline read-progress bar pinned under the header. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[55] h-px origin-left bg-foreground/60"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
