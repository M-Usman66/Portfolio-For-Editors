import type { Metadata } from "next";
import PortfolioSelection from "./PortfolioSelection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse long-form brand films and documentaries, or fast-cut short-form social and e-commerce edits.",
};

export default function PortfolioPage() {
  return <PortfolioSelection />;
}
