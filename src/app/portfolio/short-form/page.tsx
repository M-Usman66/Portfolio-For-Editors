import type { Metadata } from "next";
import ShortFormSelection from "./ShortFormSelection";

export const metadata: Metadata = {
  title: "Short Form Editing",
  description:
    "Vertical-first e-commerce and social edits engineered to stop the scroll.",
};

export default function ShortFormPage() {
  return <ShortFormSelection />;
}
