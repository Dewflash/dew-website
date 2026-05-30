import { DewContent, ContentCategory, ContentRegistry } from './types'

// Simple in-memory registry for Phase 0. Later this can be generated from MDX or a CMS.
const registry: DewContent[] = [
  {
    id: 'project-skeleton',
    title: 'Project Skeleton',
    slug: 'project-skeleton',
    path: '/projects/project-skeleton',
    description: 'A placeholder project used to verify the registry.',
    category: 'project',
    tags: ['skeleton', 'phase0'],
    datePublished: new Date().toISOString(),
    dateUpdated: new Date().toISOString(),
    status: 'published',
    featured: true
  }
]

export const addContent = (item: DewContent) => {
  registry.push(item)
}

export const getAllContent = (): DewContent[] => {
  return [...registry]
}

export const getContentById = (id: string): DewContent | undefined => {
  return registry.find((r) => r.id === id)
}

export const getContentBySlug = (slug: string): DewContent | undefined => {
  return registry.find((r) => r.slug === slug)
}

export const getContentByCategory = (category: ContentCategory): DewContent[] => {
  return registry.filter((r) => r.category === category)
}

export const getContentByTag = (tag: string): DewContent[] => {
  return registry.filter((r) => r.tags.includes(tag))
}

export const getFeaturedContent = (category?: ContentCategory): DewContent[] => {
  return registry.filter((r) => r.featured && (!category || r.category === category))
}

export const getPublishedContent = (): DewContent[] => {
  return registry.filter((r) => r.status === 'published')
}

export const getRecentContent = (limit = 10, category?: ContentCategory): DewContent[] => {
  const items = category ? getContentByCategory(category) : getAllContent()
  return items
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .slice(0, limit)
}

export const getRelatedContent = (id: string, limit = 5): DewContent[] => {
  const current = getContentById(id)
  if (!current) return []
  const sharedTagSet = new Set(current.tags)
  return registry
    .filter((r) => r.id !== id)
    .map((r) => ({ item: r, score: r.tags.filter((t) => sharedTagSet.has(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item)
}

export const searchContent = (query: string): DewContent[] => {
  const q = query.toLowerCase()
  return registry.filter((r) => {
    return (
      r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.join(' ').toLowerCase().includes(q)
    )
  })
}

export const getAllPaths = (): string[] => {
  return registry.map((r) => r.path)
}

const contentRegistry: ContentRegistry = {
  getAllContent,
  getContentById,
  getContentBySlug,
  getContentByCategory,
  getContentByTag,
  getFeaturedContent,
  getPublishedContent,
  getRecentContent,
  getRelatedContent,
  searchContent,
  getAllPaths
}

export default contentRegistry
