"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A two-part cursor: a hard dot that tracks exactly, and a ring that lags
 * behind on a spring. The ring swells over anything interactive, and swells
 * further — filling in and carrying a word — over elements that declare a
 * `data-cursor-label`, so the pointer says what a row will do before you click.
 *
 * Three deliberate choices keep it from ever leaving you with no cursor:
 *
 *  - It renders through a portal on <body>, so no transformed or isolated
 *    ancestor can shift or clip it. (The page wrapper in template.tsx carries a
 *    transform, which turns any `position: fixed` inside it into a containing
 *    block — this sidesteps that entirely.)
 *  - It paints in explicit colours rather than mix-blend-difference. Blending
 *    against the fixed grain overlay resolved white to black on the dark
 *    palette, which made the whole thing invisible. A dark halo around the
 *    white keeps it legible over pale screenshots instead.
 *  - The native cursor is only hidden once this one has actually received a
 *    pointer position, so a failure here degrades to the system cursor rather
 *    than to nothing.
 */
const Cursor = () => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const pointerOk = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!pointerOk || still) return;

    setEnabled(true);

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      if (!visible) {
        setVisible(true);
        /* Only now, with a real position to draw at, take over the pointer. */
        document.documentElement.setAttribute("data-cursor", "on");
      }

      const target = event.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      setLabel(labelled?.dataset.cursorLabel ?? null);
      setHovering(
        Boolean(
          target?.closest(
            'a, button, [role="button"], input, textarea, select, [data-cursor-grow]',
          ),
        ),
      );
    };

    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeAttribute("data-cursor");
    };
  }, [mounted, visible, x, y]);

  if (!mounted || !enabled) return null;

  const scale = pressed ? 0.85 : label ? 3.1 : hovering ? 1.9 : 1;

  return createPortal(
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 180ms" }}
    >
      <motion.div
        className="absolute -left-[3.5px] -top-[3.5px] h-[7px] w-[7px] rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
        style={{ x, y }}
        animate={{ opacity: label ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale,
          opacity: label ? 1 : hovering ? 0.85 : 0.5,
          backgroundColor: label ? "rgb(255,255,255)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              className="whitespace-nowrap font-mono text-[3.4px] font-medium uppercase tracking-[0.14em] text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>,
    document.body,
  );
};

export default Cursor;
