import type { Metadata } from "next";
import OffersContent from "./OffersContent";

export const metadata: Metadata = {
  title: "Offers & Pricing",
  description:
    "Starter, Professional and Premium video editing packages with fixed delivery windows and revision rounds.",
};

export default function OffersPage() {
  return <OffersContent />;
}
