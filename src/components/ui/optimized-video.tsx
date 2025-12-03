'use client';

import { memo, useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
}

/**
 * Otomatik Lazy Loading Video Component
 * - Viewport'a girdiğinde yüklenir
 * - Memory'den temizlenir
 * - Otomatik pause/cleanup
 */
function OptimizedVideoComponent({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  playsInline = true,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer - viewport'a girdiğinde yükle
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true);
            setHasLoaded(true);
          } else if (!entry.isIntersecting && video) {
            // Viewport'tan çıktığında pause et
            video.pause();
          }
        });
      },
      {
        rootMargin: '50px', // 50px önce yüklemeye başla
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      // Cleanup - memory'den temizle
      if (video) {
        video.pause();
        video.src = '';
        video.load();
      }
    };
  }, [hasLoaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={isInView ? 'metadata' : 'none'} // Viewport'a girdiğinde metadata yükle
      src={isInView ? src : undefined} // Viewport'a girdiğinde src ekle
    >
      {isInView && <source src={src} type="video/mp4" />}
      Tarayıcınız video oynatmayı desteklemiyor.
    </video>
  );
}

export const OptimizedVideo = memo(OptimizedVideoComponent);

