import { ConceptData } from '../types';
import { ShoppingBag, Menu, Search, Heart, Star, ArrowRight, Play, Instagram, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  concept: ConceptData;
}

export default function ShopifyFrame({ concept }: Props) {
  const isTiktok = concept.id === 'tiktok';
  const isLuxury = concept.id === 'luxury';
  const isMinimal = concept.id === 'minimal';
  const isGenz = concept.id === 'genz';
  const isPremium = concept.id === 'premium';

  // Base styles mapping
  const styles = {
    font: isTiktok ? 'font-sans' : isLuxury ? 'font-serif' : isMinimal ? 'font-mono' : isGenz ? 'font-bricolage' : 'font-serif',
    bg: isTiktok ? 'bg-black' : isLuxury ? 'bg-[#F9F6F1]' : isMinimal ? 'bg-[#E9EBE4]' : isGenz ? 'bg-[#FDFF00]' : 'bg-[#FAF9F6]',
    text: isTiktok ? 'text-white' : isLuxury ? 'text-[#1A1A1A]' : isMinimal ? 'text-[#3E4B43]' : isGenz ? 'text-black' : 'text-[#8B4513]',
    accent: isTiktok ? '#FF0050' : isLuxury ? '#C5A059' : isMinimal ? '#3E4B43' : isGenz ? '#BF40BF' : '#D2B48C',
    button: isTiktok ? 'rounded-full px-6 py-3 font-bold uppercase tracking-tighter italic' : 
            isLuxury ? 'border border-[#C5A059] px-8 py-3 text-xs uppercase tracking-[0.2em]' :
            isMinimal ? 'bg-[#3E4B43] text-white px-6 py-3 rounded' :
            isGenz ? 'bg-[#BF40BF] text-white px-6 py-3 border-b-4 border-black font-extrabold uppercase rounded-lg' :
            'bg-[#D2B48C] text-white px-6 py-3 rounded-full',
  };

  return (
    <div className={`min-h-full ${styles.bg} ${styles.text} ${styles.font} selection:bg-neutral-200`}>
      {/* Header */}
      <header className={`px-4 py-6 flex items-center justify-between sticky top-0 z-[60] ${isTiktok ? 'bg-black/90' : isGenz ? 'bg-[#FDFF00]' : 'bg-transparent'}`}>
        <Menu size={20} />
        <div className={`text-2xl font-[800] tracking-[-0.05em] font-bricolage ${isTiktok ? 'text-pink-hot' : isGenz ? 'scale-x-110' : ''}`}>
          ModMingle<span className="text-[10px] align-top text-black ml-0.5">®</span>
        </div>
        <div className="flex gap-4">
          <Search size={20} />
          <ShoppingBag size={20} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {isTiktok && (
          <div className="pt-10 px-6 pb-20">
            <div className="flex flex-col gap-4">
              <span className="bg-[#FF0050] text-xs font-black inline-block px-3 py-1 self-start italic uppercase">The Confidence Hack</span>
              <h1 className="text-6xl font-black tracking-[-0.03em] leading-[0.85] font-bricolage">
                Last<br/>Minute<br/><span className="text-[#00F2EA]">Rescue.</span>
              </h1>
              <p className="text-neutral-400 text-sm max-w-[250px] leading-tight font-medium mt-2">Ultra-fine mist. Instant refresh. No white residue. Literally magic. 🪄</p>
              <button className={`${styles.button} bg-[#FF0050] self-start mt-4 shadow-[4px_4px_0px_#00F2EA]`}>Reset Now — $24</button>
            </div>
            <div className="mt-8 relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
               <img src="https://picsum.photos/seed/tiktok/600/800" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Viral product" referrerPolicy="no-referrer" />
               <div className="z-10 bg-white/10 backdrop-blur-md rounded-full p-6 border border-white/20">
                 <Play size={32} fill="white" />
               </div>
               <div className="absolute bottom-4 left-4 flex gap-2">
                 <div className="w-8 h-8 rounded-full border-2 border-[#FF0050]"></div>
                 <div className="text-xs">
                   <p className="font-bold">@beautyhacker</p>
                   <p className="opacity-70 italic">"Literally magic in a can 😭"</p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {isLuxury && (
          <div className="flex flex-col items-center pt-20 px-6 pb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-70">The New Standard</span>
            <h1 className="text-5xl font-light tracking-tight leading-tight mb-8">Ethereal Volume,<br/><span className="italic font-serif">Artfully Defined.</span></h1>
            <button className={styles.button}>Reserve the Experience</button>
            <div className="mt-16 w-full aspect-[4/5] bg-neutral-200 relative overflow-hidden">
                <img src="https://picsum.photos/seed/luxury/800/1000" className="w-full h-full object-cover" alt="Luxury Hair" referrerPolicy="no-referrer" />
            </div>
          </div>
        )}

        {isMinimal && (
          <div className="px-6 pt-16 pb-16">
            <div className="max-w-[280px]">
              <h1 className="text-5xl font-bold tracking-tighter mb-4 leading-none">Simply Refresh.</h1>
              <p className="text-neutral-500 mb-8 leading-relaxed">Plants, not plastics. Clean hair in 30 seconds. No residue, just results.</p>
              <button className={styles.button}>Shop the Essential</button>
            </div>
            <div className="mt-12 aspect-[1/1] bg-neutral-50 p-8 rounded-3xl">
               <img src="https://picsum.photos/seed/minimal/800/800" className="w-full h-full object-contain mix-blend-multiply" alt="Minimal Product" referrerPolicy="no-referrer" />
            </div>
          </div>
        )}

        {isGenz && (
          <div className="px-6 pt-10 pb-20">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#BF40BF] rounded-full flex items-center justify-center text-white font-black rotate-12 -z-0">3rd DAY</div>
              <h1 className="text-7xl font-[800] leading-[0.8] mb-6 relative z-10 font-bricolage italic">LAZY<br/>GIRL<br/>HACK.</h1>
              <p className="font-bold text-lg mb-8 leading-tight">No wash? No problem. ✨</p>
              <button className={styles.button}>Grab the fix</button>
            </div>
            <div className="mt-10 border-4 border-black p-4 bg-white rotate-2 hover:rotate-0 transition-transform">
               <img src="https://picsum.photos/seed/genz/600/400" className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all" alt="Gen Z Style" referrerPolicy="no-referrer" />
            </div>
          </div>
        )}

        {isPremium && (
          <div className="px-6 pt-20 pb-16">
            <h1 className="text-5xl leading-tight mb-4">Elevate your <span className="italic">morning routine</span> with ease.</h1>
            <p className="text-neutral-500 mb-8">Crafted for the modern woman who values time and quality.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-t-full bg-neutral-100 overflow-hidden">
                <img src="https://picsum.photos/seed/lifestyle1/400/500" className="h-full w-full object-cover" alt="Lifestyle" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-end gap-4">
                <button className={`${styles.button} w-full text-xs uppercase tracking-widest`}>Explore</button>
                <div className="aspect-square rounded-xl bg-neutral-100 overflow-hidden">
                  <img src="https://picsum.photos/seed/lifestyle2/400/400" className="h-full w-full object-cover" alt="Product" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Social Proof / Trust Bar */}
      <section className={`py-8 px-4 border-y ${isTiktok ? 'border-[#00F2EA]/20 bg-black' : 'border-neutral-100'}`}>
        <div className="flex justify-around items-center opacity-70">
           {['VOGUE', 'ELLE', 'ALLURE'].map(m => (
             <span key={m} className={`text-xs font-bold ${isTiktok ? 'italic' : 'tracking-[0.2em]'}`}>{m}</span>
           ))}
        </div>
      </section>

      {/* Product Display / Collections */}
      <section className="py-16 px-6">
        <div className="flex justify-between items-end mb-8">
           <h2 className={`text-2xl ${isTiktok ? 'font-black italic uppercase italic uppercase' : 'font-light'} font-bricolage`}>Last-Minute Rescue</h2>
           <span className="text-xs uppercase tracking-wider underline">Shop All</span>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hidden">
           {[1, 2].map(i => (
             <div key={i} className="min-w-[220px] shrink-0">
               <div className={`aspect-[4/5] mb-4 overflow-hidden ${isTiktok ? 'rounded-2xl bg-neutral-900' : isLuxury ? 'bg-white' : isGenz ? 'border-2 border-black p-2 bg-white' : 'rounded-3xl'}`}>
                 <img src={`https://picsum.photos/seed/prod${i}/400/500`} className="w-full h-full object-cover" alt="Product" referrerPolicy="no-referrer" />
               </div>
               <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">Dry Shampoo Spray</h3>
                    <p className="text-xs opacity-60">Signature Fragrance</p>
                  </div>
                  <p className="font-bold">$28</p>
               </div>
               <button className="w-full mt-4 py-2 border border-neutral-200 text-xs rounded-lg uppercase tracking-wider hover:bg-neutral-50">Quick Add</button>
             </div>
           ))}
        </div>
      </section>

      {/* Unique Sections */}
      {isTiktok && (
        <section className="py-16 px-4 bg-[#00F2EA] text-black">
           <h2 className="text-4xl font-black italic uppercase leading-none mb-4">Results Speak Louder</h2>
           <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[9/16] bg-black rounded-xl border-2 border-white"></div>
              <div className="aspect-[9/16] bg-black rounded-xl border-2 border-white"></div>
           </div>
        </section>
      )}

      {isLuxury && (
        <section className="py-20 px-8 text-center bg-white">
           <span className="text-[10px] uppercase tracking-[0.4em] block mb-6">The Ritual</span>
           <h2 className="text-3xl font-light mb-8">How to Achieve Perfection.</h2>
           <div className="space-y-10 text-left">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex gap-6 items-start border-l border-neutral-100 pl-6 pb-6">
                   <span className="text-[#C5A059] font-serif text-2xl italic">0{s}</span>
                   <p className="text-sm leading-relaxed opacity-80">Gently shake the canister to activate our weightless mineral formula.</p>
                </div>
              ))}
           </div>
        </section>
      )}

      {isGenz && (
        <section className="py-16 px-6">
           <div className="bg-[#BF40BF] text-white p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000]">
              <h2 className="text-3xl font-black mb-4">Join the Club! ✌️</h2>
              <p className="mb-6 font-bold">Get 10% off your first haul. No spam, only vibez.</p>
              <input type="text" placeholder="Email here..." className="w-full p-4 rounded-xl text-black font-bold mb-4 border-2 border-black" />
              <button className="w-full py-4 bg-black text-white font-black uppercase rounded-xl">LFG!</button>
           </div>
        </section>
      )}

      {/* Footer Simulation */}
      <footer className={`py-12 px-6 border-t ${isTiktok ? 'border-[#00F2EA]/20' : 'border-neutral-100'} mt-10`}>
         <div className="flex flex-col gap-8 opacity-60">
            <div className={`text-lg font-black ${isTiktok ? 'italic uppercase tracking-tighter' : ''}`}>MODMINGLE</div>
            <div className="grid grid-cols-2 gap-4 text-xs">
               <ul className="space-y-2">
                  <li>Shop</li>
                  <li>Our Story</li>
                  <li>Sustainability</li>
               </ul>
               <ul className="space-y-2">
                  <li>Terms</li>
                  <li>Shipping</li>
                  <li>Contact</li>
               </ul>
            </div>
            <div className="flex gap-4">
               <Instagram size={18} />
               <Zap size={18} />
               <Heart size={18} />
            </div>
         </div>
      </footer>
    </div>
  );
}
