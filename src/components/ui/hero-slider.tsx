'use client';

import React, { useState, useEffect } from 'react';
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
      {/* Ultra Lightweight Background - CSS Only, No JS Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Hexagonal Grid */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hexgrid' width='60' height='52' patternUnits='userSpaceOnUse'%3E%3Cpolygon points='30,2 55,15 55,37 30,50 5,37 5,15' fill='none' stroke='%23f7b500' stroke-width='1.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23hexgrid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Single Subtle Gradient Orb - Static, no animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#f7b500]/10 via-[#e6a300]/8 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#f7b500]/12 via-[#e6a300]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Static Overlay - No animation for better performance */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
        {currentSlide === 0 ? (
          /* Split Layout for First Slide */
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-7xl mx-auto min-h-[600px]">
            {/* Left Side - LGS Hazırlık */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
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
                  <div key={idx} className="bg-black/40 px-3 py-1 rounded-full border border-[#f7b500]/20">
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
            </div>
            
            {/* Divider Line */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#f7b500] to-transparent"></div>
            <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-[#f7b500] to-transparent my-8"></div>
            
            {/* Right Side - Yabancı Dil */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
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
                  <div key={idx} className="bg-black/40 px-3 py-1 rounded-full border border-[#f7b500]/20">
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
            </div>
          </div>
        ) : (
          /* Normal Layout for Other Slides */
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r ${slides[currentSlide].color} rounded-full flex items-center justify-center shadow-2xl`}>
                  {slides[currentSlide].icon && React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white" })}
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-montserrat leading-tight">
              <span className="bg-gradient-to-r from-white via-[#f7b500] to-white bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#f7b500] mb-6 sm:mb-8 font-semibold">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              {slides[currentSlide].description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
              {slides[currentSlide].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2 bg-black/40 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-[#f7b500]/20">
                  <span className="text-xs sm:text-sm font-bold text-[#f7b500]">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
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
            </div>
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
