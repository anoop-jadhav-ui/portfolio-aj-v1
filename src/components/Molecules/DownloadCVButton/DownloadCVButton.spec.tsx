import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import TranslationSeed from '../../../testUtils/TranslationSeed'
import DownloadCVButton from './DownloadCVButton'

vi.mock('../../Atoms/DownloadDialog/DownloadDialog', () => ({
    default: ({ open }: { open: boolean }) =>
        open ? <div data-testid="download-dialog-mock">dialog open</div> : null,
}))

describe('<DownloadCVButton/>', () => {
    it('opens download dialog on click', () => {
        render(
            <TranslationSeed>
                <DownloadCVButton />
            </TranslationSeed>
        )

        fireEvent.click(screen.getByRole('button', { name: /Download CV/i }))

        expect(screen.getByTestId('download-dialog-mock')).toBeInTheDocument()
    })
})
