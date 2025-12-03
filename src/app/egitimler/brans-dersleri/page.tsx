'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/ui/lead-form';
import { CheckCircle, BookOpen } from 'lucide-react';

export default function BransDersleriPage() {
  const subjects = [
    'Matematik',
    'Türkçe',
    'Fen Bilimleri',
    'Sosyal Bilgiler',
    'İngilizce',
    'Diğer branşlar'
  ];

  const features = [
    'Tüm branşlarda uzman öğretmenler',
    'Konu anlatımı ve soru çözümü',
    'Birebir ve grup dersleri',
    'Kişiye özel çalışma planı',
    'Düzenli takip sistemi',
    'Motivasyon koçluğu'
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Branş Dersleri"
          subtitle="Türkçe'den Matematiğe, tüm derslerde uzman öğretmen desteği"
          className="mb-16"
          titleColor="text-gray-800"
          subtitleColor="text-gray-600"
        />

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-[#f7b500]" />
              <h3 className="text-3xl font-bold text-gray-800">Branş Dersleri & Koçluk</h3>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              5-8. sınıf öğrencileri için tüm branşlarda akademik destek ve 
              motivasyon koçluğu ile başarıya giden yolda yanınızdayız.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {subjects.map((subject, index) => (
                <Badge key={index} className="bg-[#f7b500] text-black text-center py-2">
                  {subject}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f7b500] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <LeadForm 
          title="Branş Derslerine Başvurun"
          subtitle="Hangi derste zorlanıyorsunuz? Size özel program oluşturalım"
        />
      </div>
    </div>
  );
}

