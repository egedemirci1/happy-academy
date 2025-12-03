'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/ui/lead-form';
import { CheckCircle, Users } from 'lucide-react';

export default function AileBirlesimPage() {
  const features = [
    'A1 Almanca/Türkçe eğitimi',
    'Sertifika hazırlık',
    'Kültürel uyum programı',
    'Hızlı ve etkili öğretim',
    'Sınav stratejileri',
    'Birebir destek'
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Aile Birleşimi Programları"
          subtitle="Sevdiklerinizle bir araya gelmek için A1 sertifikası hazırlığı"
          className="mb-16"
          titleColor="text-gray-800"
          subtitleColor="text-gray-600"
        />

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-[#f7b500]" />
              <h3 className="text-3xl font-bold text-gray-800">Aile Birleşimi Eğitimi</h3>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Almanya, Avusturya veya Türkiye'de aile birleşimi için gerekli A1 seviye 
              dil sertifikasına hazırlanın. Hızlı ve etkili eğitim programlarımızla 
              hayatınızı değiştirin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f7b500] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Badge className="mr-2 bg-[#f7b500] text-black text-base px-4 py-2">A1 Sertifika</Badge>
              <Badge className="mr-2 bg-[#f7b500] text-black text-base px-4 py-2">Hızlı Sonuç</Badge>
              <Badge className="mr-2 bg-[#f7b500] text-black text-base px-4 py-2">Garantili Eğitim</Badge>
            </div>
          </Card>
        </div>

        <LeadForm 
          title="Aile Birleşimi için Başvurun"
          subtitle="Ücretsiz danışmanlık ve seviye tespiti"
        />
      </div>
    </div>
  );
}

