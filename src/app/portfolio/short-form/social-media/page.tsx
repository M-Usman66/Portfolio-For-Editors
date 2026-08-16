import type { Metadata } from "next";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "Social Media Edits",
  description:
    "Talking-heads, trend remixes and podcast clips, all cut vertical for Reels and TikTok.",
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
