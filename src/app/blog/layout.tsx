import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | EU StudyAssist - Study Abroad Insights & Tips',
  description: 'Discover valuable insights, tips, and guides for studying abroad in Europe. Read about student loans, education financing, scholarships, and more from EU StudyAssist experts.',
  keywords: [
    'study abroad blog',
    'EU StudyAssist blog',
    'student loans',
    'education financing',
    'European education',
    'study tips',
    'scholarships',
    'student life',
    'education insights'
  ],
  authors: [{ name: 'EU StudyAssist' }],
  creator: 'EU StudyAssist',
  publisher: 'EU StudyAssist',
  
  openGraph: {
    title: 'EU StudyAssist Blog - Study Abroad Insights & Tips',
    description: 'Discover valuable insights, tips, and guides for studying abroad in Europe. Expert advice on student loans, education financing, and more.',
    url: '/blog',
    siteName: 'EU StudyAssist',
    type: 'website',
    images: [
      {
        url: '/og-blog.png', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'EU StudyAssist Blog - Study Abroad Made Easy',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'EU StudyAssist Blog - Study Abroad Insights & Tips',
    description: 'Discover valuable insights, tips, and guides for studying abroad in Europe.',
    creator: '@eustudyassist',
    site: '@eustudyassist',
    images: ['/og-blog.png'],
  },
  
  alternates: {
    canonical: '/blog',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>;
}
