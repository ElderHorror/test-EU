import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/layout/Providers";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

// We're using local Inter font files instead of Google Fonts
// This import is kept for compatibility with existing code
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eustudyassist.com/"),
  title: {
    default: "EU StudyAssist - Study Abroad Made Easy",
    template: "%s | EU StudyAssist",
  },
  manifest: "https://eustudyassist.com/site.webmanifest",
  icons: {
    icon: "/favicon2.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "EU StudyAssist empowers scholarship recipients with financial support during pre-study periods. We eliminate financial barriers, provide student loans, and make studying in Europe stress-free for international students.",
  keywords: [
    "EU StudyAssist",
    "study abroad",
    "student loans",
    "education financing",
    "European education",
    "scholarship support",
    "international students",
    "study in Europe",
    "financial assistance",
    "education funding",
  ],
  authors: [{ name: "EU StudyAssist" }],
  creator: "EU StudyAssist",
  publisher: "EU StudyAssist",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eustudyassist.com/",
    siteName: "EU StudyAssist",
    title: "EU StudyAssist - Study Abroad Made Easy",
    description:
      "Empowering students with financial support and guidance for studying in Europe. Get student loans, scholarships, and expert advice.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "EU StudyAssist - Study Abroad Made Easy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EU StudyAssist - Study Abroad Made Easy",
    description:
      "Empowering students with financial support and guidance for studying in Europe.",
    creator: "@eustudyassist",
    site: "@eustudyassist",
    images: ["/og-default.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification=123123123123",
  },

  alternates: {
    canonical: "https://eustudyassist.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon2.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-7N6DT3DSEV" />
        <Analytics />
      </body>
    </html>
  );
}
