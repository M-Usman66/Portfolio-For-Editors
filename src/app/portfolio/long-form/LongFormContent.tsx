"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoGrid from "@/components/video/VideoGrid";
import { longFormVideos } from "@/data/portfolio";

export default function LongFormContent() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb />
        <SectionHeading
          eyebrow="Category 01 — Long Form"
          title="Narrative work, cut for the long take."
          description="Brand films, documentaries and recaps. Click any project to watch in full."
        />
        <div className="mt-12">
          <VideoGrid videos={longFormVideos} layout="grid" />
        </div>
      </div>
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="mb-8 flex items-center gap-2 text-xs text-ash">
      <Link href="/portfolio" className="hover:text-gold" data-cursor="BACK">
        Work
      </Link>
      <span className="opacity-40">/</span>
      <span className="text-bone">Long Form</span>
    </div>
  );
}
