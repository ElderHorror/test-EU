import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../../Components/Provider/Providers'
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  metadataBase: new URL("https://eustudyassist.com/"),
  title:{
    default:"EU Study assist",
    template: '%s | AyobamiOki '
  },
  icons: "https://eustudyassist.vercel.app/image.png",
  description: 'EUStudyAssist exists to empower scholarship recipients during the pre-study period when stipends have yet to materialize. Our commitment is to eliminate financial barriers that hinder academic progress. We believe in equal educational opportunities for all and provide not just financial support, but also pathways to realizing educational dreams, making the journey to Europe stress-free. ',
  verification:{
    google: 'google-site-verification=123123123123',
  },
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
