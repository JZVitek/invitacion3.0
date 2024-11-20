"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 p-4 sm:p-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
              <div className="text-2xl sm:text-3xl font-light">{value.toString().padStart(2, '0')}</div>
            </div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest font-light">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
}