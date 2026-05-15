"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Sparkles, Heart } from 'lucide-react';

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

export default function BirthdayMoons() {
  const coupleMoons = [
    {
      name: "Potato",
      role: "Groom",
      date: "March 11, 1999", 
      phase: "Waning Crescent",
      description: "A moon of deep wisdom, releasing the past, and preparing for bright new beginnings.",
      imageSrc: "/photos/moonphase.png", 
    },
    {
      name: "Pattuh",
      role: "Bride",
      date: "September 26, 2005", 
      phase: "Waning Crescent",
      description: "A beautiful phase of inner peace, quiet intuition, and making space for new love.",
      imageSrc: "/photos/moonphase.png", 
    }
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-24 px-4 sm:px-6 relative z-10 overflow-hidden bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 min-h-screen">
      
      <FloatingHearts />
      
      {/* Decorative background stars */}
      <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
         <Star size={24} className="absolute top-10 left-4 sm:left-10 text-pink-300" />
         <Star size={16} className="absolute bottom-20 right-10 sm:right-20 text-pink-300" />
         <Star size={32} className="absolute top-40 right-16 sm:right-32 text-pink-200 hidden sm:block" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6">
          <Moon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-6 sm:mb-8 font-bold flex items-center justify-center gap-2 sm:gap-4">
          <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          Written in the Stars
          <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
        </h2>
        
        {/* REVERTED TO IMAGE 1 LAYOUT: Wide banner, centered icon on top, centered text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm border-2 border-pink-200 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-sm mb-8 sm:mb-12 flex flex-col items-center text-center"
        >
          <div className="bg-pink-100 p-3 rounded-full text-pink-500 mb-4 shrink-0">
            <Sparkles size={28} />
          </div>
          <div className="max-w-3xl">
            <h4 className="font-bold text-pink-600 uppercase tracking-widest text-sm sm:text-base mb-2">Cosmic Coincidence</h4>
            <p className="text-slate-700 font-serif leading-relaxed text-base sm:text-lg">
              Despite being born six years apart, Bharath and Harini were born under the exact same moon phase—the <strong>Waning Crescent</strong>. Some things truly are just written in the stars! ✨
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {coupleMoons.map((moon, index) => (
            <motion.div
              key={moon.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border-2 border-pink-100 p-6 sm:p-8 rounded-3xl md:rounded-[3rem] shadow-xl"
            >
              <h3 className="text-xs sm:text-sm font-bold text-pink-400 uppercase tracking-widest mb-1">{moon.role}'s Moon</h3>
              <p className="font-serif text-xl sm:text-2xl font-bold text-slate-800 mb-6">{moon.date}</p>
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full bg-black shadow-[0_0_40px_rgba(244,114,182,0.3)] flex items-center justify-center overflow-hidden">
                <img 
                  src={moon.imageSrc} 
                  alt={`${moon.phase} for ${moon.role}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-pink-600 mb-2">{moon.phase}</h4>
              <p className="text-slate-500 italic text-sm sm:text-base">"{moon.description}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}