import { Metadata } from "next";
import { fetchBlogPostBySlug } from "@/lib/contentful";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await fetchBlogPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Blog Post Not Found | EU StudyAssist",
        description: "The requested blog post could not be found.",
      };
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://eustudyassist.com";
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    // Use SEO fields if available, otherwise fall back to defaults
    const title = post.metaTitle || `${post.title} | EU StudyAssist Blog`;
    const description = post.metaDescription || post.description;

    // Combine custom keywords with default ones
    const defaultKeywords = [
      post.category,
      "EU StudyAssist",
      "study abroad",
      "student loans",
      "education financing",
      "European education",
      post.author || "EU StudyAssist",
    ].filter(Boolean);

    const keywords =
      post.keywords && post.keywords.length > 0
        ? [...post.keywords, ...defaultKeywords]
        : defaultKeywords;

    return {
      title,
      description,
      keywords,
      authors: post.author
        ? [{ name: post.author }]
        : [{ name: "EU StudyAssist" }],
      creator: post.author || "EU StudyAssist",
      publisher: "EU StudyAssist",
      category: post.category,

      // Open Graph metadata for social sharing
      openGraph: {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.description,
        url: postUrl,
        siteName: "EU StudyAssist",
        type: "article",
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        authors: post.author ? [post.author] : ["EU StudyAssist"],
        section: post.category,
        tags:
          post.keywords && post.keywords.length > 0
            ? [...post.keywords, post.category, "study abroad", "student loans"]
            : [post.category, "study abroad", "student loans"],
        images: post.bannerImage
          ? [
              {
                url: post.bannerImage,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ]
          : [
              {
                url: `${baseUrl}/og-default.png`, // You'll need to create this default image
                width: 1200,
                height: 630,
                alt: "EU StudyAssist - Study Abroad Made Easy",
              },
            ],
      },

      // Twitter Card metadata
      twitter: {
        card: "summary_large_image",
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.description,
        creator: "@eustudyassist", // Replace with your actual Twitter handle
        site: "@eustudyassist",
        images: post.bannerImage
          ? [post.bannerImage]
          : [`${baseUrl}/og-default.png`],
      },

      // Additional metadata
      alternates: {
        canonical: postUrl,
      },

      // Robots metadata
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
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "EU StudyAssist Blog",
      description:
        "Read the latest insights about studying abroad and education financing.",
    };
  }
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return <>{children}</>;
}
