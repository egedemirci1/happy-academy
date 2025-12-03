'use client';

import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import Link from 'next/link';
import { Globe, BookOpen, Users, BarChart3, Target } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  badges: string[];
  link: string;
  iconName: string;
}

const iconMap = {
  Globe,
  BookOpen,
  Users,
  BarChart3,
  Target
};

function ProgramCardComponent({
  title,
  description,
  badges,
  link,
  iconName
}: ProgramCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Globe;
  return (
    <div className="h-full">
      <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-[#f7b500] transition-all duration-500 shadow-2xl hover:shadow-[#f7b500]/20 hover:shadow-2xl group relative overflow-hidden">
        {/* Card Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7b500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#f7b500] to-[#e6a300] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-8 w-8 text-black" />
            </div>
            <CardTitle className="text-2xl text-white font-bold group-hover:text-[#f7b500] transition-colors duration-300">{title}</CardTitle>
          </div>
          <CardDescription className="text-gray-300 text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-[#f7b500] to-[#e6a300] text-black hover:from-[#e6a300] hover:to-[#f7b500] shadow-lg hover:shadow-[#f7b500]/30 transition-all duration-300 font-medium px-4 py-2"
              >
                {badge}
              </Badge>
            ))}
          </div>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-[#f7b500] to-[#e6a300] hover:from-[#e6a300] hover:to-[#f7b500] text-black font-bold py-3 text-lg shadow-lg hover:shadow-[#f7b500]/40 transition-all duration-300 group-hover:scale-105"
            data-analytics="program_click"
          >
            <Link href={link}>
              Detayları Gör →
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Memo ile export et - gereksiz re-render'ları önle
export const ProgramCard = memo(ProgramCardComponent);
