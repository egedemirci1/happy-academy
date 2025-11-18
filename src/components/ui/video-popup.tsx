'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface VideoPopupProps {
  videoSrc: string;
  thumbnailSrc?: string;
  title: string;
  description: string;
}

export function VideoPopup({ videoSrc, thumbnailSrc, title, description }: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [generatedThumbnail, setGeneratedThumbnail] = useState<string>('');
  const [videoAspectRatio, setVideoAspectRatio] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);
  const popupVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const generateThumbnail = () => {
      if (thumbnailVideoRef.current) {
        const video = thumbnailVideoRef.current;
        
        const handleLoadedData = () => {
          video.currentTime = 3; // 3. saniyeye git
        };

        const handleSeeked = () => {
          console.log('Thumbnail video seeked');
          setThumbnailLoaded(true);
        };

        const handleCanPlay = () => {
          video.currentTime = 3;
        };

        // Event listeners
        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('seeked', handleSeeked);
        video.addEventListener('canplay', handleCanPlay);

        // Cleanup
        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('seeked', handleSeeked);
          video.removeEventListener('canplay', handleCanPlay);
        };
      }
    };

    const timer = setTimeout(generateThumbnail, 200);
    return () => clearTimeout(timer);
  }, [videoSrc]);

  // Video aspect ratio'sunu tespit et
  useEffect(() => {
    const checkVideoDimensions = () => {
      if (popupVideoRef.current) {
        const video = popupVideoRef.current;
        const handleLoadedMetadata = () => {
          if (video.videoWidth && video.videoHeight) {
            const aspectRatio = video.videoWidth / video.videoHeight;
            setVideoAspectRatio(aspectRatio);
          }
        };
        
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        
        // Eğer metadata zaten yüklüyse
        if (video.readyState >= 1 && video.videoWidth && video.videoHeight) {
          const aspectRatio = video.videoWidth / video.videoHeight;
          setVideoAspectRatio(aspectRatio);
        }
        
        return () => {
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }
    };

    if (isOpen) {
      const timer = setTimeout(checkVideoDimensions, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, videoSrc]);

  return (
    <>
      {/* Hidden video for popup */}
      <video
        ref={videoRef}
        className="hidden"
        src={videoSrc}
      />

      {/* Video Thumbnail */}
      <div 
        className="relative cursor-pointer group w-full h-full"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-full aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden relative rounded-3xl">
          {thumbnailSrc ? (
            <img 
              src={thumbnailSrc} 
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />
          ) : (
            <video
              ref={thumbnailVideoRef}
              className="w-full h-full object-cover rounded-3xl"
              src={videoSrc}
              muted
              playsInline
              preload="metadata"
              poster=""
            />
          )}
          
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
          
          {/* Branding */}
          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#f7b500] rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold bg-black/30 px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">Happy Academy</span>
            </div>
          </div>
          
          {/* HD Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">HD</span>
            </div>
          </div>
        </div>
        
        {/* Play Button Overlay - Always Visible */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
          <div className="bg-white/95 rounded-full p-4 sm:p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 sm:w-12 sm:h-12 text-[#f7b500]" />
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Popup Modal - Portal ile body'ye render et */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', zIndex: 99999 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`bg-white rounded-lg overflow-hidden mx-2 sm:mx-0 ${
                  videoAspectRatio && videoAspectRatio < 1 
                    ? 'max-w-md w-full' // Dikey videolar için daha dar
                    : 'max-w-4xl w-full' // Yatay videolar için geniş
                } max-h-[90vh] flex flex-col`}
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'relative', zIndex: 100000 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b flex-shrink-0">
                  <div className="flex-1 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{description}</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2 sm:ml-4"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </button>
                </div>

                {/* Video */}
                <div className="relative w-full flex-1 flex items-center justify-center bg-black">
                  {videoAspectRatio && videoAspectRatio < 1 ? (
                    // Dikey video için özel layout
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <video
                        ref={popupVideoRef}
                        className="max-h-[calc(90vh-100px)] w-auto h-full object-contain"
                        controls
                        autoPlay
                        src={videoSrc}
                      >
                        Tarayıcınız video oynatmayı desteklemiyor.
                      </video>
                    </div>
                  ) : (
                    // Yatay video için standart layout
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <video
                        ref={popupVideoRef}
                        className="absolute inset-0 w-full h-full object-contain"
                        controls
                        autoPlay
                        src={videoSrc}
                      >
                        Tarayıcınız video oynatmayı desteklemiyor.
                      </video>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
