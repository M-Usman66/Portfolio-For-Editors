import type { Metadata } from "next";
import LongFormContent from "./LongFormContent";

export const metadata: Metadata = {
  title: "Long Form Editing",
  description:
    "Brand films, documentaries and keynote recaps — full narrative arcs cut for retention.",
};

export default function LongFormPage() {
  return <LongFormContent />;
}
