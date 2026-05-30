import React from 'react'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  href?: string
  tags?: string[]
}

export default function ContentCard({ title, description, href, tags = [] }: Props) {
  const inner = (
    <article className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-neutral-500">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-neutral-400 text-sm mb-3">{description}</p>}
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span key={t} className="text-xs bg-neutral-700 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </article>
  )

  if (href) return <Link href={href}>{inner}</Link>
  return inner
}
