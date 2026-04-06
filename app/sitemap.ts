import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://reverb.ro'

  const routes = [
    '',
    '/despre',
    '/servicii',
    '/pachete',
    '/magazine-online',
    '/portofoliu',
    '/blog',
    '/contact',
    '/legal',
    '/ai-humans',
    '/showcase',
  ]

  const enRoutes = [
    '/en',
    '/en/about',
    '/en/services',
    '/en/packages',
    '/en/online-store',
    '/en/portfolio',
    '/en/blog',
    '/en/contact',
    '/en/legal',
  ]

  const allRoutes = [...routes, ...enRoutes]

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/en' ? 'weekly' : 'monthly',
    priority: route === '' || route === '/en' ? 1 : 0.8,
    ...(route.startsWith('/en')
      ? { alternates: { languages: { ro: `${base}${route.replace('/en', '') || '/'}` } } }
      : routes.includes(route)
        ? { alternates: { languages: { en: `${base}/en${route === '' ? '' : route}` } } }
        : {}),
  }))
}
