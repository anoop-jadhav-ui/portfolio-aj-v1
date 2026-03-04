import { beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

const { mockSendMail, mockGetResumeUrl } = vi.hoisted(() => ({
    mockSendMail: vi.fn(),
    mockGetResumeUrl: vi.fn(() => 'https://resume.example.com'),
}))

vi.mock('../../_lib/mailer', () => ({
    sendMail: mockSendMail,
    getPortfolioUrl: () => 'https://portfolio-next-snowy.vercel.app/',
    getReceiverEmail: () => 'receiver@example.com',
    getResumeUrl: mockGetResumeUrl,
    escapeHtml: (value: string) => value,
}))

describe('POST /api/mail/download-link', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        mockGetResumeUrl.mockReturnValue('https://resume.example.com')
    })

    it('returns 400 for invalid payload', async () => {
        const request = new Request(
            'http://localhost:3000/api/mail/download-link',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: '',
                    email: 'invalid',
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        const response = await POST(request)

        expect(response.status).toBe(400)
        await expect(response.json()).resolves.toEqual({ msg: 'fail' })
        expect(mockSendMail).not.toHaveBeenCalled()
    })

    it('returns success and sends both emails', async () => {
        mockSendMail.mockResolvedValue(undefined)
        const request = new Request(
            'http://localhost:3000/api/mail/download-link',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'Anoop',
                    email: 'anoop@example.com',
                    message: 'Please share resume',
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        const response = await POST(request)

        expect(response.status).toBe(200)
        await expect(response.json()).resolves.toEqual({ msg: 'success' })
        expect(mockSendMail).toHaveBeenCalledTimes(2)
    })

    it('returns 500 when resume url is missing', async () => {
        mockGetResumeUrl.mockReturnValue(undefined)
        const request = new Request(
            'http://localhost:3000/api/mail/download-link',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'Anoop',
                    email: 'anoop@example.com',
                    message: 'Please share resume',
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        const response = await POST(request)

        expect(response.status).toBe(500)
        await expect(response.json()).resolves.toEqual({ msg: 'fail' })
        expect(mockSendMail).not.toHaveBeenCalled()
    })
})
