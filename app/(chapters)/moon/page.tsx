"use client";

import { motion } from 'framer-motion';
// ADDED: Imported Heart here
import { Moon, Star, Sparkles, Heart } from 'lucide-react';

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
    <section className="py-24 px-6 relative z-10 overflow-hidden bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 min-h-screen">
      {/* Decorative background stars */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
         <Star size={24} className="absolute top-10 left-10 text-pink-300" />
         <Star size={16} className="absolute bottom-20 right-20 text-pink-300" />
         <Star size={32} className="absolute top-40 right-32 text-pink-200" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
          <Moon size={32} />
        </div>
        
        {/* UPDATED TITLE: Added flex container and matching Heart icons! */}
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-6 font-bold flex items-center justify-center gap-4">
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
          Written in the Stars
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
        </h2>
        
        {/* THE NEW COSMIC COINCIDENCE BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm border-2 border-pink-200 p-6 rounded-3xl shadow-sm mb-12 flex flex-col md:flex-row items-center gap-4 text-left"
        >
          <div className="bg-pink-100 p-3 rounded-full text-pink-500 shrink-0">
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-bold text-pink-600 uppercase tracking-widest text-sm mb-1">Cosmic Coincidence</h4>
            <p className="text-slate-700 font-serif leading-relaxed">
              Despite being born six years apart, Bharath and Harini were born under the exact same moon phase—the <strong>Waning Crescent</strong>. Some things truly are just written in the stars! ✨
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {coupleMoons.map((moon, index) => (
            <motion.div
              key={moon.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border-2 border-pink-100 p-8 rounded-[3rem] shadow-xl"
            >
              <h3 className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-1">{moon.role}'s Moon</h3>
              <p className="font-serif text-2xl font-bold text-slate-800 mb-6">{moon.date}</p>
              
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full bg-black shadow-[0_0_40px_rgba(244,114,182,0.3)] flex items-center justify-center overflow-hidden">
                <img 
                  src={moon.imageSrc} 
                  alt={`${moon.phase} for ${moon.role}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-xl font-bold text-pink-600 mb-2">{moon.phase}</h4>
              <p className="text-slate-500 italic">"{moon.description}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}