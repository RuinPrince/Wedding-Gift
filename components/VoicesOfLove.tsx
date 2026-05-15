"use client";

import { motion } from 'framer-motion';
import { PlayCircle, Video, Clapperboard, Music } from 'lucide-react'; // <-- Added Music here

// A helper for the cute scrapbook polaroid look
const VideoPolaroid = ({ title, subtitle, videoSrc, isFeatured = false }: { title: string, subtitle: string, videoSrc: string, isFeatured?: boolean }) => (
  <motion.div 
    whileHover={{ y: -5, rotate: isFeatured ? 0 : (Math.random() > 0.5 ? 2 : -2) }}
    className={`bg-white p-4 rounded-3xl shadow-xl border-2 border-pink-100 ${isFeatured ? 'max-w-4xl mx-auto' : 'w-full'}`}
  >
    <div className={`relative overflow-hidden bg-pink-50 rounded-2xl border border-pink-100 ${isFeatured ? 'aspect-video' : 'aspect-[3/4]'}`}>
      {/* 
        Replace the poster with an actual thumbnail of your videos.
        The 'controls' attribute lets users play/pause easily.
      */}
      <video 
        src={videoSrc}
        poster="/video-thumbnail-placeholder.jpg" 
        controls
        className="w-full h-full object-cover rounded-2xl"
      />
      
      {/* Cute tape effect on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm border border-white/50" />
    </div>
    <div className="mt-4 text-center pb-2">
      <h3 className="font-serif text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm font-bold text-pink-400 uppercase tracking-widest mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

export default function VoicesOfLove() {
  // Placeholder data for the tech crew's videos
  const friendsVideos = [
    { id: 1, title: "Deivanai A.", subtitle: "The 'Happy Home' Prediction", src: "/videos/friend1.mp4" },
    { id: 2, title: "Harini M.", subtitle: "Sangeet Dance Warning", src: "/videos/friend2.mp4" },
    { id: 3, title: "Nagaharine M.", subtitle: "Sweetest Wishes", src: "/videos/friend3.mp4" },
  ];

  return (
    <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-pink-50/50">
      
      {/* PART 1: The Keyboard Composing Video */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
            <Music size={32} /> // Oops, let's use a musical note icon here! Wait, Lucide's Music icon works perfectly.
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold">The Symphony of Us</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every love story has a soundtrack. Watch the beautiful moment our wedding melody was composed on the keys.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Replace src with your actual keyboard video path */}
          <VideoPolaroid 
            title="Composing Forever" 
            subtitle="Original Keyboard Melody" 
            videoSrc="/videos/keyboard-melody.mp4"
            isFeatured={true}
          />
        </motion.div>
      </div>

      {/* PART 2: Friends Wishes & Predictions */}
      <div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
            <Clapperboard size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold">Voices of Love</h2>
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
              transition={{ delay: index * 0.2 }} // Staggers the cards flying in
            >
              <VideoPolaroid 
                title={vid.title} 
                subtitle={vid.subtitle} 
                videoSrc={vid.src} 
              />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}