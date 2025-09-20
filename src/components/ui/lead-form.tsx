'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function LeadForm({ 
  title = "Ücretsiz Tanışma Dersi Alın", 
  subtitle = "Size en uygun programı bulalım",
  className = ""
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '',
    preferredTime: '',
    message: '',
    kvkk: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          program: '',
          preferredTime: '',
          message: '',
          kvkk: false
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${className}`}
      >
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">Teşekkürler!</h3>
            <p className="text-gray-300">
              Başvurunuz alındı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-center">{title}</CardTitle>
          {subtitle && (
            <p className="text-gray-300 text-center">{subtitle}</p>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Ad Soyad *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefon *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="0555 123 45 67"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-1">
                  İlgi Duyulan Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f7b500]"
                >
                  <option value="">Program Seçin</option>
                  <option value="yabanci-diller">Yabancı Diller</option>
                  <option value="lgs">LGS Hazırlık</option>
                  <option value="ydt">YDT Team</option>
                  <option value="cocuk-genclik">Çocuk & Genç</option>
                  <option value="kocluk">Koçluk</option>
                </select>
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1">
                  Tercih Edilen Saat
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f7b500]"
                >
                  <option value="">Saat Seçin</option>
                  <option value="morning">Sabah (09:00-12:00)</option>
                  <option value="afternoon">Öğleden Sonra (13:00-17:00)</option>
                  <option value="evening">Akşam (18:00-21:00)</option>
                  <option value="weekend">Hafta Sonu</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mesaj/Konu
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Merak ettiğiniz konular veya özel istekleriniz..."
                rows={3}
              />
            </div>
            
            <div className="flex items-start gap-2">
              <Checkbox
                id="kvkk"
                name="kvkk"
                checked={formData.kvkk}
                onChange={handleInputChange}
                className="mt-1"
              />
              <label htmlFor="kvkk" className="text-sm text-gray-300">
                <a href="/kvkk" className="text-[#f7b500] hover:underline">KVKK Aydınlatma Metni</a>'ni okudum ve kabul ediyorum. *
              </label>
            </div>
            
            <Button
              type="submit"
              disabled={!formData.kvkk || isSubmitting}
              className="w-full bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold py-3"
              data-analytics="form_submit"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Hemen Başvurun'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
