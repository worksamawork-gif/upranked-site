# Remotion Video Pipeline — upranked.io

## Status: Planning Phase

The `remotion-best-practices` skill is installed. No Remotion project exists yet.

---

## Strategic Use Cases

### 1. SEO Explainer Shorts (LinkedIn / Instagram Reels)
- 30-60 second animated explainers on GCC SEO topics
- Data visualisations (SERP position changes, traffic graphs)
- APEX Framework™ step-by-step animations
- Format: 1080x1920 (vertical) for Reels / TikTok, 1920x1080 for LinkedIn

### 2. Market Intelligence Videos
- "SEO Landscape: Dubai 2026" — animated stats, market data
- Competitor visibility comparisons
- Keyword opportunity maps

### 3. Client Report Animations
- Branded progress reports rendered as short videos
- Before/after ranking animations
- Custom per-client with Remotion props

### 4. Hero / Brand Videos
- Animated version of the APEX Framework graphic
- Could replace static SVG hero on key pages (video as hero background)

---

## Planned Remotion Project Structure

```
remotion/
├── src/
│   ├── compositions/
│   │   ├── ApexFramework.tsx      — 4-phase animation
│   │   ├── SerpRankings.tsx       — ranking position animation
│   │   ├── MarketIntel.tsx        — market stats video
│   │   └── ClientReport.tsx      — per-client report template
│   ├── components/
│   │   ├── GoldAccentBar.tsx      — brand accent animation
│   │   ├── CountUp.tsx            — number counter animation
│   │   └── BrandLogo.tsx          — animated upranked.io logo
│   └── Root.tsx                   — composition registry
├── public/
│   └── [brand assets, fonts]
└── package.json
```

---

## Brand Constraints for Video

- Background: Navy #0A0F1E (matches site)
- Accent: Gold #C9A84C (for highlights, bars, progress indicators)
- Font: Inter (Latin), Cairo (Arabic text)
- No white backgrounds
- Easing: ease-out-quart (no bounce, no elastic)
- Brand voice applies to any text: specific, GCC-market-named, no generic labels

---

## To Initialize Remotion

```bash
cd upranked
npx create-video@latest remotion --template blank
cd remotion
npm install
```

Or integrate directly into the monorepo with a separate Vite workspace.

---

## Output Formats

| Format | Dimensions | Use |
|--------|-----------|-----|
| Instagram Reel | 1080x1920 | Social content |
| LinkedIn Video | 1920x1080 | LinkedIn posts |
| YouTube Short | 1080x1920 | YouTube |
| Twitter Video | 1280x720 | X / Twitter |
| Web embed | 800x450 | Blog post embeds |

---

## Skill Reference

The `remotion-best-practices` skill is in `.agents/skills/remotion-best-practices/`.
Key rule files cover: compositions, timing, sequencing, text-animations, transitions, google-fonts, audio, voiceover, tailwind, ffmpeg.
