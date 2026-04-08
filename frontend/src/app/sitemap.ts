import type { MetadataRoute } from 'next'

import { siteUrl } from '@/lib/site'

const PUBLIC_PATHS = ['/', '/about', '/events', '/divisions', '/gallery', '/contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return PUBLIC_PATHS.map((path) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))
}
