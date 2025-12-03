'use client';

import { memo } from 'react';
import { Card, CardContent } from './card';
import Link from 'next/link';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
  };
  categoryInfo: {
    name: string;
    icon: string;
    color: string;
  };
}

function BlogCardComponent({ post, categoryInfo }: BlogCardProps) {
  return (
    <div className="h-full">
      <Link href={`/blog/${post.id}`}>
        <Card className="h-full bg-white border-gray-200 hover:border-[#f7b500] transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer overflow-hidden">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Larger Header */}
            <div className={`relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${categoryInfo.color} text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{categoryInfo.icon}</span>
                  <span className="font-semibold text-xs sm:text-sm break-words">{categoryInfo.name}</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </div>
              </div>
            </div>

            {/* Content Area - Larger */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 group-hover:text-[#f7b500] transition-colors duration-300 leading-tight break-words">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 flex-1 break-words">
                {post.excerpt}
              </p>

              {/* Tags - More visible */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-[#f7b500]/10 hover:text-[#f7b500] transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span className="text-[#f7b500] font-semibold text-base group-hover:text-[#e6a300] transition-colors duration-300">
                  Devamını Oku →
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

// Memo ile export et
export const BlogCard = memo(BlogCardComponent);
