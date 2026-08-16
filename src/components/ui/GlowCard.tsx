"use client";

import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

interface GlowCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  count?: string;
  className?: string;
}

export default function GlowCard({
  href,
  eyebrow,
  title,
  description,
  count,
  className,
}: GlowCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { play } = useSound();

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Link
      ref={ref}
      href={href}
      data-cursor="EXPLORE"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => play("hover")}
      onClick={() => play("click")}
      className={cn(
        "group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 transition-colors duration-500 hover:border-gold/40 sm:p-10",
        className
      )}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(212,168,87,0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="timecode text-xs uppercase tracking-widest2 text-gold">
          {eyebrow}
        </span>
        {count && (
          <span className="timecode text-xs text-ash">{count}</span>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-3xl text-bone transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm text-ash">{description}</p>

        <motion.span className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
          View category
          <motion.span
            initial={{ x: 0 }}
            className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
          >
            →
          </motion.span>
        </motion.span>
      </div>
    </Link>
  );
}
