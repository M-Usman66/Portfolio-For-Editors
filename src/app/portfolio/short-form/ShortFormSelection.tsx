"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { ecommerceVideos, socialMediaVideos } from "@/data/portfolio";

export default function ShortFormSelection() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-2 text-xs text-ash">
          <Link href="/portfolio" className="hover:text-gold" data-cursor="BACK">
            Work
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-bone">Short Form</span>
        </div>

        <SectionHeading
          eyebrow="Category 02 — Short Form"
          title="Built for the scroll."
          description="Vertical-first edits engineered for retention, split by what they're built to sell."
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 32 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <GlowCard
              href="/portfolio/short-form/ecommerce"
              eyebrow="Category 02.1"
              title="Ecommerce"
              description="Scroll-Stopping Social Media Videos, Edited to Engage Across Square and Vertical Formats."
              count={`${ecommerceVideos.length} projects`}
              className="min-h-[22rem]"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 32 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <GlowCard
              href="/portfolio/short-form/social-media"
              eyebrow="Category 02.2"
              title="Social Media"
              description="Scroll-Stopping Social Media Videos, Edited to Engage."
              count={`${socialMediaVideos.length} projects`}
              className="min-h-[22rem]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
