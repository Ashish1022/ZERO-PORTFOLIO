"use client";

import { cn } from "@/lib/utils";

/**
 * Hover roll: the label slides up and out while an identical copy slides in
 * from below. Pure CSS transforms driven by the nearest `group`, so it costs
 * nothing at rest and works inside links and buttons alike.
 */
const RollText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <span className={cn("relative inline-block overflow-hidden align-bottom", className)}>
    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
      {children}
    </span>
    <span
      aria-hidden
      className="absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
    >
      {children}
    </span>
  </span>
);

export default RollText;
