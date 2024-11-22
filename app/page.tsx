'use client';

import { Calendar, Clock, Gift, Hash, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import Schedule from '@/components/Schedule';
import RSVPForm from '@/components/RSVPForm';
import LocationSection from '@/components/LocationSection';
import ParticlesBackground from '@/components/particles-background';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#f8f5f0] text-gray-800'>
      <ParticlesBackground />
      <HeroSection />

      {/* Details Section */}
      <section className='py-12 sm:py-20 px-4'>
        <div className='max-w-4xl mx-auto space-y-8 sm:space-y-12'>
          <Card className='p-6 sm:p-8 text-center space-y-6'>
            <h2 className='text-2xl sm:text-3xl font-serif texto'>Nuestra Boda</h2>
            <div className='grid sm:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Ceremonia
                </h3>
                <p className='flex items-center justify-center gap-2'>
                  <Calendar className='w-4 h-4' />7 de Noviembre, 2025
                </p>
                <p className='flex items-center justify-center gap-2'>
                  <Clock className='w-4 h-4' />
                  7:00 PM
                </p>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Recepción
                </h3>
                <p className='flex items-center justify-center gap-2'>
                  <Clock className='w-4 h-4' />
                  9:00 PM
                </p>
              </div>
            </div>
          </Card>

          <LocationSection />

          <Schedule />

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
                <p>Sr y Sra. [Brides Parents Names]</p>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Padres del novio
                </h3>
                <p>Sr y Sra. [Grooms Parents Names]</p>
              </div>
            </div>
          </Card>

          <RSVPForm />

          {/* Additional Info */}
          <Card className='p-6 sm:p-8 space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl sm:text-3xl font-serif mb-4 texto'>
                Información adicional
              </h2>
              <p className='mb-6'>Dress Code: Formal</p>
              <div className='flex justify-center gap-4 mb-6'>
                <div className='w-8 h-8 rounded-full bg-[#000000]' />
              </div>
            </div>

            <div className='grid sm:grid-cols-2 gap-6 sm:gap-8 text-center'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Registry
                </h3>
                <p>View our gift registry</p>
                <Button variant='outline' className='mt-2'>
                  <Gift className='w-4 h-4 mr-2' />
                  View Registry
                </Button>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  Compartenos tus fotos
                </h3>
                <p className='flex items-center justify-center gap-2'>
                  <Hash className='w-4 h-4' />
                  KarimeAndJesus2024
                </p>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className='p-6 sm:p-8 text-center'>
            <h2 className='text-2xl sm:text-3xl font-serif mb-6 texto'>Preguntas?</h2>
            <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
              <div className='flex items-center justify-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>[3531135393]</span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>[karimeyjesus@gmail.com]</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
