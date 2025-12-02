'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SectionTitle } from '@/components/ui/section-title';
import { VideoPopup } from '@/components/ui/video-popup';
import { motion } from 'framer-motion';
import { Camera, BookOpen, Sparkles, ChevronDown, X, Play } from 'lucide-react';
import Image from 'next/image';

export default function GorsellerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const educationImages = [
    '/IMG_20250928_123029.jpg',
    '/IMG_20250928_131259.jpg',
    '/IMG_20250928_144943.jpg',
    '/IMG_20250928_153802.jpg',
    '/IMG_20250928_154702.jpg',
    '/kedi.jpg',
    '/IMG_20250928_112444.jpg',
    '/hocalarımız.jpg',
    '/egitim-ortamii.jpg',
    '/egitim-ortami3.jpg',
    '/egitim-ortami2.jpg',
    '/sınav.jpg'
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#f7b500]/15 to-[#e6a300]/15 rounded-full blur-2xl"
        />
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen pt-20 sm:pt-24 relative z-10 flex flex-col">
        <div className="container flex-1 flex flex-col justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Görsellerimiz
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Happy Academy'deki eğitim ortamımızı ve öğrenci başarılarımızı keşfedin
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 lg:mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-[#f7b500]" />
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Eğitim Ortamımız</h2>
              <Sparkles className="h-5 w-5 text-[#f7b500]" />
            </div>
            <p className="text-center text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base px-4">Modern ve konforlu sınıflarımızda öğrenme deneyimi</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Eğitim Ortamı Görselleri */}
            {educationImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(imageSrc)}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-40 lg:h-48 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 overflow-hidden relative">
                  <Image
                    src={imageSrc}
                    alt={`Eğitim Ortamı ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Lightbox Modal - Portal ile body'ye render et */}
          {mounted && selectedImage && createPortal(
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              style={{ 
                zIndex: 99999,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#f7b500] transition-colors bg-black/50 rounded-full p-2"
                style={{ zIndex: 100000 }}
              >
                <X className="w-8 h-8" />
              </button>
              <div 
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                style={{ zIndex: 99999 }}
              >
                <Image
                  src={selectedImage}
                  alt="Büyük görsel"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>,
            document.body
          )}
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center pb-4"
        >
          <motion.button
            onClick={() => scrollToNext('activities')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500]" />
          </motion.button>
        </motion.div>
      </section>

      {/* Ders İçi Videolar Section */}
      <section id="activities" className="min-h-screen relative z-10 flex flex-col pt-8">
        <div className="container flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8 lg:mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat">
                <span className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] bg-clip-text text-transparent">
                  Ders İçi Videolarımız
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-0 px-4">
              Sınıflarımızda gerçekleşen derslerden örnekler ve eğitim sürecimizden kareler
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { src: '/video1.mp4', title: 'Ders İçi Video 1', description: 'Eğitim sürecimizden bir kare' },
              { src: '/video2.mp4', title: 'Ders İçi Video 2', description: 'Eğitim sürecimizden bir kare' },
              { src: '/video3.mp4', title: 'Ders İçi Video 3', description: 'Eğitim sürecimizden bir kare' },
              { src: '/video4.mp4', title: 'Ders İçi Video 4', description: 'Eğitim sürecimizden bir kare' },
              { src: '/video5.mp4', title: 'Ders İçi Video 5', description: 'Eğitim sürecimizden bir kare' },
              { src: '/video6.mp4', title: 'Ders İçi Video 6', description: 'Eğitim sürecimizden bir kare' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-40 lg:h-48 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#f7b500]/20 hover:border-[#f7b500]/40 overflow-hidden relative">
                  <VideoPopup
                    videoSrc={video.src}
                    title={video.title}
                    description={video.description}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Final Scroll Arrow - Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center pb-4"
        >
          <motion.button
            onClick={() => scrollToNext('gallery')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f7b500]/30 hover:border-[#f7b500]/50"
          >
            <ChevronDown className="h-6 w-6 text-[#f7b500] rotate-180" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
