"use client";

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 relative">
      {/* Decorative background tape/blobs can go here if desired */}
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(255,192,203,0.3)] rotate-[-1deg]"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-500 rounded-full mb-4 shadow-inner border border-pink-200">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-serif font-black text-slate-800">Unlock the Vault</h1>
          <p className="text-slate-500 mt-2 text-sm font-medium">Enter your details to view exclusive memories.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="pattuh@potato.com"
              className="w-full px-4 py-3 bg-pink-50/50 border-2 border-pink-100 rounded-xl focus:outline-none focus:border-pink-400 focus:bg-white transition-colors text-slate-700"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Secret Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-pink-50/50 border-2 border-pink-100 rounded-xl focus:outline-none focus:border-pink-400 focus:bg-white transition-colors text-slate-700"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-4 bg-slate-800 text-white font-bold uppercase tracking-widest rounded-xl shadow-[0_5px_0_rgb(30,41,59)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(30,41,59)] transition-all"
          >
            Sign In
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors">
            Forgot password? (Ask Potato)
          </a>
        </div>
      </motion.div>
    </main>
  );
}