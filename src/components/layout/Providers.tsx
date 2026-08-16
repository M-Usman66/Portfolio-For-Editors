"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

export default function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  const [loading, setLoading] = useState(true);
  const [fineCursor, setFineCursor] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const isFine = mq.matches;
    setFineCursor(isFine);
    if (isFine) document.body.classList.add("has-custom-cursor");
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    // Loader stays up just long enough to feel intentional, not long enough to annoy.
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      {fineCursor && <Cursor />}
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
