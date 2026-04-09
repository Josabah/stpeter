import type { Metadata } from 'next'

import EventsHero from '@/components/events/EventsHero'
import WeeklySchedule from '@/components/events/WeeklySchedule'
import SpecialEvents from '@/components/events/SpecialEvents'
import { originalMeta, siteConfig, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: originalMeta.events.title },
  description: originalMeta.events.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: `${siteUrl}/events` },
  openGraph: {
    title: originalMeta.events.title,
    description: originalMeta.events.description,
    url: `${siteUrl}/events`,
  },
  twitter: {
    title: originalMeta.events.title,
    description: originalMeta.events.description,
  },
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <WeeklySchedule />
      <SpecialEvents />
    </div>
  )
}
