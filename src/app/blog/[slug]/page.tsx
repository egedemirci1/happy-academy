'use client';

import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="h-screen pt-16 overflow-hidden">
      {/* Main Container */}
      <div className="h-full bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#f7b500]/20 to-[#e6a300]/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#f7b500]/15 to-[#e6a300]/15 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 px-6 py-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Link href="/blog">
                  <Button variant="outline" className="mb-4 bg-white/80 text-gray-700 hover:bg-[#f7b500] hover:text-black border-[#f7b500]/30 hover:border-[#f7b500]">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Blog'a Dön
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-4"
              >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 font-montserrat leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#f7b500]/20 text-[#f7b500] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Article Content */}
          <div className="flex-1 px-6 pb-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#f7b500]/20"
              >
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed font-normal text-base"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content
                        .replace(/\n/g, '<br>')
                        .replace(/## (.*?)(?=<br>|$)/g, '<h2 class="text-xl font-bold text-gray-800 mt-6 mb-3">$1</h2>')
                        .replace(/### (.*?)(?=<br>|$)/g, '<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
                        .replace(/- (.*?)(?=<br>|$)/g, '<li class="ml-4 mb-1 font-normal text-gray-700">$1</li>')
                        .replace(/(\d+)\. (.*?)(?=<br>|$)/g, '<li class="ml-4 mb-1 font-normal text-gray-700">$2</li>')
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
