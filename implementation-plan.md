# dew.codes — Implementation Plan

> This document is the build roadmap. It is written for Copilot and any human contributor.
> **Always check this document before starting work on a new section.**
> Individual branches are separate sub-projects. They are only built when explicitly triggered.

---

## Core Principle: Structure First, Branches Later

The site has two distinct layers:

**Layer 1 — The Skeleton**
Global layout, shared components, universal content model, routing infrastructure, legal pages, homepage. This must be complete before any branch work begins. It is the foundation every branch depends on.

**Layer 2 — The Branches**
Each top-level section (finance, travel, anime, music, singapore, etc.) is a self-contained sub-project. They are built independently, one at a time, only when triggered. Triggering a branch means: "start this branch now as its own focused build sprint."

**Never build a branch without completing the skeleton first.**
**Never build two branches simultaneously unless explicitly instructed.**

---

## Phase 0 — Pre-Build Setup

Complete these before writing any app code.

- [ ] Initialize Next.js project with App Router and TypeScript
- [ ] Configure Tailwind CSS with custom design token layer
- [ ] Set up ESLint, Prettier, path aliases
- [ ] Set up environment variable structure (`.env.local`, `.env.example`)
- [ ] Create folder structure: `app/`, `lib/`, `components/`, `content/`, `public/`
- [ ] Set up git repository and branching strategy
- [ ] Configure Vercel project and deployment pipeline
- [ ] Purchase/verify domain `dew.codes`, configure DNS
- [ ] Set up email aliases via domain email forwarding
- [ ] Set up `robots.ts` and `sitemap.ts` stubs

**Do not proceed to Phase 1 until Phase 0 is complete.**

---

## Phase 1 — Foundation (Skeleton)

This is the most important phase. Everything else is built on top of it.

### 1A — Universal Content Model

Create typed content models in `lib/content/types.ts`:

- [ ] `DewContent` base type
- [ ] `DewTool` type
- [ ] `DewProject` type
- [ ] `TravelEntry` type
- [ ] `FinancePage` type
- [ ] `EntertainmentContent` type

Create a content registry in `lib/content/registry.ts`:
- [ ] Central registry where all content is registered
- [ ] Functions: `getAllContent()`, `getContentBySlug()`, `getContentByCategory()`, `getContentByTag()`, `getFeaturedContent()`

### 1B — SEO and Metadata Infrastructure

Create `lib/seo/`:
- [ ] `generateMetadata()` helper function
- [ ] JSON-LD schema generators per page type (Person, SoftwareApplication, Article, WebApplication, BlogPosting, FAQPage, HowTo, Review)
- [ ] Open Graph image template (`app/opengraph-image.tsx`)
- [ ] `app/robots.ts`
- [ ] `app/sitemap.ts` (dynamic, reads from content registry)

### 1C — Global Layout

Create `app/layout.tsx`:
- [ ] Global font loading
- [ ] Global nav (links to all top-level branches)
- [ ] `CommandPalette` component (Cmd+K, renders on all pages)
- [ ] Footer (links, email aliases, newsletter CTA, support link)
- [ ] Cookie banner if needed

### 1D — Shared Components

Build these before any branch work. They will be used everywhere.

| Component | Location | Notes |
|---|---|---|
| `MiniSiteHero` | `components/layout/` | Reusable hero per branch. Accepts title, subtitle, CTA, accent color. |
| `MiniSiteNav` | `components/layout/` | Branch-specific sub-navigation. Accepts nav items array. |
| `Breadcrumbs` | `components/layout/` | Auto-generates from route path. Required on all nested routes. |
| `ContentCard` | `components/content/` | Universal card for any DewContent item. |
| `ToolCard` | `components/tools/` | Specialised card for tools. Shows toolType badge. |
| `TagPills` | `components/content/` | Tag display. Each pill links to /tags/[tag]. |
| `LastUpdatedBadge` | `components/shared/` | Shows "Last updated: [date]". Required on dynamic pages. |
| `SourceBadge` | `components/shared/` | Shows data source name and link. Required on API-fed pages. |
| `DisclaimerBanner` | `components/shared/` | Finance/health/diving disclaimer. Accepts variant prop. |
| `RelatedContent` | `components/content/` | Cross-links related content from registry. |
| `CommandPalette` | `components/shared/` | Cmd+K global search. Reads from search index. |
| `ShareCardGenerator` | `components/tools/` | Generates a shareable image card from tool output. |

### 1E — Legal Pages

Build all legal pages before any branch that needs them. These are simple static pages.

- [ ] `/legal/privacy`
- [ ] `/legal/terms`
- [ ] `/legal/cookie-policy`
- [ ] `/legal/affiliate-disclosure`
- [ ] `/legal/financial-disclaimer`
- [ ] `/legal/health-disclaimer`
- [ ] `/legal/diving-disclaimer`
- [ ] `/legal/ai-disclosure`
- [ ] `/legal/data-sources`
- [ ] `/legal/attribution`
- [ ] `/legal/corrections`

### 1F — Contact Page

- [ ] `/contact` — routing page with links to all relevant email aliases
- [ ] Categorized: collaborate, bug report, correction, finance feedback, anime/music recommendation, travel suggestion, security report

### 1G — Search Infrastructure

- [ ] Build search index generator (runs at build time, outputs `public/search-index.json`)
- [ ] Build `/search` page with filter UI
- [ ] Wire `CommandPalette` to search index

### 1H — Tags System

- [ ] `/tags` index page
- [ ] `/tags/[tag]` dynamic route (reads from content registry)

**Phase 1 is complete when:** Global layout renders, all shared components exist, legal pages are live, search index builds, content model is typed and registered. No branch page needs to exist yet.

---

## Phase 2 — Homepage

Build the homepage only after Phase 1 is complete.

`app/page.tsx` sections (in order):

- [ ] Hero — identity statement, tagline, two CTAs (Explore Tools, View Projects)
- [ ] Currently Building — pulls from `about/now` config
- [ ] Featured Tools — pulls 3 featured tools from content registry
- [ ] Featured Projects — pulls 3 featured projects from content registry
- [ ] Latest Writing — pulls 3 most recent writing entries
- [ ] Latest Travel Note — pulls 1 most recent travel entry
- [ ] Latest Finance Note — pulls 1 most recent finance note
- [ ] Latest Anime/Music Pick — pulls 1 most recent entertainment entry
- [ ] Support CTA — links to `/support`

Rules:
- All sections pull from the content registry. Nothing is hardcoded in JSX.
- Homepage must have `generateMetadata()` with Person schema.
- Open Graph image must be generated.

---

## Phase 3 — About Cluster

- [ ] `/about` — main identity page (Person schema)
- [ ] `/about/now` — living "what I'm doing now" page (config-driven)
- [ ] `/about/timeline` — interactive life/build timeline
- [ ] `/about/uses` — gear, software, dev setup
- [ ] `/about/stack` — tech stack detail
- [ ] `/about/values` — values statement

---

## Phase 4 — Projects Branch

> **This is a triggered branch. Do not start until explicitly told to.**

When triggered, treat this as a self-contained sub-project.

Entry point: `/projects/page.tsx` (the mini-site landing)

Must feel like: "A software builder's portfolio and product lab."

Landing page needs:
- [ ] MiniSiteHero
- [ ] MiniSiteNav (Overview, Liveling, Diabetes Connect, NUSschedule, Experiments, Open Source)
- [ ] Project grid with Memory Lane toggle
- [ ] Tech stack filter
- [ ] GitHub stats widget
- [ ] Devlog feed (pulls from /writing/devlogs)

Project pages (each needs: problem, demo/screenshots, tech stack, architecture, learnings, roadmap, changelog):
- [ ] `/projects/liveling` cluster
- [ ] `/projects/diabetes-connect` cluster
- [ ] `/projects/nuschedule` cluster
- [ ] `/projects/experiments` cluster
- [ ] `/projects/open-source` cluster

---

## Phase 5 — Tools Branch

> **This is a triggered branch. Do not start until explicitly told to.**

When triggered, treat this as a self-contained sub-project.

Entry point: `/tools/page.tsx`

Must feel like: "A useful web tools site."

Landing page needs:
- [ ] MiniSiteHero
- [ ] MiniSiteNav (All Tools, Calculators, Generators, Visualizers, Share Cards)
- [ ] Tool category grid
- [ ] Search/filter
- [ ] Popular tools
- [ ] Recently updated tools

Every tool page must use a shared template with: tool UI, explanation, examples, FAQ section, related tools, ShareCardGenerator (if enabled).

MVP tools to build first:
- [ ] `/tools/calculators/nus-cap-planner`
- [ ] `/tools/calculators/trip-budget-calculator`
- [ ] `/tools/generators/anime-recommendation-picker`

Remaining tools are built after MVP tools are validated.

---

## Phase 6 — Singapore Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/singapore/page.tsx`

Must feel like: "A Singapore student/builder resource site."

- [ ] Landing page with MiniSiteHero and MiniSiteNav
- [ ] `/singapore/student-tools` cluster
- [ ] `/singapore/guides` cluster
- [ ] `/singapore/christian` cluster

All content manually curated first. Maps deferred.

---

## Phase 7 — Travel Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/travel/page.tsx`

Must feel like: "A travel guide and digital field notebook."

- [ ] Landing page with interactive map and country cards
- [ ] `/travel/countries/japan` cluster (full MVP: overview, first-timer-guide, budget, gallery)
- [ ] `/travel/countries/italy` cluster
- [ ] `/travel/countries/china` cluster
- [ ] `/travel/tools` sub-cluster (trip calculator, packing list generator)
- [ ] `/travel/diving` cluster
- [ ] `/travel/field-guide` cluster

All costs must be real. No copied travel blog content. Always show last-updated date.

---

## Phase 8 — Finance Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/finance/page.tsx`

Must feel like: "A personal finance research dashboard."

Rules for this branch: DisclaimerBanner on every page. Show data source, methodology, assumptions, last refresh everywhere.

- [ ] Landing page / dashboard
- [ ] `/finance/market-outlook` cluster
- [ ] `/finance/sectors` cluster
- [ ] `/finance/dashboards` cluster
- [ ] `/finance/quant-tools` cluster
- [ ] `/finance/explainers` cluster
- [ ] `/finance/notes` cluster
- [ ] `/finance/glossary`
- [ ] `/finance/disclosures`

MVP first: `/finance/dca-calculator`, `/finance/market-outlook`.

---

## Phase 9 — Entertainment Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/entertainment/page.tsx`

Must feel like: "A music/anime/games discovery and curation site."

### Anime sub-branch:
- [ ] `/entertainment/anime/dashboard`
- [ ] `/entertainment/anime/seasonal`
- [ ] `/entertainment/anime/recommendations`
- [ ] `/entertainment/anime/tier-list`
- [ ] `/entertainment/anime/reviews`
- [ ] `/entertainment/anime/watch-order-guides`
- [ ] `/entertainment/anime/studio-tracker`
- [ ] `/entertainment/anime/suggestion-box`

API: AniList GraphQL (primary), Jikan (secondary). Cache all responses. Show source. Build fallback UI.

### Music sub-branch:
- [ ] `/entertainment/music/dashboard`
- [ ] `/entertainment/music/jpop` cluster
- [ ] `/entertainment/music/mandopop` cluster
- [ ] `/entertainment/music/guitar` cluster
- [ ] `/entertainment/music/playlists`
- [ ] `/entertainment/music/artist-guides`

Manual starter packs must work even if Spotify API fails.

### Games sub-branch:
- [ ] `/entertainment/games/backlog`
- [ ] `/entertainment/games/reviews`
- [ ] `/entertainment/games/tier-list`
- [ ] `/entertainment/games/cozy-games`

---

## Phase 10 — Writing Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/writing/page.tsx`

- [ ] Blog listing
- [ ] Essays listing
- [ ] Notes listing
- [ ] Devlogs listing
- [ ] Market notes listing
- [ ] Travelogues listing
- [ ] Book notes listing
- [ ] Learning logs listing
- [ ] Newsletter archive + Dew Dispatch

All posts use MDX. Generate reading time, table of contents, related posts. Add RSS feed.

---

## Phase 11 — Collections Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/collections/page.tsx`

Collections are curated arrays of internal content IDs. No new content creation — just curation of existing content.

Build after enough content exists in the registry to make collections meaningful.

---

## Phase 12 — Lab Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Entry point: `/lab/page.tsx`

Intentionally rough. Some pages can be `noindex`. Used to stage experiments before they move to `/projects` or `/tools`.

---

## Phase 13 — Community Branch

> **This is a triggered branch. Do not start until explicitly told to.**

Lightweight only: guestbook, polls, suggestions. Spam protection required. No user accounts.

---

## Phase 14 — Support Branch

> **This is a triggered branch. Do not start until explicitly told to.**

- [ ] `/support/donate`
- [ ] `/support/wall`
- [ ] `/support/tiers`
- [ ] `/support/wishlist`
- [ ] `/support/transparency` (show real monthly costs)

---

## Phase 15 — Data Sources and API Infrastructure

> Run alongside any branch that uses external APIs.

- [ ] `/data-sources` landing page
- [ ] `/data-sources/anime`
- [ ] `/data-sources/music`
- [ ] `/data-sources/finance`
- [ ] `/data-sources/github`
- [ ] `/data-sources/travel`
- [ ] `/data-sources/maps`

API route handlers in `app/api/`:
- [ ] `/api/health`
- [ ] `/api/github`
- [ ] `/api/finance`
- [ ] `/api/anime`
- [ ] `/api/music`
- [ ] `/api/travel`
- [ ] `/api/search`
- [ ] `/api/sitemap`
- [ ] `/api/og`
- [ ] `/api/revalidate`

---

## MVP Definition

The MVP is complete when the following pages are live and working:

```txt
/                           ← Homepage (all sections populated)
/about                      ← Identity page
/about/now                  ← Now page
/projects                   ← Projects landing
/projects/liveling          ← Full case study
/projects/diabetes-connect  ← Full case study
/projects/nuschedule        ← Full case study
/tools                      ← Tools landing
/tools/calculators/nus-cap-planner
/tools/calculators/trip-budget-calculator
/tools/generators/anime-recommendation-picker
/singapore/student-tools/nus-cap-planner
/travel/countries/japan/first-timer-guide
/travel/countries/japan/budget
/travel/countries/japan/gallery
/finance/calculators/dca-calculator
/finance/market-outlook
/entertainment/anime/recommendations
/entertainment/music/guitar/strumming-patterns
/writing/devlogs
/writing/notes
/support
/contact
/legal/privacy
/legal/terms
/legal/financial-disclaimer
/legal/attribution
```

---

## Deferred — Do Not Build

These are explicitly deferred. Do not scaffold, stub, or start these:

- User authentication and accounts
- Full community voting/threads
- Complex finance data pipelines
- 3D interactive globe
- Full anime database sync
- Automated music release tracking
- CMS admin interface
- Paid premium product pages
- Large-scale scraping infrastructure
- Email newsletter sending infrastructure (just collect signups for now)

---

## How to Trigger a Branch

When starting work on a new branch, the prompt should be:

> "Trigger [branch name] branch. Build the [branch name] mini-site sub-project following the implementation plan."

Copilot should then:
1. Read `README.md` for overall rules
2. Read this `implementation-plan.md` for the branch-specific scope
3. Read `design-system.md` for design tokens and branch identity
4. Read `content-model.md` for the relevant content types
5. Build the landing page first, then the sub-pages in order

Never build a branch without reading these four documents first.
