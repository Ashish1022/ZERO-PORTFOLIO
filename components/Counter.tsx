"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Splits "50K+" into ["", 50, "K+"] so only the number animates. */
const parse = (value: string) => {
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], target: parseFloat(match[2]), suffix: match[3] };
};

/** useLayoutEffect on the client, no-op on the server (avoids React's warning). */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Counts a metric up from zero the first time it scrolls into view.
 *
 * The real value is what renders on the server and on the first client render,
 * so the static HTML always carries the true number — someone without JS, or
 * reading before hydration, never sees a zero. The reset to zero happens in a
 * layout effect, before the browser paints, so there's no flash either.
 */
const Counter = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const parsed = parse(value);
  const [display, setDisplay] = useState(value);

  useIsomorphicLayoutEffect(() => {
    if (!parsed || reduced) return;
    setDisplay(`${parsed.prefix}0${parsed.suffix}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduced]);

  useEffect(() => {
    if (!inView || !parsed || reduced) return;

    const { prefix, target, suffix } = parsed;
    const decimals = target % 1 !== 0 ? 1 : 0;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      /* easeOutExpo — fast off the line, long settle. */
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default Counter;
