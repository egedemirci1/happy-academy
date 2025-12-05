'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Eye, BookOpen, Star, Sparkles, ChevronDown, GraduationCap, Globe, Lightbulb } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { VideoPopup } from '@/components/ui/video-popup';

export default function HakkimizdaPage() {
  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = sectionId === 'achievements' ? 60 : 80; // Achievements için daha az offset
      window.scrollTo({
        top: absoluteElementTop - offset,
        behavior: 'smooth'
      });
    }
  };




  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-20 sm:pt-24 relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col">
          <SectionTitle
            title="Hakkımızda"
            subtitle="Konya'da dil ve sınav başarısı için 15 yıllık deneyim"
            icon={GraduationCap}
            iconSize="lg"
            showIcon={true}
            useAnimate={true}
            titleColor="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent"
            className="mb-8 mt-4"
          />
          
          {/* Main Content Grid */}
          <div className="flex-1 flex flex-col">
            {/* Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full flex items-center justify-center shadow-lg">
                      <Target className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Misyonumuz</h2>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed text-justify">
                  Öğrencilerimizin dil öğrenme ve sınav hazırlık süreçlerinde en yüksek başarıyı elde etmelerini sağlamak. Modern eğitim yöntemleri ve kişiselleştirilmiş yaklaşımımızla her öğrencinin potansiyelini ortaya çıkarıyoruz.
                </p>
              </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Vizyonumuz</h2>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed text-justify">
                  Türkiye'nin en saygın dil eğitimi ve sınav hazırlık merkezlerinden biri olmak. Öğrencilerimizin akademik ve kişisel gelişimlerine katkı sağlayarak onları geleceğe hazırlıyoruz.
                </p>
              </div>
            </div>
          </motion.div>

            {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 mx-auto">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7b500] mb-2">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Mezun Öğrenci</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3 mx-auto">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7b500] mb-2">%95</div>
                  <div className="text-sm md:text-base text-gray-600">Başarı Oranı</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mb-3 mx-auto">
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7b500] mb-2">15</div>
                  <div className="text-sm md:text-base text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-[#f7b500]/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-3 mx-auto">
                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7b500] mb-2">6+</div>
                  <div className="text-sm md:text-base text-gray-600">Farklı Dil</div>
                </div>
              </div>
          </motion.div>

            {/* Scroll Arrow - Before Video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-col items-center pb-8 gap-2"
            >
              <motion.button
                onClick={() => scrollToNext('story-video')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
              >
                <ChevronDown className="h-6 w-6 text-[#f7b500]" />
              </motion.button>
              <span className="text-sm font-medium text-gray-600">Hikayemizi İzleyin</span>
            </motion.div>

            {/* Video Section - Hikayemiz */}
            <motion.div
              id="story-video"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 pt-4"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                    <span className="text-[#f7b500]">Hikayemizi</span> İzleyin
                  </h2>
                  <p className="text-gray-600 text-base lg:text-lg">
                    Happy Academy'nin kuruluşunu ve eğitim felsefemizi keşfedin
                  </p>
                </div>
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#f7b500]/20 transition-all duration-500">
                  <VideoPopup
                    videoSrc="/Happy-Academy-Tanıtım-Final.mp4"
                    thumbnailSrc="/tanitim-thumbnail.webp"
                    title="Happy Academy - Hikayemiz"
                    description="Kurumumuzun hikayesi ve eğitim vizyonumuz"
                  />
                </div>
              </div>
            </motion.div>
          

            {/* CTA Buttons */}
                <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4 mb-12"
            >
              <a
                href="#demo-section"
                className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] hover:from-[#e6a300] hover:to-[#f7b500] text-black font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-[#f7b500]/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ boxShadow: '0 10px 40px rgba(247, 181, 0, 0.3)' }}
              >
                Ücretsiz Demo Ders
              </a>
              <a
                href="https://wa.me/903322350202"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-2"
                style={{ boxShadow: '0 10px 40px rgba(34, 197, 94, 0.3)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp ile Yazın
              </a>
                </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-16 bg-gradient-to-r from-[#f7b500] to-[#e6a300] relative z-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-montserrat">
              Ücretsiz Seviye Tespiti & Demo Derslerimiz
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Size en uygun programı bulalım. Uzman eğitmenlerimizle birebir görüşme yaparak 
              hedeflerinize uygun eğitim planını oluşturalım.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-4">Demo Ders Avantajları</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black">Kişiselleştirilmiş eğitim planı</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black">Uzman eğitmen desteği</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black">Hedef odaklı yaklaşım</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black">Hiçbir yükümlülük yok</span>
                </li>
              </ul>
        </div>
        
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-4">Hemen İletişime Geçin</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/903322350202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105"
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
      </section>



    </div>
  );
}
