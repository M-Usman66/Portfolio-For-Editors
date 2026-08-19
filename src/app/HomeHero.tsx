"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ParticleField from "@/components/ui/ParticleField";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-7rem)] items-center overflow-hidden px-4 sm:px-6">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/cethnm5g/video/upload/v1787035195/bgv2.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/85"
      />

      {/* ambient glow blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[130px]"
      />

      <ParticleField count={26} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="timecode mb-6 flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-glow-gold" />
          00:00:00:00 — REC
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-5xl leading-[1.05] tracking-tightest text-bone sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m a<br />
          <span className="text-gradient-gold">
            Professional Video Editor.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-center text-lg text-ash"
        >
          Create videos that increase engagement, grab viewers attention, generate sales and increase brand&apos;s value.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <AnimatedButton href="/portfolio" cursorLabel="WATCH">
            View My Work
          </AnimatedButton>
        </motion.div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 4,
    duration: 1,
    ease: "easeOut",
  }}
  className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ash"
>
  <Stat value="50+" label="Projects cut" /> |
  <Stat value="350k+" label="Views generated" /> |
  <Stat value="3yrs" label="Behind the timeline" />
</motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl text-bone">{value}</span>
      <span className="text-xs text-ash">{label}</span>
    </div>
  );
} 