"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [label, setLabel] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    function move(e: MouseEvent) {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      setHidden(false);

      const target = e.target as HTMLElement;
      const interactive = target.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (interactive) {
        setExpanded(true);
        setLabel(interactive.getAttribute("data-cursor") ?? "VIEW");
      } else {
        setExpanded(false);
        setLabel(null);
      }
    }
    function leave() {
      setHidden(true);
    }

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center"
      style={{ x: springX, y: springY }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-gold/70 bg-gold/5"
        animate={{
          width: expanded ? 72 : 32,
          height: expanded ? 72 : 32,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {expanded && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="timecode text-[9px] uppercase tracking-widest2 text-gold-bright"
          >
            {label}
          </motion.span>
        )}
        {!expanded && (
          <span className="h-1 w-1 rounded-full bg-gold-bright" />
        )}
      </motion.div>
    </motion.div>
  );
}
