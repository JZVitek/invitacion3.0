"use client";

import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  const weddingDate = new Date("2025-11-07T21:00:00");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3"
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative text-center text-white space-y-8 sm:space-y-12 max-w-3xl mx-auto px-4">
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-light tracking-[0.2em] uppercase">Save the Date</h3>
          <div className="w-24 sm:w-32 h-[1px] bg-white/50 mx-auto"></div>
          <h1 className="font-serif">
            <span className="block text-4xl sm:text-5xl mb-2">Karime</span>
            <span className="inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle"></span>
            <span className="text-2xl sm:text-3xl">&</span>
            <span className="inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle"></span>
            <span className="block text-4xl sm:text-5xl mt-2">Jesus</span>
          </h1>
          <div className="w-24 sm:w-32 h-[1px] bg-white/50 mx-auto"></div>
          <p className="text-lg sm:text-xl font-light tracking-wider">November 7th, 2025</p>
        </div>
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </section>
  );
}