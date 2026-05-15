"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Newspaper, Music, Camera, Star } from 'lucide-react';

// --- UPDATED COMPONENT IMPORTS (pointing to the components folder correctly) ---
import BirthdayMoons from '../../../components/BirthdayMoons';
import VoicesOfLove from '../../../components/VoicesOfLove';
import MemoryVault from '../../../components/MemoryVault';

// --- BACKGROUND FLOATING HEARTS ---
const FloatingHearts = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
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

// --- CUTE CARD COMPONENT ---
const ScrapbookCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(255,192,203,0.3)] hover:shadow-[0_8px_30px_rgb(255,192,203,0.5)] transition-all ${className}`}>
    {children}
  </div>
);

// --- MAIN PAGE ---
export default function PinkScrapbookWedding() {
  const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isMarried, setIsMarried] = useState(false);

  // Countdown / Countup Logic
  useEffect(() => {
    const weddingDate = new Date("2026-05-18T00:00:00").getTime(); 
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - weddingDate;
      
      if (difference > 0) {
        setIsMarried(true);
        setTimeSince({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        const absDiff = Math.abs(difference);
        setTimeSince({
          days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((absDiff % (1000 * 60)) / 1000),
        });
      }
    };
    const timer = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FFF5F7] text-slate-800 font-sans overflow-x-hidden selection:bg-pink-300 selection:text-white pt-8">
      <FloatingHearts />

      {/* 6. MEMORY VAULT COMPONENT */}
      <MemoryVault />

    </main>
  );
}