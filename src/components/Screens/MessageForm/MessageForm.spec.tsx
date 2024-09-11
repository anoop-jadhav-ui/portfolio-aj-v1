import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { expect, it, vi } from 'vitest'
import axiosInstance from '../../../helpers/axios'
import TranslationSeed from '../../../testUtils/TranslationSeed'
import { MessageForm } from './MessageForm'

vi.mock('../../../helpers/axios')

const ComponentUnderTest = () => {
    return (
        <TranslationSeed>
            <MessageForm />
        </TranslationSeed>
    )
}

it('shows success banner after successful submission', async () => {
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
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    await waitFor(() =>
        expect(screen.getByTestId('banner')).toBeInTheDocument()
    )

    expect(screen.getByTestId('banner')).toHaveTextContent(
        /Message sent successfully/i
    )
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
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    await waitFor(() =>
        expect(screen.getByTestId('banner')).toBeInTheDocument()
    )

    expect(screen.getByTestId('banner')).toHaveTextContent(
        /Sorry, we couldn't send your message. Please try again later./i
    )
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
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))

    await waitFor(() =>
        expect(screen.getByTestId('banner')).toBeInTheDocument()
    )

    expect(screen.getByTestId('banner')).toHaveTextContent(
        /Sorry, we couldn't send your message. Please try again later./i
    )
})
