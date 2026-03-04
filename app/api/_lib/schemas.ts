import { z } from 'zod'

const emailSchema = z.string().trim().email().max(254)
const nameSchema = z.string().trim().min(1).max(100)
const messageSchema = z.string().trim().min(1).max(5000)

export const contactMailSchema = z.object({
    email: emailSchema,
    name: nameSchema,
    message: messageSchema,
    section: z.string().trim().max(100).optional(),
})

export const downloadLinkSchema = z.object({
    email: emailSchema,
    name: nameSchema,
    message: z.string().trim().max(5000).optional(),
})

export type ContactMailPayload = z.infer<typeof contactMailSchema>
export type DownloadLinkPayload = z.infer<typeof downloadLinkSchema>
