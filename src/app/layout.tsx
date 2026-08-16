import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theVaultEditor.studio"),
  title: {
    default: "The Vault Editor — Professional Video Editor Portfolio",
    template: "%s — The Vault Editor",
  },
  description:
    "Cinematic video editing for brand films, documentaries, e-commerce ads and social content. View the portfolio and book a project.",
  keywords: [
    "video editor",
    "video editing portfolio",
    "short form video editor",
    "long form video editor",
    "freelance video editor",
  ],
  openGraph: {
    title: "The Vault Editor — Professional Video Editor Portfolio",
    description:
      "Cinematic video editing for brand films, documentaries, e-commerce ads and social content.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vault Editor — Professional Video Editor Portfolio",
    description:
      "Cinematic video editing for brand films, documentaries, e-commerce ads and social content.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-void font-body text-bone antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
