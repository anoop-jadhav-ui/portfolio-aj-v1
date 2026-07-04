import { RecentArticle } from './../types/profileDataTypes'

const DEFAULT_BLOG_URL = 'https://blog.anoopjadhav.in'
const ARTICLES_REVALIDATE_SECONDS = 900

function decodeXmlEntities(value: string): string {
    return value
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
}

function extractRssTag(itemXml: string, tag: string): string {
    const match = itemXml.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))

    if (!match) {
        return ''
    }

    return decodeXmlEntities(
        match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1').trim()
    )
}

export function parseRecentArticlesFromRss(xml: string): Array<RecentArticle> {
    const itemMatches = Array.from(xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi))

    return itemMatches.map((match) => {
        const itemXml = match[1]
        const title = extractRssTag(itemXml, 'title')
        const brief = extractRssTag(itemXml, 'description')
        const link = extractRssTag(itemXml, 'link')
        const publishedAt = extractRssTag(itemXml, 'pubDate')
        const updatedAt = publishedAt || extractRssTag(itemXml, 'lastBuildDate')

        let slug = ''

        try {
            const parsedUrl = new URL(link || '', DEFAULT_BLOG_URL)
            const pathname = parsedUrl.pathname.replace(/\/+$/, '')
            slug = pathname.split('/').filter(Boolean).pop() ?? ''
        } catch {
            slug = (link || '').split('/').filter(Boolean).pop() ?? ''
        }

        return {
            title,
            brief,
            slug,
            coverImage: {
                url: '',
            },
            publishedAt,
            updatedAt: updatedAt || publishedAt,
        }
    }).slice(0, 6)
}

export async function getRecentArticles(
    blogBaseUrl: string = process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ?? DEFAULT_BLOG_URL
): Promise<Array<RecentArticle>> {
    const feedUrl = new URL('/rss.xml', blogBaseUrl.endsWith('/') ? blogBaseUrl : `${blogBaseUrl}/`).toString()

    const response = await fetch(feedUrl, {
        next: { revalidate: ARTICLES_REVALIDATE_SECONDS },
        headers: {
            Accept: 'application/rss+xml, application/xml, text/xml',
        },
    })

    if (!response.ok) {
        return []
    }

    const xml = await response.text()
    return parseRecentArticlesFromRss(xml)
}
