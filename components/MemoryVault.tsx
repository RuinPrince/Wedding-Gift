"use client";

import { motion } from 'framer-motion';
// Note: Assuming ScrapbookCard is imported or defined in this file
import { ScrapbookCard } from '@/components/ScrapbookCard'; 
import { Camera, Heart, Music, MapPin, Gift, ShieldCheck, Sparkles, MessageCircleHeart, Archive } from 'lucide-react';

// --- REUSABLE SCRAPBOOK NOTE COMPONENT ---
const ScrapbookNote = ({ title, content, icon: Icon, rotation, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, zIndex: 50 }}
    // Added responsive rotation: less extreme on mobile so it doesn't clip off the screen edges
    className={`relative bg-[#fffff8] p-5 sm:p-6 shadow-xl border border-pink-100 transition-transform ${rotation}`}
  >
    {/* Cute Tape Graphic */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-5 sm:h-6 bg-white/60 backdrop-blur-sm shadow-sm border border-black/5 rotate-2" />
    
    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-pink-400">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">{title}</span>
    </div>
    
    <p className="font-serif text-lg sm:text-xl text-slate-700 leading-relaxed">
      {content}
    </p>
  </motion.div>
);

export default function MemoryVaultPage() {
  const stats = [
    { label: "Who says sorry first?", pScore: 20, hScore: 80 },
    { label: "The Ultimate Foodie", pScore: 35, hScore: 65 },
    { label: "Who takes longer to get ready?", pScore: 85, hScore: 15 },
    { label: "Who is more dramatic?", pScore: 70, hScore: 30 },
  ];

  return (
    // Adjusted top padding for mobile
    <main className="min-h-screen py-12 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      
      {/* --- 1. THE MEMORY VAULT SECTION --- */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-32">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            {/* The Circular Vault Icon */}
            <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6">
              <Archive className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            
            {/* Responsive Title Flanked by Hearts */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center leading-tight">
              <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
              The Kiluku Muluku Vault
              <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
            </h2>
          </motion.div>
        </div>

        {/* RESPONSIVE GRID FIX: 
          On mobile: 1 column, gap-6 
          On desktop: 3 columns, gap-8
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Column 1 */}
          {/* md:mt-12 keeps the stagger on desktop, but removes the awkward gap on mobile */}
          <div className="space-y-6 sm:space-y-8 md:mt-12">
            <ScrapbookNote 
              title="His Cutest Habit" 
              content="The famous 'Kiluku muluku Smile' 🤣 It gets me every single time." 
              icon={Heart} 
              rotation="md:-rotate-3" 
              delay={0.1} 
            />
            
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-3 sm:p-4 pb-10 sm:pb-12 shadow-xl md:rotate-2">
               <div className="aspect-square bg-pink-100 rounded-lg flex items-center justify-center text-pink-300 overflow-hidden">
                  <img 
                    src="/photos/kovil.jpeg" 
                    alt="Kovil Trip" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <p className="text-center font-serif mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 font-bold">Kovil Trip ✨</p>
            </motion.div>

            <ScrapbookNote 
              title="The Safety Net" 
              content="What makes me feel safest? Him pampering me like a baby 👶💓" 
              icon={ShieldCheck} 
              rotation="md:-rotate-2" 
              delay={0.5} 
            />
          </div>

          {/* Column 2 (Center) */}
          <div className="space-y-6 sm:space-y-8">
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-3 sm:p-4 pb-10 sm:pb-12 shadow-xl md:-rotate-1">
               <div className="aspect-[4/5] bg-pink-100 rounded-lg flex items-center justify-center text-pink-300 overflow-hidden">
                  <img 
                    src="/photos/center.jpeg" 
                    alt="Main Memory" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <p className="text-center font-serif mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 font-bold px-2">He is just like us 🐵 Jolly and happy! Only the gender is opposite 🤭</p>
            </motion.div>

            <ScrapbookNote 
              title="Comfort details" 
              content="His car, cloudy weather, and his signature perfume smell..." 
              icon={Heart} 
              rotation="md:rotate-2" 
              delay={0.3} 
            />

            <ScrapbookNote 
              title="The First Gift" 
              content="A simple but sweet digital beginning—and maybe some chocolate? 🍫" 
              icon={Gift} 
              rotation="md:rotate-3" 
              delay={0.6} 
            />
          </div>

          {/* Column 3 */}
          {/* md:mt-8 keeps the stagger on desktop, removes the gap on mobile */}
          <div className="space-y-6 sm:space-y-8 md:mt-8">
            <ScrapbookNote 
              title="Our Songs" 
              content="Itharkuthaane aasai pattai balakumara & Un paarvaiyil paithiyam 🎵" 
              icon={Music} 
              rotation="md:rotate-2" 
              delay={0.2} 
            />
            
            <ScrapbookNote 
              title="First Date Diet" 
              content="Biriyani & Fried Chicken at Saravana Stores. Now we live on Burger & Dahi Poori." 
              icon={MapPin} 
              rotation="md:-rotate-2" 
              delay={0.4} 
            />

            <ScrapbookNote 
              title="A Secret Note" 
              content="One thing never said properly: 'I am so lucky to have you by my side' 💓" 
              icon={MessageCircleHeart} 
              rotation="md:rotate-1" 
              delay={0.7} 
            />

            <ScrapbookNote 
              title="The Proposal" 
              content="How did the big moment happen? 'He asked....I said ok 😂'" 
              icon={Sparkles} 
              rotation="md:-rotate-3" 
              delay={0.8} 
            />
          </div>

        </div>
      </section>

      {/* --- 2. THE QUICK STATS SECTION --- */}
      <section className="max-w-4xl mx-auto pb-12 sm:pb-24">
        
        {/* Responsive Title Bar */}
        <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 justify-center px-2">
          <div className="h-px bg-pink-200 flex-1" />
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-pink-600 flex items-center gap-1 sm:gap-2 text-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> The Quick Stats
          </h3>
          <div className="h-px bg-pink-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ScrapbookCard className="p-5 sm:p-6">
                <h3 className="text-slate-800 font-bold uppercase tracking-wider text-xs sm:text-sm mb-4">
                  {stat.label}
                </h3>
                
                {/* Potato Bar */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="w-14 sm:w-16 text-xs sm:text-sm font-semibold text-slate-600">Potato</span>
                  <div className="flex-1 h-2 sm:h-3 bg-pink-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${stat.pScore}%` }} 
                      className="h-full bg-pink-400 rounded-full" 
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-8 sm:w-10 text-right text-[10px] sm:text-xs font-bold text-pink-500">
                    {stat.pScore}%
                  </span>
                </div>

                {/* Pattuh Bar */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-14 sm:w-16 text-xs sm:text-sm font-semibold text-slate-600">Pattuh</span>
                  <div className="flex-1 h-2 sm:h-3 bg-pink-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${stat.hScore}%` }} 
                      className="h-full bg-pink-500 rounded-full" 
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-8 sm:w-10 text-right text-[10px] sm:text-xs font-bold text-pink-500">
                    {stat.hScore}%
                  </span>
                </div>
              </ScrapbookCard>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}