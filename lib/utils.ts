import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Several project entries still point at `/placeholder.svg?...` stand-ins that
 * were never added to /public. Treat those (and empty paths) as absent so the
 * UI omits the media block instead of rendering a broken asset.
 */
export function isRealAsset(path?: string): path is string {
  return Boolean(path) && !path!.startsWith("/placeholder.svg")
}

/** Normalises a project `link` that may or may not carry a protocol. */
export function toHref(link: string) {
  return link.startsWith("http") ? link : `https://${link}`
}
