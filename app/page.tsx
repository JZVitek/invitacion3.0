'use client';

import {
  Calendar,
  Clock,
  User,
  Hash,
  Mail,
  Phone,
  Church,
  BellElectric,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import Schedule from '@/components/Schedule';
import RSVPForm from '@/components/RSVPForm';
import LocationSection from '@/components/LocationSection';
import ParticlesBackground from '@/components/particles-background';
import PhotoCarousel from '@/components/PhotoCarousel';
import GodparentsSection from '@/components/GodparentsSection';
import Music from '@/components/Music';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative min-h-screen bg-[#f8f5f0] text-gray-800'>
      <div className='absolute inset-0'>
        <ParticlesBackground />
      </div>
      <div className='relative z-3'>
        <HeroSection />
        {/* Details Section */}
        <section className='py-12 sm:py-20 px-4'>
          <div className='max-w-4xl mx-auto space-y-8 sm:space-y-12'>
            <Card className='p-6 sm:p-8 text-center space-y-6'>
              <h2 className='text-4xl sm:text-5xl font-serif texto'>
                Nuestra Boda
              </h2>
              <div className='grid sm:grid-cols-2 gap-8'>
                <div>
                  <div className='w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center mx-auto'>
                    <Church className='w-9 h-9 sm:w-8 sm:h-8 text-black' />
                  </div>
                  <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
                    Ceremonia
                  </h3>
                  <p className='flex items-center justify-center gap-2 cinzel-text-titles'>
                    <Calendar className='w-4 h-4 text-2xl' />9 de Noviembre,
                    2025
                  </p>
                  <p className='flex items-center justify-center gap-2 cinzel-text-titles'>
                    <Clock className='w-4 h-4' />
                    5:00 PM
                  </p>
                </div>
                <div>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto'>
                    <BellElectric className='w-9 h-9 sm:w-8 sm:h-8 text-black' />
                  </div>
                  <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
                    Recepción
                  </h3>
                  <p className='flex items-center justify-center gap-2 cinzel-text-titles'>
                    <Clock className='w-4 h-4' />
                    8:00 PM
                  </p>
                </div>
              </div>

              <div className='flex justify-center mt-4'>
                <a
                  href='/boda-karime-jesus.ics'
                  download='boda-karime-jesus.ics'
                  className='bg-black text-white rounded-full px-4 py-2 text-xl font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2 text-center'
                >
                  <Calendar className='w-5 h-5' />
                  Agregar a mi calendario
                </a>
              </div>
            </Card>

            <LocationSection />

            <Schedule />

            <GodparentsSection />

            {/* Parents Section */}
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-5xl sm:text-5xl font-serif mb-6 texto'>
                Con la bendición de nuestros padres
              </h2>
              <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
                <div>
                  <div className='flex justify-center mb-2'>
                    <span className='inline-block bg-neutral-100 rounded-full p-2'>
                      <User className='w-8 h-8 text-black' />
                    </span>
                  </div>
                  <h3 className='text-xl sm:text-2xl cinzel-text-titles mb-2'>
                    Padres de la novia
                  </h3>
                  <p className='text-xl'>
                    Sr y Sra. Leticia Alday y Felix Alday
                  </p>
                </div>
                <div>
                  <div className='flex justify-center mb-2'>
                    <span className='inline-block bg-neutral-100 rounded-full p-2'>
                      <User className='w-8 h-8 text-black' />
                    </span>
                  </div>
                  <h3 className='text-xl sm:text-2xl cinzel-text-titles mb-2'>
                    Padres del novio
                  </h3>
                  <p className='text-xl'>
                    Sr y Sra. Jesus Zamora & Rosa Maria Ayala
                  </p>
                </div>
              </div>
            </Card>

            {/* Godparents Section */}

            <RSVPForm />

            {/* Additional Info */}
            <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-5xl sm:text-5xl font-serif mb-4 texto'>
                  Información adicional
                </h2>
                <div className='flex flex-col items-center mb-6'>
                  <span className='text-2xl mb-2 cinzel-text-titles'>
                    Dress Code: Negro Formal, ¡sin excepciones!
                  </span>
                  <Image
                    src='/images/dress-code.png'
                    alt='Dress Code'
                    width={138}
                    height={138}
                    className='rounded-lg'
                  />
                </div>
              </div>
            </Card>
            <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-5xl sm:text-5xl font-serif mb-4 texto'>
                  Galeria
                </h2>
                <PhotoCarousel />
                <div className='flex flex-col items-center justify-center text-center gap-4'>
                  <div className='flex flex-col items-center justify-center gap-4'>
                    <h3 className='text-3xl sm:text-4xl font-semibold mb-2'>
                      Compartenos tus fotos con el hashtag
                    </h3>
                    <p className='flex items-center justify-center gap-2 text-xl cinzel-text-titles'>
                      <Hash className='w-4 h-4 text-2xl cinzel-text-titles' />
                      KarimeyJesus2025
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            {/*           <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-4xl sm:text-4xl font-serif mb-4 texto'>
                  Nuestra Boda
                </h2>
              </div>

              <PhotoCarousel />

              <div className='flex flex-col items-center justify-center text-center gap-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <h3 className='text-3xl sm:text-4xl font-semibold mb-2'>
                    Compartenos tus fotos con el hashtag
                  </h3>
                  <p className='flex items-center justify-center gap-2 text-xl'>
                    <Hash className='w-4 h-4 text-2xl' />
                    KarimeAndJesus2024
                  </p>
                </div>
              </div>
            </Card> */}

            {/* Contact */}
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-4xl sm:text-4xl font-serif mb-6 texto'>
                ¿Alguna pregunta?
              </h2>
              <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
                <div className='flex items-center justify-center gap-2 text-xl'>
                  <Phone className='w-4 h-4' />
                  <span>3531135393</span>
                </div>
                <div className='flex items-center justify-center gap-2 text-xl'>
                  <Mail className='w-4 h-4' />
                  <span>karimeyjesus5@gmail.com</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      {/* Botón flotante de música */}
      <div className='fixed bottom-6 right-6 z-50 rounded-full p-2 flex items-center justify-center transition hover:bg-white/80'>
        <Music />
      </div>
    </main>
  );
}
