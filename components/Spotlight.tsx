"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A soft monochrome light that trails the pointer across its container. Kept at
 * a few percent opacity — it should register as depth, not as a coloured blob.
 *
 * Positioned absolutely against its parent (which must be `relative` and
 * `overflow-hidden`) rather than fixed to the viewport: the page wrapper in
 * template.tsx carries a transform, and a transformed ancestor becomes the
 * containing block for fixed children, which would leave this hanging in the
 * wrong place.
 */
const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(-800);
  const y = useMotionValue(-800);
  const springX = useSpring(x, { stiffness: 90, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 90, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;

    const move = (event: MouseEvent) => {
      const host = ref.current?.parentElement;
      if (!host) return;
      const rect = host.getBoundingClientRect();
      /* Convert viewport coordinates into parent-relative ones. */
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute -left-[300px] -top-[300px] hidden h-[600px] w-[600px] rounded-full md:block"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.022) 35%, transparent 70%)",
      }}
    />
  );
};

export default Spotlight;
