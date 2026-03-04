import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { RecentArticle } from '../../../types/profileDataTypes'
import ArticleCard from './ArticleCard'

describe('<ArticleCard/> accessibility', () => {
    it('renders a focusable link with the article destination', () => {
        const article: RecentArticle = {
            title: 'Accessibility in React',
            brief: 'A quick guide.',
            slug: 'accessibility-in-react',
            coverImage: {
                url: '/images/og_image.png',
            },
            publishedAt: '2026-01-01T00:00:00.000Z',
            updatedAt: '2026-01-01T00:00:00.000Z',
        }

        render(<ArticleCard articleDetails={article} />)

        const link = screen.getByRole('link', {
            name: /read article: accessibility in react/i,
        })

        expect(link).toHaveAttribute(
            'href',
            expect.stringContaining('/accessibility-in-react')
        )
        expect(link).toHaveAttribute('target', '_blank')
        link.focus()
        expect(link).toHaveFocus()
    })
})
