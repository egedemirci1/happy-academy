'use client';

import { Card, CardContent } from './card';
import { Star } from 'lucide-react';
import { useEffect, useState, memo } from 'react';

interface Testimonial {
  id: string;
  name: string;
  program: string;
  content: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

function TestimonialSliderComponent({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Otomatik kaydırma
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length, isHovered]);

  // Görünür testimonial'ları hesapla (3 tane)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div 
      className="py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 overflow-hidden justify-center">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${currentIndex}-${index}`}
            className="flex-shrink-0 w-80 max-w-sm transition-all duration-500 opacity-100"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="bg-white border-gray-200 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <p className="text-gray-700 mb-6 italic flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => {
                        const starValue = i + 1;
                        const isHalfStar = testimonial.rating % 1 !== 0 && starValue === Math.ceil(testimonial.rating);
                        const isFilled = starValue <= Math.floor(testimonial.rating);
                        
                        return (
                          <div key={i} className="relative">
                            <Star 
                              className={`h-4 w-4 ${
                                isFilled ? 'fill-[#f7b500] text-[#f7b500]' : 'text-gray-300'
                              }`} 
                            />
                            {isHalfStar && (
                              <div className="absolute inset-0 overflow-hidden w-1/2">
                                <Star className="h-4 w-4 fill-[#f7b500] text-[#f7b500]" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-sm text-[#f7b500]">{testimonial.program}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[#f7b500]' : 'bg-gray-300'
            }`}
            aria-label={`Yorum ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Memo ile export et
export const TestimonialSlider = memo(TestimonialSliderComponent);
