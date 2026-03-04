import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}))

vi.mock('../../../context/ProfileDataContext', () => ({
    useProfileDataContext: () => ({
        leftPaneData: [
            {
                id: 'summary',
                label: 'summary',
                class: 'summary-section',
                icon: null,
            },
        ],
    }),
}))

vi.mock('../../../context/SectionInViewContext', () => ({
    useSectionInViewContext: () => ({
        currentSectionInView: 'summary-section',
    }),
}))

vi.mock('../../Atoms/LeftPaneItem/LeftPaneItem', () => ({
    default: () => <li>Section item</li>,
}))

import LeftPane from './LeftPane'

describe('<LeftPane/> accessibility', () => {
    it('exposes a semantic toggle button with expanded state', () => {
        render(<LeftPane />)

        const toggleButton = screen.getByRole('button', {
            name: /skip to section toggle/i,
        })

        expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

        fireEvent.click(toggleButton)

        expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    })
})
