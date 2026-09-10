"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectShowcaseProps {
  videoUrl?: string;
  images: string[];
  name: string;
}

/**
 * Media block for a project page: an autoplaying loop with a quiet play/pause
 * control, followed by a stepped image gallery. Either half is skipped when the
 * project has no real asset for it.
 */
const ProjectShowcase = ({ videoUrl, images, name }: ProjectShowcaseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      void video.play();
    }
    setPlaying(!playing);
  };

  const step = (direction: 1 | -1) =>
    setIndex((prev) => (prev + direction + images.length) % images.length);

  return (
    <div className="space-y-16">
      {videoUrl ? (
        <figure>
          <div className="relative overflow-hidden rounded-md border border-border bg-surface">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
              className="absolute bottom-4 right-4 rounded-full border border-border bg-background/70 px-4 py-2 font-mono text-[10.5px] uppercase tracking-label text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              {playing ? "Pause" : "Play"}
            </button>
          </div>
          <figcaption className="meta mt-3">{name} — walkthrough</figcaption>
        </figure>
      ) : null}

      {images.length > 0 ? (
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[index]}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[index]}
                  alt={`${name} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {images.length > 1 ? (
            <figcaption className="mt-3 flex items-center justify-between">
              <span className="meta">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              <span className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/35 hover:text-foreground"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/35 hover:text-foreground"
                >
                  →
                </button>
              </span>
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </div>
  );
};

export default ProjectShowcase;
