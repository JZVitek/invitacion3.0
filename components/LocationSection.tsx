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
    name: 'Catedral de Monterrey',
    address: 'Juan Zuazua 1100 Sur, Centro, 64000 Monterrey, N.L.',
    mapsUrl:
      'https://www.google.com.mx/maps/place/Santa+Iglesia+Catedral+Metropolitana+de+Monterrey/@25.6656991,-100.3123949,17z/data=!3m1!4b1!4m6!3m5!1s0x8662be2ddbcbb061:0x4604ad25f604a4c8!8m2!3d25.6656943!4d-100.30982!16s%2Fg%2F122qgjtn?hl=es&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Grand Plaza Hotel',
    address: '456 Plaza Avenue, City',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Grand+Plaza+Hotel',
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
