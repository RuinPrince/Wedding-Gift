"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Heart } from 'lucide-react';

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

export default function NewspaperPage() {
  return (
    <main className="relative min-h-screen pt-4 sm:pt-8 md:pt-12 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 overflow-hidden">
      
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-10 sm:mb-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          {/* Circular Newspaper Icon */}
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6 shadow-sm">
            <Newspaper className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          
          {/* Title Flanked by Hearts */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center">
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
            Breaking News
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto px-2">
            Extra! Extra! Read all about the most awaited wedding of the year and how it all began.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 max-w-4xl mx-auto w-full bg-[#FAFAFA] border-x-4 border-t-8 border-b-4 border-slate-800 p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        <div className="border-b-4 border-slate-800 pb-4 sm:pb-6 mb-6 text-center">
          <h3 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500 mb-2">The Daily Gossips • Special Edition</h3>
          
          {/* Responsive title scaling */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black uppercase text-slate-900 tracking-tight leading-none sm:leading-tight">
            Pattuh & Potato<br/>Tying the Knot!
          </h1>
          
          {/* RESPONSIVE SUB-HEADER: Stacks on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-bold border-t-2 border-slate-800 pt-3 uppercase text-slate-800 gap-2 sm:gap-0">
            <span>Vol. 1 • May 18, 2026</span>
            <span className="text-center">"He asked....I said ok 😂"</span>
            <span>Price: Priceless</span>
          </div>
        </div>

        {/* RESPONSIVE GRID: 1 column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center font-serif leading-relaxed">
          
          {/* FIX: object-position centers the face perfectly, object-cover fills the square box */}
          <div className="aspect-square bg-slate-200 border-2 border-slate-800 flex items-center justify-center relative overflow-hidden group w-full max-w-md mx-auto md:max-w-none">
              {/* Cute Tape Graphic - Added for effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-sm shadow-sm border border-black/5 rotate-2 z-10" />
              <img 
                 src="/photos/news.jpg" 
                 alt="Couple" 
                 // FIX: Changed default center to center-top (object-[center_30%]) to keep faces perfectly centered and un-cropped within the square!
                 className="w-full h-full object-cover object-[center_30%] transition-transform duration-300 group-hover:scale-105"
              />
          </div>
          
          <div className="space-y-4 text-base sm:text-lg text-slate-800">
            <p><span className="text-5xl sm:text-6xl font-black float-left mr-3 mt-1 sm:mt-0 leading-none">I</span>n a shocking turn of events, Bharath and Harini finally make it official.</p>
            <p>Sources confirm the bride's favorite details include his "Kiluku muluku smile" and signature perfume. They plan for a "fun filled, happy home."</p>
            
            <motion.a 
              href="/Newspaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 block text-center w-full py-3 sm:py-4 bg-pink-500 text-white font-bold rounded-xl shadow-[0_5px_0_rgb(219,39,119)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(219,39,119)] transition-all text-sm sm:text-base uppercase tracking-wider"
            >
              Read the Full Story ↓
            </motion.a>
          </div>

        </div>
      </motion.div>
    </main>
  );
}