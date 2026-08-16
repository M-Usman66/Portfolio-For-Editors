"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/pricing/PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function OffersContent() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="00:03 — Offers"
          title="Pricing built around delivery, not guesswork."
          description="Every package includes a fixed delivery window and a set number of revision rounds, so there are no surprises mid-project."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ash">
          Need something outside these packages? {" "}
          <a href="/contact" className="text-gold hover:text-gold-bright">
            Get in touch
          </a>{" "}
          for a custom quote.
        </p>
      </div>
    </section>
  );
}
