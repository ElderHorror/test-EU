import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../../Components/Provider/Providers'
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EU Study Assist',
  description: 'At EUStudyAssist, our goal is to support you in achieving your financial objectives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <GoogleAnalytics gaId="G-7N6DT3DSEV" />
        <Analytics />
      </body>
    </html>
  )
}
