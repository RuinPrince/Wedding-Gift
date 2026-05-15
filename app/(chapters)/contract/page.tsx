"use client";

import { motion } from 'framer-motion';
import { Heart, FileSignature } from 'lucide-react';

export default function ContractPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          {/* NEW: Moved the FileSignature icon up here into the standard pink circle */}
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6 shadow-sm">
            <FileSignature size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-6 font-bold flex items-center justify-center gap-4">
            {/* NOTE: Kept these as fill-pink-500 since that's how they are in your image, 
                but you can remove 'fill-pink-500' if you want outline hearts like the other pages! */}
            <Heart className="text-pink-500 fill-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
            The Official Love Contract
            <Heart className="text-pink-500 fill-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            The Bride's Party has laid out the terms. Read the preview below before viewing the official, legally binding document!
          </p>
        </motion.div>
      </div>

      {/* The Teaser Document Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto w-full bg-[#EFEFEF] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] border-x-4 border-t-8 border-b-4 border-slate-800 p-8 md:p-12 shadow-2xl relative"
      >
        {/* Document Title */}
        <div className="text-center border-b-2 border-slate-400 pb-6 mb-8 text-slate-900">
          {/* REMOVED: The icon from here */}
          <h1 className="text-4xl md:text-5xl font-serif font-black tracking-widest uppercase">
            Love Agreement
          </h1>
        </div>

        {/* Document Preview Text */}
        <div className="font-serif text-lg text-slate-900 space-y-6 leading-relaxed relative pb-20">
          <p className="font-bold">Dear Bharath Anna,</p>
          <p className="font-medium">Before handing over our precious Harini ❤️, the Bride's Party has a few preliminary conditions 👇</p>
          
          <ul className="space-y-6 ml-2">
            <li className="flex gap-3">
              <span className="font-bold">1.</span> 
              <span><span className="font-bold">The 'Not Hungry' Clause:</span> Whenever Harini says "I'm not hungry," Bharath is legally obligated to order extra fries, as she will inevitably eat half of his without warning 🍟</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span> 
              <span><span className="font-bold">The Mandatory Compliment Act:</span> Any slight change in hairstyle, nail polish color, or outfit must be noticed within 5 business seconds and complimented enthusiastically ✨</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span> 
              <span><span className="font-bold">The Swiggy/Zomato Protocol:</span> All food delivery passwords must be surrendered immediately. Random midnight cravings are to be treated as top-level emergencies 🚨</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span> 
              <span><span className="font-bold">The Shopping Endurance Policy:</span> Holding shopping bags is not considered a workout, but it is a mandatory, lifelong duty. Sighing loudly is strictly prohibited...</span>
            </li>
          </ul>

          {/* This creates the "Fade Out" effect over the bottom text */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#EFEFEF] to-transparent pointer-events-none" />
        </div>

        {/* Link to Full PDF */}
        <motion.a 
          href="/agreement.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 mt-4 block text-center w-full py-4 bg-pink-500 text-white font-bold rounded-xl shadow-[0_5px_0_rgb(219,39,119)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(219,39,119)] transition-all uppercase tracking-wider"
        >
          Read The Full Contract ↓
        </motion.a>
      </motion.div>

    </main>
  );
}