"use client";

import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react'; // <-- Added Heart here!

const VideoPolaroid = ({ title, subtitle, videoSrc }: { title: string, subtitle: string, videoSrc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-4 rounded-3xl shadow-xl border-2 border-pink-100 w-full"
  >
    <div className="relative overflow-hidden bg-slate-900 rounded-2xl border border-pink-100 aspect-video">
  <video 
    src={videoSrc}
    controls
    onPlay={() => window.dispatchEvent(new Event('pauseBackgroundMusic'))}
    onPause={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
    onEnded={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
    className="w-full h-full object-contain rounded-2xl bg-slate-900"
  />
</div>
    <div className="mt-4 text-center pb-2">
      <h3 className="font-serif text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm font-bold text-pink-400 uppercase tracking-widest mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

export default function SymphonyPage() {
  const symphonyVideos = [
    {
      id: 1,
      title: "Manamaganin sathiyam",
      subtitle: "",
      src: "/videos/nith1.mp4"
    },
    {
      id: 2,
      title: "Nelothi", 
      subtitle: "", 
      src: "/videos/nith2.mp4" 
    }
  ];

  return (
    <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
          <Music size={32} />
        </div>
        
        {/* UPDATED: Title now includes the hearts and flex centering! */}
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-4">
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
          The Symphony of Us
          <Heart className="text-pink-500 hidden md:block" size={36} strokeWidth={2.5} />
        </h2>
        
        <p className="text-slate-500 max-w-xl mx-auto">
          Every love story has a soundtrack. Watch the beautiful moments our wedding melodies were composed on the keys.
        </p>
      </div>

      {/* FIXED: Changed to a flex column (flex-col) to stack them one after the other */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center pb-12">
        {symphonyVideos.map((vid) => (
          <VideoPolaroid 
            key={vid.id}
            title={vid.title} 
            subtitle={vid.subtitle} 
            videoSrc={vid.src}
          />
        ))}
      </div>
    </main>
  );
}
