import { useState, useEffect, useMemo } from 'react';
import { fetchBlogPosts, fetchBlogCategories, ProcessedBlogPost } from '@/lib/contentful';

interface UseBlogPostsReturn {
  posts: ProcessedBlogPost[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
  filteredPosts: ProcessedBlogPost[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function useBlogPosts(): UseBlogPostsReturn {
  const [posts, setPosts] = useState<ProcessedBlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['View All']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('View All');

  // Fetch blog posts and categories on component mount
  useEffect(() => {
    async function loadBlogData() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch posts and categories in parallel
        const [blogPosts, blogCategories] = await Promise.all([
          fetchBlogPosts(),
          fetchBlogCategories(),
        ]);

        setPosts(blogPosts);
        setCategories(blogCategories);
      } catch (err) {
        console.error('Error loading blog data:', err);
        setError('Failed to load blog posts. Please try again later.');
        
        // Set fallback categories if fetch fails
        setCategories(['View All', 'Programming', 'Self Development', 'Travels', 'Career', 'Finance']);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogData();
  }, []);

  // Filter posts based on active filter
  const filteredPosts = useMemo(() => {
    if (activeFilter === 'View All') {
      return posts;
    }
    return posts.filter(post => post.category === activeFilter);
  }, [posts, activeFilter]);

  return {
    posts,
    categories,
    isLoading,
    error,
    filteredPosts,
    activeFilter,
    setActiveFilter,
  };
}
