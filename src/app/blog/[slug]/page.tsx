import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostClient } from '@/components/blog/blog-post-client';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
