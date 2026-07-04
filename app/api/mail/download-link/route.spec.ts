import { beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

const { mockSendMail, mockGetResumeUrl } = vi.hoisted(() => ({
    mockSendMail: vi.fn(),
    mockGetResumeUrl: vi.fn<() => string | undefined>(
        () => 'https://resume.example.com'
    ),
}))

const originalAllowedOrigins = process.env.ALLOWED_ORIGINS

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
        process.env.RESUME_LINK_SECRET = 'test-secret'
        if (originalAllowedOrigins === undefined) {
            delete process.env.ALLOWED_ORIGINS
        } else {
            process.env.ALLOWED_ORIGINS = originalAllowedOrigins
        }
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

    it('returns 400 for malformed json', async () => {
        const request = new Request(
            'http://localhost:3000/api/mail/download-link',
            {
                method: 'POST',
                body: '{invalid json',
                headers: { 'Content-Type': 'application/json' },
            }
        )

        const response = await POST(request)

        expect(response.status).toBe(400)
        await expect(response.json()).resolves.toEqual({ msg: 'fail' })
        expect(mockSendMail).not.toHaveBeenCalled()
    })

    it('returns 403 when origin is not in allowlist', async () => {
        process.env.ALLOWED_ORIGINS = 'https://anoopjadhav.in'

        const request = new Request(
            'http://localhost:3000/api/mail/download-link',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'Anoop',
                    email: 'anoop@example.com',
                    message: 'Please share resume',
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Origin: 'https://example-malicious.test',
                },
            }
        )

        const response = await POST(request)

        expect(response.status).toBe(403)
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
        const userEmail = mockSendMail.mock.calls[0][0]
        expect(userEmail.textPart).toContain('/api/resume/download?token=')
        expect(userEmail.htmlPart).toContain('/api/resume/download?token=')
        expect(userEmail.textPart).not.toContain('https://resume.example.com')
        expect(userEmail.htmlPart).not.toContain('https://resume.example.com')
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
