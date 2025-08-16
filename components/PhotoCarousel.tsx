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
    url: '/images/DSC_2352.jpg',
    alt: 'Descripción de la imagen 1',
  },
  {
    url: '/images/DSC_2374.jpg',
    alt: 'Descripción de la imagen 2',
  },
  {
    url: '/images/DSC_2390.jpg',
    alt: 'Descripción de la imagen 3',
  },
  {
    url: '/images/DSC_2421.jpg',
    alt: 'Descripción de la imagen 4',
  },
  {
    url: '/images/DSC_2427.jpg',
    alt: 'Descripción de la imagen 5',
  },
  {
    url: '/images/DSC_2445.jpg',
    alt: 'Descripción de la imagen 6',
  },
  {
    url: '/images/DSC_2451.jpg',
    alt: 'Descripción de la imagen 7',
  },
  {
    url: '/images/DSC_2462.jpg',
    alt: 'Descripción de la imagen 8',
  },
  {
    url: '/images/DSC_2514.jpg',
    alt: 'Descripción de la imagen 9',
  },
  {
    url: '/images/DSC_2542.jpg',
    alt: 'Descripción de la imagen 10',
  },
  {
    url: '/images/DSC_2553.jpg',
    alt: 'Descripción de la imagen 11',
  },
  {
    url: '/images/DSC_2613.jpg',
    alt: 'Descripción de la imagen 12',
  },
  {
    url: '/images/DSC_2623.jpg',
    alt: 'Descripción de la imagen 13',
  },
  {
    url: '/images/DSC_2658.jpg',
    alt: 'Descripción de la imagen 14',
  },
  {
    url: '/images/DSC_2766.jpg',
    alt: 'Descripción de la imagen 16',
  },
  {
    url: '/images/DSC_2853.jpg',
    alt: 'Descripción de la imagen 17',
  },
  {
    url: '/images/DSC_2892.jpg',
    alt: 'Descripción de la imagen 18',
  },
  {
    url: '/images/DSC_3107.jpg',
    alt: 'Descripción de la imagen 19',
  }
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
