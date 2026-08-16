"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioVideo } from "@/types";
import { useSound } from "@/hooks/useSound";

interface VideoModalProps {
  video: PortfolioVideo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function VideoModal({
  video,
  onClose,
  onNext,
  onPrev,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { play } = useSound();

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
      play("open");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!video) return;
      if (e.key === "Escape") {
        play("close");
        onClose();
      }
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, onNext, onPrev, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-void/90 backdrop-blur-xl p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            play("close");
            onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <motion.button
            aria-label="Close"
            data-cursor="CLOSE"
            onClick={(e) => {
              e.stopPropagation();
              play("close");
              onClose();
            }}
            className="absolute right-5 top-24 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone hover:border-gold/60 hover:text-gold sm:right-8"
          >
            ✕
          </motion.button>

          <button
            aria-label="Previous video"
            data-cursor="PREV"
            onClick={(e) => {
              e.stopPropagation();
              play("hover");
              onPrev();
            }}
            className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-bone hover:border-gold/60 hover:text-gold sm:left-6 sm:flex"
          >
            ‹
          </button>
          <button
            aria-label="Next video"
            data-cursor="NEXT"
            onClick={(e) => {
              e.stopPropagation();
              play("hover");
              onNext();
            }}
            className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-bone hover:border-gold/60 hover:text-gold sm:right-6 sm:flex"
          >
            ›
          </button>

          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl"
          >
            <div
              className={
                video.aspect === "16:9"
                  ? "aspect-video w-full bg-black"
                  : "mx-auto aspect-[9/16] max-h-[60vh] bg-black"
              }
            >
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                ref={videoRef}
                src={video.videoSrc}
                poster={video.thumbnail}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-xl text-bone sm:text-2xl">
                  {video.title}
                </h3>
                {video.client && (
                  <span className="timecode shrink-0 text-xs text-ash">
                    {video.client} · {video.year}
                  </span>
                )}
              </div>
              <p className="text-sm text-ash">{video.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
