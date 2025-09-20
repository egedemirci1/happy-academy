'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { BlogCard } from '@/components/ui/blog-card';
import { blogPosts, blogCategories } from '@/data/blog';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="h-screen pt-16 overflow-hidden">
      {/* Main Container */}
      <div className="h-full bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
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
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#f7b500]/25 to-[#e6a300]/25 rounded-full blur-lg"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header Section */}
          <div className="flex-shrink-0 px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-3 font-montserrat">
                  <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                    Eğitim Blogu
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                  Öğrenme yolculuğunuzda size rehberlik edecek içerikler
                </p>
              </motion.div>

              {/* Categories Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                <Button
                  onClick={() => setSelectedCategory('all')}
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-white/80 text-gray-600 hover:bg-[#f7b500] hover:text-black border-2 border-[#f7b500]/30 hover:border-[#f7b500]'
                  }`}
                >
                  Tümü
                </Button>
                {blogCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      onClick={() => setSelectedCategory(category.id)}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black shadow-lg hover:shadow-xl transform hover:scale-105'
                          : 'bg-white/80 text-gray-600 hover:bg-[#f7b500] hover:text-black border-2 border-[#f7b500]/30 hover:border-[#f7b500]'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Blog Posts Section */}
          <div className="flex-1 px-6 pb-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-montserrat">
                    {selectedCategory === 'all' ? 'Tüm Blog Yazıları' : blogCategories.find(c => c.id === selectedCategory)?.name || 'Blog Yazıları'}
                  </h2>
                  <div className="flex items-center justify-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">{filteredPosts.length} yazı</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Güncel içerikler</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
              >
                {filteredPosts.map((post, index) => {
                  const categoryInfo = blogCategories.find(cat => cat.id === post.category);
                  return (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#f7b500]/20 hover:border-[#f7b500]/40 h-full flex flex-col">
                        <BlogCard
                          post={post}
                          categoryInfo={categoryInfo!}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <div className="text-8xl mb-6">📝</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">Henüz yazı yok</h3>
                  <p className="text-gray-600 text-lg">Bu kategoride henüz yazı bulunmuyor.</p>
                  <Button className="mt-6 bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Tüm Yazıları Gör
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
