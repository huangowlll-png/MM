import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Star, Zap, Play, Instagram, Heart, Menu, Search, ArrowRight, Share2, MessageCircle, MoreVertical } from 'lucide-react';
import { useRef } from 'react';

export default function ViralLandingPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen font-outfit selection:bg-pink-300">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-3">
        <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 lg:hidden" />
            <div className="text-3xl font-[800] tracking-[-0.05em] text-pink-hot font-bricolage leading-none">
              ModMingle<span className="text-[10px] align-top ml-0.5">®</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#shop" className="hover:text-pink-hot transition-colors">Shop</a>
            <a href="#benefits" className="hover:text-pink-hot transition-colors">The Hack</a>
            <a href="#reviews" className="hover:text-pink-hot transition-colors">Lazy Girl Club</a>
          </nav>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 hidden sm:block" />
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-pink-hot text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md lg:hidden">
        <button className="w-full glossy-button py-4 rounded-2xl text-white font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl">
          Shop Now — $24 <ArrowRight size={18} />
        </button>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,228,225,1),rgba(255,255,255,1))]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
            <div className="text-center lg:text-left z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-1 rounded-full text-xs font-black uppercase italic mb-6 sticker-shadow"
              >
                <Zap size={14} fill="black" /> Viral on TikTok
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.85] text-neutral-900 mb-6 uppercase font-bricolage"
              >
                Instant<br/>Confidence<br/> <span className="text-pink-hot">Reset.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-600 mb-8 max-w-md mx-auto lg:mx-0 font-medium leading-tight"
              >
                The ultimate <span className="text-pink-hot font-bold underline decoration-wavy">Lazy Girl Hack</span>. Ultra-fine mist for a last-minute rescue. No white residue, just volume. ✨
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex items-center gap-4"
              >
                <button className="glossy-button px-10 py-5 rounded-2xl text-white font-black uppercase tracking-widest text-lg">
                  Grab The Glow
                </button>
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" />
                     </div>
                   ))}
                   <div className="pl-6 flex flex-col justify-center">
                     <div className="flex gap-0.5 text-brand-yellow stroke-black stroke-[1px]">
                       {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">12.5k reviews</span>
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="relative flex justify-center">
              {/* Product Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-hot/10 blur-[100px] rounded-full animate-pulse"></div>
              
              <motion.div 
                style={{ scale }}
                className="relative z-10 w-full max-w-sm drop-shadow-[0_35px_35px_rgba(255,0,80,0.3)]"
              >
                {/* Product Packaging Image */}
                <div className="relative group">
                  <div className="bg-pink-hot rounded-[3rem] p-6 pt-12 text-center border-4 border-black sticker-shadow overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-brand-yellow/30 blur-3xl rounded-full"></div>
                    <h3 className="text-brand-yellow font-black text-4xl leading-tight mb-2 tracking-tighter uppercase italic">MODMINGLE</h3>
                    <div className="text-white font-black text-sm uppercase tracking-widest mb-8 opacity-80 italic">The Clean Mist</div>
                    
                    <div className="relative aspect-[3/4] mb-8 flex justify-center">
                       {/* SVG Bottle Representation */}
                       <svg width="120" height="240" viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                          <rect x="20" y="50" width="80" height="180" rx="40" fill="white" />
                          <circle cx="60" cy="40" r="30" fill="#FDFF00" />
                          <rect x="55" y="10" width="10" height="30" rx="5" fill="#FDFF00" />
                          <text x="60" y="150" textAnchor="middle" fill="#FF0050" fontSize="14" fontWeight="900" transform="rotate(-90 60 150)">MODMINGLE</text>
                       </svg>
                    </div>
                    
                    <div className="text-brand-yellow font-black text-xs uppercase tracking-widest italic">Hair Dry Shampoo</div>
                  </div>
                  
                  {/* Decorative Stickers */}
                  <div className="absolute -top-6 -right-6 bg-brand-yellow border-2 border-black px-4 py-2 rounded-xl text-black font-black rotate-12 sticker-shadow text-xs uppercase z-20">No Residue</div>
                  <div className="absolute bottom-6 -left-10 bg-white border-2 border-black px-4 py-2 rounded-xl text-black font-black -rotate-6 sticker-shadow text-xs uppercase z-20">Salon Quality</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <div className="bg-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-pink-hot">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center"
          >
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="text-white text-2xl font-black uppercase flex items-center gap-4 font-bricolage">
                <span>Ultra Fine Mist</span>
                <Heart size={24} fill="#FF0050" className="text-pink-hot" />
                <span className="text-neutral-600">Confidence Reset</span>
                <Zap size={24} fill="#FDFF00" className="text-brand-yellow" />
                <span className="text-pink-hot italic">3rd Day Hair Save</span>
                <Star size={24} fill="white" className="text-white" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 font-bricolage leading-none">The <span className="text-pink-hot">Lazy Girl</span> Daily Routine</h2>
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-sm italic">Confidence in 30 seconds</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Fine Mist Tech', desc: 'Ultra-fine spray that absorbs oil without the white cloud.', icon: Zap, color: 'bg-brand-yellow', visual: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80' },
                { title: 'On-The-Go Fix', desc: 'The perfect last-minute rescue for 3rd day hair confidence.', icon: Star, color: 'bg-pink-soft' },
                { title: 'No White Residue', desc: 'Actually cleans roots leaving zero trace behind. ✨', icon: Heart, color: 'bg-pink-hot' },
                { title: 'Instant Refresh', desc: 'Refresh in 30 seconds for that fresh-out-of-shower vibe.', icon: MoreVertical, color: 'bg-brand-yellow' }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] border-4 border-black sticker-shadow bg-white text-center flex flex-col items-center group overflow-hidden relative"
                >
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 border-2 border-black rotate-3 group-hover:rotate-0 transition-transform relative z-10 overflow-hidden`}>
                    {benefit.visual ? (
                      <img src={benefit.visual} alt={benefit.title} className="w-full h-full object-cover" />
                    ) : (
                      <benefit.icon size={32} className="text-black" />
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold uppercase mb-2 italic tracking-tight relative z-10">{benefit.title}</h3>
                  <p className="text-neutral-500 font-medium leading-tight relative z-10">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TikTok Layout Review Section */}
        <section id="reviews" className="py-24 bg-pink-soft/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
               <div>
                  <div className="inline-block bg-pink-hot text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rotate-[-2deg] mb-4">Real Reviews</div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none">As Seen On <br/><span className="text-pink-hot">The FYP</span></h2>
               </div>
               <button className="flex items-center gap-2 font-black uppercase tracking-widest text-sm pb-2 border-b-2 border-pink-hot">
                 Watch More <Play size={14} fill="currentColor" />
               </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { user: '@haleybeauty', likes: '124k', text: 'Literally saved my hair during finals week! 😭💅', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80' },
                { user: '@glowupwithme', likes: '56k', text: 'NOT THE NO WHITE CAST?! ModMingle is elite. ☁️', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
                { user: '@hairstylist_lea', likes: '89k', text: 'Professional results in literal seconds. I\'m obsessed.', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80' },
                { user: '@skincarestan', likes: '42k', text: 'The scent is EVERYTHING. Fresh hair always. 🌸', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' }
              ].map((review, i) => (
                <div key={i} className="relative group aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-2 border-white">
                  <img src={review.img} alt="TikTok" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* TikTok UI Elements */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                      </div>
                      <div className="bg-pink-hot text-white rounded-full w-5 h-5 flex items-center justify-center -mt-2 text-xs font-bold">+</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Heart size={24} className="text-white fill-current" />
                      <span className="text-white text-[10px] font-bold">{review.likes}</span>
                    </div>
                    <MessageCircle size={24} className="text-white fill-current" />
                    <Share2 size={24} className="text-white fill-current" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-14 text-white z-20">
                     <p className="font-bold text-sm mb-1">{review.user}</p>
                     <p className="text-xs leading-tight opacity-90">{review.text}</p>
                     <div className="flex items-center gap-2 mt-2 opacity-60">
                        <div className="w-3 h-3 bg-white rounded-full animate-spin"></div>
                        <span className="text-[10px] italic">Original Sound — ModMingle</span>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients / Science */}
        <section id="ingredients" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="aspect-square bg-brand-yellow rounded-full border-4 border-black sticker-shadow overflow-hidden p-12">
                   <div className="relative h-full w-full flex items-center justify-center">
                      <div className="absolute inset-0 border-[20px] border-white/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" alt="Formula" className="rounded-full h-full w-full object-cover border-4 border-white" />
                   </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-hot rounded-full flex items-center justify-center text-white border-4 border-black sticker-shadow rotate-12 text-center p-4">
                   <span className="font-black italic uppercase leading-none text-xl">100% Vegan</span>
                </div>
             </div>
             
             <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 leading-none">Clean for you,<br/><span className="text-pink-hot italic font-extrabold text-6xl">Clean for planet.</span></h2>
                <div className="space-y-6">
                   {[
                     { name: 'Arctic Cloudberry', role: 'Vitamin Boost & Scent' },
                     { name: 'White Clay', role: 'Natural Oil Absorber' },
                     { name: 'Silk Proteins', role: 'Smooth Texture & Shine' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-4 rounded-2xl border-2 border-neutral-100 bg-neutral-50 hover:border-pink-hot transition-colors group">
                        <div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center font-black italic text-pink-hot">0{i+1}</div>
                        <div>
                           <h4 className="font-black uppercase italic text-lg tracking-tight group-hover:text-pink-hot transition-colors">{item.name}</h4>
                           <p className="text-neutral-500 font-medium text-sm italic">{item.role}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Newsletter / Club */}
        <section className="py-24 bg-pink-hot">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <div className="glass-card p-12 rounded-[3rem] border-white/40">
                <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">Join the <span className="text-brand-yellow">Mingle Club</span></h2>
                <p className="text-white/80 font-bold uppercase tracking-[0.2em] mb-8 italic">Get 15% off your first haul ✨</p>
                <form className="flex flex-col sm:flex-row gap-4">
                   <input 
                     type="email" 
                     placeholder="your-email@bestie.com" 
                     className="flex-1 bg-white border-4 border-black p-5 rounded-2xl font-bold italic placeholder:text-neutral-300 focus:outline-none"
                   />
                   <button className="bg-brand-yellow border-4 border-black px-8 p-5 rounded-2xl font-black uppercase italic tracking-widest text-black sticker-shadow hover:scale-105 active:scale-95 transition-transform">
                      I'm in! 💖
                   </button>
                </form>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 py-20 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-4xl font-black italic tracking-tighter text-pink-hot mb-6 uppercase">MODMINGLE</div>
            <p className="text-neutral-400 font-medium italic mb-8 max-w-xs leading-tight">Founded by group of beauty geeks who were tired of washing hair. Refresh on your terms.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition-colors"><Instagram size={20} /></div>
              <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition-colors"><Zap size={20} /></div>
              <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 cursor-pointer transition-colors"><Share2 size={20} /></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-pink-hot">Shop</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gift Bundles</li>
              <li className="hover:text-white transition-colors cursor-pointer">Subscriptions</li>
              <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-pink-hot">Support</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Track Order</li>
              <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 italic">
          <p>© 2026 MODMINGLE BEAUTY. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
