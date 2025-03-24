'use client';

import {
  Calendar,
  Clock,
  Gift,
  Hash,
  Mail,
  Phone,
  MapPin,
  Church,
  BellElectric,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import Schedule from '@/components/Schedule';
import RSVPForm from '@/components/RSVPForm';
import LocationSection from '@/components/LocationSection';
import ParticlesBackground from '@/components/particles-background';
import PhotoCarousel from '@/components/PhotoCarousel';
import RegistryModal from '@/components/RegistryModal';
import GodparentsSection from '@/components/GodparentsSection';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#f8f5f0] text-gray-800'>
      <ParticlesBackground />
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
                <p className='flex items-center justify-center gap-2'>
                  <Calendar className='w-4 h-4 text-2xl' />9 de Noviembre, 2025
                </p>
                <p className='flex items-center justify-center gap-2'>
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
                <p className='flex items-center justify-center gap-2'>
                  <Clock className='w-4 h-4' />
                  8:00 PM
                </p>
              </div>
            </div>
          </Card>

          <LocationSection />

          <Schedule />

          <GodparentsSection />

          {/* Parents Section */}
          <Card className='p-6 sm:p-8 text-center'>
            <h2 className='text-2xl sm:text-3xl font-serif mb-6 texto'>
              Con la bendición de nuestros padres
            </h2>
            <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Padres de la novia
                </h3>
                <p>Sr y Sra. [Leticia Alday y Felix Alday]</p>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Padres del novio
                </h3>
                <p>Sr y Sra. [Jesus Zamora & Rosa Maria Ayala]</p>
              </div>
            </div>
          </Card>

          {/* Godparents Section */}
          

          <RSVPForm />

          {/* Additional Info */}
          <Card className='p-6 sm:p-8 space-y-6'>
            <div className='text-center'>
              <h2 className='text-4xl sm:text-4xl font-serif mb-4 texto'>
                Información adicional
              </h2>
              <p className='mb-6 text-2xl'>Dress Code: Formal</p>
              <div className='flex justify-center gap-4 mb-6'>
                <div className='w-8 h-8 rounded-full bg-[#000000]' />
                <div className='w-8 h-8 rounded-full bg-[#000000]' />
                <div className='w-8 h-8 rounded-full bg-[#000000]' />
              </div>
            </div>

            <PhotoCarousel />

            <div className='flex flex-col items-center justify-center text-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <h3 className='text-3xl sm:text-4xl font-semibold mb-2'>
                  Compartenos tus fotos con el hashtag
                </h3>
                <p className='flex items-center justify-center gap-2 text-xl'>
                  <Hash className='w-4 h-4 text-2xl'/>
                  KarimeAndJesus2024
                </p>
              </div>
            </div>
          </Card>

          <PhotoCarousel />

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
    </main>
  );
}
