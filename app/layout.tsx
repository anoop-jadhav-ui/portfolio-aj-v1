import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const poppins = localFont({
    src: [
        {
            path: '../src/assets/Poppins/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../src/assets/Poppins/Poppins-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'Anoop Jadhav | Frontend Engineer',
        template: '%s | Anoop Jadhav',
    },
    description:
        "Frontend Engineer skilled in React and modern web technologies. View Anoop Jadhav's portfolio.",
    metadataBase: new URL('https://anoopjadhav.in'),
    alternates: {
        canonical: '/',
    },
    manifest: '/site.webmanifest',
    keywords: [
        'Anoop Jadhav',
        'Frontend Engineer',
        'React',
        'Next.js',
        'Web Developer',
        'Portfolio',
        'UI Developer',
    ],
    openGraph: {
        title: 'Anoop Jadhav | Frontend Engineer',
        description:
            "Checkout Anoop Jadhav's portfolio showcasing frontend engineering skills.",
        url: 'https://anoopjadhav.in',
        siteName: 'Anoop Jadhav Portfolio',
        images: [
            {
                url: '/images/og_image.png',
                width: 1200,
                height: 630,
                alt: 'Anoop Jadhav Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anoop Jadhav | Frontend Engineer',
        description:
            "Checkout Anoop Jadhav's portfolio showcasing frontend engineering skills.",
        images: ['/images/og_image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export const viewport: Viewport = {
    themeColor: '#ff676b',
}

const themeInitScript = `
(() => {
  try {
    const stored = sessionStorage.getItem('darkMode');
    const isDark = stored === null ? true : JSON.parse(stored) === true;
    const mode = isDark ? 'dark' : 'light';
    const root = document.documentElement;
    const body = document.body;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    root.style.colorScheme = mode;
    if (body) {
      body.classList.remove('light', 'dark');
      body.classList.add(mode);
    }
  } catch (_) {
    document.documentElement.classList.add('dark');
    if (document.body) {
      document.body.classList.add('dark');
    }
  }
})();
`

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
            <body className={`${poppins.className} dark`} suppressHydrationWarning>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <a href="#main-content" className="skip-to-main">
                    Skip to main content
                </a>
                <main id="main-content" tabIndex={-1}>
                    {children}
                </main>
            </body>
        </html>
    )
}
