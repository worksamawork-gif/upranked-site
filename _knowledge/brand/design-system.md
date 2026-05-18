# Design System — upranked.io

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | #0A0F1E | Primary background (all pages) |
| `dark-gray` | #0F1629 | Alternate section background |
| `accent` | #C9A84C | Gold — CTA buttons, borders, icons, highlights |
| `yellow-500` | #EAB308 | Hover state for accent buttons |
| `border` | rgba(201,168,76,0.15) | Subtle gold border on cards |
| `text-primary` | #FFFFFF | Headlines, body text |
| `text-secondary` | rgba(255,255,255,~0.6) | Muted text, labels |

**Color strategy**: Restrained. Navy canvas + one gold accent at ≤10% surface area. Gold signals quality, not decoration. Sections alternate navy/dark-gray for rhythm without introducing new colors.

---

## Typography

### Font Stack
- **Inter** — Latin body text, UI labels, numbers (weights: 400, 500, 600, 700, 800)
- **Cairo** — Arabic content, bilingual sections (weights: 400, 500, 600, 700, 800)

### Scale (Tailwind defaults + custom)
| Use | Class | Approx size |
|-----|-------|------------|
| Display / H1 | text-5xl / text-6xl | 48–60px |
| Section H2 | text-3xl / text-4xl | 30–36px |
| Card H3 | text-xl / text-2xl | 20–24px |
| Body | text-base / text-sm | 14–16px |
| Label / Tag | text-xs uppercase tracking-widest | 12px |

### Type Conventions
- Accent labels: `text-xs font-semibold uppercase tracking-widest text-accent`
- Section headings: `font-bold text-white`
- Body: `text-text-secondary leading-relaxed`
- Max body line length: ~65–75ch (enforced by `max-w-3xl` or `max-w-4xl` containers)

---

## Spacing System

Tailwind default scale. Key patterns:
- Section padding: `section-padding` custom class (py-20 px-4 md:px-6 lg:px-8)
- Container: `container-premium` (max-w-7xl mx-auto px-4 md:px-6 lg:px-8)
- Card padding: p-6 (compact) or p-8 (featured)
- Gap between cards: gap-6 or gap-8
- Hero top padding: pt-32 (clears fixed nav)

---

## Component Patterns

### `.card-premium`
Dark navy card with gold border:
```css
bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors
```

### `.btn-primary`
Gold filled button:
```css
inline-block px-6 py-3 bg-accent text-black rounded-lg font-semibold
hover:bg-yellow-500 transition-all duration-300
```

### `.btn-outline`
Gold outline button:
```css
px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold
hover:bg-accent hover:text-black transition-all duration-300
```

### `.input-premium`
Dark navy input with border:
```css
w-full bg-navy border border-border rounded-lg px-4 py-3 text-white
placeholder-text-secondary focus:border-accent focus:outline-none transition-colors
```

### Accent Label (reused pattern)
```jsx
<span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">
  Category Label
</span>
```

### Section with alternate background
Sections alternate between `bg-navy` and `bg-dark-gray` for rhythm.

---

## Animation Patterns (Framer Motion)

### Fade-in on mount (hero)
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Staggered fade-in on scroll (cards)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: i * 0.08 }}
viewport={{ once: true }}
```

### Slide-in from right (hero image)
```jsx
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
```

**Rule**: All animations use ease-out curves. No bounce, no elastic. `viewport={{ once: true }}` on all scroll-triggered animations.

---

## Hero Section Pattern

All service/SEO pages use the same hero structure:
```
2-column grid (lg:grid-cols-2)
Left: Badge label + H1 + description + contact meta
Right: 800x600 SVG illustration (max-w-[800px], w-full h-auto)
```

All 24 hero SVGs: `client/public/heroes/01-24-name.svg`
- Self-contained navy background (#0A0F1E or #050A18)
- 800×600 viewBox
- Transparent-safe (navy matches page background)

---

## Layout Conventions

- No full-width cards without max-width container
- Grid cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Feature highlight rows: `grid lg:grid-cols-2` with alternating content/visual
- Sticky nav height: ~64px → pages use `pt-32` for hero clearance
- Max content width: `max-w-7xl` (page), `max-w-4xl` (article), `max-w-3xl` (focused)

---

## Icon Library

**lucide-react** — consistent stroke-width icons.
Common: CheckCircle, MapPin, Phone, Mail, ArrowRight, ChevronDown
Social: LinkedinIcon, TwitterIcon, Instagram, Facebook

All icons in accent sections: `className="w-4 h-4 text-accent"`
Feature icons: `className="w-6 h-6 text-accent mb-3"`
