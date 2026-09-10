"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { INTRO_KEY } from "@/lib/intro";

/* Timing, in one place — tune these rather than the values below.
   Total runtime ≈ COUNT_MS + HOLD_MS + EXIT_DELAY + EXIT_MS. */
const COUNT_MS = 2400; // counter 0 → 100
const HOLD_MS = 450; // sit on 100 so it registers before leaving
const EXIT_DELAY = 0.25; // seconds — content clears, then the panel moves
const EXIT_MS = 1.0; // seconds — panel lifting away

/** useLayoutEffect on the client, no-op on the server. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * First-visit intro: a counter runs to 100 while the name unmasks, then the
 * content clears and the panel lifts away.
 *
 * The count is eased in-and-out rather than easeOut, so it doesn't sprint to 90
 * in the first third and then crawl — the number moves at a readable pace the
 * whole way.
 *
 * Renders open on the server so there's no flash of the page before it appears,
 * and closes again before paint if the visitor has already seen it this session
 * or has asked for reduced motion. A <noscript> rule hides it outright when JS
 * never arrives, so it can't strand anyone behind a permanent black panel.
 */
const Preloader = () => {
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || still) setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    /* <html> is the scroll container here (it carries overflow-y-scroll), so
       locking body alone would leave the page scrollable behind the panel. */
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_MS, 1);
      /* easeInOutCubic — settles at both ends, even through the middle. */
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setCount(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const done = setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      setOpen(false);
    }, COUNT_MS + HOLD_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(done);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-preloader
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-background px-6 py-8 md:px-10 md:py-10"
          exit={{ y: "-100%" }}
          transition={{
            duration: EXIT_MS,
            delay: EXIT_DELAY,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Inner content clears first, so the panel doesn't drag the type
              off-screen with it. */}
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Portfolio — 2026
          </motion.span>

          <div className="overflow-hidden pb-[0.12em]">
            <motion.h2
              className="text-[clamp(2rem,8vw,6rem)] font-medium leading-[0.95] tracking-tightest text-foreground"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              transition={{
                duration: 1.25,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
            >
              Ashish Jadhav
            </motion.h2>
          </div>

          <div className="flex items-end justify-between gap-6">
            <motion.span
              className="eyebrow hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Full-stack engineer · Mumbai
            </motion.span>
            <motion.span
              className="font-mono text-[clamp(2.5rem,9vw,6rem)] font-medium leading-none tracking-tightest tabular-nums text-foreground"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {count}
            </motion.span>
          </div>

          {/* Progress hairline across the foot of the panel. */}
          <motion.span
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: COUNT_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
