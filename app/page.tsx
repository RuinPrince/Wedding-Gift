"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Gift, Lock } from 'lucide-react';

import { TimelineSection } from '../components/TimelineSection'; // Adjust path if needed

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

// --- 1. THE LOGIN SCREEN ---
const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const u = username.toLowerCase().trim();
    const p = password.toLowerCase().trim();

    if ((u === 'pattuh' && p === 'potato') || (u === 'potato' && p === 'pattuh')) {
      setError(false);
      onLogin(); // Trigger the unlock function!
    } else {
      setError(true); 
    }
  };

  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#FFF5F7] overflow-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        nav, header, [class*="nav"] { display: none !important; }
        body { padding-top: 0 !important; }
      `}} />

      <FloatingHearts />
      
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-200/40 rounded-full filter blur-[100px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-300/30 rounded-full filter blur-[120px] md:blur-[150px] pointer-events-none z-0" />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: error ? [-10, 10, -10, 10, 0] : 0 }}
        exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: error ? 0.4 : 0.5 }}
        className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_rgb(255,192,203,0.3)] mx-4"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4 shadow-inner border border-pink-200">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-black text-slate-800">Unlock Our Story</h1>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm font-medium">Enter your details to view exclusive memories.</p>
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Username</label>
            <input 
              type="text" 
              placeholder="Enter your username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(false); }}
              required
              className={`w-full px-4 py-3 sm:py-4 text-sm sm:text-base bg-pink-50/50 border-2 rounded-xl focus:outline-none focus:bg-white transition-colors text-slate-700 ${
                error ? 'border-red-400 focus:border-red-500' : 'border-pink-100 focus:border-pink-400'
              }`}
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Secret Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              required
              className={`w-full px-4 py-3 sm:py-4 text-sm sm:text-base bg-pink-50/50 border-2 rounded-xl focus:outline-none focus:bg-white transition-colors text-slate-700 ${
                error ? 'border-red-400 focus:border-red-500' : 'border-pink-100 focus:border-pink-400'
              }`}
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center mt-2">
              Oops! Incorrect username or password.
            </p>
          )}

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-2 sm:mt-4 py-3 sm:py-4 bg-slate-800 text-white text-sm sm:text-base font-bold uppercase tracking-widest rounded-xl shadow-[0_5px_0_rgb(30,41,59)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(30,41,59)] transition-all"
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
};

// --- 2. THE MAIN HOMEPAGE CONTENT ---
const HomePageContent = () => {
  const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isMarried, setIsMarried] = useState(false);

  useEffect(() => {
    const weddingDate = new Date("2026-05-18T09:30:00").getTime(); 
    
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
    <main className="min-h-screen flex flex-col items-center pb-20 px-4 sm:px-6 relative bg-[#FFF5F7] text-slate-900">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingHearts />
        
        <motion.div 
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-200/40 rounded-full filter blur-[100px] md:blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-5%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-300/30 rounded-full filter blur-[120px] md:blur-[150px]" 
        />
      </div>

      <div className="w-full relative z-10 flex-shrink-0 min-h-[20px] sm:min-h-[30px]"></div>

      {/* --- THE GREETING --- */}
      <div className="relative z-10 text-center max-w-4xl w-full px-2 mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-pink-500"
        >
          <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
          <Heart fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
          <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>

        <div className="relative inline-block mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-slate-800 leading-[1.1] tracking-tight relative z-10">
            <motion.span className="inline-block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Congratulations</motion.span> 
            <br />
            <motion.span className="inline-block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Pattuh</motion.span>{' '}
            <motion.span className="inline-block text-pink-400" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>&</motion.span>{' '}
            <motion.span className="inline-block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Potato!</motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="px-2"
        >
          <p className="text-base sm:text-lg text-slate-600 font-serif max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-pink-100 shadow-sm relative z-10">
            A messy, beautiful collection of your favorite things, comfort moments, and the little details that make you perfectly 'Us'.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative z-10 flex-shrink-0 min-h-[60px] sm:min-h-[100px]"></div>

      {/* --- THE STORY --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12 sm:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(244,114,182,0.25)" }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-[0_15px_40px_rgba(244,114,182,0.15)] rounded-3xl md:rounded-[2rem] overflow-hidden border border-pink-100 grid grid-cols-1 md:grid-cols-2 w-full transition-all duration-300"
        >
          <div className="flex flex-col justify-center items-center text-center p-8 sm:p-12 md:p-20 bg-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-pink-500 font-bold mb-4 sm:mb-6">Her Carefree Days</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-serif max-w-md">
              Harini, the cherished heart of her family, was happily lost in her third year of engineering. Amidst campus memories and canteen chats, marriage was the last thing on her mind. She always trusted her parents, knowing such milestones would only happen with complete comfort and her family's ultimate blessing.
            </p>
          </div>

          <div className="bg-[#FAE8F0] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden group p-4 sm:p-8">
            <motion.div whileHover={{ scale: 1.05, rotate: 3 }} transition={{ type: "spring", bounce: 0.6 }} className="w-full h-full">
               <img 
                  src="/photos/harini.jpeg" 
                  alt="Harini" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(244,114,182,0.25)" }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-[0_15px_40px_rgba(244,114,182,0.15)] rounded-3xl md:rounded-[2rem] overflow-hidden border border-pink-100 grid grid-cols-1 md:grid-cols-2 w-full transition-all duration-300"
        >
          <div className="bg-[#F8E1E8] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden order-last md:order-first group p-4 sm:p-8">
             <motion.div whileHover={{ scale: 1.05, rotate: -3 }} transition={{ type: "spring", bounce: 0.6 }} className="w-full h-full">
               <img 
                  src="/photos/bharath.png" 
                  alt="Bharath" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center items-center text-center p-8 sm:p-12 md:p-20 bg-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-pink-500 font-bold mb-4 sm:mb-6">His Open Roads</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-serif max-w-md">
              On the other side was Bharath, a carefree businessman prioritizing work and solo rides. His response to marriage was always, “Why settle early?” But his fierce independence melted away the moment he fell for Harini. What began as an unexpected romance quickly became the love of a lifetime.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full relative z-10 flex-shrink-0 min-h-[80px] sm:min-h-[150px]"></div>

      {/* --- INSERTED TIMELINE --- */}
      <div className="w-full px-2 sm:px-0">
        <TimelineSection />
      </div>

      <div className="w-full relative z-10 flex-shrink-0 min-h-[60px] sm:min-h-[100px]"></div>

      {/* --- THE COUNTDOWN --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center mb-12 px-2 sm:px-0"
      >
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[3rem] shadow-[0_8px_30px_rgb(255,192,203,0.3)] border-2 border-pink-200 w-full text-center">
          
          <div className="relative flex items-center justify-center mb-8 sm:mb-10 w-full h-10 sm:h-12">
            <div className="absolute flex items-center justify-center gap-2">
              <div className="relative flex items-center justify-center">
                 <motion.div 
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-pink-400 rounded-full blur-sm"
                 />
                 <Calendar className="text-pink-500 relative z-10 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-pink-500 relative z-10 ml-1 sm:ml-2">
                {isMarried ? "Forever Since" : "Counting Down To Forever"}
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
            {Object.entries(timeSince).map(([unit, value], i) => (
              <motion.div 
                key={unit} 
                className="flex flex-col items-center w-full sm:min-w-[70px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }} 
                whileHover={{ scale: 1.05, y: -5 }} 
              >
                <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pink-50 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 shadow-inner border border-pink-100 cursor-default transition-colors hover:bg-pink-100 mx-auto">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-800">{value}</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-pink-400 uppercase">{unit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </main>
  );
};

// --- 3. MAIN APP CONTROLLER ---
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unlocked = sessionStorage.getItem('vaultUnlocked');
    if (unlocked === 'true') {
      setIsAuthenticated(true);
      // Failsafe: if they refresh the page and are already unlocked, 
      // we still tell the global music player they are authenticated.
      window.dispatchEvent(new Event('unlockVault')); 
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    sessionStorage.setItem('vaultUnlocked', 'true');
    
    // THIS IS THE MAGIC GLUE! 
    // This broadcasts a message to your new GlobalMusicPlayer component to start playing!
    window.dispatchEvent(new Event('unlockVault')); 
    
    setIsAuthenticated(true);
  };

  if (isAuthenticated === null) return null;

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* We pass the handleLoginSuccess function down here */}
          <LoginScreen onLogin={handleLoginSuccess} />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HomePageContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
}