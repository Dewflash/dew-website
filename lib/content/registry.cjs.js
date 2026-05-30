// Simple CommonJS registry mirror for build-time scripts
const registry = [
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

function getAllContent() {
  return registry.slice()
}

function getContentById(id) {
  return registry.find((r) => r.id === id)
}

function getFeaturedContent(category) {
  return registry.filter((r) => r.featured && (!category || r.category === category))
}

module.exports = {
  getAllContent,
  getContentById,
  getFeaturedContent
}
