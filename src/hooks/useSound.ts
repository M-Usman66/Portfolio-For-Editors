"use client";

import { useCallback, useState } from "react";
import { isMuted, playSfx, toggleMuted } from "@/lib/sound";

export function useSound() {
  const [muted, setMuted] = useState<boolean>(() =>
    typeof window === "undefined" ? false : isMuted()
  );

  const play = useCallback((kind: Parameters<typeof playSfx>[0]) => {
    playSfx(kind);
  }, []);

  const toggle = useCallback(() => {
    setMuted(toggleMuted());
  }, []);

  return { play, muted, toggle };
}
