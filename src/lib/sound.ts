"use client";

/**
 * Tiny UI sound engine. Every "sfx" in this project is synthesized in the
 * browser with the Web Audio API rather than loaded from audio files, so
 * there is nothing to source, license, or ship as an asset. Swap this out
 * for real sample playback later if you want a specific sonic identity —
 * the call sites (playClick, playHover, ...) won't need to change.
 */

type Sfx = "click" | "hover" | "open" | "close" | "success";

let ctx: AudioContext | null = null;
let muted = false;

if (typeof window !== "undefined") {
  muted = window.localStorage.getItem("sfx-muted") === "true";
}

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
  }
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

function tone(
  freqStart: number,
  freqEnd: number,
  duration: number,
  gainPeak: number,
  type: OscillatorType = "sine"
) {
  const audioCtx = getContext();
  if (!audioCtx || muted) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    Math.max(freqEnd, 1),
    audioCtx.currentTime + duration
  );

  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    gainPeak,
    audioCtx.currentTime + duration * 0.15
  );
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audioCtx.currentTime + duration
  );

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration + 0.02);
}

export function playSfx(kind: Sfx) {
  switch (kind) {
    case "hover":
      tone(600, 900, 0.06, 0.03, "sine");
      break;
    case "click":
      tone(320, 180, 0.09, 0.06, "square");
      break;
    case "open":
      tone(220, 660, 0.22, 0.05, "sine");
      break;
    case "close":
      tone(660, 220, 0.18, 0.05, "sine");
      break;
    case "success":
      tone(440, 880, 0.14, 0.05, "sine");
      setTimeout(() => tone(660, 1320, 0.18, 0.05, "sine"), 90);
      break;
  }
}

export function isMuted(): boolean {
  return muted;
}

export function toggleMuted(): boolean {
  muted = !muted;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("sfx-muted", String(muted));
  }
  return muted;
}
