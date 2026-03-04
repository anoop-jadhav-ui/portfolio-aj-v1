import React from 'react'
import { describe, expect, it, vi } from 'vitest'

const mockGetProfileDataServer = vi.fn(async () => ({ name: 'Anoop' }))
const mockGetRecentArticlesServer = vi.fn(async () => [])
const mockNotFound = vi.fn()

vi.mock('../src/server/getProfileDataServer', () => ({
    getProfileDataServer: mockGetProfileDataServer,
}))

vi.mock('../src/server/getRecentArticlesServer', () => ({
    getRecentArticlesServer: mockGetRecentArticlesServer,
}))

vi.mock('../src/app/HomePage', () => ({
    default: ({
        initialProfileData,
        initialRecentArticles,
    }: {
        initialProfileData: unknown
        initialRecentArticles: unknown
    }) => (
        <div data-testid="home-page-mock">
            {JSON.stringify({ initialProfileData, initialRecentArticles })}
        </div>
    ),
}))

vi.mock('../src/app/DownloadCVRoutePage', () => ({
    default: () => <div data-testid="download-page-mock">download page</div>,
}))

vi.mock('../src/app/NotFoundRoutePage', () => ({
    default: () => <div data-testid="not-found-page-mock">not found page</div>,
}))

vi.mock('next/navigation', () => ({
    notFound: mockNotFound,
}))

describe('App Router smoke tests', () => {
    it('renders home page module and fetches server data', async () => {
        const { default: HomeRoute } = await import('./page')
        const element = await HomeRoute()

        expect(React.isValidElement(element)).toBe(true)
        expect(mockGetProfileDataServer).toHaveBeenCalledTimes(1)
        expect(mockGetRecentArticlesServer).toHaveBeenCalledTimes(1)
    })

    it('renders /download route module', async () => {
        const { default: DownloadRoute } = await import('./download/page')
        const element = DownloadRoute()

        expect(React.isValidElement(element)).toBe(true)
    }, 15000)

    it('renders /404 route module', async () => {
        const { default: NotFoundRoute } = await import('./404/page')
        const element = NotFoundRoute()

        expect(React.isValidElement(element)).toBe(true)
    })

    it('marks unknown routes as not found', async () => {
        const { default: CatchAllRoute } = await import('./[...slug]/page')
        CatchAllRoute()

        expect(mockNotFound).toHaveBeenCalledTimes(1)
    })
})
