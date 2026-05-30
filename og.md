Yes — the previous structure is integrated, but I'd now reframe the whole thing more intentionally:

> **Each top-level branch should behave like a self-contained mini-site.**
> A visitor landing on `/finance` should think `dew.codes` is a finance research site. A visitor landing on `/travel/japan` should think it is a travel site. A visitor landing on `/entertainment/anime` should think it is an anime discovery site. Only when they explore the global nav should they realize `dew.codes` is actually a larger personal internet OS.

That means every hub needs its own:

```txt
Landing page
Internal navigation
Featured content
Tools/widgets
Search/filter
Newsletter/support/contact CTA
SEO metadata
Schema
Related pages
```

The unifying brand becomes:

> **dew.codes — useful tools and field notes from a Singapore builder.**

---

# Part 1: Final Consolidated `dew.codes` Master Architecture

Below is the updated tree. I've included three comment types under major branches:

```txt
[UX idea]        What visitors experience
[SEO strategy]   How this branch can rank or gain search traction
[Implementation] APIs, data, technical notes, legal notes, etc.
```

---

```txt
/
├── page.tsx
│   [UX idea]
│   Command-center homepage. Shows that dew.codes is a living public OS:
│   projects, tools, travel, finance, anime/music, writing, and support.
│
│   [SEO strategy]
│   Homepage should target broad personal-brand terms:
│   "Kevin Yong", "dew.codes", "Singapore builder", "developer portfolio",
│   "software projects", "finance tools", "travel notes".
│
│   [Implementation]
│   Use Next.js App Router.
│   Use dynamic metadata, Open Graph image, structured Person schema,
│   featured content pulled from universal content model.
│
├── about
│   ├── page.tsx
│   │   [UX idea]
│   │   Main identity page: who you are, what you build, your interests,
│   │   values, background in economics/business analytics, volunteering,
│   │   Christian app/product interest, and tech stack.
│   │
│   │   [SEO strategy]
│   │   Rank for personal/professional searches and support trust across the site.
│   │
│   │   [Implementation]
│   │   Use Person schema.
│   │   Link to contact, now page, projects, GitHub, LinkedIn, support.
│   │
│   ├── now
│   │   [UX idea]
│   │   "What I am currently building/tracking/reading/watching/listening to."
│   │   Makes the site feel alive.
│   │
│   │   [SEO strategy]
│   │   Not mainly SEO; mainly retention and personality.
│   │
│   │   [Implementation]
│   │   Pull from config file or CMS collection.
│   │   Update monthly.
│   │
│   ├── timeline
│   │   [UX idea]
│   │   Interactive life/build timeline.
│   │
│   ├── uses
│   │   [UX idea]
│   │   Gear, software, dev setup, music gear, productivity stack.
│   │
│   │   [SEO strategy]
│   │   Can rank for "developer uses page", "Telecaster setup",
│   │   "student productivity setup", etc.
│   │
│   ├── stack
│   ├── values
│   └── contact
│
├── projects
│   [Mini-site identity]
│   A software/product portfolio site.
│   Someone landing here should think dew.codes is mainly about building apps.
│
│   [UX idea]
│   Project grid + "Memory Lane" chronological mode.
│   Include live demos, case studies, devlogs, changelogs, architecture notes.
│
│   [SEO strategy]
│   Each project should be a case-study page, not just a card.
│   Target searches like "student productivity RPG app", "NUS timetable app",
│   "diabetes community app case study", "Next.js portfolio project".
│
│   [Implementation]
│   Use SoftwareApplication / CreativeWork schema where relevant.
│   Each project should have screenshots, live demo, GitHub link, tech stack,
│   problem statement, build notes, roadmap, changelog.
│
│   ├── page.tsx
│   ├── liveling
│   │   ├── overview
│   │   ├── demo
│   │   ├── focus-timer
│   │   ├── rpg-system
│   │   ├── devlog
│   │   ├── changelog
│   │   ├── roadmap
│   │   ├── design-decisions
│   │   └── architecture
│   │       [UX idea]
│   │       Make Liveling feel like a living product, not just a school project.
│   │
│   │       [SEO strategy]
│   │       Target productivity, gamification, focus timer, habit RPG terms.
│   │
│   │       [Implementation]
│   │       Add demo mode without login first.
│   │       Later add user accounts only if retention exists.
│   │
│   ├── diabetes-connect
│   │   ├── overview
│   │   ├── problem
│   │   ├── ux-research
│   │   ├── screenshots
│   │   ├── architecture
│   │   └── learnings
│   │       [UX idea]
│   │       Strong case study: health/community/product thinking.
│   │
│   │       [SEO strategy]
│   │       Focus on product design, accessibility, community health app case study.
│   │
│   │       [Implementation]
│   │       Avoid giving medical advice.
│   │       Add health disclaimer if necessary.
│   │
│   ├── nuschedule
│   │   ├── overview
│   │   ├── demo
│   │   ├── module-planner
│   │   ├── architecture
│   │   ├── changelog
│   │   └── roadmap
│   │       [UX idea]
│   │       This can become one of your strongest Singapore/NUS traffic magnets.
│   │
│   │       [SEO strategy]
│   │       Target "NUS timetable planner", "NUS module planner",
│   │       "NUS schedule builder".
│   │
│   │       [Implementation]
│   │       Be careful with unofficial NUS data.
│   │       Cache data and show last-updated timestamp.
│   │
│   ├── experiments
│   │   ├── tiny-tools
│   │   ├── weekend-builds
│   │   ├── ai-experiments
│   │   ├── abandoned-projects
│   │   └── failed-experiments
│   │       [UX idea]
│   │       Shows taste and learning. Makes failure part of the brand.
│   │
│   └── open-source
│       ├── contributions
│       ├── github-dashboard
│       └── issue-board
│           [Implementation]
│           Use GitHub API for contribution stats and repos.
│
├── tools
│   [Mini-site identity]
│   A useful public toolbox.
│   Someone landing here should think dew.codes is a calculator/generator/tools site.
│
│   [UX idea]
│   This should become one of the highest-traction sections.
│   Tools are more shareable than blog posts.
│
│   [SEO strategy]
│   Every tool should have:
│   - descriptive title
│   - explanation
│   - actual working tool
│   - examples
│   - FAQ
│   - related tools
│   - shareable result card
│
│   [Implementation]
│   Use WebApplication or SoftwareApplication schema.
│   Tool inputs/outputs should be typed.
│   Build tool pages as reusable templates.
│
│   ├── page.tsx
│   ├── calculators
│   │   ├── nus-cap-planner
│   │   ├── gpa-calculator
│   │   ├── module-workload-estimator
│   │   ├── dca-calculator
│   │   ├── dividend-calculator
│   │   ├── risk-reward-calculator
│   │   ├── trip-budget-calculator
│   │   ├── habit-streak-calculator
│   │   └── music-practice-timer
│   │
│   ├── generators
│   │   ├── itinerary-generator
│   │   ├── packing-list-generator
│   │   ├── anime-recommendation-picker
│   │   ├── anime-watch-order-generator
│   │   ├── playlist-generator
│   │   ├── project-idea-generator
│   │   └── christian-app-idea-generator
│   │
│   ├── visualizers
│   │   ├── contribution-heatmap
│   │   ├── market-heatmap
│   │   ├── travel-map
│   │   ├── anime-season-board
│   │   ├── dive-depth-chart
│   │   └── learning-roadmap
│   │
│   └── share-cards
│       ├── anime-taste-card
│       ├── travel-style-card
│       ├── finance-style-card
│       ├── guitar-practice-card
│       └── builder-style-card
│           [UX idea]
│           Viral screenshot/share layer.
│
├── singapore
│   [Mini-site identity]
│   A Singapore student/builder resource site.
│   Someone landing here should think dew.codes is about Singapore student tools,
│   tech events, NUS life, productivity, and local guides.
│
│   [UX idea]
│   This gives the site local identity and search advantage.
│
│   [SEO strategy]
│   Target Singapore-specific queries:
│   "NUS module planner", "Singapore student budget food",
│   "Singapore coding cafes", "NUS study spots", "Singapore tech events".
│
│   [Implementation]
│   Use manually curated content first.
│   Add maps later.
│   Be clear when information may be outdated.
│
│   ├── page.tsx
│   ├── student-tools
│   │   ├── nus-module-planner
│   │   ├── nus-cap-planner
│   │   ├── study-spot-map
│   │   ├── internship-tracker
│   │   ├── scholarship-deadlines
│   │   └── budget-planner
│   │
│   ├── guides
│   │   ├── tech-events
│   │   ├── cafe-workspots
│   │   ├── budget-food
│   │   ├── weekend-ideas
│   │   ├── productivity-for-students
│   │   └── coding-communities
│   │
│   └── christian
│       ├── app-devlog
│       ├── prayer-tech
│       ├── church-tools
│       ├── faith-and-productivity
│       └── christian-student-resources
│           [UX idea]
│           This can connect to your Christian app direction.
│
│           [Implementation]
│           Keep it practical and respectful.
│           Avoid looking like you are trying to represent all churches.
│
├── writing
│   [Mini-site identity]
│   A blog/essay archive.
│   Someone landing here should think dew.codes is a personal publication.
│
│   [UX idea]
│   One writing hub for all posts across projects, travel, finance, anime/music.
│
│   [SEO strategy]
│   Use topic clusters and tags.
│   Let one post belong to multiple categories.
│   Add RSS feed.
│
│   [Implementation]
│   MDX or CMS.
│   Use BlogPosting/Article schema.
│   Generate reading time, table of contents, related posts.
│
│   ├── page.tsx
│   ├── blog
│   ├── essays
│   ├── notes
│   ├── devlogs
│   ├── market-notes
│   ├── travelogues
│   ├── book-notes
│   ├── learning-logs
│   └── newsletter
│       ├── archive
│       └── dew-dispatch
│           [UX idea]
│           Newsletter format:
│           1 thing I built,
│           1 chart I am watching,
│           1 travel note,
│           1 song/anime pick,
│           1 useful link.
│
├── collections
│   [Mini-site identity]
│   Curated starter packs.
│   Someone landing here should think dew.codes is a recommendation/curation site.
│
│   [UX idea]
│   Collections bundle tools, guides, posts, and dashboards into useful paths.
│
│   [SEO strategy]
│   Great for "starter pack" and "beginner guide" searches.
│
│   [Implementation]
│   Collections are just curated arrays of internal content IDs.
│
│   ├── page.tsx
│   ├── singapore-student-starter-pack
│   ├── japan-first-trip-kit
│   ├── anime-beginner-pack
│   ├── mandopop-guitar-pack
│   ├── finance-beginner-pack
│   ├── builder-toolbox
│   ├── christian-productivity-pack
│   └── kevin-favourites
│
├── travel
│   [Mini-site identity]
│   A travel guide, map, and field-notes site.
│   Someone landing here should think dew.codes is a travel site.
│
│   [UX idea]
│   Interactive globe/map, country guides, trip tools, galleries,
│   budgets, food maps, mistakes, flora/fauna, diving.
│
│   [SEO strategy]
│   Rank through practical evergreen pages:
│   "Japan first timer itinerary", "Japan student budget",
│   "trip budget calculator", "packing list generator".
│
│   [Implementation]
│   Use personal experience + actual costs + maps.
│   Avoid copying travel blogs.
│   Add last-updated date.
│   Use Article, BlogPosting, FAQPage, HowTo where appropriate.
│
│   ├── page.tsx
│   ├── map
│   ├── countries
│   │   ├── japan
│   │   │   ├── overview
│   │   │   ├── first-timer-guide
│   │   │   ├── 7-day-itinerary
│   │   │   ├── blog
│   │   │   ├── tips
│   │   │   ├── food
│   │   │   ├── budget
│   │   │   ├── transport
│   │   │   ├── mistakes
│   │   │   ├── gallery
│   │   │   ├── flora-and-fauna
│   │   │   ├── packing-list
│   │   │   └── anime-pilgrimage
│   │   │
│   │   ├── italy
│   │   │   ├── overview
│   │   │   ├── itinerary
│   │   │   ├── food
│   │   │   ├── budget
│   │   │   ├── gallery
│   │   │   └── mistakes
│   │   │
│   │   └── china
│   │       ├── overview
│   │       ├── itinerary
│   │       ├── food
│   │       ├── budget
│   │       ├── transport
│   │       └── gallery
│   │
│   ├── tools
│   │   ├── trip-cost-calculator
│   │   ├── packing-list-generator
│   │   ├── itinerary-builder
│   │   ├── exchange-rate-cheatsheet
│   │   ├── jetlag-planner
│   │   └── rail-pass-cost-checker
│   │
│   ├── diving
│   │   [Mini-site identity]
│   │   A diving logbook and underwater learning site.
│   │
│   │   [UX idea]
│   │   Depth chart, certification progress, dive logs, marine life guide,
│   │   safety notes, physics of diving.
│   │
│   │   [SEO strategy]
│   │   Rank for beginner diving terms and destination-specific dive logs.
│   │
│   │   [Implementation]
│   │   Avoid replacing formal diving instruction.
│   │   Add safety disclaimer.
│   │
│   │   ├── overview
│   │   ├── logbook
│   │   ├── dive-sites
│   │   ├── certification-progress
│   │   ├── depth-chart
│   │   ├── physics
│   │   ├── safety-notes
│   │   ├── gear
│   │   ├── marine-life
│   │   └── photo-gallery
│   │
│   └── field-guide
│       ├── plants
│       ├── animals
│       ├── birds
│       ├── marine-life
│       └── identification-notes
│
├── finance
│   [Mini-site identity]
│   A personal market research and finance tools site.
│   Someone landing here should think dew.codes is a finance dashboard/research site.
│
│   [UX idea]
│   Market dashboards, personal watchlists, commodity trackers,
│   quant toys, beginner explainers.
│
│   [SEO strategy]
│   Prefer evergreen educational/tool pages over market predictions:
│   "DCA calculator", "risk reward calculator", "uranium explained",
│   "portfolio simulator", "commodity dashboard".
│
│   [Implementation]
│   Add financial disclaimer everywhere.
│   Show data source, methodology, assumptions, last updated date.
│   Avoid presenting anything as investment advice.
│
│   ├── page.tsx
│   ├── dashboard
│   ├── market-outlook
│   │   ├── weekly
│   │   ├── monthly
│   │   ├── energy
│   │   ├── uranium
│   │   ├── base-metals
│   │   ├── rates
│   │   ├── singapore
│   │   └── watchlist
│   │
│   ├── sectors
│   │   ├── energy
│   │   ├── uranium
│   │   ├── base-metals
│   │   ├── semiconductors
│   │   ├── infrastructure
│   │   ├── singapore-reits
│   │   └── commodities
│   │
│   ├── dashboards
│   │   ├── macro-dashboard
│   │   ├── commodity-dashboard
│   │   ├── equity-watchlist
│   │   ├── dividend-tracker
│   │   ├── portfolio-simulator
│   │   └── correlation-matrix
│   │
│   ├── quant-tools
│   │   ├── backtester
│   │   ├── factor-screener
│   │   ├── moving-average-lab
│   │   ├── volatility-lab
│   │   ├── drawdown-visualizer
│   │   ├── monte-carlo-simulator
│   │   └── position-sizing-calculator
│   │
│   ├── explainers
│   │   ├── economics
│   │   ├── business-analytics
│   │   ├── commodities
│   │   ├── valuation
│   │   ├── risk
│   │   └── how-to-read-earnings
│   │
│   ├── notes
│   │   ├── weekly-market-notes
│   │   ├── earnings-notes
│   │   ├── macro-notes
│   │   └── reading-list
│   │
│   ├── glossary
│   └── disclosures
│
├── entertainment
│   [Mini-site identity]
│   A music/anime/games discovery and curation site.
│   Someone landing here should think dew.codes is a culture recommendation site.
│
│   [UX idea]
│   Make it interactive: dashboards, tier lists, recommendation pickers,
│   release calendars, song breakdowns.
│
│   [SEO strategy]
│   Target long-tail entertainment searches:
│   "anime watch order", "J-pop starter pack", "Mandopop guitar chords",
│   "anime recommendations by mood".
│
│   [Implementation]
│   Use APIs where possible.
│   For anime, prefer AniList GraphQL or Jikan.
│   For music, Spotify Web API is useful, but design fallbacks because
│   third-party API access can change.
│
│   ├── page.tsx
│   ├── music
│   │   [Mini-site identity]
│   │   A J-pop/Mandopop/guitar discovery site.
│   │
│   │   ├── dashboard
│   │   ├── news
│   │   ├── release-calendar
│   │   ├── jpop
│   │   │   ├── artist-index
│   │   │   ├── new-releases
│   │   │   ├── starter-pack
│   │   │   ├── playlists
│   │   │   ├── song-rankings
│   │   │   └── concert-tracker
│   │   │
│   │   ├── mandopop
│   │   │   ├── starter-pack
│   │   │   ├── chord-friendly-songs
│   │   │   ├── artist-guides
│   │   │   └── playlists
│   │   │
│   │   ├── guitar
│   │   │   ├── chord-library
│   │   │   ├── strumming-patterns
│   │   │   ├── songbook
│   │   │   ├── telecaster-tones
│   │   │   ├── acoustic-arrangements
│   │   │   ├── practice-log
│   │   │   └── beginner-path
│   │   │
│   │   ├── playlists
│   │   ├── artist-guides
│   │   └── song-breakdowns
│   │
│   ├── anime
│   │   [Mini-site identity]
│   │   An anime discovery, tracking, and recommendation site.
│   │
│   │   [UX idea]
│   │   Seasonal dashboard, reviews, tier list, recommendation picker,
│   │   studio tracker, OP/ED rankings.
│   │
│   │   [SEO strategy]
│   │   "Anime picker", "anime recommendations by mood",
│   │   "anime watch order", "seasonal anime guide".
│   │
│   │   [Implementation]
│   │   AniList is GraphQL-based and lets the client ask for the exact shape
│   │   of anime/manga data needed, reducing over-fetching.
│   │   Jikan is an unofficial MyAnimeList API and should be rate-limited
│   │   and cached carefully.
│   │
│   │   ├── dashboard
│   │   ├── news
│   │   ├── seasonal
│   │   ├── reviews
│   │   ├── tier-list
│   │   ├── recommendations
│   │   ├── watch-order-guides
│   │   ├── studio-tracker
│   │   ├── character-index
│   │   ├── opening-ending-rankings
│   │   └── suggestion-box
│   │
│   └── games
│       ├── backlog
│       ├── reviews
│       ├── tier-list
│       └── cozy-games
│
├── lab
│   [Mini-site identity]
│   A public experiment lab.
│   Someone landing here should think dew.codes is a builder/research lab.
│
│   [UX idea]
│   Messy but intentional space for prototypes, failed ideas,
│   API experiments, AI tools, UI experiments, and data projects.
│
│   [SEO strategy]
│   Not everything here needs to rank.
│   Some pages can be noindexed if they are rough.
│
│   [Implementation]
│   Useful for staging ideas before moving them into /projects or /tools.
│
│   ├── page.tsx
│   ├── ai
│   ├── data
│   ├── scraping-notes
│   ├── api-experiments
│   ├── ui-experiments
│   ├── failed-experiments
│   └── tiny-builds
│
├── community
│   [Mini-site identity]
│   Lightweight interaction layer.
│   Someone landing here should think dew.codes has a small community.
│
│   [UX idea]
│   Polls, guestbook, suggestions, votes, recommendations.
│
│   [SEO strategy]
│   Mostly retention and user-generated engagement, not core SEO.
│
│   [Implementation]
│   Moderate submissions.
│   Add spam protection.
│   Do not overbuild accounts too early.
│
│   ├── guestbook
│   ├── polls
│   ├── suggestions
│   ├── ask
│   ├── anime-submissions
│   ├── music-submissions
│   ├── travel-tips
│   └── project-voting
│
├── support
│   [Mini-site identity]
│   A support/donation/transparency page.
│
│   [UX idea]
│   Gamified support tiers:
│   coffee, server hosting, guitar strings, API bills, project sponsor.
│
│   [SEO strategy]
│   Not mainly SEO.
│   It builds trust and gives loyal visitors a way to support.
│
│   [Implementation]
│   Link to donation provider.
│   Show transparent monthly costs.
│   Use alias like beer@dew.codes or support@dew.codes.
│
│   ├── donate
│   ├── wall
│   ├── tiers
│   ├── wishlist
│   └── transparency
│
├── contact
│   [UX idea]
│   Routing page:
│   collaborate, bug report, correction, finance feedback,
│   anime/music recommendation, travel suggestion, security report.
│
│   [SEO strategy]
│   Helps trust and professional conversion.
│
│   [Implementation]
│   Use email aliases:
│   hello@dew.codes
│   contact@dew.codes
│   projects@dew.codes
│   support@dew.codes
│   beer@dew.codes
│   corrections@dew.codes
│   press@dew.codes
│   finance@dew.codes
│   travel@dew.codes
│   music@dew.codes
│   anime@dew.codes
│   security@dew.codes
│
├── search
│   [UX idea]
│   Global search and command palette.
│
│   [SEO strategy]
│   Internal discoverability.
│
│   [Implementation]
│   Use local search index first.
│   Later use Algolia, Typesense, Meilisearch, or Postgres full-text search.
│
├── tags
│   ├── nextjs
│   ├── singapore
│   ├── nus
│   ├── japan
│   ├── anime
│   ├── jpop
│   ├── mandopop
│   ├── guitar
│   ├── uranium
│   ├── travel
│   ├── productivity
│   └── christian
│
├── data-sources
│   [UX idea]
│   Public transparency page for where live data comes from.
│
│   [SEO strategy]
│   Trust-building, especially for finance/anime/music dashboards.
│
│   [Implementation]
│   List data source, refresh interval, limitations, attribution.
│
│   ├── anime
│   ├── music
│   ├── finance
│   ├── github
│   ├── travel
│   └── maps
│
├── legal
│   ├── privacy
│   ├── terms
│   ├── cookie-policy
│   ├── affiliate-disclosure
│   ├── financial-disclaimer
│   ├── health-disclaimer
│   ├── diving-disclaimer
│   ├── ai-disclosure
│   ├── data-sources
│   ├── attribution
│   └── corrections
│
└── api
    [Implementation]
    Internal route handlers for cached data, form submissions,
    OG image generation, search indexing, and scheduled refreshes.
    Keep secrets server-side only.
    
    ├── health
    ├── github
    ├── finance
    ├── anime
    ├── music
    ├── travel
    ├── search
    ├── sitemap
    ├── og
    └── revalidate
```

---

# Part 2: The "Each Branch Is Its Own Website" Rule

This is important. Your site should not feel like one chaotic personal homepage with many tabs.

Each major branch needs a mini-site experience.

## `/projects` should feel like:

> "A software builder's portfolio and product lab."

Needs:

```txt
Hero
Featured projects
Live demos
Case studies
Tech stack filters
Devlog feed
GitHub stats
Project roadmap
```

## `/tools` should feel like:

> "A useful web tools site."

Needs:

```txt
Tool categories
Search
Popular tools
Recently updated tools
Shareable results
FAQ under each tool
```

## `/travel` should feel like:

> "A travel guide and digital field notebook."

Needs:

```txt
Map
Country cards
Itineraries
Budgets
Photos
Packing lists
Mistakes
Travel tools
```

## `/finance` should feel like:

> "A personal finance research dashboard."

Needs:

```txt
Market dashboard
Watchlist
Calculators
Explain articles
Sector pages
Disclaimers
Data source transparency
```

## `/entertainment/anime` should feel like:

> "An anime discovery site."

Needs:

```txt
Seasonal board
Recommendation picker
Reviews
Tier lists
Watch-order guides
Studio tracker
Suggestion box
```

## `/entertainment/music` should feel like:

> "A music discovery and guitar-learning site."

Needs:

```txt
Release dashboard
J-pop starter packs
Mandopop guitar library
Chord tools
Practice log
Artist guides
Playlists
```

## `/singapore` should feel like:

> "A Singapore student/builder resource site."

Needs:

```txt
NUS tools
Study spots
Internship tracker
Coding cafes
Tech events
Student budget guides
Christian student/productivity resources
```

This is how you make visitors feel like they landed on a full site, not a random subsection.

---

# Part 3: Technical Implementation Considerations

## 1. Use Next.js App Router as the core architecture

This project fits the Next.js App Router well because you'll have many nested routes, dynamic pages, metadata, server components, API route handlers, generated sitemaps, and Open Graph images.

Next.js officially supports `generateMetadata()` for dynamic metadata such as page titles, descriptions, Open Graph data, and other SEO/share metadata in App Router pages. It also supports sitemap metadata files such as `sitemap.ts`, which fits your need to generate routes automatically as the site grows.

Suggested structure:

```txt
app/
├── layout.tsx
├── page.tsx
├── sitemap.ts
├── robots.ts
├── opengraph-image.tsx
├── about/
├── projects/
├── tools/
├── singapore/
├── writing/
├── collections/
├── travel/
├── finance/
├── entertainment/
├── lab/
├── community/
├── support/
├── legal/
└── api/
```

Use route groups if you want cleaner internal organization:

```txt
app/
├── (main)/
├── (tools)/
├── (content)/
├── (dashboards)/
└── api/
```

---

## 2. Universal Content Model

You need one shared content model across the whole site.

This lets you power:

```txt
Search
Tags
Related posts
Sitemaps
RSS
OG images
Breadcrumbs
Content cards
Collections
```

Example:

```ts
export type DewContent = {
  id: string
  title: string
  slug: string
  path: string
  description: string
  category:
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

  tags: string[]
  datePublished: string
  dateUpdated: string
  status: "draft" | "published" | "archived"
  featured: boolean
  miniSite?: "projects" | "tools" | "travel" | "finance" | "anime" | "music" | "singapore"
  readingTime?: number
  sourceLinks?: string[]
  relatedPages?: string[]
  canonicalUrl?: string
}
```

Tool model:

```ts
export type DewTool = DewContent & {
  toolType: "calculator" | "generator" | "dashboard" | "visualizer"
  inputSchema: Record<string, unknown>
  outputSchema: Record<string, unknown>
  dataSources?: string[]
  shareCardEnabled?: boolean
}
```

Project model:

```ts
export type DewProject = DewContent & {
  projectStatus: "idea" | "building" | "launched" | "paused" | "archived"
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  screenshots?: string[]
  changelog?: ChangelogEntry[]
}
```

Travel model:

```ts
export type TravelEntry = DewContent & {
  country: string
  city?: string
  coordinates?: [number, number]
  visitedDates?: string[]
  budgetRange?: string
  travelStyleTags: string[]
  gallery?: ImageAsset[]
}
```

Finance model:

```ts
export type FinancePage = DewContent & {
  dataSources: string[]
  disclaimerRequired: true
  lastDataRefresh?: string
  methodology?: string
  assumptions?: string[]
}
```

---

## 3. Metadata, SEO, and Schema

Every page should generate its own metadata.

Use:

```ts
generateMetadata()
```

For:

```txt
Title
Description
Canonical URL
Open Graph title
Open Graph image
Twitter card
Robots rules
```

Use schema by page type:

```txt
/about                         Person
/projects/[slug]               SoftwareApplication / CreativeWork
/tools/[slug]                  WebApplication / SoftwareApplication
/writing/[slug]                Article / BlogPosting
/travel/[country]/blog/[slug]  BlogPosting
/travel/[country]/tips         FAQPage / HowTo
/finance/tools/[slug]          WebApplication
/finance/explainers/[slug]     Article
/music/guitar/[slug]           HowTo
/anime/reviews/[slug]          Review
/support                       WebPage
```

Each mini-site should also have its own landing metadata.

Example:

```txt
/projects
Title: Projects — dew.codes
Description: Software projects, product experiments, and build logs by Kevin Yong.

/finance
Title: Finance Tools and Market Notes — dew.codes
Description: Personal finance dashboards, calculators, and market research notes.

/travel
Title: Travel Guides and Field Notes — dew.codes
Description: Travel itineraries, budget tools, galleries, and field notes.
```

---

## 4. Dynamic Breadcrumbs

Use breadcrumbs everywhere.

Example:

```txt
Home > Travel > Japan > Budget
Home > Entertainment > Anime > Watch Order Guides
Home > Finance > Quant Tools > Backtester
```

Why it matters:

```txt
User orientation
Internal linking
SEO crawl structure
More polished mini-site feel
```

---

## 5. Internal Search and Command Palette

Because your site will become broad, search is not optional.

Add:

```txt
/search
Cmd + K command palette
```

Search filters:

```txt
Type: project / tool / article / country / anime / finance note
Topic
Tag
Last updated
Difficulty
Popularity
Mini-site
```

Start simple:

```txt
Static JSON search index generated at build time
```

Later upgrade to:

```txt
Algolia
Meilisearch
Typesense
Postgres full-text search
```

---

## 6. API Strategy

Use APIs first. Scrape only when necessary.

### Anime

Use:

```txt
AniList GraphQL API
Jikan API
RSS/news sources where legal
```

AniList is GraphQL-based, so your app can request exactly the anime/manga fields it needs rather than pulling fixed REST responses. Jikan is an unofficial MyAnimeList API, so treat it as convenient but not authoritative or guaranteed. Cache responses and avoid aggressive polling.

Implementation notes:

```txt
Cache seasonal anime data
Refresh daily or weekly
Store normalized anime IDs
Show source attribution
Avoid hammering APIs
Have fallback UI if API fails
```

### Music

Use:

```txt
Spotify Web API
Manual playlists
RSS feeds
MusicBrainz or other metadata sources if needed
```

Because platform API access can change, design your music section so it still works with manually curated playlists and static content if an endpoint becomes limited.

Implementation notes:

```txt
Do not depend fully on Spotify for your entire music section
Keep manual J-pop/Mandopop starter packs
Cache album/artist data
Attribute sources
Use fallback images and metadata
```

### Finance

Use:

```txt
Finance API provider
Static CSV uploads
Manual research notes
Public economic data sources
```

Implementation notes:

```txt
Cache aggressively
Show last updated time
Show data provider
Show methodology
Never present as financial advice
Add disclaimer to every finance page
```

### GitHub

Use:

```txt
GitHub API
Static GitHub stats where possible
```

Implementation notes:

```txt
Cache contribution data
Avoid making GitHub API calls on every page load
Use ISR/revalidation
```

---

## 7. Scraping Rules

Use scraping only if:

```txt
No API exists
robots.txt allows it
You are not bypassing login/paywalls
You rate-limit
You cache
You transform the data into original analysis/tooling
You attribute the source
```

Never:

```txt
Bypass paywalls
Scrape private/authenticated content
Republish full articles
Hammer sites repeatedly
Copy content directly
```

Better approach:

```txt
Use RSS feeds
Store title, source, URL, timestamp
Write your own summary/commentary
Generate charts or dashboards from allowed data
```

---

## 8. Data Freshness System

Every dynamic page should show:

```txt
Last updated
Data source
Refresh interval
Known limitations
```

---

## 9. Legal Pages and Disclaimers

You should include:

```txt
/legal/privacy
/legal/terms
/legal/cookie-policy
/legal/affiliate-disclosure
/legal/financial-disclaimer
/legal/health-disclaimer
/legal/diving-disclaimer
/legal/ai-disclosure
/legal/data-sources
/legal/attribution
/legal/corrections
```

---

## 10. Monetisation Strategy

### Phase 1: Support

Tiers:

```txt
S$3  Coffee
S$7  Server hosting
S$12 Guitar strings
S$25 API bills
S$50 Project sponsor
```

### Phase 2: Affiliate links

Good fit: travel gear, books, developer tools, music/guitar gear, diving gear.
Bad fit: shady finance referrals, overhyped investing platforms, low-quality merch spam.

### Phase 3: Premium assets

Travel planning templates, student productivity templates, finance spreadsheets, guitar practice trackers, project planning templates.

### Phase 4: Sponsorship

Newsletter sponsors, tool sponsors, supporter wall, project sponsors.

---

## 11. Email Alias Strategy

```txt
hello@dew.codes          General visitors
contact@dew.codes        Professional contact
projects@dew.codes       Collaboration/project inquiries
support@dew.codes        Support issues
beer@dew.codes           Fun support alias
corrections@dew.codes    Corrections and source issues
press@dew.codes          Media/future-proofing
finance@dew.codes        Finance feedback
travel@dew.codes         Travel tips/collabs
music@dew.codes          Music submissions
anime@dew.codes          Anime suggestions
security@dew.codes       Security reports
```

---

## 12. Design System

Core style: clean, readable, soft shadows, rounded cards, dashboard-like, personal but not childish.

Branch identities:

```txt
Projects: terminal/product/lab feel
Tools: utility/dashboard feel
Travel: map/photo/field-note feel
Finance: charts/data/research feel
Music: playlist/fretboard feel
Anime: seasonal board/tier list feel
Singapore: practical/local guide feel
Christian: calm, respectful, reflective
```

Important components:

```txt
MiniSiteHero
ContentCard
ToolCard
Breadcrumbs
TagPills
LastUpdatedBadge
SourceBadge
DisclaimerBanner
RelatedContent
ShareCardGenerator
CommandPalette
MiniSiteNav
```

---

## 13. Analytics and Growth

Track tool usage, result shares, search queries, newsletter signups, support clicks, most-used filters, pages with high exit rate.

---

# Part 4: Content and Product Flywheel

```txt
Build a tool
Write a devlog
Turn tool output into share card
Add related guide
Add to collection
Mention in newsletter
Improve based on analytics
```

---

# Part 5: MVP That Can Grow Into the Full Tree

MVP goal: launch dew.codes as a useful personal internet OS with three working tools, three strong project pages, one travel guide, one finance calculator, one entertainment tool, and a living homepage.

## MVP sitemap

```txt
/
├── about
│   └── now
│
├── projects
│   ├── liveling
│   ├── diabetes-connect
│   └── nuschedule
│
├── tools
│   ├── nus-cap-planner
│   ├── trip-budget-calculator
│   └── anime-picker
│
├── singapore
│   └── student-tools
│       └── nus-cap-planner
│
├── travel
│   └── countries
│       └── japan
│           ├── first-timer-guide
│           ├── budget
│           └── gallery
│
├── finance
│   ├── dca-calculator
│   └── market-outlook
│
├── entertainment
│   ├── anime
│   │   └── recommendations
│   └── music
│       └── guitar
│           └── strumming-patterns
│
├── writing
│   ├── devlogs
│   └── notes
│
├── support
├── contact
└── legal
    ├── privacy
    ├── terms
    ├── financial-disclaimer
    └── attribution
```

---

# Part 6: What to Defer Until Later

Do not build these immediately:

```txt
User accounts
Full community system
Full finance dashboard
Full 3D globe
Full anime database
Full music release automation
Complex CMS
Paid premium products
Large-scale scraping system
```

Build static/manual first, automate later.

---

# Part 7: Best Version of the Strategy

The winning version of dew.codes is not a personal website with many interests. It is a network of useful mini-sites connected by one personal brand.

Strongest branches for traction:

```txt
1. /tools
2. /singapore
3. /projects
4. /travel
5. /entertainment/anime
6. /finance
7. /entertainment/music
```

Strongest long-term moat:

```txt
Your own tools
Your own data
Your own notes
Your own travel logs
Your own project history
Your own taste graph
Your own Singapore/NUS perspective
Your own Christian/productivity app journey
```

> **Make every section useful to strangers, but unmistakably yours.**
