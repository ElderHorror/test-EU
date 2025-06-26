import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/components/layout/Providers";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

// Use local Inter font files instead of fetching from Google Fonts
const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_18pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Inter_18pt-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

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
