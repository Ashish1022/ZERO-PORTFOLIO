/**
 * Coordination between the intro panel and the page underneath it.
 *
 * Without this, the hero's entrance animations run *behind* the panel and are
 * already finished by the time the curtain lifts — so the first thing a visitor
 * sees is a static page, and the reveal is wasted. Above-the-fold animations
 * add `introOffsetSeconds()` to their delay so they begin as the panel clears.
 */

export const INTRO_KEY = "zero:intro-played";

/** Counter duration + hold. Keep in step with Preloader's COUNT_MS + HOLD_MS. */
export const INTRO_RUN_MS = 2850;

/** When above-the-fold content should start, measured from page load. */
export const INTRO_TOTAL_MS = 3500;

/**
 * Seconds an entrance animation should wait for the intro to get out of the
 * way. Zero once the intro has played this session, on the server, when motion
 * is reduced, or if storage is unavailable — so the worst case is simply that
 * content animates immediately.
 */
export function introOffsetSeconds(): number {
  if (typeof window === "undefined") return 0;

  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
    if (sessionStorage.getItem(INTRO_KEY)) return 0;
  } catch {
    return 0;
  }

  return INTRO_TOTAL_MS / 1000;
}
