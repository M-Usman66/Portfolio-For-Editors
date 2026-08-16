"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn, toTimecode } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { play, muted, toggle } = useSound();
  const [open, setOpen] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      setElapsed((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-inner-line">
        <Link
          href="/"
          data-cursor="HOME"
          onClick={() => play("click")}
          className="font-display text-lg tracking-tightest text-bone"
        >
          THE VAULT<span className="text-gold">.</span>EDITOR
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="GO"
                  onClick={() => play("click")}
                  onMouseEnter={() => play("hover")}
                  className={cn(
                    "relative font-body text-sm text-ash transition-colors hover:text-bone",
                    active && "text-bone"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <span className="timecode hidden text-[11px] text-ash sm:inline">
            {toTimecode(elapsed, 24)}
          </span>
          <button
            aria-label={muted ? "Unmute interface sound" : "Mute interface sound"}
            data-cursor={muted ? "UNMUTE" : "MUTE"}
            onClick={() => {
              toggle();
              play("click");
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ash transition-colors hover:border-gold/50 hover:text-gold"
          >
            {muted ? <IconMuted /> : <IconSound />}
          </button>

          <button
            aria-label="Toggle menu"
            data-cursor="MENU"
            onClick={() => {
              setOpen((v) => !v);
              play("click");
            }}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
              className="h-px w-5 bg-bone"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="h-px w-5 bg-bone"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
              className="h-px w-5 bg-bone"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col overflow-hidden rounded-2xl md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/5 last:border-none">
                <Link
                  href={link.href}
                  onClick={() => play("click")}
                  className="block px-5 py-4 font-body text-sm text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconSound() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 9v6h4l5 5V4L8 9H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.5a5 5 0 010 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconMuted() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 9v6h4l5 5V4L8 9H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 9l5 6M21 9l-5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
