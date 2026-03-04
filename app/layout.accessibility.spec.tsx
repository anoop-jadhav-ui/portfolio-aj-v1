import React from 'react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('./globals.css', () => ({}))

vi.mock('next/font/local', () => ({
    default: () => ({
        className: 'mock-font',
    }),
}))

import RootLayout from './layout'

describe('<RootLayout/> accessibility', () => {
    it('renders a skip link that targets the main landmark', () => {
        const tree = RootLayout({
            children: <div>page content</div>,
        }) as React.ReactElement
        const body = tree.props.children
        const [skipLink, main] = body.props.children.slice(1)

        expect(skipLink.props.href).toBe('#main-content')
        expect(skipLink.props.children).toBe('Skip to main content')
        expect(main.props.id).toBe('main-content')
    })
})
