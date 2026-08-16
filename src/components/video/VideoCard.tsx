"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioVideo } from "@/types";
import { cn } from "@/lib/utils";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useSound } from "@/hooks/useSound";

const ASPECT_CLASS: Record<PortfolioVideo["aspect"], string> = {
  "16:9": "aspect-video",
  "9:16": "aspect-[9/16]",
  "1:1": "aspect-square",
};

export default function VideoCard({
  video,
  onOpen,
  priority = false,
}: {
  video: PortfolioVideo;
  onOpen: (id: string) => void;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isVisible = useIsVisible(containerRef, { threshold: 0.2 });
  const { play } = useSound();

  function handleEnter() {
    setHovering(true);
    if (isVisible) {
      videoRef.current?.play().catch(() => {});
    }
    play("hover");
  }

  function handleLeave() {
    setHovering(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <button
        type="button"
        data-cursor="PLAY"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => {
          play("click");
          onOpen(video.id);
        }}
        className={cn(
          "group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-surface text-left",
          ASPECT_CLASS[video.aspect]
        )}
      >
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface2 via-surface to-surface2" />
        )}

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          src={isVisible || hovering ? video.videoSrc : undefined}
          poster={video.thumbnail}
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "none"}
          onLoadedData={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            "group-hover:scale-[1.06]"
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <div>
            <p className="font-display text-base text-bone sm:text-lg">
              {video.title}
            </p>
            {video.client && (
              <p className="timecode mt-1 text-[11px] text-ash">
                {video.client} · {video.year}
              </p>
            )}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-void/60 text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
            <PlayIcon />
          </span>
        </div>
      </button>
    </motion.div>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
