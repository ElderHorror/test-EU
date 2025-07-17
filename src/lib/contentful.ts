import { createClient } from "contentful";

// Contentful configuration
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;

// Create Contentful client only on server-side
let contentfulClient: any = null;
if (typeof window === 'undefined') {
  // Validate required environment variables at runtime only on server
  if (!ACCESS_TOKEN) {
    console.error("Error: CONTENTFUL_ACCESS_TOKEN is not set. Contentful client initialization failed. Please set this environment variable.");
    throw new Error("Missing CONTENTFUL_ACCESS_TOKEN. Contentful client cannot be initialized.");
  }

  if (!SPACE_ID) {
    console.error("Error: CONTENTFUL_SPACE_ID is not set. Using fallback value, but this should be set in production. Contentful client initialization may fail with incorrect credentials.");
  }

  const { createClient } = require('contentful');
  contentfulClient = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    environment: ENVIRONMENT,
  });
}

export { contentfulClient };

export interface ProcessedBlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  image: string;
  bannerImage?: string;
  minuteRead?: number;
  author?: string;
  content?: any;
  createdAt: string;
  updatedAt: string;
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

// Helper function to extract image URL from Contentful asset
export function getImageUrl(asset?: any): string {
  if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
    return "/00.png"; // Fallback image
  }

  const url = asset.fields.file.url;
  // Handle both string URLs and AssetFile objects
  const urlString = typeof url === "string" ? url : url.url || "";
  return urlString.startsWith("//") ? `https:${urlString}` : urlString;
}

// Helper function to process blog post data
export function processBlogPost(entry: any): ProcessedBlogPost {
  const { fields, sys } = entry;

  // Process keywords - handle both string and array formats
  let processedKeywords: string[] = [];
  if (fields.keywords) {
    if (typeof fields.keywords === "string") {
      // If keywords is a string, split by comma and clean up
      processedKeywords = fields.keywords
        .split(",")
        .map((keyword: string) => keyword.trim())
        .filter((keyword: string) => keyword.length > 0);
    } else if (Array.isArray(fields.keywords)) {
      // If keywords is already an array
      processedKeywords = fields.keywords.filter(
        (keyword: string) => keyword && keyword.trim().length > 0
      );
    }
  }

  return {
    id: sys.id,
    title: fields.title || "Untitled",
    description: fields.description || "",
    slug: fields.slug || "",
    category: fields.category || "General",
    image: getImageUrl(fields.thumbnail),
    bannerImage: getImageUrl(fields.bannerImage),
    minuteRead: fields.minuteRead,
    author: fields.author,
    content: fields.content,
    createdAt: sys.createdAt,
    updatedAt: sys.updatedAt,
    // SEO fields
    metaTitle: fields.metaTitle || fields.title,
    metaDescription: fields.metaDescription || fields.description,
    keywords: processedKeywords.length > 0 ? processedKeywords : undefined,
  };
}

// Fetch all blog posts from Contentful
export async function fetchBlogPosts(): Promise<ProcessedBlogPost[]> {
  const contentType = "euStudyBlogProduciton";
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
      order: ["-sys.createdAt"],
      include: 2,
      // Cache busting
      "sys.updatedAt[gte]": "1970-01-01",
      "ts": Date.now(),
      // Add cache tag
      next: { tags: ['blog-posts'] }
    });

    return response.items.map(processBlogPost);
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(
  slug: string
): Promise<ProcessedBlogPost | null> {
  const contentType = "euStudyBlogProduciton";
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
      "fields.slug": slug,
      include: 2,
      limit: 1,
      // Cache busting
      "sys.updatedAt[gte]": "1970-01-01",
      "ts": Date.now(),
      // Add cache tag
      next: { tags: ['blog-posts'] }
    });

    if (response.items.length === 0) {
      return null;
    }

    return processBlogPost(response.items[0]);
  } catch (error: any) {
    console.error("Error fetching blog post by slug:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
      slug: slug,
      contentType: contentType,
      status: error.response?.status || 'N/A',
      statusText: error.response?.statusText || 'N/A',
      data: error.response?.data || 'N/A'
    });
    return null;
  }
}

// Get unique categories from blog posts
export async function fetchBlogCategories(): Promise<string[]> {
  const contentType = "euStudyBlogProduciton"; // Hardcoded to ensure correct content type
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
      select: ["fields.category"],
    });

    const categories = response.items
      .map((item: any) => item.fields.category)
      .filter(
        (category: any, index: number, array: any[]) =>
          category && array.indexOf(category) === index
      );

    return ["View All", ...categories];
  } catch (error) {
    console.error("Error fetching blog categories:", error);
    return [
      "View All",
      "Programming",
      "Self Development",
      "Travels",
      "Career",
      "Finance",
    ];
  }
}

// Helper function to render rich text content as plain text
export function renderRichTextAsPlainText(richTextContent: any): string {
  if (!richTextContent || !richTextContent.content) {
    return "";
  }

  function extractText(node: any): string {
    if (node.nodeType === "text") {
      return node.value || "";
    }

    if (node.content && Array.isArray(node.content)) {
      return node.content.map(extractText).join("");
    }

    return "";
  }

  return richTextContent.content.map(extractText).join("\n\n");
}
