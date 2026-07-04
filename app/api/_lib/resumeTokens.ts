import crypto from 'crypto'

type ResumeTokenPayload = {
    email: string
    name: string
    issuedAt: number
    expiresAt: number
}

type VerifyResult =
    | { ok: true; payload: ResumeTokenPayload }
    | { ok: false; status: 400 | 403 | 410; reason: string }

const getSecret = () => {
    const secret = process.env.RESUME_LINK_SECRET
    return secret && secret.trim() ? secret : undefined
}

const base64UrlEncode = (value: string) =>
    Buffer.from(value, 'utf8').toString('base64url')

const base64UrlDecode = (value: string) =>
    Buffer.from(value, 'base64url').toString('utf8')

const sign = (value: string, secret: string) =>
    crypto.createHmac('sha256', secret).update(value).digest('base64url')

export const getResumeLinkTtlHours = () => {
    const raw = process.env.RESUME_LINK_TTL_HOURS
    const parsed = raw ? Number.parseFloat(raw) : NaN
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 24
}

export const createResumeToken = (input: {
    email: string
    name: string
    issuedAt?: number
    expiresAt?: number
}) => {
    const secret = getSecret()
    if (!secret) {
        throw new Error('Missing RESUME_LINK_SECRET')
    }

    const issuedAt = input.issuedAt ?? Date.now()
    const expiresAt =
        input.expiresAt ??
        issuedAt + getResumeLinkTtlHours() * 60 * 60 * 1000

    const payload: ResumeTokenPayload = {
        email: input.email,
        name: input.name,
        issuedAt,
        expiresAt,
    }

    const encodedPayload = base64UrlEncode(JSON.stringify(payload))
    const signature = sign(encodedPayload, secret)
    return `${encodedPayload}.${signature}`
}

export const verifyResumeToken = (token: string | null): VerifyResult => {
    if (!token) {
        return { ok: false, status: 400, reason: 'missing token' }
    }

    const secret = getSecret()
    if (!secret) {
        return { ok: false, status: 403, reason: 'missing secret' }
    }

    const [encodedPayload, signature] = token.split('.')
    if (!encodedPayload || !signature) {
        return { ok: false, status: 403, reason: 'invalid token format' }
    }

    const expectedSignature = sign(encodedPayload, secret)
    const signatureBuffer = Buffer.from(signature)
    const expectedBuffer = Buffer.from(expectedSignature)
    if (
        signatureBuffer.length !== expectedBuffer.length ||
        !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
    ) {
        return { ok: false, status: 403, reason: 'invalid signature' }
    }

    let payload: ResumeTokenPayload
    try {
        payload = JSON.parse(base64UrlDecode(encodedPayload))
    } catch {
        return { ok: false, status: 403, reason: 'invalid payload' }
    }

    if (Date.now() > payload.expiresAt) {
        return { ok: false, status: 410, reason: 'token expired' }
    }

    return { ok: true, payload }
}

