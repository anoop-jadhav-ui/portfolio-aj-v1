type RateBucket = {
    count: number
    resetAt: number
}

type RequestGuardResult = {
    ok: boolean
    status?: number
    headers?: HeadersInit
}

const getRateLimitStore = () => {
    const globalWithStore = globalThis as typeof globalThis & {
        __portfolioRateLimitStore?: Map<string, RateBucket>
    }

    if (!globalWithStore.__portfolioRateLimitStore) {
        globalWithStore.__portfolioRateLimitStore = new Map<string, RateBucket>()
    }

    return globalWithStore.__portfolioRateLimitStore
}

const asPositiveInteger = (value: string | undefined, fallback: number) => {
    if (!value) {
        return fallback
    }

    const parsed = Number.parseInt(value, 10)
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

const normalizeOrigin = (value: string) => {
    try {
        return new URL(value).origin
    } catch {
        return null
    }
}

const getAllowedOrigins = () =>
    (process.env.ALLOWED_ORIGINS ?? '')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean)
        .map((origin) => normalizeOrigin(origin))
        .filter((origin): origin is string => !!origin)

const getClientIp = (request: Request) => {
    const forwarded = request.headers.get('x-forwarded-for')
    const firstForwardedIp = forwarded?.split(',')[0]?.trim()
    const realIp = request.headers.get('x-real-ip')?.trim()
    return firstForwardedIp || realIp || 'unknown'
}

const consumeRateLimit = (request: Request, bucketKey: string) => {
    const max = asPositiveInteger(process.env.API_RATE_LIMIT_MAX, 20)
    const windowMs = asPositiveInteger(
        process.env.API_RATE_LIMIT_WINDOW_MS,
        10 * 60 * 1000
    )

    const now = Date.now()
    const key = `${bucketKey}:${getClientIp(request)}`
    const store = getRateLimitStore()
    const existing = store.get(key)

    if (!existing || now >= existing.resetAt) {
        const next: RateBucket = {
            count: 1,
            resetAt: now + windowMs,
        }
        store.set(key, next)

        return {
            allowed: true,
            remaining: Math.max(max - next.count, 0),
            retryAfter: Math.ceil(windowMs / 1000),
            limit: max,
        }
    }

    if (existing.count >= max) {
        return {
            allowed: false,
            remaining: 0,
            retryAfter: Math.max(Math.ceil((existing.resetAt - now) / 1000), 1),
            limit: max,
        }
    }

    existing.count += 1
    store.set(key, existing)

    return {
        allowed: true,
        remaining: Math.max(max - existing.count, 0),
        retryAfter: Math.max(Math.ceil((existing.resetAt - now) / 1000), 1),
        limit: max,
    }
}

export const guardApiRequest = (
    request: Request,
    bucketKey: string
): RequestGuardResult => {
    const allowedOrigins = getAllowedOrigins()
    if (allowedOrigins.length > 0) {
        const origin = request.headers.get('origin')
        const normalizedOrigin = origin ? normalizeOrigin(origin) : null
        const originAllowed =
            normalizedOrigin !== null &&
            allowedOrigins.includes(normalizedOrigin)

        if (!originAllowed) {
            return {
                ok: false,
                status: 403,
            }
        }
    }

    const rateLimit = consumeRateLimit(request, bucketKey)
    const headers: HeadersInit = {
        'X-RateLimit-Limit': String(rateLimit.limit),
        'X-RateLimit-Remaining': String(rateLimit.remaining),
        'Retry-After': String(rateLimit.retryAfter),
    }

    if (!rateLimit.allowed) {
        return {
            ok: false,
            status: 429,
            headers,
        }
    }

    return {
        ok: true,
        headers,
    }
}
