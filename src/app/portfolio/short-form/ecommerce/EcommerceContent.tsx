"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoGrid from "@/components/video/VideoGrid";
import { ecommerceVideos } from "@/data/portfolio";

export default function EcommerceContent() {
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
          <span className="text-bone">Ecommerce</span>
        </div>

        <SectionHeading
          eyebrow="Category 02.1 — Ecommerce"
          title="Product-first, format-agnostic."
          description="Square and vertical cuts, laid out by their natural aspect ratio."
        />

        <div className="mt-12">
          <VideoGrid videos={ecommerceVideos} layout="masonry" />
        </div>
      </div>
    </section>
  );
}
