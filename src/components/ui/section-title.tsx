import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
  icon?: LucideIcon;
  iconSize?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  useAnimate?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  className = '',
  titleColor = 'text-gray-800',
  subtitleColor = 'text-gray-600',
  icon: Icon,
  iconSize = 'md',
  showIcon = false,
  useAnimate = false
}: SectionTitleProps) {
  const getIconSize = () => {
    switch (iconSize) {
      case 'sm': return 'h-5 w-5 sm:h-6 sm:w-6';
      case 'md': return 'h-6 w-6 sm:h-8 sm:w-8';
      case 'lg': return 'h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10';
      default: return 'h-6 w-6 sm:h-8 sm:w-8';
    }
  };

  const getIconContainerSize = () => {
    switch (iconSize) {
      case 'sm': return 'p-1 sm:p-2';
      case 'md': return 'p-2 sm:p-3';
      case 'lg': return 'p-2 sm:p-3 md:p-4';
      default: return 'p-2 sm:p-3';
    }
  };

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 px-4">
        {showIcon && Icon && (
          <div className={`${getIconContainerSize()} bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full flex-shrink-0`}>
            <Icon className={`${getIconSize()} text-white`} />
          </div>
        )}
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat break-words ${titleColor}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl mx-auto px-4 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
