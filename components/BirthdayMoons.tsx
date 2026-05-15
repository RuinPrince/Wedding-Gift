"use client";

import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

export default function BirthdayMoons() {
  // You can replace these with their actual birthdays and moon phases
  const coupleMoons = [
    {
      name: "Potato",
      role: "Groom",
      date: "August 12, 1999", // Replace with his actual birthday
      phase: "Waxing Crescent",
      description: "A moon of growth, energy, and bringing new light into the world.",
      rotation: "rotate-[-2deg]",
    },
    {
      name: "Pattuh",
      role: "Bride",
      date: "October 24, 2000", // Replace with her actual birthday
      phase: "Waning Gibbous",
      description: "A moon of gratitude, sharing, and illuminating the lives of others.",
      rotation: "rotate-[3deg]",
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
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
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold">Written in the Stars</h2>
        <p className="text-slate-500 mb-16 max-w-xl mx-auto">
          The sky above them on the nights they were born. Two different phases destined to share the same sky.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {coupleMoons.map((moon, index) => (
            <motion.div
              key={moon.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className={`bg-white/80 backdrop-blur-md border-2 border-pink-100 p-8 rounded-[3rem] shadow-xl ${moon.rotation}`}
            >
              <h3 className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-1">{moon.role}'s Moon</h3>
              <p className="font-serif text-2xl font-bold text-slate-800 mb-6">{moon.date}</p>
              
              {/* Glowing Moon Graphic */}
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full bg-slate-800 shadow-[0_0_40px_rgba(244,114,182,0.3)] flex items-center justify-center overflow-hidden">
                {/* 
                  Tip: For a real moon phase look, you can replace this inner div 
                  with an <img src="/moon-phase-1.png" /> that you download online!
                  For now, this creates a stylized CSS moon.
                */}
                <div className={`absolute w-full h-full bg-pink-100 rounded-full ${index === 0 ? '-translate-x-8' : 'translate-x-12 scale-110'}`} />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/20 rounded-full" />
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