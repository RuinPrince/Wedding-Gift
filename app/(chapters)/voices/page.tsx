"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Heart } from 'lucide-react';

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
    whileHover={{ y: -5, rotate: (Math.random() > 0.5 ? 1 : -1) }}
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
      {/* Cute Tape Graphic */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-6 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm border border-white/50 z-10" />
    </div>
    <div className="mt-4 text-center pb-2 px-2">
      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-800 truncate">{title}</h3>
      <p className="text-[10px] sm:text-xs font-bold text-pink-400 uppercase tracking-widest mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

export default function VoicesPage() {
  const friendsVideos = [
    { id: 1, title: "Deivanai", subtitle: "Tech Crew", src: "/videos/Deiva.mp4" },
    { id: 2, title: "Mahalakshmi", subtitle: "Bestie", src: "/videos/Maha.m4v" },
    { id: 3, title: "Divyashree", subtitle: "Tech Crew", src: "/videos/Divya.mp4" },
    { id: 4, title: "Ilakkiya", subtitle: "Tech Crew", src: "/videos/Ilaki.m4v" },
    { id: 5, title: "Aswin", subtitle: "Tech Crew", src: "/videos/Ash.mp4" },
    { id: 6, title: "Divakar", subtitle: "Tech Crew", src: "/videos/Diva.mp4" },
    { id: 7, title: "Nithish", subtitle: "Tech Crew", src: "/videos/Nithish.mp4"}
  ];

  return (
    // FIX: pt-24 sm:pt-32 ensures the title clears the fixed Navbar
    <main className="relative min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 overflow-hidden">
      
      {/* Background Hearts */}
      <FloatingHearts />

      <div className="relative z-10 text-center mb-10 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6 shadow-sm"
        >
          <Clapperboard className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
        
        {/* Responsive Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center">
          <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          Voices of Love
          <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
        </h2>
        
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto px-2">
          Wishes, warnings, and future predictions from Family
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {friendsVideos.map((vid, index) => (
          <motion.div 
            key={vid.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <VideoPolaroid 
              title={vid.title} 
              subtitle={vid.subtitle} 
              videoSrc={vid.src} 
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}