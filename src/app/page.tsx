import type { Metadata } from "next";
import HomeHero from "./HomeHero";

export const metadata: Metadata = {
  title: "The Vault Editor — Professional Video Editor Portfolio",
  description:
    "Cinematic video editing that increases engagement, sales and brand value. Explore long-form and short-form work.",
};

export default function HomePage() {
  return <HomeHero />;
}
