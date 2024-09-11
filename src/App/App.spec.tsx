import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'
import React from 'react'

vi.mock('../components/Organisms/Stars/Stars')
vi.mock('react-useanimations', () => ({
    default: () => <div></div>,
}))

describe('App', () => {
    it('should rende the app in the loading state', () => {
        const { container } = render(<App />)
        expect(container).toMatchSnapshot()
    })
})
