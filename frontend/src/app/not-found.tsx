import type { Metadata } from 'next'
import Link from 'next/link'

import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you requested could not be found.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        This link may be broken or the page may have been removed. Return to the {siteConfig.nameLatin}{' '}
        homepage to continue.
      </p>
      <Link href="/" className="btn-primary inline-block">
        Back to home
      </Link>
    </div>
  )
}
