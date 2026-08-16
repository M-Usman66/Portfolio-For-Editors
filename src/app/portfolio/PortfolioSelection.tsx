"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { longFormVideos, ecommerceVideos, socialMediaVideos } from "@/data/portfolio";

export default function PortfolioSelection() {
  const shortFormCount = ecommerceVideos.length + socialMediaVideos.length;

  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="00:01 — Selected Work"
          title="Two ways to see the craft."
          description="Pick a lane — sprawling brand narratives or fast-cut social content built to stop the scroll."
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
              href="/portfolio/long-form"
              eyebrow="Category 01"
              title="Long Form Editing"
              description="Brand films, documentaries and keynote recaps — full narrative arcs cut for retention."
              count={`${longFormVideos.length} projects`}
              className="min-h-[24rem]"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 32 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <GlowCard
              href="/portfolio/short-form"
              eyebrow="Category 02"
              title="Short Form Editing"
              description="E-commerce ads and social content built for the first two seconds and every scroll after."
              count={`${shortFormCount} projects`}
              className="min-h-[24rem]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
