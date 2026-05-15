"use client";

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ScrapbookCard } from '@/components/ScrapbookCard';

const timelineEvents = [
  { 
    date: "Mar 3, 2014", 
    title: "The First Glance", 
    desc: "Met at Mama's Marriage. A story waiting to happen." 
  },
  { 
    date: "Mar 31, 2025", 
    title: "Daily Happiness", 
    desc: "Started talking regularly. The text chains began!" 
  },
  { 
    date: "Jul 4, 2025", 
    title: "Biriyani & Fried Chicken", 
    desc: "First date at Saravana Stores. Foodie love confirmed." 
  },
  { 
    date: "Nov 23, 2025", 
    title: "Officially Us", 
    desc: "Became a couple. He asked, she said okay 😂." 
  },
];

export default function TimelinePage() {
  return (
    // Updated the background class here to match the theme
    <main className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 py-24 px-6 relative overflow-x-hidden">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 font-bold">Our Winding Path</h2>
        <p className="text-slate-500 mt-4 italic font-serif">A journey of {timelineEvents.length} beautiful chapters</p>
      </motion.div>
      
      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-pink-300 before:rounded-full space-y-16">
        
        {timelineEvents.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Heart Icon on the line */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 bg-pink-500 border-4 border-white rounded-full flex items-center justify-center z-10 shadow-lg">
              <Heart size={16} className="text-white fill-white" />
            </div>

            {/* Card Content */}
            <div className="pl-12 md:pl-0 md:w-5/12">
              <ScrapbookCard className="relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <span className="text-pink-500 font-bold text-sm tracking-wider uppercase mb-1 block">
                  {item.date}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-slate-800">
                  {item.desc}
                </p>
              </ScrapbookCard>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}