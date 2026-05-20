import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CONCEPTS, ConceptId } from './types';
import ConceptPresentation from './components/ConceptPresentation';
import ViralLandingPage from './components/ViralLandingPage';
import ShopifyThemeHub from './components/ShopifyThemeHub';
import { Sparkles, Crown, Leaf, Zap, Heart, LayoutTemplate, MonitorCheck, Code } from 'lucide-react';

export default function App() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>('tiktok');
  const [view, setView] = useState<'lab' | 'viral' | 'shopify'>('viral');

  const icons = {
    tiktok: Zap,
    luxury: Crown,
    minimal: Leaf,
    genz: Sparkles,
    premium: Heart,
  };

  if (view === 'viral') {
    return (
      <div className="relative">
        <ViralLandingPage />
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col sm:flex-row gap-3">
          <button 
            type="button"
            onClick={() => setView('lab')}
            className="bg-black text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-transform border border-neutral-800 cursor-pointer"
          >
            <LayoutTemplate size={14} /> Design Concepts Lab
          </button>
          <button 
            type="button"
            onClick={() => setView('shopify')}
            className="bg-neutral-900 border border-neutral-700 text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <Code size={14} className="text-pink-400" /> Shopify Theme Files
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setView('viral')} className="text-2xl font-[800] tracking-[-0.05em] font-bricolage text-black hover:opacity-80 transition-opacity">
              ModMingle<span className="text-[10px] align-top ml-0.5">®</span>
            </button>
            <div className="h-6 w-px bg-neutral-200 mx-2"></div>
            <h1 className="text-sm font-bold tracking-tight text-neutral-400 uppercase">
              {view === 'shopify' ? 'Shopify Theme Hub' : 'Design Lab'}
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {view === 'lab' && (
              <nav className="flex bg-neutral-100 p-1 rounded-2xl overflow-x-auto max-w-full">
                {(Object.keys(CONCEPTS) as ConceptId[]).map((id) => {
                  const Icon = icons[id];
                  const isActive = activeConcept === id;
                  return (
                    <button
                      key={id}
                      id={`nav-btn-${id}`}
                      onClick={() => setActiveConcept(id)}
                      className={`
                        flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap
                        ${isActive 
                          ? 'bg-white text-black shadow-sm' 
                          : 'text-neutral-500 hover:text-neutral-800'
                        }
                      `}
                    >
                      <Icon size={14} />
                      {CONCEPTS[id].name.split(' ')[0]}
                    </button>
                  );
                })}
              </nav>
            )}

            <button 
              type="button"
              onClick={() => setView('viral')}
              className="bg-[#FAFAFA] text-black border border-neutral-200 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm whitespace-nowrap hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <MonitorCheck size={16} className="text-pink-hot" /> Live Showcase
            </button>

            <button 
              type="button"
              onClick={() => setView(view === 'shopify' ? 'lab' : 'shopify')}
              className={`px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm whitespace-nowrap transition-colors cursor-pointer ${
                view === 'shopify' 
                  ? 'bg-black text-white hover:bg-neutral-800 border border-neutral-700' 
                  : 'bg-neutral-900 text-white hover:bg-black'
              }`}
            >
              {view === 'shopify' ? (
                <>
                  <LayoutTemplate size={16} /> Concepts Lab
                </>
              ) : (
                <>
                  <Code size={16} className="text-pink-400" /> Shopify Theme Code
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto relative p-4 md:p-8">
        <AnimatePresence mode="wait">
          {view === 'shopify' ? (
            <motion.div
              key="shopify-hub"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-[1400px] mx-auto w-full"
            >
              <ShopifyThemeHub />
            </motion.div>
          ) : (
            <motion.div
              key={activeConcept}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full"
            >
              <ConceptPresentation concept={CONCEPTS[activeConcept]} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-6 px-4 shrink-0">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2026 MODMINGLE. Built and structured for Shopify OS 2.0 (Dawn).</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Live Preview </span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> 100% Validated Liquid </span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span> High Energy Gen Z UX </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
