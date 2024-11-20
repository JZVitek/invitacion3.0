"use client";

import { Calendar, Clock, Gift, Hash, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import Schedule from "@/components/Schedule";
import RSVPForm from "@/components/RSVPform";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-gray-800">
      <HeroSection />

      {/* Details Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <Card className="p-6 sm:p-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif">Our Special Day</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Ceremony</h3>
                <p className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  November 7th, 2025
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  9:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Reception</h3>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  10:30 PM
                </p>
              </div>
            </div>
          </Card>

          <LocationSection />

          <Schedule />

          {/* Parents Section */}
          <Card className="p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6">With the Blessing of Our Parents</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Bride's Parents</h3>
                <p>Mr. & Mrs. [Bride's Parents Names]</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Groom's Parents</h3>
                <p>Mr. & Mrs. [Groom's Parents Names]</p>
              </div>
            </div>
          </Card>

          <RSVPForm />

          {/* Additional Info */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-serif mb-4">Additional Information</h2>
              <p className="mb-6">Dress Code: Formal Attire</p>
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#2F4F4F]" />
                <div className="w-8 h-8 rounded-full bg-[#8B7355]" />
                <div className="w-8 h-8 rounded-full bg-[#DEB887]" />
                <div className="w-8 h-8 rounded-full bg-[#F5F5DC]" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-center">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Registry</h3>
                <p>View our gift registry</p>
                <Button variant="outline" className="mt-2">
                  <Gift className="w-4 h-4 mr-2" />
                  View Registry
                </Button>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Share Your Photos</h3>
                <p className="flex items-center justify-center gap-2">
                  <Hash className="w-4 h-4" />
                  KarimeAndJesus2024
                </p>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6">Questions?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>[Phone Number]</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>[Email Address]</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}