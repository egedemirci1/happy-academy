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
      case 'sm': return 'h-6 w-6';
      case 'md': return 'h-8 w-8';
      case 'lg': return 'h-10 w-10';
      default: return 'h-8 w-8';
    }
  };

  const getIconContainerSize = () => {
    switch (iconSize) {
      case 'sm': return 'p-2';
      case 'md': return 'p-3';
      case 'lg': return 'p-4';
      default: return 'p-3';
    }
  };

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <div className="flex items-center justify-center gap-4 mb-6">
        {showIcon && Icon && (
          <div className={`${getIconContainerSize()} bg-gradient-to-r from-[#f7b500] to-[#e6a300] rounded-full`}>
            <Icon className={`${getIconSize()} text-white`} />
          </div>
        )}
        <h2 className={`text-3xl md:text-4xl font-bold font-montserrat ${titleColor}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
