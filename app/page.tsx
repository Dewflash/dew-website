import MiniSiteHero from '../components/layout/MiniSiteHero'
import ContentCard from '../components/content/ContentCard'
import { getFeaturedContent } from '../lib/content/registry'

export default function Home() {
  const featured = getFeaturedContent()

  return (
    <section>
      <MiniSiteHero
        eyebrow="Home"
        title="dew.codes — tools and field notes"
        subtitle="A living command center: tools, projects, travel, finance, and more."
        cta={{ label: 'Explore tools', href: '/tools' }}
      />

      <h3 className="text-2xl font-semibold mb-4">Featured</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((f) => (
          <ContentCard key={f.id} content={f} />
        ))}
      </div>
    </section>
  )
}
