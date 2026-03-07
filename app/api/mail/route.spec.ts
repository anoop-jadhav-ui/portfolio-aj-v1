import { describe, expect, it, vi, beforeEach } from 'vitest'
import { POST } from './route'

const { mockSendMail } = vi.hoisted(() => ({
    mockSendMail: vi.fn(),
}))

vi.mock('../_lib/mailer', () => ({
    sendMail: mockSendMail,
    getPortfolioUrl: () => 'https://portfolio-next-snowy.vercel.app/',
    getReceiverEmail: () => 'receiver@example.com',
    escapeHtml: (value: string) => value,
}))

describe('POST /api/mail', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('returns 400 for invalid payload', async () => {
        const request = new Request('http://localhost:3000/api/mail', {
            method: 'POST',
            body: JSON.stringify({ name: '', email: 'invalid' }),
            headers: { 'Content-Type': 'application/json' },
        })

        const response = await POST(request)

        expect(response.status).toBe(400)
        await expect(response.json()).resolves.toEqual({ msg: 'fail' })
        expect(mockSendMail).not.toHaveBeenCalled()
    })

    it('returns 400 for malformed json', async () => {
        const request = new Request('http://localhost:3000/api/mail', {
            method: 'POST',
            body: '{invalid json',
            headers: { 'Content-Type': 'application/json' },
        })

        const response = await POST(request)

        expect(response.status).toBe(400)
        await expect(response.json()).resolves.toEqual({ msg: 'fail' })
        expect(mockSendMail).not.toHaveBeenCalled()
    })

    it('returns success for valid payload', async () => {
        mockSendMail.mockResolvedValue(undefined)
        const request = new Request('http://localhost:3000/api/mail', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Anoop',
                email: 'anoop@example.com',
                message: 'Hi there',
                section: 'Contact',
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        const response = await POST(request)

        expect(response.status).toBe(200)
        await expect(response.json()).resolves.toEqual({ msg: 'success' })
        expect(mockSendMail).toHaveBeenCalledTimes(1)
    })
})
