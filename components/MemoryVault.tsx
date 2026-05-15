"use client";

import { motion } from 'framer-motion';
import { ScrapbookCard } from '@/components/ScrapbookCard';
// ADDED: Archive icon imported here!
import { Camera, Heart, Music, MapPin, Gift, ShieldCheck, Sparkles, MessageCircleHeart, Archive } from 'lucide-react';

// --- REUSABLE SCRAPBOOK NOTE COMPONENT ---
const ScrapbookNote = ({ title, content, icon: Icon, rotation, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, zIndex: 50 }}
    className={`relative bg-[#fffff8] p-6 shadow-xl border border-pink-100 ${rotation}`}
  >
    {/* Cute Tape Graphic */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-sm shadow-sm border border-black/5 rotate-2" />
    
    <div className="flex items-center gap-3 mb-4 text-pink-400">
      <Icon size={20} />
      <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
    </div>
    
    <p className="font-serif text-xl text-slate-700 leading-relaxed">
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
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      
      {/* --- 1. THE MEMORY VAULT SECTION --- */}
      <section className="max-w-6xl mx-auto mb-32">
        
        {/* --- UPDATED HEADER SECTION --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* The Circular Vault Icon */}
            <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
              <Archive size={32} />
            </div>
            
            {/* The Title Flanked by Hearts */}
            <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-4">
              <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
              The Kiluku Muluku Vault
              <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
            </h2>
            
            <p className="text-slate-500 max-w-xl mx-auto">
              A messy, beautiful collection of our favorite things and the little details that make us 'Us'.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 */}
          <div className="space-y-8 mt-12">
            <ScrapbookNote 
              title="His Cutest Habit" 
              content="The famous 'Kiluku muluku Smile' 🤣 It gets me every single time." 
              icon={Heart} 
              rotation="rotate-[-3deg]" 
              delay={0.1} 
            />
            
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 pb-12 shadow-xl rotate-[2deg]">
               <div className="aspect-square bg-pink-100 rounded-lg flex items-center justify-center text-pink-300">
                  <img 
                    src="/photos/kovil.jpeg" 
                    alt="Kovil Trip" 
                    className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <p className="text-center font-serif mt-4 text-slate-600 font-bold">Kovil Trip ✨</p>
            </motion.div>

            <ScrapbookNote 
              title="The Safety Net" 
              content="What makes me feel safest? Him pampering me like a baby 👶💓" 
              icon={ShieldCheck} 
              rotation="rotate-[-2deg]" 
              delay={0.5} 
            />
          </div>

          {/* Column 2 (Center) */}
          <div className="space-y-8">
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 pb-12 shadow-xl rotate-[-1deg]">
               <div className="aspect-[4/5] bg-pink-100 rounded-lg flex items-center justify-center text-pink-300">
                  <img 
                    src="/photos/center.jpeg" 
                    alt="Main Memory" 
                    className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <p className="text-center font-serif mt-4 text-slate-600 font-bold">He is just like us 🐵 Jolly and happy! Only the gender is opposite 🤭</p>
            </motion.div>

            <ScrapbookNote 
              title="Comfort details" 
              content="His car, cloudy weather, and his signature perfume smell..." 
              icon={Heart} 
              rotation="rotate-[2deg]" 
              delay={0.3} 
            />

            <ScrapbookNote 
              title="The First Gift" 
              content="A simple but sweet digital beginning—and maybe some chocolate? 🍫" 
              icon={Gift} 
              rotation="rotate-[3deg]" 
              delay={0.6} 
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-8 mt-8">
            <ScrapbookNote 
              title="Our Songs" 
              content="Itharkuthaane aasai pattai balakumara & Un paarvaiyil paithiyam 🎵" 
              icon={Music} 
              rotation="rotate-[4deg]" 
              delay={0.2} 
            />
            
            <ScrapbookNote 
              title="First Date Diet" 
              content="Biriyani & Fried Chicken at Saravana Stores. Now we live on Burger & Dahi Poori." 
              icon={MapPin} 
              rotation="rotate-[-2deg]" 
              delay={0.4} 
            />

            <ScrapbookNote 
              title="A Secret Note" 
              content="One thing never said properly: 'I am so lucky to have you by my side' 💓" 
              icon={MessageCircleHeart} 
              rotation="rotate-[1deg]" 
              delay={0.7} 
            />

            {/* --- NEW SCRAPBOOK NOTE ADDED HERE --- */}
            <ScrapbookNote 
              title="The Proposal" 
              content="How did the big moment happen? 'He asked....I said ok 😂'" 
              icon={Sparkles} 
              rotation="rotate-[-3deg]" 
              delay={0.8} 
            />
          </div>

        </div>
      </section>

      {/* --- 2. THE QUICK STATS SECTION --- */}
      <section className="max-w-4xl mx-auto pb-24">
        
        {/* --- ADDED TITLE BAR HERE --- */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px bg-pink-200 flex-1" />
          <h3 className="text-2xl font-serif font-bold text-pink-600 flex items-center gap-2">
            <Sparkles size={24} /> The Quick Stats
          </h3>
          <div className="h-px bg-pink-200 flex-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ScrapbookCard>
                <h3 className="text-slate-800 font-bold uppercase tracking-wider text-sm mb-4">
                  {stat.label}
                </h3>
                
                {/* Potato Bar */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-16 text-sm font-semibold text-slate-600">Potato</span>
                  <div className="flex-1 h-3 bg-pink-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${stat.pScore}%` }} 
                      className="h-full bg-pink-400 rounded-full" 
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-pink-500">
                    {stat.pScore}%
                  </span>
                </div>

                {/* Pattuh Bar */}
                <div className="flex items-center gap-3">
                  <span className="w-16 text-sm font-semibold text-slate-600">Pattuh</span>
                  <div className="flex-1 h-3 bg-pink-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${stat.hScore}%` }} 
                      className="h-full bg-pink-500 rounded-full" 
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-pink-500">
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