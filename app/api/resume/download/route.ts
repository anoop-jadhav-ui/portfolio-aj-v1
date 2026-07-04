import { NextResponse } from 'next/server'
import { getResumeUrl } from '../../_lib/mailer'
import { verifyResumeToken } from '../../_lib/resumeTokens'

export async function GET(request: Request) {
    const url = new URL(request.url)
    const token = url.searchParams.get('token')
    const verification = verifyResumeToken(token)

    if (!verification.ok) {
        return NextResponse.json(
            { msg: 'fail', reason: verification.reason },
            { status: verification.status }
        )
    }

    const resumeUrl = getResumeUrl()
    if (!resumeUrl) {
        return NextResponse.json({ msg: 'fail' }, { status: 500 })
    }

    return NextResponse.redirect(resumeUrl, 302)
}

