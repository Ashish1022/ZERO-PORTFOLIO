"use client";

import { motion } from "framer-motion";

/**
 * Re-runs on every navigation (unlike layout.tsx), so each route fades and
 * lifts in rather than snapping.
 *
 * Note: the transform here makes this element the containing block for any
 * `position: fixed` descendant. Overlays that must track the viewport — the
 * cursor, the work-list preview — portal to <body> instead of relying on fixed
 * positioning from inside a page.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
