# Cinematic Editor Portfolio

A premium, fully-animated portfolio site for a professional video editor, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding your real videos

All portfolio content lives in one place: `src/data/portfolio.ts`. Nothing else needs to change when you swap videos.

Drop your video files into `public/videos/` (or point `videoSrc` at a hosted URL / CDN — recommended for real deployments, since Vercel and most hosts are not built for serving large video files directly) and update the corresponding entry:

```ts
{
  id: "lf-01",
  title: "Brand Film — Nordic Coffee Co.",
  category: "long-form",
  description: "A 3-minute brand story cut for a Q4 campaign launch.",
  thumbnail: "/images/thumbs/lf-01.jpg",
  videoSrc: "/videos/lf-01.mp4",
  aspect: "16:9",
}
```

Thumbnails go in `public/images/thumbs/`.

## Pricing & copy

Pricing tiers live in `src/data/pricing.ts`. Page copy (headlines, about text) lives directly in each page file under `src/app/`.

## Project structure

```
src/
  app/            route segments (App Router) — one folder per page
  components/
    layout/       navbar, footer, page transition wrapper
    ui/           cursor, loader, buttons, section headings, particle field
    video/        video card, video grid, fullscreen modal
    pricing/      pricing card
    contact/      contact form
  data/           portfolio.ts, pricing.ts — all editable content
  hooks/          useLenis, useSound, useIsVisible
  lib/            sound synthesis, class-merge utility
  types/          shared TypeScript types
```

## Notes

- UI sound effects are synthesized in the browser via the Web Audio API (`src/lib/sound.ts`) — no audio asset files required, and users can mute them from the navbar.
- Placeholder video sources point to a couple of freely-licensed sample clips so the site is fully functional out of the box; swap them out in `src/data/portfolio.ts`.
- Respects `prefers-reduced-motion` throughout.
