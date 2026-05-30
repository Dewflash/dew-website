# dew.codes — Design System

> This document defines the visual design language for dew.codes.
> Read this before building any UI component or page layout.
> Every branch shares the core design system but may use its own accent color and personality.

---

## Core Philosophy

The design should feel like:
- A well-organized engineer's workspace, not a flashy agency portfolio
- Readable and calm, not noisy or overcrowded
- Personal but professional — "this person has taste" not "this is a school project"
- Dashboard-like for data sections, field-note-like for travel, warm-minimal for about

The design should never feel:
- Generic AI-generated portfolio
- Cluttered with unnecessary decoration
- Like a developer who only knows utility classes
- Like it was designed by someone who thinks dark mode means black background everywhere

---

## Color System

### Base Palette (shared across all branches)

Use CSS custom properties. Tailwind config should reference these.

```css
:root {
  /* Backgrounds */
  --bg-base: #0f0f11;          /* Main page background — very dark, not pure black */
  --bg-surface: #17171a;       /* Card, panel background */
  --bg-elevated: #1f1f24;      /* Elevated card, modal, dropdown */
  --bg-subtle: #2a2a30;        /* Subtle section dividers, hover states */

  /* Text */
  --text-primary: #f0f0f2;     /* Main body text */
  --text-secondary: #9898a6;   /* Secondary/muted text */
  --text-tertiary: #5a5a6a;    /* Placeholder, disabled text */

  /* Borders */
  --border-subtle: #2a2a35;    /* Very subtle borders */
  --border-default: #3a3a45;   /* Standard card borders */
  --border-strong: #5a5a6a;    /* Active/focused borders */

  /* Brand */
  --brand-primary: #7c9dfc;    /* Main brand blue — links, primary CTAs */
  --brand-secondary: #a78bfa;  /* Secondary accent — purple tone */
  --brand-glow: rgba(124, 157, 252, 0.15);  /* Subtle glow for cards */

  /* Status */
  --status-success: #4ade80;
  --status-warning: #fbbf24;
  --status-danger: #f87171;
  --status-info: #60a5fa;

  /* Neutral scale */
  --neutral-50: #f8f8f9;
  --neutral-900: #0f0f11;
}
```

### Light Mode Override

```css
[data-theme="light"] {
  --bg-base: #fafafa;
  --bg-surface: #ffffff;
  --bg-elevated: #f3f3f5;
  --bg-subtle: #e8e8ed;
  --text-primary: #0f0f11;
  --text-secondary: #5a5a6a;
  --text-tertiary: #9898a6;
  --border-subtle: #e8e8ed;
  --border-default: #d4d4db;
  --border-strong: #9898a6;
}
```

---

## Branch Accent Colors

Each mini-site has a distinct accent color applied to: hero gradient, active nav pill, featured card border, badge color.

```css
/* Projects */
--accent-projects: #a3e635;      /* Lime green — terminal/build energy */

/* Tools */
--accent-tools: #38bdf8;         /* Sky blue — utility/clean/precision */

/* Travel */
--accent-travel: #fb923c;        /* Orange — warmth, exploration */

/* Finance */
--accent-finance: #4ade80;       /* Green — money, markets, data */

/* Anime */
--accent-anime: #e879f9;         /* Fuchsia — vibrant, expressive */

/* Music */
--accent-music: #f59e0b;         /* Amber — warmth, analog, guitar wood */

/* Singapore */
--accent-singapore: #f43f5e;     /* Rose-red — SG flag energy */

/* Lab */
--accent-lab: #8b5cf6;           /* Violet — experimental, raw */

/* Writing */
--accent-writing: #94a3b8;       /* Slate — calm, editorial */

/* Christian */
--accent-christian: #fde68a;     /* Warm amber/gold — calm, meaningful */
```

---

## Typography

```css
/* Scale */
--font-display: 'Geist', system-ui, sans-serif;   /* Headings */
--font-body: 'Geist', system-ui, sans-serif;       /* Body text */
--font-mono: 'Geist Mono', 'Fira Code', monospace; /* Code, tool inputs */

/* Sizes (mobile-first, scale up with breakpoints) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */

/* Line heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

---

## Spacing

Use an 8px base unit system.

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

---

## Border Radius

```css
--radius-sm: 0.375rem;   /* 6px — small badges, pills */
--radius-md: 0.5rem;     /* 8px — cards, buttons */
--radius-lg: 0.75rem;    /* 12px — large cards, panels */
--radius-xl: 1rem;       /* 16px — hero sections, modals */
--radius-full: 9999px;   /* Pills, avatars */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 20px var(--brand-glow);         /* Hover glow on featured cards */
--shadow-accent: 0 0 20px var(--accent-*-glow);    /* Branch-specific glow */
```

---

## Component Specifications

### MiniSiteHero

Used on every branch landing page. Must feel like a site landing, not a section header.

```
Layout: Full-width. Padding top 96px, bottom 80px.
Background: Subtle gradient using branch accent color at low opacity (5-10%)
            over base background. A faint grid pattern or noise texture is acceptable.

Left column:
  - Small eyebrow tag: branch name in accent color pill
  - Large title: 3xl–5xl depending on length
  - Subtitle: text-secondary, max-width 480px
  - 1-2 CTAs: primary button + ghost button

Right column (optional):
  - Illustration, dashboard preview, tool preview, or decorative
  - On mobile, right column stacks below or disappears

Bottom edge:
  - Optional stat row: "X tools", "X countries", "X projects"
```

### MiniSiteNav

Horizontal scroll nav for branch sub-sections. Sticky on scroll.

```
Height: 48px
Background: bg-surface with border-bottom
Active item: accent color text + bottom border in accent color
Inactive items: text-secondary
Font: text-sm, font-medium
On mobile: horizontal scroll, no wrapping
```

### ContentCard

Universal card for any content type.

```
Background: bg-surface
Border: border-subtle
Border-radius: radius-lg
Padding: space-6
Hover: border-default, shadow-md

Top:
  - Category badge (small, muted) — optional
  - Title: text-lg, font-semibold
  - Description: text-sm, text-secondary, 2 lines max

Bottom:
  - Tags: TagPills (small, muted)
  - Date: text-xs, text-tertiary
  - Arrow or action link
```

### ToolCard

Extends ContentCard with tool-specific fields.

```
Same as ContentCard plus:
  - Tool type badge (Calculator / Generator / Visualizer / Share Card) in accent
  - ShareCardEnabled indicator if applicable
  - Usage count (optional, if tracked)
```

### Breadcrumbs

```
Height: auto, padding-y space-2
Background: transparent
Items: text-sm, text-tertiary
Separator: "/" or "›" in text-tertiary
Current page: text-secondary (not linked)
Home: always first item, links to /
```

### TagPills

```
Background: bg-elevated
Border-radius: radius-full
Padding: space-1 space-3
Font: text-xs, font-medium
Color: text-secondary
Hover: text-primary, border-default
Each pill links to /tags/[tag]
```

### LastUpdatedBadge

```
Inline component. Used next to page titles or below hero.
Format: "Updated [date]" — e.g. "Updated 30 May 2026"
Style: text-xs, text-tertiary, with a small clock icon
```

### SourceBadge

```
Inline component. Shows data origin.
Format: "Source: [Name]" with an optional external link icon
Style: text-xs, text-tertiary
If multiple sources: comma-separated or a popover on hover
```

### DisclaimerBanner

Required on all `/finance/*`, `/projects/diabetes-connect/*`, and `/travel/diving/*` pages.

```
Full-width banner
Background: bg-elevated
Border: border-warning (left border, 3px)
Padding: space-4 space-6
Icon: warning or info icon in status-warning color
Text: text-sm, text-secondary
Variant prop: "financial" | "health" | "diving"

Financial: "This is not financial or investment advice. Information is for research purposes only."
Health: "This is not medical advice. Consult a healthcare professional for medical decisions."
Diving: "This content is not a substitute for formal diving instruction or certification."

Link at end: "Read full disclaimer →" linking to relevant /legal/* page
```

### CommandPalette

Triggered by Cmd+K or search icon click.

```
Overlay: full-screen dark backdrop (50% opacity)
Panel: centered, max-width 560px, bg-elevated, radius-xl, shadow-lg
Search input: top, full-width, text-lg
Results: scrollable list below input
Each result: icon + title + path + category badge
Keyboard navigation: arrow keys + enter
Sections: Recent, Tools, Projects, Writing, Travel, Finance, Anime
```

---

## Page Layout Grid

```
Max content width: 1200px
Side padding: space-6 (mobile) → space-10 (tablet) → space-16 (desktop)

Standard page padding:
  Top: space-16 (below nav)
  Bottom: space-24

Grid columns:
  Single column: mobile
  2-col: tablet (768px+)
  3-col: desktop (1024px+)
  4-col: wide (1280px+)
```

---

## Branch Visual Personalities

These are not rigid rules — they are a feel guide.

### Projects
- Terminal-inspired accents: monospace font for code snippets, subtle scanline textures
- Status badges with bold colors: green = launched, yellow = building, red = abandoned
- GitHub contribution heatmap as a visual element
- Case study pages feel like a proper product story, not a bullet list

### Tools
- Clean and functional. No decoration that doesn't serve the tool.
- Tool inputs: large, clearly labeled, with help text
- Tool outputs: highlighted result area, clear typography
- Share card: visually distinct, branded, screenshot-ready

### Travel
- Photos are first-class. Large, edge-to-edge gallery sections.
- Map tiles where possible
- Budget tables: clean, left-aligned, currency-formatted
- "Mistakes" section: slightly warmer background, personal tone

### Finance
- Data-dense but readable. No clutter.
- Charts: muted colors, no rainbow. Green for positive, red for negative, neutral grays.
- Disclaimer always visible but not alarmist
- Glossary: clean definition list format

### Anime
- More color than other sections. Seasonal palette.
- Rating displays: custom stars or score bars
- Tier list: drag-and-drop or static, clearly labeled tiers (S/A/B/C/D)
- Recommendation picker: card-flip or quiz-style

### Music
- Warm and analog. Amber/wood tones as accents.
- Chord diagrams: clean SVG fretboard
- Practice log: calendar heatmap style
- Playlist embeds: prefer YouTube or Spotify embeds with fallback

### Singapore
- Practical above all. Dense information, well organized.
- Maps: embedded, zoomable
- Event listings: calendar or card format with date prominent
- Student tools: clean, no frills

### Lab
- Intentionally rough. Can show in-progress, broken, experimental states.
- No hero required. Can be a simple list or grid.
- "Status: experiment" badge on everything

---

## Animation Guidelines

Use animation sparingly. When used:

```
Transitions: 150ms ease-out for hover states
Page transitions: fade-in only, 200ms
Loading states: skeleton screens, not spinners where possible
Scroll animations: subtle fade-up on content cards (transform + opacity)
  delay: stagger by 50ms per card
  duration: 300ms
  threshold: 20% of element visible

Never animate:
  - Background colors abruptly
  - Text size or font-weight
  - Border-radius on hover
  - Anything that could cause layout shift
```

---

## Accessibility

- Color contrast: WCAG AA minimum (4.5:1 for normal text, 3:1 for large)
- All interactive elements must have visible focus states
- All images must have alt text
- All form inputs must have associated labels
- Keyboard navigation must work for: nav, command palette, tool inputs, tool results
- DisclaimerBanner must be readable by screen readers (role="note" or role="alert" as appropriate)
- Do not rely on color alone to convey status — always pair with icon or text

---

## Do Not

- Do not use pure black (#000000) as a background
- Do not use pure white (#ffffff) as a foreground on dark backgrounds — it's too harsh
- Do not use more than 2 fonts (display/body + mono)
- Do not use gradient text unless it's a one-word display heading
- Do not use glassmorphism as a primary card style — it's dated
- Do not animate every element on scroll — it becomes noise
- Do not use stock illustrations — use simple SVG icons, real photos, or no illustration
- Do not over-round corners — cards at radius-lg is enough; more looks childish
