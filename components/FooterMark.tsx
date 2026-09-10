"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

/**
 * The oversized closing wordmark.
 *
 * Drawn as SVG text with an explicit `textLength`, so it fits the viewport
 * exactly at any width instead of overflowing the way a `nowrap` heading with a
 * vw font-size does. It drifts slightly with the pointer and rises as the
 * footer enters view.
 */
const FooterMark = ({ text = "ASHISH JADHAV" }: { text?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["28%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);

  const pointer = useMotionValue(0);
  const drift = useSpring(pointer, { stiffness: 60, damping: 22, mass: 0.6 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    /* -1 → 1 across the width, scaled to a few pixels of travel. */
    pointer.set(((event.clientX - rect.left) / rect.width - 0.5) * 26);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => pointer.set(0)}
      className="overflow-hidden px-4 pb-2 md:px-8"
      aria-hidden
    >
      <motion.div style={reduced ? undefined : { y, opacity, x: drift }}>
        <svg
          viewBox="0 0 1000 132"
          className="w-full text-foreground/[0.14]"
          role="presentation"
          focusable="false"
        >
          <text
            x="0"
            y="106"
            fontSize="118"
            fontWeight="500"
            letterSpacing="-3"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            className="font-sans"
          >
            {text}
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default FooterMark;
