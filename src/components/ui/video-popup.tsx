'use client';

import { useState, useRef, useEffect } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);

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
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-3 text-white">
              <div className="w-4 h-4 bg-[#f7b500] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Happy Academy</span>
            </div>
          </div>
          
          {/* HD Badge */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">HD</span>
            </div>
          </div>
        </div>
        
        {/* Play Button Overlay - Always Visible */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
          <div className="bg-white/95 rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Play className="w-12 h-12 text-[#f7b500]" />
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex-1 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-4"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  src={videoSrc}
                >
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
