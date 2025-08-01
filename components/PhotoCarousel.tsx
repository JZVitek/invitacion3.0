'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding couple black and white',
  },
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    alt: 'Elegant wedding moment',
  },
  {
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding celebration',
  },
  {
    url: 'https://images.unsplash.com/photo-1609151162377-794faf68b02f?w=800&auto=format&fit=crop&q=80',
    alt: 'Romantic wedding moment',
  },
];

export default function PhotoCarousel() {
  return (
    <div className='w-full max-w-4xl mx-auto'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card className='overflow-hidden aspect-[3/4]'>
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={400}
                    height={533}
                    className='w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
