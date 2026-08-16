import { PortfolioVideo } from "@/types";

/**
 * All portfolio content lives here. Swap `videoSrc` and `thumbnail`
 * with your own files (in /public/videos and /public/images/thumbs,
 * or hosted URLs) and nothing else in the app needs to change.
 *
 * The two placeholder clips below are freely-licensed sample videos
 * so the site works out of the box before you add real work.
 */

// Freely-usable Google sample clips, used only so the grids autoplay
// something on first run. Replace with your own work before shipping —
// see the README for the "Adding your real videos" section.
const SAMPLE_LANDSCAPE =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const SAMPLE_PORTRAIT =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

export const longFormVideos: PortfolioVideo[] = [
  {
    id: "lf-01",
    title: "AIR ON MARS",
    category: "long-form",
    description:
      "Discover what Mars' thin atmosphere is made of, why humans can't breathe it, and how terraforming could change the future.",
    thumbnail: "/images/Air on mars thumbnail.png",
    videoSrc: "/videos/Air on mars.mp4",
    aspect: "16:9",
    client: "LAC",
    year: "2025",
  },
  {
    id: "lf-02",
    title: "China's BYD GigaFactory",
    category: "long-form",
    description:
      "A look inside BYD’s industrial giant: how vertical integration and mega-factory automation power China’s leading electric vehicle manufacturer.",
    thumbnail: "/images/BYD.png",
    videoSrc: "/videos/BYD FINAL,.mp4",
    aspect: "16:9",
    client: "CFF",
    year: "2025",
  },
  {
    id: "lf-03",
    title: "Ridley Scott Disapproval to Actors",
    category: "long-form",
    description:
      "Explore Ridley Scott’s direct, no-nonsense directing style, famous set clashes, and how his high standards shape iconic movie performances.",
    thumbnail: "/images/FIlm.png",
    videoSrc: "/videos/DEMO  5-6-25.mp4",
    aspect: "16:9",
    client: "LAC",
    year: "2024",
  },
  {
    id: "lf-04",
    title: "Self Sabotage",
    category: "long-form",
    description:
      "Uncover why we unconsciously derail our own success, the psychological triggers behind self-sabotage, and simple habits to overcome it.",
    thumbnail: "/images/Self Sabotage.png",
    videoSrc: "/videos/Self Sabotage.mp4",
    aspect: "16:9",
    client: "CFF",
    year: "2024",
  },
  {
    id: "lf-05",
    title: "Top 10 Universities in Switzerland",
    category: "long-form",
    description:
      "Discover Switzerland's highest-ranking universities, world-class research centers, tuition fees, and why international students choose Swiss higher education.",
    thumbnail: "/images/Top 10.jpg",
    videoSrc: "/videos/TOP 10 UNIERSities.mp4",
    aspect: "16:9",
    client: "CFY",
    year: "2024",
  },
  {
    id: "lf-06",
    title: "Quantum Tech USA vs China",
    category: "long-form",
    description:
      "Explore the high-stakes technological race between the US and China for quantum supremacy, critical defense security, and next-generation computing dominance.",
    thumbnail: "/images/USA VS China.png",
    videoSrc: "/videos/USA VS CHINA.mp4",
    aspect: "16:9",
    client: "LAC",
    year: "2023",
  },
  {
    id: "lf-07",
    title: "FBI Show a Report",
    category: "long-form",
    description:
      "Discover recent FBI crime trend data, threat advisories, national security findings, and intelligence updates.",
    thumbnail: "/images/FBI.png",
    videoSrc: "/videos/Video Sample CASHcow.mp4",
    aspect: "16:9",
    client: "LAC",
    year: "2023",
  },
];

export const ecommerceVideos: PortfolioVideo[] = [
  {
    id: "ec-01",
    title: "Comfort House",
    category: "short-form-ecommerce",
    description: "Your Home Decore And Furniture Partners",
    thumbnail: "/images/thumbs/ec-01.jpg",
    videoSrc: "/videos/2.mp4",
    aspect: "9:16",
    client: "Comfort House",
    year: "2025",
  },
  {
    id: "ec-02",
    title: "Grab Your Fav Dress",
    category: "short-form-ecommerce",
    description: "Clothing By Usman Is Providing Discount",
    thumbnail: "/images/thumbs/ec-02.jpg",
    videoSrc: "/videos/Clothing.mp4",
    aspect: "1:1",
    client: "Clothing By Usman",
    year: "2025",
  },
  {
    id: "ec-03",
    title: "Comfort House Hook",
    category: "short-form-ecommerce",
    description: "Vertical hook edit for Reels and TikTok ads.",
    thumbnail: "/images/thumbs/ec-03.jpg",
    videoSrc: "/videos/5.mp4",
    aspect: "9:16",
    client: "Comfort House",
    year: "2025",
  },
  {
    id: "ec-04",
    title: "Nafia's Hydrating Facewash",
    category: "short-form-ecommerce",
    description: "Square product demo edit for the ad library.",
    thumbnail: "/images/thumbs/ec-04.jpg",
    videoSrc: "/videos/Hydrating Facewash N.mp4",
    aspect: "1:1",
    client: "Nafia",
    year: "2024",
  },
  {
    id: "ec-05",
    title: "Sale By Tyfit",
    category: "short-form-ecommerce",
    description: "Vertical lifestyle edit for Reels and TikTok ads.",
    thumbnail: "/images/thumbs/ec-05.jpg",
    videoSrc: "/videos/tyfit videoooo1.mp4",
    aspect: "9:16",
    client: "Tyfit",
    year: "2024",
  },
  {
    id: "ec-06",
    title: "VapeCo Hook Reel Edit",
    category: "short-form-ecommerce",
    description: "Hook edit for Reels and TikTok.",
    thumbnail: "/images/thumbs/ec-06.jpg",
    videoSrc: "/videos/BEN 12=13 hook-1.mp4",
    aspect: "9:16",
    client: "VapeCo",
    year: "2024",
  },
  {
    id: "ec-07",
    title: "H Bakes & Canapes",
    category: "short-form-ecommerce",
    description: "Edit for Bakery for Reels and TikTok ads.",
    thumbnail: "/images/thumbs/ec-07.jpg",
    videoSrc: "/videos/Cake Final.mp4",
    aspect: "9:16",
    client: "H Bakes & Canapes",
    year: "2025",
  },
];

export const socialMediaVideos: PortfolioVideo[] = [
  {
    id: "sm-01",
    title: "Best Tool For Knee Pateints",
    category: "short-form-social",
    description: "The Tool You Need During The Recovery Process Of Knee Surgery.",
    thumbnail: "/images/thumbs/sm-01.jpg",
    videoSrc: "/videos/Knee Rep.mp4",
    aspect: "9:16",
    client: "CFF",
    year: "2026",
  },
  {
    id: "sm-02",
    title: "Tucking Service- Ai Video",
    category: "short-form-social",
    description: "Tucking Service Providers",
    thumbnail: "/images/thumbs/sm-02.jpg",
    videoSrc: "/videos/Ai Video.mp4",
    aspect: "9:16",
    client: "CFR",
    year: "2025",
  },
  {
    id: "sm-03",
    title: "Real Estate's Right Hand",
    category: "short-form-social",
    description: "Real Estate Agency's Right Hand",
    thumbnail: "/images/thumbs/sm-03.jpg",
    videoSrc: "/videos/RealEstate.mp4",
    aspect: "9:16",
    client: "Studio Ledger",
    year: "2024",
  },
  {
    id: "sm-04",
    title: "Hunger Deal-Food Valley",
    category: "short-form-social",
    description: "Video Poster Edit For Fast Food Restaurant",
    thumbnail: "/images/thumbs/sm-04.jpg",
    videoSrc: "/videos/Food V.mp4",
    aspect: "1:1",
    client: "Food Valley",
    year: "2026",
  },
  {
    id: "sm-05",
    title: "BIK-Concepts",
    category: "short-form-social",
    description: "Buffet Restaurant's Concept Video For Reels and TikTok Ads",
    thumbnail: "/images/thumbs/sm-05.jpg",
    videoSrc: "/videos/BIK.mp4",
    aspect: "9:16",
    client: "BIK-Concepts",
    year: "2024",
  },
];

export const allVideos: PortfolioVideo[] = [
  ...longFormVideos,
  ...ecommerceVideos,
  ...socialMediaVideos,
];

export function getVideoById(id: string): PortfolioVideo | undefined {
  return allVideos.find((v) => v.id === id);
}
