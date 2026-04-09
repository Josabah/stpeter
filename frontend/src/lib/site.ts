/**
 * Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. Vercel).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://stpeter.vercel.app'
).replace(/\/$/, '')

/** Intentionally crafted keywords first; then supporting phrases. */
export const siteKeywords = [
  'kidus petros gibi gubae',
  'Gibi Gubae petros',
  'st peter gibi gubae',
  'gibi gubae betekrstian',
  'orthodox gibi gubae',
  'ቅዱስ ጴጥሮስ ጊቢ ጉባኤ',
  'Kidus Petros Gibi Gubae',
  'Gebi Gubae',
  'St. Peter Orthodox gibi gubae',
  'Ethiopian Orthodox Tewahedo',
  'CHS Sefere Selam',
  'Sefere Selam church',
] as const

/**
 * Meta titles & descriptions: restored verbatim from the app files before the SEO refactor
 * (root layout + each route’s `metadata`). Gallery had no metadata then — see `gallery` below.
 */
export const originalMeta = {
  /** Root `layout.tsx` */
  layoutDescription:
    'Official website of kidus petros gibi gubae (Gebi Gubae). Service times, history, events, and Orthodox Christian faith.',
  /** `app/page.tsx` */
  homeDescription:
    'Welcome to kidus petros Gibi Gubae. Learn about our mission, services, events, and Orthodox Christian faith.',
  /** Root `layout.tsx` openGraph (separate from `metadata.description` in the original file). */
  layoutOpenGraph: {
    title: 'Kidus Petros Gibi Gubae',
    description:
      'Official website of Kidus Petros Gibi Gubae. Service times, history, and events.',
  },
  about: {
    title: 'About Us | St. Peter Orthodox Church',
    description:
      'Learn about the history, mission, and leadership of St. Peter Orthodox Church.',
  },
  events: {
    title: 'Events | St. Peter Orthodox Church',
    description: 'Weekly schedule and special events at St. Peter Orthodox Church.',
  },
  divisions: {
    title: 'Our Divisions | St. Peter Orthodox Church',
    description:
      'Explore the various ministries and service divisions of St. Peter Orthodox Church.',
  },
  contact: {
    title: 'Contact Us | St. Peter Orthodox Church',
    description:
      'Get in touch with St. Peter Orthodox Church. Find our location, service times, and contact information.',
  },
  /** No `metadata` on `gallery/page.tsx` originally; same naming as other routes. */
  gallery: {
    title: 'Gallery | St. Peter Orthodox Church',
    description: 'Photos from St. Peter Orthodox Church.',
  },
} as const

export const siteConfig = {
  name: 'ቅዱስ ጴጥሮስ ጊቢ ጉባኤ',
  nameLatin: 'Kidus Petros Gibi Gubae',
  nameEnglish: 'St. Peter Orthodox Gibi Gubae',

  metaTitleDefault: 'kidus petros gibi gubae – Gebi Gubae',
  metaTitleTemplate: 'St. Peter Orthodox gibi gubae',

  defaultDescription: originalMeta.layoutDescription,

  /** Same strings as `originalMeta` — keeps any `siteConfig.metaDescription.*` usage from crashing. */
  metaDescription: {
    home: originalMeta.homeDescription,
    about: originalMeta.about.description,
    events: originalMeta.events.description,
    divisions: originalMeta.divisions.description,
    contact: originalMeta.contact.description,
    gallery: originalMeta.gallery.description,
  },

  keywords: siteKeywords,
  openGraphSiteName: 'Kidus Petros Gibi Gubae',
  sameAs: [
    'https://t.me/kidus_petros_mereja',
    'https://www.instagram.com/kidus_petros_gibi_gubae',
    'https://youtube.com/channel/UCf9ULIkZg3Hlu_KryEOfrjg',
  ],
  address: {
    streetAddress: 'CHS, Sefere Selam campus',
    addressLocality: 'Addis Ababa',
    addressRegion: 'Addis Ababa',
    addressCountry: 'ET',
  },
  telephone: ['+251946406302', '+251972547887'],
  email: 'info@stpeterorthodox.org',
} as const
