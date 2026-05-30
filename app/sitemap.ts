import { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dew.codes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Stubbed sitemap: only homepage for now. Will be wired to getAllPaths() later.
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date().toISOString()
    }
  ]

  return urls
}
