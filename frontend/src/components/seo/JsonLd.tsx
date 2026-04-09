type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data]
  const json =
    payload.length === 1
      ? { '@context': 'https://schema.org', ...payload[0] }
      : { '@context': 'https://schema.org', '@graph': payload }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
