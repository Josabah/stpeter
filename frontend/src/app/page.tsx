import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kidus petros gibi gubae',
  description:
    'Welcome to kidus petros Gibi Gubae. Learn about our mission, services, events, and Orthodox Christian faith.',
};
import Hero from '@/components/home/Hero'
import MissionStatement from '@/components/home/MissionStatement'
import FeaturedDivisions from '@/components/home/FeaturedDivisions'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="sr-only">
        St. Peter  Gebi Gubae
      </h1>

      <Hero />
      <MissionStatement />
      <FeaturedDivisions />
      <UpcomingEvents />
      <CallToAction />
    </div>
  )
}
