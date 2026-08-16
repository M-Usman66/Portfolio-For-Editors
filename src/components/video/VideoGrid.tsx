"use client";

import { useState } from "react";
import { PortfolioVideo } from "@/types";
import { cn } from "@/lib/utils";
import VideoCard from "@/components/video/VideoCard";
import VideoModal from "@/components/video/VideoModal";

interface VideoGridProps {
  videos: PortfolioVideo[];
  layout?: "grid" | "masonry" | "vertical";
}

export default function VideoGrid({ videos, layout = "grid" }: VideoGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = videos.findIndex((v) => v.id === selectedId);
  const selected = selectedIndex >= 0 ? videos[selectedIndex] : null;

  function next() {
    const i = (selectedIndex + 1) % videos.length;
    setSelectedId(videos[i].id);
  }
  function prev() {
    const i = (selectedIndex - 1 + videos.length) % videos.length;
    setSelectedId(videos[i].id);
  }

  return (
    <>
      <div
        className={cn(
          layout === "grid" &&
            "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
          layout === "masonry" &&
            "columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div]:mb-6 [&>div]:break-inside-avoid",
          layout === "vertical" &&
            "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {videos.map((video, i) => (
          <VideoCard
            key={video.id}
            video={video}
            onOpen={setSelectedId}
            priority={i < 3}
          />
        ))}
      </div>

      <VideoModal
        video={selected}
        onClose={() => setSelectedId(null)}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
