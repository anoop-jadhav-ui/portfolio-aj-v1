import { NextResponse } from 'next/server'
import {
    escapeHtml,
    getPortfolioUrl,
    getReceiverEmail,
    getResumeUrl,
    sendMail,
} from '../../_lib/mailer'
import { downloadLinkSchema } from '../../_lib/schemas'

export async function POST(request: Request) {
    try {
        const payload = await request.json()
        const parsedPayload = downloadLinkSchema.safeParse(payload)
        if (!parsedPayload.success) {
            return NextResponse.json({ msg: 'fail' }, { status: 400 })
        }
        const { email, name, message } = parsedPayload.data

        const resumeUrl = getResumeUrl()
        if (!resumeUrl) {
            return NextResponse.json({ msg: 'fail' }, { status: 500 })
        }

        const portfolioUrl = getPortfolioUrl()
        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safeMessage = escapeHtml(message ?? 'N/A')

        await sendMail({
            toEmail: email,
            toName: name,
            subject: 'Portfolio | Resume Download Link',
            textPart: `Hi ${name},\n\nHere is the resume link:\n${resumeUrl}\n\nThanks for visiting ${portfolioUrl}`,
            htmlPart: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Hi ${safeName},</h2>
                    <p>Thanks for your interest. You can download the resume below:</p>
                    <p><a href="${resumeUrl}" target="_blank" rel="noreferrer">Download Resume</a></p>
                    <p>Portfolio: <a href="${portfolioUrl}">${portfolioUrl}</a></p>
                </div>
            `,
        })

        await sendMail({
            toEmail: getReceiverEmail(),
            toName: 'Anoop Jadhav',
            subject: `Portfolio | Resume requested by ${name}`,
            textPart: `${name} (${email}) requested resume download.\nMessage: ${
                message ?? 'N/A'
            }`,
            htmlPart: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Resume Download Request</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Message:</strong> ${safeMessage}</p>
                </div>
            `,
        })

        return NextResponse.json({ msg: 'success' }, { status: 200 })
    } catch (error) {
        console.error('/api/mail/download-link failed:', error)
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
            { status: 500 }
        )
    }
}
