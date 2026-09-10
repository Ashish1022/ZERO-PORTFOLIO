"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  /** Percent of track width travelled per second at rest. Lower is slower;
   *  one full pass of the list is 25% of the track. */
  baseVelocity?: number;
  className?: string;
}

/**
 * Scroll-reactive ticker. It drifts on its own, but scrolling drives it: fast
 * scrolling speeds the strip up and skews it, and scrolling *up* reverses its
 * direction. Hovering slows it to a crawl so labels stay readable.
 *
 * The list is rendered four times and the offset wrapped between -25% and 0%,
 * so the loop never shows a seam regardless of speed or direction.
 */
const Marquee = ({ items, baseVelocity = 0.85, className }: MarqueeProps) => {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const direction = useRef(1);
  const hovering = useRef(false);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 380,
  });
  /* Scroll boost is deliberately gentle — the strip should react to
     scrolling, not be flung by it. */
  const factor = useTransform(smooth, [-2000, 0, 2000], [-1.8, 0, 1.8], {
    clamp: false,
  });
  const skew = useTransform(smooth, [-2000, 0, 2000], [-4, 0, 4], {
    clamp: false,
  });
  const smoothSkew = useSpring(skew, { damping: 40, stiffness: 250 });

  const x = useTransform(baseX, (value) => `${wrap(-25, 0, value)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;

    const boost = factor.get();
    /* Scrolling up flips the strip; scrolling down puts it back. */
    if (boost < 0) direction.current = -1;
    else if (boost > 0) direction.current = 1;

    const idle = hovering.current ? 0.15 : 1;
    let move = direction.current * baseVelocity * idle * (delta / 1000);
    move += move * Math.abs(boost);

    baseX.set(baseX.get() + move);
  });

  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn("relative flex overflow-hidden py-6", className)}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      data-cursor-grow
    >
      <motion.div
        className="flex flex-nowrap will-change-transform"
        style={reduced ? undefined : { x, skewX: smoothSkew }}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            <span className="whitespace-nowrap text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium tracking-tightest text-foreground/60 transition-colors duration-300 hover:text-foreground">
              {item}
            </span>
            <span aria-hidden className="text-[10px] text-muted-foreground">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
