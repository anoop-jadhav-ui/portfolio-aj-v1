import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AlertBannerProvider from '../../../context/AlertBannerContext'
import axiosInstance from '../../../helpers/axios'
import TranslationSeed from '../../../testUtils/TranslationSeed'
import DownloadReasonForm from './DownloadReasonForm'

vi.mock('../../../helpers/axios')
const mockOnCloseDialog = vi.fn()

const ComponentUnderTest = () => {
    return (
        <AlertBannerProvider>
            <TranslationSeed>
                <DownloadReasonForm
                    closeDialog={mockOnCloseDialog}
                />
            </TranslationSeed>
        </AlertBannerProvider>
    )
}

describe('<DownloadReasonForm/>', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it('shows success banner after successful submission and close the dialog', async () => {
        vi.spyOn(axiosInstance, 'post').mockResolvedValue({
            data: { msg: 'success' },
        })
        render(<ComponentUnderTest />)

        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        })
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(screen.getByLabelText(/Message/i), {
            target: { value: 'Hello, world!' },
        })

        fireEvent.click(screen.getByRole('button', { name: /Download/i }))

        await waitFor(() =>
            expect(screen.getByTestId('banner')).toBeInTheDocument()
        )

        expect(screen.getByTestId('banner')).toHaveTextContent(
            /Download link has been sent to your email./i
        )

        expect(mockOnCloseDialog).toBeCalled()
    })

    it('shows error banner after failed submission', async () => {
        vi.spyOn(axiosInstance, 'post').mockResolvedValue({
            data: { msg: 'fail' },
        })

        render(<ComponentUnderTest />)

        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        })
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(screen.getByLabelText(/Message/i), {
            target: { value: 'Hello, world!' },
        })
        fireEvent.click(screen.getByRole('button', { name: /Download/i }))

        await waitFor(() =>
            expect(screen.getByTestId('banner')).toBeInTheDocument()
        )

        expect(screen.getByTestId('banner')).toHaveTextContent(
            /Sorry, we couldn't send your message. Please try again later./i
        )

        expect(mockOnCloseDialog).toBeCalled()
    })

    it('shows error banner after api fails', async () => {
        vi.spyOn(axiosInstance, 'post').mockRejectedValue('Error')

        render(<ComponentUnderTest />)

        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        })
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        })
        fireEvent.change(screen.getByLabelText(/Message/i), {
            target: { value: 'Hello, world!' },
        })
        fireEvent.click(screen.getByRole('button', { name: /Download/i }))

        await waitFor(() =>
            expect(screen.getByTestId('banner')).toBeInTheDocument()
        )

        expect(screen.getByTestId('banner')).toHaveTextContent(
            /Sorry, we couldn't send your message. Please try again later./i
        )

        expect(mockOnCloseDialog).toBeCalled()
    })
})
