import { createClient } from "contentful";

// Contentful configuration
const SPACE_ID = "qpmxuq9j1cps";
const ACCESS_TOKEN = "36ZZPrdvrKICiFOp-6VDCAGIApiuh3XJVj_eeMjoJFI";

// Create Contentful client
export const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

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
  };
}

// Fetch all blog posts from Contentful
export async function fetchBlogPosts(): Promise<ProcessedBlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "euStudyBlog",
      order: ["-sys.createdAt"], // Order by creation date, newest first
      include: 2, // Include linked assets
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
  try {
    const response = await contentfulClient.getEntries({
      content_type: "euStudyBlog",
      "fields.slug": slug,
      include: 2,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return processBlogPost(response.items[0]);
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}

// Get unique categories from blog posts
export async function fetchBlogCategories(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "euStudyBlog",
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
