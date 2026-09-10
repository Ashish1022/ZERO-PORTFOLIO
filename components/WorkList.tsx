"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import RollText from "./RollText";

export interface WorkListItem {
  id: string;
  name: string;
  service?: string;
  year: string;
  thumbnail?: string;
}

/**
 * The work index: full-bleed hairline rows. Hovering a row wipes a raised fill
 * up behind it, rolls the title, and floats the project's thumbnail alongside
 * the cursor — tilted by how fast you're moving across the list. Non-hovered
 * rows recede. Touch devices and reduced-motion users get plain rows.
 */
const WorkList = ({ items }: { items: WorkListItem[] }) => {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const velocity = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 24, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 24, mass: 0.5 });
  const rotate = useSpring(useTransform(velocity, [-40, 40], [-9, 9]), {
    stiffness: 180,
    damping: 22,
  });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    velocity.set(event.clientX - (x.get() - 32));
    x.set(event.clientX + 32);
    y.set(event.clientY - 130);
  };

  const activeItem = active === null ? null : items[active];

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
      {items.map((item, index) => (
        <Link
          key={item.id}
          href={`/project/${item.id}`}
          onMouseEnter={() => setActive(index)}
          className="group block"
          data-cursor-label="View"
        >
          <motion.div
            className="relative isolate flex items-center gap-6 overflow-hidden border-t border-border py-7 md:py-9"
            animate={{
              opacity: active !== null && active !== index ? 0.35 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Fill that wipes up from the baseline on hover. */}
            <span className="absolute inset-x-[-100vw] inset-y-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

            <span className="meta w-8 shrink-0 self-start pt-2 transition-colors duration-300 group-hover:text-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex min-w-0 flex-1 flex-col gap-1.5 md:flex-row md:items-baseline md:gap-6">
              <h3 className="h2 text-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-3">
                <RollText>{item.name}</RollText>
              </h3>
              {item.service ? (
                <span className="meta shrink-0 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  {item.service}
                </span>
              ) : null}
            </div>

            <span className="meta hidden shrink-0 sm:block">{item.year}</span>

            <span
              aria-hidden
              className="shrink-0 pl-4 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground"
            >
              ↗
            </span>
          </motion.div>
        </Link>
      ))}

      <div className="rule" />

      {/* Portalled to <body>: the page wrapper in template.tsx carries a
          transform, and a transformed ancestor becomes the containing block for
          fixed children — which would drop this preview in the wrong place. */}
      {!reduced && mounted &&
        createPortal(
          <AnimatePresence>
            {activeItem?.thumbnail ? (
              <motion.div
                key={activeItem.id}
                className="pointer-events-none fixed left-0 top-0 z-40 hidden overflow-hidden rounded-md border border-border bg-surface shadow-2xl shadow-black/40 md:block"
                style={{ x: springX, y: springY, rotate }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={activeItem.thumbnail}
                  alt=""
                  width={360}
                  height={228}
                  className="h-[228px] w-[360px] object-cover"
                />
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};

export default WorkList;
