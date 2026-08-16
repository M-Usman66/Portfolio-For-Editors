"use client";

import Link from "next/link";
import { useSound } from "@/hooks/useSound";

export default function Footer() {
  const { play } = useSound();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 px-4 pb-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-px w-full bg-white/10">
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold shadow-glow-gold" />
        </div>

        <div className="flex flex-col items-start justify-between gap-8 py-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-xl text-bone">
              Turning raw footages into stories that stand out.
            </p>
            <p className="mt-2 max-w-xs text-sm text-ash">
              Available for long-form, social and e-commerce edits.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:usmandoc540@gmail.com"
              data-cursor="EMAIL"
              onClick={() => play("click")}
              className="text-ash transition-colors hover:text-gold"
            >
              usmandoc540@gmail.com
            </a>
            <a
              href="https://wa.me/923194464254"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CHAT"
              onClick={() => play("click")}
              className="text-ash transition-colors hover:text-gold"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              data-cursor="GO"
              onClick={() => play("click")}
              className="text-ash transition-colors hover:text-gold"
            >
              Contact page
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-ash sm:flex-row">
          <span className="timecode">© {year} The Vault Editor — All rights reserved</span>
          <span className="timecode">Professional Video Editing · Rendered with care</span>
        </div>
      </div>
    </footer>
  );
}
