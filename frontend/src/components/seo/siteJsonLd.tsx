import JsonLd from '@/components/seo/JsonLd'
import { siteConfig, siteUrl } from '@/lib/site'

export default function SiteJsonLd() {
  const orgId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`

  const organization = {
    '@type': 'PlaceOfWorship',
    '@id': orgId,
    name: siteConfig.nameLatin,
    alternateName: [siteConfig.name, siteConfig.nameEnglish],
    url: siteUrl,
    description: siteConfig.defaultDescription,
    sameAs: siteConfig.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    telephone: siteConfig.telephone,
  }

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteUrl,
    name: siteConfig.openGraphSiteName,
    description: siteConfig.defaultDescription,
    publisher: { '@id': orgId },
    inLanguage: ['am', 'en'],
  }

  return <JsonLd data={[organization, website]} />
}
