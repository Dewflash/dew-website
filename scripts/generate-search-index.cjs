const fs = require('fs')
const path = require('path')
const { getAllContent } = require('../lib/content/registry.cjs.js')

function main() {
  const items = getAllContent().map((i) => ({
    id: i.id,
    title: i.title,
    slug: i.slug,
    path: i.path,
    description: i.description,
    tags: i.tags,
    datePublished: i.datePublished,
    dateUpdated: i.dateUpdated,
    category: i.category
  }))

  const outDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const outPath = path.join(outDir, 'search-index.json')
  fs.writeFileSync(outPath, JSON.stringify(items, null, 2), 'utf-8')
  console.log(`Wrote ${items.length} items to ${outPath}`)
}

try {
  main()
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
