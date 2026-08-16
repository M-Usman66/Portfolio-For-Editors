"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedButton from "@/components/ui/AnimatedButton";

const EXPERIENCE = [
  {
    time: "2023",
    title: "Started Social Media Marketing",
    detail:
      "Managed content creation for multiple clients,planned and executed social media strategies, gained experience in video creation, mobile shoot & meta ads",
  },
  {
    time: "2024",
    title: "Started E-commerce Marketing & Freelancing as a Video Editor",
    detail:
      "Created engaging and high-quality video content tailored for social media platforms, made content for the company’s page as well as client accounts",
  },
  {
    time: "2025",
    title: "Social & Short-Form Content | Long-form(Storytelling & Retention)",
    detail:
      "Focused on turning raw footage into engaging, purposeful content that keeps viewers watching and helps brands communicate with impact. Editing long-form content with a strong focus on storytelling, pacing, structure, sound design and keeping the viewer engaged from the opening frame to the final cut.",
  },
  {
    time: "2026",
    title: "Professional Video Editing",
    detail:
      "Focused on turning raw footage into engaging, purposeful content that keeps viewers watching and helps brands communicate with impact.",
  },
];

export default function AboutContent() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="00:02 — About" title="The Person Behind The Timeline." />

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,20rem)_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface2 via-surface to-void md:mx-0"
          >
            {/* Profile image placeholder — swap for a real photo via next/image */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-ash">
              <img src="/images/Profile.jpg" 
                alt="TheVault_EDITER — Professional Video Editor" 
                className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <p className="text-lg text-bone">
                I&apos;m a video editor focused on turning ideas, footage and
                stories into engaging content that people actually want to watch.
              </p>
              <p className="text-ash">
                Over the last three years I&apos;ve worked with,
                agencies and creators.
                From long-form storytelling to short-form social content and
                e-commerce advertising, I approach every edit with one goal:
                make every second count. I focus on pacing, storytelling,
                sound design, visual rhythm and clean transitions to create
                videos that feel intentional from beginning to end to turn raw footage into scroll-stopping content

              </p>
              <p className="text-ash">
                When I&apos;m not editing, I&apos;m usually studying pacing in
                films I admire, or testing new hooks for short-form content.
              </p>
              <div className="mt-2">
                <AnimatedButton href="/contact" variant="ghost" cursorLabel="TALK">
                  Start a conversation
                </AnimatedButton>
              </div>
            </motion.div>

            <div>
              <h3 className="timecode mb-6 text-xs uppercase tracking-widest2 text-gold">
                Experience
              </h3>
              <ol className="relative flex flex-col gap-8 border-l border-white/10 pl-8">
                {EXPERIENCE.map((e, i) => (
                  <motion.li
                    key={e.time}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-gold bg-void" />
                    <span className="timecode text-xs text-gold">{e.time}</span>
                    <h4 className="mt-1 font-display text-lg text-bone">
                      {e.title}
                    </h4>
                    <p className="mt-1 text-sm text-ash">{e.detail}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
