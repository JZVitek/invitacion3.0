'use client';

import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Location {
  name: string;
  address: string;
  mapsUrl: string;
}

const locations: Location[] = [
  {
    name: 'Parroquia del Sagrado Corazón de Jesús',
    address: '5 de Mayo, Centro, 64000 Monterrey, N.L.',
    mapsUrl:
      'https://www.google.com.mx/maps/place/Parroquia+del+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs/@25.6731308,-100.3124268,17z/data=!3m1!4b1!4m6!3m5!1s0x8662958a75132f6f:0xa9d82c23fa5b8a63!8m2!3d25.673126!4d-100.3098519!16s%2Fg%2F1tgcs9m4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'El Milagro Eventos',
    address: 'Blvrd Julian Treviño Elizondo 525, Villas de Huinala I, 66601 Cdad. Apodaca, N.L.',
    mapsUrl:
      'https://www.google.com.mx/maps/place/El+Milagro+Eventos/@25.747227,-100.1975749,17z/data=!3m1!4b1!4m6!3m5!1s0x8662ebb8da82f09d:0xd52547308b495627!8m2!3d25.7472222!4d-100.195!16s%2Fg%2F1pzpxsy6_?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
  },
];

export default function LocationSection() {
  const openMaps = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-2xl sm:text-3xl font-serif text-center mb-6 sm:mb-8 texto'>
        Ubicación
      </h2>
      <div className='grid sm:grid-cols-2 gap-8'>
        {locations.map((location) => (
          <div key={location.name} className='text-center space-y-4'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mx-auto'>
                <MapPin className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
              </div>
            <h3 className='text-lg sm:text-xl font-semibold'>
              {location.name}
            </h3>
            <p className='text-gray-600'>{location.address}</p>
            <Button
              variant='outline'
              onClick={() => openMaps(location.mapsUrl)}
              className='w-full'
            >
              <MapPin className='w-4 h-4 mr-2' />
              Abrir en Maps
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
