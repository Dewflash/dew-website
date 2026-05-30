# dew.codes — Full Project File Tree

> This is the complete intended file tree for the dew.codes project.
> Items marked `[MVP]` are in scope for the initial launch.
> Items marked `[LATER]` are deferred — do not scaffold these yet.
> Items marked `[BRANCH]` are triggered separately as sub-projects.

---

## Documentation (this repo)

```txt
docs/
├── og.md                          [MVP] Original architecture document. Source of truth for intent.
├── README.md                      [MVP] Copilot build kickstart instructions
├── rationale.md                   [MVP] Plain English explanation of why things are built this way
├── implementation-plan.md         [MVP] Phased build plan
├── ideation.md                    [MVP] Long-term vision and feature ideas
├── content-model.md               [MVP] Typed content model definitions
├── design-system.md               [MVP] Design tokens, branch identities, components
└── file-tree.md                   [MVP] This file
```

---

## App Directory (Next.js App Router)

```txt
app/
│
├── layout.tsx                     [MVP] Global layout — nav, footer, command palette
├── page.tsx                       [MVP] Homepage — command center
├── sitemap.ts                     [MVP] Dynamic sitemap generator
├── robots.ts                      [MVP] Robots.txt handler
├── opengraph-image.tsx            [MVP] Default OG image generator
├── not-found.tsx                  [MVP] Custom 404 page
├── error.tsx                      [MVP] Global error boundary
│
├── about/
│   ├── page.tsx                   [MVP] Main identity page
│   ├── now/
│   │   └── page.tsx               [MVP] Living "now" page
│   ├── timeline/
│   │   └── page.tsx               [LATER] Interactive life/build timeline
│   ├── uses/
│   │   └── page.tsx               [LATER] Gear and software setup
│   ├── stack/
│   │   └── page.tsx               [LATER] Tech stack detail
│   └── values/
│       └── page.tsx               [LATER] Values statement
│
├── projects/                      [BRANCH] Triggered separately
│   ├── page.tsx                   Mini-site landing
│   ├── liveling/
│   │   ├── page.tsx               Overview
│   │   ├── demo/page.tsx
│   │   ├── focus-timer/page.tsx
│   │   ├── rpg-system/page.tsx
│   │   ├── devlog/page.tsx
│   │   ├── changelog/page.tsx
│   │   ├── roadmap/page.tsx
│   │   ├── design-decisions/page.tsx
│   │   └── architecture/page.tsx
│   ├── diabetes-connect/
│   │   ├── page.tsx               Overview
│   │   ├── problem/page.tsx
│   │   ├── ux-research/page.tsx
│   │   ├── screenshots/page.tsx
│   │   ├── architecture/page.tsx
│   │   └── learnings/page.tsx
│   ├── nuschedule/
│   │   ├── page.tsx               Overview
│   │   ├── demo/page.tsx
│   │   ├── module-planner/page.tsx
│   │   ├── architecture/page.tsx
│   │   ├── changelog/page.tsx
│   │   └── roadmap/page.tsx
│   ├── experiments/
│   │   ├── page.tsx
│   │   ├── tiny-tools/page.tsx
│   │   ├── weekend-builds/page.tsx
│   │   ├── ai-experiments/page.tsx
│   │   ├── abandoned-projects/page.tsx
│   │   └── failed-experiments/page.tsx
│   └── open-source/
│       ├── page.tsx
│       ├── contributions/page.tsx
│       ├── github-dashboard/page.tsx
│       └── issue-board/page.tsx
│
├── tools/                         [BRANCH] Triggered separately
│   ├── page.tsx                   Mini-site landing
│   ├── calculators/
│   │   ├── page.tsx
│   │   ├── nus-cap-planner/page.tsx       [MVP]
│   │   ├── gpa-calculator/page.tsx
│   │   ├── module-workload-estimator/page.tsx
│   │   ├── dca-calculator/page.tsx
│   │   ├── dividend-calculator/page.tsx
│   │   ├── risk-reward-calculator/page.tsx
│   │   ├── trip-budget-calculator/page.tsx  [MVP]
│   │   ├── habit-streak-calculator/page.tsx
│   │   └── music-practice-timer/page.tsx
│   ├── generators/
│   │   ├── page.tsx
│   │   ├── itinerary-generator/page.tsx
│   │   ├── packing-list-generator/page.tsx
│   │   ├── anime-recommendation-picker/page.tsx  [MVP]
│   │   ├── anime-watch-order-generator/page.tsx
│   │   ├── playlist-generator/page.tsx
│   │   ├── project-idea-generator/page.tsx
│   │   └── christian-app-idea-generator/page.tsx
│   ├── visualizers/
│   │   ├── page.tsx
│   │   ├── contribution-heatmap/page.tsx
│   │   ├── market-heatmap/page.tsx
│   │   ├── travel-map/page.tsx
│   │   ├── anime-season-board/page.tsx
│   │   ├── dive-depth-chart/page.tsx
│   │   └── learning-roadmap/page.tsx
│   └── share-cards/
│       ├── page.tsx
│       ├── anime-taste-card/page.tsx
│       ├── travel-style-card/page.tsx
│       ├── finance-style-card/page.tsx
│       ├── guitar-practice-card/page.tsx
│       └── builder-style-card/page.tsx
│
├── singapore/                     [BRANCH] Triggered separately
│   ├── page.tsx                   Mini-site landing
│   ├── student-tools/
│   │   ├── page.tsx
│   │   ├── nus-module-planner/page.tsx
│   │   ├── nus-cap-planner/page.tsx       [MVP]
│   │   ├── study-spot-map/page.tsx
│   │   ├── internship-tracker/page.tsx
│   │   ├── scholarship-deadlines/page.tsx
│   │   └── budget-planner/page.tsx
│   ├── guides/
│   │   ├── page.tsx
│   │   ├── tech-events/page.tsx
│   │   ├── cafe-workspots/page.tsx
│   │   ├── budget-food/page.tsx
│   │   ├── weekend-ideas/page.tsx
│   │   ├── productivity-for-students/page.tsx
│   │   └── coding-communities/page.tsx
│   └── christian/
│       ├── page.tsx
│       ├── app-devlog/page.tsx
│       ├── prayer-tech/page.tsx
│       ├── church-tools/page.tsx
│       ├── faith-and-productivity/page.tsx
│       └── christian-student-resources/page.tsx
│
├── writing/                       [BRANCH] Triggered separately
│   ├── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── essays/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── notes/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── devlogs/
│   │   ├── page.tsx               [MVP]
│   │   └── [slug]/page.tsx        [MVP]
│   ├── market-notes/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── travelogues/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── book-notes/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── learning-logs/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── newsletter/
│       ├── page.tsx
│       ├── archive/page.tsx
│       └── dew-dispatch/
│           └── [issue]/page.tsx
│
├── collections/                   [BRANCH] Triggered separately
│   ├── page.tsx
│   ├── singapore-student-starter-pack/page.tsx
│   ├── japan-first-trip-kit/page.tsx
│   ├── anime-beginner-pack/page.tsx
│   ├── mandopop-guitar-pack/page.tsx
│   ├── finance-beginner-pack/page.tsx
│   ├── builder-toolbox/page.tsx
│   ├── christian-productivity-pack/page.tsx
│   └── kevin-favourites/page.tsx
│
├── travel/                        [BRANCH] Triggered separately
│   ├── page.tsx                   Mini-site landing with map
│   ├── map/page.tsx
│   ├── countries/
│   │   ├── page.tsx
│   │   ├── japan/
│   │   │   ├── page.tsx               Overview    [MVP]
│   │   │   ├── first-timer-guide/page.tsx         [MVP]
│   │   │   ├── 7-day-itinerary/page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── tips/page.tsx
│   │   │   ├── food/page.tsx
│   │   │   ├── budget/page.tsx        [MVP]
│   │   │   ├── transport/page.tsx
│   │   │   ├── mistakes/page.tsx
│   │   │   ├── gallery/page.tsx       [MVP]
│   │   │   ├── flora-and-fauna/page.tsx
│   │   │   ├── packing-list/page.tsx
│   │   │   └── anime-pilgrimage/page.tsx
│   │   ├── italy/
│   │   │   ├── page.tsx
│   │   │   ├── itinerary/page.tsx
│   │   │   ├── food/page.tsx
│   │   │   ├── budget/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   └── mistakes/page.tsx
│   │   └── china/
│   │       ├── page.tsx
│   │       ├── itinerary/page.tsx
│   │       ├── food/page.tsx
│   │       ├── budget/page.tsx
│   │       ├── transport/page.tsx
│   │       └── gallery/page.tsx
│   ├── tools/
│   │   ├── page.tsx
│   │   ├── trip-cost-calculator/page.tsx
│   │   ├── packing-list-generator/page.tsx
│   │   ├── itinerary-builder/page.tsx
│   │   ├── exchange-rate-cheatsheet/page.tsx
│   │   ├── jetlag-planner/page.tsx
│   │   └── rail-pass-cost-checker/page.tsx
│   ├── diving/
│   │   ├── page.tsx               Overview
│   │   ├── logbook/page.tsx
│   │   ├── dive-sites/page.tsx
│   │   ├── certification-progress/page.tsx
│   │   ├── depth-chart/page.tsx
│   │   ├── physics/page.tsx
│   │   ├── safety-notes/page.tsx
│   │   ├── gear/page.tsx
│   │   ├── marine-life/page.tsx
│   │   └── photo-gallery/page.tsx
│   └── field-guide/
│       ├── page.tsx
│       ├── plants/page.tsx
│       ├── animals/page.tsx
│       ├── birds/page.tsx
│       ├── marine-life/page.tsx
│       └── identification-notes/page.tsx
│
├── finance/                       [BRANCH] Triggered separately
│   ├── page.tsx                   Mini-site landing / dashboard   [MVP]
│   ├── dashboard/page.tsx
│   ├── market-outlook/
│   │   ├── page.tsx               [MVP]
│   │   ├── weekly/page.tsx
│   │   ├── monthly/page.tsx
│   │   ├── energy/page.tsx
│   │   ├── uranium/page.tsx
│   │   ├── base-metals/page.tsx
│   │   ├── rates/page.tsx
│   │   ├── singapore/page.tsx
│   │   └── watchlist/page.tsx
│   ├── sectors/
│   │   ├── page.tsx
│   │   ├── energy/page.tsx
│   │   ├── uranium/page.tsx
│   │   ├── base-metals/page.tsx
│   │   ├── semiconductors/page.tsx
│   │   ├── infrastructure/page.tsx
│   │   ├── singapore-reits/page.tsx
│   │   └── commodities/page.tsx
│   ├── dashboards/
│   │   ├── page.tsx
│   │   ├── macro-dashboard/page.tsx
│   │   ├── commodity-dashboard/page.tsx
│   │   ├── equity-watchlist/page.tsx
│   │   ├── dividend-tracker/page.tsx
│   │   ├── portfolio-simulator/page.tsx
│   │   └── correlation-matrix/page.tsx
│   ├── quant-tools/
│   │   ├── page.tsx
│   │   ├── backtester/page.tsx
│   │   ├── factor-screener/page.tsx
│   │   ├── moving-average-lab/page.tsx
│   │   ├── volatility-lab/page.tsx
│   │   ├── drawdown-visualizer/page.tsx
│   │   ├── monte-carlo-simulator/page.tsx
│   │   └── position-sizing-calculator/page.tsx
│   ├── calculators/
│   │   └── dca-calculator/page.tsx   [MVP]
│   ├── explainers/
│   │   ├── page.tsx
│   │   ├── economics/page.tsx
│   │   ├── business-analytics/page.tsx
│   │   ├── commodities/page.tsx
│   │   ├── valuation/page.tsx
│   │   ├── risk/page.tsx
│   │   └── how-to-read-earnings/page.tsx
│   ├── notes/
│   │   ├── page.tsx
│   │   ├── weekly-market-notes/
│   │   │   └── [slug]/page.tsx
│   │   ├── earnings-notes/
│   │   │   └── [slug]/page.tsx
│   │   ├── macro-notes/
│   │   │   └── [slug]/page.tsx
│   │   └── reading-list/page.tsx
│   ├── glossary/page.tsx
│   └── disclosures/page.tsx       [MVP]
│
├── entertainment/                 [BRANCH] Triggered separately
│   ├── page.tsx
│   ├── music/
│   │   ├── page.tsx               Mini-site landing
│   │   ├── dashboard/page.tsx
│   │   ├── news/page.tsx
│   │   ├── release-calendar/page.tsx
│   │   ├── jpop/
│   │   │   ├── page.tsx
│   │   │   ├── artist-index/page.tsx
│   │   │   ├── new-releases/page.tsx
│   │   │   ├── starter-pack/page.tsx
│   │   │   ├── playlists/page.tsx
│   │   │   ├── song-rankings/page.tsx
│   │   │   └── concert-tracker/page.tsx
│   │   ├── mandopop/
│   │   │   ├── page.tsx
│   │   │   ├── starter-pack/page.tsx
│   │   │   ├── chord-friendly-songs/page.tsx
│   │   │   ├── artist-guides/page.tsx
│   │   │   └── playlists/page.tsx
│   │   ├── guitar/
│   │   │   ├── page.tsx
│   │   │   ├── chord-library/page.tsx
│   │   │   ├── strumming-patterns/page.tsx    [MVP]
│   │   │   ├── songbook/page.tsx
│   │   │   ├── telecaster-tones/page.tsx
│   │   │   ├── acoustic-arrangements/page.tsx
│   │   │   ├── practice-log/page.tsx
│   │   │   └── beginner-path/page.tsx
│   │   ├── playlists/page.tsx
│   │   ├── artist-guides/page.tsx
│   │   └── song-breakdowns/page.tsx
│   ├── anime/
│   │   ├── page.tsx               Mini-site landing
│   │   ├── dashboard/page.tsx
│   │   ├── news/page.tsx
│   │   ├── seasonal/page.tsx
│   │   ├── reviews/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── tier-list/page.tsx
│   │   ├── recommendations/page.tsx   [MVP]
│   │   ├── watch-order-guides/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── studio-tracker/page.tsx
│   │   ├── character-index/page.tsx
│   │   ├── opening-ending-rankings/page.tsx
│   │   └── suggestion-box/page.tsx
│   └── games/
│       ├── page.tsx
│       ├── backlog/page.tsx
│       ├── reviews/page.tsx
│       ├── tier-list/page.tsx
│       └── cozy-games/page.tsx
│
├── lab/                           [BRANCH] Triggered separately
│   ├── page.tsx
│   ├── ai/page.tsx
│   ├── data/page.tsx
│   ├── scraping-notes/page.tsx
│   ├── api-experiments/page.tsx
│   ├── ui-experiments/page.tsx
│   ├── failed-experiments/page.tsx
│   └── tiny-builds/page.tsx
│
├── community/                     [BRANCH] Triggered separately
│   ├── page.tsx
│   ├── guestbook/page.tsx
│   ├── polls/page.tsx
│   ├── suggestions/page.tsx
│   ├── ask/page.tsx
│   ├── anime-submissions/page.tsx
│   ├── music-submissions/page.tsx
│   ├── travel-tips/page.tsx
│   └── project-voting/page.tsx
│
├── support/                       [MVP]
│   ├── page.tsx
│   ├── donate/page.tsx
│   ├── wall/page.tsx
│   ├── tiers/page.tsx
│   ├── wishlist/page.tsx
│   └── transparency/page.tsx
│
├── contact/
│   └── page.tsx                   [MVP]
│
├── search/
│   └── page.tsx                   [MVP]
│
├── tags/
│   ├── page.tsx                   [MVP]
│   └── [tag]/page.tsx             [MVP]
│
├── data-sources/
│   ├── page.tsx                   [MVP]
│   ├── anime/page.tsx
│   ├── music/page.tsx
│   ├── finance/page.tsx
│   ├── github/page.tsx
│   ├── travel/page.tsx
│   └── maps/page.tsx
│
├── legal/
│   ├── page.tsx                   [MVP]
│   ├── privacy/page.tsx           [MVP]
│   ├── terms/page.tsx             [MVP]
│   ├── cookie-policy/page.tsx
│   ├── affiliate-disclosure/page.tsx
│   ├── financial-disclaimer/page.tsx  [MVP]
│   ├── health-disclaimer/page.tsx
│   ├── diving-disclaimer/page.tsx
│   ├── ai-disclosure/page.tsx
│   ├── data-sources/page.tsx
│   ├── attribution/page.tsx       [MVP]
│   └── corrections/page.tsx
│
└── api/
    ├── health/route.ts            [MVP]
    ├── github/route.ts
    ├── finance/route.ts
    ├── anime/route.ts
    ├── music/route.ts
    ├── travel/route.ts
    ├── search/route.ts            [MVP]
    ├── sitemap/route.ts           [MVP]
    ├── og/route.ts                [MVP]
    └── revalidate/route.ts
```

---

## Lib Directory

```txt
lib/
│
├── content/
│   ├── types.ts                   [MVP] All content type definitions (from content-model.md)
│   ├── registry.ts                [MVP] Content registry — central store of all content
│   ├── search-index.ts            [MVP] Build-time search index generator
│   └── collections.ts            Collections data
│
├── api/
│   ├── anilist.ts                 AniList GraphQL client
│   ├── jikan.ts                   Jikan REST client
│   ├── spotify.ts                 Spotify Web API client
│   ├── github.ts                  GitHub API client
│   └── finance.ts                 Finance data provider client
│
├── seo/
│   ├── metadata.ts                [MVP] generateMetadata() helper
│   ├── schema.ts                  [MVP] JSON-LD schema generators
│   └── og.ts                      OG image helpers
│
├── cache/
│   └── index.ts                   Caching wrappers for API calls
│
└── utils/
    ├── dates.ts                   Date formatting utilities
    ├── reading-time.ts            Reading time calculator
    ├── slugify.ts                 Slug generator
    └── currency.ts               Currency formatting (SGD default)
```

---

## Components Directory

```txt
components/
│
├── ui/                            [MVP] Base design system components
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Tabs.tsx
│   ├── Tooltip.tsx
│   ├── Skeleton.tsx
│   └── Separator.tsx
│
├── layout/                        [MVP] Structural layout components
│   ├── GlobalNav.tsx
│   ├── Footer.tsx
│   ├── MiniSiteHero.tsx           [MVP]
│   ├── MiniSiteNav.tsx            [MVP]
│   ├── Breadcrumbs.tsx            [MVP]
│   └── PageWrapper.tsx
│
├── content/                       [MVP] Content display components
│   ├── ContentCard.tsx            [MVP]
│   ├── TagPills.tsx               [MVP]
│   ├── RelatedContent.tsx
│   ├── TableOfContents.tsx
│   └── ReadingProgress.tsx
│
├── tools/
│   ├── ToolCard.tsx               [MVP]
│   ├── ToolLayout.tsx             Template for tool pages
│   ├── ShareCardGenerator.tsx
│   └── FAQSection.tsx
│
├── shared/
│   ├── LastUpdatedBadge.tsx       [MVP]
│   ├── SourceBadge.tsx            [MVP]
│   ├── DisclaimerBanner.tsx       [MVP]
│   ├── CommandPalette.tsx         [MVP]
│   ├── DataFreshnessRow.tsx       Combines LastUpdated + Source + RefreshInterval
│   └── ErrorBoundary.tsx
│
├── finance/
│   └── DisclaimerBanner.tsx       Finance-specific disclaimer variant
│
└── mdx/
    ├── MDXContent.tsx             MDX renderer
    ├── Callout.tsx                Custom MDX callout block
    ├── CodeBlock.tsx              Syntax-highlighted code block
    └── ImageWithCaption.tsx       MDX image with caption + credit
```

---

## Content Directory (MDX / Static)

```txt
content/
│
├── projects/
│   ├── liveling.mdx
│   ├── diabetes-connect.mdx
│   └── nuschedule.mdx
│
├── writing/
│   ├── blog/
│   ├── essays/
│   ├── notes/
│   ├── devlogs/
│   └── market-notes/
│
├── travel/
│   └── japan/
│       ├── first-timer-guide.mdx
│       ├── budget.mdx
│       └── gallery.mdx
│
├── singapore/
│   └── guides/
│
├── data/
│   ├── now.json                   Currently building/reading/watching
│   ├── uses.json                  Gear and software setup
│   ├── support-tiers.json         Support tier definitions
│   └── transparency.json          Monthly cost breakdown
│
└── registry/
    └── all-content.ts             Master registry of all DewContent items
```

---

## Public Directory

```txt
public/
│
├── search-index.json              [MVP] Generated at build time
├── og/                            Generated OG images cache
├── images/
│   ├── travel/
│   ├── projects/
│   └── profile/
└── icons/
```

---

## Config Files (Root)

```txt
/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
├── .env.local                     Not committed — real keys here
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md                      Project README (different from docs/README.md)
```

---

## MVP Checklist Summary

The minimum required to launch:

```txt
Phase 0  — Project setup, deployment, domain, env
Phase 1  — Skeleton: types, registry, layout, shared components, legal, contact, search
Phase 2  — Homepage (all sections wired)
Phase 3  — About + Now pages
Phase 4  — Projects branch (3 case studies)
Phase 5  — Tools branch (3 MVP tools)
Phase 6  — Singapore branch (NUS CAP planner)
Phase 7  — Travel branch (Japan cluster)
Phase 8  — Finance branch (DCA calculator + market outlook)
Phase 9  — Entertainment branch (anime recommendations + guitar strumming)
Phase 10 — Writing branch (devlogs + notes)
Support + Contact + Legal — run alongside Phase 1
```
