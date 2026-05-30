import React from 'react'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
}

export default function MiniSiteHero({ eyebrow, title, subtitle, cta }: Props) {
  return (
    <section className="w-full bg-gradient-to-r from-slate-800 to-transparent rounded-xl p-8 mb-8">
      <div className="max-w-6xl mx-auto">
        {eyebrow && <p className="text-sm text-sky-300 mb-2">{eyebrow}</p>}
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-neutral-300 mb-4">{subtitle}</p>}
        {cta && (
          <a href={cta.href} className="inline-block bg-sky-500 text-white px-4 py-2 rounded">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  )
}
