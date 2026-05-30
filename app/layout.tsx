import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'dew.codes',
  description: 'Useful tools and field notes from a Singapore builder.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-neutral-900 text-neutral-50">
          <header className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-semibold">dew.codes</h1>
          </header>
          <main className="max-w-6xl mx-auto p-6">{children}</main>
          <footer className="max-w-6xl mx-auto p-6 text-sm text-neutral-400">
            © {new Date().getFullYear()} dew.codes
          </footer>
        </div>
      </body>
    </html>
  )
}
