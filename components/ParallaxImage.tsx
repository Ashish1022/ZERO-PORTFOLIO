"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { introOffsetSeconds } from "@/lib/intro";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Portrait that unmasks from the bottom on load, then drifts against the scroll
 * inside its frame. Grayscale until hovered.
 */
const ParallaxImage = ({ src, alt, className, priority }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  /* Hold the unmask until the intro panel has cleared. */
  const [introOffset] = useState(introOffsetSeconds);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-md border border-border",
        className,
      )}
      initial={reduced ? undefined : { clipPath: "inset(100% 0 0 0)" }}
      animate={reduced ? undefined : { clipPath: "inset(0% 0 0 0)" }}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 + introOffset,
      }}
    >
      <motion.div className="absolute inset-[-8%]" style={reduced ? undefined : { y }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 280px, 30vw"
          priority={priority}
          className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default ParallaxImage;
