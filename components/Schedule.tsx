import { CakeSlice, Clock, Gift, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const schedule = [
  { time: '5:00', event: 'Ceremonia Religiosa', icon: Heart },
  { time: '7:00', event: 'Ceremonia Civil', icon: Heart },
  { time: '8:00', event: 'Recepción', icon: Gift },
  { time: '23:30', event: 'Cake Cutting', icon: CakeSlice },
  { time: '02:00', event: 'Farewell', icon: Heart },
];

export default function Schedule() {
  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-4xl sm:text-5xl font-serif text-center mb-6 sm:mb-8 texto'>
        Itinerario
      </h2>
      <div className='max-w-md mx-auto'>
        {schedule.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6'
          >
            <div className='w-14 sm:w-16 text-right font-semibold text-xl sm:text-2xl'>
              {item.time}
            </div>
            <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center'>
              <item.icon className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
            </div>
            <div className='flex-1 text-xl'>{item.event}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
