# dew.codes — Ideation

> This document captures the full long-term vision, feature ideas, and content directions for dew.codes.
> It is a living document. Ideas here are not commitments. They are possibilities.
> When something here moves from "idea" to "building", move it into the implementation plan.

---

## The Big Idea

`dew.codes` is a personal internet OS. The goal is not to present Kevin Yong. The goal is to make something useful enough that strangers come back, share it, and eventually care about who built it.

The brand is built through the work, not through the about page.

The long-term vision is a network of mini-sites that:
- Help NUS students with timetables, CAP planning, internship tracking
- Help travelers plan Japan/Italy/China trips with real costs
- Help anime fans discover what to watch next
- Help beginner investors understand markets without getting burned
- Help guitar beginners learn Mandopop and J-pop chords
- Help developers find useful tools and see real case studies

All of this under one roof. All of it connected by one content model, one search layer, one design system, one person's taste and perspective.

---

## Section-by-Section Ideation

### Homepage

The homepage should feel like a command center, not a landing page.

Ideas:
- Live "now playing" widget (Spotify or manual) in the corner
- Animated typing effect that cycles through: "builder", "traveler", "investor", "guitarist", "anime fan"
- A grid of glowing cards, each leading to a mini-site
- A "random tool" button that drops you somewhere useful
- A public changelog / build log feed at the bottom ("last shipped: anime picker, 3 days ago")
- A small "what I'm thinking about" section that updates weekly
- Dark mode by default with a light mode toggle

---

### /about

Ideas:
- ASCII art or minimal line portrait
- A "tech stack as a story" — not a badge dump, but a narrative of how the stack evolved
- A "things I believe" section (builder principles, not generic platitudes)
- A "projects I abandoned and why" section — honesty as brand
- A "books that changed how I think" mini-shelf
- Christian section: brief, grounded, not preachy. Something like: "I build things partly because I think creation is meaningful. Here's how that connects to the rest of what I do."
- A section on volunteering history and why it matters to the work

#### /about/now

Format idea (updated monthly):
```
Building: [current project]
Reading: [current book]
Watching: [current anime/show]
Listening to: [current album/artist]
Thinking about: [one idea]
Next trip: [destination, if planned]
```

---

### /projects

Ideas:
- "Memory Lane" mode: chronological timeline view of every project, including abandoned ones
- Status badges: Idea / Building / Launched / Paused / Archived / Failed
- "What I'd do differently" section on each project — honest retrospective
- Tech stack visualizer: which stack combos appear most across projects
- Public project roadmaps with checkboxes (so visitors can see what's coming)
- A "how long did this take" field on each project

#### Liveling (student productivity RPG)
- Demo mode that works without login
- Gamified focus timer with XP system
- Habit tracking with RPG character progression
- Later: multi-platform (iOS/Android if retention proves out)
- Devlog that documents the actual build, not a polished retrospective

#### Diabetes Connect
- Strong case study focus: problem, research, design, build, learnings
- Emphasize the community and accessibility thinking
- Health disclaimer throughout
- This project demonstrates product thinking, not just engineering

#### NUSschedule
- The strongest SEO play in the projects section
- A live, maintained tool — not just a case study
- Show real module data with clear "unofficial" labeling
- Cache data aggressively, show last-updated prominently

---

### /tools

The most important section for traffic and shareability.

Ideas:
- A "random tool" landing that picks a tool at random
- Tool "completions" counter (how many times a tool has been used)
- "Suggested by community" badge on tools that came from /community/suggestions
- Tool of the week feature on the homepage

#### Share Cards
The share card system is the viral layer of the tools section.

Each major tool should have a share card that the user can screenshot and post. Examples:
- Anime Taste Card: shows top genres, favorite studios, rating distribution
- Travel Style Card: shows countries visited, travel persona (backpacker / comfort / adventure), next destination
- Finance Style Card: shows investing philosophy, sectors tracked, time horizon
- Builder Style Card: shows languages used, projects shipped, stack fingerprint
- Guitar Practice Card: shows practice streak, songs learned, chord mastery level

These should be beautiful and instantly recognizable as dew.codes branded.

#### Calculator Ideas (not yet in tree)
- FIRE number calculator (how much to retire early at current savings rate)
- Singapore CPF simulator
- University ROI calculator (cost vs expected salary, SG-specific)
- Carbon footprint calculator for a trip
- "How many guitar practice sessions to learn this song" estimator

#### Generator Ideas (not yet in tree)
- Study schedule generator (given mods + exams, generate a revision timetable)
- "What anime fits my mood right now" generator
- Japan itinerary generator based on days + interests + budget
- Christian app idea generator (for builders interested in faith-tech)

---

### /singapore

The local moat. No other personal site has this kind of Singapore-specific depth.

Ideas:
- NUS Study Spot Map: interactive map with crowd ratings, wifi quality, plug availability, noise level
- "Best budget meals near NUS" — updated with real prices
- Singapore tech event calendar (aggregated from Eventbrite, meetup.com, company blogs)
- "Coding cafes in Singapore" — a real curated list with opening hours, plug count, wifi speed
- Internship tracker: deadlines, companies, tips from past applicants
- Scholarship deadlines calendar

#### /singapore/christian

Ideas:
- Christian tech builder community in Singapore — does it exist? Start one.
- Prayer app devlog: document building a simple prayer/devotional app
- "Faith and productivity" — not motivational fluff, but practical: sabbath rest, work rhythms, creative calling
- Church tools: simple things churches need that don't exist yet (volunteer scheduling, sermon notes, etc.)
- Christian student resources: campus fellowships, retreats, recommended reading

---

### /travel

The field notebook. Real costs. Real mistakes. Real photos.

Ideas:
- An interactive globe showing visited countries (highlight on hover, click to go to country page)
- "Total trip cost" breakdown on every country page: flights, accommodation, food, transport, activities, souvenirs
- "Mistakes I made" section on every country page — this is the most shareable travel content
- "Best meal I had" section with photo and cost
- A "planning vs reality" section: what I expected vs what it was actually like
- Packing list generator that generates a list based on: destination, duration, season, activity type
- Jetlag planner: given your flight schedule, when should you sleep/wake before departure and after arrival

#### Japan (deepest content cluster)
- Anime pilgrimage guide: real locations from anime, how to get there, what it's like
- IC card guide for tourists (Suica, Pasmo — which to get, how to load, where it works)
- Japan budget breakdown by city: Tokyo vs Osaka vs Kyoto vs rural
- "Day trip from Tokyo" planner
- Japan rail pass cost checker: given your itinerary, is the JR Pass actually worth it?

#### Diving
- Personal dive logbook (public version, sanitized)
- Depth chart showing certification progress (Open Water → Advanced → Rescue → Divemaster)
- Marine life identification guide for SEA dive sites
- Physics of diving: why you equalize, what narcosis is, what decompression sickness is — explained clearly without being a textbook
- Safety notes: clear disclaimer that this is not instruction, but useful companion knowledge

---

### /finance

The research dashboard. Trustworthy and transparent.

Ideas:
- A "what I'm watching" watchlist updated weekly
- Uranium section: track uranium spot price, major producers, thesis notes
- Commodity supercycle tracker: are we in one, what does the data say
- A simple "market mood" indicator: based on VIX, yield curve, credit spreads
- Earnings calendar for tracked companies
- A "worst trades I've made" section — honesty builds credibility in finance
- Singapore REIT tracker: DPU yield, gearing ratio, property type breakdown

#### Quant Tools
- Monte Carlo simulator: run N simulations of a portfolio over T years with given return/volatility assumptions
- Backtester: given a simple rule (e.g., "buy when 50MA crosses 200MA"), how has it performed historically?
- Drawdown visualizer: given a portfolio, show max drawdown, recovery time, worst periods

#### Explainers
- "How to read an earnings report" — step by step, with a real example
- "What is the yield curve and why does inversion matter"
- "Uranium 101" — why it matters, what drives the price, who the players are
- "REITs in Singapore for beginners"
- "What is DCA and when does it make sense"

---

### /entertainment/anime

The discovery layer.

Ideas:
- Seasonal anime board: a grid of current-season shows with status (airing, completed, not started), user rating, and notes
- "Anime for people who don't watch anime" recommendation path
- Watch order guides for complex franchises (Fate, Gundam, Monogatari)
- Studio tracker: which studios are producing what, track record, upcoming releases
- Opening/ending rankings: personal rankings with embed links
- Suggestion box: visitors can suggest anime, upvote suggestions, see what's on the watchlist
- "Anime by mood" generator: feeling melancholic? action-hungry? cozy?

---

### /entertainment/music

The ear and the fretboard.

Ideas:
- J-pop artist index: curated, not exhaustive. Personal picks with brief write-ups.
- Mandopop chord-friendly song list: songs that beginners can play on guitar
- Telecaster tone guide: settings, pedal chain, examples for different genres
- Practice log: public version showing what was practiced, for how long, what improved
- Concert tracker: upcoming J-pop/Mandopop concerts in Singapore + Asia
- "Gateway artists" guides: "if you like this Western artist, try this J-pop artist"

---

### /lab

The playground. No polish required.

Ideas:
- AI experiments: Claude API toys, GPT wrappers, local model experiments
- Web scraping experiments: with clear methodology and legal notes
- UI experiments: interesting interactions, animations, design patterns
- Data art: visualizations made from personal data (listening history, commit graph, travel map)
- "Things I tried and abandoned" — archive of failed experiments with notes on why they failed

---

### /community

Light touch. No over-engineering.

Ideas:
- Guestbook with location display (city/country, not precise)
- Polls: "what should I build next?" — visible results, updated weekly
- Anime suggestion box: submit an anime, see the queue, upvote others' suggestions
- Music submissions: suggest a J-pop or Mandopop song for the chord library
- Travel tips: visitors can submit tips for countries I've visited
- Project voting: which project feature should I build next?

No accounts. No login. Spam protection via rate limiting and honeypot fields.

---

### /support

Transparent and personal.

Ideas:
- Animated support tier cards (like a game item shop)
- Real-time supporter count (not amount, just count — privacy-respecting)
- "What your support funds" breakdown: show the actual monthly costs
- Wishlist: specific things a sponsor could fund (new API access, domain renewal, guitar strings for the next chord tutorial)
- Thank-you wall: names or pseudonyms of supporters, opt-in

---

## Content Flywheel Ideas

Scenarios for how one effort becomes many assets:

**Scenario A: NUS CAP Planner**
- Build tool → `/tools/calculators/nus-cap-planner`
- Write devlog → `/writing/devlogs/building-nus-cap-planner`
- Generate share card → NUS CAP summary card, shareable on Instagram/Telegram
- Add to collection → Singapore Student Starter Pack
- Mention in newsletter → Dew Dispatch issue 3
- Track most-used features → add semester comparison feature
- Singapore students share it → organic traffic from NUS Telegram groups

**Scenario B: Anime Picker**
- Build generator → `/tools/generators/anime-recommendation-picker`
- Generate share card → "My anime taste" shareable card
- Write guide → `/entertainment/anime/recommendations`
- Add to collection → Anime Beginner Pack
- Suggest-box submissions improve the data → community loop
- Track most-selected genres → update recommendation logic

**Scenario C: Japan First-Timer Guide**
- Write guide → `/travel/countries/japan/first-timer-guide`
- Build related tool → `/tools/calculators/trip-budget-calculator`
- Add packing list → `/travel/countries/japan/packing-list`
- Generate share card → "My Japan trip budget" card
- Add to collection → Japan First Trip Kit
- Mention in newsletter → Dew Dispatch travel issue
- Real costs + honesty → ranks for "japan first timer budget" searches

---

## Long-Term Moat Ideas

Things that would make dew.codes hard to replicate:

- **Your own data**: actual costs from actual trips, actual CAP grades, actual portfolio returns (disclosed appropriately)
- **Your own taste graph**: a machine-readable representation of your anime, music, book, and game preferences — eventually powerable by recommendation AI
- **The Singapore lens**: no other personal site has this depth of Singapore-specific student/builder tools
- **The Christian builder angle**: a niche that is underserved in tech — faith + product thinking + community tools
- **The devlog archive**: years of build logs create a unique historical record that cannot be copied
- **The failed experiments archive**: public failure is rare and memorable. It builds trust.

---

## Things to Revisit Later

These are ideas that are too early now but worth revisiting:

- A dew.codes Discord or Telegram community (only if there's an audience that wants it)
- A proper newsletter with subscriber count > 500
- Podcast or video devlog format (once written content is established)
- A mobile app version of the NUS tools (if demand exists)
- A Christian tech builder community platform (if the /singapore/christian section gets traction)
- Open-sourcing the dew.codes site itself as a template (much later, when it's worth showing)
- A job board or internship board for Singapore students (if the singapore section gets traction)
- Collaborations with other Singapore builders (cross-linking, joint projects)

---

## What Success Looks Like (1 Year)

- 3 tools that get shared regularly in Singapore student Telegram/Reddit groups
- /travel/countries/japan pages ranking for at least 5 relevant search terms
- /finance section trusted enough that readers share it without caveats
- /entertainment/anime recommendation picker used weekly by at least a few hundred people
- Newsletter with at least 200 subscribers who actually read it
- At least one piece of content that went modestly viral (1000+ views from one source)
- The site feels alive: new content every week, tools improving, devlogs updating

---

## The Line to Come Back To

> **Make every section useful to strangers, but unmistakably yours.**
