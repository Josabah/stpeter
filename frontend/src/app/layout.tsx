import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: {
    default: 'kidus petros gibi gubae – Gebi Gubae',
    template: '%s | St. Peter Orthodox gibi gubae',
  },
  description:
    'Official website of kidus petros gibi gubae (Gebi Gubae). Service times, history, events, and Orthodox Christian faith.',
  keywords: [
    'kidus petros gibi gubae',
    'Gibi Gubae petros',
    'st peter gibi gubae',
    'gibi gubae betekrstian',
    'orthodox gibi gubae',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
openGraph: {
    title: 'Kidus Petros Gibi Gubae',
    description:
      'Official website of Kidus Petros Gibi Gubae. Service times, history, and events.',
    url: 'https://stpeter.vercel.app',
    siteName: 'St Peter Church',
    images: [
      {
        url: '/og-image.jpg', // IMPORTANT: this must exist in /public
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};
