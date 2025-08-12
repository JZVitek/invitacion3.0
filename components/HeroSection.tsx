'use client';

import CountdownTimer from './CountdownTimer';
import Image from 'next/image';

export default function HeroSection() {
  const weddingDate = new Date('2025-11-09T21:00:00');

  return (
    <section className='relative min-h-[100dvh] flex items-center justify-center'>
      <div className='absolute inset-0'>
        <Image
          src='https://img.smartslides.com/gal/aws/4k/1.5x/109968/eb92919a569ad7751c38f234f0bf81/51f321a6f263deaecb74.jpg?width=1440&height=960'
          alt='Wedding background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>
      <div className='relative text-center text-white space-y-8 sm:space-y-12 max-w-3xl mx-auto px-4'>
        <div className='space-y-4 sm:space-y-6'>
          <h3 className='text-xl sm:text-xl font-light tracking-[0.2em] uppercase cinzel-text-titles'>
            Save the Date
          </h3>
          <div className='w-24 sm:w-32 h-[1px] bg-white/50 mx-auto' />
          <h1 className='font-serif'>
            <span className='block text-9xl sm:text-8xl mb-2 dancing-script-text'>
              Karime
            </span>
            <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
            <span className='text-6xl sm:text-6xl dancing-script-text'>&</span>
            <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
            <span className='block text-9xl sm:text-8xl mt-2 dancing-script-text'>
              Jesús
            </span>
          </h1>
          <div className='w-24 sm:w-32 h-[1px] bg-white/50 mx-auto' />
          <p className='text-xl sm:text-xl font-light tracking-wider cinzel-text-titles uppercase'>
            9 de Noviembre, 2025
          </p>
        </div>
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </section>
  );
}
