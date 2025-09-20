'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  className = '',
  titleColor = 'text-gray-800',
  subtitleColor = 'text-gray-600'
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-montserrat ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
