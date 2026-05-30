// Generated from content-model.md — core content types for dew.codes

export type ContentCategory =
  | 'project'
  | 'tool'
  | 'writing'
  | 'travel'
  | 'finance'
  | 'music'
  | 'anime'
  | 'singapore'
  | 'collection'
  | 'lab'

export type ContentStatus = 'draft' | 'published' | 'archived'

export type MiniSite =
  | 'projects'
  | 'tools'
  | 'travel'
  | 'finance'
  | 'anime'
  | 'music'
  | 'singapore'
  | 'lab'

export type ImageAsset = {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  credit?: string
  takenAt?: string
  takenDate?: string
}

export type DewContent = {
  id: string
  title: string
  slug: string
  path: string
  description: string
  category: ContentCategory
  tags: string[]
  datePublished: string
  dateUpdated: string
  status: ContentStatus
  featured: boolean
  miniSite?: MiniSite
  readingTime?: number
  sourceLinks?: string[]
  relatedPages?: string[]
  canonicalUrl?: string
  ogImagePath?: string
  schemaType?: string
}

// Tool model
export type ToolType = 'calculator' | 'generator' | 'dashboard' | 'visualizer' | 'share-card'

export type ToolInputField = {
  key: string
  label: string
  type: 'number' | 'text' | 'select' | 'range' | 'boolean' | 'date'
  options?: string[]
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

export type DewTool = DewContent & {
  category: 'tool'
  toolType: ToolType
  inputFields?: ToolInputField[]
  outputType?: string
  dataSources?: string[]
  shareCardEnabled?: boolean
  exampleInputs?: Record<string, unknown>[]
  faqItems?: FAQItem[]
  relatedTools?: string[]
  lastToolUpdate?: string
}

// Project model
export type ProjectStatus = 'idea' | 'building' | 'launched' | 'paused' | 'archived' | 'failed'

export type ChangelogEntry = {
  version?: string
  date: string
  changes: string[]
  type: 'feature' | 'fix' | 'breaking' | 'note'
}

export type RoadmapItem = {
  title: string
  status: 'planned' | 'in-progress' | 'done' | 'deferred'
  priority: 'high' | 'medium' | 'low'
  notes?: string
}

export type DewProject = DewContent & {
  category: 'project'
  projectStatus: ProjectStatus
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  screenshots?: ImageAsset[]
  problemStatement?: string
  architecture?: string
  learnings?: string[]
  changelog?: ChangelogEntry[]
  roadmap?: RoadmapItem[]
  disclaimer?: 'health' | 'financial' | 'none'
}

// Writing model
export type WritingType =
  | 'blog'
  | 'essay'
  | 'note'
  | 'devlog'
  | 'market-note'
  | 'travelogue'
  | 'book-note'
  | 'learning-log'
  | 'newsletter'

export type TOCItem = {
  level: number
  text: string
  anchor: string
}

export type DewWriting = DewContent & {
  category: 'writing'
  writingType: WritingType
  author: string
  coverImage?: ImageAsset
  excerpt?: string
  tableOfContents?: TOCItem[]
  relatedProjects?: string[]
  relatedTools?: string[]
  newsletterIssue?: number
}

// Travel model
export type TravelStyleTag =
  | 'backpacker'
  | 'budget'
  | 'comfort'
  | 'food-focused'
  | 'nature'
  | 'urban'
  | 'adventure'
  | 'cultural'
  | 'diving'

export type BudgetItem = {
  category: 'flights' | 'accommodation' | 'food' | 'transport' | 'activities' | 'shopping' | 'other'
  amount: number
  currency: string
  notes?: string
}

export type TravelEntry = DewContent & {
  category: 'travel'
  country: string
  countryCode: string
  city?: string
  coordinates?: [number, number]
  visitedDates?: string[]
  budgetRange?: string
  budgetBreakdown?: BudgetItem[]
  travelStyleTags: TravelStyleTag[]
  gallery?: ImageAsset[]
  disclaimer?: string
  lastVerified?: string
  entryType: 'guide' | 'itinerary' | 'food' | 'budget' | 'tips' | 'gallery' | 'log' | 'diving'
}

// Finance model
export type FinancePageType = 'dashboard' | 'market-outlook' | 'sector' | 'tool' | 'explainer' | 'note' | 'glossary'

export type DataSourceRef = {
  name: string
  url?: string
  type: 'api' | 'csv' | 'manual' | 'rss' | 'scrape'
  refreshInterval?: string
  limitations?: string
}

export type FinancePage = DewContent & {
  category: 'finance'
  financePageType: FinancePageType
  dataSources: DataSourceRef[]
  disclaimerRequired: true
  lastDataRefresh?: string
  refreshInterval?: 'realtime' | 'daily' | 'weekly' | 'monthly' | 'manual'
  methodology?: string
  assumptions?: string[]
  sectors?: string[]
  isNISA?: boolean
}

// Entertainment model
export type EntertainmentType = 'anime' | 'music' | 'game'

export type AnimeEntry = DewContent & {
  category: 'anime'
  entertainmentType: 'anime'
  anilistId?: number
  malId?: number
  status: 'watching' | 'completed' | 'planned' | 'dropped' | 'paused'
  personalRating?: number
  genres?: string[]
  studio?: string
  year?: number
  season?: 'winter' | 'spring' | 'summer' | 'fall'
  reviewText?: string
  recommended: boolean
  contentWarnings?: string[]
}

export type MusicEntry = DewContent & {
  category: 'music'
  entertainmentType: 'music'
  musicType: 'jpop' | 'mandopop' | 'guitar' | 'playlist' | 'artist-guide'
  artist?: string
  spotifyId?: string
  youtubeId?: string
  chords?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export type GameEntry = DewContent & {
  category: 'game'
  entertainmentType: 'game'
  platform?: string[]
  personalRating?: number
  completionStatus: 'backlog' | 'playing' | 'completed' | 'dropped'
  genre?: string[]
}

// Singapore model
export type SingaporeContentType = 'student-tool' | 'guide' | 'map' | 'event-listing' | 'christian'

export type SingaporeEntry = DewContent & {
  category: 'singapore'
  singaporeType: SingaporeContentType
  relevantFor?: string[]
  lastVerified?: string
  mapCoordinates?: [number, number]
  openingHours?: string
  address?: string
  priceRange?: string
}

export type DewCollection = DewContent & {
  category: 'collection'
  items: string[]
  curatorNote?: string
  coverContentId?: string
  estimatedReadTime?: number
}

// Content registry interface
export interface ContentRegistry {
  getAllContent(): DewContent[]
  getContentById(id: string): DewContent | undefined
  getContentBySlug(slug: string): DewContent | undefined
  getContentByCategory(category: ContentCategory): DewContent[]
  getContentByTag(tag: string): DewContent[]
  getFeaturedContent(category?: ContentCategory): DewContent[]
  getPublishedContent(): DewContent[]
  getRecentContent(limit?: number, category?: ContentCategory): DewContent[]
  getRelatedContent(id: string, limit?: number): DewContent[]
  searchContent(query: string): DewContent[]
  getAllPaths(): string[]
}
