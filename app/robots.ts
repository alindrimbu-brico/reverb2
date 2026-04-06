import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/portal/', '/checkout/'],
    },
    sitemap: 'https://reverb.ro/sitemap.xml',
    host: 'https://reverb.ro',
  }
}
