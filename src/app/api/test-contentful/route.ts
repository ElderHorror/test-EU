import { NextResponse } from 'next/server';
import { fetchBlogPosts, fetchBlogCategories } from '@/lib/contentful';

export async function GET() {
  try {
    console.log('Testing Contentful API...');
    
    // Test fetching blog posts
    const posts = await fetchBlogPosts();
    const categories = await fetchBlogCategories();
    
    return NextResponse.json({
      success: true,
      message: 'Contentful integration working!',
      data: {
        postsCount: posts.length,
        categoriesCount: categories.length,
        posts: posts.slice(0, 2), // Return first 2 posts as sample
        categories,
      },
    });
  } catch (error) {
    console.error('Contentful test error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Contentful integration failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
