import { NextRequest, NextResponse } from 'next/server'

export function proxy(_request: NextRequest) {
    const response = NextResponse.next()
    response.headers.set(
        'X-Robots-Tag',
        'noindex, nofollow, noarchive, nosnippet'
    )
    response.headers.set('Cache-Control', 'no-store')
    return response
}

export const config = {
    matcher: ['/download/:path*'],
}
