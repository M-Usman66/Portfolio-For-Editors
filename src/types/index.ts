export type PortfolioCategory =
  | "long-form"
  | "short-form-ecommerce"
  | "short-form-social";

export type AspectRatio = "16:9" | "9:16" | "1:1";

export interface PortfolioVideo {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string;
  videoSrc: string;
  aspect: AspectRatio;
  client?: string;
  year?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  billingNote: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}
