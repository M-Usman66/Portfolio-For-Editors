import { PortfolioVideo } from "@/types";


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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787034220/Air_on_mars.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787205857/BYD.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787035299/DEMO_5-6-25.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787206749/Self_Sabotage.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787207145/Top_10_Uni.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787207540/USA_VS_CHINA.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787142322/Video_Sample_CASHcow.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787128969/2.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787035229/Clothing.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787128940/5.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787035215/Hydrating_Facewash_N.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787142192/tyfit_videoooo1.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787128899/BEN_12_13_hook-1.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787206225/Cake.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787141296/Knee_Rep.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787128910/Ai_Video.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787141851/RealEstate.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787141883/Food_V.mp4",
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
    videoSrc: "https://res.cloudinary.com/cethnm5g/video/upload/v1787129082/BIK.mp4",
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
