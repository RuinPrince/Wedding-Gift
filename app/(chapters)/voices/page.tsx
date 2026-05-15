"use client";

import { motion } from 'framer-motion';
import { Clapperboard, Heart } from 'lucide-react';

const VideoPolaroid = ({ title, subtitle, videoSrc }: { title: string, subtitle: string, videoSrc: string }) => (
  <motion.div 
    whileHover={{ y: -5, rotate: (Math.random() > 0.5 ? 2 : -2) }}
    className="bg-white p-4 rounded-3xl shadow-xl border-2 border-pink-100 w-full"
  >
    {/* FIXED: Changed aspect-[3/4] to aspect-video for a horizontal landscape container */}
    <div className="relative overflow-hidden bg-slate-900 rounded-2xl border border-pink-100 aspect-video">
  <video 
    src={videoSrc}
    controls
    onPlay={() => window.dispatchEvent(new Event('pauseBackgroundMusic'))}
    onPause={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
    onEnded={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
    className="w-full h-full object-contain rounded-2xl bg-slate-900"
  />
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm border border-white/50 z-10" />
</div>
    <div className="mt-4 text-center pb-2">
      <h3 className="font-serif text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm font-bold text-pink-400 uppercase tracking-widest mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

export default function VoicesPage() {
  const friendsVideos = [
    { id: 1, title: "Deivanai", subtitle: "", src: "/videos/Deiva.mp4" },
    { id: 2, title: "Mahalakshmi", subtitle: "", src: "/videos/Maha.m4v" },
    { id: 3, title: "Divyashree", subtitle: "", src: "/videos/Divya.mp4" },
    { id: 4, title: "Ilakkiya", subtitle: "", src: "/videos/Ilaki.m4v" },
    { id: 5, title: "Aswin", subtitle: "", src: "/videos/Ash.mp4" },
    { id: 6, title: "Divakar", subtitle: "", src: "/videos/Diva.mp4" },
    { id: 7, title: "Nithish", subtitle: "", src: "/videos/Nithish.mp4"}
  ];

  return (
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
          <Clapperboard size={32} />
        </div>
        
        {/* UPDATED: Title now includes the hearts and flex centering! */}
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-4">
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
          Voices of Love
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
        </h2>
        
        <p className="text-slate-500 max-w-xl mx-auto">
          Wishes, warnings, and future predictions from the Tech Crew and our favorite people.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friendsVideos.map((vid, index) => (
          <motion.div 
            key={vid.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <VideoPolaroid 
              title={vid.title} 
              subtitle={vid.subtitle} 
              videoSrc={vid.src} 
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}