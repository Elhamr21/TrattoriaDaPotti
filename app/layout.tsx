import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Trattoria Da Potti — Italienisches Restaurant in Zeuthen',
  description:
    'Frisch zubereitete italienische Küche in Zeuthen. Pizza, Pasta und mehr – in ansprechender Atmosphäre mit idyllischem Außenbereich. Reservierungen unter 033762204069.',
  generator: 'v0.app',
  keywords: [
    'Trattoria Da Potti',
    'Italienisches Restaurant',
    'Zeuthen',
    'Pizza',
    'Pasta',
    'Italienische Küche',
    'Restaurant Zeuthen',
  ],
  openGraph: {
    title: 'Trattoria Da Potti',
    description:
      'Frisch zubereitete italienische Gerichte in einer ansprechenden Atmosphäre. Genießen Sie milde Sommerabende in unserem idyllischen Außenbereich.',
    type: 'website',
    locale: 'de_DE',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdf8f2' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1712' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('potti-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
