import { describe, expect, it } from 'vitest'

import { parseRecentArticlesFromRss } from './hashnodeApi'

describe('parseRecentArticlesFromRss', () => {
    it('parses RSS items into article objects', () => {
        const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0">
          <channel>
            <item>
              <title><![CDATA[First post]]></title>
              <description><![CDATA[This is the first summary.]]></description>
              <link>https://blog.example.com/first-post</link>
              <pubDate>Mon, 01 Jan 2024 00:00:00 GMT</pubDate>
            </item>
            <item>
              <title><![CDATA[Second post]]></title>
              <description><![CDATA[This is the second summary.]]></description>
              <link>https://blog.example.com/second-post</link>
              <pubDate>Tue, 02 Jan 2024 00:00:00 GMT</pubDate>
            </item>
          </channel>
        </rss>`

        expect(parseRecentArticlesFromRss(rssXml)).toEqual([
            {
                title: 'First post',
                brief: 'This is the first summary.',
                slug: 'first-post',
                coverImage: { url: '' },
                publishedAt: 'Mon, 01 Jan 2024 00:00:00 GMT',
                updatedAt: 'Mon, 01 Jan 2024 00:00:00 GMT',
            },
            {
                title: 'Second post',
                brief: 'This is the second summary.',
                slug: 'second-post',
                coverImage: { url: '' },
                publishedAt: 'Tue, 02 Jan 2024 00:00:00 GMT',
                updatedAt: 'Tue, 02 Jan 2024 00:00:00 GMT',
            },
        ])
    })
})
