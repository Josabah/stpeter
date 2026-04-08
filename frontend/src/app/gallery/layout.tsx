import type { Metadata } from 'next'

import { originalMeta, siteConfig, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: originalMeta.gallery.title },
  description: originalMeta.gallery.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: `${siteUrl}/gallery` },
  openGraph: {
    title: originalMeta.gallery.title,
    description: originalMeta.gallery.description,
    url: `${siteUrl}/gallery`,
    type: 'website',
  },
  twitter: {
    title: originalMeta.gallery.title,
    description: originalMeta.gallery.description,
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
