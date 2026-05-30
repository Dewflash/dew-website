const ROBOTS = 'User-agent: *\nDisallow:\nSitemap: ' + (process.env.NEXT_PUBLIC_SITE_URL || 'https://dew.codes') + '/sitemap.xml\n'

export async function GET() {
  return new Response(ROBOTS, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
