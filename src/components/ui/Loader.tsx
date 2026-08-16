"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toTimecode } from "@/lib/utils";

export default function Loader({ show }: { show: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;
    const start = performance.now();
    const duration = 1700;
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(1, elapsed / duration);
      // ease-out so it feels like it's "loading" rather than linear
      setProgress(1 - Math.pow(1 - pct, 3));
      if (pct < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="font-display text-2xl tracking-tightest text-bone">
              THE VAULT<span className="text-gold">.</span>EDITOR
            </span>

            <div className="flex items-center gap-3 timecode text-xs text-ash">
              <span className="text-gold">{toTimecode(progress * 2, 24)}</span>
              <span className="opacity-40">/</span>
              <span>00:00:02:00</span>
            </div>

            <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-surface2">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold shadow-glow-gold"
                style={{ width: `${progress * 100}%` }}
              />
              <motion.div
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold-bright shadow-glow-gold"
                style={{ left: `${progress * 100}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
