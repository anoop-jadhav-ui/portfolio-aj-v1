import type { MetadataRoute } from 'next'

const SITE_URL = 'https://anoopjadhav.in'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    return [
        {
            url: `${SITE_URL}/`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
