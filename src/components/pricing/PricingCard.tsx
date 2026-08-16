"use client";

import { motion } from "framer-motion";
import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function PricingCard({
  tier,
  index,
}: {
  tier: PricingTier;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2",
        tier.highlighted
          ? "border-gold/50 bg-surface shadow-glow-gold"
          : "border-white/10 bg-surface hover:border-gold/30"
      )}
    >
      {tier.highlighted && (
        <span className="timecode absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-widest2 text-void">
          Most booked
        </span>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-grain-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="font-display text-2xl text-bone">{tier.name}</h3>
        <p className="mt-2 text-sm text-ash">{tier.tagline}</p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-gradient-gold font-display text-4xl">
            {tier.price}
          </span>
          <span className="timecode text-xs text-ash">{tier.billingNote}</span>
        </div>

        <dl className="mt-6 flex flex-col gap-2 text-sm">
          <div className="flex justify-between border-b border-white/5 py-2">
            <dt className="text-ash">Delivery</dt>
            <dd className="text-bone">{tier.deliveryTime}</dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-ash">Revisions</dt>
            <dd className="text-bone">{tier.revisions}</dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-col gap-3">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-ash">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <AnimatedButton
            href="/contact"
            variant={tier.highlighted ? "primary" : "ghost"}
            className="w-full"
            cursorLabel="BOOK"
          >
            {tier.ctaLabel}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
}
