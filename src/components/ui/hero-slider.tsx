'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import Link from 'next/link';
import { BookOpen, Globe, Target, Brain, Zap, Award, Users, Lightbulb } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  icon: any;
  color: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Eğitim Programlarımız",
    subtitle: "Başarıya Giden Yolda Yanınızdayız",
    description: "",
    features: [],
    primaryButtonText: "Demo Ders Al",
    primaryButtonLink: "#demo-section",
    secondaryButtonText: "WhatsApp'tan Yazın",
    secondaryButtonLink: "https://wa.me/903322350202",
    icon: BookOpen,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 3,
    title: "Branş Dersleri & Koçluk",
    subtitle: "Her Konuda Uzman Desteği",
    description: "Türkçe'den Matematiğe, Fen'den Sosyal'e kadar tüm branşlarda birebir dersler. Plus motivasyon koçluğu ile başarıya giden yolda yanınızdayız!",
    features: ["👨‍🏫 Branş Uzmanları", "🧠 Motivasyon Koçluğu", "📈 Kişisel Gelişim", "🎯 Hedef Belirleme"],
    primaryButtonText: "Ücretsiz Danışmanlık",
    primaryButtonLink: "#demo-section",
    secondaryButtonText: "WhatsApp'tan Yazın",
    secondaryButtonLink: "https://wa.me/903322350202",
    icon: Brain,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 4,
    title: "Aile Birleşim & Sınav Hazırlık",
    subtitle: "Hayatınızı Değiştirecek Fırsatlar",
    description: "Aile birleşimi için A1 Türkçe eğitimi, YDS/YDT hazırlık ve özel sınav teknikleri. Yeni bir hayata adım atmanın en kolay yolu!",
    features: ["👨‍👩‍👧‍👦 Aile Birleşim", "📝 Sınav Teknikleri", "🇹🇷 Kültürel Uyum", "⚡ Hızlı Sonuç"],
    primaryButtonText: "Ücretsiz Bilgi Al",
    primaryButtonLink: "#demo-section",
    secondaryButtonText: "WhatsApp'tan Yazın",
    secondaryButtonLink: "https://wa.me/903322350202",
    icon: Users,
    color: 'from-green-500 to-green-600'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Ultra Crazy Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Hexagonal Grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hexgrid' width='60' height='52' patternUnits='userSpaceOnUse'%3E%3Cpolygon points='30,2 55,15 55,37 30,50 5,37 5,15' fill='none' stroke='%23f7b500' stroke-width='1.5' opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23hexgrid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Massive Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-10 left-10 w-60 h-60 border-4 border-[#f7b500]/20 rotate-45"
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-48 h-48 bg-gradient-to-br from-[#f7b500]/25 to-[#e6a300]/15 rounded-full"
          animate={{ 
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 border-2 border-[#f7b500]/30 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-40 w-56 h-56 bg-gradient-to-r from-[#f7b500]/30 via-[#e6a300]/20 to-transparent rotate-12"
          animate={{ 
            rotate: [12, 372, 12],
            scale: [1, 0.7, 1.4, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Mega Floating Icons */}
        <motion.div 
          className="absolute top-1/4 left-1/3 text-[#f7b500]/15"
          animate={{ 
            y: [-50, 50, -50],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <BookOpen className="w-32 h-32" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/4 text-[#f7b500]/12"
          animate={{ 
            x: [-40, 40, -40],
            y: [-30, 30, -30],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Globe className="w-40 h-40" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/2 text-[#f7b500]/10"
          animate={{ 
            rotate: [0, 360, 0],
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Brain className="w-48 h-48" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-1/3 text-[#f7b500]/8"
          animate={{ 
            y: [-60, 60, -60],
            x: [-40, 40, -40],
            rotate: [0, -360, 0]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Lightbulb className="w-44 h-44" strokeWidth={0.5} />
        </motion.div>
        
        {/* Mega Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#f7b500]/20 via-[#e6a300]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#f7b500]/25 via-[#e6a300]/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#f7b500]/15 via-[#e6a300]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-gradient-to-tl from-[#f7b500]/12 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Ultra Floating Particles */}
        {[
          { left: 10, top: 15 }, { left: 90, top: 25 }, { left: 20, top: 75 }, { left: 80, top: 85 },
          { left: 40, top: 10 }, { left: 85, top: 55 }, { left: 15, top: 45 }, { left: 65, top: 90 },
          { left: 30, top: 35 }, { left: 75, top: 15 }, { left: 25, top: 80 }, { left: 70, top: 30 },
          { left: 50, top: 5 }, { left: 95, top: 40 }, { left: 5, top: 60 }, { left: 55, top: 95 }
        ].map((position, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} bg-gradient-to-r ${i % 2 === 0 ? 'from-[#f7b500]/60 to-[#e6a300]/40' : 'from-[#e6a300]/50 to-[#f7b500]/30'} rounded-full`}
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.4, 1, 0.4],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Animated Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#f7b500]/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#e6a300]/25 to-transparent"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
        {currentSlide === 0 ? (
          /* Split Layout for First Slide */
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-7xl mx-auto min-h-[600px]">
            {/* Left Side - LGS Hazırlık */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12"
            >
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-montserrat">
                <span className="bg-gradient-to-r from-white via-[#f7b500] to-white bg-clip-text text-transparent">
                  LGS Hazırlık Eğitimleri
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-[#f7b500] mb-4 font-semibold">
                Hedeflediğiniz Liseye Giriş Garantisi
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-md leading-relaxed">
                LGS'de %100 başarı için özel stratejiler, deneme sınavları ve motivasyon koçluğu.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {["📚 Uzman Kadro", "🎯 Strateji Odaklı", "📊 İlerleme Takibi", "🏆 Başarı Garantisi"].map((feature, idx) => (
                  <div key={idx} className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#f7b500]/20">
                    <span className="text-xs sm:text-sm font-bold text-[#f7b500]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-bold px-6 py-3 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/egitimler/lgs-hazirlik">
                  Detaylı Bilgi
                </Link>
              </Button>
            </motion.div>
            
            {/* Divider Line */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#f7b500] to-transparent"></div>
            <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-[#f7b500] to-transparent my-8"></div>
            
            {/* Right Side - Yabancı Dil */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12"
            >
              <div className="mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-montserrat">
                <span className="bg-gradient-to-r from-white via-[#f7b500] to-white bg-clip-text text-transparent">
                  Yabancı Dil Eğitimleri
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-[#f7b500] mb-4 font-semibold">
                Dünyayı Keşfetmeye Hazır mısınız?
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-md leading-relaxed">
                15+ dilde uzman eğitmenlerimizle akıcı konuşma becerisi kazanın. Sadece dil değil, kültürü de öğrenin!
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {["🚀 Hızlı Öğrenme", "🎯 Kişiye Özel", "🌍 Kültürel İçerik", "💬 Konuşma Odaklı"].map((feature, idx) => (
                  <div key={idx} className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#f7b500]/20">
                    <span className="text-xs sm:text-sm font-bold text-[#f7b500]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold px-6 py-3 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/egitimler/yabanci-diller">
                  Detaylı Bilgi
                </Link>
              </Button>
            </motion.div>
          </div>
        ) : (
          /* Normal Layout for Other Slides */
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              key={`icon-${currentSlide}`}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex justify-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r ${slides[currentSlide].color} rounded-full flex items-center justify-center shadow-2xl`}>
                  {slides[currentSlide].icon && React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white" })}
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-montserrat leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-[#f7b500] to-white bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </motion.h1>
            
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#f7b500] mb-6 sm:mb-8 font-semibold"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
            >
              {slides[currentSlide].description}
            </motion.p>
            
            {/* Features */}
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
            >
              {slides[currentSlide].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2 bg-black/30 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-[#f7b500]/20">
                  <span className="text-xs sm:text-sm font-bold text-[#f7b500]">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              key={`buttons-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] hover:from-[#e6a300] hover:to-[#f7b500] text-black font-bold px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                data-analytics="cta_click"
              >
                <Link href={slides[currentSlide].primaryButtonLink}>
                  {slides[currentSlide].primaryButtonText}
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                data-analytics="whatsapp_click"
              >
                <Link href={slides[currentSlide].secondaryButtonLink} target="_blank">
                  {slides[currentSlide].secondaryButtonText}
                </Link>
              </Button>
            </motion.div>
          </div>
        )}
      </div>


      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-[#f7b500] to-[#e6a300] scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
