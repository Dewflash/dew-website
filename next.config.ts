import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMdx = withMDX({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // DO NOT set `output: 'standalone'` -- this project deploys to Vercel
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: []
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}

export default withMdx(nextConfig)
