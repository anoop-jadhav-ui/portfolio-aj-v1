type SendMailInput = {
    toEmail: string
    toName?: string
    subject: string
    textPart: string
    htmlPart: string
}

export const escapeHtml = (value: string) =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')

type MailjetKeyPair = {
    publicKey: string
    privateKey: string
    source: string
}

const getEnv = (...keys: string[]) => {
    for (const key of keys) {
        const value = process.env[key]
        if (value && value.trim() !== '') {
            return value
        }
    }
    return undefined
}

export const getPortfolioUrl = () =>
    getEnv('PORTFOLIO_APP_URL', 'NEXT_PUBLIC_PORTFOLIO_APP_URL') ??
    'https://portfolio-next-snowy.vercel.app/'

export const getResumeUrl = () => {
    const bucket = getEnv(
        'NEXT_PUBLIC_APP_STORAGE_BUCKET',
        'VITE_APP_STORAGE_BUCKET'
    )
    const fileName =
        getEnv('NEXT_PUBLIC_RESUME_FILENAME', 'VITE_RESUME_FILENAME') ??
        'Resume_22Dec2022.pdf'

    if (!bucket) {
        return undefined
    }

    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
        `resume/${fileName}`
    )}?alt=media`
}

export const getReceiverEmail = () =>
    getEnv('MJ_RECEIVER_EMAIL') ?? 'anoopjadhav@gmail.com'

const getMailjetKeyPairs = (): MailjetKeyPair[] => {
    const pairs: MailjetKeyPair[] = []
    const mjPublic = getEnv('MJ_APIKEY_PUBLIC')
    const mjPrivate = getEnv('MJ_APIKEY_PRIVATE')
    const vitePublic = getEnv('VITE_MJ_APIKEY_PUBLIC')
    const vitePrivate = getEnv('VITE_MJ_APIKEY_PRIVATE')

    if (mjPublic && mjPrivate) {
        pairs.push({
            publicKey: mjPublic,
            privateKey: mjPrivate,
            source: 'MJ_APIKEY_*',
        })
    }

    if (vitePublic && vitePrivate) {
        const isDuplicatePair = pairs.some(
            (pair) =>
                pair.publicKey === vitePublic && pair.privateKey === vitePrivate
        )

        if (!isDuplicatePair) {
            pairs.push({
                publicKey: vitePublic,
                privateKey: vitePrivate,
                source: 'VITE_MJ_APIKEY_*',
            })
        }
    }

    return pairs
}

export const sendMail = async ({
    toEmail,
    toName,
    subject,
    textPart,
    htmlPart,
}: SendMailInput) => {
    const senderEmail = getEnv('MJ_SENDER_EMAIL') ?? getReceiverEmail()
    const credentialPairs = getMailjetKeyPairs()

    if (!credentialPairs.length || !senderEmail) {
        throw new Error('Missing Mailjet environment variables')
    }

    const mailJetModule = require('node-mailjet')
    const errors: string[] = []

    for (const pair of credentialPairs) {
        try {
            const mailjet = mailJetModule.apiConnect(
                pair.publicKey,
                pair.privateKey
            )

            await mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: senderEmail,
                            Name: 'Anoop Jadhav',
                        },
                        To: [
                            {
                                Email: toEmail,
                                Name: toName ?? toEmail,
                            },
                        ],
                        Subject: subject,
                        TextPart: textPart,
                        HTMLPart: htmlPart,
                        CustomID: 'portfolio-aj',
                    },
                ],
            })

            return
        } catch (error) {
            const err = error as {
                message?: string
                statusCode?: number
                response?: { status?: number }
            }
            const status = err.statusCode ?? err.response?.status ?? 'unknown'
            errors.push(
                `${pair.source} failed (status: ${status}): ${
                    err.message ?? 'unknown error'
                }`
            )
        }
    }

    throw new Error(`Mailjet request failed. ${errors.join(' | ')}`)
}
