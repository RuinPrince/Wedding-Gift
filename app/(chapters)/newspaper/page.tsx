"use client";
import { motion } from 'framer-motion';
// ADDED: Imported Newspaper and Heart icons
import { Camera, Newspaper, Heart } from 'lucide-react';

export default function NewspaperPage() {
  return (
    // UPDATED: Replaced the plain wrapper with the standard page gradient and padding
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      
      {/* ADDED: Standardized Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          {/* Circular Newspaper Icon */}
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6 shadow-sm">
            <Newspaper size={32} />
          </div>
          
          {/* Title Flanked by Hearts */}
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-4">
            <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
            Breaking News
            <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
          </h2>
          
          <p className="text-slate-500 max-w-xl mx-auto">
            Extra! Extra! Read all about the most awaited wedding of the year and how it all began.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        /* ADDED mx-auto to center the newspaper card now that the wrapper changed */
        className="max-w-4xl mx-auto w-full bg-[#FAFAFA] border-x-4 border-t-8 border-b-4 border-slate-800 p-8 shadow-2xl"
      >
        <div className="border-b-4 border-slate-800 pb-4 mb-6 text-center">
          <h3 className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-2">The Daily Gossips • Special Edition</h3>
          <h1 className="text-5xl md:text-7xl font-serif font-black uppercase text-slate-900 tracking-tight">
            Pattuh & Potato<br/>Tying the Knot!
          </h1>
          <div className="flex justify-between items-center mt-4 text-sm font-bold border-t-2 border-slate-800 pt-2 uppercase text-slate-800">
            <span>Vol. 1 • May 18, 2026</span>
            <span>"He asked....I said ok 😂"</span>
            <span>Price: Priceless</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center font-serif leading-relaxed">
          <div className="aspect-square bg-pink-100 border-2 border-slate-800 flex items-center justify-center relative overflow-hidden group">
             <img 
                  src="/photos/news.jpg" 
                  alt="" 
                  className="w-full h-full object-contain rounded-lg"
              />
          </div>
          
          <div className="space-y-4 text-lg text-slate-800">
            <p><span className="text-4xl font-black float-left mr-2 mt-1">I</span>n a shocking turn of events, Bharath and Harini finally make it official.</p>
            <p>Sources confirm the bride's favorite details include his "Kiluku muluku smile" and signature perfume. They plan for a "fun filled, happy home."</p>
            
            <motion.a 
              href="/newspaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 block text-center w-full py-4 bg-pink-500 text-white font-bold rounded-xl shadow-[0_5px_0_rgb(219,39,119)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(219,39,119)] transition-all"
            >
              Read the Full Story ↓
            </motion.a>
          </div>

        </div>
      </motion.div>
    </main>
  );
}