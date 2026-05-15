"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, FileSignature } from 'lucide-react';

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

export default function ContractPage() {
  return (
    // FIX: Increased pt-24 sm:pt-28 to ensure the fixed Navbar doesn't cut the title
    <main className="relative min-h-screen pt-24 sm:pt-28 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 overflow-hidden">
      
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* --- STANDARDIZED HEADER SECTION (RESTORED) --- */}
      <div className="relative z-10 text-center mb-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          {/* Circular FileSignature Icon */}
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-6 shadow-sm">
            <FileSignature className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          
          {/* Title Flanked by Hearts */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center">
            <Heart className="text-pink-500 fill-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
            The Official Love Contract
            <Heart className="text-pink-500 fill-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto px-2">
            The Bride's Party has laid out the terms. Read the preview below before viewing the official, legally binding document!
          </p>
        </motion.div>
      </div>

      {/* --- THE CONTRACT CONTENT --- */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // Pure White Paper Background
        className="relative z-10 max-w-3xl mx-auto w-full bg-white border-[3px] sm:border-4 border-slate-800 px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 md:px-12 md:pt-12 md:pb-8 shadow-2xl"
      >
        <div className="text-center mb-6 sm:mb-8 text-slate-900">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-widest">
            Love Agreement
          </h1>
          <hr className="border-t-2 sm:border-t-[3px] border-slate-800 mt-4 sm:mt-6" />
        </div>

        <div className="font-serif leading-relaxed text-slate-800 text-base sm:text-lg md:text-xl space-y-6 sm:space-y-8">
          
          <div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl mb-2">Dear Bharath Anna,</p>
            <p>
              Before handing over our precious Harini 💖, the Bride's Party has a few preliminary conditions 👇
            </p>
          </div>

          <ol className="space-y-5 sm:space-y-6 list-decimal list-outside ml-5 sm:ml-6">
            <li className="pl-2">
              <strong>The 'Not Hungry' Clause:</strong> Whenever Harini says "I'm not hungry," Bharath is legally obligated to order extra fries, as she will inevitably eat half of his without warning 🍟
            </li>
            
            <li className="pl-2">
              <strong>The Mandatory Compliment Act:</strong> Any slight change in hairstyle, nail polish color, or outfit must be noticed within 5 business seconds and complimented enthusiastically ✨
            </li>
            
            <li className="pl-2">
              <strong>The Swiggy/Zomato Protocol:</strong> All food delivery passwords must be surrendered immediately. Random midnight cravings are to be treated as top-level emergencies 🚨
            </li>
            
            <li className="pl-2">
              <strong>The Shopping Endurance Policy:</strong> Holding shopping bags is not considered a workout, but it is a mandatory, lifelong duty. Sighing loudly is strictly prohibited...
            </li>
          </ol>

          <motion.a 
            href="/agreement.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-2 w-full py-3 sm:py-4 bg-pink-500 text-white font-bold rounded-xl shadow-[0_5px_0_rgb(219,39,119)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(219,39,119)] transition-all text-sm sm:text-base uppercase tracking-wider"
          >
            Read the full contract ↓
          </motion.a>

        </div>
      </motion.div>
    </main>
  );
}