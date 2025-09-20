'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Calendar, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'celebration' | 'demo' | 'exam' | 'other';
}

interface EventCardProps {
  event: Event;
}

const eventTypeColors = {
  celebration: 'bg-green-500',
  demo: 'bg-blue-500',
  exam: 'bg-red-500',
  other: 'bg-purple-500'
};

const eventTypeLabels = {
  celebration: 'Kutlama',
  demo: 'Demo',
  exam: 'Sınav',
  other: 'Etkinlik'
};

export function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white border-gray-200 hover:border-[#f7b500] transition-all duration-300 shadow-lg hover:shadow-xl">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
            <Badge className={`${eventTypeColors[event.type]} text-white`}>
              {eventTypeLabels[event.type]}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <Button
            className="w-full bg-[#f7b500] hover:bg-[#e6a300] text-black font-semibold"
            data-analytics="event_register"
          >
            Kayıt Ol
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
