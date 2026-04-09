import type { Metadata } from 'next'

import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import Timeline from '@/components/about/Timeline'
import Leadership from '@/components/about/Leadership'
import Beliefs from '@/components/about/Beliefs'
import { originalMeta, siteConfig, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: originalMeta.about.title },
  description: originalMeta.about.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: originalMeta.about.title,
    description: originalMeta.about.description,
    url: `${siteUrl}/about`,
  },
  twitter: {
    title: originalMeta.about.title,
    description: originalMeta.about.description,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Timeline />
      <Leadership />
      <Beliefs />
    </div>
  )
}
