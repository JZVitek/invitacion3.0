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
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/a99a46959d854e0b1cdbd697f5eccc/58eb3b25d89973f97ba0.jpg?width=1440&height=960',
    alt: 'Wedding couple black and white',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/eb92919a569ad7751c38f234f0bf81/51f321a6f263deaecb74.jpg',
    alt: 'Elegant wedding moment',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/feb935f3277c7227a4f6ba6e43626f/ce8d93665c65872d5215.jpg',
    alt: 'Wedding celebration',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/9bc8d7ddad1e2041079df3b1a55265/7307d427639c126d425f.jpg',
    alt: 'Wedding celebration',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/42d00c05cc9222f575334ebe55fdb6/49be32b2e896b2af8978.jpg',
    alt: 'Wedding couple portrait',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/7f1dbccb773eec91af97b91c5414b2/8df0ee2d1a14ac20c976.jpg',
    alt: 'Wedding rings close-up',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/2e182913d607ecc96b23a9e37ab003/15fbf21b779deb3df806.jpg',
    alt: 'Wedding couple walking',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/0e291b9cdf736c368baa765a33c10a/ac5cc81d8d2b8f64cacd.jpg',
    alt: 'Wedding couple with bouquet',
  },
  {
    url: 'https://img.smartslides.com/gal/aws/4k/1.5x/109968/1de86a790a734d139eefac3f5adc07/9f981075f7beb1039d2b.jpg',
    alt: 'Wedding couple close-up',
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
