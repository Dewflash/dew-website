# dew.codes — Rationale

> This document explains the thinking behind the architecture in plain English.
> It is not a build instruction. It is context for understanding why decisions were made.
> Read this once before diving into code. Return to it when something feels confusing.

---

## Why This Is Not a Normal Portfolio Site

Most personal sites are a list of projects, an about page, and a blog. They feel like a LinkedIn profile in website form. The visitor looks at it, decides whether to hire or not, and leaves. There is nothing to come back to.

`dew.codes` is built on a different premise: what if each section was genuinely useful to strangers who have no idea who Kevin Yong is?

A stranger who needs a DCA calculator should be able to land on `/finance/dca-calculator`, use it, and find it helpful — without knowing anything about the person who built it. A stranger who is planning a first trip to Japan should land on `/travel/countries/japan/first-timer-guide` and find it the most honest, cost-transparent, experience-accurate guide they have read — not a generic travel blog copy.

If each section is genuinely useful to strangers, the site earns traffic, trust, and return visitors. The personal brand follows naturally. You do not build a brand by saying who you are. You build it by making things people find valuable.

---

## Why Each Branch Is Treated Like Its Own Mini-Site

Because that is actually what it is.

When a person lands on `/finance`, they did not come through your homepage. They came from a search result, a shared link, or a recommendation. They have zero context about the rest of the site. If the `/finance` landing page looks like a subsection of a personal portfolio, they will leave immediately.

If it looks like a legible finance research dashboard — with a clear purpose, real data, working tools, and a sensible nav — they stay. They explore. They bookmark it. They might even check out the homepage and realize there is more.

This is why every major branch needs its own hero, its own sub-nav, its own featured content, its own SEO metadata, its own call to action. It is not duplication. It is the difference between a section and a site.

---

## Why the Universal Content Model Exists

As the site grows, you will have content from many categories: project case studies, travel posts, finance notes, anime reviews, devlogs, tool pages. Without a shared model, each section invents its own data shape. Then search breaks. Tags break. Related content breaks. The sitemap becomes a mess. RSS becomes impossible.

The universal `DewContent` type is the solution. Every piece of content — regardless of category — shares a common envelope: slug, path, title, description, tags, dates, status, featured flag. On top of that envelope, each content type adds its own extra fields.

This means search, tags, breadcrumbs, sitemaps, OG images, RSS feeds, and related content can all be built once and work everywhere.

---

## Why Next.js App Router

Because the requirements are complex in ways that match exactly what App Router handles well:

- Nested routes that each need their own metadata and schema
- Server components for data-fetching with caching
- API route handlers for scheduled refreshes, OG image generation, form submissions
- Dynamic sitemap generation as the site grows
- Incremental static regeneration for finance and anime data that changes on a schedule

A simpler framework would hit friction fast on this project. App Router is the right level of power without overengineering.

---

## Why Not Build Everything at Once

Three reasons.

First, most of the ideas in this architecture have not been validated. You do not know yet which sections will get traction. The `/tools` section might become the main driver of traffic. Or `/singapore` might become unexpectedly popular. You will not know until it is live and real people are using it.

Second, maintaining a half-built site is worse than a smaller well-built one. A rough `/finance` dashboard with missing data and broken charts hurts trust more than not having a finance section at all.

Third, building in phases forces you to find the reusable patterns. By the time you build your third tool page, you know what the template looks like. By the time you build your third country guide, you know what the cluster structure looks like. The shared components come from repetition, not speculation.

---

## Why Tools Are Prioritised Over Blog Posts

Tools are more shareable. A person who used a useful tool and got a result they care about is more likely to share it than a person who read a good blog post.

Tools also have longer shelf lives. A good DCA calculator or a NUS CAP planner is useful forever. A blog post about a trend may be irrelevant in a year.

Tools also generate better search intent matches. Someone searching "DCA calculator" is ready to use a tool. Someone searching "what is DCA" might just be browsing. Tools capture high-intent traffic.

---

## Why the Singapore Focus Is a Feature

Specificity builds trust. "A developer from Singapore writing about NUS module planning" is more credible to a Singaporean student than a generic productivity site.

Local specificity also means less competition. Ranking for "NUS CAP planner" is much more achievable than ranking for "GPA calculator". Ranking for "Singapore coding cafes" is more achievable than "best cafes to work from".

The Singapore section is not a limitation on reach. It is a wedge into a specific audience where the content can rank and matter before expanding outward.

---

## Why APIs Come Before Scraping

APIs are stable, legal, and designed for programmatic access. When an API exists, use it.

Scraping is fragile, legally ambiguous, and expensive to maintain. Page structures change. Rate limits get enforced. IPs get blocked. Legal terms sometimes explicitly forbid it.

The right order is: find a public API first. If none exists, look for an RSS feed. If none exists, look for a downloadable dataset. Only scrape if none of those options exist and the data is genuinely public and robots.txt permits it.

For this project, AniList and Jikan cover anime. Spotify covers music with caveats. GitHub's API covers contribution data. A finance data provider covers market data. Most of the site can be built without scraping anything.

---

## Why There Are So Many Legal Pages

Because different sections expose different risks.

Finance content can be misread as investment advice. A clear disclaimer does not fully protect against this, but it establishes the right framing and is standard practice for any site discussing markets.

The diabetes project discusses health. It is not a medical device. It is a community and tracking app. But health disclaimers are necessary to be clear about what it is and is not.

The diving section discusses underwater physics and safety notes. A disclaimer is required to make clear that this is not a substitute for formal certification or instruction.

Affiliate links require disclosure in most jurisdictions, including Singapore under consumer protection norms.

AI-generated content requires disclosure as a matter of trust and emerging regulatory practice.

These pages are not bureaucracy. They are the minimum responsible infrastructure for a site that touches finance, health, legal, and AI topics.

---

## Why the Monetisation Strategy Is Phased

Starting with support tiers is right because it is transparent, low-friction, and does not compromise editorial integrity. You are not selling anything. You are giving visitors who find value a way to contribute.

Affiliate links come second because they require content to exist first. A guitar gear affiliate link only works if the guitar content is already trusted.

Premium templates come third because they require enough repeat visitors and demonstrated value to justify a paid product.

Sponsorship is last because it requires audience size and niche credibility that takes time to build.

Trying to monetise too early with the wrong method damages the trust that is the whole point of building the site this way.

---

## Why the Flywheel Matters

Build a tool → write a devlog → create a share card → link it in a collection → mention it in the newsletter → improve it from analytics.

Each effort produces multiple assets. A single tool does not just generate traffic on the tool page. It generates a devlog post. It generates a share card that spreads on social. It gets added to a collection that surfaces it for new visitors. It becomes a newsletter item.

This compounds. A site built this way after two years has thousands of interconnected assets all reinforcing each other. A site where each section is built and forgotten in isolation does not compound.

The flywheel is not just a content strategy. It is the structural reason why building the universal content model, tags, collections, and RSS from the beginning matters. Without that infrastructure, the flywheel cannot turn.

---

## The One-Line Summary

> Every section useful to strangers. Unmistakably yours.
