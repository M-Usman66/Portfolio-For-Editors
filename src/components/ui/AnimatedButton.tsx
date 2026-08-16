"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  cursorLabel?: string;
  type?: "button" | "submit";
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  cursorLabel = "CLICK",
  type = "button",
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const { play } = useSound();

  function fireRipple(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();

    setRipples((r) => [
      ...r,
      {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);

    setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 650);

    play("click");
    onClick?.();
  }

  const classes = cn(
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-body text-sm font-medium transition-all duration-300",

    // Primary button
    variant === "primary" &&
      "border border-gold bg-gold text-void shadow-glow-gold hover:bg-transparent hover:text-bone hover:border-gold hover:shadow-[0_0_60px_-6px_rgba(212,168,87,0.65)] hover:-translate-y-0.5",

    // Ghost button
    variant === "ghost" &&
      "border border-white/15 text-bone hover:border-gold/60 hover:text-gold hover:-translate-y-0.5",

    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      <motion.span
        className="relative z-10 inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
      >
        →
      </motion.span>

      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{
            width: 0,
            height: 0,
            opacity: 0.5,
          }}
          animate={{
            width: 260,
            height: 260,
            opacity: 0,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}
    </>
  );

  // Continuous floating animation only for primary buttons
  const floatingAnimation =
    variant === "primary"
      ? {
          y: [-5, 5, -5,],
        }
      : undefined;

  const floatingTransition =
    variant === "primary"
      ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }
      : undefined;

  // Link button
  if (href) {
    return (
      <motion.div
        animate={floatingAnimation}
        transition={floatingTransition}
        className="inline-block"
      >
        <Link
          href={href}
          data-cursor={cursorLabel}
          onClick={fireRipple}
          onMouseEnter={() => play("hover")}
          className={classes}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  // Normal button
  return (
    <motion.div
      animate={floatingAnimation}
      transition={floatingTransition}
      className="inline-block"
    >
      <button
        type={type}
        data-cursor={cursorLabel}
        onClick={fireRipple}
        onMouseEnter={() => play("hover")}
        className={classes}
      >
        {content}
      </button>
    </motion.div>
  );
}