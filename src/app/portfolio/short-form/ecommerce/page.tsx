import type { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";

export const metadata: Metadata = {
  title: "Ecommerce Edits",
  description:
    "Turning E-commerce Products Into Scroll-Stopping Videos That Drives Sale.",
};

export default function EcommercePage() {
  return <EcommerceContent />;
}
