import { getAllPaths } from '../lib/content/registry'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dew.codes'

export async function GET() {
  const paths = getAllPaths()

  const urls = paths
    .map((path) => {
      const loc = `${SITE_URL}${path}`
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
