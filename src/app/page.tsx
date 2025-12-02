'use client';

import { HeroSlider } from '@/components/ui/hero-slider';
import { SectionTitle } from '@/components/ui/section-title';
import { ProgramCard } from '@/components/ui/program-card';
import { TestimonialSlider } from '@/components/ui/testimonial-slider';
import { VideoPopup } from '@/components/ui/video-popup';
import { BlogCard } from '@/components/ui/blog-card';
import { FeaturedBlogCard } from '@/components/ui/featured-blog-card';
import { programs, testimonials, whyChooseUs } from '@/data/programs';
import { featuredBlogPosts, blogCategories } from '@/data/blog';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Eğitim Kadrosu Section */}
      <section className="min-h-screen flex flex-col bg-white">
        <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-8 flex-1 flex flex-col">
          <SectionTitle
            title="Eğitim Kadromuz"
            subtitle="Uzman eğitmenlerimizle tanışın"
            className="mb-32 mt-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-8">
            {/* Kurucu - Kader Koçyiğit */}
            <div className="text-center flex flex-col">
              <div className="bg-gray-100 rounded-xl p-4 sm:p-6 mb-4 flex-1 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[320px] sm:min-h-[480px]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f7b500] via-[#ffd700] to-[#f7b500]"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f7b500]/20 to-transparent rounded-bl-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#f7b500]/20 to-transparent rounded-tr-2xl"></div>
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                <VideoPopup
                  videoSrc="/Eğitim Kadrosu-1.mp4"
                  title="Kurucu - Kader Koçyiğit"
                  description="Happy Academy'yi tanıtıyor"
                />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex-shrink-0 text-center mt-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#f7b500] h-8 flex items-center justify-center">Kurucu - Kader Koçyiğit</h3>
                      <p className="text-gray-600 text-base mb-4">Happy Academy'nin kurucusu olarak eğitim felsefemizi ve öğrencilerimize sunduğumuz değerleri paylaşıyor.</p>
                    </div>
                    <div className="text-center mt-4 flex-shrink-0">
                      <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="bg-[#f7b500] px-4 py-2 rounded-full text-black font-bold">Kurucu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* İngilizce Öğretmeni - Cometsi */}
            <div className="text-center flex flex-col">
              <div className="bg-gray-100 rounded-xl p-4 sm:p-6 mb-4 flex-1 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[320px] sm:min-h-[480px]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f7b500] via-[#ffd700] to-[#f7b500]"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f7b500]/20 to-transparent rounded-bl-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#f7b500]/20 to-transparent rounded-tr-2xl"></div>
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                <VideoPopup
                  videoSrc="/Eğitim Kadrosu-2.mp4"
                  title="İngilizce Öğretmeni - Cometsi"
                  description="Derste neler yaptığımızı ve neden bu kursu tercih etmeniz gerektiğini anlatıyor"
                />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex-shrink-0 text-center mt-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#f7b500] h-8 flex items-center justify-center">İngilizce Öğretmeni - Cometsi</h3>
                      <p className="text-gray-600 text-base mb-4">Derste neler yaptığımızı ve neden bu kursu tercih etmeniz gerektiğini detaylı bir şekilde açıklıyor.</p>
                    </div>
                    <div className="text-center mt-4 flex-shrink-0">
                      <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="bg-[#f7b500] px-4 py-2 rounded-full text-black font-bold">İngilizce Öğretmeni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Matematik Öğretmeni - Gizem Yılmaz */}
            <div className="text-center flex flex-col">
              <div className="bg-gray-100 rounded-xl p-4 sm:p-6 mb-4 flex-1 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[320px] sm:min-h-[480px]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f7b500] via-[#ffd700] to-[#f7b500]"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f7b500]/20 to-transparent rounded-bl-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#f7b500]/20 to-transparent rounded-tr-2xl"></div>
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                <VideoPopup
                  videoSrc="/Eğitim_Kadrosu-3.mp4"
                  title="Matematik Öğretmeni - Gizem Yılmaz"
                  description="Matematik eğitimi hakkında bilgi veriyor"
                />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex-shrink-0 text-center mt-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#f7b500] h-8 flex items-center justify-center">Matematik Öğretmeni - Gizem Yılmaz</h3>
                      <p className="text-gray-600 text-base mb-4">Matematik eğitimi ve öğretim yaklaşımımız hakkında değerli bilgiler paylaşıyor.</p>
                    </div>
                    <div className="text-center mt-4 flex-shrink-0">
                      <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="bg-[#f7b500] px-4 py-2 rounded-full text-black font-bold">Matematik Öğretmeni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23f7b500' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Yellow Light Effects */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#f7b500]/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#f7b500]/20 rounded-full blur-xl"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-10 right-20 w-24 h-24 border border-[#f7b500]/30 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 border border-[#f7b500]/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#f7b500]/20 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-[#f7b500]/20 rounded-lg rotate-12"></div>
        
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <SectionTitle
            title="Programlarımız"
            subtitle="Size en uygun eğitim programını seçin"
            className="mb-20 mt-8"
            titleColor="text-white"
            subtitleColor="text-gray-300"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.description}
                badges={program.badges}
                link={program.link}
                iconName={program.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[#f7b500]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tr from-[#f7b500]/15 to-transparent rounded-full blur-2xl"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-[#f7b500] to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-1 bg-gradient-to-l from-[#f7b500] to-transparent"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <SectionTitle
            title="Neden Happy Academy?"
            subtitle="Başarınız için sunduğumuz avantajlar"
            className="mb-16 mt-8"
            titleColor="text-gray-800"
            subtitleColor="text-gray-600"
          />
          
          {/* Video Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-[#f7b500]/20 transition-all duration-500">
                <VideoPopup
                  videoSrc="/Happy-Academy-Tanıtım-Final.mp4"
                  title="Happy Academy Tanıtım Videosu"
                  description="Kurumumuzu daha yakından tanıyın"
                />
              </div>
            </div>
            
            <div className="flex-1 lg:pl-8 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                Eğitimde <span className="text-[#f7b500] relative">
                  Farkımız
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#f7b500]/30 rounded-full"></div>
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed px-4 lg:px-0">
                Happy Academy olarak, öğrencilerimizin başarısı için sürekli kendimizi geliştiriyor, 
                en modern eğitim tekniklerini kullanıyor ve her öğrencimize özel ilgi gösteriyoruz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#f7b500] to-[#e6a300] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">A</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">B</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">C</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">+</div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-gray-800 font-bold text-lg sm:text-xl">1000+</span>
                  <span className="text-gray-600 text-sm sm:text-base">Mutlu Öğrenci</span>
                </div>
                <Link href="/hakkimizda" className="group">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#f7b500] to-[#e6a300] hover:from-[#e6a300] hover:to-[#f7b500] text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-sm sm:text-base">Hakkımızda</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const iconComponents = [
                // Uzman Kadro - People/Team icon
                <div key="team" className="flex items-center justify-center w-full h-full">
                  <div className="relative">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>,
                // Yoğun Pratik - Strength/Training icon
                <div key="strength" className="flex items-center justify-center w-full h-full">
                  <div className="relative">
                    <div className="w-8 h-6 sm:w-12 sm:h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full relative">
                      <div className="absolute inset-1 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full"></div>
                      <div className="absolute top-1 left-2 w-1 h-2 bg-orange-600 rounded-full"></div>
                      <div className="absolute top-1 right-2 w-1 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                  </div>
                </div>,
                // Deneme & Analiz - Chart/Analytics icon
                <div key="chart" className="flex items-center justify-center w-full h-full">
                  <div className="relative w-8 h-8 sm:w-12 sm:h-12">
                    <div className="absolute bottom-0 left-0 w-1 h-2 sm:w-2 sm:h-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"></div>
                    <div className="absolute bottom-0 left-2 sm:left-3 w-1 h-3 sm:w-2 sm:h-6 bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"></div>
                    <div className="absolute bottom-0 left-4 sm:left-6 w-1 h-4 sm:w-2 sm:h-8 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-sm"></div>
                    <div className="absolute bottom-0 left-6 sm:left-9 w-1 h-5 sm:w-2 sm:h-10 bg-gradient-to-t from-[#f7b500] to-[#e6a300] rounded-t-sm"></div>
                    <div className="absolute top-0 right-0 w-1 h-1 bg-[#f7b500] rounded-full animate-pulse"></div>
                  </div>
                </div>,
                // Koçluk & Takip - Target/Goal icon
                <div key="target" className="flex items-center justify-center w-full h-full">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 sm:border-4 border-pink-400 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-8 sm:h-8 border-1 sm:border-2 border-red-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-4 sm:h-4 bg-gradient-to-br from-[#f7b500] to-[#e6a300] rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-1 sm:w-4 sm:h-1 bg-gradient-to-r from-[#f7b500] to-transparent transform rotate-45 rounded-full"></div>
                  </div>
                </div>
              ];
              return (
                <div key={item.id} className="text-center group p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {iconComponents[index]}
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 sm:border-3 border-[#f7b500] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs sm:text-sm font-bold text-[#f7b500]">{index + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f7b500]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-[#f7b500] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Creative Blog Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#f7b500]/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#f7b500]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 border border-[#f7b500]/15 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-[#f7b500]/20 to-transparent rotate-12 animate-pulse"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#f7b500]/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-[#f7b500]/8 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
        </div>
        
        <div className="container relative z-10 flex flex-col justify-center min-h-screen">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 -mt-16 sm:-mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4">
              Eğitim Blogumuz
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Öğrenme yolculuğunuzda size rehberlik edecek içerikler
            </p>
          </div>
          
          {/* Creative Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-7xl mx-auto">
            {/* Left Side - 3 Posts Stack */}
            <div className="space-y-3 sm:space-y-4 flex flex-col justify-center">
              {featuredBlogPosts.slice(0, 3).map((post, index) => {
                const categoryInfo = blogCategories.find(cat => cat.id === post.category);
                return (
                  <div
                    key={post.id}
                    className="relative group"
                  >
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-l-4 border-[#f7b500] flex flex-col min-h-[140px] sm:min-h-[160px]">
                        <div className="flex items-start gap-2 sm:gap-3 mb-2">
                          {/* Category Icon */}
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${categoryInfo?.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <span className="text-sm sm:text-base">{categoryInfo?.icon}</span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-800 mb-1 group-hover:text-[#f7b500] transition-colors duration-300 line-clamp-2 text-xs sm:text-sm leading-tight">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-snug">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3 flex-shrink-0" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="text-[#f7b500] text-xs sm:text-sm font-semibold">
                            Oku →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            
            {/* Right Side - 3 Posts Stack */}
            <div className="space-y-3 sm:space-y-4 flex flex-col justify-center">
              {featuredBlogPosts.slice(3, 6).map((post, index) => {
                const categoryInfo = blogCategories.find(cat => cat.id === post.category);
                return (
                  <div
                    key={post.id}
                    className="relative group"
                  >
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-l-4 border-[#f7b500] flex flex-col min-h-[140px] sm:min-h-[160px]">
                        <div className="flex items-start gap-2 sm:gap-3 mb-2">
                          {/* Category Icon */}
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${categoryInfo?.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <span className="text-sm sm:text-base">{categoryInfo?.icon}</span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-800 mb-1 group-hover:text-[#f7b500] transition-colors duration-300 line-clamp-2 text-xs sm:text-sm leading-tight">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-snug">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3 flex-shrink-0" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="text-[#f7b500] text-xs sm:text-sm font-semibold">
                            Oku →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-4 sm:mt-6">
            <Link href="/blog" className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:from-[#e6a300] group-hover:to-[#f7b500] overflow-hidden">
              {/* Background shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="text-sm sm:text-base relative z-10">Tüm Yazıları Gör</span>
              <div className="w-5 h-5 sm:w-7 sm:h-7 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-all duration-300 relative z-10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="section-padding bg-[#f7b500]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Açıklama */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-montserrat">
                Ücretsiz Seviye Tespiti & Demo Derslerimiz
              </h2>
              <p className="text-lg text-black/80 mb-6 leading-relaxed">
                Size en uygun programı bulalım. Uzman eğitmenlerimizle birebir görüşme yaparak 
                hedeflerinize uygun eğitim planını oluşturalım. Hiçbir yükümlülük olmadan 
                ücretsiz seviye tespiti ve demo dersimize katılın.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black font-medium">Kişiselleştirilmiş eğitim planı</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black font-medium">Uzman eğitmen desteği</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black font-medium">Hedef odaklı yaklaşım</span>
                </div>
              </div>
            </div>
            
            {/* Sağ taraf - Sosyal Medya Butonları */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-6 font-montserrat">
                  Hemen İletişime Geçin
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/903322350202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105"
                    data-analytics="whatsapp_click"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>WhatsApp ile Yazın</span>
                  </a>
                  
                  <a
                    href="https://instagram.com/happyacademykonya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105"
                    data-analytics="instagram_click"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram'da Takip Et</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
