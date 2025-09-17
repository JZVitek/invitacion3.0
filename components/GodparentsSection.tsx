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
    names: ['Apolonio Mora y Olga Zamora'],
    image:
      'https://images.unsplash.com/photo-1674812709785-9497062872d0?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Arras',
    names: ['Adrian Villamar y Erika Briones'],
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Lazo',
    names: ['Marco Ibarra y Guadalupe Zamora'],
    image:
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Anillos',
    names: ['Roman Alday y Dayana Herrera'],
    image:
      'https://images.unsplash.com/photo-1627293509201-cd0c780043e6?w=800&auto=format&fit=crop&q=80',
  },
  {
    role: 'Padrinos de Iglesia',
    names: ['Cristian Alday y Leticia Noriega'],
    image:
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&auto=format&fit=crop&q=80',
  },
];

export default function GodparentsSection() {
  const isOdd = godparents.length % 2 === 1;
  const lastIndex = godparents.length - 1;
  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-4xl sm:text-5xl font-serif text-center mb-8 texto'>
        Nuestros Padrinos
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {godparents.map((godparent, index) => {
          // Si es el último y la cantidad es impar, lo sacamos del grid principal
          if (isOdd && index === lastIndex) return null;
          return (
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
                  <h3 className='text-3xl sm:text-2xl mb-2 cinzel-text-titles'>
                    {godparent.role}
                  </h3>
                  {godparent.names.map((name, idx) => (
                    <p
                      key={idx}
                      className='text-white/90 texto text-xl sm:text-2xl'
                    >
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Si es impar, centramos la última tarjeta en una fila propia en desktop */}
      {isOdd && (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8'>
          <div className='sm:col-start-1 sm:col-end-3 sm:mx-auto sm:w-1/2'>
            <div className='relative group overflow-hidden rounded-lg'>
              <div className='relative h-64 overflow-hidden'>
                <Image
                  src={godparents[lastIndex].image}
                  alt={`${godparents[lastIndex].role} - ${godparents[
                    lastIndex
                  ].names.join(', ')}`}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  width={800}
                  height={600}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center'>
                  <Heart className='w-8 h-8 mb-3 text-white/80' />
                  <h3 className='text-3xl sm:text-2xl mb-2 cinzel-text-titles'>
                    {godparents[lastIndex].role}
                  </h3>
                  {godparents[lastIndex].names.map((name, idx) => (
                    <p
                      key={idx}
                      className='text-white/90 texto text-xl sm:text-2xl'
                    >
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
