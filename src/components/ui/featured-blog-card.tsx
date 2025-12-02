'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { BlogPost, BlogCategory } from '@/data/blog';

interface FeaturedBlogCardProps {
  post: BlogPost;
  categoryInfo: BlogCategory;
}

export function FeaturedBlogCard({ post, categoryInfo }: FeaturedBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Link href={`/blog/${post.id}`}>
        <Card className="h-full bg-white border-gray-200 hover:border-[#f7b500] transition-all duration-500 shadow-2xl hover:shadow-3xl group cursor-pointer overflow-hidden">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Large Header */}
            <div className={`relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${categoryInfo.color} text-white`}>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">{categoryInfo.icon}</span>
                  <span className="font-bold text-sm sm:text-base break-words">{categoryInfo.name}</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </div>
              </div>
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                  Öne Çıkan
                </Badge>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-[#f7b500] transition-colors duration-300 leading-tight break-words">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-1 break-words">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full hover:bg-[#f7b500]/10 hover:text-[#f7b500] transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span className="text-[#f7b500] font-bold text-sm sm:text-base group-hover:text-[#e6a300] transition-colors duration-300">
                  Devamını Oku →
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
