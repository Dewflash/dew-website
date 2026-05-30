# dew.codes — Content Model

> This document defines the typed content models for all content on dew.codes.
> Every piece of content must extend `DewContent`. Never invent a new content shape without adding it here first.
> This file is the source of truth for `lib/content/types.ts`.

---

## Base Type: DewContent

Every content item on the site — tools, projects, posts, travel entries, finance pages, anime pages — shares this base envelope.

```ts
export type ContentCategory =
  | "project"
  | "tool"
  | "writing"
  | "travel"
  | "finance"
  | "music"
  | "anime"
  | "singapore"
  | "collection"
  | "lab"

export type ContentStatus = "draft" | "published" | "archived"

export type MiniSite =
  | "projects"
  | "tools"
  | "travel"
  | "finance"
  | "anime"
  | "music"
  | "singapore"
  | "lab"

export type DewContent = {
  id: string                    // Unique ID, e.g. "tool-nus-cap-planner"
  title: string                 // Display title
  slug: string                  // URL-safe slug, e.g. "nus-cap-planner"
  path: string                  // Full path, e.g. "/tools/calculators/nus-cap-planner"
  description: string           // One-sentence description for cards, OG, meta
  category: ContentCategory
  tags: string[]                // e.g. ["singapore", "nus", "calculator"]
  datePublished: string         // ISO 8601, e.g. "2026-05-30"
  dateUpdated: string           // ISO 8601
  status: ContentStatus
  featured: boolean             // Show on homepage featured sections
  miniSite?: MiniSite           // Which mini-site this belongs to
  readingTime?: number          // Minutes. Generated for writing content.
  sourceLinks?: string[]        // External sources, APIs, references
  relatedPages?: string[]       // Array of content IDs for related content
  canonicalUrl?: string         // If different from path
  ogImagePath?: string          // Path to custom OG image, or generated
  schemaType?: string           // JSON-LD schema type hint
}
```

---

## Tool Model

```ts
export type ToolType = "calculator" | "generator" | "dashboard" | "visualizer" | "share-card"

export type DewTool = DewContent & {
  category: "tool"
  toolType: ToolType
  inputFields?: ToolInputField[]    // Typed input schema for the tool
  outputType?: string               // What the tool produces
  dataSources?: string[]            // APIs or data sources used
  shareCardEnabled?: boolean        // Whether a share card can be generated
  exampleInputs?: Record<string, unknown>[]  // Example inputs to show users
  faqItems?: FAQItem[]              // FAQ for the tool page
  relatedTools?: string[]           // Content IDs of related tools
  lastToolUpdate?: string           // ISO 8601 — when the tool logic last changed
}

export type ToolInputField = {
  key: string
  label: string
  type: "number" | "text" | "select" | "range" | "boolean" | "date"
  options?: string[]        // For select fields
  min?: number
  max?: number
  step?: number
  placeholder?: string
  required: boolean
  helpText?: string
}

export type FAQItem = {
  question: string
  answer: string
}
```

---

## Project Model

```ts
export type ProjectStatus =
  | "idea"
  | "building"
  | "launched"
  | "paused"
  | "archived"
  | "failed"

export type ChangelogEntry = {
  version?: string
  date: string              // ISO 8601
  changes: string[]
  type: "feature" | "fix" | "breaking" | "note"
}

export type DewProject = DewContent & {
  category: "project"
  projectStatus: ProjectStatus
  techStack: string[]           // e.g. ["Next.js", "TypeScript", "Supabase"]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  screenshots?: ImageAsset[]
  problemStatement?: string     // What problem does this solve
  architecture?: string         // Architecture overview (MDX or string)
  learnings?: string[]          // Key learnings from building this
  changelog?: ChangelogEntry[]
  roadmap?: RoadmapItem[]
  disclaimer?: "health" | "financial" | "none"
}

export type RoadmapItem = {
  title: string
  status: "planned" | "in-progress" | "done" | "deferred"
  priority: "high" | "medium" | "low"
  notes?: string
}
```

---

## Writing Model

```ts
export type WritingType =
  | "blog"
  | "essay"
  | "note"
  | "devlog"
  | "market-note"
  | "travelogue"
  | "book-note"
  | "learning-log"
  | "newsletter"

export type DewWriting = DewContent & {
  category: "writing"
  writingType: WritingType
  author: string                // "Kevin Yong" or guest author name
  coverImage?: ImageAsset
  excerpt?: string              // Longer excerpt for listing pages
  tableOfContents?: TOCItem[]   // Generated from headings
  relatedProjects?: string[]    // Content IDs of related projects
  relatedTools?: string[]       // Content IDs of related tools
  newsletterIssue?: number      // For newsletter issues
}

export type TOCItem = {
  level: number
  text: string
  anchor: string
}
```

---

## Travel Model

```ts
export type TravelStyleTag =
  | "backpacker"
  | "budget"
  | "comfort"
  | "food-focused"
  | "nature"
  | "urban"
  | "adventure"
  | "cultural"
  | "diving"

export type TravelEntry = DewContent & {
  category: "travel"
  country: string               // e.g. "Japan"
  countryCode: string           // ISO 3166-1 alpha-2, e.g. "JP"
  city?: string                 // If city-specific
  coordinates?: [number, number]   // [lat, lng] for map placement
  visitedDates?: string[]       // ISO 8601 dates of visits
  budgetRange?: string          // e.g. "S$1,500 – S$2,000 for 7 days"
  budgetBreakdown?: BudgetItem[]
  travelStyleTags: TravelStyleTag[]
  gallery?: ImageAsset[]
  disclaimer?: string           // If any (e.g. diving safety)
  lastVerified?: string         // ISO 8601 — when costs/info were last checked
  entryType: "guide" | "itinerary" | "food" | "budget" | "tips" | "gallery" | "log" | "diving"
}

export type BudgetItem = {
  category: "flights" | "accommodation" | "food" | "transport" | "activities" | "shopping" | "other"
  amount: number
  currency: string              // e.g. "SGD"
  notes?: string
}
```

---

## Finance Model

```ts
export type FinancePageType =
  | "dashboard"
  | "market-outlook"
  | "sector"
  | "tool"
  | "explainer"
  | "note"
  | "glossary"

export type FinancePage = DewContent & {
  category: "finance"
  financePageType: FinancePageType
  dataSources: DataSourceRef[]
  disclaimerRequired: true       // Always true. Cannot be omitted.
  lastDataRefresh?: string       // ISO 8601
  refreshInterval?: "realtime" | "daily" | "weekly" | "monthly" | "manual"
  methodology?: string           // How data is processed or calculated
  assumptions?: string[]         // Listed assumptions
  sectors?: string[]             // Relevant market sectors
  isNISA?: boolean               // Is this Singapore-specific investment content
}

export type DataSourceRef = {
  name: string                   // e.g. "AniList API", "Yahoo Finance"
  url?: string
  type: "api" | "csv" | "manual" | "rss" | "scrape"
  refreshInterval?: string
  limitations?: string
}
```

---

## Entertainment Model

```ts
export type EntertainmentType = "anime" | "music" | "game"

export type AnimeEntry = DewContent & {
  category: "anime"
  entertainmentType: "anime"
  anilistId?: number
  malId?: number
  status: "watching" | "completed" | "planned" | "dropped" | "paused"
  personalRating?: number        // 1-10
  genres?: string[]
  studio?: string
  year?: number
  season?: "winter" | "spring" | "summer" | "fall"
  reviewText?: string
  recommended: boolean
  contentWarnings?: string[]
}

export type MusicEntry = DewContent & {
  category: "music"
  entertainmentType: "music"
  musicType: "jpop" | "mandopop" | "guitar" | "playlist" | "artist-guide"
  artist?: string
  spotifyId?: string             // Spotify track/album/artist ID
  youtubeId?: string             // YouTube video ID for embeds
  chords?: string[]              // For chord library entries
  difficulty?: "beginner" | "intermediate" | "advanced"  // For guitar content
}

export type GameEntry = DewContent & {
  category: "game"  // Typed under entertainment
  entertainmentType: "game"
  platform?: string[]
  personalRating?: number
  completionStatus: "backlog" | "playing" | "completed" | "dropped"
  genre?: string[]
}
```

---

## Singapore Model

```ts
export type SingaporeContentType =
  | "student-tool"
  | "guide"
  | "map"
  | "event-listing"
  | "christian"

export type SingaporeEntry = DewContent & {
  category: "singapore"
  singaporeType: SingaporeContentType
  relevantFor?: string[]         // e.g. ["NUS", "NTU", "SMU", "students"]
  lastVerified?: string          // ISO 8601 — when info was last checked
  mapCoordinates?: [number, number]
  openingHours?: string
  address?: string
  priceRange?: string
}
```

---

## Collection Model

```ts
export type DewCollection = DewContent & {
  category: "collection"
  items: string[]                // Array of content IDs
  curatorNote?: string           // Why this collection was put together
  coverContentId?: string        // Content ID to use for cover image
  estimatedReadTime?: number     // Total minutes if working through all items
}
```

---

## Shared Asset Types

```ts
export type ImageAsset = {
  src: string                    // Path or URL
  alt: string
  width?: number
  height?: number
  caption?: string
  credit?: string                // Attribution if needed
  takenAt?: string               // For travel photos — location name
  takenDate?: string             // ISO 8601
}
```

---

## Content Registry Interface

The content registry (`lib/content/registry.ts`) must expose at minimum:

```ts
export interface ContentRegistry {
  // Retrieval
  getAllContent(): DewContent[]
  getContentById(id: string): DewContent | undefined
  getContentBySlug(slug: string): DewContent | undefined
  getContentByCategory(category: ContentCategory): DewContent[]
  getContentByTag(tag: string): DewContent[]
  getContentByMiniSite(miniSite: MiniSite): DewContent[]

  // Filtering
  getFeaturedContent(category?: ContentCategory): DewContent[]
  getPublishedContent(): DewContent[]
  getRecentContent(limit?: number, category?: ContentCategory): DewContent[]

  // Relations
  getRelatedContent(id: string, limit?: number): DewContent[]

  // Search
  searchContent(query: string): DewContent[]

  // Sitemap
  getAllPaths(): string[]
}
```

---

## Notes for Copilot

- Never create a page that does not map to one of these content types.
- If a new content type is needed, add it to this document first, then create the type.
- The `disclaimerRequired: true` field on `FinancePage` is not optional. Finance pages always show a disclaimer.
- `lastVerified` and `lastDataRefresh` fields must be surfaced as `LastUpdatedBadge` components on the page.
- `dataSources` must be surfaced as `SourceBadge` components on any data-driven page.
- All content IDs must be globally unique across the registry. Use the pattern: `[category]-[slug]`, e.g. `tool-nus-cap-planner`, `project-liveling`, `travel-japan-first-timer-guide`.
