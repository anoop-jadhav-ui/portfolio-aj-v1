import { describe, expect, it, vi, beforeEach } from 'vitest'
import { GET } from './route'
import { createResumeToken } from '../../_lib/resumeTokens'

const { mockGetResumeUrl } = vi.hoisted(() => ({
    mockGetResumeUrl: vi.fn<() => string | undefined>(
        () => 'https://resume.example.com'
    ),
}))

vi.mock('../../_lib/mailer', () => ({
    getResumeUrl: mockGetResumeUrl,
}))

describe('GET /api/resume/download', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        process.env.RESUME_LINK_SECRET = 'test-secret'
        mockGetResumeUrl.mockReturnValue('https://resume.example.com')
    })

    it('redirects for a valid token', async () => {
        const token = createResumeToken({
            email: 'user@example.com',
            name: 'User',
        })
        const request = new Request(
            `http://localhost:3000/api/resume/download?token=${token}`
        )

        const response = await GET(request)

        expect(response.status).toBe(302)
        const location = response.headers.get('Location')
        expect(
            location === 'https://resume.example.com' ||
                location === 'https://resume.example.com/'
        ).toBe(true)
    })

    it('returns 410 for expired token', async () => {
        const token = createResumeToken({
            email: 'user@example.com',
            name: 'User',
            issuedAt: 1,
            expiresAt: 2,
        })
        const request = new Request(
            `http://localhost:3000/api/resume/download?token=${token}`
        )

        const response = await GET(request)

        expect(response.status).toBe(410)
        await expect(response.json()).resolves.toMatchObject({ msg: 'fail' })
    })

    it('returns 403 for invalid token', async () => {
        const request = new Request(
            'http://localhost:3000/api/resume/download?token=invalid'
        )

        const response = await GET(request)

        expect(response.status).toBe(403)
        await expect(response.json()).resolves.toMatchObject({ msg: 'fail' })
    })
})
