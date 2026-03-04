import type { Metadata } from 'next'
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
    title: 'Anoop Jadhav',
    description: 'Portfolio web app',
    metadataBase: new URL('https://anoopjadhav.in'),
    manifest: '/site.webmanifest',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
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
