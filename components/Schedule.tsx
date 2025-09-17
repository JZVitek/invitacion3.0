import { CakeSlice, Clock, Gift, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const schedule = [
  { time: '4:30', event: 'Ceremonia Religiosa', icon: Heart },
  { time: '7:00', event: 'Ceremonia Civil', icon: Heart },
  { time: '7:30', event: 'Recepción', icon: Heart },
  { time: '8:30', event: 'Cena', icon: Heart },
  { time: '9:30', event: 'Vals', icon: Heart },
  { time: '12:00', event: 'Mariachi', icon: Heart },
  { time: '12:30', event: 'Fuegos Artificiales', icon: Heart },
  { time: '1:00', event: 'Final', icon: Heart },
];

export default function Schedule() {
  return (
    <Card className='p-4 sm:p-8'>
      <h2 className='text-3xl sm:text-5xl text-center mb-4 sm:mb-8'>
        Itinerario
      </h2>
      <div className='max-w-xs sm:max-w-md mx-auto'>
        {schedule.map((item, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3 sm:mb-6 group'
          >
            <div className='w-full sm:w-14 sm:text-right font-semibold text-lg sm:text-2xl cinzel-text-titles'>
              {item.time}
            </div>
            <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110 mx-auto sm:mx-0'>
              <item.icon className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
            </div>
            <div className='flex-1 text-base sm:text-xl font-medium border-b border-gray-300 pb-1 sm:pb-2 group-hover:text-gray-900 cinzel-text-titles text-center sm:text-left'>
              {item.event}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
