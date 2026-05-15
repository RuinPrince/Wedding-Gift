'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Lock, KeyRound } from 'lucide-react'; 

interface Letter {
  id: string;
  sender: string;
  content: string;
  date: string;
}

const lettersData: Letter[] = [
  {
    id: '1',
    sender: 'Aswin',
    date: 'May 15, 2026',
    content: "Dear, Mr. Bharath & Mrs. Harini, unga future life full ah love, happiness, understanding, cute memories oda neraiya azhaga irukum.\n\nNeenga enga ponaalum andha idathuku happiness kondu pora maari, unga married life um forever smiles, peace and endless laughter oda irukum.\n\nHave a long, Healthy & Happy MARRIED LIFE ❤"
  },
  {
    id: '2',
    sender: 'Ilakkiya',
    date: 'May 15, 2026',
    content: "Ilakks josiyam:\n\n• Kalyanam aana aprm bro oda most used dialogue:\n  “Sari ma… Nee solradhu correct dhan” \n\n• Ippo varaikkum avane king.. kalyanam aprm remote, menu, fan speed ellam wife control \n\n• Single ah irukkumbodhu 2AM vara gaming.. kalyanam aprm 10:01 ku\n  “Thoongalaya innum?” interrogation \n\n• Bro oda future la biggest fear:\n  “Enna difference theriyudha indha rendu saree kum?” nu keta moment. \n\n• Inimey avan salary varadhu avan account ku illa…\n  “OUR ACCOUNT” ku \n\nIndha maari neraiya chinna chinna moments oda unga marriage eppovume alaga irukum :)\nHAVE A HAPPY MARRIED LIFE"
  },
  {
    id: '3',
    sender: 'Mahalakshmi',
    date: 'May 15, 2026',
    content: "Dear Bharath Anna & Elli,\nUngaloda kalyanam just rendu peru serra function illa… rendu hearts, rendu families, rendu beautiful journeys serra oru pudhu beginning.\nOru simple proposal la start aana indha journey, iniku ivlo azhaga “forever” ah amaari irukudhu.\n\nFrom awkward “Hi” messages, hidden smiles, small talks, endless waiting to finally stepping & standing beside each other as life partners. Every phase of your story feels beautiful in its own way.\nUnga story la irundha understanding, respect, friendship and silent care dhan unga relationship ah ivlo strong ah maathiruku.\n\nThine life la enna phase vandhalum, ippo varaikkum orutharuku oruthar irundha maari eppovume kai vidama irunga.\nLaugh together, Fight & make up together, Travel together, Grow together & Most importantly..\n\nAlways choose each other every single day.\nHappy Married Life Bharath Anna ❤ Haruni"
  },
  {
    id: '4',
    sender: 'Nithesh',
    date: 'May 15, 2026',
    content: "Dear Bharath and Harini,\nNeenga rendu perum serndhu vaazha pora journey romba special. Marriage life la konjam ego and misunderstandings varaalam, ana love dhaye overcome pannum. Rendu perum support ah irundha relationship innum strong aagum.\n\nFuture la happy family life and peace adhigama irukum.\nFuture layum ungaloda bond long lasting and unforgettable ah irukum.\n\nWishing you both a Happy Married Life :)"
  },
  {
    id: '5',
    sender: 'M. Nagaharine',
    date: 'May 15, 2026',
    content: "Dear eli,\nI still can’t believe your marriage day has arrived. From all the memories, laughter, silly talks, and moments we shared together, seeing you start this beautiful new chapter makes me both emotional and happy. You deserve a life filled with endless love, peace, care and happiness. I pray that your married life becomes the most beautiful journey, filled with understanding, trust, and unforgettable memories ♡\n\nNo matter where life takes us, you will always remain a special person in my heart. Thank you for being such a little and cute friend and for all the beautiful moments we shared together.\n\nAs you step into this new life, smile more, love deeply, and stay the same kind hearted Harini I always know, wishing you and your partner a lifetime full of joy, success, laughter and togetherness.\n\nHappy Married Life, Harini ♡\n\nMay your new journey be filled with endless smiles, cute fights, happy memories, and unconditional love. ♡\nStay blessed, stay happy."
  },
  {
    id: '6',
    sender: 'Madhan',
    date: 'May 15, 2026',
    content: "be patience without looking into these stuffs, Right?\n\nDiving into topic,\n~ I know he will take care of you, but the fear falls overcome with foods, check body weight regularly don’t become like a pumpkin queen, Be strong, stay fit. What Mr. Bharath you can get it, Aren’t you?\n\n~ uff! After Marriage note the words “After Marriage”, so, All permissions are granted from family side then there is no sophistication to stick together, go out independently by adhering to family members.\n\n~ suddenly text, phone call duration decreases, meanwhile face-to-face conversation, Adigal, udhaigal increases\n\n~ soon she’ll become customer care for one adult man.\n\n~ Mapla sir ippo mass dha... apm gas cylinder thookra class dha......"
  },
  {
    id: '7',
    sender: 'Deiva',
    date: 'May 15, 2026',
    content: "Dear Harini & Bharath anna,\nThis is your official “After marriage prediction letter” from your loving bestie.\nFirst of all... Congratulations to the beautiful couple who are about to start the most exciting, funny, emotional, and unforgettable journey together.\n\nHere are my predictions for your marriage life.\nAfter marriage, Bharath anna will definitely act strong during argument.... but Harini’s single look will be enough to end the discussion.\nYour camera gallery will slowly transform into: selfies, food pictures, random candid moments, and thousands of “Who clicked this?” photos.\nI predict that one person will always ask “What shall we eat?” and the other person will reply “Anything is fine,” while rejecting every suggestion.\n\nLate-night talks will become daily therapy sessions. Small fights will become funny memories. Simple moments like tea time, shopping, travelling, and sitting silently together will become your happiest memories.\nBharath anna, yourself: soon your phone storage, wallet, weekends, and even blanket space will officially belong to Harini.\nAnd Harini.... No matter how much you pretend to be angry, Bharath anna will still find ways to make you smile.\n\nLife will not always be perfect. There will be stress, responsibilities, and difficult days. But my biggest prediction is this: No matter what happens, you both will always choose each other again and again.\n\nMay your home always be filled with laughter, understanding, peace, travel plans, midnight snacks, and unlimited love.\nAnd one more prediction: Whenever you feel low, confused, angry, stressed, or just want to escape from everything.... one call is enough. We will always be there for you. Distances may change, life will become busy, but our friendship will never change. Even after marriage, you are still our Harini, the same person we laughed with, cried with and created memories with.\n\nSo live happily, love deeply, fight cutely, travel more, and create a beautiful life together.\nFinal Prediction Result: Harini + Bharath anna = lifetime partnership with full love, comedy, care and beautiful memories."
  },
  {
    id: '8',
    sender: 'Divya',
    date: 'May 15, 2026',
    content: "Kalyanathuku aprm unga life romba happy ah and peaceful ah irukkum. Rendu perum nalla understanding oda ella situations um handle pannuveenga nu nenaikren. Within 3 yrs la neenga rendu perum sendhu own business start panniduveenga nu nenaikren and adhu nalla success aagr. Ellarum unga growth pathi proud ah pesuvaanga.\n\nIpo dha main picture... adha unga rendu per life kulla third person ah oru boy baby varuvaan. Aprm unga rendu perukum avana epdi samalikradhu nu theriyama oru maari cute ah handle pannuveenga.\n\nAprm neenga rendu perum sendhu neraiya travel panni memories nu unga life full ah neraiya beautiful moments ah irukkum.\n\nLast ah years pass aanalum unga love and care konjam kooda koraiyaadhu. Old age la kooda rendu perum same happiness oda life enjoy pannuveenga. Aprm valakan pola ungakulla cute aana fights lam nadakum, Harini vandhu anna va meratuva aprm anna vandhu sari ma nu solradhu dha crt uh nu solradhum indha maari moments lam life long nadakum.\n\nIdha neenga rendu perum epo open panni padiping nu ennaku crt ah therla but open pannapo idhu vandhu ungaluku surprise ah irukum. Seri aprm kadaisiya life long rendu perum happy ah irunga unga aasai padadhalam kandipa nadakum adhuku ennoda best wishes."
  }
];

// --- THE SECRET CODE ---
const SECRET_CODE = "MoonPrincess"; 

export default function LettersSection() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  // Safely check sessionStorage on mount to avoid hydration errors
  useEffect(() => {
    setIsMounted(true);
    if (sessionStorage.getItem('lettersUnlocked') === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase().trim() === SECRET_CODE) {
      setIsUnlocked(true);
      sessionStorage.setItem('lettersUnlocked', 'true');
      setError(false);
    } else {
      setError(true);
      setCode(''); // Clear input on error
    }
  };

  // Prevent rendering until hydration is complete
  if (!isMounted) return null;

// --- THE LOCKED STATE UI ---
  if (!isUnlocked) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4 relative z-10 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md bg-white rounded-3xl border border-pink-100 p-8 md:p-10 text-center shadow-xl overflow-hidden"
        >
          {/* Clean, smooth top gradient instead of the broken circle */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pink-50 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Centered Lock Icon */}
            <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-pink-200">
              <Lock size={28} strokeWidth={2} />
            </div>
            
            <h2 className="text-3xl font-serif font-black text-slate-800 mb-2">Top Secret</h2>
            <p className="text-slate-500 mb-8 text-sm px-2">
              These letters are meant only for your eyes. Enter the secret code to unlock.
            </p>

            <form onSubmit={handleUnlock} className="w-full space-y-5">
              
              {/* FIX: Foolproof input wrapper for the Key icon */}
              <div className="relative flex items-center w-full">
                <input 
                  type="password" 
                  placeholder="Enter secret code..."
                  value={code}
                  onChange={(e) => { setCode(e.target.value); setError(false); }}
                  className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-2 rounded-xl focus:outline-none focus:bg-white text-slate-700 font-medium transition-colors ${
                    error ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-pink-400'
                  }`}
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm font-bold m-0">
                  Oops! Incorrect code. Try again.
                </p>
              )}

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-2 py-4 bg-slate-800 text-white font-bold uppercase tracking-widest text-sm rounded-xl shadow-[0_5px_0_rgb(30,41,59)] hover:translate-y-[2px] hover:shadow-[0_3px_0_rgb(30,41,59)] transition-all"
              >
                Unlock Letters
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- THE UNLOCKED STATE UI (Your original code) ---
  return (
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      
      {/* Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-pink-100 text-pink-500 rounded-full mb-6">
            <Mail size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-4">
            <Heart className="text-pink-500 fill-pink-500 hidden md:block" size={36} />
            Letters of Love
            <Heart className="text-pink-500 fill-pink-500 hidden md:block" size={36} />
          </h2>
          
          <p className="text-slate-500 max-w-lg mx-auto">
            Heartfelt messages from the people who know us best.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {lettersData.map((letter, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 2) * 0.15 }} 
            key={letter.id} 
            className="w-full bg-[#EFEFEF] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] border-x-4 border-t-8 border-b-4 border-slate-800 p-8 shadow-xl relative flex flex-col hover:-translate-y-1 transition-all duration-300 min-h-full"
          >
            <div className="text-right text-sm text-slate-500 mb-6 font-serif font-bold border-b-2 border-slate-300 pb-3">
              {letter.date}
            </div>
            
            <div className="text-slate-900 font-serif text-lg leading-relaxed mb-10 flex-grow">
              {letter.content.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            
            <div className="text-right mt-auto pt-4 border-t border-slate-300/50">
              <span className="font-medium text-slate-500 text-sm mr-2 italic">With love,</span>
              <br />
              <span className="text-xl font-serif font-black tracking-widest text-slate-900 uppercase mt-1 inline-block">
                {letter.sender}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}