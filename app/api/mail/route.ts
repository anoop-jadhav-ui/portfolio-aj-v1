import { NextResponse } from 'next/server'
import {
    escapeHtml,
    getPortfolioUrl,
    getReceiverEmail,
    sendMail,
} from '../_lib/mailer'
import { guardApiRequest } from '../_lib/requestGuards'
import { contactMailSchema } from '../_lib/schemas'

export async function POST(request: Request) {
    const guard = guardApiRequest(request, 'mail')
    if (!guard.ok) {
        return NextResponse.json(
            { msg: 'fail' },
            {
                status: guard.status ?? 429,
                headers: guard.headers,
            }
        )
    }

    try {
        let payload: unknown
        try {
            payload = await request.json()
        } catch {
            return NextResponse.json(
                { msg: 'fail' },
                { status: 400, headers: guard.headers }
            )
        }

        const parsedPayload = contactMailSchema.safeParse(payload)
        if (!parsedPayload.success) {
            return NextResponse.json(
                { msg: 'fail' },
                { status: 400, headers: guard.headers }
            )
        }
        const { email, name, message, section } = parsedPayload.data
        const receiverEmail = getReceiverEmail()
        if (!receiverEmail) {
            return NextResponse.json(
                { msg: 'fail' },
                { status: 500, headers: guard.headers }
            )
        }

        const portfolioUrl = getPortfolioUrl()
        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safeSection = escapeHtml(section ?? 'Contact')
        const safeMessage = escapeHtml(message)

        await sendMail({
            toEmail: receiverEmail,
            toName: 'Anoop Jadhav',
            subject: `Portfolio | New message from ${name}`,
            textPart: `${name} (${email}) sent a message from ${section ?? 'Contact'} section.\n\n${message}`,
            htmlPart: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Message from Portfolio</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Section:</strong> ${safeSection}</p>
                    <p><strong>Message:</strong></p>
                    <p>${safeMessage}</p>
                    <hr />
                    <p>Source: <a href="${portfolioUrl}">${portfolioUrl}</a></p>
                </div>
            `,
        })

        return NextResponse.json(
            { msg: 'success' },
            { status: 200, headers: guard.headers }
        )
    } catch (error) {
        console.error('/api/mail failed:', error)
        return NextResponse.json(
            process.env.NODE_ENV === 'development'
                ? {
                      msg: 'fail',
                      error:
                          error instanceof Error
                              ? error.message
                              : 'unknown error',
                  }
                : { msg: 'fail' },
            { status: 500, headers: guard.headers }
        )
    }
}
