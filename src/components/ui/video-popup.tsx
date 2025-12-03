'use client';

import { useState, useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { X, Play } from 'lucide-react';

interface VideoPopupProps {
  videoSrc: string;
  thumbnailSrc?: string;
  title: string;
  description: string;
}

function VideoPopupComponent({ videoSrc, thumbnailSrc, title, description }: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoAspectRatio, setVideoAspectRatio] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [autoThumbnail, setAutoThumbnail] = useState<string>('');
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);
  const popupVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Otomatik thumbnail oluştur - sadece thumbnail yoksa
  useEffect(() => {
    if (thumbnailSrc) {
      setAutoThumbnail(thumbnailSrc);
      return;
    }
    
    if (autoThumbnail) return;
    
    let isMounted = true;
    const video = thumbnailVideoRef.current;
    if (!video) return;

    const generateThumbnail = () => {
      if (!isMounted || !video) return;
      
      try {
        const canvas = document.createElement('canvas');
        // Video'nun gerçek boyutunu kullan veya HD
        const width = video.videoWidth || 1280;
        const height = video.videoHeight || 720;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        if (ctx && video.videoWidth > 0 && video.videoHeight > 0) {
          ctx.drawImage(video, 0, 0, width, height);
          const thumbnail = canvas.toDataURL('image/jpeg', 0.85);
          if (isMounted) {
            setAutoThumbnail(thumbnail);
          }
        }
      } catch (error) {
        console.error('Thumbnail oluşturulamadı:', error);
      }
    };

    const handleLoadedData = () => {
      if (!isMounted || autoThumbnail) return;
      
      // Video data yüklendi, hemen thumbnail oluştur
      if (video.readyState >= 2) {
        // 1-2 saniye arası güzel bir frame
        const targetTime = Math.max(1, Math.min(2, video.duration * 0.1));
        video.currentTime = targetTime;
      }
    };

    const handleSeeked = () => {
      if (!isMounted || autoThumbnail) return;
      
      // Frame render için 2 kez bekle
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (isMounted) {
            generateThumbnail();
          }
        });
      });
    };
    
    const handleError = (e: Event) => {
      console.error('Video yükleme hatası:', videoSrc, e);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);
    
    // Video yüklemeyi manuel başlat
    video.load();
    
    // Eğer video zaten yüklüyse
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      isMounted = false;
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, [thumbnailSrc, videoSrc]);

  // Video aspect ratio'sunu tespit et - sadece açıldığında
  useEffect(() => {
    if (!isOpen || !popupVideoRef.current) return;
    
    const video = popupVideoRef.current;
    const handleLoadedMetadata = () => {
      if (video.videoWidth && video.videoHeight) {
        setVideoAspectRatio(video.videoWidth / video.videoHeight);
      }
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    if (video.readyState >= 1 && video.videoWidth && video.videoHeight) {
      setVideoAspectRatio(video.videoWidth / video.videoHeight);
    }
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.pause();
      video.src = '';
      video.load();
    };
  }, [isOpen]);

  const handleClose = () => {
    if (popupVideoRef.current) {
      popupVideoRef.current.pause();
      popupVideoRef.current.currentTime = 0;
    }
    setIsOpen(false);
  };

  // Thumbnail display image
  const displayThumbnail = thumbnailSrc || autoThumbnail;

  return (
    <>
      {/* Hidden video for thumbnail generation */}
      {!thumbnailSrc && (
        <video
          ref={thumbnailVideoRef}
          className="hidden"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
        />
      )}

      {/* Video Thumbnail */}
      <div 
        className="relative cursor-pointer group w-full h-full"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-full aspect-video overflow-hidden relative rounded-3xl bg-gray-900">
          {displayThumbnail ? (
            // Video'dan çekilen veya manuel thumbnail
            <img 
              src={displayThumbnail} 
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />
          ) : (
            // Güzel placeholder - thumbnail yüklenene kadar
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f7b500]/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              </div>
              {/* Loading indicator - subtle */}
              <div className="relative z-10">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-3xl"></div>
          
          {/* Title at bottom with text */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
            <h4 className="text-white text-sm sm:text-base font-bold drop-shadow-lg mb-1">
              {title}
            </h4>
            <p className="text-white/80 text-xs drop-shadow-md line-clamp-1">
              {description}
            </p>
          </div>
          
          {/* Branding - Top left */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
            <div className="flex items-center gap-1.5 text-white">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f7b500] rounded-full"></div>
              <span className="text-xs font-semibold bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">Happy Academy</span>
            </div>
          </div>
          
          {/* HD Badge - Top right */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
            <div className="bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
              <span className="text-white text-xs font-bold">HD</span>
            </div>
          </div>
        </div>
        
        {/* Play Button - KÜÇÜK */}
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl z-20">
          <div className="bg-white/90 rounded-full p-3 sm:p-4 shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#f7b500] fill-[#f7b500]" />
          </div>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-black/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Popup Modal - Sadece açıldığında render et */}
      {mounted && isOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={handleClose}
          style={{ position: 'fixed', zIndex: 99999 }}
        >
          <div
            className={`bg-white rounded-lg overflow-hidden mx-2 sm:mx-0 ${
              videoAspectRatio && videoAspectRatio < 1 
                ? 'max-w-md w-full'
                : 'max-w-4xl w-full'
            } max-h-[90vh] flex flex-col transition-all duration-200`}
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
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2 sm:ml-4"
                aria-label="Kapat"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>

            {/* Video - Sadece modal açıkken yüklenir */}
            <div className="relative w-full flex-1 flex items-center justify-center bg-black">
              {videoAspectRatio && videoAspectRatio < 1 ? (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <video
                    ref={popupVideoRef}
                    className="max-h-[calc(90vh-100px)] w-auto h-full object-contain"
                    controls
                    autoPlay
                    preload="metadata"
                    src={videoSrc}
                    poster={thumbnailSrc}
                  >
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                </div>
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video
                    ref={popupVideoRef}
                    className="absolute inset-0 w-full h-full object-contain"
                    controls
                    autoPlay
                    preload="metadata"
                    src={videoSrc}
                    poster={thumbnailSrc}
                  >
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// Memo ile export et - gereksiz re-render'ları önle
export const VideoPopup = memo(VideoPopupComponent);
