import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        sitemap: 'https://anoopjadhav.in/sitemap.xml',
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/download', '/api/'],
            },
        ],
    }
}
