import React from 'react';
import LettersSection from '@/components/LettersSection';
import FloatingHearts from '@/components/FloatingHearts';

export const metadata = {
  title: 'Letters | P & P',
  description: 'Heartfelt letters from our loved ones.',
};

export default function LettersPage() {
  return (
    // EXACT match to VoicesPage wrapper: py-24 pushes everything down perfectly.
    // Added 'relative overflow-hidden' so your floating hearts stay contained.
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 relative overflow-hidden">
      
      {/* Background Hearts Animation */}
      <FloatingHearts />
      
      {/* The Letters Content */}
      <LettersSection />
      
    </main>
  );
}