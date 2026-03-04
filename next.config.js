/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    outputFileTracingRoot: __dirname,
    env: {
        NEXT_PUBLIC_APP_API_KEY:
            process.env.NEXT_PUBLIC_APP_API_KEY ??
            process.env.VITE_APP_API_KEY ??
            process.env.VITE_APP_FIREBASE_KEY ??
            '',
        NEXT_PUBLIC_APP_AUTH_DOMAIN:
            process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN ??
            process.env.VITE_APP_AUTH_DOMAIN ??
            '',
        NEXT_PUBLIC_APP_DATABASE_URL:
            process.env.NEXT_PUBLIC_APP_DATABASE_URL ??
            process.env.VITE_APP_DATABASE_URL ??
            '',
        NEXT_PUBLIC_APP_PROJECT_ID:
            process.env.NEXT_PUBLIC_APP_PROJECT_ID ??
            process.env.VITE_APP_PROJECT_ID ??
            '',
        NEXT_PUBLIC_APP_STORAGE_BUCKET:
            process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET ??
            process.env.VITE_APP_STORAGE_BUCKET ??
            '',
        NEXT_PUBLIC_APP_MESSAGING_SENDER_ID:
            process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID ??
            process.env.VITE_APP_SENDER_ID ??
            '',
        NEXT_PUBLIC_APP_APP_ID:
            process.env.NEXT_PUBLIC_APP_APP_ID ??
            process.env.VITE_APP_APP_ID ??
            '',
        NEXT_PUBLIC_APP_MEASUREMENT_ID:
            process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID ??
            process.env.VITE_APP_MEASUREMENT_ID ??
            '',
        NEXT_PUBLIC_RESUME_FILENAME:
            process.env.NEXT_PUBLIC_RESUME_FILENAME ??
            process.env.VITE_RESUME_FILENAME ??
            '',
        NEXT_PUBLIC_HASHNODE_BLOG_URL:
            process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ??
            process.env.VITE_HASHNODE_BLOG_URL ??
            '',
        NEXT_PUBLIC_GTAG_ID:
            process.env.NEXT_PUBLIC_GTAG_ID ?? process.env.VITE_GTAG_ID ?? '',
        NEXT_PUBLIC_CLARITY_ID:
            process.env.NEXT_PUBLIC_CLARITY_ID ??
            process.env.VITE_CLARITY_ID ??
            '',
    },
}

module.exports = nextConfig
