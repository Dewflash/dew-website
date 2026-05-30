import React from 'react'
import Link from 'next/link'

type Crumb = { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-neutral-400 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center">
            {it.href ? (
              <Link href={it.href} className="hover:underline text-neutral-300">
                {it.label}
              </Link>
            ) : (
              <span className="text-neutral-500">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
