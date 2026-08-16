"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoGrid from "@/components/video/VideoGrid";
import { socialMediaVideos } from "@/data/portfolio";

export default function SocialMediaContent() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-2 text-xs text-ash">
          <Link href="/portfolio" className="hover:text-gold" data-cursor="BACK">
            Work
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/portfolio/short-form" className="hover:text-gold" data-cursor="BACK">
            Short Form
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-bone">Social Media</span>
        </div>

        <SectionHeading
          eyebrow="Category 02.2 — Social Media"
          title="Vertical, and built to hook fast."
          description="Talking-heads, Trend Remixes Transform Social Media Content Into Engaging Videos That Get Attention. — all 9:16."
        />

        <div className="mt-12">
          <VideoGrid videos={socialMediaVideos} layout="vertical" />
        </div>
      </div>
    </section>
  );
}
