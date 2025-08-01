'use client';

import { Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface Godparent {
  role: string;
  names: string[];
  image: string;
}

const godparents: Godparent[] = [
  {
    role: 'Padrinos de Velación',
    names: ['Olga Zamora y Apolonio Mora'],
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Arras',
    names: ['Ericka y Adrian Villamar'],
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Lazo',
    names: ['Lupita y Marco Ibarra'],
    image:
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Anillos',
    names: ['Dayana y Roman Alday'],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
  },
];

export default function GodparentsSection() {
  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-4xl sm:text-5xl font-serif text-center mb-8 texto'>
        Nuestros Padrinos
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {godparents.map((godparent, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-lg'
          >
            <div className='relative h-64 overflow-hidden'>
              <Image
                src={godparent.image}
                alt={`${godparent.role} - ${godparent.names.join(', ')}`}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                width={800}
                height={600}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent' />
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center'>
                <Heart className='w-8 h-8 mb-3 text-white/80' />
                <h3 className='text-3xl sm:text-2xl font-semibold mb-2'>
                  {godparent.role}
                </h3>
                {godparent.names.map((name, idx) => (
                  <p
                    key={idx}
                    className='text-white/90 texto text-2xl sm:text-3xl'
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
