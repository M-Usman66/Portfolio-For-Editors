import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Three years of editing brand films, documentaries and social content — the process and the timeline.",
};

export default function AboutPage() {
  return <AboutContent />;
}
