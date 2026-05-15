"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react';

// --- BACKGROUND FLOATING HEARTS ---
const FloatingHearts = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <Heart fill="currentColor" size={32} />
        </motion.div>
      ))}
    </div>
  );
};

// --- VIDEO POLAROID COMPONENT ---
const VideoPolaroid = ({ title, subtitle, videoSrc }: { title: string, subtitle: string, videoSrc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-3 sm:p-4 rounded-[2rem] shadow-xl border-2 border-pink-100 w-full"
  >
    <div className="relative overflow-hidden bg-slate-900 rounded-2xl border border-pink-100 aspect-video">
      <video 
        src={videoSrc}
        controls
        onPlay={() => window.dispatchEvent(new Event('pauseBackgroundMusic'))}
        onPause={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
        onEnded={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
        className="w-full h-full object-contain rounded-2xl bg-slate-900"
      />
    </div>
    <div className="mt-4 text-center pb-2 px-2">
      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-800 leading-tight">{title}</h3>
      {subtitle && (
        <p className="text-[10px] sm:text-sm font-bold text-pink-400 uppercase tracking-widest mt-1">
          {subtitle}
        </p>
      )}
    </div>
  </motion.div>
);

export default function SymphonyPage() {
  const symphonyVideos = [
    {
      id: 1,
      title: "Manamaganin sathiyam",
      subtitle: "Official Vows",
      src: "/videos/nith1.mp4"
    },
    {
      id: 2,
      title: "Nelothi", 
      subtitle: "The Melody", 
      src: "/videos/nith2.mp4" 
    }
  ];

  return (
    // FIX: pt-24 sm:pt-32 ensures the title is never hidden behind the fixed Navbar
    <main className="relative min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 overflow-hidden">
      
      {/* Floating Hearts Background */}
      <FloatingHearts />

      <div className="relative z-10 text-center mb-10 sm:mb-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          {/* Circular Music Icon */}
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6 shadow-sm">
            <Music className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          
          {/* Responsive Title with Hearts */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center">
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
            The Symphony of Us
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto px-2">
            Every love story has a soundtrack. Watch the beautiful moments our wedding melodies were composed on the keys.
          </p>
        </motion.div>
      </div>

      {/* Responsive Video Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 sm:gap-12 items-center pb-12">
        {symphonyVideos.map((vid) => (
          <VideoPolaroid 
            key={vid.id}
            title={vid.title} 
            subtitle={vid.subtitle} 
            videoSrc={vid.src}
          />
        ))}
      </div>
    </main>
  );
}